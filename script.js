console.log("hello world");

var App = angular.module('myApp',[]);

App.controller('control',['$scope','$http',function($scope,$http){

  gArray = [];
  nArray = [];

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
function group(x) {
  for (var j = 0; j < (x.length); j++) {
    gArray.push(x[j]);
    if ((j+1) % 4 == 0) {
      console.log(j+1);
      console.log(gArray);

    }
  }
    console.log(gArray);
}
group(atk);


function random(x){
  console.log(x.length);
  var rand = ((Math.random() * x.length));
  var sel = Math.round(rand);
  console.log(sel);
  console.log(x[sel].name);

}
random(atk);
  $scope.dispa = gArray;
  $scope.dispb = def;

var sel = ($scope.dispa[5]);
console.log(sel);



}]);
