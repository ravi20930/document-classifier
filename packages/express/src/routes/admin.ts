import express, { Router } from "express";
import { getAllUsers, newAdmin, getTokens } from "../controllers/admin";

const router: Router = express.Router();

router.get("/get-token", getTokens);
router.get("/users", getAllUsers);
router.post("/create-admin", newAdmin);

export default router;
