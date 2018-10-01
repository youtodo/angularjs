angular.module('myApp', ["ui.router",'ngMaterial'])

.controller('mainController', function($scope,$timeout, $mdSidenav, $log,$rootScope) {
	$rootScope.page = {
		h1: "Добро пожаловать" 
	}

		$scope.toggleLeft = buildDelayedToggler('left');
		$scope.close = function (cmd) {
			if (cmd) $rootScope.page.h1 = cmd;
		$mdSidenav('left').close()
			.then(function () {
				// $log.debug("close LEFT is done");
			});
		};

		/**
		 * Supplies a function that will continue to operate until the
		 * time is up.
		 */
		 $scope.imagePath = 'img/circle.png';
		function debounce(func, wait, context) {
			var timer;
			return function debounced() {
				var context = $scope,
						args = Array.prototype.slice.call(arguments);
				$timeout.cancel(timer);
				timer = $timeout(function() {
					timer = undefined;
					func.apply(context, args);
				}, wait || 10);
			};
		}
		/**
		 * Build handler to open/close a SideNav; when animation finishes
		 * report completion in console
		 */
		function buildDelayedToggler(navID) {
			return debounce(function() {
				$mdSidenav(navID)
					.toggle()
					.then(function () {
						// $log.debug("toggle " + navID + " is done");
					});
			}, 200);
		}
		function buildToggler(navID) {
			return function() {
				$mdSidenav(navID)
					.toggle()
					.then(function () {
						$log.debug("toggle " + navID + " is done");
					});
			}
		}

	})