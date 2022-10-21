import React from "react";

export const NewsItem = ({
  source,
  url,
  urlToImage,
  author,
  content,
  publishedAt,
  title,
  description,
}) => {
  return (
    <div className="border m-8 py-3">
      <div className="flex items-center justify-center text-white">
        <div className="w-[500px]  border-white text-white p-5 text-center">
          <img
            src={urlToImage}
            alt=""
            className="w-[300px] object-cover mb-5"
          />
          <h3 className="text-xl text-blue-400 py-4"><a href={url} target='/blank'>{title}</a></h3>
          <p className="text-sm">{description}</p>
        </div>
      </div>

      <div className="container">
        <h6 className="text-blue text-sm">Author: {author}</h6>
        <p>Source: {source}</p>
        <p className="text-xs">Published On: {publishedAt}</p>
      </div>
    </div>
  );
};
