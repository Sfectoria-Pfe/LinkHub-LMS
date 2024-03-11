import { Router } from "express";

import {
  createCategory,
  deleteCategoryById,
  getAllCategories,
  getCategoryById,
  updateCategoryById,
} from "../controllers/categoryController";

const categoryRouters = Router();
categoryRouters.post("/create", createCategory);
categoryRouters.put("/update/:id", updateCategoryById);
categoryRouters.get("/getCategoryById/:id", getCategoryById);
categoryRouters.get("/getAllCategories", getAllCategories);
categoryRouters.delete("/delete/:id", deleteCategoryById);
export default categoryRouters;
