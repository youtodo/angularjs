angular.module('myApp')
	.controller('task3Controller', function($scope,$rootScope) {
		$rootScope.page = {
			h1:'Используя Angular ngRoute или ui.router реализовать маршрутизацию на странице. После открытия страницы, показать список групп. При нажатии на группу, показывать страницу с заданиями внутри этой группы, и заголовком, с названием группы. При этом ссылка в браузере должна измениться на что-то вроде http://localhost/group_name_1. При нажатии на редактирование задачи, ссылка в браузере должна измениться на http://localhost/group_name_1/task_name_1/edit и отобразиться страница редактирования задания  Так же, должен быть реализован возврат к списку групп. В любой момент времени, при нажатии в браузере на кнопку “назад”, пользователя должно вернуть на страницу, на которой он был до этого, то есть, обычное поведение кнопки “назад”.'
		};
		$scope.data = {
			answer: "Решение данной задачи было реализовано в предыдущих 2х заданиях! =)"
		}
	})