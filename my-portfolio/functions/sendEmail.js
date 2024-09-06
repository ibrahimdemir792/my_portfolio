const nodemailer = require('nodemailer');

exports.handler = async function(event, context) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const { name, email, message } = JSON.parse(event.body);

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  let mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'ibrahimdemir792@gmail.com', // Replace with your Gmail address
    subject: `New message from ${name} via portfolio`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
  };

  try {
    await transporter.sendMail(mailOptions);
    return { 
      statusCode: 200, 
      body: JSON.stringify({ message: 'Email sent successfully' }),
      headers: { 'Content-Type': 'application/json' }
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return { 
      statusCode: 500, 
      body: JSON.stringify({ message: 'Error sending email', error: error.message }),
      headers: { 'Content-Type': 'application/json' }
    };
  }
};