const nodemailer = require("nodemailer");
const path = require("path");
const fs = require("fs");
const { text } = require("express");

// Initialize the transporter (define this according to your email provider's configuration)
const transporter = nodemailer.createTransport({
  service: "gmail", // or other service like 'yahoo'
  auth: {
    user: "dineshv9299@gmail.com", // Use environment variables for sensitive data
    pass: "ojsj prby ywgx betc",
  },
});

async function sentEmailController(req, res) {
  const { email } = req.body;

  try {
    const mailOptions = {
      from: "dineshv9299@gmail.com",
      to: email,
      subject: "Thank you for joining with us!",
      html: `
        <h1>Welcome!</h1>
        <p>Thank you for joining our community. We’re thrilled to have you!</p>
        <img src="cid:companyLogo" alt="Company Logo" />
        <p>Best Regards,<br>Your Company Team</p>
      `,
      attachments: [
        {
          filename: "logo.png", // Name of the file as it will appear in the email
          path: path.join(__dirname, "../images/logo.png"), // Path to the image file
          cid: "companyLogo", // Content-ID to embed in the HTML
        },
      ],
    };

    // Send mail and wait for the response
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: " + info.response);
    res.json({
      message: "email sent successfully",
    });
  } catch (error) {
    console.error("Error sending mail:", error);
    res.status(500).send("Error sending mail");
  }
}

module.exports = sentEmailController;
