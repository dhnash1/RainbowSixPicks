console.log("hello world");

var App = angular.module('myApp',[]);

App.controller('control',['$scope','$http','$filter',function($scope,$http,$filter){

  gArray = [];
  nArray = [];
  var fs = 0;
  var failSafeV = 100;
  atk = [
    {name:"Sledge",
     img: "Icons/Attack/Sledge.png"},
    {name:"Thatcher",
     img: "Icons/Attack/Thatcher.png"},
    {name:"Ash",
     img: "Icons/Attack/Ash.png"},
    {name:"Thermite",
     img: "Icons/Attack/Thermite.png"},
    {name:"Twitch",
     img: "Icons/Attack/Twitch.png"},
    {name:"Montagne",
     img: "Icons/Attack/Montangne.png"},
    {name:"Glaz",
     img: "Icons/Attack/Glaz.png"},
    {name:"Fuze",
     img: "Icons/Attack/Fuze.png"},
    {name:"Blitz",
     img: "Icons/Attack/Blitz.png"},
    {name:"IQ",
     img: "Icons/Attack/IQ.png"},
    {name:"Buck",
     img: "Icons/Attack/Buck.png"},
    {name:"BlackBeard",
     img: "Icons/Attack/BlackBeard.png"},
    {name:"Capitao",
     img: "Icons/Attack/Capitao.png"},
    {name:"Hibana",
     img: "Icons/Attack/Hibana.png"},
    {name:"Jackal",
     img: "Icons/Attack/Jackal.png"},
    {name:"Ying",
     img: "Icons/Attack/Ying.png"},
    {name:"Zofia",
     img: "Icons/Attack/Zofia.png"},
    {name:"Dokkaebi",
     img: "Icons/Attack/Dokkaebi.png"},
    {name:"Lion",
     img: "Icons/Attack/Lion.png"},
    {name:"Finka",
     img: "Icons/Attack/Finka.png"},
    {name:"Maverick",
     img: "Icons/Attack/Maverick.png"}
  ];
  def = [
    {name:"Smoke",
     img: "Icons/Defence/Smoke.png"},
    {name:"Mute",
     img: "Icons/Defence/Mute.png"},
    {name:"Castle",
     img: "Icons/Defence/Castle.png"},
    {name:"Pulse",
     img: "Icons/Defence/Pulse.png"},
    {name:"Doc",
     img: "Icons/Defence/Doc.png"},
    {name:"Rook",
     img: "Icons/Defence/Rook.png"},
    {name:"Kapkan",
     img: "Icons/Defence/Kapkan.png"},
    {name:"Tachanka",
     img: "Icons/Defence/Tachanka.png"},
    {name:"Jager",
     img: "Icons/Defence/Jager.png"},
    {name:"Bandit",
     img: "Icons/Defence/Bandit.png"},
    {name:"Frost",
     img: "Icons/Defence/Frost.png"},
    {name:"Valkyrie",
     img: "Icons/Defence/Valkyrie.png"},
    {name:"Caveira",
     img: "Icons/Defence/Caveira.png"},
    {name:"Echo",
     img: "Icons/Defence/Echo.png"},
    {name:"Mira",
     img: "Icons/Defence/Mira.png"},
    {name:"Lesion",
     img: "Icons/Defence/Lesion.png"},
    {name:"Ela",
     img: "Icons/Defence/Ela.png"},
    {name:"Vigil",
     img: "Icons/Defence/Vigil.png"},
    {name:"Maestro",
     img: "Icons/Defence/Maestro.png"},
    {name:"Alibi",
     img: "Icons/Defence/Alibi.png"},
    {name: "Clash",
     img: "Icons/Defence/Clash.png"}
  ];
// function group(x) {
//   for (var j = 0; j < (x.length); j++) {
//     gArray.push(x[j]);
//     if ((j+1) % 4 == 0) {
//       console.log(j+1);
//       console.log(gArray);
//
//     }
//   }
//     console.log(gArray);
// }
// group(atk);

// Depriciated grouping code, Unneccesary and doesnt work

function random(x){

  for (var i = 0; i < x.length; i++) {
    x[i].selected = "unselected";
  }
  var rand = ((Math.random() * (x.length - 1)));
  var sel = Math.round(rand);
  console.log("FAILSAFE" + fs);
  console.log(rand);
  console.log(sel);
  console.log(x[sel].name);
  if ((x[sel].disabled == "enabled") || (x[sel].disabled == undefined) && (fs < (failSafeV))  ) {
    x[sel].selected = "selected";
    fs = 0;
    return;
  }else if (fs < (failSafeV)) {
    fs++;
    random(x);
  }else{
    console.log("Cant!");
    fs = 0;
    return;
  }

} // end random selector

function remove(y){
    y.selected = "unselected";
}

function spin(x){
  for (var i = 0; i < x.length; i++) {
    x[i].selected = "selected";
    setTimeout(remove(x[i]),100);

  }
}


$scope.randA = function(){
  random(atk);
};
$scope.randD = function(){
  random(def);
};
  $scope.dispa = atk;
  $scope.dispb = def;

$scope.picked = function(x){
  console.log(this);
  console.log(x);
  if (x == "atk"){
    var ara = atk;
  } else if (x == "def") {
    var ara = def;
  }
  var disable = this.ops.name;
  console.log(disable);
  var found = $filter('filter')(ara, {name:disable}, true)[0];
  console.log(found);

  if ((found.disabled == "enabled") || (found.disabled == undefined)) {
    found.disabled = "disabled";
  } else if (found.disabled == "disabled") {
    found.disabled = "enabled";
  }

};//end pick on click function

$scope.enable = function(x){
  if (x == "atk"){
    for (var i = 0; i < atk.length; i++) {
      atk[i].disabled = "enabled";
    }
  } else if (x == "def") {
    for (var j = 0; j < def.length; j++) {
      def[j].disabled = "enabled";
    }
  }
}; //end enable all function

$scope.disable = function(x){
  if (x == "atk"){
    for (var i = 0; i < atk.length; i++) {
      atk[i].disabled = "disabled";
    }
  } else if (x == "def") {
    for (var j = 0; j < def.length; j++) {
      def[j].disabled = "disabled";
    }
  }
}; //end disable all function


}]); // end controller
