import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../secrets";
import { error } from "console";
import { decode } from "punycode";

interface Token {
  userId: string;
}
declare global {
  namespace Express {
    interface Request {
      userId: string;
    }
  }
}

export const verifyJWT = (req: Request, res: Response, next: NextFunction) => {
  const autherHeader = req.headers["authorization"];
  if (!autherHeader) return res.status(401).json({ message: "Unauthorized" });
  const token = autherHeader.split(" ")[1];
  jwt.verify(token, JWT_SECRET, (error, decode) => {
    if (error) return res.status(403).json({ message: "Invalid token" });
    const { userId } = decode as Token;
    req.userId = userId;
    next();
  });
};
