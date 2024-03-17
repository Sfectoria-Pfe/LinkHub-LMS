import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const newMessage = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { message, conversationId, authorId } = req.body;

  if (!message.trim()) {
    return res.status(400).json({ message: "Must provide a message" });
  }
    // const autherId = req.body.authorId;
    // const parsedAuthorId = autherId.toString();
    // const parsedConversationId = parseInt(conversationId);
    try {
      const newMessage2 = await prisma.message.create({
        data: {
          message,
          authorId,
          conversationId,
        },
        include: {
          conversation: {
            include: {
              participants: true,
            },
          },
        },
      });
      console.log(newMessage2,"message created")
      res.status(201).send(newMessage2);
      // Update dateLastMessage
      // const conversation = newMessage.conversation;
      // if (conversation) {
      //   await prisma.conversation.update({
      //     where: { id: conversation?.id },
      //     data: { dateLastMessage: new Date() },
      //   });
      // }
      // // Set all participants' isRead to false except author
      // conversation?.participants
      //   .filter((participant) => participant.userId !== authorId )
      //   .map(async (participant) => {
      //     await prisma.conversationUser.updateMany({
      //       where: {
      //         conversationId: conversationId,
      //         userId: participant.userId,
      //       },
      //       data: { isRead: false },
      //     });
      //   });
      // const response = {
      //   id: newMessage.id,
      //   message: newMessage.message,
      //   authorId: newMessage.authorId,
      //   created_at: newMessage.created_at,
      // };
    } catch (error) {
      next(error);
    }
  }


// export const deleteMessage = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   const id = parseInt(req.params.id);
//   try {
//     const message = await prisma.message.findUnique({
//       where: { id },
//     });

//     if (!message) {
//       return res
//         .status(404)
//         .json({ message: "You can only delete your own messages" });
//     }
//     if (message?.authorId !== req.user?.id) {
//       return res.status(401).json({ message: "Unauthorized" });
//     }
//     if (!message) {
//       return res.status(404).json({ message: "Message not found" });
//     }
//     await prisma.message.delete({ where: { id } });
//     res.status(200).json({ message: "Message deleted" });
//   } catch (error) {
//     next(error);
//   }
// };

// export const editMessage = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   const { message: newMessageBody } = req.body;
//   if (!newMessageBody || newMessageBody.trim() === "") {
//     return res.status(400).json({ message: "Must provide a message" });
//   }
//   const id = parseInt(req.params.id);
//   try {
//     const message = await prisma.message.findUnique({
//       where: { id },
//     });
//     if (!message) {
//       return res.status(404).json({ message: "Message not found" });
//     }
//     if (message?.authorId !== req.user?.id) {
//       return res.status(401).json({ message: "Unauthorized" });
//     }
//     if (!newMessageBody || newMessageBody.trim() === "") {
//       return res.status(400).json({ message: "Must provide a message" });
//     }
//     const updatedMessage = await prisma.message.update({
//       where: { id },
//       data: { message: newMessageBody },
//     });
//   } catch (error) {
//     next(error);
//   }
// };
