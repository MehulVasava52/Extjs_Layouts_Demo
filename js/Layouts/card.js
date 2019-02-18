/**
 * Generates card layout with three child panels.
 * Global variable cardpanel holds card layout.
 */
var cardpanel = {
    title: 'Card Layout',
    layout: 'card',
    xtype: 'panel',
    activeItem: 0,
    ref:'cardPanel',
    items: [{
        id: 'panel1',
        html: 'First panel',
    }, {
        id: 'panel2',
        html: 'Second panel',
    }, {
        id: 'panel3',
        html: 'Third panel',
    }],
    bbar: [
        {
            id: 'move-prev',
            text: 'Back',
            scope: this,
            handler : function(button) {
                var panel = button.findParentByType('panel');
                var currntActive = panel.layout.getActiveIndex();
                panel.layout.setActiveItem(currntActive-1);
            }

        },
        '->',
        {
            id: 'move-next',
            text: 'Next',
            scope: this,
            disabled: false,
            handler : function(button) {
                var panel = button.findParentByType('panel');
                var currntActive = panel.layout.getActiveIndex();
                panel.layout.setActiveItem(currntActive+1);
            }
        }]
};
Ext.override(Ext.layout.CardLayout, {
    getActiveIndex: function() {
        return this.container.items.indexOf(this.activeItem);
    },
    getTotalItems: function () {
        return this.container.items.length;
    }
});
