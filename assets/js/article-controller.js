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