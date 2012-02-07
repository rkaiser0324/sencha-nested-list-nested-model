Ext.define('Sparqd.model.Order', {
    extend: 'Ext.data.Model',
    config: {
        fields: ['id', 'name'],
        hasMany: { model: 'Product', name: 'Product' },
        proxy: {
            type: 'ajax',
            url: '/nestedlist/data/orders.json',
            reader: {
                type: 'json',
                rootProperty: 'results' 
            }
        }
    }
});