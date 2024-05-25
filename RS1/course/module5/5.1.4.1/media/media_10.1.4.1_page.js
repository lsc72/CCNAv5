loadScript("../../../common/scripts/swfobject.js", registerSWF);
function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}
(slideViewDidLoad = function(container,id){
		
	var manifest = [
		{src:"images/Bitmap1.png", id:"Bitmap1"},
		{src:"images/Bitmap2.png", id:"Bitmap2"},			
		{src:"images/Bitmap2b.png", id:"Bitmap2b"},
		{src:"images/Bitmap3.png", id:"Bitmap3"},
		{src:"images/Bitmap4.png", id:"Bitmap4"},
		{src:"images/marker.png", id:"marker"},
		{src:"images/media_10.1.4.1.jpg", id:"bg"},
		{src:"Animation.js", id:"animjs"}
	];
		
	function imageLoaded(imgs){		
		var anim;
		//Background
		var bg = new createjs.Bitmap(imgs["bg"]);
		container.addChild(bg);
		
		//Buttons Area
		var _mask = new createjs.Shape();
		_mask.graphics.beginFill().drawRoundRect(0,0,466,35,5);
		_mask.x = 2;
		_mask.y = 353;
		
		var btnHolder = new createjs.Container();
		btnHolder.mask = _mask;
		container.addChild(btnHolder);
		
		var buttonArr = [{id:"ID_btn01",x:2.25,frame:0},{id:"ID_btn02",x:119.3,frame:10},{id:"ID_btn03",x:235.8,frame:21},{id:"ID_btn04",x:352.5,frame:32}]
		function buttonClick(ev)
		{		
			anim.doAnimation(buttonArr[ev.target.bid].frame);
			createjs.Tween.get(btnHolder.marker).to({x:buttonArr[ev.target.bid].x},400,createjs.Ease.circInOut);			
		}
		
		var txtComp;
		var btnBg;
		var btn;
		for(var i = 0;i<4;i++)
		{
			btn = new createjs.Container();			
			txtComp = getCJSElement("TEXT",{x:2, y:8, size:11, color:"white", bold:1, width:110, align:"center", compId:buttonArr[i].id, expand:"up+down", style:"pointer-events:none;"});			
			btnBg = new createjs.Shape();
			btnBg.graphics.beginFill("#f63").drawRect(0,0,115,30);
			btnBg.alpha = 0.01;
			btn.addChild(btnBg, txtComp);		
		
			btn.x = buttonArr[i].x;
			btn.y = 358;
			btn.bid = i;
			btn.onClick = buttonClick;
			btnHolder.addChild(btn);			
		}
		var marker = new createjs.Bitmap(imgs["marker"]);
		marker.x = buttonArr[0].x
		marker.y = 358;
		btnHolder.addChild(marker);		
		btnHolder.marker = marker;
		
		//Maps area
		var aMask = new createjs.Shape();
		aMask.graphics.beginFill().drawRect(0,0,452,296);
		aMask.x = 10;
		aMask.y = 52;
			
		anim = new lib.Animation();
		anim.mask = aMask;
		container.addChild(anim);		
	}	
	loadImages(manifest,imageLoaded);	
});