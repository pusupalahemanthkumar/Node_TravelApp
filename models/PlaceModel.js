import mongoose from "mongoose";

const placeSchema = mongoose.Schema(
  {
    placeName: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    coordinates: {
      latitude: {
        type: Number,
      },
      longitude: {
        type: Number,
      },
    },
    images: [
      {
        type: String,
      },
    ],
    rating: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    dealPrice: {
      type: Number,
    },
    offer: {
      type: Boolean,
    },
    discountPercentage: {
      type: Number,
    },
    category: [{ type: String }],
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Place = mongoose.model("Place", placeSchema);

export default Place;
