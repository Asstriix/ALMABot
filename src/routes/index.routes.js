
import { Router } from "express";
import { getChatView, postMessage } from "../controllers/chatController.js";

const router = Router();
router.get("/", getChatView);
router.post("/send", postMessage);
export default router;
