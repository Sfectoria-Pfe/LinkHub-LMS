import { prismaClient } from "..";
import { NextFunction, Request, Response } from "express";

//? createCourse -> create a new course

export const createCourse = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const {
    userId,
    title,
    description,
    imageUrl,
    price,
    isPublished,
    categoryId,
  } = req.body;

  // Basic validation
  if (!userId || !title) {
    return res.status(400).json({ message: "UserId and Title are required" });
  }

  try {
    const course = await prismaClient.course.create({
      data: {
        userId,
        title,
        description,
        imageUrl,
        price,
        isPublished,
        categoryId,
      },
    });

    console.log("Created Course:", course); // Add this line for logging

    res.status(201).json(course);
  } catch (error) {
    console.error("Error creating course:", error);
    next(error);
  }
};

//? updateCourse -> update a course by id

export const updateCourseById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // Get the course id from the request parameters
  const { id } = req.params;
  try {
    // Get the course data from the request body
    const updateCourse = await prismaClient.course.update({
      // Find the course by id
      where: { id },
      // Update the course data
      data: req.body,
    });
    // Return the updated course
    res.status(200).json(updateCourse);
  } catch (error) {
    next(error);
  }
};

//? deleteCourse -> delete a course by id
export const deleteCourseById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // get the course id from the request parameters
  const { id } = req.params;
  try {
    // delete the course by id
    const deleteCourse = await prismaClient.course.delete({ where: { id } });
    // return the deleted course
    res.status(200).json("This Cours is Deleted" + " " + deleteCourse);
  } catch (error) {
    next(error);
  }
};

//? getCourseById -> get a course by id
export const getCourseById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // get the course  id from the request parameters
    const { id } = req.params;
    // get the course by id
    const courseId = await prismaClient.course.findUnique({
      where: { id },
      include: {
        attachment: true,
      },
    });
    // return the course
    res.status(200).json(courseId);
  } catch (error) {
    next(error);
  }
};

//? getAllCourses -> get all courses
export const getAllCourses = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // return all courses
    const courses = await prismaClient.course.findMany({
      include: {
        attachment: true,
      },
    });
    res.status(200).json(courses);
  } catch (error) {
    next(error);
  }
};
