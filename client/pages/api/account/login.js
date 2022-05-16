export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      console.log(req.body);
      return res.status(200).json({
        success: true,
        test: "testing",
      });
    } catch (error) {
      console.log(error);
      res.status(err.statusCode || 500).json({
        success: false,
        error: error.message,
      });
    }
  }
}
