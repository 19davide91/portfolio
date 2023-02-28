const nodemailer = require("nodemailer");

exports.handler = async (event) => {
  const contactEmail = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "davidelopresti0129@gmail.com",
      pass: "cbvrljhidvjdrtpp",
    },
  });

  contactEmail.verify((error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Ready to Send");
    }
  });

  const { fullName, email, message, phone } = JSON.parse(event.body);

  const mail = {
    from: fullName,
    to: "davidelopresti0129@gmail.com",
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${fullName}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };

  try {
    await contactEmail.sendMail(mail);
    return {
      statusCode: 200,
      body: JSON.stringify({ code: 200, status: "Message Sent" }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
