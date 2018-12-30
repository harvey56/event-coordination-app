const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const cors = require('cors');
const typeDefs = require('./schema.graphql');
const resolvers = require('./resolvers');
const YelpAPI = require('../datasources/businesses');

require('dotenv').config({path: '../.env'});

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
  introspection: true,
  dataSources: () => ({
	  YelpAPI: new YelpAPI()
  }),
  context: () => {
    return {
      token: `Bearer ${process.env.API_KEY}`
    };
  },
})

const app = express();
app.use(cors());

server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
)