const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const cors = require('cors');
const typeDefs = require('./schema.graphql');
const resolvers = require('./resolvers');
const YelpAPI = require('../datasources/businesses');

require('dotenv').config({path: '../.env'});

const router = express.Router();
const app = express();

app.use(cors());
app.use(router);

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../dist/index.html'));
});

const server = new ApolloServer({
  typeDefs,
  resolvers,
  formatError: error => ({
    name: error.name,
    message: error.message.replace('Context creation failed: ', '')
  }),
  playground: {
		settings: {
      		'editor.theme': 'dark'
    }
  },
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

var port = process.env.PORT || 4000;

server.applyMiddleware({ app, path: '/graphql' });

app.listen({ port }, () => {
  console.log(`Apollo Server is listening on ${server.graphqlPath} on port ${port}`);
});