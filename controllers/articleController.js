import asyncHandler from "express-async-handler";

import Article from "../models/ArticleModel.js";

const getArticles = asyncHandler(async (req, res, next) => {
  const query = req.body;
  try {
    const articles = await Article.find(query);
    res.json(articles);

  } catch (error) {
    res.status(500);
    throw new Error("Something went wrong !!");
  }
 
});

const addArticle = asyncHandler(async (req, res, next)=>{
    try {
        const article = await Article.create(req.body);
        res.json(article);
      } catch (error) {
        res.status(500);
        throw new Error("Something went wrong !!");
      }

})

export { getArticles , addArticle };
