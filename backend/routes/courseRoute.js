import express from "express";
import { createCourse, getCourseById } from "../controllers/courseController.js";
import { validateCourse } from "../validators/courseValidator.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const courseRouter = express.Router();

courseRouter.post("/create", authMiddleware, validateCourse, createCourse);
courseRouter.get("/:id", getCourseById);

export default courseRouter;
