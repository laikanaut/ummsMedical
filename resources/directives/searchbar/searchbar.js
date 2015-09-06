var app = angular.module('medli');


app.directive('searchBar', function(){
 
    function link(scope, element, attrs) {
    
        
    }
    
    return{
        restrict:'E',
        replace:true,
        scope:{
            place:'='
        },
        template:"<div class='searchBarContainer'><input type='text' placeholder='Search...'><i class='glyphicon glyphicon-search'></i></div>"
        
    }
});
