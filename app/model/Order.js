Ext.define('Sparqd.model.Order', {
    extend: 'Ext.data.Model',
    config: {
        fields: ['id', 'name'],
        hasMany: 'Product', // per the docs this is shorthand for  { model: 'Product', name: 'products' },
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