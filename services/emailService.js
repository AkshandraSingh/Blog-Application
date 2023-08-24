const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: process.env.SENDER_EMAIL,
        pass: process.env.EMAIL_PASS,
    }
});

const htmlContent = `
        <!DOCTYPE html>
        <html lang="en">

        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
                * {
                    text-align: center;
                }

                h1 {
                    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
                }

                p {
                    width: 488px;
                    margin-top: 22px;
                    margin: auto;
                    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
                    font-weight: bold;
                }
            </style>
        </head>

        <body>
            <h1>Welcome to Blog Application</h1>
            <p>Thanks For Creating Blog</p>
            <br>
            <p>Awesome job on creating your new blog! 🎉📝 Your thoughts and ideas are now ready to inspire the world. Keep up
                the
                great work, and remember – every post is a step toward something amazing.</p>
        </body>

        </html>
`
const mailOptions = async (userEmail, hashData = 0, link = 0) => {
    if ((hashData, link)) {
        await transporter.sendMail({
            from: process.env.SENDER_EMAIL,
            to: userEmail,
            subject: "Reset password",
            html: `<a href=${link}>Click for rest your password`
        });
    } else {
        await transporter.sendMail({
            from: process.env.SENDER_EMAIL,
            to: userEmail,
            subject: "Thanks For Creating Blogs",
            html: htmlContent
        });
    }
}

module.exports = {
    mailOptions
}