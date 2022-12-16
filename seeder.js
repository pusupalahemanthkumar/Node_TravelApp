import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";

import Place from "./models/PlaceModel.js";
import Article from "./models/ArticleModel.js";
import connectDB from "./config/db.js";
import PlacData from "./places.js";
import ArticleData from "./articles.js"

dotenv.config();
connectDB();

const importPlacesData = async () => {
  try {
    await Place.deleteMany();
    const createdData = await Place.insertMany(PlacData);

    console.log("Data Imported!".green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

const importArticleData = async () => {
  try {
    await Article.deleteMany();
    
    await Article.insertMany(ArticleData);

    console.log("Data Imported!".green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

importPlacesData();
// importArticleData();
