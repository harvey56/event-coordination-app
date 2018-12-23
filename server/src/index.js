const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const cors = require('cors');
const typeDefs = require('./schema.graphql');
const resolvers = require('./resolvers');
const YelpAPI = require('../datasources/businesses');

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
      token: "Bearer NXsuVfuXjTiJmlSs1dHn92xnXFpo3G1KaJE0lzQoAOuEMbNyhXkyeWEWoril1xWZU1sMSJQgx1ZAJ0drAup9Sa9FNf5eJCKiWb7_t1eWRhSlkaVuWFXGK2cUjSgaXHYx",
    };
  },
})

const app = express();
app.use(cors());

server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
)