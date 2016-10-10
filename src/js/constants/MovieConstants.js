const keymirror = require('keymirror');
const AppDispatcher = require('../dispatcher/AppDispatcher');


export let MovieConstants = keymirror({
    'GET_RECENT_MOVIES': null,
    'GET_MOVIE_BY_ID': null,
    'GET_MOVIES_BY_CATEGORY_ID': null
});