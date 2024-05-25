
function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

loadScript("../../../common/scripts/swfobject.js", registerSWF);
 
(slideViewDidLoad = function(container){
		
	var currentImage;
	var manifest = [{src:"images/res_0.png",id:"res_0"},
					{src:"images/Router.png",id:"hit_1",x:117.4,y:184.6},{src:"images/res_1.png",id:"res_1"},
					{src:"images/s1_mc.png",id:"hit_2",x:216.1,y:72.6},{src:"images/res_2.png",id:"res_2"},
					{src:"images/ap1_mc.png",id:"hit_3",x:306,y:74},{src:"images/res_3.png",id:"res_3"},
					{src:"images/s2_mc.png",id:"hit_4",x:215.1,y:290.2},{src:"images/res_4.png",id:"res_4"},
					{src:"images/s3_mc.png",id:"hit_5",x:307.8,y:248.15},{src:"images/res_5.png",id:"res_5"}];
	
	function loadImage(obj)
	{
		var buttonCont = new createjs.Container();
		container.addChild(buttonCont);
		
		var resultImage = new createjs.Bitmap(obj.result);
		buttonCont.addChild(resultImage);
		resultImage.visible = false;
		
		var bitm = new createjs.Bitmap(obj.hit);
		bitm.x = obj.x;
		bitm.y = obj.y;
		buttonCont.addChild(bitm);
		bitm.cursor = "pointer";
		bitm.result = resultImage;
		
		bitm.addEventListener("click",function(ev){
			currentImage.visible = false;
			currentImage = ev.target.result;
			currentImage.visible = true;
			update = true;
		});
	}
	
	function imageLoaded(imgs)
	{
		currentImage =  new createjs.Bitmap(imgs["res_0"]);
		container.addChild(currentImage);
		
		for(var i = 0;i<manifest.length;i++)
		{
			var obj = manifest[i];
			if(obj.id.substr(0,3) == "hit")
			{
				obj.hit = imgs[obj.id];
				obj.result = imgs["res_"+obj.id.split("_")[1]];
				loadImage(obj)	
			}			
		}	
		
	}
	loadImages(manifest,imageLoaded);
	
});