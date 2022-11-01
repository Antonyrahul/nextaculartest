import nodemailer from 'nodemailer';

export const emailConfig = {
  host: process.env.EMAIL_SERVICE,
  port: 2587,
  auth: {
    user: process.env.EMAIL_SERVER_USER,
    pass: process.env.EMAIL_SERVER_PASSWORD,
  },
  //service: process.env.EMAIL_SERVICE,
};

const transporter = nodemailer.createTransport(emailConfig);

export const sendMail = async ({ from, html, subject, text, to }) => {
  const data = {
    from: from ?? process.env.EMAIL_FROM,
    to,
    subject,
    text,
    html,
  };
  await transporter.sendMail(data)
  console.log("modified")

  process.env.NODE_ENV === 'production'
    ? await transporter.sendMail(data)
    : console.log(data);
};

export default transporter;
