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


(lib.WAN_Trailer = function() {
	this.initialize();

	// text
	//this.text = new cjs.Text("ID_txt03", "bold 11px Arial");
	this.text = new DOMObject({type:"TEXT" , align:"center" ,compId:"ID_txt03", width:"75",  size:"11", expand:"up+down",class:"lightYellowBg"}); 
	this.addChild(this.text);
	
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,46.9,16.6);


(lib.WAN_Header = function() {
	this.initialize();

	// Layer 1
	//this.text_1 = new cjs.Text("ID_txt04", "bold 11px Arial");
	this.text_1 = new DOMObject({type:"TEXT" , align:"center" ,compId:"ID_txt04", width:"75",  size:"11", expand:"up+down",class:"lightYellowBg"}); 
	this.addChild(this.text_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,46.9,16.6);


(lib.txt01a = function() {
	this.initialize();

	// Layer 1
	//this.text_2 = new cjs.Text("ID_txt01a", "bold 11px Arial", "#E31C23");
	this.text_2 = new DOMObject({type:"TEXT" , align:"center" ,compId:"ID_txt01a", width:"75",  size:"11", expand:"up+down",class:"orangeBg"}); 

	this.addChild(this.text_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,53,16.6);


(lib.LAN_trailer = function() {
	this.initialize();

	// text
	//this.text_3 = new cjs.Text("ID_txt01", "bold 11px Arial");
	this.text_3 = new DOMObject({type:"TEXT" , align:"center" ,compId:"ID_txt01", width:"75",  size:"11", expand:"up+down",class:"lightGreenBg"}); 


	this.addChild(this.text_3);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,46.9,16.6);


(lib.LAN_header = function() {
	this.initialize();

	// text
	//this.text_4 = new cjs.Text("ID_txt02", "bold 11px Arial");
	this.text_4 = new DOMObject({type:"TEXT" , align:"center" ,compId:"ID_txt02", width:"75",  size:"11", expand:"up+down",class:"lightGreenBg"}); 


	this.addChild(this.text_4);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,46.9,16.6);


(lib.animation01 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{},true);

	// ID_txt01a
	this.instance = new lib.txt01a();
	this.instance.setTransform(80,284.3);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({alpha:1},8).wait(34).to({y:79.3},42).wait(87).to({x:313},38).wait(1));

	// ID_txt04
	this.instance_1 = new lib.WAN_Header();
	this.instance_1.setTransform(5,79.3);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(134).to({alpha:1},17).wait(25).to({x:238},38).wait(1));

	// ID_txt02
	this.instance_2 = new lib.LAN_header();
	this.instance_2.setTransform(5,284.3);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(5).to({alpha:1},8).wait(34).to({y:79.3},42).wait(15).to({alpha:0},15).wait(96));

	// ID_txt03
	this.instance_3 = new lib.WAN_Trailer();
	this.instance_3.setTransform(155,79.3);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(134).to({alpha:1},17).wait(25).to({x:388},38).wait(1));

	// ID_txt01
	this.instance_4 = new lib.LAN_trailer();
	this.instance_4.setTransform(155,284.3);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(5).to({alpha:1},8).wait(34).to({y:79.3},42).wait(15).to({alpha:0},15).wait(96));

	// lazy text
	//this.text_5 = new cjs.Text("ID_txt07", "bold 11px Arial");
	this.text_5 = new DOMObject({type:"TEXT" , align:"left" ,compId:"ID_txt07", width:"202",  size:"11", expand:"up+down",class:"orangeCallOut"}); 

	this.text_5.setTransform(220,210);

	//this.text_6 = new cjs.Text("ID_txt05", "bold 11px Arial");
	this.text_6 = new DOMObject({type:"TEXT" , align:"center" ,compId:"ID_txt05", width:"150",  size:"11", expand:"down"}); 

	this.text_6.setTransform(165,102);

	//this.text_7 = new cjs.Text("ID_txt06", "bold 11px Arial");
	this.text_7 = new DOMObject({type:"TEXT" , align:"right" ,compId:"ID_txt06", width:"60",  size:"11", expand:"up+down"}); 
	this.text_7.setTransform(50,180.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_7},{t:this.text_6},{t:this.text_5}]}).wait(215));

	// bg
	this.instance_5 = new lib.bg();
	this.instance_5.setTransform(0,0,0.72,0.719);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5}]}).wait(215));

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