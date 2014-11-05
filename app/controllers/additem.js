var args = arguments[0] || {};

function doPostLayout(e){
	Ti.API.info("doPostLayout");
	
}

function doInit(e){
	// Initialize the date picker
	
	// Date interval handling for iOS - the setter methods will break android.
	if(OS_IOS){
		var now = new Date();
		$.duedate.setMinDate(now);
		$.duedate.setValue(now);
		now.setFullYear(now.getFullYear() + 10);
		$.duedate.setMaxDate(now);
	}
	// We handle android on the change event
}

function doChangeDuedate(e){
	if(OS_ANDROID){
		var min = new Date();
		min.setHours(0,0,0,0);
		var max = new Date();
		max.setHours(0,0,0,0);
		max.setFullYear(min.getFullYear() + 10);
		var cur = $.duedate.getValue().setHours(0,0,0,0);
		if(cur < min){
			$.duedate.value = min;
		}else if(cur > max){
			$.duedate.value = max;	
		} 
	}
}

function doClickSave(e){
	// Create new model
	var model = Alloy.createModel("ToDoItem",{
		description: $.description.value,
		done: 0,
		created: new Date().getTime(), // store the dates as milliseconds since 1971 in an integer in the database
		duedate: $.duedate.value.getTime(),
		sortorder: 0 
	});
	
	// Add to the collection
	Alloy.Collections.ToDoItem.add(model);
	// Save the model
	model.save();
	
	//Close window
	$.additem.close();
}

function doCleanUp(e){
	$.destroy();
}
