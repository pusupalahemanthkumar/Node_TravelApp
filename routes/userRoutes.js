import express from "express";

import { authUser, registerUser, getuserDetails, addBookmarks, getBookmarks } from "../controllers/userController.js";
import { protect } from "../middlewares/authMiddleWare.js"

const router = express.Router();

// @GET - /api/users/
router.get("/", protect, getuserDetails);

// @POST - /api/users/login
router.post("/login", authUser);

// @POST - /api/users/register
router.post("/register", registerUser);

router.get("/add-bookmarks/:id",protect, addBookmarks);

router.get("/get-bookmarks",protect,getBookmarks);

export default router;
