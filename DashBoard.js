


var app = angular.module('customApp', []);
app.controller('dashBoardController', function($scope, $http) {
               $scope.orderByField = 'Product';
               $scope.reverseSort = false;
               $http.get('sample.json')
               
               .then(function (response)
                     {
                     
                     $scope.product = response.data.records;
                     });
               });

