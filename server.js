import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import cors from "cors";

import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import placeRoutes from "./routes/placeRoutes.js";
import articleRoutes from "./routes/articleRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import { errorHandler, notFound } from "./middlewares/errorMiddleware.js";

dotenv.config();

// DB Connection
connectDB();

const app = express();

app.use(express.json());
app.use(cors());

app.get("/",(req,res,next)=>{
    res.status(200);
    res.json({
        message : `Travel App API !!`
    })
})

app.use("/api/users/", userRoutes);
app.use("/api/places/", placeRoutes);
app.use("/api/articles/", articleRoutes);
app.use("/api/orders", orderRoutes);

// Error Handling
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`.yellow.bold);
});