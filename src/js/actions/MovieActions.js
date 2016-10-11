const AppDispatcher = require('../dispatcher/AppDispatcher');
const {MovieConstants} = require('../constants/MovieConstants');


export let MovieActions = {

    loadMovieById(id){
        AppDispatcher.dispatch({
            actionType: MovieConstants.GET_MOVIE_BY_ID,
            categoryId: id
        });
    },
    loadRecent() {
        AppDispatcher.dispatch({
            actionType: MovieConstants.GET_RECENT_MOVIES
        });
    },
    loadMoviesByCategory(id){
        AppDispatcher.dispatch({
            actionType: MovieConstants.GET_MOVIES_BY_CATEGORY_ID,
            categoryId: id
        });
    }
}