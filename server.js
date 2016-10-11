//
// # SimpleServer
//
// A simple chat server using Socket.IO, Express, and Async.
//
var http = require('http');
var path = require('path');
var request = require('request');
var async = require('async');
var express = require('express');
var YouTube = require('./youtube');

var youTube = new YouTube('AIzaSyBzAUql-3lvz8ueO0drxBjXWMnr68zEVb0');

var server = express();
server.use('/', express.static(__dirname + '/client'));
var fs = require('fs');

var channelId = 'UC5tN7fKkW8J4rrCfxt9pWMQ';

server.get('/api/categories/:categoryId/videos', function (req, res) {
 youTube.getVideosOnPlaylist(req.params.categoryId, function(error, result) {
  if (error) {
   console.log(error);
    console.log(error);
  }
  else {
    res.json(result);
  }
});
});
server.get('/api/videos/:id', function (req, res) {
 youTube.getVideoById(req.params.id, function (err, result) {
  if (err) {
   console.log(err);
   res.json({error: true});
   return;
  }
  res.json(result);
 });
});
server.get('/api/videos', function (req, res) {
 youTube.getVideosForChannel(channelId, function (err, result) {
  if (err) {
   console.log(err);
   res.json({error: true});
   return;
  }
  res.json(result);
 });
});
server.get('/api/categories/:categoryId/featured', function (req, res) {
 res.json({
  objects: [
   {
     imageUrl: '',
     name: 'Aquafulness',
     image_url: 'https://i.ytimg.com/vi/DP0wDz-akSw/default.jpg?sqp=CJit878F&rs=AOn4CLA_q3_51YT9tbJ_VcYWTCw0q80Uyg',
     description: 'Aquafulness',
     embedUrl: 'https://www.youtube.com/embed/DP0wDz-akSw',
     id: 'DP0wDz-akSw',
     type: 'video'
   }   
 ]
 });
});
server.get('/api/featured', function (req, res) {
 res.json({
  objects: [
   {
     name: 'Aquafulness',
     description: 'Aquafulness',
     image_url: 'https://i.ytimg.com/vi/DP0wDz-akSw/default.jpg?sqp=CJit878F&rs=AOn4CLA_q3_51YT9tbJ_VcYWTCw0q80Uyg',
     embedUrl: 'https://www.youtube.com/embed/DP0wDz-akSw',
     id: 'DP0wDz-akSw',
     url: '/video/DP0wDz-akSw',
     type: 'video'
   }   
 ]
 });
});

server.get('/api/recent/videos', function (req, res) {
 youTube.getVideosForChannel(channelId,function (err, result) {
  if (err) {
   console.log(err);
   res.json();
   return;
  }
  res.json(result);
 })
});
server.get('/api/categories', function (req, res) {
 youTube.getPlaylistsForChannel(channelId, function (err, result) {
  if (err) {
   res.json(err);
  return;
   
  }
  res.json(result);
  
 })
});
server.get('/*', function (req, res) {

    var index = fs.readFileSync(__dirname + '/client/index.html');
    res.write(index);
    res.end();
});
server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  console.log("A");
});
