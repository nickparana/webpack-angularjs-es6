(function(){

angular.module('ApiNYT')
	.controller('TextController', TextController);	
	
				
function TextController (TextService, ArticleFactory){	
	
	var vm = this;
	vm.repetidos=[];
	vm.CheckRepetidos = CheckRepetidos;	
	
	vm.texto1=ArticleFactory.getArray().length ? ArticleFactory.getArray()[0].lead_paragraph : "";
	vm.texto2=ArticleFactory.getArray().length ? ArticleFactory.getArray()[1].lead_paragraph : "";
	
	function CheckRepetidos(texto1,texto2){

		vm.repetidos = TextService.buscarRepetidos(texto1,texto2);
		
		vm.EliminarRepetidos = function(){			
			TextService.eliminarRepetidos(vm.repetidos);
		}
		
		vm.EliminarRepetidos();
     			
	}
}	
})();