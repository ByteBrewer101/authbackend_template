import express from "express";
import prisma from "../PrismaClient";
import { signin_schema, signup_schema } from "../InputSchemas/ZodSchemas";

const userRouter = express.Router();

userRouter.post("/signup", async (req, res) => {
  const { email, username, password } = req.body;

  try {
    const val_user = signup_schema.safeParse({
      email,
      username,
      password,
    });

    if (!val_user.success) {
      return res.status(400).json({
        error: val_user.error,
      });
    }

    const user = await prisma.user.create({
      data: {
        email,
        username,
        password,
      },
    });

    
    res.cookie("token", user.id);

    return res.status(200).json({
      message: "User created successfully",
    });
  } catch (error) {
    return res.status(401).json({
      err: error,
    });
  }
});


userRouter.post("/signin", async(req, res) => {
  const { username, password } = req.body;
  try
{
  const user = signin_schema.safeParse({
    username,
    password

  })

  if (!user.success) {
    return res.status(401).json({
      error: user.error,
    });
  }

  const response = await prisma.user.findUnique({
    "where":{
      username,
      password
    }
  })
if(response)
{
   res.cookie("token", { userId: response?.id });

   return res.status(200).json({
     msg: "logged in as " + response.username,
   });

}

return res.status(401).json({
  "err": "error logging in"
})




}catch(e){
  return res.status(401).json({
    "err":e
  })
}

});
export default userRouter;
