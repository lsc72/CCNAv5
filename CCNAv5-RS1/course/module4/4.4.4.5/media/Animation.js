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
(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,653,556);


(lib.Frame5Ethernet = function() {
	this.initialize();

	// Layer 1
	//this.text = new cjs.Text("ID_txt05", "bold 11px Arial");
	this.text = new DOMObject({type:"TEXT" , align:"center" ,compId:"ID_txt05", width:"100",  size:"11", expand:"up+down", bold:"1",class:"purpleBg",color:"#ffffff"}); 
	this.text.setTransform(-23.4,-8.2);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-23.4,-8.2,46.9,16.6);


(lib.Frame4FrameRelay = function() {
	this.initialize();

	// Layer 1
	//this.text_1 = new cjs.Text("ID_txt04", "bold 11px Arial");
	this.text_1 = new DOMObject({type:"TEXT" , align:"center" ,compId:"ID_txt04", width:"100",  size:"11", expand:"up+down", bold:"1",class:"greyBg",color:"#ffffff"}); 
	this.text_1.setTransform(-23.4,-8.2);

	this.addChild(this.text_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-23.4,-8.2,46.9,16.6);


(lib.Frame3HDLC = function() {
	this.initialize();

	// Layer 1
//	this.text_2 = new cjs.Text("ID_txt03", "bold 11px Arial");
	this.text_2 = new DOMObject({type:"TEXT" , align:"center" ,compId:"ID_txt03", width:"100",  size:"11", expand:"up+down", bold:"1",class:"greenBg",color:"#ffffff"}); 

	this.text_2.setTransform(-23.4,-8.2);

	this.addChild(this.text_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-23.4,-8.2,46.9,16.6);


(lib.Frame2PPP = function() {
	this.initialize();

	// Layer 1
//	this.text_3 = new cjs.Text("ID_txt02", "bold 11px Arial");
	this.text_3 = new DOMObject({type:"TEXT" , align:"center" ,compId:"ID_txt02", width:"100",  size:"11", expand:"up+down", bold:"1",class:"lightGreenBg",color:"#ffffff"}); 

	this.text_3.setTransform(-23.4,-8.2);

	this.addChild(this.text_3);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-23.4,-8.2,46.9,16.6);


(lib.Frame1Wireless = function() {
	this.initialize();

	// Layer 1
//	this.text_4 = new cjs.Text("ID_txt01", "bold 11px Arial");
	this.text_4 = new DOMObject({type:"TEXT" , align:"center" ,compId:"ID_txt01", width:"100",  size:"11", expand:"up+down", bold:"1",class:"brownBg",color:"#ffffff"}); 

	this.text_4.setTransform(-21.5,-7.6);

	this.addChild(this.text_4);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-21.5,-7.6,46.9,16.6);


(lib.animation01 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{},true);

	// ID_txt05
	this.instance = new lib.Frame5Ethernet();
	this.instance.setTransform(157,293.3);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(368).to({alpha:1},0).wait(30).to({x:275,y:329.5},27).to({x:395},22).wait(10));

	// ID_txt04
	this.instance_1 = new lib.Frame4FrameRelay();
	this.instance_1.setTransform(285,165.3);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(271).to({alpha:1},0).wait(29).to({x:157,y:293.3},38).wait(25).to({alpha:0},4).wait(90));

	// ID_txt03
	this.instance_2 = new lib.Frame3HDLC();
	this.instance_2.setTransform(155,112.3);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(181).to({alpha:1},5).wait(29).to({x:285,y:165.3},30).wait(20).to({alpha:0},5).wait(187));

	// ID_txt02
	this.instance_3 = new lib.Frame2PPP();
	this.instance_3.setTransform(20,218.3);
	this.instance_3.alpha = 0;
//	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(95).to({alpha:1},5).wait(30).to({x:176.7,y:112.3},30).wait(15).to({alpha:0},5).wait(277));

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(95).to({alpha:1},5).wait(30).to({x:155,y:112.3},30).wait(15).to({alpha:0},5).wait(277));

	// ID_txt01
	this.instance_4 = new lib.Frame1Wireless();
	this.instance_4.setTransform(20,80.3);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(14).to({alpha:1},0).wait(31).to({y:218.3},29).wait(15).to({alpha:0},5).wait(363));

	// bg
	this.instance_5 = new lib.bg();
	this.instance_5.setTransform(0,0,0.72,0.719);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5}]}).wait(457));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,470,400);


(lib.Main = function() {
	this.initialize();

	// animation
	this.anim01 = new lib.animation01();

	this.addChild(this.anim01);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,470,400);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;