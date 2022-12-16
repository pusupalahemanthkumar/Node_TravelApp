import express from "express";

import { getArticles , addArticle } from "../controllers/articleController.js"
import { protect } from "../middlewares/authMiddleWare.js"

const router = express.Router();

// @POST- /api/articles/query
router.post("/query", protect, getArticles);

// @POST- /api/articles/add
router.post("/add", protect, addArticle);

export default router;