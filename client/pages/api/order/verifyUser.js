import { client } from "../../../lib/client";
import { auth } from "../../../middlewares/auth";

const verifyUser = async (req, res) => {
 
  try {
    const userId = await auth(req, res);
   const data = await client.fetch(`*[_type=='order' && _id==$orderId]{
    "userId": *[_type=='user' && _id==^.user._ref]{_id}[0]
  }[0]`,{
    orderId: JSON.parse(req.body)
  }) 
  console.log(data,userId);
    if(userId !== data.userId._id){
      return res.status(401).json({
        success: false,
        error: 'Invalid user',
      });
    }
    return res.status(200).json({
      success: true,
      message: "Verify success!",
     
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
      await verifyUser(req, res);
      break;
  }
};
export default handler;
