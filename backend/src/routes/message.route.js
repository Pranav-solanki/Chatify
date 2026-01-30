import express from "express";
import { arcProtection } from "../middlewares/arcjet.middleware.js";
const router = express.Router();
import {
  getAllContacts,
  getMessagesByUserId,
  sendMessage,
  getChatPartners,
} from "../controllers/message.controller.js";
import { protectRoute } from "../middlewares/auth.middleware.js";
router.use(protectRoute);
router.get("/contacts", getAllContacts);
router.get("/chats", getChatPartners);
router.get("/:id", getMessagesByUserId);
router.post("/send/:id", sendMessage);
export default router;
