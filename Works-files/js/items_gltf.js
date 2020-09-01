$(document).ready(function() {
	var items = [{
		"name": "Simplecabinet", 
		"image": "models/thumbnails_new/SimpleCabinet.png",
		"model": "models/gltf/SimpleCabinet.glb",
		 "type": "9", 
		 "format": "gltf"
		}, 
		{
		"name": "Bathroomcabinet", 
		"image": "models/thumbnails_new/bathroomCabinet.png",
		"model": "models/gltf/bathroomCabinet.glb",
		"type": "2", 
		"format": "gltf"
		}, 
		{
		"name": "Bathroomcabinetdrawer", 
		"image": "models/thumbnails_new/bathroomCabinetDrawer.png", 
		"model": "models/gltf/bathroomCabinetDrawer.glb", 
		"type": "9", 
		"format": "gltf"
		}, 
		{
		"name": "Bathroommirror", 
		"image": "models/thumbnails_new/bathroomMirror.png", 
		"model": "models/gltf/bathroomMirror.glb", 
		"type": "2", 
		"format": "gltf"
		}, 
		{
		"name": "Bathroomsink", 
		"image": "models/thumbnails_new/bathroomSink.png", 
		"model": "models/gltf/bathroomSink.glb", 
		"type": "9", 
		"format": "gltf"
		}, 
		{
		"name": "Bathroomsinksquare", 
		"image": "models/thumbnails_new/bathroomSinkSquare.png", 
		"model": "models/gltf/bathroomSinkSquare.glb", 
		"type": "9", 
		"format": "gltf"
		}, 
		{
		"name": "Bathtub", 
		"image": "models/thumbnails_new/bathtub.png", 
		"model": "models/gltf/bathtub.glb", 
		"type": "1", 
		"format": "gltf"
		}, 
		{
		"name": "Bear", 
		"image": "models/thumbnails_new/bear.png", 
		"model": "models/gltf/bear.glb", 
		"type": "2", 
		"format": "gltf"
		}]
	var modelTypesNum = ["0", "1", "2", "3", "4", "7", "8", "9"];

	var modelTypesIds = ["item-items", "floor-items", "wall-items", "in-wall-items", "roof-items", "in-wall-floor-items", "on-floor-items", "wall-floor-items"];

	var itemsDiv = $("#items-wrapper");

	for (var i = 0; i < items.length; i++) 
 
{

	var item = items[i];

	//itemsDiv = $("#"+modelTypesIds[modelTypesNum.indexOf(item.type)]+"-wrapper");

	var modelformat = (item.format) ?' model-format="'+item.format+'"' : "";

	var html = '<div class="col-sm-4">' + '<a class="thumbnail add-item"' +' model-name="'+ item.name +'"' +' model-url="' +item.model+'"' +' model-type="' +item.type+'"' + modelformat+'>'+'<img src="'+item.image +'" alt="Add Item"   data-dismiss="modal" 	> '+item.name +'</a></div>';

	itemsDiv.append(html);

}

});