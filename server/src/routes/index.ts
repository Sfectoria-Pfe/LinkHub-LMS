import { Router } from "express";
import authRouters from "./auth";
import coursesRouter from "./coursesRoutes";
import categoryRouters from "./categoryRoutes";
import attachmentRouter from "./attachmentRoutes";
import messagesRouter from "./messages";
import conversationRouter from "./conversations";

const rootRouter: Router = Router();
rootRouter.use("/auth", authRouters);
rootRouter.use("/courses", coursesRouter);
rootRouter.use("/categories", categoryRouters);
rootRouter.use("/attachments", attachmentRouter);
rootRouter.use("/messages", messagesRouter);
rootRouter.use("/conversation", conversationRouter);

export default rootRouter;
