/*
NestedListDemo = new Ext.Application({
    name: "NestedListDemo",
    
    launch: function() {
        this.views.viewport = new this.views.Viewport();
    }
});
*/

Ext.Loader.setConfig({ enabled: true });

Ext.require([    
    'Ext.XTemplate',
    'Ext.TabPanel',
	'Ext.Button',
    'Ext.NestedList'
]);

// Main application entry point
Ext.application({
    appFolder: '/nestedlist/app',
    phoneStartupScreen: 'images/sencha_logo.png',
    name: 'Sparqd',
    // the controller will take care of creating the view        

    controllers: ['HomeController'],

    launch: function () {

        var maintabpanel = Ext.create('Ext.TabPanel', {
            id: 'main-tabpanel',
            fullscreen: true,
            defaults: {
                scrollable: true
            },

            tabBar: {
                docked: 'bottom',
                layout: {
                    pack: 'center'
                }
            },

            layout: {
                type: 'card',
                animation: {
                    type: 'fade'
                }
            },
            // clean instantiation using the widget.alias's defined in each view
            items: [
                {
                    xtype: 'home',
                    title: 'Home',
                    iconCls: 'home'
                }
                ]
        });
    }
});
