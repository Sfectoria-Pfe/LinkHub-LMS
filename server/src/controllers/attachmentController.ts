import { prismaClient } from "..";
import { NextFunction, Request, Response } from "express";

//? createAttachment -> create an attachment

export const createAttachment = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { courseId, name, url } = req.body;

  try {
    // check if the course exists
    const course = await prismaClient.course.findUnique({
      where: { id: courseId },
    });

    if (!course) {
      res.status(404).json({ error: "Course not found" });
      return;
    }

    // create an attachment
    const createAttachment = await prismaClient.attachment.create({
      data: {
        courseId,
        name,
        url,
      },
    });

    // return the created attachment
    res.status(201).json(createAttachment);
  } catch (error) {
    console.log("Error creating attachment:", error);
    res.status(500).json({ error: "Error creating attachment" });
  }
};

//? updateAttachment -> update an attachment by id

export const updateAttachmentById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // get the attachment id from params
  const { id } = req.params;
  try {
    // get the attachment data from the request body
    const attachmentData = req.body;
    // update the attachment by id
    const updateAttachment = await prismaClient.attachment.update({
      where: { id },
      data: attachmentData,
    });
    // return the updated attachment
    res.status(200).json(updateAttachment);
  } catch (error) {
    next(error);
  }
};
//? deleteAttachment -> delete an attachment by id
export const deleteAttachmentById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // get the attachment id from params
    const { id } = req.params;
    // delete the attachment by id
    const deleteAttachment = await prismaClient.attachment.delete({
      where: { id },
    });
    // return the deleted attachment
    res.status(200).json(deleteAttachment);
  } catch (error) {
    next(error);
  }
};

//? getAttachmentById -> get an attachment by id
export const getAttachmentById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // get the attachment id from params
    const { id } = req.params;
    // get the attachment by id
    const getAttachment = await prismaClient.attachment.findUnique({
      where: { id },
    });
    // return the attachment
    res.status(200).json(getAttachment);
  } catch (error) {
    next(error);
  }
};

//? getAllAttachments -> get all attachments
export const getAllAttachments = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    //get all attachments
    const allAttachments = await prismaClient.attachment.findMany();
    // return all attachments
    res.status(200).json(allAttachments);
  } catch (error) {
    next(error);
  }
};
