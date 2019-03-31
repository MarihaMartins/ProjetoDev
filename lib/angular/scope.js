angular.module("inventario", []);

angular.module("inventario").controller("pageHomeCtrl", function($scope){
	$scope.app = "Inventario de Clientes";

});



 	angular.module("inventario").controller("listaClientesCtrl", function ($scope) {
 		$scope.app = "Inventario de Clientes";
 		$scope.titulo = "Cadastro de Clientes";
 		$scope.clientes = [
 			{nome: "Vivo", 
 			 cnpj: "123.234.456/0001",
 			 telefone: "9999888", 
 			 email: "vivo@vivo.com.br",
 			 dataCadastro: "24/11/2014"}
 			
 		];

 		
 		$scope.adicionarContato = function (contato){
 			//Maneira ruim
 			//$scope.contatos.push({nome: $scope.nome, telefone: $scope.telefone});
 			//Uma boa maneira é passando por parametro na chamada da função
 			$scope.clientes.push(angular.copy(contato));
 			delete $scope.contato;

 		};
 		$scope.apagarContantos = function (clientes) {
 			$scope.clientes = clientes.filter(function (contato){
 				if(!contato.selecionado) return contato;

 			});
 		};

 			

 			$scope.isContatoSelecionado = function(clientes) {
 				return clientes.some(function (contato){
 					return contato.selecionado;
 				});
 				
 			};
 	});
 
 	