angular.module('myApp')

    .controller('task2Controller', function($scope,$rootScope) {
			$rootScope.page = {
				h1:"Реализовать возможность добавления задач внутрь определенной группы. Задача так же может быть удалена/отредактирована или отмечена как выполненная."
			};

				$scope.groups = [
			{
				name:'black',
				tasks: [
					{
						name: "this is one task",
						done: false
					}
				]
			},
			{
				name:'white',
				done: true,
				tasks: [
					
				]
			},
			{
				name:'red', 
				done: true,
				tasks: [
					
				]
			}
		];
		//.style.cssText
//console.debug('=>'+$scope.groups.done);
		$scope.addGroup = function (group,groupItem) {
			
			console.info(groupItem);
			if (groupItem) {
				groupItem = {
					name: groupItem,
					done: false,
					tasks: []
				};
				$scope.newGroup = "";
				$scope.groups.push(groupItem);
			}
		}
		$scope.addTask = function (groupObj,taskItem) {
			console.debug('groupObj =>',groupObj);
			console.log("TaskItem вход в fun=>",taskItem);
			if (taskItem) {
				taskItem = {
					name: taskItem,
					add: "add new task", 
					done: false
				};

				console.info('not empty=>',groupObj);
				$scope.taskItem = "";
				groupObj.tasks.push(taskItem);
			}
		};



	})