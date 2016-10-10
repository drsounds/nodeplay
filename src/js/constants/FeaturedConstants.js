const keymirror = require('keymirror');
const AppDispatcher = require('../dispatcher/AppDispatcher');


export let FeaturedConstants = keymirror({
    'GET_ALL_FEATURED': null,
    'GET_FEATURED_BY_CATEGORY': null
});