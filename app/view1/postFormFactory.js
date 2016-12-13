'use strict';

(function () {
    var postFormFactory = function ($http) {
        var factory = {};
        factory.sendForm = function (formData) {
            
            var str = JSON.stringify(formData);
            console.log("Generated JSON: "+str);

             $http.post('/someUrl', formData).then(
                 function(response){
                     alert("server success");
                 },
                 function(response){
                      alert("server fail but please still hire me!");
                 });
        };
        return factory;
    };

    angular.module('myApp').factory('postFormFactory', postFormFactory);

}());