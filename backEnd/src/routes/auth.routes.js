import { Router } from "express";
import { forgotPassword, loginUser, newUser, resetForgotPassword } from "../controllers/auth.controllers.js";
import { userSchema, loginUserSchema, forgotPasswordSchema, resetForgotPasswordSchema } from "../schemas/User.Schema.js";
import { validateFields } from "../middlewares/validator.js";
import { getUser } from "../middlewares/getUser.js";

const authRouter = Router();


authRouter.post('/new',userSchema,validateFields,newUser);
authRouter.post('/login',loginUserSchema,validateFields, loginUser);
authRouter.post('/forgotPassword',forgotPasswordSchema,validateFields, forgotPassword);
authRouter.put('/resetPassword/:token',resetForgotPasswordSchema,validateFields, resetForgotPassword);
export default authRouter;