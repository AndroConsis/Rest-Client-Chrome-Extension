$( document ).ready(function() {
    $('select').material_select();
});

function toast(msg) {
        var $toastContent = $('<span>'+msg+'</span>');
              Materialize.toast($toastContent, 2000);
    }

app.controller("getController", function($scope, popupService,$window,Movie, $state, $rootScope){
  $scope.showMovies = false;
 $scope.movies = Movie.query(function(success) {
                $scope.showMovies = true;
              }, function(response) {
                  toast("Some error occurred\n" +JSON.stringify(response))
              }); //fetch all movies. Issues a GET to /api/movies

  $scope.deleteMovie = function(movie) { // Delete a movie. Issues a DELETE to /api/movies/:id
    if (popupService.showPopup('Really delete this?')) {
      movie.$delete(function() {
            toast(" Deleted Successfully");
            $state.go($state.current, {}, {reload: true}); //reload patch
      }, function() {
          toast("Some error occurred please try again.")
      })     
    }
  };
});

app.controller("getParticularView", function($scope,$stateParams,Movie, $rootScope){
    $scope.movie=Movie.get({id:$stateParams.id});
})

app.controller("postController",function($scope, Movie, $state, $rootScope){
    $scope.movie=new Movie();

    $scope.addMovie=function(){
        $scope.movie.$save(function(success){
          toast("Saved Successfully");
          $state.go("movies", {}, {reload: true});
        }, function(error){
          toast("Some error occured\n" + JSON.stringify(error))
        });
    }
});

app.controller("putController", 
  function($scope, $state, $stateParams, Movie){
   $scope.updateMovie=function(){
        $scope.movie.$update(function(){
            toast("Updated Successfully");
            $state.go('movies', {}, {reload: true});
        }, function(error){
            toast("Some error occured\n" + JSON.stringify(error))
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

