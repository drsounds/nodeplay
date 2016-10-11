const AppDispatcher = require('../dispatcher/AppDispatcher');
const {MovieConstants} = require('../constants/MovieConstants');
const {MovieActions} = require('../actions/MovieActions');
const assign = require('object-assign');
const EventEmitter = require('events');

var request = require('browser-request');

let _data = {
  latest: [],
  categories: {},
  movies: {}
};
let CHANGE_EVENT = 'CHANGE_EVENT';

export let MovieStore = assign(EventEmitter.prototype, {
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
    
    case MovieConstants.GET_MOVIE_BY_ID:
        request(`/api/videos/${action.id}`, (err, res) => {
          if (err) {
              _data.error = true;
              MovieStore.emitChange();
          }
          var json = JSON.parse(res.body);
          _data.movies[action.id] = json.objects;
          MovieStore.emitChange();
        });
        break;
    case MovieConstants.GET_MOVIES_BY_CATEGORY:
        request(`/api/categories/${action.id}/videos`, (err, res) => {
          if (err) {
              _data.error = true;
              MovieStore.emitChange();
          }
          var json = JSON.parse(res.body);
          _data.categories[action.id] = json;
            MovieStore.emitChange();
        });
        break;
    case MovieConstants.GET_RECENT_MOVIES:
        request(`/api/videos`, (err, res) => {
          if (err) {
              _data.error = true;
              MovieStore.emitChange();
          }
          var json = JSON.parse(res.body);
          _data.objects = json.objects;
            MovieStore.emitChange();
        });
        break;
  }
});