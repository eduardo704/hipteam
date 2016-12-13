'use strict';

(function () {
    var postFormFactory = function () {
        var factory = {};
        factory.sendForm = function (formData) {
            //  $http.post('/someUrl', formData).then(successCallback, errorCallback);
            var str = JSON.stringify(formData);
            console.log(str);
        };
        return factory;
    };

    angular.module('myApp').factory('postFormFactory', postFormFactory);

}());