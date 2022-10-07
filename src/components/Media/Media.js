import React from "react";
import "./Media.css";

export default function Media({ article }) {
  const decodeHTML = (html) => {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  };

  if (article?.post_hint === "image")
    return (
      <div
        className="media media-image"
        style={{
          backgroundImage: "url(" + article.url_overridden_by_dest + ")",
        }}
      ></div>
    );

  if (article?.post_hint === "hosted:video") {
    return (
      <video controls autoPlay muted className="media">
        <source
          src={article?.media?.reddit_video?.fallback_url}
          type="video/mp4"
        />
        <p>
          Your browser doesn't support HTML video. Here is a
          <a href={article.url_overridden_by_dest}>link to the video</a>{" "}
          instead.
        </p>
      </video>
    );
  }

  if (article?.post_hint === "rich:video") {
    return (
      <div
        dangerouslySetInnerHTML={{
          __html: decodeHTML(article?.secure_media_embed?.content),
        }}
        className="media"
      />
    );
  }

  return article.self_text;
}
