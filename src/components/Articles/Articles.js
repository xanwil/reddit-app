import React from 'react';
import ArticleDescription from './ArticleDescription';
import ArticleLikes from './ArticleLikes';
import ArticleImage from './ArticleImage';
import ArticlePostedBy from './ArticlePostedBy';
import ArticleHoursAgo from './ArticleHoursAgo';
import ArticleCommentsNumber from './ArticleCommentsNumber';

export default function ArticleContainer() {
  return (
    <div>
      <ArticleDescription />
        <ArticleLikes />
        <ArticleImage />
        <ArticlePostedBy />
        <ArticleHoursAgo />
        <ArticleCommentsNumber />
    </div>
  )
}
