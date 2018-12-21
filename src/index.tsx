///<reference types="webpack-env" />

import * as React from "react";
import * as ReactDOM from "react-dom";
import App from './App';
// import ApolloClient from "apollo-boost";
import { ApolloProvider } from 'react-apollo';

import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { RestLink } from 'apollo-link-rest';

// setup RestLink with a custom API endpoint
// const restLink = new RestLink({ uri: "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/graphql/" });

import { setContext } from 'apollo-link-context';

const YELP_BASE_URI = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/graphql';

const httpLink = new HttpLink({
  uri: YELP_BASE_URI,
  headers: {
    authorization: `Bearer ${process.env.API_KEY}`,
    'content-type': 'application/graphql',
    'locale': 'en_US'
  }
});

const cache = new InMemoryCache();

const client = new ApolloClient({
  link: httpLink,
  cache,
});


// const authLink = setContext((_, { headers }) => {
//   // get the authentication token from local storage if it exists
//   const token = localStorage.getItem('token');
//   // return the headers to the context so httpLink can read them
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : "",
//     }
//   }
// });

// const client = new ApolloClient({
//   uri: 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/graphql',
//   headers: {
//     authorization: `Bearer NXsuVfuXjTiJmlSs1dHn92xnXFpo3G1KaJE0lzQoAOuEMbNyhXkyeWEWoril1xWZU1sMSJQgx1ZAJ0drAup9Sa9FNf5eJCKiWb7_t1eWRhSlkaVuWFXGK2cUjSgaXHYx`,
//     'content-type': 'application/graphql',
//     locale: 'en-US'
//   }
  // request: operation => {
  //   return new Promise((resolve, reject) => {
  //     operation.setContext({
  //       headers: {
  //         authorization: `Bearer NXsuVfuXjTiJmlSs1dHn92xnXFpo3G1KaJE0lzQoAOuEMbNyhXkyeWEWoril1xWZU1sMSJQgx1ZAJ0drAup9Sa9FNf5eJCKiWb7_t1eWRhSlkaVuWFXGK2cUjSgaXHYx`,
  //       },
  //     }).then(console.log("prout"));
  //   })
  // }
  // link: httpLink,
  // cache: new InMemoryCache(),
// })
  
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
