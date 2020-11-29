import React, { useEffect, useState } from "react";
import { PostMasonry } from "../components/common";
import { fetchPosts } from "../api";

const trendingConfig = {
  1: {
    gridArea: "1 / 2 / 3 / 3",
  },
};

const mergeStyles = function (posts, config) {
  posts.forEach((post, index) => {
    post.style = config[index];
  });
  return posts;
};

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPostsFromApi = async () => {
      const apiPosts = await fetchPosts();
      setPosts(mergeStyles(apiPosts.slice(0, 5), trendingConfig));
    };
    fetchPostsFromApi();
  }, []);

  return (
    <section className="container home">
      <div className="row">
        <h2>Trending Posts</h2>
        <PostMasonry posts={posts} columns={3} />
      </div>
    </section>
  );
}
