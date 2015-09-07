var app = angular.module('medli');


function dictionaryController(){
    
    sbc = this;
    
    
    
    
    this.checkKeyboard = function(key){
        
        alert(key)
        
        if(key == "Enter")
        {
            this.postSearch(searchTerm);    
        }
        
        
    }
    
    this.postSearch = function(searchTerm){
        
        alert("Searching..." + searchTerm);   
    }
    
}

app.controller("dictionaryController", dictionaryController());

app.directive('searchBar', function(){
 
    //ng-keyup='dictCtrl.checkKeyboard($event)'  ng-controller='dictionaryController as dictCtrl'
    return{
        restrict:'E',
        replace:true,
        scope:{
            
            place: '@',
            
            
            
        },
        template:"<div class='searchBarContainer' ><input type='text' placeholder='{{place}}'  ><i class='glyphicon glyphicon-search'></i></div>"
        
    }
});
