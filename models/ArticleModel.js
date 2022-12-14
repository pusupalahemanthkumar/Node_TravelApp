import mongoose from "mongoose";

const articleSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    shortDescription: {
      type: String,
      required: true,
    },
    category: [{ type: String }],
    content: [
      {
        title: {
          type: String,
        },
        description: {
          type: String,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Article = mongoose.model("Article", articleSchema);

export default Article;
