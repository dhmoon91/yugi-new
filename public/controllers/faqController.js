'user strict';
angular.module('faqController',[])

.controller("FaqController", ['$scope','$cookies','$http', function($scope,$cookies, $http) {
  $scope.show = [false,false,false,false,false,false];
$scope.show1=false;
  $scope.showAnswer = function (index) {

    for(var i = 0; i <$scope.show.length; i++){
      if (index != i){
        $scope.show[i] = false;
      }else {
        $scope.show[i] = !$scope.show[i];
      }
    }
  }
}]);
