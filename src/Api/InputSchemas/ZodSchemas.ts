import zod from "zod";

export const signup_schema = zod.object({
    email : zod.string().email(),
    username : zod.string().min(5),
    password : zod.string().min(8)
})


export const signin_schema = zod.object({
    username : zod.string(),
    password: zod.string()
})