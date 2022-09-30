import React, { useEffect, useState, useContext } from "react";
import Article from "../Article/Article";
import ProgressBar from "../ProgressBar/ProgressBar";
import ThingsContext from "../thingsContext";
import timeSince from "../utils/timeSince";

const axios = require("axios");

export default function Articles() {
  const [articles, setArticles] = useState([]);

  const {query} = useContext(ThingsContext);

  const getArticles = async () => {
    try {
      const response = await axios.get(
        `https://www.reddit.com${query}`
      );
      //console.log(response);
      const articlesData = response.data.data.children;
      const articleData = articlesData.map((article) => article.data);

      setArticles(articleData);
    } catch (error) {
      console.error(error);
    } finally {
    }
  };



  useEffect(function () {
    getArticles();
  }, [query]);



  return (
    <div className="articles">
      {/* <ProgressBar /> */}
      {articles.map((article) => {
        return (
          <Article
            key={article.permalink} 
            title={article.title}
            score={article.score}
            author={article.author}
            num_comments={article.num_comments > 0 ? article.num_comments -1 : 0}
            created={timeSince(article.created)}
            secure_media={article.secure_media}
            image={article.url_overridden_by_dest}
            permalink={article.permalink}
            //video={article.secure_media.reddit_video.fallback_url}
          />
        );
      })}
    </div>
  );
}
