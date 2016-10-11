//
// # SimpleServer
//
// A simple chat server using Socket.IO, Express, and Async.
//
var http = require('http');
var path = require('path');

var async = require('async');
var express = require('express');

var server = express();
server.use('/', express.static(__dirname + '/client'));
var fs = require('fs');

server.get('/api/categories/:categoryId/videos', function (req, res) {
 res.json({
  objects: [
   {
     id: 'DP0wDz-akSw',
     name: 'Aquafulness',
     image_url: 'https://i.ytimg.com/vi/DP0wDz-akSw/default.jpg?sqp=CJit878F&rs=AOn4CLA_q3_51YT9tbJ_VcYWTCw0q80Uyg',
     embedUrl: 'https://www.youtube.com/embed/' + req.params.videoId,
     type: 'video'
   }   
 ]
 });
});
server.get('/api/video/:id', function (req, res) {
 res.json({
     id: 'DP0wDz-akSw',
     name: 'Aquafulness',
     image_url: 'https://i.ytimg.com/vi/DP0wDz-akSw/default.jpg?sqp=CJit878F&rs=AOn4CLA_q3_51YT9tbJ_VcYWTCw0q80Uyg',
     embedUrl: 'https://www.youtube.com/embed/' + req.params.id,
     type: 'video'
   });
});
server.get('/api/videos', function (req, res) {
 res.json({
  objects: [
   {
     name: 'Aquafulness',
     image_url: 'https://i.ytimg.com/vi/DP0wDz-akSw/default.jpg?sqp=CJit878F&rs=AOn4CLA_q3_51YT9tbJ_VcYWTCw0q80Uyg',
     embedUrl: 'https://www.youtube.com/embed/DP0wDz-akSw',
     id: 'DP0wDz-akSw',
     url: '/videos/DP0wDz-akSw',
     type: 'video'
   }   
 ]
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
 res.json({
  objects: [
   {
     name: 'Aquafulness',
     image_url: 'https://i.ytimg.com/vi/DP0wDz-akSw/default.jpg?sqp=CJit878F&rs=AOn4CLA_q3_51YT9tbJ_VcYWTCw0q80Uyg',
     embedUrl: 'DP0wDz-akSw',
     type: 'video'
   }   
 ]
 });
});
server.get('/api/categories', function (req, res) {
 res.json({
  objects: [
   {
     id: 'uploads',
     name: 'Uppladdningar'
   }
    ]
 });
});
server.get('/*', function (req, res) {

    var index = fs.readFileSync(__dirname + '/client/index.html');
    res.write(index);
    res.end();
});
server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  
});
