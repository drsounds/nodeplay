const AppDispatcher = require('../dispatcher/AppDispatcher');
const FeaturedConstants = require('../constants/FeaturedConstants');


export let FeaturedActions = {
    loadFeaturedByCategory(id) {
        AppDispatcher.dispatch({
            actionType: FeaturedConstants.GET_FEATURED_BY_CATEGORY,
            categoryId: id
        });
    },
    loadFeatured() {
        AppDispatcher.dispatch({
            actionType: FeaturedConstants.GET_ALL_FEATURED
        });
    }
}