/**
 * Generates anchor layout.
 * Global variable anchor holds anchor layout.
 */
var anchor = {
    title: 'Anchor Layout',
    xtype: 'container',
    layout: 'anchor',
    items: [{
        title: 'panel1',
        html: 'First panel',
        height: 100,
        anchor: '100%'
    }, {
        title: 'panel2',
        html: 'Second panel',
        height: 100,
        anchor: '50%'
    }, {
        title: 'panel3',
        html: 'Third panel',
        height: 100,
        anchor: '-200'
    }, {
        title: 'panel4',
        html: 'Fourth panel',
        anchor: '-100 35%'
    }]
};