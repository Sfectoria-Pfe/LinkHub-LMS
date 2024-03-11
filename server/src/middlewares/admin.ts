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

const adminMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = req.user;
  if (user?.role == "ADMIN") {
    next();
  } else {
    return next(
      new UnauthorizedException("Unauthorized", ErrorCode.UNAUTHORIZED)
    );
  }
};

export default adminMiddleware;
