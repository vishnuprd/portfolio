
const contact = require("../models/contact.js");
const nodemailer = require("nodemailer");

exports.postContact = async (req, res) => {
    const { name, email, subject, message } = req.body;
  
    try {
      const existingEmail = await contact.findOne({ email });
  
      if (existingEmail) {
        return res.status(400).json({
          success: false,
          message: "Email already exists",
        });
      }
  
      // Create a new contact entry
      const newContact = new contact({
        name,
        email,
        subject,
        message,
      });
  
      await newContact.save();

      // Set up Nodemailer transporter
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_ID,
          pass: process.env.EMAIL_PASSWORD,
        },
      });

      // Set up email data with dynamic receiver email
      const mailOptions = {
        from: process.env.EMAIL_ID,
        to: email, // Send email to the newly created contact
        subject: `Thank you for contacting us! - ${subject}`,
        text: `Dear ${name},\n\nThank you for reaching out to us! We have received your message:\n\n"${message}"\n\nWe will get back to you shortly.\n\nBest Regards,\nYour Company Team`,
      };

      // Send email
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error(error);
          return res.status(500).json({ success: false, message: "Error sending email" });
        } else {
          console.log("Email sent: " + info.response);
          return res.status(201).json({ success: true, message: "Contact created and email sent" });
        }
      });

    } catch (error) {
      console.error(error.message);
      return res.status(500).json({ success: false, message: error.message });
    }
};

exports.getContact = async (req, res) => {
  try {
    const contacts = await contact.find();
    return res.status(200).json({ success: true, contacts });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ success: false, message: error.message });
  }
};