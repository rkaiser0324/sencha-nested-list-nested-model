Ext.define('Sparqd.controller.HomeController', {
    extend: 'Ext.app.Controller',
    views: ['Home'],
    stores: ['Orders'],
    init : function () {
     Ext.getStore('Orders').load({
            scope: this
        });
    }
});