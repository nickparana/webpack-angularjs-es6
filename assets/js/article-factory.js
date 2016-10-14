(function(){
    angular
        .module('ApiNYT')
        .factory('ArticleFactory', ArticleFactory);
    
    function ArticleFactory (){
              
        var array = [];

        return {
            getArray: function () {
              return array;
            },
            saveArray: function (a) {
              array = a;
            }
        };
    }
})();