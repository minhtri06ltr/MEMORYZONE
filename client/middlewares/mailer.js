import nodemailer from "nodemailer";
import { google } from "googleapis";
import { emailTemplate } from "./EmailTemplate";

export const sendEmailHandle = async () => {
  try {
    const OAUTH2_URL = "https://developers.google.com/oauthplayground";
    const oauth2Client = new google.auth.OAuth2(
      process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
      process.env.NEXT_PUBLIC_OAUTH2_REFRESH_TOKEN,
      OAUTH2_URL
    );

    oauth2Client.setCredentials({
      refresh_token: process.env.NEXT_PUBLIC_OAUTH2_REFRESH_TOKEN,
    });
    const accessToken = await oauth2Client.getAccessToken();
    console.log(
      "1||",
      process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      "2||",
      process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
      "3||",
      process.env.NEXT_PUBLIC_OAUTH2_REFRESH_TOKEN,
      "4||",
      OAUTH2_URL,
      "5||",
      accessToken.token
    );

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: "laptopdienthoai1@gmail.com",
        clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
        clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
        refreshToken: process.env.NEXT_PUBLIC_OAUTH2_REFRESH_TOKEN,
        accessToken: accessToken.token,
      },
    });
    const mailOptions = {
      from: "Tri <laptopdienthoai1@gmail.com>",
      to: "animeismylife10122001@gmail.com",
      subject: "test subject",
      html: (
        <html>
          <body>
            <p>testing</p>
          </body>
        </html>
      ),
    };
    transporter.sendMail(mailOptions, (error, info) => {
      console.log(error);
    });
  } catch (error) {
    console.log(error);
  }
};
