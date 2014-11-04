//Event handlers
function doClickAdd(e){
	var additem_ref = Alloy.createController("additem").getView();
	if(OS_IOS){
		$.navwin.openWindow(additem_ref);		
	}else{
		additem_ref.open();
	}
}


// create global reference to the navwin, for later use
Alloy.Globals.navwin = $.navwin;

if(OS_IOS){
	$.navwin.open();	
}else{
	$.index.open();	
}


