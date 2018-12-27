const { RESTDataSource } = require('apollo-datasource-rest');

class YelpAPI extends RESTDataSource {
    constructor() {
      super();
      this.baseURL = 'https://api.yelp.com/v3/';
    }

    async getAllBusinesses() {
        const res = await this.get('businesses');
        return res && res.length ? res.map(biz => this.businessReducer(biz)) : [];
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
            location: {
                address: business.location.display_address
            },
        };
    }

    async getBusinessById({ businessId }) {
        const res = await this.get('businesses', { id: businessId });
        return this.businessReducer(res[0]);
      }
      
    getBusinessesByIds({ businessIds }) {
        return Promise.all(
            businessIds.map(businessId => this.getBusinessById({ businessId })),
        );
    }
    
  }
  
  export default YelpAPI;