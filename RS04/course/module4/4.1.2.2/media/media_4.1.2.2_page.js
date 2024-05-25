
function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

loadScript("../../../common/scripts/swfobject.js", registerSWF);
(slideViewDidLoad = function(container,_id)
{
	var textElement;
	if(_id == 2)
	{
		var manifest = [];
		var imgArray = [];
		var currentImage;
		
		manifest.push({id:"img_0",src:"media_4.1.2.2.png"},{id:"img_1", src:"popup_newyork.png",x:0,y:0},{id:"img_2", src:"popup_toronto.png",x:0,y:0},{id:"img_3", src:"popup_dallas.png",x:0,y:0},{id:"img_4", src:"popup_mexicocity.png",x:0,y:0},{id:"img_5", src:"popup_sanjose.png",x:0,y:0});
		var complete = function(imgs){
			
			
			for(var i = 0;i<manifest.length;i++)
			{
				var img = new createjs.Bitmap(imgs["img_"+i]);	
				
				container.addChildAt(img,0);
				img.visible = false;
				imgArray.push(img);	
			
			}
			currentImage =  imgArray[0];
			currentImage.visible = true;
					
			
			$("td").each(function(index, element) {
                
				$("#td"+index).click(function(e) {
                   if(currentImage) currentImage.visible = false;
					currentImage =  imgArray[index];
					currentImage.visible = true;
					update = true;
					restore();
					$(this).addClass("tdOver");
                });
				
            });
			
			update = true;
			
		}
		loadImages(manifest,complete);	
					
	function restore(){
		$("td").each(function(i) {
		$("#td"+i).removeClass("tdOver");
		$("#td"+i).addClass("tdFill");
	});
				
	}
	}
});

