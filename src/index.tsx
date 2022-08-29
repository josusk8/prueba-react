import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import {ApolloClient,HttpLink, gql, InMemoryCache, ApolloProvider} from '@apollo/client'


const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink ({
    uri:'https://countries.trevorblades.com'
  })
})

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ApolloProvider client={client}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </ApolloProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
