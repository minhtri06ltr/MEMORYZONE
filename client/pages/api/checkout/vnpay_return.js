const checkVNPayHash = async (req, res) => {
  try {
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
    case "GET":
      await checkVNPayHash(req, res);
      break;
  }
};
export default handler;
