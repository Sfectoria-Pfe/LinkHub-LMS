import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { UnauthorizedException } from "../exceptions/unauthorized";
import { ErrorCode } from "../exceptions/root";
import { JWT_SECRET } from "../secrets";
import { prismaClient } from "..";
import { User } from "@prisma/client";

declare global {
  namespace Express {
    interface Request {
      user?: User; // Make it optional, as it might not be set in case of errors
    }
  }
}

const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return next(
        new UnauthorizedException("Unauthorized", ErrorCode.UNAUTHORIZED)
      );
    }

    // Extract the actual token from the "Bearer" prefix
    const actualToken = token.split(" ")[1];

    const decoded = jwt.verify(actualToken, JWT_SECRET) as { id: string };
    const user = await prismaClient.user.findUnique({
      where: { id: decoded.id },
    });

    if (!user) {
      return next(
        new UnauthorizedException("Unauthorized", ErrorCode.UNAUTHORIZED)
      );
    }

    // Attach the user to the request for further processing
    req.user = user;

    // Continue with the next middleware or route handler
    next();
  } catch (error) {
    // Handle token verification errors
    next(new UnauthorizedException("Unauthorized", ErrorCode.UNAUTHORIZED));
  }
};

export default authMiddleware;
