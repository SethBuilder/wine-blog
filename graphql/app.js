const koa = require("koa");
const serve = require("koa-static");
const { ApolloServer } = require("apollo-server-koa");
const { makeExecutableSchema } = require("graphql-tools");
const { resolvers, typeDefs } = require("./schemas");
const { fetchPosts } = require("./schemas/posts/mocks/api");
require("dotenv").config();
const path = require("path");

const server = new ApolloServer({
  schema: makeExecutableSchema({ typeDefs, resolvers }),
});

const app = new koa();
const dist = path.join(__dirname, "/public");

server.applyMiddleware({ app });

const PORT = process.env.PORT || 4000;
app.use(serve(dist));
app.listen({ port: PORT }, () => {
  // fetchPosts();// to populate mock data
  console.log(
    `Server running at http://localhost:${PORT + server.graphqlPath}`
  );
});
