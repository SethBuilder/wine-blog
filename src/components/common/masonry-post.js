import React from "react";
import { categoryColors } from "./styles";

export default function MasonryPost({ post, tagsOntop }) {
  const imageBackground = { backgroundImage: `url("${post.image}")` };
  const style = { ...imageBackground, ...post.style };

  return (
    <a className="masonry-post overlay" style={style} href={post.link}>
      <div className="image-text">
        <div className="tags-container">
          {post.categories.map((tag, index) => (
            <span
              key={index}
              className="tag"
              style={{ backgroundColor: categoryColors[tag] }}
            >
              {tag.toUpperCase()}
            </span>
          ))}
        </div>
        <div>
          <h2 className="image-title">{post.title}</h2>
          <span className="image-date">{post.date}</span>
        </div>
      </div>
    </a>
  );
}
