/**
 * Generates column layout with four columns.
 * Global variable column holds column layout.
 */
var column = {
    title: 'Column Layout',
    xtype: 'container',
    layout: 'column',
    items: [{
        title: 'panel1',
        html: 'First panel',
        columnWidth: 0.4
    }, {
        title: 'panel2',
        html: 'Second panel',
        columnWidth: 0.2
    }, {
        title: 'panel3',
        html: 'Third panel',
        columnWidth: 0.2
    }, {
        title: 'panel4',
        html: 'Fourth panel',
        columnWidth: 0.2
    }]
};