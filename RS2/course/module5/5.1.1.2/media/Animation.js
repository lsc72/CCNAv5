(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.classesmediaMediaObject = function() {
	this.initialize();

	// main
	this.instance = new lib.Main();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.2,-1.8,469.8,400);


// symbols:
(lib.Arrow = function() {
	this.initialize(img.Arrow);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,60,68);


(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,653,556);


(lib.Bitmap1 = function() {
	this.initialize(img.Bitmap1);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,63,56);


(lib.computer = function() {
	this.initialize(img.computer);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,143,119);


(lib.envelope_closed_static = function() {
	this.initialize(img.envelope_closed_static);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,138,88);


(lib.Tween2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Bitmap1();
	this.instance.setTransform(-31.4,-27.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-31.4,-27.9,63,56);


(lib.Tween1 = function() {
	this.initialize();

	// Layer 1
	this.instance_1 = new lib.Bitmap1();
	this.instance_1.setTransform(-19.1,-16.9,0.608,0.607);

	this.addChild(this.instance_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-19.1,-16.9,38.3,34);


(lib.envelopeclosedstatic = function() {
	this.initialize();

	this.instance_2 = new DOMObject({type:"IMAGE",image:img.envelope_closed_static});
	this.instance_2.setTransform(-30,-26.1,0.595,0.595);

	this.addChild(this.instance_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-41,-26.1,82.1,52.4);


(lib.callout = function() {
	this.initialize();

	// Layer 3
  	this.text = new DOMObject({type:"TEXT",compId:"ID_bubble05",width:"95",expand:"down",align:"center",class:"orangeCallOut"});

	this.text.setTransform(-25,6.3);
	// Layer 2
	this.instance_3 = new lib.Arrow();
	this.instance_3.setTransform(-20,-35);

	this.addChild(this.instance_3,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-29.4,-29.9,60,68);


(lib.computer_1 = function() {
	this.initialize();

	// pc png
	this.instance_4 = new lib.computer();
	this.instance_4.setTransform(0,-73.9,0.626,0.624);

	this.addChild(this.instance_4);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-73.9,89.5,74.2);


(lib.frame03 = function() {
	this.initialize();

	// Layer 3
	//this.text = new cjs.Text("ID_frame03_c_up+do_72", "11px Courier New", "#393536");
 	this.text = new DOMObject({type:"TEXT",compId:"ID_frame03",width:"80",expand:"up+down",align:"center",color:"#652c8a",size:"9"});

	this.text.setTransform(12,0);
//this.text.setTransform(24,0);
	// Layer 1
	this.instance_5 = new lib.envelopeclosedstatic();
	this.instance_5.setTransform(49.9,8.7,0.913,0.913,0,0,0,1.6,0.1);

	this.addChild(this.instance_5,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(8.7,-15.3,142.8,47.8);


(lib.frame02 = function() {
	this.initialize();

	// Layer 3
	//this.text_1 = new cjs.Text("ID_frame02_c_up+do_72", "11px Courier New", "#393536");
	this.text_1 = new DOMObject({type:"TEXT",compId:"ID_frame02",width:"72",expand:"up+down",align:"center",color:"#652c8a",size:"9"});

	this.text_1.setTransform(11.5,3);

	// Layer 1
	this.instance_6 = new lib.envelopeclosedstatic();
	this.instance_6.setTransform(49.9,8.9,0.913,0.913,0,0,0,1.6,0);

	this.addChild(this.instance_6,this.text_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(10.8,-15,142.8,47.8);


(lib.frame01 = function() {
	this.initialize();

	// Layer 3
	//this.text_2 = new cjs.Text("ID_frame01_c_up+do_72", "11px Courier New", "#393536");
	this.text_2 = new DOMObject({type:"TEXT",compId:"ID_frame01",width:"72",expand:"up+down",align:"center",color:"#652c8a",size:"9"});

	this.text_2.setTransform(-152,-20.3);

	// Layer 1
	this.instance_7 = new lib.envelopeclosedstatic();
	this.instance_7.setTransform(-114.9,-11.6,0.913,0.913,0,0,0,1.3,0.3);

	this.addChild(this.instance_7,this.text_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-159.2,-35.8,142.8,47.8);


(lib.Anim = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{},true);

	// broadcast3
	this.frame03 = new lib.frame03();
	this.frame03.setTransform(189.5,312.1,1,1,0,0,0,188,188);
	this.frame03.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.frame03).wait(397).to({alpha:1},10).to({x:71.7,y:396.7},57).to({alpha:0},10).wait(210).to({y:397.7},0).to({alpha:1},10).to({x:189.3,y:311.8},57).to({alpha:0},10).wait(415));

	// broadcast2
	this.frame02 = new lib.frame02();
	this.frame02.setTransform(-114.7,209.5);
	this.frame02.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.frame02).wait(111).to({x:-115.1,alpha:1},10).to({x:1,y:124.1},57).to({alpha:0},10).wait(784).to({x:1.5},0).to({alpha:1},10).to({x:-115.3,y:210.1},57).to({alpha:0},10).wait(127));

	// broadcast
	this.frame01 = new lib.frame01();
	this.frame01.setTransform(-213.8,304.7,1,1,0,0,0,-150.4,-19.9);
	this.frame01.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.frame01).wait(24).to({alpha:1},10).to({x:-101.2,y:210.6},57).to({alpha:0},10).wait(97).to({x:15.2,y:125.1},0).to({alpha:1},10).to({x:97.9,y:49.3},57).to({x:98.9,alpha:0},10).wait(35).to({y:48.3,alpha:1},10).to({x:14.9,y:125.6},57).to({alpha:0},10).wait(97).to({x:-101.2,y:209.6},0).to({alpha:1},10).to({x:13.5,y:306.7},57).to({alpha:0},10).wait(36).to({x:12.5,y:307.7},0).to({alpha:1},10).to({x:-100.8,y:211.2},57).to({alpha:0},10).wait(98).to({x:15.2,y:125.4},0).to({alpha:1},10).to({x:100.1,y:49.9},57).to({alpha:0},10).wait(33).to({x:98.9,y:48.9},0).to({alpha:1},10).to({x:14.2,y:125.5},57).to({alpha:0},10).wait(103).to({x:-101.5,y:209.6},0).to({alpha:1},10).to({x:-213.8,y:307.7},57).to({alpha:0},10).wait(37));

	// text bubbles
	this.text_3 = new DOMObject({type:"TEXT",compId:"ID_bubble04",width:"138",expand:"down",align:"center",class:"grayCallOut"});
	this.text_3.setTransform(100,130);

	//this.text_4 = new cjs.Text("ID_bubble01_c_up_122", "11px Arial", "#393536");
	this.text_4 = new DOMObject({type:"TEXT",compId:"ID_bubble01",width:"122",expand:"up",align:"center",color:"#652c8a"});

	this.text_4.setTransform(-120,113);

	//this.text_5 = new cjs.Text("ID_bubble02_r_d_71", "11px Arial", "#393536");
	this.text_5 = new DOMObject({type:"TEXT",compId:"ID_bubble02",width:"71",expand:"down",align:"right",color:"#652c8a"});

	this.text_5.setTransform(-204,172);

	//this.text_6 = new cjs.Text("ID_bubble03_l_d_74", "11px Arial", "#393536");
		this.text_6 = new DOMObject({type:"TEXT",compId:"ID_bubble03",width:"74",expand:"down",align:"left",color:"#652c8a"});


	this.text_6.setTransform(10,172);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_6},{t:this.text_5},{t:this.text_4},{t:this.text_3}]}).wait(1176));

	// callout
	this.callOut01 = new lib.callout();
	this.callOut01.setTransform(208.1,402.3,1,1,0,0,0,188,188);
	this.callOut01.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.callOut01).wait(111).to({alpha:1},10).wait(57).to({alpha:0},10).wait(209).to({alpha:1},10).wait(57).to({alpha:0},10).wait(210).to({alpha:1},10).wait(57).to({alpha:0},10).wait(211).to({alpha:1},10).wait(57).to({alpha:0},10).wait(127));

	// pc labels
	this.text_7 = new cjs.Text("PC3", "bold 11px Arial", "#FFFFFF");
	this.text_7.textAlign = "center";
	this.text_7.lineHeight = 13;
	this.text_7.setTransform(46,305);

	this.text_8 = new cjs.Text("PC2", "bold 11px Arial", "#FFFFFF");
	this.text_8.textAlign = "center";
	this.text_8.lineHeight = 13;
	this.text_8.setTransform(-71,305);

	this.text_9 = new cjs.Text("PC1", "bold 11px Arial", "#FFFFFF");
	this.text_9.textAlign = "center";
	this.text_9.lineHeight = 13;
	this.text_9.setTransform(-181,305);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_9},{t:this.text_8},{t:this.text_7}]}).wait(1176));

	// symbols
	this.instance_8 = new lib.computer_1();
	this.instance_8.setTransform(-82.5,333.8,0.5,0.5,0,0,0,16.7,-0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8}]}).wait(1176));

	// PC1
	this.instance_9 = new lib.computer_1();
	this.instance_9.setTransform(-192,333.8,0.5,0.5,0,0,0,16.7,-0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9}]}).wait(1176));
	//this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1140).to({scaleX:0.59,scaleY:0.59,alpha:1},0).wait(12).to({scaleX:1,scaleY:1},0).wait(12).to({startPosition:0},0).wait(11).to({scaleX:0.59,scaleY:0.59},0).wait(1));

		// pc1 glow effect
	this.instance_100 = new lib.Tween2("synched",0);
	this.instance_100.setTransform(-176,319);
	this.instance_100.alpha = 0;
	this.timeline.addTween(cjs.Tween.get(this.instance_100).wait(1140).to({scaleX:0.45,scaleY:0.45,alpha:1},0).wait(12).to({scaleX:1,scaleY:1},0).wait(12).to({startPosition:0},0).wait(11).to({scaleX:0.45,scaleY:0.45},0).wait(1));


	// PC3
	this.instance_10 = new lib.computer_1();
	this.instance_10.setTransform(34.9,333.8,0.5,0.5,0,0,0,16.7,-0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10}]}).wait(1176));

	// pc3 glow effect

	this.instance_120 = new lib.Tween1("synched",0);
	this.instance_120.setTransform(48.2,317);
	this.instance_120.alpha=0;
	this.instance_130 = new lib.Tween2("synched",0);
	this.instance_130.setTransform(50,317,0.59,0.59);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_120}]}).to({state:[{t:this.instance_130,p:{scaleX:0.45,scaleY:0.45}}]},561).to({state:[{t:this.instance_130,p:{scaleX:1,scaleY:1}}]},12).to({state:[{t:this.instance_130,p:{scaleX:1,scaleY:1}}]},11).to({state:[{t:this.instance_130,p:{scaleX:0.45,scaleY:0.45}}]},13).wait(579));


	// more static text
	this.text_10 = new cjs.Text("172.17.10.1/24", "11px Arial", "#393536");
	this.text_10.textAlign = "center";
	this.text_10.lineHeight = 13;
	this.text_10.setTransform(72.7,46.5);

	this.text_11 = new cjs.Text("G0/0", "11px Arial", "#393536");
	this.text_11.textAlign = "center";
	this.text_11.lineHeight = 13;
	this.text_11.setTransform(98.1,60.5);

	this.text_12 = new cjs.Text("G0/1", "11px Arial", "#393536");
	this.text_12.textAlign = "center";
	this.text_12.lineHeight = 13;
	this.text_12.setTransform(143,75.6);

	this.text_13 = new cjs.Text("172.17.30.1/24", "11px Arial", "#393536");
	this.text_13.textAlign = "center";
	this.text_13.lineHeight = 13;
	this.text_13.setTransform(190,65.7);

	this.text_14 = new cjs.Text("F0/1", "11px Arial", "#393536");
	this.text_14.textAlign = "center";
	this.text_14.lineHeight = 13;
	this.text_14.setTransform(-46,188.8);
	this.text_14.shadow = new cjs.Shadow("rgba(255,255,255,1)",0,0,5);

	this.text_15 = new cjs.Text("F0/2", "11px Arial", "#393536");
	this.text_15.textAlign = "center";
	this.text_15.lineHeight = 13;
	this.text_15.setTransform(-86.2,188.5);
	this.text_15.shadow = new cjs.Shadow("rgba(255,255,255,1)",0,0,5);

	this.text_16 = new cjs.Text("F0/1", "11px Arial", "#393536");
	this.text_16.textAlign = "center";
	this.text_16.lineHeight = 13;
	this.text_16.setTransform(-184.9,146.6);

	this.text_17 = new cjs.Text("F0/1", "11px Arial", "#393536");
	this.text_17.textAlign = "center";
	this.text_17.lineHeight = 13;
	this.text_17.setTransform(52,146.6);

	this.text_18 = new cjs.Text("F0/2", "11px Arial", "#393536");
	this.text_18.textAlign = "center";
	this.text_18.lineHeight = 13;
	this.text_18.setTransform(-137.2,114);

	this.text_19 = new cjs.Text("F0/2", "11px Arial", "#393536");
	this.text_19.textAlign = "center";
	this.text_19.lineHeight = 13;
	this.text_19.setTransform(17.5,114);

	this.text_20 = new cjs.Text("F0/4", "11px Arial", "#393536");
	this.text_20.textAlign = "center";
	this.text_20.lineHeight = 13;
	this.text_20.setTransform(94,113.8);

	this.text_21 = new cjs.Text("F0/3", "11px Arial", "#393536");
	this.text_21.textAlign = "center";
	this.text_21.lineHeight = 13;
	this.text_21.setTransform(45.6,101.7);

	this.text_22 = new cjs.Text("172.17.20.22", "11px Arial", "#393536");
	this.text_22.textAlign = "center";
	this.text_22.lineHeight = 13;
	this.text_22.setTransform(-73.6,338);

	this.text_23 = new cjs.Text("F0/11", "11px Arial", "#393536");
	this.text_23.textAlign = "center";
	this.text_23.lineHeight = 13;
	this.text_23.setTransform(-108.9,223);

    this.text_24 = new cjs.Text("F0/18", "11px Arial", "#393536");
	this.text_24.textAlign = "center";
	this.text_24.lineHeight = 13;
	this.text_24.setTransform(-66,240);
	//this.text_24.shadow = new cjs.Shadow("rgba(255,255,255,1)",0,0,5);

	this.text_25 = new cjs.Text("172.17.10.21", "11px Arial", "#393536");
	this.text_25.textAlign = "center";
	this.text_25.lineHeight = 13;
	this.text_25.setTransform(-185.4,338);

	this.text_26 = new cjs.Text("F0/23", "11px Arial", "#393536");
	this.text_26.textAlign = "center";
	this.text_26.lineHeight = 13;
	this.text_26.setTransform(-24,223);

	this.text_27 = new cjs.Text("172.17.30.23", "11px Arial", "#393536");
	this.text_27.textAlign = "center";
	this.text_27.lineHeight = 13;
	this.text_27.setTransform(44.2,338);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_27},{t:this.text_26},{t:this.text_25},{t:this.text_24},{t:this.text_23},{t:this.text_22},{t:this.text_21},{t:this.text_20},{t:this.text_19},{t:this.text_18},{t:this.text_17},{t:this.text_16},{t:this.text_15},{t:this.text_14},{t:this.text_13},{t:this.text_12},{t:this.text_11},{t:this.text_10}]}).wait(1176));

	// bg
	this.instance_11 = new lib.bg();
	this.instance_11.setTransform(-224.1,-5,0.719,0.719);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11}]}).wait(1176));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-224.1,-5,469.8,400);


(lib.Main = function() {
	this.initialize();

	// Animation
	this.Anim = new lib.Anim();
	this.Anim.setTransform(258.5,212.8,1,1,0,0,0,34.1,209.6);

	this.addChild(this.Anim);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.2,-1.8,469.8,400);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;