import { Router } from "express";
import { saveUSer } from "../controllers/auth.controller.js";

const router = Router();

router.post("/callback", saveUSer);

export default router;
