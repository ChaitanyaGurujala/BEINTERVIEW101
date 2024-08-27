sap.ui.define([
	'sap/ui/core/mvc/Controller',
	'sap/ui/model/odata/v2/ODataModel',

],
function (Controller, ODataModel) {
    "use strict";

    return Controller.extend("com.reddy.reddy101.controller.X1", {
        onInit: function () {
            var oModel, oView;
    
            var sServiceUrl = "/odata/v4/catalog/";
    
            // Create an OData model
            oModel = new ODataModel(sServiceUrl, {
                defaultCountMode: "Inline",
                json: true
               
            });
    
            // Get the view and set the model
            oView = this.getView();
            oView.setModel(oModel);
        }
    });
});
