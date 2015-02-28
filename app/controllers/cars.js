function transform(model){
	//needed to convert the model to a JSON object
	var carObject = model.toJSON();
	var output = 	
	{
		"title" : carObject.model + " by " + carObject.make,
		"id" :model.cid
	};
	return output;
}

//show only cars made by Honda
function filter(collection)
{
	return collection.where(
		{
			make: "Honda"
		}
	);
}

//Free the model-view data binding resources when the view-controller closes
$.mainWindow.addEventListener("close", function()
{
	$.destroy();
});

$.table.addEventListener('click', function(_event){
	
	//get the correct model
	//var model = Alloy.Collections.cars.getByCid(_event.rowData.modeId); this one was in book
	var model = Alloy.Collections.cars.get(_event.rowData.modeId);
	
	//create the controller and pass the model
	var detailController = Alloy.createController("detail",
	{
		data: model
	});
	
	//get view returns to root view when no view ID is provided
	detailController.getView().open(
		{
			modal: true	
		}
	);
	
});