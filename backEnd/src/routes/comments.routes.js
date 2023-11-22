import { Router } from "express";
import {validateFields} from '../middlewares/validator.js';
import { commentDelete, commentUpdate, createCommentary, getAllComments, getCommentbyid } from '../controllers/comments.controller.js';
import { getUserInfoToken } from '../middlewares/getUser.js';
import { commentSchema } from '../schemas/Comments.Schema.js';

const commentsRoutes = Router();

commentsRoutes.get('/all', getAllComments);
commentsRoutes.get('/:id', getUserInfoToken, getCommentbyid);
commentsRoutes.post('/', getUserInfoToken,commentSchema, validateFields, createCommentary);
commentsRoutes.put('/', getUserInfoToken,commentSchema, validateFields, commentUpdate);
commentsRoutes.delete('/:id', getUserInfoToken, commentDelete);

export default commentsRoutes;
