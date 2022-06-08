import nodemailer from "nodemailer";

const sendEmail = (message) => {
  return new Promise((res, rej) => {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.NEXT_PUBLIC_GOOGLE_USER,
        pass: process.env.NEXT_PUBLIC_GOOGLE_PASSWORD,
      },
    });

    transporter.sendMail(message, function (err, info) {
      if (err) {
        rej(err);
      } else {
        res(info);
        console.log(info);
      }
    });
  });
};

export const sendResetPasswordEmail = ({ email, hash }) => {
  const message = {
    from: process.env.NEXT_PUBLIC_GOOGLE_USER,
    to: email,
    subject: "Your App - Reset Password",
    html: `
        <h3>Hello test </h3>
        <p>To reset your password please follow this link: <a target="_" href="test">Reset Password Link</a></p>
        <p>Cheers,</p>
        <p>Your Application Team</p>
      `,
  };

  return sendEmail(message);
};
