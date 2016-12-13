'use strict';

(function () {
    var supplierFactory = function ($http) {
        var factory = {};
        var suppliers = ["Albert Beck GmbH", "Arktis Energy GmbH", 'Berliner Stadtwerke GmbH', 'Bioenergie Lintig I GbR', 'Biogas Bakum GmbH & Co. KG', 'Biogas Hirl GmbH & Co. KG'];

        factory.getSuppliers = function () {
            return suppliers;
                     
        };
 
        return factory;

    };
    
    angular.module('myApp').factory('supplierFactory', supplierFactory);

}());
