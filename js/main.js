/**
 * Main script for layout. It uses all other scripts' variables.
 * This will create viewport by default and load Absolute Layout.
 */

Ext.onReady(function () {
	new Ext.Viewport({
		layout: 'border',
		id: 'main-container',
		items: [
			//Header with title and logo
			{
				region: 'north',
				border: false,
				xtype: 'container',
				cls: 'header',
				margins: '0 0 5 0',
				items: [{
						id: 'image',
						xtype: 'container',
						html: '<img class="logo" src= "images/logo/logo.png">'
					},
					{
						xtype: 'container',
						html: '<h1>Extjs Layouts</h1>',
						cls: 'heading'
					}
				]
			},
			// SideBar containing buttons and textfeild conatiner
			{
				region: 'west',
				collapsible: true,
				split: true,
				title: 'Navigation',
				width: 200,
				height: 500,
				items: [{
						xtype: 'toolbar',
						layout: {
							type: 'vbox',
							align: 'stretch'
						},
						style: {
							height: '75%'
						},
						defaults: {
							xtype: 'button',
							bodyStyle: 'height:25px',
							cls: 'menu-btn',
							handler: onClickHandler,
							scope: this,
							margins: {
								top: 5,
								right: 0,
								bottom: 5,
								left: 0
							}
						},
						items: generateBtnItems(),
					},
					{
						layout: 'card',
						deferredRender : true,
						id: 'layout-info',
						split: true,
						title: 'Layout info',
						autoScroll: true,
						activeItem: 0,
						cls: 'container',
						items: getTextItems()
					}
				],
				listeners: {
					'afterrender': function() {
						setDefaultActive();
					}
				}
			},
			// Center Area to display different layouts.
			{
				region: 'center',
				id: 'data-container',
				layout: 'card',
				deferredRender : true,
				cls: 'data-container',
				activeItem: 0,
				items: generateLayoutItems()
			}
		]
	});

	/**
	 * Function generateBtnItems will generate array of buttons for sidebar.
	 * @return {Array} will return items array of button components
	 */
	function generateBtnItems() {
		var btnItems = [];
		var idCtr = 0;
		for (layout in layouts) {
			btnItems.push({
				text: layout,
				id: String(idCtr)
			});
			idCtr++;
		}
		return btnItems;
	}

	/**
	 * Function getTextItems will generate array of containers containing text regarding selected layout.
	 * @return {Array} will return items array of components containing text. 
	 */
	function getTextItems() {
		var textItemsArr = [];
		for (var layout in layouts) {
			textItemsArr.push({
				html: layouts[layout].text
			});
		}
		return textItemsArr;
	}

	/**
	 * Function generateLayoutItems will generate array of different layout objects.
	 * @return {Array} will return items array of layout components.
	 */
	function generateLayoutItems() {
		var layoutItemsArr = [];
		for (var layout in layouts) {
			layoutItemsArr.push(layouts[layout].type);
		}
		return layoutItemsArr;
	}

	/**
	 * Function onClickHandler will replace current layout with selected layout in dom,
	 * and make a function call to set the clicked button active.
	 * @param {object} button is the button clicked
	 */
	function onClickHandler(button) {
		var center = Ext.getCmp('data-container');
		var infoPanel = Ext.getCmp('layout-info');
		setBtnActive(button);
		center.getLayout().setActiveItem(Number(button.id));
		infoPanel.getLayout().setActiveItem(Number(button.id));
	}

	/**
	 * Function setDefaultActive will set initially first button as active and add active class.
	 */
	function setDefaultActive() {
		var	activeBtn = Ext.getCmp('0');
		activeBtn.addClass('btn-active');
	}

	/**
	 * Function setBtnActive will remove active button class from previous active button,
	 * Set param button as active and and add active class.
	 * @param {Object} button button which needs to be active.
	 */
	function setBtnActive(button) {
		var buttonlist = button.findParentByType('toolbar').items.items;
		for(var i=0; i<buttonlist.length;i++) {
			var btn = buttonlist[i].getEl();
			if(btn.hasClass('btn-active')) {
				btn.removeClass('btn-active');
				break;
			}
		}	
		button.addClass('btn-active');
	}
});

