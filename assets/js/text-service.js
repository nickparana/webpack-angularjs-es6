(function(){

angular
	.module('ApiNYT')
	.service('TextService',TextService);	

function TextService($filter){

	this.splitText = splitText;
	this.buscarRepetidos = buscarRepetidos;
	this.eliminarRepetidos = eliminarRepetidos;
	
	function splitText(text) {
		return text.match(/([a-zñáéíóúâêîôûäëïöüàèìòù-]{3,})\w+/ig);		
	}
	
	function eliminarRepetidos(a){
		
		for (var i = 0;i<(a.length-1);i++){
			for (var j = (i+1);j<a.length;j++){
				if (a[i].contenido===a[j].contenido){
					a.splice(j,1);
					j--;
				}
			}			
		}		
	}	
    
	function buscarRepetidos(texto1, texto2) {
		
		var array1 = this.splitText(texto1);
		var array2 = this.splitText(texto2);	
		var repetidos = [];		
		
		for(var i = 0;i<array1.length;i++){	
            var palabra = {};
            palabra.count=0;
			for (var j = 0;j<array2.length;j++){
				if (array1[i]===array2[j]){
                    palabra.contenido=array1[i];
                    palabra.count++;
					repetidos.push(palabra);
				}
			}
		}
		
		return repetidos;		
	}
	
	
	
}	
})();
	
	
	

