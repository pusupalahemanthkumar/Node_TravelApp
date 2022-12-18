import asyncHandler from "express-async-handler";

import Order from "../models/orderModel.js";

const getUserOrders = asyncHandler(async (req, res, next) => {
  try {
    const userId = req.params.id;
    const orders = await Order.find({ userId });
    res.json(orders);
  } catch (error) {
    throw error;
  }
});

const placeOrder = asyncHandler(async (req, res, next) => {
  try {
    const order = await Order.create(req.body);
    res.json(order);
  } catch (error) {
    throw error;
  }
});

export { getUserOrders, placeOrder};
