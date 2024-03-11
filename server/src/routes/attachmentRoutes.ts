import { Router } from "express";
import {
  createAttachment,
  deleteAttachmentById,
  getAttachmentById,
  getAllAttachments,
  updateAttachmentById,
} from "../controllers/attachmentController";

const attachmentRouter = Router();
attachmentRouter.post("/create", createAttachment);
attachmentRouter.put("/update/:id", updateAttachmentById);
attachmentRouter.get("/getAttachmentById/:id", getAttachmentById);
attachmentRouter.get("/getAllAttachments", getAllAttachments);
attachmentRouter.delete("/delete/:id", deleteAttachmentById);
export default attachmentRouter;
