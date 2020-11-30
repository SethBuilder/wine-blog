const koa = require("koa");
const { ApolloServer } = require("apollo-server-koa");
const { makeExecutableSchema } = require("graphql-tools");
const { resolvers, typeDefs } = require("./schemas");
const { fetchPosts } = require("./schemas/posts/mocks/api");
require("dotenv").config();
const PORT = 4000;

const server = new ApolloServer({
  schema: makeExecutableSchema({ typeDefs, resolvers }),
});

const app = new koa();
server.applyMiddleware({ app });

app.listen({ port: PORT }, () => {
  //   fetchPosts();
  console.log(
    `Server running at http://localhost:${PORT + server.graphqlPath}`
  );
});
