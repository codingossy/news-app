import axios from "axios";
import React, { useState, useEffect } from "react";
import { NewsItem } from "./NewsItem";

const NewsList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=4cb0658e0ad04300aa4fabe85a038400`
      );
      setArticles(response.data.articles);
      console.log(response);
    };
    getArticles();
  }, []);

  return (
    <>
    <div className="flex items-center justify-center pt-4">
        <h1 className="text-3xl capitalize">top news around the world</h1>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-4 gap-y-4  py-10">
      {articles.map((article) => {
        return (
          <NewsItem 
            title={article.title}
            description={article.description}
            author={article.author}
            url={article.url}
            urlToImage={article.urlToImage}
            content={article.content}
            publishedAt={article.publishedAt}
            source={article.source.name}
          />
        );
      })}
    </div>
    </>
  );
};

export default NewsList;
