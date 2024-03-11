import { Router } from "express";
import {
  createCourse,
  deleteCourseById,
  getAllCourses,
  getCourseById,
  updateCourseById,
} from "../controllers/coursesController";
import authMiddleware from "../middlewares/auth";
import adminMiddleware from "../middlewares/admin";

const coursesRouter = Router();
coursesRouter.post("/create", [authMiddleware, adminMiddleware], createCourse);
coursesRouter.put("/update/:id", updateCourseById);
coursesRouter.get("/getCoursById/:id", getCourseById);
coursesRouter.get("/getAllCourses", getAllCourses);
coursesRouter.delete("/delete/:id", deleteCourseById);
export default coursesRouter;
