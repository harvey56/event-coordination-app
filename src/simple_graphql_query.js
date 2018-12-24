///<reference types="webpack-env" />

import ApolloClient, { gql } from 'apollo-boost';

// simple graphql query to test the server connection and setting

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
});

const query = gql`
    {
      business(term: "Subway", location: "NYC") {
        name
        id
        alias
        rating
        url
      }
    }
  `

client.query({query})
    .then(({ data }) => console.log('data', data))
    .catch(console.error)
