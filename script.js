console.log("hello world");

var App = angular.module('myApp',[]);

App.controller('control',['$scope','$http',function($scope,$http){

$scope.boxes = function() {

  arr = [];
  console.log($scope.number);
  var x = $scope.number;
  for (var i = 0; i < x; i++) {
    var number = {
      val : i + 1
    };
    arr.push(number);
    console.log(arr);
  }
  $scope.disp = arr;


};

}]);
