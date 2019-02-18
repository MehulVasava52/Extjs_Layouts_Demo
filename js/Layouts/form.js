/**
 * Generates form layout with simple textfields and textarea
 * Global variable form holds form layout
 */
var form = {
    title: 'Form Layout',
    bodyStyle: 'padding:15px',
    xtype: 'form',
    defaultType: 'textfield',
    defaults: {
        width: 230,
        msgTarget: 'side'
    },
    items: [{
            fieldLabel: 'First Name',
            name: 'first',
            allowBlank: false,
            labelSeparator: ':' // override labelSeparator layout config
        },{
            fieldLabel: 'Last Name',
            name: 'last',
            labelSeparator: ':' // override labelSeparator layout config
        },{
            fieldLabel: 'Email',
            name: 'email',
            vtype:'email',
            labelSeparator: ':' // override labelSeparator layout config
        }, {
            xtype: 'textarea',
            hideLabel: true,     // override hideLabels layout config
            name: 'msg',
            anchor: '100% -53',
            labelSeparator: ':' // override labelSeparator layout config
        }
    ],
    buttons: [
        {text: 'Save'},
        {text: 'Cancel'}
    ],
    layoutConfig: {
        labelSeparator: '~' // superseded by assignment below
    },
    hideLabels: false,
    labelAlign: 'left',   // or 'right' or 'top'
    labelSeparator: '>>', // takes precedence over layoutConfig value
    labelWidth: 85,       // defaults to 100
    labelPad: 8           // defaults to 5, must specify labelWidth to be honored
};