(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.classesmediaMediaObject = function() {
	this.initialize();

	// main
	this.instance = new lib.Main();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(4.3,61.3,445,256.3);


// symbols:
(lib.computer = function() {
	this.initialize(img.computer);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,143,119);


(lib.computer_laptop = function() {
	this.initialize(img.computer_laptop);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,172,115);


(lib.envelope_closed_static = function() {
	this.initialize(img.envelope_closed_static);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,123,79);


(lib.envelopeblue = function() {
	this.initialize(img.envelopeblue);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,123,79);


(lib.envelopegreen = function() {
	this.initialize(img.envelopegreen);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,123,79);


(lib.envelopeorange = function() {
	this.initialize(img.envelopeorange);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,123,79);


(lib.Router = function() {
	this.initialize(img.Router);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,148,107);


(lib.Router_Wireless = function() {
	this.initialize(img.Router_Wireless);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,148,160);


(lib.satellite = function() {
	this.initialize(img.satellite);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,321,132);


(lib.satellite_dish = function() {
	this.initialize(img.satellite_dish);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,176,107);


(lib.Untitled2 = function() {
	this.initialize(img.Untitled2);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,313,114);


(lib.wireless_signal = function() {
	this.initialize(img.wireless_signal);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,189,24);


(lib.Tween2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Untitled2();
	this.instance.setTransform(-104,-28.6,0.665,0.503);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-104,-28.6,208.2,57.3);


(lib.label2 = function() {
	this.initialize();

	// Layer 1
	this.text = new DOMObject({type:"TEXT" , align:"center" ,compId:"ID_s2_txt06", width:"80", expand:"up+down",size:10});
	this.text.setTransform(366,236.2);

	this.text_1 = new DOMObject({type:"TEXT" , align:"center" ,compId:"ID_s2_txt05", width:"60", expand:"down",size:10});
	this.text_1.setTransform(0,236.2);

	this.text_2 = new DOMObject({type:"TEXT" , align:"left" ,compId:"ID_s2_txt03", width:"300", expand:"down",size:10});
	this.text_2.setTransform(88,168.2);

	this.text_3 = new DOMObject({type:"TEXT" , align:"left" ,compId:"ID_s2_txt02", width:"160", expand:"up+down",size:10});
	this.text_3.setTransform(250,6.2);

	this.text_4 = new DOMObject({type:"TEXT" , align:"left" ,compId:"ID_s2_txt01", width:"160", expand:"down",size:10});
	this.text_4.setTransform(16,-3.8);

	this.addChild(this.text_4,this.text_3,this.text_2,this.text_1,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(14,-3.8,414.8,256.3);


(lib.label1 = function() {
	this.initialize();

	// Layer 1
	this.text_5 = new DOMObject({type:"TEXT" , align:"left" ,compId:"ID_s1_txt01", width:"120", expand:"down",size:10});
	this.text_5.setTransform(4,5);

	this.addChild(this.text_5);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(4,3.2,62.8,16.2);


(lib.label = function() {
	this.initialize();

	// Layer 1
		this.text_6 = new DOMObject({type:"TEXT" , align:"left" ,compId:"ID_s1_FCS", width:"50", expand:"down",size:10});
	this.text_6.setTransform(385,2);

	this.text_7 = new DOMObject({type:"TEXT" , align:"left" ,compId:"ID_s1_data", width:"40", expand:"down",size:10});
    this.text_7.setTransform(340,2);

	this.text_8 = new DOMObject({type:"TEXT" , align:"left" ,compId:"ID_s1_destIP", width:"60", expand:"down",size:10});
	this.text_8.setTransform(275,2);

	this.text_9 = new DOMObject({type:"TEXT" , align:"left" ,compId:"ID_s1_sourceIP", width:"64", expand:"down",size:10});
	this.text_9.setTransform(210,2);

	this.text_10 = new DOMObject({type:"TEXT" , align:"left" ,compId:"ID_s1_sourceMAC", width:"80", expand:"down",size:10});
	this.text_10.setTransform(105,2);

	this.text_11 = new DOMObject({type:"TEXT" , align:"left" ,compId:"ID_s1_destMAC", width:"80", expand:"down",size:10});
	this.text_11.setTransform(0,2);

	this.addChild(this.text_11,this.text_10,this.text_9,this.text_8,this.text_7,this.text_6);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-0.8,444,17.1);


(lib.ID_s1_txt02 = function() {
	this.initialize();

	// Layer 1
	this.text_12 = new DOMObject({type:"TEXT" , align:"left" ,compId:"ID_s1_txt02", width:"120", expand:"down",size:10});
	this.text_12.setTransform(5,5);

	this.addChild(this.text_12);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(5,0.2,62.8,16.2);


(lib.box_yellow = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFADD").s("#393536").ss(2,2,1).dr(-53.5,-32,107,64);
	this.shape.setTransform(53.5,32);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,107,64);


(lib.box_green = function() {
	this.initialize();

	// box
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DBECDA").s("#393536").ss(2,2,1).dr(-53.5,-32,107,64);
	this.shape_1.setTransform(53.5,32);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,107,64);


(lib.Colors = function() {
	this.initialize();

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FF2222","#F07B4A","#FFFF00","#29BC18","#1B1B87"],[0,0.173,0.4,0.769,1],-53,2.8,53.2,2.8).s().p("AITA3IwlAAIAAhtIQlAAIAABt").cp();
	this.shape_2.setTransform(53.2,5.6);

	this.addChild(this.shape_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,106.4,11.1);


(lib.frame = function() {
	this.initialize();

	// TEXT
	this.text_13 = new DOMObject({type:"TEXT" , align:"center" ,compId:"ID_s2_txt04", width:"39", expand:"up+down",size:10});
	this.text_13.setTransform(-161,62);

	this.addChild(this.text_13);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-161.9,51.2,62.8,16.2);


(lib.envelope2 = function() {
	this.initialize();

	// inner lines
	this.instance_1 = new lib.envelopeorange();
	this.instance_1.setTransform(-39.5,-26.1,0.667,0.663);

	this.addChild(this.instance_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-39.5,-26.1,82.1,52.4);


(lib.envelope1 = function() {
	this.initialize();

	// inner lines
	this.instance_2 = new lib.envelopegreen();
	this.instance_2.setTransform(-39.5,-26.1,0.667,0.663);

	this.addChild(this.instance_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-39.5,-26.1,82.1,52.4);


(lib.envelope = function() {
	this.initialize();

	// inner lines
	this.instance_3 = new lib.envelopeblue();
	this.instance_3.setTransform(-39.5,-26.1,0.667,0.663);

	this.addChild(this.instance_3);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-39.5,-26.1,82.1,52.4);


(lib.wireless_signal_1 = function() {
	this.initialize();

	// Layer 1
	this.instance_4 = new lib.wireless_signal();
	this.instance_4.setTransform(-46,-4.8,0.488,0.41);

	this.addChild(this.instance_4);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-46,-4.8,92.3,9.9);


(lib.satellitedish = function() {
	this.initialize();

	// shading
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(0,0,0,0.153)","rgba(255,255,255,0.102)","rgba(0,0,0,0.102)","rgba(0,0,0,0.2)","rgba(0,0,0,0.4)"],[0,0.431,0.651,0.753,1],147.8,-41.1,139.9,-32.9).s().p("AgEj5IBQDTQhigChVgIIiGiwQBpgSCEgHIAAAAADyBwIAABrQhOA1hNgmQgMgGgNgJIAAhpQAkACAmAAQA3AAAzgEIAAAA").cp();
	this.shape_3.setTransform(-13.6,8.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["rgba(0,0,0,0.153)","rgba(255,255,255,0.102)","rgba(0,0,0,0.102)","rgba(0,0,0,0.2)","rgba(0,0,0,0.4)"],[0,0.431,0.651,0.753,1],137.4,-81.5,153.9,-36.8).s().p("Ag7BqIhSjQQBCgEBJAAQABAAABAAIgFDVQgcAAgagBIAAAAAl6hOICGCuQhRgHhFgOQgdgFgXgGQgYgGgSgGQgsgPgQgRQgBgIAAgHIABAAIgBgCQAAgLADgMQAQgRAqgNQAlgOA5gLQAGgBAHgBQACgBABAAIAAAAAALhqQDcABCdAeQAPADANADQB5AbAMAjQAAABABACQAAAEAAADQAAACAAACQgMAoiWAcQhoAUiDAIQg/ADhGABIgJjV").cp();
	this.shape_4.setTransform(0,-5.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["rgba(0,0,0,0.353)","rgba(0,0,0,0.153)","rgba(255,255,255,0.153)","rgba(255,255,255,0.4)","rgba(0,0,0,0.153)","rgba(0,0,0,0.353)","rgba(0,0,0,0.502)"],[0,0.157,0.263,0.463,0.624,0.816,1],99.3,-46.9,191.9,-46.9).s().p("AAKhzIAJDUQBGAABAgEQCDgHBogUQCVgdAMgmQgBAdgNAcQgjBEhwA1Qh6A6ihAOQg0AEg1AAQglAAgkgCQi1gLiGg/Qg/gdgmgiQg1gvgGg4QAQARArAOQATAHAXAGQAYAFAdAGQBEANBRAIQBWAIBjACQAbAAAcAAIAFjUIAAhcQgKgBgJgFQgKgHAAgJQAAgKAKgGQAJgGAKAAQACgBABAAIABAAQABAAACABQAMAAAIAGQAKAGAAAKQAAAJgKAHQgJAGgMAAIAEBc").cp();
	this.shape_5.setTransform(0.1,-4.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,0,0,0.502)").s().p("AABAFIgBgBIAAABIAAgBIAAgIIABAJ").cp();
	this.shape_6.setTransform(0.4,-33.3);

	// base
	this.instance_5 = new lib.satellite_dish();
	this.instance_5.setTransform(-54.9,-32.7,0.625,0.623);

	this.addChild(this.instance_5,this.shape_6,this.shape_5,this.shape_4,this.shape_3);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-54.9,-33.8,110,67.8);


(lib.RouterWireless = function() {
	this.initialize();

	// details
	this.instance_6 = new lib.Router_Wireless();
	this.instance_6.setTransform(0,-99.8,0.626,0.624);

	this.addChild(this.instance_6);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-99.8,92.7,99.9);


(lib.Router_1 = function() {
	this.initialize();

	// <>><
	this.instance_7 = new lib.Router();
	this.instance_7.setTransform(0,-66.7,0.626,0.623);

	this.addChild(this.instance_7);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-66.7,92.7,66.7);


(lib.frames_group1 = function() {
	this.initialize();

	// Layer 1
	this.instance_8 = new lib.box_green();
	this.instance_8.setTransform(105.4,0.5,0.972,1,0,0,0,1.5,0.5);

	this.instance_9 = new lib.box_green();
	this.instance_9.setTransform(1.2,0.5,0.972,1,0,0,0,1.2,0.5);

	this.addChild(this.instance_9,this.instance_8);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,207.9,64);


(lib.animation01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// ID_txt02
	this.instance_10 = new lib.ID_s1_txt02();
	this.instance_10.setTransform(272.4,77.4,1,1,0,0,0,65.9,8.5);
	this.instance_10.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(137).to({alpha:1},0).wait(86).to({alpha:0},0).wait(11));

	// ID_txt01
	this.instance_11 = new lib.label1();
	this.instance_11.setTransform(102.4,77.4,1,1,0,0,0,101.8,8.5);
	this.instance_11.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(41).to({alpha:1},0).wait(96).to({alpha:0},0).wait(97));

	// stationary text
	this.instance_12 = new lib.label();
	this.instance_12.setTransform(217.5,10.5,1,1,0,0,0,215.8,8.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12}]}).wait(234));

	// Layer 4
	this.instance_13 = new lib.box_yellow();
	this.instance_13.setTransform(274.8,0.2,0.617,1,0,0,0,1.2,0.5);
	this.instance_13.alpha = 0;

	this.instance_14 = new lib.box_yellow();
	this.instance_14.setTransform(209.1,0.2,0.617,1,0,0,0,1.6,0.5);
	this.instance_14.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_14,p:{alpha:0}},{t:this.instance_13,p:{alpha:0}}]}).to({state:[{t:this.instance_14,p:{alpha:1}},{t:this.instance_13,p:{alpha:1}}]},131).wait(103));

	// Layer 5
	this.instance_15 = new lib.Tween2("synched",0);
	this.instance_15.setTransform(270.6,31.8,0.572,0.85,0,0,0,-1.8,-0.1);
	this.instance_15.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(131).to({alpha:1},0).to({regY:0,scaleX:0.7,scaleY:1.4,x:272.7,y:32},11).wait(67).to({startPosition:0},0).to({scaleX:0.51,scaleY:1.01,y:31.9},13).wait(12));

	// Layer 3
	this.instance_16 = new lib.frames_group1();
	this.instance_16.setTransform(103.6,31.7,1,1,0,0,0,102.9,32);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_16}]}).wait(234));

	// Layer 2
	this.instance_17 = new lib.Tween2("synched",0);
	this.instance_17.setTransform(103.5,31.8,0.818,1.073,0,0,0,-1.9,-0.2);
	this.instance_17.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(30).to({alpha:1},0).to({scaleX:1.08,scaleY:1.42,x:103.6,y:31.7},15).wait(68).to({startPosition:0},0).to({scaleX:0.84,scaleY:1.11,x:103.5,y:31.8},15).wait(106));

	// frames static
	this.instance_18 = new lib.box_yellow();
	this.instance_18.setTransform(274.8,0.2,0.617,1,0,0,0,1.2,0.5);

	this.instance_19 = new lib.box_yellow();
	this.instance_19.setTransform(209.1,0.2,0.617,1,0,0,0,1.6,0.5);

	this.instance_20 = new lib.box_green();
	this.instance_20.setTransform(383.1,0.2,0.492,1,0,0,0,2,0.5);

	this.instance_21 = new lib.box_yellow();
	this.instance_21.setTransform(340.6,0.2,0.396,1,0,0,0,2,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18}]}).wait(234));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.7,-0.3,445,88.6);


(lib.Vignetanimation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// colors
	this.instance_22 = new lib.Colors("single",0);
	this.instance_22.setTransform(0,5.5,0.014,1,0,0,0,0,5.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).to({scaleX:1},34).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.5,11.1);


(lib.Connectoranimation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// Layer 1
	this.instance_23 = new lib.wireless_signal_1();
	this.instance_23.setTransform(4.9,36.7,0.795,1,90);

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(2).to({y:33.3},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,9.9,73.4);


(lib.slide_1 = function() {
	this.initialize();

	// animation 1
	this.anim01 = new lib.animation01();
	this.anim01.setTransform(3.6,150);

	this.addChild(this.anim01);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(4.3,149.7,445,88.6);


(lib.animation02 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{},true);

	// Text
	this.instance_24 = new lib.label2();
	this.instance_24.setTransform(218.2,167.7,1,1,0,0,0,218.7,122.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_24}]}).wait(411));

	// Frame
	this.instance_25 = new lib.frame();
	this.instance_25.setTransform(36.8,249.7,0.771,0.771,0,0,0,-138.1,69.1);
	this.instance_25.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(11).to({regX:-138.1,scaleX:1,scaleY:1,x:35.9,y:250.1},0).to({alpha:1},18,cjs.Ease.get(1)).wait(11).to({y:176.3},21).wait(9).to({alpha:0},7).wait(5).to({alpha:1},8).wait(17).to({x:149.5},35).wait(14).to({y:176.1},0).to({regX:-138,x:223.4,y:121},32).wait(18).to({regX:-137.9,regY:69,x:290.6,y:176.2},31).wait(16).to({regX:-138.1,x:412.9},36).wait(17).to({y:176.1},0).to({alpha:0},9).wait(6).to({alpha:1},8).wait(17).to({y:247.9},21).wait(44));

	// Packet2
	this.instance_26 = new lib.envelope2();
	this.instance_26.setTransform(411.5,175.6,0.469,0.41,0,0,0,1.4,0.1);
	this.instance_26.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(321).to({alpha:1},8).wait(17).to({y:247.5},21).wait(44));

	// Packet1
	this.instance_27 = new lib.envelope1();
	this.instance_27.setTransform(34.4,175.6,0.469,0.41,0,0,0,1.4,0.1);
	this.instance_27.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(82).to({alpha:1},8).wait(17).to({regX:1.5,x:148},35).wait(14).to({regX:1.4,x:221.9,y:120.3},32).wait(18).to({x:289.1,y:175.6},31).wait(16).to({x:411.5},36).wait(17).to({alpha:0},9).wait(96));

	// Packet
	this.instance_28 = new lib.envelope();
	this.instance_28.setTransform(34.4,249.3,0.469,0.41,0,0,0,1.4,0.1);
	this.instance_28.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(11).to({alpha:1},18,cjs.Ease.get(1)).wait(11).to({y:175.6},21).wait(9).to({alpha:0},7).wait(334));

// vignat-highlight
		this.instance_29 = new lib.Vignetanimation();
	this.instance_29.setTransform(304.7,173.1,0.843,0.771);
	this.instance_29.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(253).to({scaleX:0.05,alpha:1,mode:"single",startPosition:32},0).to({scaleX:0.9},36).wait(122));


	// vignet
	this.instance_30 = new lib.Vignetanimation("synched",0,false);
	this.instance_30.setTransform(95,177.4,0.81,0.771,0,0,0,53.1,5.6);
	this.instance_30.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(109).to({alpha:1},0).wait(302));

	// Graphics
	this.instance_31 = new lib.satellitedish();
	this.instance_31.setTransform(288.8,168.2,0.493,0.493,0,-59.9,120,-1.5,-0.7);

	this.instance_32 = new lib.satellitedish();
	this.instance_32.setTransform(154,169.2,0.493,0.493,60,0,0,0.4,0.4);

	this.instance_33 = new lib.RouterWireless();
	this.instance_33.setTransform(411.5,172.5,0.337,0.337,0,0,0,46,-46.5);

	this.instance_34 = new lib.satellite();
	this.instance_34.setTransform(166.6,87.2,0.339,0.34);

	this.instance_35 = new lib.Router_1();
	this.instance_35.setTransform(35.2,177.4,0.337,0.337,0,0,0,46.7,-31.8);

	this.instance_36 = new lib.computer_laptop();
	this.instance_36.setTransform(379.4,240.9,0.307,0.309);

	this.instance_37 = new lib.computer();
	this.instance_37.setTransform(13,240.9,0.31,0.307);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#324B4B").ss(0.3,1,1).p("AAAAAIAAAA");
	this.shape_7.setTransform(212.7,108.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["rgba(0,0,0,0.302)","rgba(255,255,255,0.102)","rgba(0,0,0,0.102)","rgba(0,0,0,0.2)","rgba(0,0,0,0.4)"],[0,0.435,0.651,0.753,1],-7,0,7.2,0).s().p("AhGAAQAAAAAAAAQABgMAUgJQAVgKAcAAQAdAAAVAKQAOAGAFAIQACADAAAEIAAAAQgBANgUAJQgVAKgdAAQgcAAgVgKQgKgEgFgFQgGgGAAgHIAAAA").cp();
	this.shape_8.setTransform(222.4,92.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["rgba(0,0,0,0.353)","rgba(0,0,0,0.153)","rgba(255,255,255,0.153)","rgba(255,255,255,0.4)","rgba(0,0,0,0.153)","rgba(0,0,0,0.353)","rgba(0,0,0,0.502)"],[0,0.157,0.263,0.463,0.624,0.816,1],-7.9,0,8.1,0).s().p("AhPgBQAegIAigKQAFgBAGgBIBUAOIgBAcIgEABIiagX").cp();
	this.shape_9.setTransform(247.3,104.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["rgba(0,0,0,0.353)","rgba(0,0,0,0.153)","rgba(255,255,255,0.153)","rgba(255,255,255,0.4)","rgba(0,0,0,0.153)","rgba(0,0,0,0.353)","rgba(0,0,0,0.502)"],[0,0.157,0.263,0.463,0.624,0.816,1],-23.5,0,23.7,0).s().p("AjrgSIDMAnIELhGIAAAIIAAAVIgTAFIj4BBIjMgpIAAAAIAAgb").cp();
	this.shape_10.setTransform(190.2,120.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.rf(["rgba(0,0,0,0.502)","rgba(0,0,0,0.153)","rgba(255,255,255,0.153)","rgba(255,255,255,0.4)","rgba(0,0,0,0.153)","rgba(0,0,0,0.353)","rgba(0,0,0,0.502)"],[0,0.157,0.267,0.463,0.627,0.82,1],0,0,0,0,0,23.8).s().p("ADsgNIkLBGIjMgpIAAgBIAAAAIEOhHIAwAJQgkAKgOAYQAzgBAdgIQAUgGATgFIABAAIA6AMIAZAFIAAAD").cp();
	this.shape_11.setTransform(190.2,116.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["rgba(0,0,0,0.153)","rgba(255,255,255,0.102)","rgba(0,0,0,0.102)","rgba(0,0,0,0.2)","rgba(0,0,0,0.4)"],[0,0.431,0.651,0.753,1],-96.1,13.4,-92.2,25.3).s().p("AAvgBQgGABgFAAQgiAJgcAIQgFACgDABQgbAGgXAGQAAAAgBAAIAAAAIAAggIABAAIAkgIQAGgBAHgCIABAAQAAAAABAAQAAAAABgBQADgBADAAQARgFAPgFQAdgIAzAAQgLAUgcAKIAAAA").cp();
	this.shape_12.setTransform(241.9,102);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["rgba(0,0,0,0.353)","rgba(0,0,0,0.153)","rgba(255,255,255,0.153)","rgba(255,255,255,0.4)","rgba(0,0,0,0.153)","rgba(0,0,0,0.353)","rgba(0,0,0,0.502)"],[0,0.157,0.263,0.463,0.624,0.816,1],-2.6,0,2.7,0).s().p("AgZgLIA0AJIgBACQgBAAAAAAQgBAAgBAAIAAAAQgHAAgGACIgiAKIgBAAIAAgX").cp();
	this.shape_13.setTransform(236,100.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(193,19,30,0.502)").s().p("AgBAAIAAAAIADAAQgCAAgBAAIAAAA").cp();
	this.shape_14.setTransform(238.9,100.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.rf(["rgba(0,0,0,0.502)","rgba(0,0,0,0.153)","rgba(255,255,255,0.153)","rgba(255,255,255,0.4)","rgba(0,0,0,0.153)","rgba(0,0,0,0.353)","rgba(0,0,0,0.502)"],[0,0.157,0.267,0.463,0.627,0.82,1],-0.8,0.5,0,-0.8,0.5,22.2).s().p("ADSgWIjJBNIhUgOQAbgLAMgUQg0ABgcAIQgSAFgQAFIgFgBIg2gJIAAgFIABgBIDfhDIDDAg").cp();
	this.shape_15.setTransform(254.4,97.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["rgba(0,0,0,0.353)","rgba(0,0,0,0.153)","rgba(255,255,255,0.153)","rgba(255,255,255,0.4)","rgba(0,0,0,0.153)","rgba(0,0,0,0.353)","rgba(0,0,0,0.502)"],[0,0.157,0.263,0.463,0.624,0.816,1],-10,0,10.2,0).s().p("AhjAYIDHhNIABAeIjJBNIABge").cp();
	this.shape_16.setTransform(265.4,100.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["rgba(0,0,0,0.353)","rgba(0,0,0,0.153)","rgba(255,255,255,0.153)","rgba(255,255,255,0.4)","rgba(0,0,0,0.153)","rgba(0,0,0,0.353)","rgba(0,0,0,0.502)"],[0,0.157,0.263,0.463,0.624,0.816,1],-10.9,-4.2,11,-4.2).s().p("ABuAhIjCAAIAAgIIAAgDIgZgFQAAgIAAgIQAAgCAAgDQAAgCAAgDIANgDQAPgEAOgEQAAgBABAAIABAAQAEgBADgDQAEgDABgEQBQAABTAAIAABB").cp();
	this.shape_17.setTransform(222.4,112.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["rgba(0,0,0,0.353)","rgba(0,0,0,0.153)","rgba(255,255,255,0.153)","rgba(255,255,255,0.4)","rgba(0,0,0,0.153)","rgba(0,0,0,0.353)","rgba(0,0,0,0.502)"],[0,0.157,0.263,0.463,0.624,0.816,1],-10.9,-8.8,11,-8.8).s().p("AAyAuQgXAGgbAAQgeAAgagHQgLgEgKgEQgLgFgIgGQgMgLgBgNIAAgCQAAgEAAgEQAAgBAAgCQAAgHAAgFIAGgCIATgFIAAgVIDCAAIAAA3QgCATgfAOQgKAFgRAEIAAAA").cp();
	this.shape_18.setTransform(222.4,121.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["rgba(0,0,0,0.353)","rgba(0,0,0,0.153)","rgba(255,255,255,0.153)","rgba(255,255,255,0.4)","rgba(0,0,0,0.153)","rgba(0,0,0,0.353)","rgba(0,0,0,0.502)"],[0,0.157,0.263,0.463,0.624,0.816,1],-10.9,-5.7,11,-5.7).s().p("AhtgVIDZAAIAAABQABAAABAAIAAApQhTAAhQAAQAAgBAAgDQAAgGgFgFQgEgEgGAAQgBAAgBAAQgCAAgCABQgKADgLAEIgBAAQgGABgHABIAAAAQAAgPAAgSIAAAA").cp();
	this.shape_19.setTransform(222.4,107.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["rgba(0,0,0,0.353)","rgba(0,0,0,0.153)","rgba(255,255,255,0.153)","rgba(255,255,255,0.4)","rgba(0,0,0,0.153)","rgba(0,0,0,0.353)","rgba(0,0,0,0.502)"],[0,0.157,0.263,0.463,0.624,0.816,1],-10.9,-3.9,11,-3.9).s().p("ABsAjIjZAAQAAgPAAgQQAAgNAAgQQAAgEAAgFIDbAAIAAAJIgCABIAAAFIAAAXIAAAf").cp();
	this.shape_20.setTransform(222.4,101.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["rgba(0,0,0,0.353)","rgba(0,0,0,0.153)","rgba(255,255,255,0.153)","rgba(255,255,255,0.4)","rgba(0,0,0,0.153)","rgba(0,0,0,0.353)","rgba(0,0,0,0.502)"],[0,0.157,0.263,0.463,0.624,0.816,1],-10.9,3.4,11,3.4).s().p("ABuAcIjbAAQAAgcAAgcQABAKAJAJQAIAIAOAFQAhAOAsABQAtgBAggOQAfgMACgUIAAA4").cp();
	this.shape_21.setTransform(222.4,95.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["rgba(0,0,0,0.153)","rgba(255,255,255,0.102)","rgba(0,0,0,0.102)","rgba(0,0,0,0.2)","rgba(0,0,0,0.4)"],[0,0.431,0.651,0.753,1],7,-15,10.9,-3.2).s().p("AgTBJQAGgBAGgCIABAAQAJgDAKgDQACgBACAAQABAAABAAQAGAAAFAEQAEAFAAAGQAAACAAACQgBAEgDADQgEADgEABIgBAAQgBAAAAABQgOAEgNAEIgMAEIgeAIQgNADgNADQgCABgBAAIgBAAQgTAFgUAGQgdAIgzABQAOgYAkgKQAngKAigJQAegIAagHIAAAAADHhZQgCATgfAOQggAPgtAAQguAAghgPQgMgGgIgIQgJgJAAgKIAAgCQAAgBAAgBQABgTAcgOQAhgOAuAAQAtAAAgAOQAWAKAHAMQADAFABAGIAAAEAAQhbIAAAAQAAAIAHAFQAFAGAKAEQAVAJAdAAQAeAAAVgJQAUgJABgNIAAgCQAAgEgCgEQgFgIgOgGQgVgKgeABQgdgBgVAKQgUAJgCANQAAAAAAABIAAAA").cp();
	this.shape_22.setTransform(213.5,101.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["rgba(0,0,0,0.353)","rgba(0,0,0,0.153)","rgba(255,255,255,0.153)","rgba(255,255,255,0.4)","rgba(0,0,0,0.153)","rgba(0,0,0,0.353)","rgba(0,0,0,0.502)"],[0,0.157,0.263,0.463,0.624,0.816,1],-5.3,-5,5.4,-5).s().p("Ag1gdQAaAIAeAAQAbAAAYgGIAAAcQgBAMgPAIQgQAJgWAAQgVAAgPgJQgGgDgEgDQgHgGAAgIIAAgBQAAgCAAgCQAAAAAAgBQAAgMAAgMIAAAA").cp();
	this.shape_23.setTransform(222.1,129);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(255,255,255,0.2)").s().p("AAlgKIgCAAIAAAAQABgBABgBIAJgHIARAAIgBABIgHAGQgCABgBABIgPAAAAaAKIABAAIACAAIAPAAIgJAIIgDACIgPAAIgCAAIAAAAQABgBABgBIAIgGIABgCAApgBIgCABIgPAAIgCAAIgBAAQACAAABgBIAHgGIACgCIAAAAIADAAIAPAAIgKAIAA9gBIgDABIgPAAIgCAAIAAAAQABAAABgBIAIgGIACgCIAAAAIACAAIAPAAIgJAIAA4gKIgBAAIgBAAIAMgJIARAAIgBABIgIAGQgBABgCABIgPAAAASgKIgCAAIgBAAQABgBACgBIAHgGIABgBIATAAIgCABIgKAIIgPAAAA4ABIgGAEQgCACgDACIgOAAIgDAAQABgBABgBIAEgDIAGgEIAAAAIACAAIAPAAIgBABAAMgHIABgCIABAAIACAAIAPAAIgJAIQgBABgBAAIgPAAIgCAAIgBAAIAEgCIAGgFAAHAKIABAAIACAAIAPAAIgEADIgIAHIgNAAIgCAAIgBAAIAIgIIACgCAAIAJIADgCIAJgHIABAAIACAAIAPAAIgCABIgIAGQgBABgBABIgPAAIgDAAAAwAJIgBAAQADgCACgCIAHgFIABAAIABAAIAPAAIgBABIgKAIIgPAAIgCAAAAuAKIACAAIAPAAIgMAKIgPAAIgBAAIgBAAIABAAIAJgIIACgCIAAAAABEAKIAPAAIgMAKIgPAAIgCAAIgBAAQACgBABgBIAHgGIACgCIABAAIACAAAgNAAIgCAAIAAAAQABAAABgBIAHgGIACgCIAAAAIACAAIANAAIgIAIQgCABgBAAIgNAAAgQAAIACAAIAOAAIgGAFIgFAEIgPAAIgBAAIgCAAQACgBABgBIAJgHIABAAAgMAMIACgCIAAAAIADAAIAMAAIgKAKIgPAAIgCAAIAAAAIAKgIABMgKIgCAAIgBAAQADgCACgCIAHgFIASAAIgCABIgKAIIgPAAABJgJIACAAIAPAAIgJAIQgCABgBAAIgPAAIgCAAIAAAAQABAAABgBIAHgGIACgCIABAAABdgKIADgCIAJgHIARAAIgBABIgIAGQgBABgBABIgPAAIgDAAABLAUIgCAAIAAAAIADgDIAHgFIACgCIABAAIABAAIAPAAIgJAIIgDACIgPAAABfABIgLAIIgOAAIgCAAIgCAAQADgCADgCIAGgFIABAAIACAAIAPAAIgBABABlAAIgBAAIgBAAIAKgHIACgCIAAAAIACAAIAPAAIgMAJIgPAAABiAAIAAAAIADAAIAPAAIgCABIgFAEQgDACgDACIgOAAIgCAAIgBAAQADgCACgCIAHgFABwAUIgBAAQACgBABgBIAIgGIABgCIACAAIABAAIAPAAIgNAKIgOAAIgCAAACAAJIgCAAIgBAAQABgBACgBIAIgHIACAAIACAAIAOAAIgBABIgKAIIgPAAAgNgSIgGAEQgCACgDACIgPAAIgCAAIgBAAQADgCADgCIAGgFIASAAIgBABAAAgKIgCAAIAAAAIAKgJIARAAIgHAFQgCACgDACIgNAAAADAAIAPAAIgBABIgLAIIgNAAIgBAAIgBAAQABgBABgBIAIgHIAAAAIACAAAgUgKIgCAAIAAAAQADgCACgCIAHgFIAPAAIgFAFQgCACgDACIgPAAAglAAIACAAIABAAIAPAAIgGAFQgDACgCACIgPAAIgCAAIgBAAQABgBACgBIAHgGIABgBAgeAKIABAAIACAAIAPAAIgNAKIgPAAIgCAAIAAAAIAKgIIACgCAhSAUIgPAAIgDAAIAAAAIAKgIIABgCIACAAIACAAIAPAAIgMAKAhCAKIAOAAIgLAKIgQAAIgBAAIAAAAQABgBABgBIAHgGIACgCIABAAIACAAAg5AAIgCABIgLAIIgOAAIgCAAIgBAAIAHgGIAFgDIAAAAIADAAIAPAAAg3AAIACAAIAOAAIgBABIgHAGQgCABgBABIgPAAIgCAAIAAAAQABgBABgBIAIgGIABgBIABAAAg2AAIgBAAIABAAIAJgHIACgCIABAAIACAAIAPAAIgMAJIgPAAIgCAAAgiAAIgBAAQABAAACgBIAHgGIABgCIABAAIACAAIAPAAIgJAIIgCABIgPAAIgCAAAg7gKIgBAAIgBAAQADgCACgCIAHgFIARAAIgBABIgLAIIgPAAAgvAKIAPAAIgJAIQgBABgCABIgPAAIgCAAIgBAAIAKgIIACgCIABAAIACAAAh1AUIgCAAIgBAAIAKgIIACgCIABAAIACAAIAPAAIgMAKIgPAAAiJAUIgCAAIAAAAIAKgIIACgCIAAAAIACAAIAPAAIgMAKIgPAAAibAUIgCAAIgBAAIADgDIAHgFIABgCIABAAIACAAIAPAAIgMAKIgOAAAivAUIgCAAIALgKIACAAIAPAAIgIAIQgCABgBABIgPAAAiWAAIAPAAIgCABIgKAIIgPAAIgDAAIAMgJIADAAAiVAAIgDAAIAMgJIADAAIAPAAIgKAIIgCABIgPAAAiEAAIAAAAQABAAABgBIAIgGIACgCIAAAAIACAAIAPAAIgJAIIgDABIgPAAIgCAAAiIgKIgDAAIAMgJIARAAIgBABIgKAIIgPAAAhcAAIAPAAIgHAFIgFAEIgPAAIgCAAIACgCIAJgHIABAAIACAAAhbgSIgIAGQgBABgCABIgPAAIgCAAIAAAAQABgBABgBIAKgHIARAAIgBABAhhgKIgCAAIgBAAQACgBABgBIAJgHIASAAIgCABIgIAGQgBABgBABIgPAAAhQgKIAAAAQABgBACgBIAIgHIASAAIgBABIgKAIIgPAAIgDAAAhUgHIACgCIABAAIABAAIAQAAIgJAIQgBABgBAAIgPAAIgCAAIgCAAIAKgHABdAUIgBAAQABgBACgBIAHgGIACgCIABAAIABAAIAPAAIgJAIQgBABgBABIgPAAIgCAAACOgSIABgBIASAAIgBABIgGAEQgCACgDACIgOAAIgCAAIgCAAQACgBABgBIAIgGACAgHIACgCIABAAIACAAIAPAAIgKAIIgCABIgPAAIgBAAIgCAAIAKgHAB1AAIABAAIACAAIAPAAIgHAFQgCACgDACIgPAAIgCAAIAAAAQABgBABgBIAIgGIABgBACWgJIABAAIACAAIANAAIgKAJIgPAAIgDAAIAAAAIADgCIAHgFIACgCACZgKIgBAAIgBAAQABgBABgBIAIgGIACgBIAPAAIAAABIgDACQgEADgDADIgPAAABxgKIgBAAQADgCACgCIAHgFIARAAIgBABIgKAIIgPAAIgCAAABegJIAPAAIgJAIQgBABgBAAIgPAAIgCAAIgBAAIADgCIAHgFIABgCIABAAIACAAAiFAAIACAAIAPAAIgGAFQgDACgCACIgPAAIgDAAIAAAAQACgCADgCIAGgFIABAAAh5AFIAHgFIAAAAIACAAIAPAAIgBABIgKAIIgPAAIgCAAIgBAAQADgCACgCIAAAAAhKAAIAAAAIAKgHIACgCIAAAAIACAAIAPAAIgMAJIgOAAIgDAAAhUgJIgIAIIgDABIgPAAIgCAAIAAAAIAHgFIACgCIACgCIABAAIABAAIAPAA").cp();
	this.shape_24.setTransform(407.3,264.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["rgba(0,0,0,0.153)","rgba(0,0,0,0.353)"],[0,1],-3.1,1.5,3.2,0).s().p("AgfArIAAghIA/g0IAAATIAAANIg/A1").cp();
	this.shape_25.setTransform(418.3,272);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(0,0,0,0.2)").s().p("AARgSIAIAAQAPAAAHAFQAAABABABIgRAFQgFgFgNABQgNgBgOAFIgGgFQADgBACgBQAQgFAQAAIAAAAAgKgBQgCABACAAQACACAGAAQAEAAAGgCQAFAAADgBIAAAAQAAAAAAABIgBAAQgDABgHACQgFACgFAAQgGAAgCgCQgCgCADgBQABgBABAAIAAAAAAUAKIABACQgVAHgUAAQgUAAgHgHIAFgCQAHAGASAAQARAAAUgGIAAAA").cp();
	this.shape_26.setTransform(400.6,269.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["rgba(255,255,255,0.251)","rgba(0,0,0,0.102)"],[0,1],-5.9,2,-6,-3.5).s().p("AAagaICyAAIAGAAIhBA0IljAAIBFg0IAVAAICKAAQgRABgQAFQgCABgCAAIAGAGQANgFANAAQANAAAFAFIASgGQgBAAgBgBQgHgFgOgBIAAAAAAUADIgEgDQgPADgMAAQgNAAgFgDIAAAAIgNADIgEACQAHAGAUAAQATAAAWgGIgCgCAgJgJQgCABAAABQgDACACACQACADAGAAQAEAAAGgDQAGgCAEgCIAAgBQAAAAABAAQABgDgBgBQgCgCgGAAQgGAAgFACQgFABgCACIAAAA").cp();
	this.shape_27.setTransform(400.5,270.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["rgba(0,0,0,0.153)","rgba(0,0,0,0.353)"],[0,1],-2.5,0.2,2.8,-1.4).s().p("AgTAlIAAgTIgHAAIAAgLIA1grIAAAjIguAm").cp();
	this.shape_28.setTransform(423.7,265.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["rgba(255,255,255,0.251)","rgba(0,0,0,0.102)"],[0,1],1.5,1.1,1.5,-3.1).s().p("AC+gVIg3AsIlDgBIgBAAIA3gsIFEAAIAAABAAjgJIgCAAIABgBIACAAIgBABAAygJIACAAIgCACIgCAAIgHAFIAJgHAApAAIgCAAIACAAIACAAIgCAAAA0gJIACgBIACAAIgCABIgCAAAA8gCIAJgHIACAAIgBACIgCAAIgIAFABMAAIACAAIgHAFIAFgEIgBAAIABgBACNgTIgBAAIABgBIgSAAIgHAGIAGgFIgCAAIABgBIgRAAIgJAIIAHgHIgBAAIABgBIgSAAIgGAGIAFgFIgCAAIABgBIgRAAIgMAKIAAAAIAKgJIgCAAIACgBIgSAAIgJAIIAIgHIgBAAIABgBIgSAAIgBABIgCAAIgFAFIAGgGIgRAAIgKAKIAAAAIAIgJIgCAAIgDAFIAEgGIgPAAIgGAGIAFgFIgCAAIABgBIgRAAIgHAGIAFgFIgCAAIACgBIgSAAIgHAGIAGgFIgCAAIABgBIgRAAIgJAIIAHgHIgBAAIABgBIgSAAIgJAIIAIgHIgCAAIABgBIgRAAIgJAIIAHgHIgCAAIACgBIgSAAIgLAKIACAAIgBABIgDAAIgLAJIACAAIgBAAIgDAAIgLAJIACAAIgBABIgDAAIgLAKIACAAIgBABIARAAIACgBIACAAIgCABIASAAIABgBIACAAIgCABIASAAIACgBIABAAIgBABIARAAIACgBIACAAIgCABIASAAIABgBIACAAIgBABIARAAIABgBIACAAIgBABIASAAIABgBIACAAIgCABIASAAIABgBIACAAIgBABIARAAIACgBIACAAIgCABIAQAAIABgBIACAAIgBABIARAAIACgBIACAAIgCABIASAAIABgBIACAAIgBABIARAAIABgBIACAAIgBABIASAAIABgBIACAAIgCABIASAAIABgBIACAAIgBABIAQAAIAOgKIgDAAIgMAJIANgKIADAAIALgJIgCAAIABgBIADAAIALgHIgCAAIgKAHIALgJIADAAIAKgKIgCAAIABgBIgQAAIgBABIgCAAIABgBIgSAAIgBABAAfgHIgCAAIgIAFIAJgHIACAAIgBACAAlAAIACAAIgGAEIAEgDIgBAAIABgBAAeAJQgBABgBAAIgCAAIABgBIADAAAA7AAIABAAIACAAIgBAAIgCAAAA3ABIABgBIACAAIgHAFIAGgEIgCAAAArALIgBAAIgIAHIAJgIIACAAIgCABAAvAJIACAAIgBABIgCAAIABAAIAAgBAAKAJIgBABIgCAAIABgBIACAAAgGAUIAKgKIACAAIgCABIgBAAIgJAJAAYAKIACAAIgCABIgCAAIgBACIADgDABLgKIgBABIgCAAIABgBIACAAABZgJIACAAIgCACIgCAAIgHAFIAJgHABAAKIgBABIgCAAIgKAJIALgKIACAAABBAKIACgBIACAAIgCABIgCAAAAPgJIgCAAIACgBIACAAIgCABAgqgKIACAAIgBABIgCAAIABgBAgtgHIgCAAIgKAHIAMgJIABAAIgBACAgmAAIAMgJIACAAIgCACIgBAAIgLAHAgWgJIgCAAIACgBIACAAIgCABAgBgKIgBABIgCAAIABgBIACAAAgHgHIgBAAIgIAFIAJgHIACAAIgCACAgHAFIAHgFIAAAAIgHAHIAHgGIgBAAIgGAEAgeAKIACgBIABAAIgBABIgCAAAgNALIgCAAIgKAJIAMgKIACAAIgCABAgPAAIgCAAIACAAIABAAIgBAAAgIAKIgCAAIABgBIACAAIgBABAgSAAIgJAHIAIgGIgCAAIgFAEIAGgFIACAAAACAAIgBAAIABAAIACAAIgCAAAALgHIgCAAIgHAFIAJgHIACAAIgCACAATAAIgJAHIAIgGIgCAAIABgBIACAAAAXAAIgBAAIgCAAIABAAIACAAAAFgCIgEACIABAAIADgCABLARIgDADIAAAAIADgDABygKIgBABIgCAAIABgBIACAAAB0AAIAMgJIABAAIgBACIgCAAIgKAHABcASIAJgIIACAAIgCABIgBAAIgIAHABGAUIAMgKIACAAIgCABIgBAAIgLAJACGgKIgCABIgCAAIACgBIACAAACVgJIgCACIgCAAIgHAFIAJgHIACAAACXgKIACAAIgBABIgCAAIABgBACAAFIAGgFIACAAIgJAHIAHgGIgBAAIgFAEACNgCIgEACIABAAIADgCACLAAIgCAAIABAAIACAAIgBAAAB/AJIgCABIgBAAIABAAIAAgBIACAAABfgKIgCABIgCAAIABgBIADAAABrAJIgBABIgCAAIABAAIABgBIABAAAByABIABgBIABAAIgBABIgBAAABugJIgCACIgBAAIgIAFIAJgHIACAAABQAAIACAAIgCAAIgCAAIACAAABPAAIABAAIADgCIgEACABlAAIgBAAIgCAAIABAAIACAAABeABIABgBIACAAIgGAFIAFgEIgCAAABWAJIACAAIgCABIgBAAIABAAIAAgBAB1AAIACAAIABAAIgBAAIAAAAIgCAAABvASIAKgIIACAAIgCABIgCAAIgIAHAiVAKIACAAIgCABIgCAAIgHAHIAJgIAiRAJIACAAIgCABIgCAAIABAAIABgBAiNAFIAFgEIgBAAIABgBIACAAIgHAFAh7AFIAGgFIACAAIgHAFIAGgEIgCAAIgFAEAiEAAIgCAAIACAAIACAAIgBAAIgBAAAh7gJIACAAIgCACIgCAAIgHAFIAJgHAh/AKIABgBIACAAIgBABIgCAAAiOAUIAMgKIACAAIgCABIgBAAIgLAJAhfAAIgJAHIAHgGIgCAAIACgBIACAAAhqgFIgHAFIAAAAIAHgFAhyAAIABAAIACAAIgBAAIgCAAAhoAJIgCABIgCAAIABgBIADAAAh6AUIAMgKIABAAIgBABIgCAAIgKAJAibARIgEADIABgBIADgCAg4AAIACAAIACAAIgCAAIgCAAAg7ABIABgBIABAAIgBABIgBAAAg+gJIABgBIACAAIgBABIgCAAAg/gJIgCACIgBAAIgIAFIAJgHIACAAAhDAJIACAAIgCABIgCAAIABAAIABgBAhGAKIgCABIgBAAIgKAJIAMgKIABAAAgoABIABgBIACAAIgCABIgBAAAgwAJIACAAIgCABIgBAAIABAAIAAgBAgyAKIgCABIgBAAIgLAJIAMgKIACAAAhXAJIACAAIgBABIgCAAIABAAIAAgBAhUgHIgCAAIgHAFIAJgHIACAAIgCACAhQgKIACAAIgCABIgCAAIACgBAgiAAIgCAAIABAAIACAAIgBAAAgqASIAJgIIACAAIgCABIgBAAIgIAHAhjgJIgCAAIABgBIACAAIgBABAhmgJIgCACIgBAAIgIAFIAJgHIACAAAh1gKIgCABIgCAAIACgBIACAAAhLAAIABAAIACAAIgBAAIgCAAAhdAAIACAAIgCAAIgCAAIACAAAhQADIADgCIgCAAIgFAEIAGgFIACAAIgEADAhbALIgBAAIgLAJIAMgKIACAAIgCAB").cp();
	this.shape_29.setTransform(407.3,264.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.lf(["rgba(0,0,0,0.153)","rgba(0,0,0,0.353)"],[0,1],-0.2,0.3,1.8,0.7).s().p("AgZBgIAojFIALAOIgmC9IgNgG").cp();
	this.shape_30.setTransform(429.5,251.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.lf(["rgba(0,0,0,0.153)","rgba(0,0,0,0.353)"],[0,1],-1.7,0,1.8,0).s().p("AgQARIAigwIAAAeIgiAhIAAgP").cp();
	this.shape_31.setTransform(46.1,274.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#57BDB4").s().p("AAAAAIAAAAIAAAAIAAAA").cp();
	this.shape_32.setTransform(53.3,277.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#80CDC6").s().p("AAAAAIAAAAIAAAAIAAAA").cp();
	this.shape_33.setTransform(55.3,272);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#007A68").s().p("AAAAAIAAAAIAAAAIAAAA").cp();
	this.shape_34.setTransform(55.3,272);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.lf(["rgba(0,0,0,0.153)","rgba(0,0,0,0.353)"],[0,1],-0.9,0,1.1,0).s().p("AgIAaIgBABIAAgOIASgnIABABIAAAZIgSAa").cp();
	this.shape_35.setTransform(54.3,274.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.lf(["rgba(255,255,255,0.251)","rgba(0,0,0,0.153)"],[0,1],0,2.1,0,-1.9).s().p("AANAUIgtAAIAUgnIAWAAIAAAAIACAAIAAAAIAVAAIAAABIgUAm").cp();
	this.shape_36.setTransform(51.9,274);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.lf(["rgba(0,0,0,0.153)","rgba(0,0,0,0.353)"],[0,1],-3,0,3.2,0).s().p("AAOgDIgBAAIAAABIABABIAAAHIgiAjIgKAAIAAgUIARAAIAAgRIAsgsIAAAQIgRARIAAAE").cp();
	this.shape_37.setTransform(46.8,266.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.lf(["rgba(0,0,0,0.153)","rgba(0,0,0,0.353)"],[0,1],-0.8,0,1,0).s().p("AACAFIgKgJIARAAIgCACIgFAH").cp();
	this.shape_38.setTransform(45.1,264.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.lf(["rgba(255,255,255,0.251)","rgba(0,0,0,0.102)"],[0,1],0,2.5,0,-2.4).s().p("AhegYIDiAAIAKAAIAgAAIgkAxIk3AAIAkgxIArAA").cp();
	this.shape_39.setTransform(30.5,273.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("rgba(0,0,0,0.082)").s().p("AfaAtIllAAIAAghIFlAAIAAAhAddgKQgUAGgSAAQgTAAgHgGIAMgEIABAAQAEAFAOAAQAOAAAPgFIAEAEA/ZAnIE5AAIAAAQIk5AAIAAgQIAAAAA5IAAIAAABIgBAAIAAgBQgCAAgCgEQgDgEAEgCQAEgDAJgBIATgIIAAABQAFgEADgDQABgBAAgBQACgCAAgCQgBgPg2gDQgOgBgTAAIAAgBIAAgBIAAAAQATAAAPACQA3ADAAAQQAAACgBADQgBAAAAABQgDAEgHAEIgSAHQgJACgEACQgCACABACQACAEACABIAAAAA52AqIAvAAIAAAOIgvAAIAAgO").cp();
	this.shape_40.setTransform(214,271.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("rgba(0,0,0,0.251)").s().p("AcIALIgIAAIiMAAIAAgLIFGAAIAAALIiyAAAdwgpIACAAIgKAIIAAAAIAAAAIgBABIgBAAIgCAAIgOAAIABgBIAPAAQABgBABgBIAIgGAdRggIgPAAIABgBIAPAAIALgIIABAAIgHAGQgBABgCABIABAAIgCABIAAAAIgCAAAdbgYIAIgGIABAAIgHAGQgBABgBABIAAAAIgBABIgBAAIgCAAIgPAAIACgBIAPAAIACgCAdegLIgPAAQAAAAABgBIAPAAQACgCADgCIAFgEIACAAIgFAEQgDACgCACIABAAIgBABIgBAAIgBAAIgBAAAd+gVIgPAAIACgBIAPAAQABgBABgBIAIgGIABAAIgGAFIgDACIAAABIAAAAIgBABIgBAAIgCAAAdvgWIgCABIAAAAIgCAAIgPAAIABgBIAPAAIADgCIAHgGIACAAIgHAGQgCABgBABIABAAAc5gLIgCAAIgPAAIABgBIAPAAIALgIIABAAIgHAGIgDACIgBABIAAAAAc+geIgHAFIgDACIAAABIAAAAIgBABIgBAAIgCAAIgOAAIABgBIAPAAQABgBABgBIAIgGIACAAAc1gVIABgBIAPAAQABgBACgBIAHgGIACAAIgHAGQgCABgBABIABAAIgBABIgBAAIgCAAIgPAAAcwghIAPAAQACgCADgCIAFgEIACAAIgIAGQgBABgBABIAAAAIgBABIgBAAIgCAAIgPAAIACgBAccghIAPAAQADgCADgCIAFgEIACAAIgKAIIgBAAIABAAIgCABIAAAAIgCAAIgPAAIABgBAdWgUIACAAIgEADIgEADQgBABgBABIgBABIgBAAIgCAAIgPAAIACgBIAPAAQABgBABgBIAIgGAdxgLIgPAAIACgBIAOAAIALgIIACAAIgFAEQgDACgDACIABAAIgBABIgBAAIgCAAAdUgDIAIgGIACAAIgKAIIAAAAIAAAAIgBABIgSAAIACgBIAPAAIACgCAd8ghIgCABIAAAAIgCAAIgPAAIABgBIAPAAQACgBABgBIAIgGIABAAIgFAEQgDACgCACIABAAAePghIgBABIgBAAIgCAAIgPAAIACgBIAPAAIAKgIIACAAIgIAGIgCACAdogBIgCABIgRAAIABgBIAPAAIALgIIABAAIgHAGQgCABgBABIABAAAd9gBIAPAAIACgCIAIgGIACAAIgIAGQgBABgBABIAAAAIgBABIgSAAIACgBAd2gLIABgBIAPAAIAKgIIACAAIgFAEQgDACgCACIABAAIgBABIgBAAIgBAAIgCAAIgOAAAd4gBIALgIIABAAIgGAFIgDADIgBAAIABAAIgBABIgRAAIABgBIAOAAAcfglQgDACgCACIAAAAIgBABIgBAAIgCAAIgPAAIACgBIAPAAQACgCADgCIAFgEIACAAIgFAEAcdgVIgPAAIABgBIAPAAIADgCIAHgGIACAAIgHAGQgCABgBABIABAAIgBABIgBAAIgCAAAcpgOQgBABgBABIABAAIgCABIgBAAIgCAAIgOAAIABgBIAPAAIAFgEIAFgEIACAAIgIAGAcJgVIgOAAIABgBIAPAAIAKgIIABAAIgHAGQgBABgBABIABAAIgCABIgBAAIgCAAAcWgOQgBABgCABIABAAIgBABIgBAAIgCAAIgPAAIACgBIAOAAQADgCACgCIAGgEIABAAIgHAGAbggBIgCABIgRAAIABgBIAPAAIALgIIABAAIgHAGQgCABgBABIABAAAcQgJIgKAIIAAAAIgBABIgRAAIABgBIAPAAQABgBACgBIAHgGIACAAAcIgBIAPAAIALgIIABAAIgKAIIABAAIgCABIgRAAIABgBAcrgBIAKgIIACAAIgKAIIAAAAIgBABIgSAAIACgBIAPAAAcvgBIAPAAIAJgHIACgBIABAAIgHAGQgBABgCABIABAAIgCABIgRAAIABgBAbxgBIAKgIIABAAIgKAIIABAAIgBABIgSAAIABgBIAQAAAbCgJIgKAIIABAAIgBABIgSAAIABgBIAPAAIALgIIABAAAa7gBIAPAAIAKgIIABAAIgJAIIAAAAIgBABIgRAAIABgBAajgBIAKgIIACAAIgKAIIAAAAIgBABIgRAAIABgBIAPAAAaSgBIgBABIgSAAIACgBIAPAAQABgBABgBIAIgGIABAAIgGAFIgDACIAAABIAAAAAaMgLIACgBIAPAAIAKgIIACAAIgGAEQgCACgDACIABAAIAAABIgBAAIgBAAIgCAAIgPAAAargVIgBAAIgCAAIgPAAIACgBIAPAAIACgCIAIgGIABAAIgHAGQgBABgBABIAAAAIgBABAbcgQIAFgEIACAAIgDADIgHAFIABAAIgBABIgBAAIgBAAIgCAAIgOAAIABgBIAPAAIAFgEAbTgWIgBABIgBAAIgCAAIgPAAIACgBIAPAAIACgCIAIgGIABAAIgKAIIABAAAbigVIgOAAIABgBIAPAAQABgBACgBIAHgGIACAAIgKAIIAAAAIgBABIAAAAIgDAAAaoghIAPAAIAKgIIACAAIgIAGQgBABgBABIAAAAIgBABIgBAAIgCAAIgPAAIACgBAa6ggIABgBIAPAAQACgBABgBIAIgGIABAAIgHAGQgBABgCABIABAAIgCABIAAAAIgCAAIgPAAAbFgLIgBAAIgCAAIgPAAIACgBIAPAAIAKgIIACAAIgIAGIgCACIgBABAbigjQgBABgBABIAAAAIgBABIgBAAIgCAAIgPAAIACgBIAPAAQABgBABgBIAIgGIACAAIgIAGAbgggIACgBIAPAAIAKgIIACAAIgFAEQgDACgCACIABAAIgCABIAAAAIgCAAIgQAAAb2gVIgPAAIACgBIAOAAIALgIIABAAIgJAHIgBABIABAAIgBABIgBAAIgCAAAb1ghIAPAAIALgIIACAAIgFAEQgDACgDACIABAAIgCABIAAAAIgCAAIgPAAIABgBAfRgpIACAAIgIAGQgBABgBABIABAAIgCABIgBAAIgCAAIgOAAIABgBIAPAAQACgCADgCIAFgEAfYggIgOAAIABgBIAPAAQADgDADgDIADgCIADAAIgLAJIgDAAAe9gVIABgBIAPAAIAKgIIADAAIgMAJIgCAAIgPAAAe+gpIACAAIgIAGQgBABgCABIABAAIgBABIgBAAIgCAAIgPAAIACgBIAOAAIALgIAfFgeIgGAFIgDACIAAABIAAAAIgBABIgBAAIgCAAIgPAAIABgBIABAAIAPAAIACgCIAIgGIABAAAe/gLIgPAAIABgBIAQAAIAJgIIADAAIgLAJIgDAAAeigBIgCABIgRAAIABgBIAPAAQACgBABgBIAIgGIACAAIgIAGQgBABgCABIABAAAekgBIAOAAIALgIIADAAIgNAJIgRAAIACgBAergLIgPAAIACgBIAPAAQACgCADgCIAFgEIACAAIgIAGQgBABgBABIABAAIgBABIgBAAIgBAAIgCAAAenglQgDACgCACIAAAAIgBABIgBAAIgBAAIgPAAIABgBIAPAAQACgBABgBIAHgGIACAAIgFAEAeUgVIgCAAIgPAAIABgBIAPAAQABgBACgBIAHgGIACAAIgKAIIABAAIgCABIAAAAAelgVIgPAAIABgBIAPAAIALgIIABAAIgKAIIABAAIgBABIgBAAIgCAAAeLgMIAOAAQADgCADgCIAFgEIABAAIgHAGQgBABgCABIABAAIAAABIgBAAIgBAAIgCAAIgPAAIACgBAa3gQQgDACgCACIABAAIgCABIAAAAIgCAAIgPAAIABgBIAPAAQADgCACgCIAGgEIABAAIgFAEAa8gVIgPAAIAAgBIABAAIAPAAIADgCIAHgGIACAAIgDACIgHAFIAAABIABAAIgCABIAAAAIgCAAAcIgUIACAAIgIAGQgBABgBABIABAAIgBABIgBAAIgBAAIgCAAIgOAAIABgBIAPAAQABgBABgBIAIgGAbpgLIgPAAIACgBIAOAAIALgIIABAAIgHAGQgBABgCABIABAAIAAABIgBAAIgBAAIgCAAA/lAWIDkAAIAAAUIjkAAIAAgU").cp();
	this.shape_41.setTransform(223.1,266.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("rgba(0,0,0,0.153)").s().p("AaVgUIFQAAIAOAGIlQAAIgOgGA8MAKIAMALIjmAAIgMgLIDmAA").cp();
	this.shape_42.setTransform(224.7,263);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.lf(["rgba(255,255,255,0.251)","rgba(0,0,0,0.153)"],[0,1],0,2.3,0,-2.2).s().p("ABxADIAFgHIACgCIAHAAIAAgDIAOgNIARAAIgtAtIkOAAIAegdIALAJIDlAA").cp();
	this.shape_43.setTransform(34.1,264.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.lf(["rgba(255,255,255,0.251)","rgba(0,0,0,0.153)"],[0,1],0,0.8,0,-0.7).s().p("AB+AIIkcAAIBJgPID0AAIghAP").cp();
	this.shape_44.setTransform(34.2,241.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.lf(["rgba(0,0,0,0.153)","rgba(0,0,0,0.353)"],[0,1],-1.5,0,1.7,0).s().p("AAQhxIAADEIgRASIgOANIAAjTIAfgQ").cp();
	this.shape_45.setTransform(48.4,252.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("rgba(255,255,255,0.4)").s().p("AfyiDIggCYIkLAAIAgiYIELAAAbfB/QADgCAFgBQAHgDAFABQAHgBABADQACABgCACIAAAAQgDACgFABQgFACgHAAQgFAAgDgCQgCgBACgCIAAAAA75hdIAAB8QAAAXgYAAIjIAAQgQAAgGgLQgCgFAAgHIAAh8QAAgHACgGQAGgLAQAAIDIAAQAYAAAAAYIAAAA").cp();
	this.shape_46.setTransform(223.4,256.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("rgba(0,0,0,0.012)").s().p("AfmA8IlPAAIApjGIFQAAIgqDGAfmhxIkLAAIggCYIELAAIAgiYA7xBZIAAACIgGAAIgUAAIjlAAIgeAAIAAjVIEdAAIAADTA8FhLQAAgYgXAAIjIAAQgRAAgFALQgCAGAAAHIAAB8QAAAHACAFQAFALARAAIDIAAQAXAAAAgXIAAh8A8QCLIjkAAIgbAAIAAgRIABAAIEPAAIAAARIgRAA").cp();
	this.shape_47.setTransform(224.6,254.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31}]}).wait(411));

	// connector
	this.instance_38 = new lib.Connectoranimation();
	this.instance_38.setTransform(411.8,216.7,0.771,0.771,0,0,0,5,36.6);
	this.instance_38.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_38).wait(333).to({regY:0,y:188.5,alpha:1},0).wait(2).to({alpha:0},0).wait(2).to({alpha:1},0).wait(2).to({alpha:0},0).wait(2).to({alpha:1},0).wait(2).to({alpha:0},0).wait(2).to({alpha:1},0).wait(2).to({alpha:0},0).wait(2).to({alpha:1},0).wait(2).to({alpha:0},0).wait(2).to({alpha:1},0).wait(2).to({alpha:0},0).wait(2).to({alpha:1},0).wait(2).to({alpha:0},0).wait(2).to({alpha:1},0).wait(2).to({alpha:0},0).wait(2).to({alpha:1},0).wait(2).wait(43).to({regY:36.6,y:216.7,mode:"synched",startPosition:0},0).wait(1));

	// wireless signal
	this.instance_39 = new lib.wireless_signal_1();
	this.instance_39.setTransform(189,144.2,0.924,0.924,0,-36.6,143.3);
	this.instance_39.alpha = 0;

	this.instance_40 = new lib.wireless_signal_1();
	this.instance_40.setTransform(189,144.2,0.924,0.924,0,-36.6,143.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_39,p:{alpha:0,rotation:0,skewX:-36.6,skewY:143.3,x:189}}]}).to({state:[{t:this.instance_39,p:{alpha:1,rotation:0,skewX:-36.6,skewY:143.3,x:189}}]},162).to({state:[{t:this.instance_39,p:{alpha:0,rotation:0,skewX:-36.6,skewY:143.3,x:189}}]},2).to({state:[{t:this.instance_39,p:{alpha:1,rotation:0,skewX:-36.6,skewY:143.3,x:189}}]},2).to({state:[{t:this.instance_39,p:{alpha:0,rotation:0,skewX:-36.6,skewY:143.3,x:189}}]},2).to({state:[{t:this.instance_39,p:{alpha:1,rotation:0,skewX:-36.6,skewY:143.3,x:189}}]},2).to({state:[{t:this.instance_39,p:{alpha:0,rotation:0,skewX:-36.6,skewY:143.3,x:189}}]},2).to({state:[{t:this.instance_39,p:{alpha:1,rotation:0,skewX:-36.6,skewY:143.3,x:189}}]},2).to({state:[{t:this.instance_39,p:{alpha:0,rotation:0,skewX:-36.6,skewY:143.3,x:189}}]},2).to({state:[{t:this.instance_39,p:{alpha:1,rotation:0,skewX:-36.6,skewY:143.3,x:189}}]},2).to({state:[{t:this.instance_39,p:{alpha:0,rotation:0,skewX:-36.6,skewY:143.3,x:189}}]},2).to({state:[{t:this.instance_39,p:{alpha:1,rotation:0,skewX:-36.6,skewY:143.3,x:189}}]},2).to({state:[{t:this.instance_39,p:{alpha:0,rotation:0,skewX:-36.6,skewY:143.3,x:189}}]},2).to({state:[{t:this.instance_39,p:{alpha:1,rotation:0,skewX:-36.6,skewY:143.3,x:189}}]},2).to({state:[{t:this.instance_40},{t:this.instance_39,p:{alpha:1,rotation:36.7,skewX:0,skewY:0,x:256.9}}]},24).to({state:[{t:this.instance_39,p:{alpha:1,rotation:0,skewX:-36.6,skewY:143.3,x:189}}]},2).to({state:[{t:this.instance_40},{t:this.instance_39,p:{alpha:1,rotation:36.7,skewX:0,skewY:0,x:256.9}}]},2).to({state:[{t:this.instance_39,p:{alpha:1,rotation:0,skewX:-36.6,skewY:143.3,x:189}}]},2).to({state:[{t:this.instance_40},{t:this.instance_39,p:{alpha:1,rotation:36.7,skewX:0,skewY:0,x:256.9}}]},2).to({state:[{t:this.instance_39,p:{alpha:1,rotation:0,skewX:-36.6,skewY:143.3,x:189}}]},2).to({state:[{t:this.instance_40},{t:this.instance_39,p:{alpha:1,rotation:36.7,skewX:0,skewY:0,x:256.9}}]},2).to({state:[{t:this.instance_39,p:{alpha:1,rotation:0,skewX:-36.6,skewY:143.3,x:189}}]},2).to({state:[{t:this.instance_40},{t:this.instance_39,p:{alpha:1,rotation:36.7,skewX:0,skewY:0,x:256.9}}]},2).to({state:[{t:this.instance_39,p:{alpha:1,rotation:0,skewX:-36.6,skewY:143.3,x:189}}]},2).to({state:[{t:this.instance_40},{t:this.instance_39,p:{alpha:1,rotation:36.7,skewX:0,skewY:0,x:256.9}}]},2).to({state:[{t:this.instance_39,p:{alpha:1,rotation:0,skewX:-36.6,skewY:143.3,x:189}}]},2).to({state:[{t:this.instance_40},{t:this.instance_39,p:{alpha:1,rotation:36.7,skewX:0,skewY:0,x:256.9}}]},2).to({state:[{t:this.instance_40},{t:this.instance_39,p:{alpha:1,rotation:36.7,skewX:0,skewY:0,x:256.9}}]},2).wait(175));

	// Lines
	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(2,2,1).p("AAAFvIAArd");
	this.shape_48.setTransform(35,211.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_48}]}).wait(411));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(13,41,419.3,256.3);


(lib.slide_2 = function() {
	this.initialize();

	// animation 2
	this.anim02 = new lib.animation02();
	this.anim02.setTransform(223.3,188,1,1,0,0,0,221.7,167.7);

	this.addChild(this.anim02);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(14.6,61.3,419.3,256.3);


(lib.Main = function() {
	this.initialize();

	// slide2
	this.slide02 = new lib.slide_2();
	this.slide02.setTransform(202.5,126.5,1,1,0,0,0,202.5,126.5);

	// slide1
	this.slide01 = new lib.slide_1();
	this.slide01.setTransform(202.5,126.5,1,1,0,0,0,202.5,126.5);

	this.addChild(this.slide01,this.slide02);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(4.3,61.3,445,256.3);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;