import express, { Express, Request, Response } from "express";
import { PORT } from "./secrets";
import "dotenv/config";
import rootRouter from "./routes";
import { PrismaClient } from "@prisma/client";
import { error } from "console";
import { errorMiddleware } from "./middlewares/errors";
import { SignUpSchema } from "./schema/users";
import cors from "cors"; // Import the 'cors' package

const app: Express = express();
// Enable CORS for your React application
app.use(cors({ origin: "http://localhost:5173" }));

app.use(express.json());

export const prismaClient = new PrismaClient({
  log: ["query"],
});

app.use("/api", rootRouter);

app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log("Server is running");
});
