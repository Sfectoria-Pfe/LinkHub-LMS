import { Router } from "express";
import authRouters from "./auth";
import coursesRouter from "./coursesRoutes";
import categoryRouters from "./categoryRoutes";
import attachmentRouter from "./attachmentRoutes";

const rootRouter: Router = Router();
rootRouter.use("/auth", authRouters);
rootRouter.use("/courses", coursesRouter);
rootRouter.use("/categories", categoryRouters);
rootRouter.use("/attachments", attachmentRouter);
export default rootRouter;
