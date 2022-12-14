import asyncHandler from "express-async-handler";

import User from "../models/userModel.js";
import generateToken from "../utils/generateTokens.js";

//Authenciate User
const authUser = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      userName: user.userName,
      email: user.email,
      phoneNumber: user.phoneNumber,
      image: user.image,
      role: user.role,
      bookmarks: user.bookmarks,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid Email or Password !!");
  }
});

// Register User
const registerUser = asyncHandler(async (req, res, next) => {
  const email = req.body.email;
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User Already Exists !!");
  }

  const user = await User.create(req.body);

  if (user) {
    res.status(200);
    res.json({
      _id: user._id,
      userName: user.userName,
      email: user.email,
      phoneNumber: user.phoneNumber,
      image: user.image,
      role: user.role,
      bookmarks: user.bookmarks,
      token: generateToken(user._id),
    });
    
  }else {
    res.status(400);
    throw new Error("Invalid User Data !!");
  }

});

const getuserDetails = asyncHandler ( async (req,res,next)=>{
  if(req.user){
    res.status(200);
    res.json(req.user);
  }
})

export { authUser, registerUser, getuserDetails };
