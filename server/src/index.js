const { GraphQLServer } = require('graphql-yoga')

// mockup data
let links = [{
  id: 'link-0',
  url: 'www.howtographql.com',
  description: 'Fullstack tutorial for GraphQL'
}];

let idCount = links.length
const resolvers = {
  Query: {
    info: () => `This is the API of a Hackernews Clone`,
    feed: () => links,
  },
  Mutation: {
    post: (parent, args) => {
       const link = {
        id: `link-${idCount++}`,
        description: args.description,
        url: args.url,
      }
      links.push(link)
      return link
    }
  },
}

const server = new GraphQLServer({
  // schema definition
  typeDefs: './src/schema.graphql',
  // resolvers
  resolvers,
})
server.start(() => console.log(`Server is running on http://localhost:4000`))