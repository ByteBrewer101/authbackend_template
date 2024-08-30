"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const UserRoutes_1 = __importDefault(require("./Routes/UserRoutes"));
const express_1 = __importDefault(require("express"));
const prisma = new client_1.PrismaClient();
const api = express_1.default.Router();
api.use("/user", UserRoutes_1.default);
exports.default = api;
