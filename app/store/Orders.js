Ext.define('Sparqd.store.Orders', {
    extend: 'Ext.data.TreeStore',
    requires: 'Sparqd.model.Order',
    config: {
        model: 'Sparqd.model.Order',
        autoLoad: false
    }
});