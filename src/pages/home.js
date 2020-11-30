import React from "react";
import { PostMasonry, MasonryPost, PostGrid } from "../components/common";
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
    post.author = "Seif Rocks";
    post.description =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";
  });
  return posts;
};

const featuredPosts = mergeStyles(posts.slice(0, 4), featuredConfig);
const lastFeaturedPost = featuredPosts.pop();
const trendingPosts = mergeStyles(posts.slice(-25, -20), trendingConfig);
const recentPosts = [...trendingPosts, ...featuredPosts, ...featuredPosts];

export default function Home() {
  return (
    <main className="home">
      <section className="container">
        <div className="row">
          <h1>Featured Posts</h1>
          <section className="featured-posts-container">
            <PostMasonry posts={featuredPosts} columns={2} tagsOnTop={true} />
            <MasonryPost post={lastFeaturedPost} tagsOnTop={true} />
          </section>
        </div>
      </section>
      <section className="bg-white">
        <section className="container">
          <div className="row">
            <h1>Recent Posts</h1>
            <PostGrid posts={recentPosts} />
          </div>
        </section>
      </section>
      <section className="container">
        <div className="row">
          <h1>Trending Now</h1>
          <PostMasonry posts={trendingPosts} columns={3} />
        </div>
      </section>
    </main>
  );
}
