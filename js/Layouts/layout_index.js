/**
 * Update this if there is change of components' global variables name.
 * Global variable contains mapping of different layouts and their texts.
 * So they can be used in entire website generally.
 */
var layouts = {
    absolute : {
        type: absolute,
        text: `This is a layout that inherits the anchoring of Ext.layout.AnchorLayout 
        and adds the ability for x/y positioning using the standard x and y component config options.`
    },
    accordian : {
        type: accordian,
        text: `This is a layout that manages multiple Panels in an expandable accordion style
         such that only one Panel can be expanded at any given time.`
    },
    anchor : {
        type: anchor,
        text: `This configuation option is to be applied to child items of a container managed by this layout `
    },
    auto: {
        type: auto,
        text: `The AutoLayout is the default layout manager delegated by Ext.Container to render any child Components 
            when no layout is configured into a Container.`
    },
    card : {
        type : cardpanel,
        text: `This layout manages multiple child Components, each fitted to the Container, where only a single child Component can be visible at any given time. 
           This layout style is most commonly used for wizards, tab implementations, etc.`
    },
    column : {
        type: column,
        text: `This is the layout style of choice for creating structural layouts in a multi-column format
         where the width of each column can be specified as a percentage or fixed width, but the height is allowed to vary based on the content.`
    },
    fit : {
        type: fit,
        text: `This is a base class for layouts that contain a single item that automatically expands to fill the layout's container. `
    },
    form: {
        type: form,
        text: `FormPanel is configured with layout:'form' to use an Ext.layout.FormLayout layout manager, which styles and renders fields and labels correctly`
    },
    hbox : {
        type: hbox,
        text: `A layout that arranges items horizontally across a Container.`
    },
    tab: {
        type: tabs,
        text: `A basic tab container which has special support for containing child Components (items) that are managed using a CardLayout layout manager, and displayed as separate tabs. `
    },
    table: {
        type: table,
        text: `This layout allows you to easily render content into an HTML table. `
    },
    toolbar: {
        type: tb,
        text: `Basic Toolbar class. Although the defaultType for Toolbar is button, Toolbar elements (child items for the Toolbar container) may be virtually any type of Component`
    },
    vbox: {
        type: vbox,
        text: `A layout that arranges items vertically down a Container. This layout optionally divides available vertical space between child items containing a numeric flex configuration.`
    }
};
