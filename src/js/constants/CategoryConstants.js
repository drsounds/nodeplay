const keymirror = require('keymirror');
const AppDispatcher = require('../dispatcher/AppDispatcher');


export let CategoryConstants = keymirror({
    'LIST_CATEGORIES': null,
    'GET_CATEGORY_BY_ID': null
});