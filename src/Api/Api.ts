import { PrismaClient } from "@prisma/client";
import userRouter from "./Routes/UserRoutes";
import express from "express";
const prisma = new PrismaClient();


const api = express.Router();


api.use("/user",userRouter)


export default api