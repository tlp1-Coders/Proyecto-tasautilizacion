import { Router } from "express";
import { loginUser, newUser } from "../controllers/auth.controllers.js";
import { userSchema, loginUserSchema } from "../schemas/User.Schema.js";
import { validateFields } from "../middlewares/validator.js";

const usersRouter = Router();


usersRouter.post('/new',userSchema,validateFields,newUser);
usersRouter.post('/login',loginUserSchema,validateFields, loginUser);

export default usersRouter;