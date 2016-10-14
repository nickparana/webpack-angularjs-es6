(function(){
angular
    .module('ApiNYT')
    .service('ArticleService', ArticleService);
    
function ArticleService ($http){
         this.getArticles = function(url, params) {  
         return $http.get(url, params); 
         }
        }   

})();