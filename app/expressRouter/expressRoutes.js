import express from "express";
import loginController from "../expressControllers/login.controller.js";

const router = express.Router();

router.post("/login", loginController);

export { router as expressRoutes };
