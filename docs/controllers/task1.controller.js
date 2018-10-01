angular.module('myApp')
.controller('task1Controller', function($scope,$rootScope) {
		$rootScope.page = {
			h1:"Реализовать создание и удаление групп, заголовок группы должен задаваться при создании и может быть отредактирован после."
		};
			$scope.groups = [
			{
				name:'black', 
				shade:'dark',
				done: false
			},
			{
				name:'white', 
				shade:'light', 
				done: true
			},
			{
				name:'red', 
				shade:'dark',
				done: true
			},
			{
				name:'blue', 
				shade:'dark', 
				done: true
			},
			{
				name:'Группа ', 
				shade:'dark', 
				done: true
			},
			{
				name:'yellow', 
				shade:'light', 
				done: false
			}
		];
		$scope.groupItems = {
			add:''
		}
		$scope.addGroup = function (groupItem) {
			
			console.info(groupItem);
			if (groupItem.add!=false) {
				groupItem = {
					name:groupItem.add, 
					done: false
				};
				$scope.groupItems.add = "";
				$scope.groups.push(groupItem);
			}
		}
	})