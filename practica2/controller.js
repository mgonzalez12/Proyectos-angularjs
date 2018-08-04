// ejemplo de injection de dependecias
 angular.module('MyFirstApp', []) // modulo
.controller("FirstController",function($scope,$http){
	$scope.posts = [];
	$http.get("http://jsonplaceholder.typicode.com/posts")
		.success(function(data){
		console.log(data)
		$scope.posts = data;
	}).error(function(err) {
		/* Act on the event */
	});
});


