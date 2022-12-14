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
        type: mongoose.Decimal128,
      },
      longitude: {
        type: mongoose.Decimal128,
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
      type: mongoose.Decimal128,
      required: true,
    },
    dealPrice: {
      type: mongoose.Decimal128,
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
