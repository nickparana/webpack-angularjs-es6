(function(){
angular
    .module('ApiNYT')
    .service('CheckURLService', CheckURLService);
    
function CheckURLService ($http){
         this.checkURL = function(url) {  
         return $http.head(url); 
         }
        }   

})();