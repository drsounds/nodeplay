const AppDispatcher = require('../dispatcher/AppDispatcher');
const CategoryConstants = require('../actions/CategoryActions');


export let CategoryActions = {
    loadCategories() {
        AppDispatcher.dispatch({
            actionType:CategoryActions.GET_ALL_CATEGORIES
        });
    },
    loadCategory(id){
        AppDispatcher.dispatch({
            actionType: CategoryActions.GET_CATEGORY_BY_ID,
            categoryId: id
        });
    }
}