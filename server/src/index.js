const express = require('express');
const bodyParser = require('body-parser');
const { ApolloServer, gql } = require('apollo-server-express');
const cors = require('cors');
const typeDefs = require('./schema.graphql');
const resolvers = require('./resolvers');
const YelpAPI = require('../datasources/businesses');
const graphqlHTTP = require('express-graphql');

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

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// app.use('/graphql', graphqlHTTP({
//   schema: typeDefs,
//   rootValue: resolvers,
//   graphiql: true,
// }));

// server.applyMiddleware({ app, path: '/graphql' });
server.applyMiddleware({ app });

app.listen({ port: process.env.PORT || 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
)