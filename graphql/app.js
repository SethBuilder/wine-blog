const koa = require("koa");
const send = require("koa-send");
const Router = require("@koa/router");
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
server.applyMiddleware({ app });

app.use(async (ctx) => {
  await send(ctx, ctx.path, { root: __dirname + "/public/index.html" });
});

const PORT = process.env.PORT || 4000;
app.listen({ port: PORT }, () => {
  // fetchPosts();// to populate mock data
  console.log(
    `Server running at http://localhost:${PORT + server.graphqlPath}`
  );
});
