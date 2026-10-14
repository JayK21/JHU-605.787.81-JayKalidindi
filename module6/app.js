(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.lunchMenu = "";
  $scope.message = "";
  $scope.statusClass = "";

  $scope.checkIfTooMuch = function () {
    if (!$scope.lunchMenu) {
      $scope.message = "Please enter data first";
      $scope.statusClass = "error";
      return;
    }

    var itemCount = $scope.lunchMenu.split(',').length;

    if (itemCount <= 3) {
      $scope.message = "Enjoy!";
    }
    else {
      $scope.message = "Too much!";
    }
    $scope.statusClass = "ok";
  };
}

})();
