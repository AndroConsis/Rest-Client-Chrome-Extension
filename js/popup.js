$( document ).ready(function() {
    $('select').material_select();
});

app.controller("mainController", function($scope, $location, $state, $rootScope){

  $scope.urlInput = "Url is here";
  $scope.urlInput = $location.path();
  $scope.selectedMethod = "1";
  $rootScope.selectedMethod = $scope.selectedMethod;

});

app.controller("getController", function($scope, popupService,$window,Movie, $state, $rootScope){
  $scope.limit = 20;
  $rootScope.selectedMethod = "1";
 $scope.movies = Movie.query(); //fetch all movies. Issues a GET to /api/movies
  $scope.deleteMovie = function(movie) { // Delete a movie. Issues a DELETE to /api/movies/:id
    if (popupService.showPopup('Really delete this?')) {
      movie.$delete(function() {
        $window.location.href = '/movies'; //redirect to home
      });
    }
  };
});

app.controller("getParticularView", function($scope,$stateParams,Movie, $rootScope){
    $rootScope.selectedMethod = "1"
    $scope.movie=Movie.get({id:$stateParams.id});

})

app.controller("postController",function($scope, Movie, $state, $rootScope){
    
$rootScope.selectedMethod = "2";
    $scope.movie=new Movie();

    $scope.addMovie=function(){
        $scope.movie.$save(function(){
            $state.go('movies');
        });
    }
});

app.controller("putController", 
  function($scope, $state, $stateParams, Movie){
   $scope.updateMovie=function(){
        $scope.movie.$update(function(){
            $state.go('movies');
        });
    };

    $scope.loadMovie=function(){
        $scope.movie=Movie.get({id:$stateParams.id});
    };

    $scope.loadMovie();
});

app.factory('Movie',function($resource){
    return $resource('http://movieapp-sitepointdemos.rhcloud.com/api/movies/:id',{id:'@_id'},{
        update: {
            method: 'PUT'
        }
    });
});

app.service('popupService',function($window){
    this.showPopup=function(message){
        return $window.confirm(message);
    }
});

