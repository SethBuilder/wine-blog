import React from "react";
import App from "./App";
import { render } from "react-dom";
import "./assets/scss/base.scss";
import "antd/dist/antd.css";
import "@quasar/extras/ionicons-v4/ionicons-v4.css";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
  uri: "/graphql",
});

const ApolloApp = (AppComponent) => (
  <ApolloProvider client={client}>
    <AppComponent />
  </ApolloProvider>
);

render(ApolloApp(App), document.getElementById("root"));
