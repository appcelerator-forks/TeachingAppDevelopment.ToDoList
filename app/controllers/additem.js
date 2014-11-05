var args = arguments[0] || {};

function doPostLayout(e){
	Ti.API.info("doPostLayout");
	
}

function doInit(e){
	// Initialize the date picker
	var now = new Date();
	$.duedate.setMinDate(now);
	$.duedate.setValue(now);
	now.setFullYear(now.getFullYear() + 10);
	$.duedate.setMaxDate(now);
}
