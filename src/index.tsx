///<reference types="webpack-env" />

import * as React from "react";
import * as ReactDOM from "react-dom";
import App from './App';
import { ApolloProvider } from 'react-apollo';

// import { ApolloClient } from 'apollo-client';
// import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
// import { RestLink } from 'apollo-link-rest';
// import gql from 'graphql-tag';
import ApolloClient, { gql } from 'apollo-boost';
// import GraphQLClient from './GraphqlClient';
import { setContext } from 'apollo-link-context';

const client = new ApolloClient({
  uri: 'https://event-coordination-app.herokuapp.com/graphql', //'http://localhost:4000/graphql',
  headers: {
    authorization: `Bearer ${process.env.API_KEY}`,
    'content-type': 'application/json',
    // 'locale': 'en_US'
  }
});
  
const renderDom = () => {
  ReactDOM.render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
    , document.getElementById('root'));
 }

renderDom();

//hot reloading done in the App component with react-hot-loader
// if (module.hot) {
//   console.log("hot update");
//   module.hot.accept('./App', () => {
//     renderDom();
//   });
// }
