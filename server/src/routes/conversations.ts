import express, { Router } from "express";
import { verifyJWT } from "../middlewares/verifyJWT";
import { newConversation } from "../controllers/conversationsController";

const conversationRouter: Router = express.Router();
//test
conversationRouter.post("/new", verifyJWT, newConversation);

export default conversationRouter;
