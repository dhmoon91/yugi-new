'user strict';
angular.module('landing',[])

.controller('LandingController', ['$scope','$state','$timeout', function($scope,$state,$timeout ) {
$scope.show = false;
// $scope.fade = false;
$timeout(function(){
  $scope.show = true;
  console.log($scope.show);
}, 1);

}]);
