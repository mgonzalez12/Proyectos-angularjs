// ejemplo de inyeccion de dependecias
 angular.module('MyFirstApp', []) // modulo
.controller("FirstController",["$scope",function(m){
	m.nombre = "Marcos";
	m.nuevoComentario = {} // inicializa objeto nuevo comentario
	// arreglo
	m.comentarios = [
		//objetos
		{
		   comentario:"Buen tutorial",
		   username: "codigofacilito"
		},
		{
			comentario:"mal tutorial",
			username: "Otro usuario"
		}
	];

	m.agregarComentario = function(){
		m.comentarios.push(m.nuevoComentario)
		m.nuevoComentario = {};
	}
}]);



/*angular.module('MyFirstApp', []) // modulo
.controller("FirstController", function($scope){
	$scope.nombre = "Marcos";
	$scope.nuevoComentario = {} // inicializa objeto nuevo comentario
	// arreglo
	$scope.comentarios = [
		//objetos
		{
		   comentario:"Buen tutorial",
		   username: "codigofacilito"
		},
		{
			comentario:"mal tutorial",
			username: "Otro usuario"
		}
	];

	$scope.agregarComentario = function(){
		$scope.comentarios.push($scope.nuevoComentario)
		$scope.nuevoComentario = {};
	}
});

*/