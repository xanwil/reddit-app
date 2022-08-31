import React, { useEffect, useState } from 'react';
import Article from './Article';
const axios = require('axios');

export default function Articles() {
const [articles, setArticles] = useState([]);

  const getArticles = async () => {
    try {
      const response = await axios.get('https://www.reddit.com/r/popular.json');
      //console.log(response);
      const articlesData = response.data.data.children;
      const articleData = articlesData.map((article) => article.data);

      setArticles(articleData);
    
    } catch (error) {
      console.error(error);
    }finally{

    }
  }

  function timeSince(previous) {
    const current = Date.now();
    //const previous = article.created;

    const elapsed = current - previous;

    const minutes = elapsed/60;
    const hours = minutes/60;
    
    if (hours < 1){
        return "Less than an hour ago"
    } else {
        return `${Math.floor(hours)} hours ago`
    }
}
  
useEffect(function() {
  getArticles()
}, []);

  return (
    <div>
      {/* <Articles /> */}
      {articles.map((article) => {
        return <Article title={article.title} score={article.score} author={article.author} num_comments={article.num_comments}  created={timeSince(article.created)}  />;
      })}
    </div>
  )
}
