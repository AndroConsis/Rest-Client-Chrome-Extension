var app = angular.module("myApp", ["ngResource", "ui.router"]);

app.config(function($stateProvider,$urlRouterProvider,$httpProvider) {
    $stateProvider.state('movies', {
        url: '/movies',
        templateUrl : "templates/getform.html",
        controller : "getController",
    })
    .state('viewMovie',{
        url: '/movies/:id/view',
        templateUrl : "templates/getParticularView.html",
        controller : "getParticularView"
    })
    .state('newMovie', {
        url: '/movies/new',
        templateUrl : "templates/postform.html",
         controller : "postController",
    })
    .state('editMovie', {
        url: '/movies/:id/edit',
        templateUrl : "templates/putform.html",
         controller : "putController",
    });
});

app.run(function($state, $rootScope, $location){
  $state.go('movies');
  console.log($location.absUrl());
});