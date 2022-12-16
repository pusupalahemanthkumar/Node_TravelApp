import asyncHandler from "express-async-handler";

import Place from "../models/PlaceModel.js";

const getPlaces = asyncHandler(async (req, res, next) => {
  const query = req.body;
  try {
    const places = await Place.find(query);
    res.json(places);
  } catch (error) {
    res.status(500);
    throw new Error("Something went wrong !!");
  }
});

const addPlace = asyncHandler(async (req, res, next) => {
  try {
    const place = await Place.create(req.body);
    res.json(place);
  } catch (error) {
    res.status(500);
    throw new Error("Something went wrong !!");
  }
});

export { getPlaces , addPlace };
