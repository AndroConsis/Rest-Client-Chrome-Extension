$( document ).ready(function() {
    $('select').material_select();
});

var app = angular.module("myApp", ["ngRoute"]);

app.controller("mainController", function($scope, $location){

  $scope.onMethodChange = function(selectedMethod){
    switch(+selectedMethod) { 
        case 1 : 
          $location.path("/get");
          break;
        case 2 :
          $location.path("/post")
          break;
        case 3 : 
          $location.path("/put")
          break;
        case 4 : 
          $location.path("/delete")
          break;
        }
  }
  
   $scope.submit = function(){
    alert($scope.selectedMethod);
   }
});

app.controller("getController", ["$scope", function($scope){

}]);

app.controller("postController", ["$scope", function($scope){

}]);

app.controller("putController", ["$scope", function($scope){

}]);

app.controller("deleteController", ["$scope", function($scope){

}]);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when("/get", {
        templateUrl : "templates/getform.html",
        controller : "getController",
    })
    .when("/post", {
        templateUrl : "templates/postform.html",
         controller : "postController",
    })
    .when("/put", {
        templateUrl : "templates/putform.html",
         controller : "putController",
    })
    .when("/delete", {
        templateUrl : "templates/deleteform.html",
         controller : "putController",
    })
    .otherwise({redirectTo:'/get'});
}]);