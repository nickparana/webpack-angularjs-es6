/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(2);


/***/ },
/* 1 */
/***/ function(module, exports) {

	(function(){
	angular
	    .module('ApiNYT')
	    .controller('ArticleController', ArticleController)
	   
	    
	function ArticleController (ArticleService, ArticleFactory, DateFormatService, CheckURLService) {
	    
	    var vm = this; 
	    
	    vm.current_date = new Date();
	    vm.q="";
	    
	    vm.listarArticulos = function(){      
	        
	    vm.articles = [];
	    vm.error=false;
	    vm.encontrados=false;  
	        
	    
	        
	    vm.begin_date_with_format = DateFormatService.formatDate(angular.isUndefined(vm.begin_date) ? vm.current_date : vm.begin_date,'yyyyMMdd');
	    vm.end_date_with_format = DateFormatService.formatDate(angular.isUndefined(vm.end_date) ? vm.current_date : vm.end_date,'yyyyMMdd');
	    
	    var promise = ArticleService.getArticles('https://api.nytimes.com/svc/search/v2/articlesearch.json',
	                                                 {params : {
	                                                     api_key : 'b4f61d4efdb34413b329397d4ff47e56',
	                                                     q : vm.q,
	                                                     begin_date : vm.begin_date_with_format,
	                                                     end_date : vm.end_date_with_format,     
	                                                     fl : 'web_url,snippet,pub_date,lead_paragraph,headline'
	                                                 }});
	         
	    promise.then(function(result) {             
	            vm.articles = result.data.response.docs;
	            ArticleFactory.saveArray(vm.articles); 
	            vm.checkArticleURL();
	            if (vm.articles.length)
	                vm.encontrados=true;
	            else
	                vm.encontrados=false;             
	            },
	            function(result) {          
	            vm.error=true;
	            }); 
	     }
	    
	    
	     vm.checkArticleURL = function(){   
	         
	        angular.forEach(vm.articles, function(value, key){
	        
	        var promise = CheckURLService.checkURL(value.web_url);
	        promise.then(function(response) {             
	            value.valid_link=true;            
	            },
	            function(response) {
	            value.valid_link=false;
	            }); 
	        });
	     }
	        
	}    
	    
	})();

/***/ },
/* 2 */
/***/ function(module, exports) {

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

/***/ }
/******/ ]);