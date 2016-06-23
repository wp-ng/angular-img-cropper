var app = angular.module('app', ['angular-img-cropper']);

app.controller("ImageCropperCtrl", ['$scope', function ($scope) {
  $scope.bounds = {};
  $scope.cropper = {};
  $scope.cropper.sourceImage = null;
  $scope.cropper.croppedImage = null;
  $scope.bounds = {};
  $scope.bounds.left = 0;
  $scope.bounds.right = 0;
  $scope.bounds.top = 0;
  $scope.bounds.bottom = 0;
  $scope.width = 100;
  $scope.height = 200;
  $scope.keepaspect = false;
}]);