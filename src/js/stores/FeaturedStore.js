const AppDispatcher = require('../dispatcher/AppDispatcher');
const {FeaturedConstants} = require('../constants/FeaturedConstants');
const {FeaturedActions} = require('../actions/FeaturedActions');
const assign = require('object-assign');
const EventEmitter = require('events');

var request = require('browser-request');

let _data = {};
let CHANGE_EVENT = 'CHANGE_EVENT';

export let FeaturedStore = assign(EventEmitter.prototype, {
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
AppDispatcher.register((action) => {
  var text;

  switch(action.actionType) {
    
    case FeaturedConstants.GET_FEATURED_BY_CATEGORY:
        request(`/api/categories/${action.id}/featured`, (err, res) => {
          if (err) {
              _data.error = true;
              this.emitChange();
          }
          var json = JSON.parse(res.body);
          _data.movies = json.objects;
        });
        this.emitChange();
        break;
    case FeaturedConstants.GET_ALL_FEATURED:
        request(`/api/featured`, (err, res) => {
          if (err) {
              _data.error = true;
              this.emitChange();
          }
          var json = JSON.parse(res.body);
          _data = assign(_data, json.objects);
        });
        this.emitChange();
        break;
  }
});