import express, { Router } from "express";
import { verifyAdmin, verifyAccessToken } from "../middlewares/auth";
import userRoutes from "./user";
import adminRoutes from "./admin";
import authRoutes from "./auth";

const router: Router = express.Router();

router.use("/auth", authRoutes);
router.use("/", /*verifyAccessToken,*/ userRoutes);
router.use("/admin", verifyAdmin, adminRoutes);

export default router;
