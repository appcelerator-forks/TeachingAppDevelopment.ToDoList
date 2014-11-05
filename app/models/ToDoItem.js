exports.definition = {
	config: {
		columns: {
		    "description": "TEXT",
		    "done": "INTEGER",
		    "created": "INTEGER",
		    "duedate": "INTEGER",
		    "sortorder": "INTEGER"
		},
		adapter: {
			type: "sql",
			collection_name: "ToDoItem"
		}
	},
	extendModel: function(Model) {
		_.extend(Model.prototype, {
			// extended functions and properties go here
		});

		return Model;
	},
	extendCollection: function(Collection) {
		_.extend(Collection.prototype, {
			// extended functions and properties go here
		});

		return Collection;
	}
};