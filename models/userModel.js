import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: "USER", // or ADMIN
    },
    password: {
      type: String,
      required: true,
    },
    bookmarks: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Place",
      },
    ],
  },
  {
    timestamps: true,
  }
);

// exceuted before save data to db
userSchema.pre("save", async function (next){

    // If password field is not edited
    if(!this.isModified("password")){
        next();
    }

    // If password field is changed
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    
})

// util method to check password
userSchema.methods.matchPassword = async function(enteredPassword){

    // return boolean
    return await bcrypt.compare(enteredPassword, this.password);
}


const User = mongoose.model("User", userSchema);

export default User;