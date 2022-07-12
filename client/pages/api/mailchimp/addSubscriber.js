import { client } from "../../../lib/client";

const addSubscriber = async (req, res) => {
  try {
    const contactEmail = JSON.parse(req.body);
    const existEmail = await client.fetch(
      `*[_type=='newsLetter' && email==$email][0]{email,status}`,
      {
        email: contactEmail,
      },
    );

    console.log(existEmail, contactEmail);
    if (
      !existEmail ||
      existEmail.email !== contactEmail
    ) {
      console.log("send mailchimp");
      const mailChimpFormat = {
        update_existing: true,
        members: [
          {
            email_address: contactEmail,
            status: "pending",
          },
        ],
      };

      const res = await fetch(
        `https://${process.env.NEXT_PUBLIC_MAIL_CHIMP_API_SERVER}.api.mailchimp.com/3.0/lists/${process.env.NEXT_PUBLIC_MAIL_CHIMP_AUDIENCE_ID}`,
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
            Authorization: `apikey ${process.env.NEXT_PUBLIC_MAIL_CHIMP_API_KEY}`,
          },
          body: JSON.stringify(mailChimpFormat),
        },
      )
        .then((data) => {
          client.create({
            _type: "newsLetter",
            email: contactEmail,
            status: 1,
            subscribeTime: new Date(),
          });
        })
        .catch((error) => {
          return res.status(500).json({
            success: false,
            error: error.message,
          });
        });
    } else if (
      existEmail.email === contactEmail &&
      existEmail.status === 1
    ) {
      console.log("already");

      return res.status(200).json({
        success: true,
        message:
          "This email is already subscribe our newsletter. Thanks for your attended",
      });
    } else if (
      existEmail.email === contactEmail &&
      existEmail.status === 0
    ) {
      console.log("not confirm yet");

      return res.status(200).json({
        success: true,
        message:
          "Please check your email to confirm the subscribe",
      });
    }
    return res.status(200).json({
      success: true,
      message:
        "Thanks for your attended. Please check your email to confirm the subscribe",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};
const handler = async (req, res) => {
  switch (req.method) {
    case "POST":
      await addSubscriber(req, res);
      break;
  }
};
export default handler;
