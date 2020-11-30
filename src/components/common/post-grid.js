import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { Pagination } from "antd";
import { TagRow } from "./";

export default function PostGrid({ posts }) {
  const [pageSize, setPageSize] = useState(9);
  const [current, setCurrent] = useState(1);

  const paginatedPosts = useMemo(() => {
    const lastIndex = current * pageSize;
    const firstIndex = lastIndex - pageSize;

    return posts.slice(firstIndex, lastIndex);
  }, [current, pageSize, posts]);

  useEffect(() => {
    current !== 1 &&
      window.scroll({
        top: 500,
        left: 0,
        behavior: "smooth",
      });
  }, [current, pageSize]);

  return (
    <section className="grid-pagination-container">
      <section className="post-grid container">
        {paginatedPosts.map((post, index) => (
          <div className="post-container">
            <figure>
              <Link to={post.link}>
                <img src={post.image} alt={post.title} />
              </Link>
            </figure>
            <TagRow tags={post.categories} />
            <h2>{post.title}</h2>
            <p className="author-text">
              <span>
                By:
                <Link to={`/authors/${post.author}`}>{post.author}</Link>
              </span>
              <span>- {post.date}</span>
            </p>
            <p className="description-text">{post.description}</p>
            <Link to={post.link}>Read mode ...</Link>
          </div>
        ))}
      </section>
      <Pagination
        simple
        showSizeChanger
        onShowSizeChange={setPageSize}
        pageSize={pageSize}
        total={posts.length}
        defaultCurrent={current}
        onChange={setCurrent}
      />
    </section>
  );
}
