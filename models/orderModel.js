import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  placeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Place",
  },
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  placeName: {
    type: String,
    required: true,
  },
  journeyDate: {
    type: Date,
    required: true,
  },
});

const Order = mongoose.model("Order", orderSchema);

export default Order;
