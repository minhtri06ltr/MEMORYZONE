import { client } from "../../../lib/client";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const existUser = await client.fetch(
        `*[_type=='user' && email ==$email][0]`,
        {
          email: req.body.email,
        }
      );

      if (!existUser) {
        return res.status(401).json({
          success: false,
          message: `Email don't exist`,
        });
      }
      return res.status(200).json({
        success: true,
        test: "Login successfull",
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        success: false,
        error: error.message,
      });
    }
  }
}
