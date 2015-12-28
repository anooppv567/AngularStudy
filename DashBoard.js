


var app = angular.module('customApp', []);
app.controller('dashBoardController', function($scope, $http) {
               $http.get('sample.json')
               
               .then(function (response)
                     {
                     
                     $scope.product = response.data.records;});
               });

