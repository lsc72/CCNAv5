
(hitBtn = function(d){
	this.initialize();
	
	var _t = this;
	
	var bg = new createjs.Shape();
	bg.graphics.beginFill("#f63").drawRect(0,0,115,30);
	bg.alpha = 0.01;
	this.addChild(bg);
	
	
	var div = document.createElement("div");
	div.style.cssText = "postion:absolute;top:0;left:0;font-size:11px;color:white;-moz-user-select: none;-webkit-user-select: none;"
	div.id = d.id;
	div.innerHTML = "<b>"+d.txt+"</b>";
	$("#commonInterText").append(div);
	
	var dom = new createjs.DOMElement(div);
	dom.y = 8;
	dom.x = 8 + (115-$("#"+d.id).width())/2;
	this.addChild(dom);
	
	
	this.onMouseOver = function(){document.body.style.cursor='pointer';};
	this.onMouseOut = function(){document.body.style.cursor='default';};
	$("#"+d.id).mouseover(function(ev){document.body.style.cursor='pointer';});
	$("#"+d.id).mouseout(function(ev){document.body.style.cursor='default';});
	$("#"+d.id).click(function(ev){_t.parent.parent.bClick(_t)});
	
	this.y = 358;
	
}).prototype = new createjs.Container();

var Activity = function(data)
{
	this.initialize();
	
	var _t = this;
	var xml = data;
	
	var tlArr = [0,10,21,32];
	
	var anim;
	$("#flashContent").append('<div id="commonInterText"></div>');
	
	//Buttons Area
	var _mask = new createjs.Shape();
	_mask.graphics.beginFill().drawRoundRect(0,0,466,35,5);
	_mask.x = 2;
	_mask.y = 353;
	
	var btnHolder = new createjs.Container();
	btnHolder.mask = _mask;
	this.addChild(btnHolder);
	
	var bArr = [{id:"ID_btn01",x:2.25},{id:"ID_btn02",x:119.3},{id:"ID_btn03",x:235.8},{id:"ID_btn04",x:352.5}]
	var marker = new Image();
	marker.src = "marker.png";
	marker.onload = function(ev)
	{
		var txt;
		var btn;
		for(var i = 0;i<4;i++)
		{
			txt = $(data).find("component#"+bArr[i].id).text();
			btn = new hitBtn({id:bArr[i].id,txt:txt});
			btn.x = bArr[i].x;
			btn.bid = i;
			btn.onClick =  function(ev){_t.bClick(ev.target);};
			btnHolder.addChild(btn);
		}
		
		var marker = new createjs.Bitmap(this);
		marker.x = bArr[0].x
		marker.y = 358;
		btnHolder.addChild(marker);
		
		btnHolder.marker = marker;
				
		if(_t.getStage()) _t.getStage().update();
	}
	
	_t.bClick = function(ev)
	{
		anim.doAnimation(tlArr[ev.bid]);
		createjs.Tween.get(btnHolder.marker).to({x:bArr[ev.bid].x},400,createjs.Ease.circInOut);
		if(this.getStage()) this.getStage().update();
	}
	
	_t.loadAssets = function()
	{
		images = images||{};
		
		var manifest = [
			{src:"Bitmap1.png", id:"Bitmap1"},
			{src:"Bitmap2.png", id:"Bitmap2"},			
			{src:"Bitmap2b.png", id:"Bitmap2b"},
			{src:"Bitmap3.png", id:"Bitmap3"},
			{src:"Bitmap4.png", id:"Bitmap4"}
		];
	
		var loader = new createjs.PreloadJS(false);
		loader.onFileLoad = _t.handleFileLoad;
		loader.onComplete = _t.handleComplete;
		loader.loadManifest(manifest);
	}
	
	_t.handleFileLoad = function(o) {
		if (o.type == "image") { images[o.id] = o.result; }
	}
	
	_t.handleComplete = function() {
		var aMask = new createjs.Shape();
		aMask.graphics.beginFill().drawRect(0,0,452,296);
		aMask.x = 10;
		aMask.y = 52;
			
		anim = new lib.Animation(xml);
		anim.mask = aMask;
		_t.addChild(anim);
		
		
		
		createjs.Ticker.setFPS(24);
		createjs.Ticker.addListener(_t.getStage(),false);
	}
	
	_t.loadAssets();
			
}
var p = Activity.prototype = new createjs.Container();

