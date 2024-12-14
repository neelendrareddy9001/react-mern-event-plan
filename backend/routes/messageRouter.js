import express from "express";
import { sendMessage } from "../controllers/messageController.js";

const routes = express.Router();

routes.post("/send", sendMessage);

export default routes;
