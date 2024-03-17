import { Request, Response, NextFunction } from "express";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const newConversation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const participantIds: string[] = req.body.participants;

  if (!participantIds || !participantIds.length) {
    return res
      .status(400)
      .json({ message: "Must provide array of participants" });
  }
  const creatorId = req.body.userId;
  // const creatorIdParsed = creatorId.toString();

  const participants = [creatorId, ...participantIds];
  const conversationWithSelf =
    participantIds.length === 1 && participants[0] === creatorId;

  try {
    // Conditionally write query
    let query;
    if (conversationWithSelf) {
      query = {
        participants: {
          every: {
            userId: { in: participants },
          },
        },
      };
    } else {
      query = {
        AND: participants.map((participantId) => ({
          participants: {
            some: {
              userId: participantId,
            },
          },
        })),
      };
    }
    // Check if a conversation exists

    const existingConversation = await prisma.conversation.findMany({
      where: query,
      select: {
        id: true,
        title: true,
        participants: {
          select: {
            user: {
              select: {
                id: true,
                fname: true,
              },
            },
          },
        },
      },
    });

    if (existingConversation.length > 0) {
      const response = {
        ...existingConversation[0],
        messages: undefined,
        participants: existingConversation[0].participants.map(
          (participant) => participant.user
        ),
      };
      return res.status(200).json(response);
    }
    // New conversation data
    let data;
    if (conversationWithSelf) {
      data = [{ user: { connect: { id: creatorId } } }];
    } else {
      data = participants.map((participantId) => ({
        user: { connect: { id: participantId } },
      }));
    }
    // Create new conversation
    const {title} = req.body
    const conversation = await prisma.conversation.create({
      data: {
        title:title,
        participants: {
          create: data,
        },
      },
      select: {
        id: true,
        title: true,
        participants: {
          select: {
            user: {
              select: {
                id: true,
                fname: true,
                lname: true,
                profile_picture: true,
              },
            },
          },
        },
      },
    });
    const response = {
      ...conversation,
      messages: undefined,
      participants: conversation.participants.map(
        (participant) => participant.user
      ),
    };
    res.status(201).json(response);
  } catch (error) {
    next(error);
  }
};
