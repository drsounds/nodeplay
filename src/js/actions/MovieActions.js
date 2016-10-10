const AppDispatcher = require('../dispatcher/AppDispatcher');
const MovieConstants = require('../actions/MovieActions');


export let MovieActions = {
    loadCategories() {
        AppDispatcher.dispatch({
            actionType: MovieActions.GET_ALL_CATEGORIES
        });
    },
    loadMovieById(id){
        AppDispatcher.dispatch({
            actionType: MovieActions.GET_MOVIE_BY_ID,
            categoryId: id
        });
    },
    loadMoviesByCategory(id){
        AppDispatcher.dispatch({
            actionType: MovieActions.GET_MOVIES_BY_CATEGORY_ID,
            categoryId: id
        });
    }
}