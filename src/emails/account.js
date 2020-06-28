
const sgMail= require('@sendgrid/mail')


sgMail.setApiKey(process.env.SENDGRID_API_KEY)



const sendWelcomeEmail= (email, name) =>{
    sgMail.send({
        to: email,
        from: 'vikashkumar919964@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Hey ${name}, Welcome to Task App. let me know how you get along with the app.`

    }).then(() =>{
        console.log('Message sent')
    }).catch((e) =>{
        console.log(e.response.body)
    })
}


const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from:'vikashkumar919964@gmail.com',
        subject: 'Sorry to see you go!',
        text: `Goodbye, ${name}. I hope to see you back sometime soon`
    }).then(() =>{
        console.log('Message sent')
    }).catch((e) =>{
        console.log(e.response.body)
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}