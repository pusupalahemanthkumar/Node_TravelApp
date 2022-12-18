import express from "express";

import { protect } from "../middlewares/authMiddleWare.js";
import { getUserOrders, placeOrder } from "../controllers/orderController.js";


const router = express.Router();

// @POST /api/Orders/
router.post("/", protect, placeOrder);

// @get /api/Orders/<userId>
router.get("/:id",protect, getUserOrders);


export default router;