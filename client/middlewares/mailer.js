import nodemailer from "nodemailer";
import { google } from "googleapis";
import { forgotTemplate } from "./forgotTemplate";
import { activateTemplate } from "./activateTemplate";

const getSubject = (template) => {
  switch (template) {
    case "forgotPassword":
      return "🚀 Get back your Memoryzone account password 🚀";
      break;
    case "activate":
      return "🚀 Activate your Memoryzone account 🚀";
      break;
  }
};
const getTemplate = (template, url) => {
  switch (template) {
    case "forgotPassword":
      return forgotTemplate(url);
      break;
    case "activate":
      return activateTemplate(url);
      break;
  }
};
export const sendEmailHandle = async (
  to,
  url,
  template,
  req,
  res,
) => {
  try {
    const OAUTH2_URL =
      "https://developers.google.com/oauthplayground";
    const oauth2Client = new google.auth.OAuth2(
      process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
      process.env.NEXT_PUBLIC_OAUTH2_REFRESH_TOKEN,
      OAUTH2_URL,
    );

    oauth2Client.setCredentials({
      refresh_token:
        process.env
          .NEXT_PUBLIC_OAUTH2_REFRESH_TOKEN,
    });
    const accessToken =
      await oauth2Client.getAccessToken();

    const transporter =
      nodemailer.createTransport({
        service: "gmail",
        auth: {
          type: "OAuth2",
          user: process.env
            .NEXT_PUBLIC_SENDER_EMAIL,
          clientId:
            process.env
              .NEXT_PUBLIC_GOOGLE_CLIENT_ID,
          clientSecret:
            process.env
              .NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
          refreshToken:
            process.env
              .NEXT_PUBLIC_OAUTH2_REFRESH_TOKEN,
          accessToken: accessToken.token,
        },
      });
    const mailOptions = {
      from: `Memoryzone Service  <${process.env.NEXT_PUBLIC_SENDER_EMAIL}>`,
      to: to,
      subject: getSubject(template),
      html: getTemplate(template, url),
    };
    transporter.sendMail(
      mailOptions,
      (error, info) => {
        if (error) {
          console.log(error);
          return res.status(500).json({
            success: false,
            error: error.message,
          });
        }
        console.log("send mail success");
      },
    );
  } catch (error) {
    console.log(error);
    return false;
  }
};
