/**
 * Generates Form Layout with simple text, label and area fields.
 * Global variable absolute holds form layout.
 */
var absolute = {
    title: 'Absolute Layout',
    layout: 'absolute',
    defaultType: 'textfield',
    items: [{
            x: 10,
            y: 15,
            xtype: 'label',
            text: 'First Name:',
        }, {
            x: 100,
            y: 10,
            name: 'fname',
        }, {
            x: 10,
            y: 45,
            xtype: 'label',
            text: 'lname:'
        }, {
            x: 100,
            y: 40,
            name: 'subject',
        }, {
            x: 10,
            y: 75,
            xtype: 'label',
            text: 'Address :'
        },
        {
            x: 100,
            y: 75,
            xtype: 'textarea',
            name: 'address',
            anchor: '90% 80%' // anchor width and height
        }
    ]
};