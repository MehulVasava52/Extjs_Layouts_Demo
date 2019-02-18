/**
 * Generates card layout in tab view with two child tabs.
 * Global variable tabs conatins tab view component. 
 */
var tabs = {
    activeTab: 0,
    xtype: 'tabpanel',
    items: [{
        title: 'Tab 1',
        html: 'A simple tab'
    }, {
        title: 'Tab 2',
        html: 'Another one'
    }]
};