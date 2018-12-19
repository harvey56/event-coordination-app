import express from 'express';
const { ApolloServer, gql } = require('apollo-server-express');

const app = express();

const server = new ApolloServer({
  // schema definition
  typeDefs: './src/schema.graphql',
  // resolvers
  resolvers: './src/resolvers',
});

server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
)