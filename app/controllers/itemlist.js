var args = arguments[0] || {};
/*
// Android and iOS handles rowing rows from tableview very differently
*/
/*************************************************************/
// Android specific functions
/*************************************************************/
if(OS_ANDROID){
	function doLongClick(e){
		$.odDelete.model = e.rowData.model;
		$.odDelete.show();
	}
	
	function doClickOptionDelete(e){
		Ti.API.info("doClickOptionDelete index:" + e.index);
		if(e.index == 0){
			deleteModel(e.source.model);
		}
	}
}
/*************************************************************/
// iOS specific functions
/*************************************************************/
if(OS_IOS){
	function doRowDelete(e){
		deleteModel(e.source.model);
	}
}
/*************************************************************/
// Shared functions
/*************************************************************/
function doChangeDoneStatus(e){
	// get the model in question
	var model = Alloy.Collections.ToDoItem.get(e.source.parent.model); // Going up the tree to get the modelid
	Ti.API.info(JSON.stringify(model));
	
	// what is the current status?
	if(model.get("done") == 0){
		model.set({done:1});
	}else{ // flip the done flag
		model.set({done:0});	
	}
	Ti.API.info(JSON.stringify(model));
	// Save the updated model to the collection
	model.save();
}
function deleteModel(modelid){
	//get the model
	var model = Alloy.Collections.ToDoItem.get(modelid);
	// remove the model from the collection
	Alloy.Collections.ToDoItem.remove(model);
	// delete the model
	model.destroy();
}
// status="{done}" does not fly with android, so we need to handle the initialization of the switch onPostlayout
function doSetSwitch(e){
	e.source.status = (e.source.plhStatus == 1);
}

// Testing formatter
function myFormatter(model){
	 // Need to convert the model to a JSON object
    var transform = model.toJSON();
    transform.description = "(" + transform.description + ")";
    // Example of creating a custom attribute, reference in the view using {custom}
    //transform.custom = transform.title + " by " + transform.author;
    return transform;
}

Alloy.Collections.ToDoItem.fetch();
// We set the comparator AFTER the fetch
//Alloy.Collections.ToDoItem.comparator = 'duedate';
