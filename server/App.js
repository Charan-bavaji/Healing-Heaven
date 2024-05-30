const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = 3000;
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Store name,email,phone object
const Data = [];

app.post('/submit', (req, res) => {
    const { name, email, phone } = req.body;
    console.log(email);
   
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com', 
        port: 465, 
        secure: true,
        service: "gmail",
        auth: {
            user: 'charanbavaji7760@gmail.com',
            pass: 'wfycqktpzhkfjplg'
        }
    });

    // Define email options
    const mailOptions = {
        from: "charanbavaji7760@gmail.com",
        to: email,
        subject: "New Registration",
        text: "Successfully Registered to Pratiksha mental and health care"
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            res.status(500).send('Error sending email');
        } else {
            console.log('Email sent:', info.response);
            Data.push(...Data,{"name":name,"email":email,"phone":phone});
            res.status(200).send('Email sent successfully');
            console.log(Data);
        }
    });
});

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
