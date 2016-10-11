const AppDispatcher = require('../dispatcher/AppDispatcher');
const {CategoryConstants} = require('../constants/CategoryConstants');
const {CategoryActions} = require('../actions/CategoryActions');
const assign = require('object-assign');
const EventEmitter = require('events');
const request = require('browser-request');

let _data = {
    categories: {},
    objects: []
};
let CHANGE_EVENT = 'CHANGE_EVENT';

export let CategoryStore = assign(EventEmitter.prototype, {
    getData() {
        return _data;
    },
    emitChange() {
        this.emit(CHANGE_EVENT);
    },

    /**
    * @param {function} callback
    */
    addChangeListener (callback) {
        this.on(CHANGE_EVENT, callback);
    },
    
    /**
    * @param {function} callback
    */
    removeChangeListener (callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
});


// Register callback to handle all updates
AppDispatcher.register(function (action) {
  var text;

  switch(action.actionType) {
      case CategoryConstants.GET_CATEGORY_BY_ID:
        request(`/api/categories/${action.id}`, (err, res) => {
          if (err) {
              _data.error = true;
              this.emitChange();
          }
          var json = JSON.parse(res.body);
          _data.objects = json.objects;
            CategoryStore.emitChange(); 
            console.log("Category", _data);
        });
        break;
    case CategoryConstants.GET_CATEGORY_BY_ID:
        request(`/api/categories/${action.id}`, (err, res) => {
          if (err) {
              _data.error = true;
              this.emitChange();
          }
          var json = JSON.parse(res.body);
          _data.categories[action.id] = json;
            console.log("Categories", _data);
        CategoryStore.emitChange();
        });
        break;
  }
});