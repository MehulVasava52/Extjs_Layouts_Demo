/**
 * Generates Table layout with seven cells.
 * Global variable table holds table component.
 */
var table = {
    title: 'Table Layout',
    layout: 'table',
    defaults: {
        // applied to each contained panel
        bodyStyle: 'padding:20px'
    },
    layoutConfig: {
        // The total column count must be specified here
        columns: 3
    },
    items: [{
        html: '<p>Cell A content</p>',
        rowspan: 2
    }, {
        html: '<p>Cell B content</p>',
        colspan: 2
    }, {
        html: '<p>Cell C content</p>',
    }, {
        html: '<p>Cell D content</p>'
    }, {
        html: '<p>Cell E content</p>'
    }, {
        html: '<p>Cell F content</p>'
    }, {
        html: '<p>Cell G content</p>'
    }]
};
