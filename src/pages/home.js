import React from "react";
import { PostMasonry, MasonryPost, PostGrid } from "../components/common";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";

const posts = gql`
  query {
    featuredPosts {
      image
      title
      date
      categories
      author
      link
      description
    }
    trendingPosts {
      image
      title
      date
      categories
      author
      link
      description
    }
  }
`;

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

export default function Home() {
  return (
    <Query query={posts}>
      {({ loading, error, data }) => {
        if (loading) return <div>Loading...</div>;
        else if (data) {
          const featuredPosts = mergeStyles(data.featuredPosts, featuredConfig);
          const lastFeaturedPost = featuredPosts.pop();
          const trendingPosts = mergeStyles(data.trendingPosts, trendingConfig);
          const recentPosts = [
            ...trendingPosts,
            ...featuredPosts,
            ...featuredPosts,
          ];

          return (
            <main className="home">
              <section className="container">
                <div className="row">
                  <h1>Featured Posts</h1>
                  <section className="featured-posts-container">
                    <PostMasonry
                      posts={featuredPosts}
                      columns={2}
                      tagsOnTop={true}
                    />
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
      }}
    </Query>
  );
}
