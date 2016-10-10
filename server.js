//
// # SimpleServer
//
// A simple chat server using Socket.IO, Express, and Async.
//
var http = require('http');
var path = require('path');

var async = require('async');
var socketio = require('socket.io');
var express = require('express');
var server = express();
server.use('/', express.static(__dirname + '/client'));
server.get('/api/videos', function (req, res) {
res.json({
 objects: [
  {
    name: 'Aquafulness',
    embedUrl: 'https://www.youtube.com/embed/DP0wDz-akSw',
    id: 'DP0wDz-akSw',
    url: '/videos/DP0wDz-akSw',
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
    description: 'Aquafulness',
    embedUrl: 'https://www.youtube.com/embed/DP0wDz-akSw',
    id: 'DP0wDz-akSw',
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
    embedUrl: 'DP0wDz-akSw',
    type: 'video'
  }   
]
});
});
server.get('/api/videos/:id', function (req, res) {
res.json({
 objects: [
  {
    id: 'DP0wDz-akSw',
    name: 'Aquafulness',
    embedUrl: 'https://www.youtube.com/embed/' + req.params.id,
    type: 'video'
  }   
]
});
});
server.get('/api/categories/id', function (req, res) {
res.json({
    id: 'uploads',
    name: 'Uppladdningar',
});
});
server.get('/api/categories/:categoryId/videos', function (req, res) {
res.json({
 objects: [
  {
    id: 'DP0wDz-akSw',
    name: 'Aquafulness',
    embedUrl: 'https://www.youtube.com/embed/' + req.params.videoId,
    type: 'video'
  }   
]
});
});
server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  
});