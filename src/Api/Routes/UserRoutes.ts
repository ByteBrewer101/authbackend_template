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
      return res.json({
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

    res.status(201).json({
      message: "User created successfully",
    });

    res.cookie("token", { userid: user.id });

    res.status(201).json({
      message: "User created successfully",
    });
  } catch (error) {
    return res.json({
      err: error,
    });
  }
});

userRouter.post("/signin", async(req, res) => {
  const { username, password } = req.body;

  const user = signin_schema.safeParse({
    username,
    password

  })

  if (!user.success) {
    return res.json({
      error: user.error,
    });
  }

  const response = await prisma.user.findUnique({
    "where":{
      username,
      password
    }
  })



 res.cookie("token",{"userId": response?.id})

 return res.json({
  "msg": "logged in as " + response?.username
 })


});
export default userRouter;
