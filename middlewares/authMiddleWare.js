import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";

import User from "../models/userModel.js";

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // Get toekn
      token = req.headers.authorization.split(" ")[1];

      // Decode token
      const decode = jwt.verify(token, process.env.JWT_SECRET);

      // Check
      req.user = await User.findById(decode.id).select("-password");

      if (req.user) {
        next();
      } else {
        throw new Error("Not Authorized , Token Failed !!");
      }

    } catch (error) {

      console.log(error);
      res.status(401);
      throw new Error("Not Authorized , Token Failed!!");

    }
  }
  if (!req.headers.authorization) {
    res.status(401);
    throw new Error("Not Authorized , Token Failed!!");
  }
});

export { protect };
