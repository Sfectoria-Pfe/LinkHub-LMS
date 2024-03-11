import express, { Router } from "express";
import { login, me, signup } from "../controllers/authController";
import { errorHandler } from "../schema/error-handler";
import authMiddleware from "../middlewares/auth";
import adminMiddleware from "../middlewares/admin";

// Extend the express Request object to include a user property

const authRouters = Router();

authRouters.post("/signup", errorHandler(signup));
authRouters.post("/login", errorHandler(login));
authRouters.get("/me", authMiddleware, errorHandler(me));

export default authRouters;
