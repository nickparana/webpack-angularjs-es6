(function(){
angular
    .module('ApiNYT')
    .service('DateFormatService', DateFormatService);
    
function DateFormatService ($filter){
         this.formatDate = function(original_date,format) {  
         return $filter('date')(original_date,format);
         }
        }   

})();