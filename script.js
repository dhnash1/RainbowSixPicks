console.log("hello world");

var App = angular.module('myApp',[]);

App.controller('control',['$scope','$http',function($scope,$http){


  atk = [
    {name:"Sledge"},
    {name:"Thatcher"},
    {name:"Ash"},
    {name:"Thermite"},
    {name:"Twitch"},
    {name:"Montagne"},
    {name:"Glaz"},
    {name:"Fuze"},
    {name:"Blitz"},
    {name:"IQ"},
    {name:"Buck"},
    {name:"BlackBeard"},
    {name:"Capitao"},
    {name:"Hibana"},
    {name:"Jackal"},
    {name:"Ying"},
    {name:"Zofia"},
    {name:"Dokkaebi"},
    {name:"Lion"},
    {name:"Finka"}
  ];
  def = [
    {name:"Smoke"},
    {name:"Mute"},
    {name:"Castle"},
    {name:"Pulse"},
    {name:"Doc"},
    {name:"Rook"},
    {name:"Kapkan"},
    {name:"Tachanka"},
    {name:"Jager"},
    {name:"Bandit"},
    {name:"Frost"},
    {name:"Valkyrie"},
    {name:"Caveira"},
    {name:"Echo"},
    {name:"Mira"},
    {name:"Lesion"},
    {name:"Ela"},
    {name:"Vigil"},
    {name:"Maestro"},
    {name:"Alibi"}
  ];

  $scope.dispa = atk;
  $scope.dispb = def;



}]);
