import express, { Router } from "express";
import { googleLogin, googleSignInCallback } from "../controllers/auth";

const router: Router = express.Router();

router.post("/google/login", googleLogin);
router.get("/google/callback", googleSignInCallback);

export default router;
