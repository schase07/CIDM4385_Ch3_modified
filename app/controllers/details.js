var args = arguments[0] || {};

//close the window when btn clicked
$.closeBtn.addEventListener("click", function(){
	$.detailWindow.close();
});
//$.car.set(arg.data.attributes);
$.car.set(args.data);

//free the model-view data binding resources when this
//view-controller closes
$.detailWindow.addEventListener("close",function(){
	$.destroy();
});