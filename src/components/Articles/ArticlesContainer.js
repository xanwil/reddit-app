import React, { useEffect, useState } from 'react';
import Articles from './Articles';
const axios = require('axios');

export default function ArticlesContainer() {
const [articles, setArticles] = useState([]);

  const getArticles = async () => {
    try {
      const response = await axios.get('https://www.reddit.com/r/popular.json');
      //console.log(response);
      const responseArticles = response.data.data.children;
      const articleData = responseArticles.map((article) => article.data);

      setArticles(articleData);
    
    } catch (error) {
      console.error(error);
    }finally{

    }
  }
  
useEffect(function() {
  getArticles()
}, []);

  return (
    <div>
      {/* <Articles /> */}
      {articles.map((article) => {
        return article.title
      })}
    </div>
  )
}
