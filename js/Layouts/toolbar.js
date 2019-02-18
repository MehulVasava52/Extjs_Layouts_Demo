/**
 * Generates toolbar layout with tools like button, space, textfeild.
 * Global variable tb holds toolbar layout.
 */
var tb = {
    xtype:'toolbar',
    items: [
        {
            text: 'Button'
        },
        {
            xtype: 'splitbutton', // same as 'tbsplitbutton'
            text: 'Split Button'
        },
        '->', // shortcut for tbfill
        {
            xtype: 'textfield',
            name: 'field1',
            emptyText: 'enter search term'
        },
        '-', // shortcut for tbsaperator
        'text 1', // same as {xtype: 'tbtext', text: 'text1'} to create Ext.Toolbar.TextItem
        {xtype: 'tbspacer'},// same as ' ' to create Ext.Toolbar.Spacer
        'text 2',
        {xtype: 'tbspacer', width: 50}, 
        'text 3',
        {xtype: 'tbspacer', width: 50}
    ]
};