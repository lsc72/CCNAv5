(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.classesmediaMediaObject = function() {
	this.initialize();

	// main
	this.instance = new lib.Main();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,470,400);


// symbols:
(lib._7_3_2_3 = function() {
	this.initialize(img._7_3_2_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,470,400);


(lib.envelope_closed_static = function() {
	this.initialize(img.envelope_closed_static);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,123,79);


(lib.tableHilight = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#F26200").ss(2,1,1).p("AQeB6Mgg7AAAIAAjzMAg7AAAg");
	this.shape.setTransform(105.5,12.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,211,24.5);


(lib.ID_txt02 = function() {
	this.initialize();

	// ID_txt02
	this.text= new DOMObject({type:"TEXT" , align:"center" ,compId:"ID_txt02", width:"90", expand:"up",class:"orangeCallOut"}); 

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,103,16.2);


(lib.ID_txt01 = function() {
	this.initialize();

	// ID_txt01
	this.text= new DOMObject({type:"TEXT" , align:"center" ,compId:"ID_txt01", width:"90", expand:"up",class:"orangeCallOut"}); 

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,99,16.2);


(lib.envelopeclosedstatic = function() {
	this.initialize();

	// png
	this.instance = new lib.envelope_closed_static();
	this.instance.setTransform(-39.5,-26.1,0.667,0.663);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-39.5,-26.1,82.1,52.4);


(lib.animation = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// packet
	this.instance = new lib.envelopeclosedstatic();
	this.instance.setTransform(60.2,281.2,0.037,0.036,0,0,0,1.4,0);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:1.5,scaleX:0.37,scaleY:0.36,x:60.6,y:272,alpha:1},8).to({x:129.6,y:220},15).to({alpha:0},15).to({alpha:1},15).to({x:241.6,y:139},25).to({alpha:0},15).to({alpha:1},15).wait(85).to({x:360.6,y:220},25).to({x:360.7,alpha:0},15).to({alpha:1},15).to({x:292.2,y:272},20).to({alpha:0},15).to({alpha:1},15).to({alpha:0},15).wait(46).to({regX:1.4,scaleX:0.04,scaleY:0.04},0).to({regX:1.5,scaleX:0.37,scaleY:0.36,alpha:1},15).wait(1).to({x:360.6,y:220},15).to({alpha:0},15).to({alpha:1},15).to({x:241.6,y:139},25).to({alpha:0},15).to({alpha:1},15).wait(85).to({x:129.6,y:220},25).to({alpha:0},15).to({alpha:1},15).to({x:60.6,y:272},20).to({alpha:0},15).to({alpha:1},15).to({alpha:0},15).wait(2));

	// table highlight
	this.instance_1 = new lib.tableHilight();
	this.instance_1.setTransform(241.5,60.9,1,1,0,0,0,105.5,12.3);
	this.instance_1.alpha = 0;
	this.instance_1.shadow = new cjs.Shadow("rgba(242,98,0,1)",0,0,5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(94).to({alpha:1},15).to({alpha:0},16).to({alpha:1},14).to({alpha:0},15).to({alpha:1},15).wait(20).to({alpha:0},5).wait(267).to({y:85.4},0).to({alpha:1},15).to({alpha:0},16).to({alpha:1},14).to({alpha:0},15).to({alpha:1},15).wait(20).to({y:85.8,alpha:0},5).wait(122));

	// orange
	this.instance_2 = new lib.ID_txt01();
	this.instance_2.setTransform(42.4,223.9,1,1,0,0,0,45,7.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).wait(683));

	// purple
	this.instance_3 = new lib.ID_txt02();
	this.instance_3.setTransform(273.4,223.9,1,1,0,0,0,45,7.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).wait(683));

	// text
	this.text = new cjs.Text("10.0.1.0", "11px Arial", "#000100");
	this.text.textAlign = "center";
	this.text.lineHeight = 13;
	this.text.setTransform(282.6,53.4);

	this.text_1 = new cjs.Text("10.0.0.0", "11px Arial", "#000100");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 13;
	this.text_1.setTransform(282.6,77.6);

	this.text_2 = new cjs.Text("F0", "11px Arial", "#000100");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 13;
	this.text_2.setTransform(175.8,53.4);

	this.text_3 = new cjs.Text("F1", "11px Arial", "#000100");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 13;
	this.text_3.setTransform(175.8,77.6);

	this.text_4 = new cjs.Text("F0", "11px Arial", "#000100");
	this.text_4.textAlign = "center";
	this.text_4.lineHeight = 13;
	this.text_4.setTransform(271.1,141.2);

	this.text_5 = new cjs.Text("F1", "11px Arial", "#000100");
	this.text_5.textAlign = "center";
	this.text_5.lineHeight = 13;
	this.text_5.setTransform(210.8,139.2);

	this.text_6 = new cjs.Text("10.0.1.254\n255.255.255.0", "11px Arial", "#000100");
	this.text_6.textAlign = "center";
	this.text_6.lineHeight = 13;
	this.text_6.setTransform(307.8,106.7);

	this.text_7 = new cjs.Text("10.0.0.254\n255.255.255.0", "11px Arial", "#000100");
	this.text_7.textAlign = "center";
	this.text_7.lineHeight = 13;
	this.text_7.setTransform(171.2,106.7);

	this.text_8 = new cjs.Text("10.0.1.253\n255.255.255.0", "11px Arial", "#000100");
	this.text_8.textAlign = "center";
	this.text_8.lineHeight = 13;
	this.text_8.lineWidth = 77;
	this.text_8.setTransform(420.2,293.2);

	this.text_9 = new cjs.Text("10.0.1.2\n255.255.255.0", "11px Arial", "#000100");
	this.text_9.textAlign = "center";
	this.text_9.lineHeight = 13;
	this.text_9.lineWidth = 77;
	this.text_9.setTransform(352.8,320);

	this.text_10 = new cjs.Text("10.0.1.1\n255.255.255.0", "11px Arial", "#000100");
	this.text_10.textAlign = "center";
	this.text_10.lineHeight = 13;
	this.text_10.setTransform(289.1,293.2);

	this.text_11 = new cjs.Text("10.0.0.253\n255.255.255.0", "11px Arial", "#000100");
	this.text_11.textAlign = "center";
	this.text_11.lineHeight = 13;
	this.text_11.lineWidth = 77;
	this.text_11.setTransform(185.1,293.2);

	this.text_12 = new cjs.Text("10.0.0.2\n255.255.255.0", "11px Arial", "#000100");
	this.text_12.textAlign = "center";
	this.text_12.lineHeight = 13;
	this.text_12.setTransform(120.6,320);

	this.text_13 = new cjs.Text("10.0.0.1\n255.255.255.0", "11px Arial", "#000100");
	this.text_13.textAlign = "center";
	this.text_13.lineHeight = 13;
	this.text_13.lineWidth = 83;
	this.text_13.setTransform(54.8,293.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_13},{t:this.text_12},{t:this.text_11},{t:this.text_10},{t:this.text_9},{t:this.text_8},{t:this.text_7},{t:this.text_6},{t:this.text_5},{t:this.text_4},{t:this.text_3},{t:this.text_2},{t:this.text_1},{t:this.text}]}).wait(683));

	// bg
	this.instance_4 = new lib._7_3_2_3();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4}]}).wait(683));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,470,400);


(lib.Main = function() {
	this.initialize();

	// animation
	this.anim01 = new lib.animation();

	this.addChild(this.anim01);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,470,400);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;