
angular.module('todo', ['ionic'])

.controller('TodoCtrl', function($scope){
	$scope.tasks = [
	{title: 'Collect coins'},
		{title: 'Eat mushrooms'},
			{title: 'Get Flag'},
				{title: 'Find peach'}];
	
});