Ext.define('Sparqd.view.Home', {
    extend: 'Ext.Panel',
    alias: 'widget.home',

    config: {
        layout: 'fit',
        items: [
            {
                xtype: 'nestedlist',
                id: 'nestedlist-panel',
                store: Ext.getStore('Orders')
            }
		]
    }
});
