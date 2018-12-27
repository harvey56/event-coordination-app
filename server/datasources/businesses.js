const { RESTDataSource } = require('apollo-datasource-rest');

class YelpAPI extends RESTDataSource {
    constructor() {
      super();
      this.baseURL = 'https://api.yelp.com/v3/businesses/';
    }

    willSendRequest(request) {
        request.headers.set('Authorization', this.context.token);
    }

    async getAllBusinesses({ term, location }) {
        const res = await this.get('search', { term: term, location: location });
        return /*res && res.length ?*/ res.businesses.map(biz => this.businessReducer(biz));//  : [];
    }
    
    businessReducer(business) {
        return {
            id: business.id || 0,
            alias: business.alias || '',
            name: business.name || '',
            image_url: business.image_url || '',
            is_closed: business.is_closed || '',
            url: business.url || '',
            price: business.price || '',
            rating: business.rating || '',
            review_count: business.review_count || '',
            location: business.location.display_address,
            distance: (business.distance).toFixed(2)
        };
    }

    // async getBusinessById({ businessId }) {
    //     const res = await this.get(businessId);
    //     return this.businessReducer(res[0]);
    // }
      
    // getBusinessesByIds({ businessIds }) {
    //     return Promise.all(
    //         businessIds.map(businessId => this.getBusinessById({ businessId })),
    //     );
    // }
    
  }
  
module.exports = YelpAPI;