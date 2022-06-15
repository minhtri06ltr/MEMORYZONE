import nodemailer from "nodemailer";
import { google } from "googleapis";
import { emailTemplate } from "./EmailTemplate";

const OAuth2 = google.auth.OAuth2;

const OAuth2_client = new OAuth2(
  process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
  process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET
);
OAuth2_client.setCredentials({
  refresh_token: process.env.NEXT_PUBLIC_OAUTH2_REFRESH_TOKEN,
});

export const sendEmailHandle = async (req, res, next) => {
  console.log("run");
  const accessToken = OAuth2_client.getAccessToken();
  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: process.env.NEXT_PUBLIC_SENDING_EMAIL,
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
      accessToken: accessToken,
    },
  });
  const mailOptions = {
    from: `Memoryzone <${process.env.NEXT_PUBLIC_SENDING_EMAIL}>`,
    to: "pexelal363@qqhow.com",
    subject: "test subject",
    html: emailTemplate("ly minh tri"),
  };
  transport.sendMail(mailOptions, (error, result) => {
    if (error) {
      console.log(error);
      return res.status(400).json({
        success: false,
        error: error.message,
      });
    } else {
      console.log(result);
      next();
    }
  });
};
