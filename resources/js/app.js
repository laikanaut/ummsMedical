    (function()
     {
        var app = angular.module('medli', []);
    
    
        function mainController(){
        
            vm = this;
            
            vm.homeDisplayed = true;
            vm.progressDisplayed = false;
            vm.dictionaryDisplayed = false;
            
            
            vm.showHome = function(){
                vm.homeDisplayed = true;
                vm.progressDisplayed = false;
                vm.dictionaryDisplayed = false;    
            }
            
            vm.showProgress = function(){
                vm.homeDisplayed = false;
                vm.progressDisplayed = true;
                vm.dictionaryDisplayed = false;    
            }
            
            vm.showDictionary = function(){
                vm.homeDisplayed = false;
                vm.progressDisplayed = false;
                vm.dictionaryDisplayed = true;    
            }
            
            
            
            
            
        }
    
    
    
    
        app.controller('mainController', mainController);
    })();
