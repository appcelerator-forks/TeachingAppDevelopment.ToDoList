//Event handlers
function doClickAdd(e){
	Ti.API.info("doClickAdd clicked");
}


// create global reference to the navwin, for later use
Alloy.Globals.navwin = $.navwin;

if(OS_IOS){
	$.navwin.open();	
}else{
	$.index.open();	
}


