loadScript("../../../common/scripts/swfobject.js", registerSWF);

function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

(slideViewDidLoad = function(container,id){
	var manifest = [	
		{src:"images/Tween_small.png", id:"btn_0",y:58},
		{src:"images/Tween2_small.png", id:"btn_1", y:137},
		{src:"images/Tween3_small.png", id:"btn_2", y:218},
		{src:"images/Tween4_small.png", id:"btn_3", y:297},	
		{src:"images/Bitmap1_1.png", id:"Bitmap1_1"},
		{src:"images/Bitmap2.png", id:"Bitmap2"},
		{src:"images/Bitmap3.png", id:"Bitmap3"},
		{src:"images/image1.png", id:"image1"},
		{src:"images/image2.png", id:"image2"},
		{src:"images/image3.png", id:"image3"},
		{src:"images/image4.png", id:"image4"},
		{src:"images/image5.png", id:"image5"},
		{src:"images/image6.png", id:"image6"},
		{src:"images/MagnifyingGlass.png", id:"MagnifyingGlass"},
		{src:"images/media_11222.png", id:"media_11222"},
		{src:"images/WireShark.png", id:"WireShark"},
		{src:"Animation.js", id:"anim"}
	];
	
	function imageLoaded(imgs)
	{
		var bt;
		var currentBtn;
		var main = new lib.Main()
		for(var i = 0;i<4;i++)
		{
			bt = new createjs.Bitmap(manifest[i].src);
			bt.scaleX = bt.scaleY = 0.5;
			bt.regX = 65;
			bt.regY = 65;
			bt.cursor = "pointer";
			bt.x = 52;
			bt.y = 86 + (82*i);
			bt.bid = i;
			bt.onClick = function(ev){
				if(currentBtn == ev.target) return;
				if(currentBtn)
				{
					createjs.Tween.get(currentBtn).to({scaleX:.5,scaleY:.5},200	);
				}
				currentBtn = ev.target;
				main.playClip(ev.target.bid);
				createjs.Tween.get(ev.target).to({scaleX:.6,scaleY:.6},200);
			}
			container.addChild(bt);
			
		}
		
		container.addChild(main);
		var domArray = $("#commonMediaText").find("*");
		var cnt = domArray.length;	
		for(var i = 6;i<domArray.length;i++)
		{
			$(domArray[i]).css("z-index",cnt);
			cnt--;
		}	
	}
	
	loadImages(manifest,imageLoaded);
	
});