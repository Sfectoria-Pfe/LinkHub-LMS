import express, { Router } from "express";
import { newMessage } from "../controllers/messagesController";
import { verifyJWT } from "../middlewares/verifyJWT";

const messagesRouter: Router = express.Router();
//test
messagesRouter.post(
  "/new",
  //   verifyJWT,

  newMessage
);

export default messagesRouter;
