sap.ui.define([
    "sap/ui/model/odata/v4/ODataModel",
    "sap/ui/Device"
], function (ODataModel) {
    "use strict";

    return {

        createODataModel: function () {
 
            var sServiceUrl = "/odata/v4/catalog/";
            var oModel = new ODataModel(sServiceUrl, {
                useBatch: false 
            });

            return oModel;
        }
    };

});
