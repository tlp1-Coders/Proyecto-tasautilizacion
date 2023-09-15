import { Router } from "express";
import { forgotPassword, loginUser, newUser, resetForgotPassword } from "../controllers/auth.controllers.js";
import { userSchema, loginUserSchema, forgotPasswordSchema, resetForgotPasswordSchema } from "../schemas/User.Schema.js";
import { validateFields } from "../middlewares/validator.js";
import { getUser } from "../middlewares/getUser.js";

const usersRouter = Router();


usersRouter.post('/new',userSchema,validateFields,newUser);
usersRouter.post('/login',loginUserSchema,validateFields, loginUser);
usersRouter.post('/forgotPassword',forgotPasswordSchema,validateFields, forgotPassword);
usersRouter.put('/resetPassword/:token',resetForgotPasswordSchema,validateFields, resetForgotPassword);
export default usersRouter;