import { prismaClient } from "..";
import { NextFunction, Request, Response } from "express";
import { Category } from "@prisma/client";

//? createCategory -> create a category

export const createCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // Get the category data from the request body
    const categoryData: Category = req.body;
    // Create a new category
    const newCategory = await prismaClient.category.create({
      data: categoryData,
    });
    // Return the new category
    res.status(201).json(newCategory);
  } catch (error) {
    next(error);
  }
};

//? updateCategory -> update a category by id

export const updateCategoryById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // Get the category id from the request parameters
  const { id } = req.params;
  try {
    // Get the category data from the request body
    const categoryData = req.body;
    // Update the category by id
    const updatedCategory = await prismaClient.category.update({
      where: { id },
      data: categoryData,
    });
    // Return the updated category
    res.status(200).json(updatedCategory);
  } catch (error) {
    next(error);
  }
};

//? deleteCategory -> delete a category by id
export const deleteCategoryById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // get the category id from the request parameters
  const { id } = req.params;
  try {
    // delete the category by id
    const deletedCategory = await prismaClient.category.delete({
      where: { id },
    });
    // return the deleted category
    res
      .status(200)
      .json("This Category is Deleted" + " " + deletedCategory.name);
  } catch (error) {
    next(error);
  }
};
//? getCategoryById -> get a category by id

export const getCategoryById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const category = await prismaClient.category.findUnique({
      where: { id },
      include: { Courses: true }, // Include related Courses if necessary
    });

    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }

    res.json(category);
  } catch (error) {
    console.error("Error retrieving category by ID:", error);
    next(error);
  }
};

//? getAllCategories -> get all categories
export const getAllCategories = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    //return all categories
    const categories = await prismaClient.category.findMany({
      include: {
        Courses: true,
      },
    });
    //return all categories
    res.status(200).json(categories);
  } catch (error) {
    next(error);
  }
};
