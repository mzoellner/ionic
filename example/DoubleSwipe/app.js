var prototypeApp = angular.module('double-swipe', ['ionic']);

prototypeApp.controller('doubleSwipeController', function($scope) {

    $scope.canSwipeItems=true;

    $scope.messages = [ { title: "A message", body: "big body of message"},
        { title: "A message", body: "big body of message"},
        { title: "A message", body: "big body of message"},
        { title: "A message", body: "big body of message"},
        { title: "A message", body: "big body of message"},
        { title: "A message", body: "big body of message"} ];

});