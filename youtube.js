var request = require('request');

var api = 'https://www.googleapis.com/youtube/v3';

function YouTube (api_key) {
    this.api_key = api_key;
}

YouTube.prototype.search = function (params, cb) {
    this.request('GET', '/search', params, cb);
}
YouTube.prototype.getVideosForChannel = function (channelId, cb) {
    this.search({channelId: channelId}, cb);
}

YouTube.prototype.getPlaylistsForChannel = function (channelId,  cb) {
    this.request('GET', '/playlists', {
        channelId: channelId
    }, cb);
}

YouTube.prototype.getVideosOnPlaylist = function (playlistId,  cb) {
    this.request('GET', '/playlistItems', {
        playlistId: playlistId
    }, cb);
}

YouTube.prototype.getVideosForTagByChannel = function (tag, channelId, cb) {
    this.search({channelId: channelId, q: '##' + tag}, cb);
}
YouTube.prototype.request = function (method, url, params, cb) {
    var qs = 'key=' + this.api_key +'&type=video&part=snippet';
    for (var k in params) {
        qs += '&' + k + '=' + encodeURIComponent(params[k]);
    }
    request(api + url + '?' + qs, function (err, response, body) {
        if (err) {
            console.log(err, response, body);
            cb(err);
            return;
        }
        try {
            var data = JSON.parse(body);
            console.log(data);
            var objects = data.items.map(function (item) {
                var obj = {
                    name: item.snippet.title,
                    time: item.publishedAt,
                    id: item.id ? item.id.videoId ? item.id.videoId : item.id : '',
                    description: item.snippet.description,
                    type: item.id? item.id.kind ? item.id.kind.split('#')[1] : item.kind.split('#')[1] : 'object',
                    image_url: item.snippet.thumbnails.default.url,
                 
                };
                obj.url = '/' + obj.type + '/' + obj.id;
                return obj;
            });
            cb(null, {
                objects: objects
            });
            
        } catch (e) {
            console.log(api + url, e);
            cb(e);
        }
    })
}

module.exports = YouTube;