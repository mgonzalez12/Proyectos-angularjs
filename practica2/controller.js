var app = angular.module('miApp', []);

		app.controller('miControlador', function($scope,$http){
			//$scope.posts = [];
			$http.get("http://jsonplaceholder.typicode.com/posts")
			.then(function(data){
				console.log(data);
				$scope.posts = data;
			});
		});