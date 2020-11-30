const featuredPosts = require("./mocks/featured");
const trendingPosts = require("./mocks/trending");
const fs = require("fs");
const path = require("path");

module.exports = {
  resolvers: {
    Query: {
      featuredPosts: () => featuredPosts,
      trendingPosts: () => trendingPosts,
      recentPosts: () => [...trendingPosts, ...featuredPosts, ...featuredPosts],
    },
  },
  schema: fs
    .readFileSync(path.resolve(__dirname, "../posts-schema.graphql"))
    .toString(),
};
