// YELP API

const resolvers = {
  Query: {
    businesses: async (_, { term, location }, { dataSources }) =>
      dataSources.YelpAPI.getAllBusinesses({ term: term, location: location }),
  }
}

module.exports = resolvers;
