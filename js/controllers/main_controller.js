app.controller('mainCtrl', ['$scope', function($scope){
  $scope.goBack = false;

  $scope.toggleBack = function(){
    $scope.goBack =!$scope.goBack;
  }
}]);
