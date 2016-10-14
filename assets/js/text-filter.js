(function(){

angular
	.module('ApiNYT')
	.filter('highlight', function($sce) {
      return function(text, palabrasRepetidas) {
      if(palabrasRepetidas.length>0) {
        
        for (var i = 0; i < palabrasRepetidas.length; i++){          
          var pattern = new RegExp(palabrasRepetidas[i].contenido, "g");
          text = text.replace(pattern, '<span class="highlighted">' + palabrasRepetidas[i].contenido + '</span>');
        }       
        
        return text;
      }
      else {
        return text;
      }
    };
  });

})();