(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.classesmediaMediaObject = function() {
	this.initialize();

	// main
	this.instance = new lib.Main();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,470,400.2);


// symbols:
(lib._11115 = function() {
	this.initialize(img._11115);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,653,556);


(lib.arrow_org = function() {
	this.initialize(img.arrow_org);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,14,55);


(lib.envelop = function() {
	this.initialize(img.envelop);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,72,46);


(lib.router = function() {
	this.initialize(img.router);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,74,53);


(lib.Tween2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.arrow_org();
	this.instance.setTransform(5,26.1,0.714,0.714,180);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-4.9,-13.1,10,39.3);


(lib.tableMc = function() {
	this.initialize();

	// Layer 1
//	this.text = new cjs.Text("Table", "bold 10px Arial", "#393536");
 	this.text = new DOMObject({type:"TEXT", subType:"TABLE", compId:"ID_table",  width:"448", x:"-130",y:"5"}); 
 
	this.text.setTransform(-102.6,13.9);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-114.4,13.9,27.5,15.4);


(lib.envelopeclosedstatic = function() {
	this.initialize();

	// Layer 2
	this.instance_1 = new lib.envelop();
	this.instance_1.setTransform(-41.6,-27.4,1.197,1.197);

	this.addChild(this.instance_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-41.6,-27.4,86.2,55.1);


(lib.packet4 = function() {
	this.initialize();

	// Layer 1
	//this.text_1 = new cjs.Text("DA\n192.168.10.10", "bold 10px Arial", "#393536");
 	this.text_1 = new DOMObject({type:"TEXT" , align:"center" ,compId:"ID_txt14",  width:"128", expand:"up+down", size:"9"}); 

	this.text_1.setTransform(-28,9);

	this.instance_2 = new lib.envelopeclosedstatic();
	this.instance_2.setTransform(-5,19.7,0.887,0.887,0,0,0,-45.4,0.5);

	this.addChild(this.instance_2,this.text_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.8,-5,76.5,48.8);


(lib.packet3 = function() {
	this.initialize();

	// Layer 1
	//this.text_2 = new cjs.Text("DA\n209.165.200.226", "bold 10px Arial", "#393536");
 	this.text_2 = new DOMObject({type:"TEXT" , align:"center" ,compId:"ID_txt13",  width:"128", expand:"up+down", size:"9"});
	this.text_2.setTransform(41,10.5);

	this.instance_3 = new lib.envelopeclosedstatic();
	this.instance_3.setTransform(59.7,19.8,0.887,0.886,0,0,0,-45.4,0.5);

	this.addChild(this.instance_3,this.text_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(63,-5,76.4,48.8);


(lib.packet2 = function() {
	this.initialize();

	// Layer 1
	//this.text_3 = new cjs.Text("SA\n209.165.200.226", "bold 10px Arial", "#393536");
 	this.text_3 = new DOMObject({type:"TEXT" , align:"center" ,compId:"ID_txt12",  width:"128", expand:"up+down", size:"9"});
	this.text_3.setTransform(42,10.5);

	this.instance_4 = new lib.envelopeclosedstatic();
	this.instance_4.setTransform(59.7,19.8,0.887,0.886,0,0,0,-45.4,0.5);

	this.addChild(this.instance_4,this.text_3);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(63,-5,76.4,48.8);


(lib.packet = function() {
	this.initialize();

	// Layer 1
	//this.text_4 = new cjs.Text("SA\n192.168.10.10", "bold 10px Arial", "#393536");
	this.text_4 = new DOMObject({type:"TEXT" , align:"center" ,compId:"ID_txt11",  width:"128", expand:"up+down", size:"9"});
	this.text_4.setTransform(-24,10);

	this.instance_5 = new lib.envelopeclosedstatic();
	this.instance_5.setTransform(-5,19.7,0.887,0.887,0,0,0,-45.4,0.5);

	this.addChild(this.instance_5,this.text_4);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.8,-5,76.5,48.8);


(lib.animation01 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{},true);

	// tableMc
	this.instance_6 = new lib.tableMc();
	this.instance_6.setTransform(232.3,64.4,1,1,0,0,0,0,33);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(89).to({alpha:1},0).wait(390));

	// packet4
	this.instance_7 = new lib.packet4();
	this.instance_7.setTransform(232.3,172.1,1,1,0,0,0,73.2,19.7);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(368).to({alpha:1},9).to({x:83.3},36).wait(3).to({x:83.7},0).to({x:82.3,y:283.1},33).to({x:82.7,alpha:0},18).wait(12));

	// packet3
	this.instance_8 = new lib.packet3();
	this.instance_8.setTransform(378.3,281.1,1,1,0,0,0,73.2,19.7);
	this.instance_8.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(254).to({alpha:1},9).to({y:173.1},35).wait(4).to({x:168.3,y:172.1},34).to({alpha:0},11).wait(132));

	// packet2
	this.instance_9 = new lib.packet2();
	this.instance_9.setTransform(168.3,170.1,1,1,0,0,0,73.2,19.7);
	this.instance_9.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(121).to({alpha:1},8).to({x:378.3},34).wait(7).to({y:279.1},38).wait(8).to({y:281.1,alpha:0},6).wait(257));

	// packet1
	this.instance_10 = new lib.packet();
	this.instance_10.setTransform(80.3,285.1,1,1,0,0,0,73.2,19.7);
	this.instance_10.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(3).to({y:276.6,alpha:1},2).to({y:182.1},24).to({y:168.1},4).wait(6).to({x:229.3},34).to({alpha:0},7).wait(399));

	// static text
	this.text_5 = new cjs.Text("209.165.201.1", "11px Arial", "#393536");
	this.text_5.textAlign = "center";
	this.text_5.lineHeight = 13;
	this.text_5.setTransform(407.7,315);

	this.text_6 = new cjs.Text("192.168.10.10", "11px Arial", "#393536");
	this.text_6.textAlign = "center";
	this.text_6.lineHeight = 13;
	this.text_6.setTransform(39.7,315);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_6},{t:this.text_5}]}).wait(479));

	// router
	this.instance_11 = new lib.router();
	this.instance_11.setTransform(167.5,150.6,0.733,0.733);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11}]}).wait(479));

	// arrow
	this.instance_12 = new lib.Tween2();
	this.instance_12.setTransform(195.4,161.3,1,1,180);
	this.instance_12.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(82).to({alpha:1},0).to({y:139.8},6).wait(281).to({alpha:0},0).wait(110));

	// Bg
	this.instance_13 = new lib._11115();
	this.instance_13.setTransform(0,0,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13}]}).wait(479));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,470,400.2);


(lib.Main = function() {
	this.initialize();

	// Animation
	this.anim01 = new lib.animation01();

	this.addChild(this.anim01);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,470,400.2);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;