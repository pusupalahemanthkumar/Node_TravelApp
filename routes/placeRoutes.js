import express from "express";

import { getPlaces, addPlace } from "../controllers/placeController.js"
import { protect } from "../middlewares/authMiddleWare.js"

const router = express.Router();

// @POST - /api/places/query
router.post("/query", protect, getPlaces);

// @POST - /api/places/add
router.post("/add", protect,addPlace);


export default router;