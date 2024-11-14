// const nodemailer = require('nodemailer')
// const sendgridTransport = require('nodemailer-sendgrid-transport');


// const transporter = nodemailer.createTransport(
//     sendgridTransport({
//         auth: {
//             api_key: process.env.API_SENDGRID
//         },
//     })
// )

// const sendEmailController = (req,res) => {
//     try{
//         const {name, number, email, message} = req.body 
//         if(!name || !number || !email || !message){
//             return res.status(500).send({ success:false, message:'Please Provide All Fields'})
//         }

//         transporter.sendMail({
//             to:"kirtirasinh0804@gmail.com",
//             from:"kirtirajsinh0808@gmail.com",
//             subject:"Message for you from Portfolio app",
//             html:`
//             <h5>Here's a message for you</h5>
//             <ul>
//                 <li> Name : ${name} </li>
//                 <li> Number : ${number} </li>
//                 <li> Email : ${email} </li>
//                 <li> Message : ${message} </li>
//             </ul>`
//         })
//         return res.status(200).send({ success:true, message:'Message Sent Successfully',})
//     }catch(error){
//         console.log(error)
//         return res.status(500).send({ success:false, message:'Send Email API Error', error})
//     }
// }

// module.exports = { sendEmailController }


const axios = require('axios');

const sendEmailController = async (req, res) => {
    try {
        const { name, number, email, message } = req.body;
        if (!name || !number || !email || !message) {
            return res.status(500).send({ success: false, message: 'Please Provide All Fields' });
        }

        const templateParams = {
            name: name,
            email: email,
            number: number,
            message: message
        };

        const response = await axios.post('https://api.emailjs.com/api/v1.0/email/send', {
            service_id: process.env.EMAILJS_SERVICE_ID,
            template_id: process.env.EMAILJS_TEMPLATE_ID,
            // private_key: process.env.EMAILJS_PRIVATE_KEY,
            user_id: process.env.EMAILJS_USER_ID,
            template_params: templateParams
        });

        return res.status(200).send({ success: true, message: 'Message Sent Successfully', response: response.data });
    } catch (error) {
        if (error.response) {
            console.error('Error response data:', error.response.data);
            return res.status(500).send({
                success: false,
                message: 'EmailJS API Error',
                error: error.response.data
            });
        } else {
            console.error('Error message:', error.message);
            return res.status(500).send({ success: false, message: 'Send Email API Error', error: error.message });
        }
    }
};

module.exports = { sendEmailController };
