"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const PrismaClient_1 = __importDefault(require("../PrismaClient"));
const ZodSchemas_1 = require("../InputSchemas/ZodSchemas");
const userRouter = express_1.default.Router();
userRouter.post("/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, username, password } = req.body;
    try {
        const val_user = ZodSchemas_1.signup_schema.safeParse({
            email,
            username,
            password,
        });
        if (!val_user.success) {
            return res.status(400).json({
                error: val_user.error,
            });
        }
        const user = yield PrismaClient_1.default.user.create({
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
    }
    catch (error) {
        return res.status(401).json({
            err: error,
        });
    }
}));
userRouter.post("/signin", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    try {
        const user = ZodSchemas_1.signin_schema.safeParse({
            username,
            password
        });
        if (!user.success) {
            return res.status(401).json({
                error: user.error,
            });
        }
        const response = yield PrismaClient_1.default.user.findUnique({
            "where": {
                username,
                password
            }
        });
        if (response) {
            res.cookie("token", { userId: response === null || response === void 0 ? void 0 : response.id });
            return res.status(200).json({
                msg: "logged in as " + response.username,
            });
        }
        return res.status(401).json({
            "err": "error logging in"
        });
    }
    catch (e) {
        return res.status(401).json({
            "err": e
        });
    }
}));
exports.default = userRouter;
