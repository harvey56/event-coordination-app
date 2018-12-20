const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');



// 1
const typeDefs = gql`
	type Query {
		hello: String
	}
`;

const resolvers = {
	Query: {
		hello: () => 'Hello world!'
	}
};

// const server = new ApolloServer({
//   // schema definition
//   typeDefs: './src/schema.graphql',
//   // resolvers
//   resolvers: './src/resolvers',
// });

// server.applyMiddleware({ app });

// app.listen({ port: 4000 }, () =>
//   console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
// )

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
  introspection: true
})

const app = express();

server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
)