var args = arguments[0] || {};

//Event handlers


// Android functions
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

// Shared methods
function deleteModel(modelid){
	//get the model
	var model = Alloy.Collections.ToDoItem.get(modelid);
	// remove the model from the collection
	Alloy.Collections.ToDoItem.remove(model);
	// delete the model
	model.destroy();
}

Alloy.Collections.ToDoItem.fetch();
