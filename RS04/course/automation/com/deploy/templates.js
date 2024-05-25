


var pathh;
var imgpathh;




var preload,canvasXML,mediaXML;

function init(filepath, imagepathh)
{
	pathh=filepath;
	imagesource=imagepathh;
//alert(pathh);
	
			loadScript("../../../common/scripts/createJS_bundle_060.min.js", loadTemplate);			
							
		
}

//To load template files
function loadTemplate()
{

	var templateFile;	
	//For Deployment
	//tF = "../../../common/scripts/templates_base_min.js";
	//For Developement
	templateFile = "templates_base_dev.js";
		
	//var url= document.getElementsByName("movie").item(0).value;
	//var xmlPath = url.split(".swf")[0];
	var xmlPath = pathh;
	
	
	var manifest = [{id:"jquery", src:"../../../common/scripts/jquery-1.7.2.min.js"},
					{id:"mediaXML", src:xmlPath+'.xml'},
					{id:"canvasXML", src:xmlPath+'_canvas.xml'},
					{id:"templateFile", src:templateFile}];	
	
	preload = new createjs.LoadQueue(false);
	preload.addEventListener("fileload", hLoaded);
   	preload.addEventListener("error", hError);	
	preload.addEventListener("complete", hComplete);
	preload.loadManifest(manifest);	
}

function hLoaded(event) {
	switch (event.item.type){	
		case createjs.LoadQueue.IMAGE:
			break;	
		case createjs.LoadQueue.JAVASCRIPT:
			document.body.appendChild(event.result);
			break;		
		case createjs.LoadQueue.XML:
			if(event.item.id == "mediaXML") mediaXML = event.result;
			if(event.item.id == "canvasXML") canvasXML = event.result;
			break;	
	}
}

function hComplete(event)
{
	preload = null;
	initiateTemplate();
}

function hError(event) {
	alert("File loader failed "+event);
}