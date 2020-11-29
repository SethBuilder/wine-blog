import React from "react";
import { PostMasonry } from "../components/common";
import { MasonryPost } from "../components/common";
import { fetchPosts } from "../api";
import posts from "../assets/mocks/posts";

const featuredConfig = {
  0: {
    gridArea: "1 / 1 / 2 / 3",
    height: "300px",
  },
  2: {
    height: "300px",
  },
  3: {
    height: "630px",
    marginLeft: "30px",
    width: "630px",
  },
};

const trendingConfig = {
  1: {
    gridArea: "1 / 2 / 3 / 3",
    height: "630px",
  },
};

const mergeStyles = function (posts, config) {
  posts.forEach((post, index) => {
    post.style = config[index];
  });
  return posts;
};

const featuredPosts = mergeStyles(posts.slice(0, 4), featuredConfig);
const lastFeaturedPost = featuredPosts.pop();
const trendingPosts = mergeStyles(posts.slice(-10, -5), trendingConfig);

export default function Home() {
  return (
    <section className="container home">
      <div className="row">
        <h1>Featured Posts</h1>
        <section className="featured-posts-container">
          <PostMasonry posts={featuredPosts} columns={2} tagsOnTop={true} />
          <MasonryPost post={lastFeaturedPost} tagsOnTop={true} />
        </section>

        <h1>Trending Posts</h1>
        <PostMasonry posts={trendingPosts} columns={3} />
      </div>
    </section>
  );
}
