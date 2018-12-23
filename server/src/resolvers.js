// YELP API

const resolvers = {
  Query: {
    businesses: async (_, __, { dataSources }) =>
      dataSources.YelpAPI.getAllBusinesses(),
    business: (_, { term, location }, { dataSources }) =>
      dataSources.YelpAPI.getBusinessByTerm({ term: term, location: location }),
  }
}

module.exports = resolvers;
