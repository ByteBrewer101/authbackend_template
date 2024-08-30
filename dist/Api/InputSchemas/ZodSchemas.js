"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signin_schema = exports.signup_schema = void 0;
const zod_1 = __importDefault(require("zod"));
exports.signup_schema = zod_1.default.object({
    email: zod_1.default.string().email(),
    username: zod_1.default.string().min(5),
    password: zod_1.default.string().min(8)
});
exports.signin_schema = zod_1.default.object({
    username: zod_1.default.string(),
    password: zod_1.default.string()
});
