
(function (lib, img, cjs) {

var p; // shortcut to reference prototypes
//Label component
(lib.LabelText = function(_obj) {
	this.initialize();
	
	var tDiv = document.createElement("div");
	tDiv.id = _obj.id;
	tDiv.innerHTML = getMediaText(_obj.id);
	//tDiv.innerHTML = $(xml).find("component#"+_obj.id).text();
	if(_obj.head)
	{
		tDiv.style.cssText = "position:absolute;left:11px;top:1px;font-size:13px;visibility:hidden;color:#FFF;";
	}else
	{
		tDiv.style.cssText = "position:absolute;left:11px;top:1px;font-size:11px;visibility:hidden;";
	}
	$("#commonMediaText").append(tDiv);
	
	var dDiv = new cjs.DOMElement(tDiv);
	dDiv.x = _obj.x;
	dDiv.y = _obj.y;
	this.addChild(dDiv);
		
}).prototype = p = new cjs.Container();

// stage content:
(lib.Animation = function() {
	this.initialize();

	// code
	this.zoomClip = new lib.ZoomClip();
	this.zoomClip.setTransform(6.1,15.1,1,1,0,0,0,-277.7,-158.9);

	this.addChild(this.zoomClip);this.zoomClip.gotoAndStop(0);
	
	this.cFrame;
	this.clearInt;
	var t = this;
		
	this.doAnimation = function(_id)
	{
		this.cFrame = _id;
		this.clearInt = setInterval(function(){t.enterFrameInterval()},50);
		this.zoomClip.instance_5.visible = false;
		this.zoomClip.instance_6.visible = false;
		this.zoomClip.instance_7.visible = false;
		this.zoomClip.instance_8.visible = false;
		//this.zoomClip.gotoAndStop(_id);
	}
	
	this.enterFrameInterval = function()
	{
		var mFrame = this.zoomClip.currentFrame;
		if (this.cFrame<mFrame) {
			this.zoomClip.gotoAndStop(mFrame-1);
		} else if (this.cFrame > mFrame) {
			this.zoomClip.gotoAndStop(mFrame+1);
		} else {			
			clearInterval(this.clearInt);
			if(mFrame == 0)
			{
				this.zoomClip.instance_5.visible = true;
			}
			else if(mFrame == 10)
			{
				this.zoomClip.instance_6.visible = true;
			}
			else if(mFrame == 21)
			{
				this.zoomClip.instance_7.visible = true;
			}			
			else if(mFrame == 32)
			{
				this.zoomClip.instance_8.visible = true;
			}
		}
	}
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-78.6,41.2,588,324);

// symbols:
(lib.Bitmap1 = function() {
	this.initialize();
	
	this.image = new cjs.Bitmap("images/Bitmap1.png");
	this.addChild(this.image);
	
}).prototype = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,588,324);

(lib.Bitmap2 = function() {
	this.initialize();
	this.image = new cjs.Bitmap("images/Bitmap2.png");
	this.addChild(this.image);
}).prototype = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,678,459);

(lib.Bitmap2b = function() {
	this.initialize();
	this.image = new cjs.Bitmap("images/Bitmap2b.png");
	this.addChild(this.image);
}).prototype = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,293,160);

(lib.Bitmap3 = function() {
	this.initialize();
	this.image = new cjs.Bitmap("images/Bitmap3.png");
	this.addChild(this.image);
}).prototype = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,578,314);

(lib.Bitmap4 = function() {
	this.initialize();
	this.image = new cjs.Bitmap("images/Bitmap4.png");
	this.addChild(this.image);
}).prototype = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,612,416);

(lib.s4Text = function() {
	this.initialize();
		
	this.label = getCJSElement("TEXT",{x:94, y:24, size:11, color:"#393536", width:60.5, align:"left", compId:"ID_prince", expand:"up+down"});
	this.addChild(this.label);
	
	//this.label = new lib.LabelText({x:-250,y:-95,id:"ID_header04",head:"123"});
	this.label = getCJSElement("TEXT",{x:-250, y:-93, size:13, color:"#fcfcfc", width:456, align:"left", compId:"ID_header04", expand:"up+down"});
	this.addChild(this.label);
	
	this.label = getCJSElement("TEXT",{x:-215, y:-41, size:11, color:"#393536", width:60.5, align:"left", compId:"ID_robie1", expand:"up+down"});

	this.addChild(this.label);
	
	this.label = getCJSElement("TEXT",{x:-73, y:-8, size:11, color:"#393536", width:65, align:"left", compId:"ID_cogs", expand:"up+down"});
	this.addChild(this.label);
	
	this.label = getCJSElement("TEXT",{x:-250, y:78, size:11, color:"#393536", width:65, align:"left", compId:"ID_quin", expand:"up+down"});
	this.addChild(this.label);
	
	this.label = getCJSElement("TEXT",{x:-140, y:156, size:11, color:"#393536", width:60.5, align:"left", compId:"ID_robie2", expand:"up+down"});
	this.addChild(this.label);
	
	this.label = getCJSElement("TEXT",{x:-66, y:65, size:11, color:"#393536", width:60.5, align:"left", compId:"ID_bell1", expand:"up+down"});
	this.addChild(this.label);
	
	this.label = getCJSElement("TEXT",{x:68, y:76, size:11, color:"#393536", width:60.5, align:"left", compId:"ID_bell2", expand:"up+down"});
	this.addChild(this.label);
	
	this.label = getCJSElement("TEXT",{x:17, y:223, size:11, color:"#393536", width:60.5, align:"left", compId:"ID_south", expand:"up+down"});
	this.addChild(this.label);
	
	this.label = getCJSElement("TEXT",{x:89, y:110, size:11, color:"#393536", width:81, align:"left", compId:"ID_lower", expand:"up+down"});
	this.addChild(this.label);
		
	this.label = getCJSElement("TEXT",{x:93, y:150, size:11, color:"#393536", width:65, align:"left", compId:"ID_hollis", expand:"up+down"});
	this.addChild(this.label);
		
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-26.2,-8.6,52.6,17.4);


(lib.s3Text = function() {
	this.initialize();

	//this.label = new lib.LabelText({x:-167,y:-192,id:"ID_header03",head:"123"});
	this.label = getCJSElement("TEXT",{x:-167, y:-192, size:13, color:"#fcfcfc", width:456, align:"left", compId:"ID_header03", expand:"up+down"});
	this.addChild(this.label);
	
	this.label = getCJSElement("TEXT",{x:43, y:-7, size:11, color:"#393536", width:60.5, align:"left", compId:"ID_sherbrooke", expand:"up+down"});
	this.addChild(this.label);
	
	
	this.label = getCJSElement("TEXT",{x:-20, y:-43, size:11, color:"#393536", width:60.5, align:"left", compId:"ID_amherst", expand:"up+down"});
	this.addChild(this.label);
	
	
	this.label = getCJSElement("TEXT",{x:-34, y:33, size:11, color:"#393536", width:60.5, align:"left", compId:"ID_halifax2", expand:"up+down"});
	this.addChild(this.label);
	
    this.label = getCJSElement("TEXT",{x:-139, y:95, size:11, color:"#393536", width:60.5, align:"left", compId:"ID_shelburne", expand:"up+down"});
	this.addChild(this.label);
	
	this.label = getCJSElement("TEXT",{x:89, y:-90, size:11, color:"#393536", width:60.5, align:"left", compId:"ID_inverness", expand:"up+down"});
	this.addChild(this.label);
	
	
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-147.8,-114.2,52.6,17.4);


(lib.s2Text = function() {
	this.initialize();
	
	//this.label = new lib.LabelText({x:-343,y:-50,id:"ID_header02",head:"123"});
	this.label = getCJSElement("TEXT",{x:-343, y:-50, size:13, color:"#fcfcfc", width:456, align:"left", compId:"ID_header02", expand:"up+down"});
	this.addChild(this.label);
	
	//this.label = new lib.LabelText({x:-322,y:64,id:"ID_yukon"});
	this.label = getCJSElement("TEXT",{x:-332, y:80, size:11, width:60.5, align:"center", compId:"ID_yukon", expand:"up"});
	this.addChild(this.label);
	
	this.label = getCJSElement("TEXT",{x:-275, y:103, size:11, width:60.5, align:"center", compId:"ID_nw", expand:"up"});
	this.addChild(this.label);
	
	this.label = getCJSElement("TEXT",{x:-191, y:84, size:11, width:60.5, align:"center", compId:"ID_nunavut", expand:"up"});
	this.addChild(this.label);
	
	this.label = getCJSElement("TEXT",{x:-314, y:153, size:11, width:60.5, align:"center", compId:"ID_britishColumbia", expand:"up"});
	this.addChild(this.label);
	
	this.label = getCJSElement("TEXT",{x:-270, y:161, size:11, width:60.5, align:"center", compId:"ID_alberta", expand:"up"});
	this.addChild(this.label);
	
	this.label = getCJSElement("TEXT",{x:-230, y:179, size:11, width:60.5, align:"center", compId:"ID_sask", expand:"up"});
	this.addChild(this.label);
	
	this.label = getCJSElement("TEXT",{x:-182, y:167, size:11, width:60.5, align:"center", compId:"ID_manitoba", expand:"up"});
	this.addChild(this.label);
	
	this.label = getCJSElement("TEXT",{x:-134, y:197, size:11, width:60.5, align:"center", compId:"ID_ontario", expand:"up"});
	this.addChild(this.label);
	
	this.label = getCJSElement("TEXT",{x:-31, y:152, size:11, width:60.5, align:"center", compId:"ID_newfound", expand:"up"});
	this.addChild(this.label);
	
	this.label = getCJSElement("TEXT",{x:-60, y:172, size:11, width:60.5, align:"center", compId:"ID_quebec", expand:"up"});
	this.addChild(this.label);
	
	this.label = getCJSElement("TEXT",{x:-20, y:207, size:11, width:60.5, align:"center", compId:"ID_newbruns", expand:"up"});
	this.addChild(this.label);
	
	this.label = getCJSElement("TEXT",{x:33, y:227, size:11, width:60.5, align:"center", compId:"ID_ns", expand:"up"});
	this.addChild(this.label);
		
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-26.2,-8.6,52.6,17.4);


(lib.s1Text = function() {
	this.initialize();

	// text  

	//this.label = new lib.LabelText({x:-318,y:-50,id:"ID_header01",head:"123"});
	this.label = getCJSElement("TEXT",{x:-316, y:-50, size:13, color:"#fcfcfc", width:456, align:"left", compId:"ID_header01", expand:"up+down"});	
	this.addChild(this.label);

	//this.label = new lib.LabelText({x:-40,y:-5,id:"ID_greenland"});
	this.label = getCJSElement("TEXT",{x:-65, y:-3, size:11, width:98.2, align:"center", compId:"ID_greenland", expand:"left+right"});	
	this.addChild(this.label);
	
	//this.label = new lib.LabelText({x:-144.5,y:110,id:"ID_canada2"});
	this.label = getCJSElement("TEXT",{x:-192, y:108, size:11, width:127.5, align:"center", compId:"ID_canada2", expand:"left+right"});
	this.addChild(this.label);
	
	//this.label = new lib.LabelText({x:-167,y:202,id:"ID_USA"});
	this.label = getCJSElement("TEXT",{x:-166, y:196, size:11, width:138.95, align:"center", compId:"ID_USA", expand:"left+right"});
	this.addChild(this.label);
	
	//this.label = new lib.LabelText({x:-136,y:260,id:"ID_mexico"});
	this.label = getCJSElement("TEXT",{x:-171, y:260, size:11, width:104, align:"center", compId:"ID_mexico", expand:"left+right"});
	this.addChild(this.label);
	
	
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-26.2,-8.6,52.6,17.4);


(lib.level4 = function() {
	this.initialize();

	// Layer 8
	this.instance = new lib.Bitmap4();
	this.instance.setTransform(-141.1,-81.7,0.488,0.488);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-141.1,-81.7,298.4,202.8);


(lib.level3 = function() {
	this.initialize();

	// Layer 2
	this.instance_1 = new lib.Bitmap3();
	this.instance_1.setTransform(-141.2,-63.8,0.5,0.5);

	this.addChild(this.instance_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-141.2,-63.8,288.8,156.9);


(lib.level2b = function() {
	this.initialize();

	// Layer 2
	this.instance_2 = new lib.Bitmap2b();
	this.instance_2.setTransform(-143.7,-65.8);

	this.addChild(this.instance_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-143.7,-65.8,293,160);


(lib.level2 = function() {
	this.initialize();

	// Layer 2
	this.instance_3 = new lib.Bitmap2();
	this.instance_3.setTransform(-164.1,-112.7,0.5,0.5);

	this.addChild(this.instance_3);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-164.1,-112.7,338.9,229.4);


(lib.level1 = function() {
	this.initialize();

	// Layer 3
	this.instance_4 = new lib.Bitmap1();
	this.instance_4.setTransform(-268.4,-119.9);

	this.addChild(this.instance_4);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-268.4,-119.9,588,324);

(lib.ZoomClip = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// text - Continental Boundaries
	this.instance_5 = new lib.s1Text();
	this.instance_5.setTransform(46.7,-108.8);

	this.instance_6 = new lib.s2Text();
	this.instance_6.setTransform(72.7,-110.3);

	this.instance_7 = new lib.s3Text();
	this.instance_7.setTransform(-102.1,32.5);

	this.instance_8 = new lib.s4Text();
	this.instance_8.setTransform(-19.4,-66.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5}]}).to({state:[]},1).to({state:[{t:this.instance_6}]},9).to({state:[]},1).to({state:[{t:this.instance_7}]},10).to({state:[]},1).to({state:[{t:this.instance_8}]},10).wait(1));

	// text - Continental Boundaries
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F68026").s().p("ASkvMQALAAAIAIQAIAIAAAMQAAALgIAIQgIAIgLAAQgLAAgIgIQgIgIAAgLQAAgMAIgIQAIgIALAAIAAAAAM8hwQAAALgIAIQgIAIgLAAQgMAAgHgIQgJgIAAgLQAAgLAJgIQAHgIAMAAQALAAAIAIQAIAIAAALIAAAAAndo6QgLAAgIgIQgIgIAAgLQAAgLAIgIQAIgIALAAQALAAAJAIQAIAIAAALQAAALgIAIQgJAIgLAAIAAAAAkUFbQgIgIAAgLQAAgLAIgIQAHgIAMAAQALAAAIAIQAIAIAAALQAAALgIAIQgIAIgLAAQgMAAgHgIIAAAAAyIOyQAAALgIAIQgIAIgLAAQgLAAgIgIQgIgIAAgLQAAgMAIgIQAIgIALAAQALAAAIAIQAIAIAAAMIAAAA").cp();
	this.shape.setTransform(-75.9,49.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},21).to({state:[]},1).wait(11));

// northamerica
	this.instance_9 = new lib.level1();
	this.instance_9.setTransform(-93.7,-12.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({scaleX:2,scaleY:2,x:-69.8,y:0,alpha:0},8).to({_off:true},1).wait(24));

	// canada
	this.instance_10 = new lib.level2();
	this.instance_10.setTransform(-69.9,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({scaleX:2,scaleY:2,x:-99.8},9).to({_off:true},1).wait(23));

	// canada-2
	this.instance_11 = new lib.level2b();
	this.instance_11.setTransform(-109.9,0,2,2);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(10).to({_off:false},0).to({scaleX:2.8,scaleY:2.8,x:-317.6,y:-85.4,alpha:0.602},7).to({alpha:0},3).to({_off:true},1).wait(12));

	// nova scotia
	this.instance_12 = new lib.level3();
	this.instance_12.setTransform(-69.9,0);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(10).to({_off:false},0).to({scaleX:2,scaleY:2,x:-15.8},11).to({scaleX:4,scaleY:4,x:-69.8,alpha:0},10).to({_off:true},1).wait(1));

	// halifax
	this.instance_13 = new lib.level4();
	this.instance_13.setTransform(-69.9,0);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(21).to({_off:false},0).to({scaleX:2,scaleY:2},11).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-362.4,-132.8,588,324);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;