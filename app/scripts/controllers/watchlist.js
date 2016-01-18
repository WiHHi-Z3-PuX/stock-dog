'use strict';

/**
 * @ngdoc function
 * @name stockDogApp.controller:WatchlistCtrl
 * @description
 * # WatchlistCtrl
 * Controller of the stockDogApp
 */
angular.module('stockDogApp')
  .controller('WatchlistCtrl', function ($scope, $routeParams, $modal, WatchlistService, CompanyService) {
    $scope.companies = CompanyService.query();
    $scope.watchlist = WatchlistService.query($routeParams.listId);
    $scope.stocks = $scope.watchlist.stocks;
    $scope.newStock = {};
    var addStockModal = $modal({
    	scope: $scope,
    	template: 'views/templates/addstock-modal.html',
    	show: false
    });

    $scope.showStockModal = function () {
    	addStockModal.$promise.then(addStockModal.show);
    };

    $scope.addStock = function () {
        // workaround !!!!!!!!!
        // var c = _.find($scope.companies, function(company){
        //     return company.label === $scope.newStock.company;
        // });

        // console.log(c);

        // console.log($scope.newStock);

        $scope.newStock = JSON.parse(JSON.stringify($scope.newStock));

        // console.log($scope.newStock);

    	$scope.watchlist.addStock({
    		listId: $routeParams.listId,
            company: $scope.newStock.company,
    		// company: angular.toJson($scope.newStock.company),
            // company: c,
    		shares: $scope.newStock.shares
    	});
    	addStockModal.hide();
    	$scope.newStock = {};
    };
  });
