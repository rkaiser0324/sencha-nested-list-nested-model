Ext.define('Sparqd.model.Product', {
    extend: 'Ext.data.Model',
    config: {
        fields: ['id', 'name'],
        belongsTo:'Order' // { model: 'Order', name: 'Order' }
    }
});