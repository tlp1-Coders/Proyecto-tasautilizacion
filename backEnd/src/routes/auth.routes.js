import { Router } from "express";
import { forgotPassword, getUserInfoByToken, loginUser, newUser, resetForgotPassword } from "../controllers/auth.controllers.js";
import { userSchema, loginUserSchema, forgotPasswordSchema, resetForgotPasswordSchema } from "../schemas/User.Schema.js";
import { validateFields } from "../middlewares/validator.js";

const authRouter = Router();


authRouter.post('/new',userSchema,validateFields,newUser);
authRouter.get('/user',getUserInfoByToken);
authRouter.post('/login',loginUserSchema,validateFields, loginUser);
authRouter.post('/forgotPassword',forgotPasswordSchema,validateFields, forgotPassword);
authRouter.put('/resetPassword',resetForgotPasswordSchema,validateFields, resetForgotPassword);
export default authRouter;