import { Router } from "express";
import { createUser, loginUser } from "../controllers/users.controller.js";
const usersRouter = Router();


usersRouter.post('/new',createUser);
usersRouter.post('/login',loginUser);

export default usersRouter;