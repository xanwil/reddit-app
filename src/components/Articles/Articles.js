import React, { useEffect, useState } from 'react';
import Article from '../Article/Article';
const axios = require('axios');


export default function Articles() {
const [articles, setArticles] = useState([]);

  const getArticles = async () => {
    try {
      const response = await axios.get('https://www.reddit.com/search/.json?q=brighton%20and%20hove');
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
    const elapsed = (current/1000) - previous;

    const minutes = elapsed/60;
    const hours = minutes/60;
    const days = Math.round(hours/24);
    
    
    if (days < 1){
        return "Less than a day ago"
    } else {
        return `${days} days ago`
    }
} 


  
useEffect(function() {
  getArticles()
}, []);

  return (
    <div className='articles'>
      {/* <Articles /> */}
      {articles.map((article) => {
        return <Article 
                  title={article.title} 
                  score={article.score} 
                  author={article.author} 
                  num_comments={article.num_comments}  
                  created={timeSince(article.created)} 
                  secure_media={article.secure_media} 
                  image={article.url_overridden_by_dest} 
                  //video={article.secure_media.reddit_video.fallback_url}
              />;
      })}
    </div>
  )
}