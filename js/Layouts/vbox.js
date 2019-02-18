/**
 * Generates vbox layout with three child panels.
 * Global variable vbox holds vbox layout.
 */
var vbox = {
    layout: {
        type: 'vbox',
        align: 'stretch',
    },
    frame: true,
    items: [{
            xtype: 'panel',
            title: 'child1',
            html: 'first child',
            flex:1,
        },
        {   
            xtype: 'panel',
            title: 'child2',
            flex:2,
            items: {
                id: 'subchild',
                xtype: 'container',
                html: 'This is Data of 2nd container',
                // inline styles for the data of 2nd child
                style: {
                    borderColor: 'black',
                    borderStyle: 'solid',
                    marginRight: '10px',
                    height: '60%',
                    margin: '5px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }
            }
        },
        {   
            xtype: 'panel',
            title: 'child3',
            html: 'third child',
            height: 120
        }
    ]
};
