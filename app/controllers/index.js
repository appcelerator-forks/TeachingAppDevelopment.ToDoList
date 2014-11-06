//Event handlers
function doClickAdd(e){
	var additem_ref = Alloy.createController("additem").getView();
	if(OS_IOS){
		$.navwin.openWindow(additem_ref);		
	}else{
		additem_ref.open();
	}
}


function doClickEdit(e){
	// create the cancel button
	var cancelbutton = Ti.UI.createButton({
		id: "btnCancel",
		systemButton: "CANCEL"
	});
	
	// add the event listener
	cancelbutton.addEventListener("click", doClickDone);
		
	// add the cancel button to the window
	$.rootwin.setLeftNavButton(cancelbutton);
	// set the TableView to editing
	var itemListView = $.reqItemList.getView('tvItemList');
	itemListView.editing = true;
}

function doClickDone(e){
	// create the cancel button
	var editbutton = Ti.UI.createButton({
		id: "btnEdit",
		systemButton: "EDIT"
	});
	// add the event listener
	editbutton.addEventListener("click", doClickEdit);
		
	// add the cancel button to the window
	$.rootwin.setLeftNavButton(editbutton);

	// set the TableView to not editing
	var itemListView = $.reqItemList.getView('tvItemList');
	itemListView.editing = false;
}


// create global reference to the navwin, for later use
Alloy.Globals.navwin = $.navwin;

if(OS_IOS){
	$.navwin.open();	
}else{
	$.index.open();	
}


