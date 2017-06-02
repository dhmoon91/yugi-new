'user strict';
angular.module('productController',[])

.controller("ProductController", ['$scope','$cookies','$http', function($scope,$cookies, $http) {
  $scope.showDinnerset = true;
  $scope.showStarterset = false;
  $scope.showDinner = function () {
    console.log("SHOW DINNER");
    if ($scope.showDinnerset != true){
        $scope.showDinnerset = !$scope.showDinnerset;
        $scope.showStarterset = !$scope.showStarterset;
    }
  };

  $scope.showStarter = function (){
    if ($scope.showStarterset != true){
        $scope.showStarterset = !$scope.showStarterset;
        $scope.showDinnerset = !$scope.showDinnerset;
    }
  }
}]);
