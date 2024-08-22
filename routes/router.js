const express = require('express');
const nodemailer = require('nodemailer');
const router = new express.Router();
require('dotenv').config();

router.post('/register', (req, res) => {
    const { email, number, name, message } = req.body;

    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD
            }
        });

        const mailOptions = {
            
            to:process.env.TO_MAIL,
            subject:email,
            html: `<hr><hr><br>
                    <h2><b>Mobile :</b>${number}</h2><br><br><hr><hr><br>
                   <h2><b>Name : </b>${name}<h2><br><br><hr><hr><br>
                    <b>Messages : </b>${message} `
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log('Error' + error);
                res.status(500).json({ status: 500, error: 'Failed to send email' });
            } else {
                console.log('Email sent: ' + info.response);
                res.status(201).json({ status: 201, info });
            }
        });
    } catch (error) {
        console.log("Error" + error);
        res.status(500).json({ status: 500, error: 'Internal Server Error' });
    }

    
});

module.exports = router;
