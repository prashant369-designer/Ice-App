const nodemailer = require("nodemailer");

const sendMail = async (to, subject, text, html) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",  
      auth: {
        user: process.env.EMAIL_USER,  
        pass: process.env.EMAIL_PASS, 
      },
    });

    const mailOptions = {
      from: `"MyApp" <${process.env.EMAIL_USER}>`,
      to,      
      subject, 
      text,    
      html,    
    };

    await transporter.sendMail(mailOptions);
    console.log(` Email sent to ${to}`);
  } catch (error) {
    console.error(" Error sending email:", error);
  }
};

module.exports = sendMail;
