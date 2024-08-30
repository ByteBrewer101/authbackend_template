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
      user: {
        id: user.id,
        email: user.email,
        username: user.username,
      },
    });
  } catch (error) {
    return res.json({
      err: error,
    });
  }
});

userRouter.post("/signin", (req, res) => {
  const { username, password } = req.body;

  return res.json({
    msg: username,
  });
});
export default userRouter;
