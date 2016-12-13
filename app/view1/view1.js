'use strict';

angular.module('myApp.view1', ['ngRoute', 'ui.bootstrap'])

.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: function PlayerStatsTableController($scope, supplierFactory, postFormFactory) {
      console.log("APPP RUNING!!!!!!!");
      $scope.isDetailsVisble = false;

      $scope.showdiffInvoice = false;

      $scope.showdiffHolderName = false;
      $scope.difHolderName = undefined;

      $scope.agreeedTerms = false;
      $scope.agreeDebit = false;

      $scope.suppliers = supplierFactory.getSuppliers();

      $scope.formData = {
        gender: "Male",
        zipCode: "1115"
      };

      $scope.diffInvoice = {
        gender: "Company",
      };

      $scope.date = new Date();
      $scope.dateOptions = {
        maxDate: new Date(),
        minDate: new Date(1900, 1, 1)
      };

      $scope.showDetails = function () {
        $scope.isDetailsVisble = !$scope.isDetailsVisble;
      };

      $scope.submitForm = function () {
          $scope.formData.diffInvoice= undefined;
          $scope.formData.difHolderName= undefined;
        if ($scope.showdiffInvoice) {
            $scope.formData.diffInvoice=  $scope.diffInvoice ;
        }
        if ($scope.showdiffHolderName) {
            $scope.formData.difHolderName=  $scope.difHolderName ;
        }

        postFormFactory.sendForm($scope.formData);        
      };


    }
  });
}]);