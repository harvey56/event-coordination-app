///<reference types="webpack-env" />

import * as React from "react";
import * as ReactDOM from "react-dom";
import App from './App';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const httpLink = createHttpLink({
  uri: 'http://localhost:4000'
})

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})
  
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
