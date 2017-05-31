'user strict';
angular.module('landing',[])

.controller('LandingController', ['$scope','$state','$timeout', function($scope,$state,$timeout ) {
$scope.show = true;
$scope.show2 = false;
// $scope.fade = false;
// $timeout(function(){
//   $scope.show = true;
//   console.log($scope.show);
// }, 1);

$timeout(function(){
  $scope.show = false;
  console.log($scope.show);
}, 1500);

$timeout(function(){
  $scope.show2 = true;
  console.log($scope.show2);
}, 2500);

}]);
