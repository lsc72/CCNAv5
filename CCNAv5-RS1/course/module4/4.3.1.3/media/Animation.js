(function (lib, img, cjs) {

var p,toolover,customtextbox,custombutton; // shortcut to reference prototypes

// stage content:
(lib.classesmediaMediaObject = function() {
	this.initialize();

	// main
	this.instance = new lib.Main();
	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(14.6,61.3,419.3,256.3);


// symbols:
(lib.computer = function() {
	this.initialize(img.computer);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,143,119);


(lib.computer_laptop = function() {
	this.initialize(img.computer_laptop);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,172,115);


(lib.envelopeblue = function() {
	this.initialize(img.envelopeblue);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,123,79);


(lib.envelopegreen = function() {
	this.initialize(img.envelopegreen);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,123,79);


(lib.envelopeorange = function() {
	this.initialize(img.envelopeorange);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,123,79);


(lib.paper = function() {
	this.initialize(img.paper);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,63,72);

(lib.Router = function() {
	this.initialize(img.Router);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,148,107);


(lib.Router_Wireless = function() {
	this.initialize(img.Router_Wireless);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,148,160);


(lib.satellite = function() {
	this.initialize(img.satellite);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,321,132);


(lib.satellite_dish = function() {
	this.initialize(img.satellite_dish);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,176,107);


(lib.Untitled2 = function() {
	this.initialize(img.Untitled2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,313,114);


(lib.wireless_signal = function() {
	this.initialize(img.wireless_signal);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,189,24);




(lib.label2 = function() {
	this.initialize();

	// Layer 1
	this.text = new DOMObject({type:"TEXT" , align:"center" ,compId:"ID_txt06", width:"80", expand:"up+down",size:10});
	this.text.setTransform(356,237.2);

	this.text_1 = new DOMObject({type:"TEXT" , align:"center" ,compId:"ID_txt05", width:"60", expand:"down",size:10});
	this.text_1.setTransform(0,236.2);

	this.text_2 = new DOMObject({type:"TEXT" , align:"left" ,compId:"ID_txt03", width:"300", expand:"down",size:10});
	this.text_2.setTransform(88,168.2);

	this.text_3 = new DOMObject({type:"TEXT" , align:"left" ,compId:"ID_txt02", width:"160", expand:"up+down",size:10});
	this.text_3.setTransform(250,6.2);

	this.text_4 = new DOMObject({type:"TEXT" , align:"left" ,compId:"ID_txt01", width:"160", expand:"down",size:10});
	this.text_4.setTransform(16,-3.8);


	this.addChild(this.text_4,this.text_3,this.text_2,this.text_1,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(14,-3.8,397.1,256.3);




(lib.Colors = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FF2222","#F07B4A","#FFFF00","#29BC18","#1B1B87"],[0,0.173,0.4,0.769,1],-53,2.8,53.2,2.8).s().p("AoSA3IAAhtIQlAAIAABtg");
	this.shape.setTransform(53.2,5.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,106.4,11.1);


(lib.frame = function() {
	this.initialize();

	// TEXT
	this.text = new DOMObject({type:"TEXT" , align:"left" ,compId:"ID_txt04", width:"100", expand:"down",size:10});
	this.text.setTransform(-155.9,60.2);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-161.9,51.2,62.8,16.2);



(lib.envelope2 = function() {
	this.initialize();

	// inner lines
	this.instance = new lib.envelopeorange();
	this.instance.setTransform(-39.5,-26.1,0.667,0.663);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-39.5,-26.1,82.1,52.4);


(lib.envelope1 = function() {
	this.initialize();

	// inner lines
	this.instance = new lib.envelopegreen();
	this.instance.setTransform(-39.5,-26.1,0.667,0.663);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-39.5,-26.1,82.1,52.4);


(lib.envelope = function() {
	this.initialize();

	// inner lines
	this.instance = new lib.envelopeblue();
	this.instance.setTransform(-39.5,-26.1,0.667,0.663);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-39.5,-26.1,82.1,52.4);

(lib.moreInfo_bg = function() {
	this.initialize();

	// png
	this.instance = new lib.paper();
	this.instance.setTransform(0,0,1.127,1);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,71,72);


(lib.wireless_signal_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.wireless_signal();
	this.instance.setTransform(-46,-4.8,0.488,0.41);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-46,-4.8,92.3,9.9);


(lib.satellitedish = function() {
	this.initialize();

	// shading
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0.153)","rgba(255,255,255,0.102)","rgba(0,0,0,0.102)","rgba(0,0,0,0.2)","rgba(0,0,0,0.4)"],[0,0.431,0.651,0.753,1],147.8,-41.1,139.9,-32.9).s().p("ABXDqQgMgGgNgJIAAhpQAkACAmAAQA3AAAzgEIAABrQgtAfgtAAQghAAgggQgAhrgwIiGiwQBpgSCEgHIBQDTQhigChVgIg");
	this.shape.setTransform(-13.6,8.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(0,0,0,0.153)","rgba(255,255,255,0.102)","rgba(0,0,0,0.102)","rgba(0,0,0,0.2)","rgba(0,0,0,0.4)"],[0,0.431,0.651,0.753,1],137.4,-81.5,153.9,-36.8).s().p("AAKhqQDdABCdAfIAbAFQB6AbAMAjIAAAEIAAAGIAAAEQgMAoiVAcQhoAUiDAIQhAADhGAAgAg7BqIhSjQQBCgEBJAAIACAAIgFDUIg2AAgAmKBLIg0gLQgYgGgSgGQgsgPgQgRIAAgPIAAAAIAAgCQgBgLADgMQAQgRAqgOQAlgNA5gKIAOgDIADgBICFCuQhRgHhFgOg");
	this.shape_1.setTransform(0,-5.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(0,0,0,0.353)","rgba(0,0,0,0.153)","rgba(255,255,255,0.153)","rgba(255,255,255,0.4)","rgba(0,0,0,0.153)","rgba(0,0,0,0.353)","rgba(0,0,0,0.502)"],[0,0.157,0.263,0.463,0.624,0.816,1],99.3,-46.9,191.9,-46.9).s().p("AhJD7Qi1gLiGg/Qg/gdgmgiQg1gvgGg4QAQARArAOQATAHAYAGIA0ALQBFANBQAIQBWAIBkACIA2AAIAFjUIABhcQgKgBgKgFQgJgHgBgJQABgKAJgGQAJgGAKAAIADgBIABAAIADABQAMAAAJAGQAJAGABAKQgBAJgJAHQgJAGgNAAIAEBcIAJDUQBGAABAgEQCCgHBpgUQCVgdAMgmQgBAdgOAcQghBEhxA1Qh7A6ihAOQgzAEg1AAQglAAgkgCg");
	this.shape_2.setTransform(0.1,-4.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.502)").s().p("AAAAEIAAABIAAgBIAAgIIABAJg");
	this.shape_3.setTransform(0.4,-33.3);

	// base
	this.instance = new lib.satellite_dish();
	this.instance.setTransform(-54.9,-32.7,0.625,0.623);

	this.addChild(this.instance,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-54.9,-33.8,110,67.8);


(lib.RouterWireless = function() {
	this.initialize();

	// details
	this.instance = new lib.Router_Wireless();
	this.instance.setTransform(0,-99.8,0.626,0.624);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-99.8,92.7,99.9);


(lib.Router_1 = function() {
	this.initialize();	
	this.instance = new lib.Router();
	this.instance.setTransform(0,-66.7,0.626,0.623);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-66.7,92.7,66.7);


(lib.Vignetanimation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// colors
	this.instance = new lib.Colors("single",0);
	this.instance.setTransform(0,5.5,0.014,1,0,0,0,0,5.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1},34).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.5,11.1);


(lib.Connectoranimation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.wireless_signal_1();
	this.instance.setTransform(4.9,36.7,0.795,1,90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({y:33.3},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,9.9,73.4);






(lib.animation01 = function(mode,startPosition,loop) {
	
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});


	// Text
	this.instance = new lib.label2();
	this.instance.setTransform(218.2,167.7,1,1,0,0,0,218.7,122.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).wait(411));
	
	
	// Frame
	this.instance_1 = new lib.frame();
	this.instance_1.setTransform(36.8,249.7,0.771,0.771,0,0,0,-138.1,69.1);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(11).to({regX:-138.1,scaleX:1,scaleY:1,x:35.9,y:250.1},0).to({alpha:1},18,cjs.Ease.get(1)).wait(11).to({y:176.3},21).wait(9).to({alpha:0},7).wait(5).to({alpha:1},8).wait(17).to({x:149.5},35).wait(14).to({y:176.1},0).to({regX:-138,x:223.4,y:121},32).wait(18).to({regX:-137.9,regY:69,x:290.6,y:176.2},31).wait(16).to({regX:-138.1,x:412.9},36).wait(17).to({y:176.1},0).to({alpha:0},9).wait(6).to({alpha:1},8).wait(17).to({y:247.9},21).wait(44));

	// Packet2
	this.instance_2 = new lib.envelope2();
	this.instance_2.setTransform(411.5,175.6,0.469,0.41,0,0,0,1.4,0.1);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(321).to({alpha:1},8).wait(17).to({y:247.5},21).wait(44));

	// Packet1
	this.instance_3 = new lib.envelope1();
	this.instance_3.setTransform(34.4,175.6,0.469,0.41,0,0,0,1.4,0.1);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(82).to({alpha:1},8).wait(17).to({regX:1.5,x:148},35).wait(14).to({regX:1.4,x:221.9,y:120.3},32).wait(18).to({x:289.1,y:175.6},31).wait(16).to({x:411.5},36).wait(17).to({alpha:0},9).wait(96));

	// Packet
	this.instance_4 = new lib.envelope();
	this.instance_4.setTransform(34.4,249.3,0.469,0.41,0,0,0,1.4,0.1);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(11).to({alpha:1},18,cjs.Ease.get(1)).wait(11).to({y:175.6},21).wait(9).to({alpha:0},7).wait(334));	
	
	// vignat-highlight
	this.instance_5 = new lib.Vignetanimation();
	this.instance_5.setTransform(304.7,173.1,0.843,0.771);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(253).to({scaleX:0.05,alpha:1,mode:"single",startPosition:32},0).to({scaleX:0.9},36).wait(122));

	// vignet
	this.instance_6 = new lib.Vignetanimation("synched",0,false);
	this.instance_6.setTransform(95,177.4,0.81,0.771,0,0,0,53.1,5.6);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(109).to({alpha:1,mode:"independent"},0).wait(302));

	// Graphics
	this.instance_7 = new lib.satellitedish();
	this.instance_7.setTransform(288.8,168.2,0.493,0.493,0,-59.9,120,-1.5,-0.7);

	this.instance_8 = new lib.satellitedish();
	this.instance_8.setTransform(154,169.2,0.493,0.493,60,0,0,0.4,0.4);

	this.instance_9 = new lib.RouterWireless();
	this.instance_9.setTransform(411.5,172.5,0.337,0.337,0,0,0,46,-46.5);

	this.instance_10 = new lib.satellite();
	this.instance_10.setTransform(166.6,87.2,0.339,0.34);

	this.instance_11 = new lib.Router_1();
	this.instance_11.setTransform(35.2,177.4,0.337,0.337,0,0,0,46.7,-31.8);

	this.instance_12 = new lib.computer_laptop();
	this.instance_12.setTransform(379.4,240.9,0.307,0.309);

	this.instance_13 = new lib.computer();
	this.instance_13.setTransform(13,240.9,0.31,0.307);
	
	


	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#324B4B").ss(0.3,1,1).p("AAAAAIAAAA");
	this.shape.setTransform(212.7,108.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(0,0,0,0.302)","rgba(255,255,255,0.102)","rgba(0,0,0,0.102)","rgba(0,0,0,0.2)","rgba(0,0,0,0.4)"],[0,0.435,0.651,0.753,1],-7,0,7.2,0).s().p("AgxAWQgKgEgFgFQgGgGAAgHIAAAAIAAAAQABgMAUgJQAVgKAcAAQAdAAAVAKQAOAGAFAIQACADAAAEIAAAAQgBANgUAJQgVAKgdAAQgcAAgVgKg");
	this.shape_1.setTransform(222.4,92.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(0,0,0,0.353)","rgba(0,0,0,0.153)","rgba(255,255,255,0.153)","rgba(255,255,255,0.4)","rgba(0,0,0,0.153)","rgba(0,0,0,0.353)","rgba(0,0,0,0.502)"],[0,0.157,0.263,0.463,0.624,0.816,1],-7.9,0,8.1,0).s().p("AhPgBIA/gRIAMgDIBUANIgBAcIgEADg");
	this.shape_2.setTransform(247.3,104.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(0,0,0,0.353)","rgba(0,0,0,0.153)","rgba(255,255,255,0.153)","rgba(255,255,255,0.4)","rgba(0,0,0,0.153)","rgba(0,0,0,0.353)","rgba(0,0,0,0.502)"],[0,0.157,0.263,0.463,0.624,0.816,1],-23.5,0,23.7,0).s().p("AjrAJIAAAAIAAgbIDMAnIELhGIAAAIIAAAVIgTAFIj4BBg");
	this.shape_3.setTransform(190.2,120.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["rgba(0,0,0,0.502)","rgba(0,0,0,0.153)","rgba(255,255,255,0.153)","rgba(255,255,255,0.4)","rgba(0,0,0,0.153)","rgba(0,0,0,0.353)","rgba(0,0,0,0.502)"],[0,0.157,0.267,0.463,0.627,0.82,1],0,0,0,0,0,23.8).s().p("AjrAQIAAgBIAAAAIEOhHIAwAJQgkAKgOAYQAzgBAdgIIAngLIABAAIA6AMIAZAFIAAADIkLBGg");
	this.shape_4.setTransform(190.2,116.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["rgba(0,0,0,0.153)","rgba(255,255,255,0.102)","rgba(0,0,0,0.102)","rgba(0,0,0,0.2)","rgba(0,0,0,0.4)"],[0,0.431,0.651,0.753,1],-96.1,13.4,-92.2,25.3).s().p("AhVAgIAAggIABAAIAkgIIANgDIABAAIABAAIABgBIAGgBIAggJQAdgJAzAAQgLATgcALIgLABIg9ARIgJADIgyAMIgBAAg");
	this.shape_5.setTransform(241.9,102);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["rgba(0,0,0,0.353)","rgba(0,0,0,0.153)","rgba(255,255,255,0.153)","rgba(255,255,255,0.4)","rgba(0,0,0,0.153)","rgba(0,0,0,0.353)","rgba(0,0,0,0.502)"],[0,0.157,0.263,0.463,0.624,0.816,1],-2.6,0,2.7,0).s().p("AgZgLIA0AIIgBACIgCABIgBAAIgBAAIgMACIgiAKIgBAAg");
	this.shape_6.setTransform(236,100.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(193,19,30,0.502)").s().p("AgBAAIADAAIgDAAg");
	this.shape_7.setTransform(238.9,100.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.rf(["rgba(0,0,0,0.502)","rgba(0,0,0,0.153)","rgba(255,255,255,0.153)","rgba(255,255,255,0.4)","rgba(0,0,0,0.153)","rgba(0,0,0,0.353)","rgba(0,0,0,0.502)"],[0,0.157,0.267,0.463,0.627,0.82,1],-0.8,0.5,0,-0.8,0.5,22.2).s().p("AhLApQAbgLAMgUQg0ABgcAIIgjAKIgEgBIg2gJIAAgFIABgBIDghDIDDAgIjKBNg");
	this.shape_8.setTransform(254.4,97.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["rgba(0,0,0,0.353)","rgba(0,0,0,0.153)","rgba(255,255,255,0.153)","rgba(255,255,255,0.4)","rgba(0,0,0,0.153)","rgba(0,0,0,0.353)","rgba(0,0,0,0.502)"],[0,0.157,0.263,0.463,0.624,0.816,1],-10,0,10.2,0).s().p("AhjAYIDIhNIAAAeIjJBNg");
	this.shape_9.setTransform(265.4,100.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["rgba(0,0,0,0.353)","rgba(0,0,0,0.153)","rgba(255,255,255,0.153)","rgba(255,255,255,0.4)","rgba(0,0,0,0.153)","rgba(0,0,0,0.353)","rgba(0,0,0,0.502)"],[0,0.157,0.263,0.463,0.624,0.816,1],-10.9,-4.2,11,-4.2).s().p("AhTAhIAAgIIAAgDIgZgFIAAgQIAAgFIAAgFIAMgDIAegIIAAgBIABAAQAFgBADgDQADgDABgEICiAAIAABBg");
	this.shape_10.setTransform(222.4,112.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["rgba(0,0,0,0.353)","rgba(0,0,0,0.153)","rgba(255,255,255,0.153)","rgba(255,255,255,0.4)","rgba(0,0,0,0.153)","rgba(0,0,0,0.353)","rgba(0,0,0,0.502)"],[0,0.157,0.263,0.463,0.624,0.816,1],-10.9,-8.8,11,-8.8).s().p("Ag3AtQgMgEgKgEQgLgGgIgFQgMgKAAgOIAAgCIAAgIIAAgDIAAgMIAGgCIATgFIAAgVIDAAAIAAA2QgBAUgfAOQgKAFgQAEQgYAFgbABQgeAAgZgHg");
	this.shape_11.setTransform(222.4,121.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["rgba(0,0,0,0.353)","rgba(0,0,0,0.153)","rgba(255,255,255,0.153)","rgba(255,255,255,0.4)","rgba(0,0,0,0.153)","rgba(0,0,0,0.353)","rgba(0,0,0,0.502)"],[0,0.157,0.263,0.463,0.624,0.816,1],-10.9,-5.7,11,-5.7).s().p("Ag1AWIAAgFQAAgGgEgFQgFgDgGAAIgCAAIgEABIgVAFIgBAAIgMAEIAAgBIAAggIDYAAIAAAAIABAAIAAAqIiiAAg");
	this.shape_12.setTransform(222.4,107.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["rgba(0,0,0,0.353)","rgba(0,0,0,0.153)","rgba(255,255,255,0.153)","rgba(255,255,255,0.4)","rgba(0,0,0,0.153)","rgba(0,0,0,0.353)","rgba(0,0,0,0.502)"],[0,0.157,0.263,0.463,0.624,0.816,1],-10.9,-3.9,11,-3.9).s().p("AhsAjIAAgfIAAgdIAAgJIDZAAIAAAJIgBABIAAAFIAAAXIAAAfg");
	this.shape_13.setTransform(222.4,101.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["rgba(0,0,0,0.353)","rgba(0,0,0,0.153)","rgba(255,255,255,0.153)","rgba(255,255,255,0.4)","rgba(0,0,0,0.153)","rgba(0,0,0,0.353)","rgba(0,0,0,0.502)"],[0,0.157,0.263,0.463,0.624,0.816,1],-10.9,3.4,11,3.4).s().p("AhsAcIAAg4QAAAKAJAJQAIAJAOAEQAhAOAsABQAtgBAggOQAfgMABgUIAAA4g");
	this.shape_14.setTransform(222.4,95.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["rgba(0,0,0,0.153)","rgba(255,255,255,0.102)","rgba(0,0,0,0.102)","rgba(0,0,0,0.2)","rgba(0,0,0,0.4)"],[0,0.431,0.651,0.753,1],7,-15,10.9,-3.2).s().p("AiTBsIBIgUIA4gOIAMgEIABAAIATgFIAEgBIACAAQAGAAAFADQAEAFAAAGIAAAFQgBADgDADQgDADgFABIgBAAIAAABIgcAIIgMAEIgeAIIgaAHIgDAAIgBAAIgnALQgdAIgzABQAOgYAlgJgAAKg4QgMgGgIgIQgJgJAAgKIAAgCIAAgCQABgTAcgOQAhgOAtAAQAuAAAgAOQAVAKAIAMQADAGAAAFIAAAEQgBATgfAOQggAPguABQgtgBghgPgAAlhxQgTAIgCANIAAABIAAAAQABAIAGAGQAFAFAJAEQAVAKAeAAQAeAAAVgKQAUgJABgNIAAgCQAAgEgCgEQgFgHgOgGQgVgLgeABIgDAAQgcAAgUAKg");
	this.shape_15.setTransform(213.5,101.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["rgba(0,0,0,0.353)","rgba(0,0,0,0.153)","rgba(255,255,255,0.153)","rgba(255,255,255,0.4)","rgba(0,0,0,0.153)","rgba(0,0,0,0.353)","rgba(0,0,0,0.502)"],[0,0.157,0.263,0.463,0.624,0.816,1],-5.3,-5,5.4,-5).s().p("AgkAVIgKgGQgGgGAAgIIAAgBIAAgDIAAgCIAAgYQAZAIAdAAQAcgBAYgFIAAAdQgBALgQAIQgPAJgWAAQgVAAgPgJg");
	this.shape_16.setTransform(222.1,129);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(255,255,255,0.2)").s().p("AByAUIgCAAIgBAAIADgCIAIgGIACgCIABAAIABAAIAPAAIgNAKgABfAUIgDAAIAAAAIADgCIAHgGIACgCIABAAIACAAIAPAAIgKAIIgDACgABLAUIgCAAIgBAAIAEgDIAHgFIABgCIACAAIABAAIAPAAIgKAIIgCACgAA4AUIgCAAIgBAAIADgCIAHgGIACgCIABAAIACAAIAOAAIgLAKgAAkAUIgBAAIgBAAIABAAIAJgIIABgCIABAAIACAAIAPAAIgLAKgAARAUIgCAAIAAAAIACgCIAIgGIABgCIABAAIACAAIAPAAIgJAIIgDACgAAAAUIgCAAIgBAAIAIgIIACgCIABAAIABAAIAQAAIgEADIgJAHgAgUAUIgCAAIgBAAIAKgIIADgCIABAAIACAAIAMAAIgKAKgAgoAUIgCAAIAAAAIAKgIIACgCIABAAIACAAIAOAAIgMAKgAg7AUIgCAAIgBAAIAKgIIACgCIABAAIACAAIAPAAIgJAIIgDACgAhPAUIgBAAIAAAAIACgCIAHgGIACgCIABAAIACAAIAOAAIgLAKgAhhAUIgCAAIgBAAIAKgIIABgCIABAAIACAAIAPAAIgLAKgAh1AUIgBAAIgBAAIAJgIIACgCIABAAIACAAIAPAAIgMAKgAiIAUIgDAAIAAAAIAKgIIACgCIABAAIABAAIAQAAIgNAKgAibAUIgDAAIAAAAIAEgDIAGgFIACgCIAAAAIACAAIAPAAIgMAKgAivAUIgDAAIAMgKIADAAIAOAAIgJAIIgCACgAB/AJIgBAAIgBAAIACgCIAJgHIABAAIADAAIAOAAIgBABIgKAIgABsAJIgBAAIgBAAIACgCIAIgGIABgBIABAAIABAAIAQAAIgHAFIgFAEgABZAJIgCAAIgBAAIAFgEIAHgFIAAAAIACAAIAQAAIgCABIgFAEIgFAEgABGAJIgCAAIgCAAIAGgEIAHgFIAAAAIACAAIAPAAIgBABIgLAIgAAyAJIgCAAIgBAAIAFgEIAHgFIABAAIACAAIAPAAIgCABIgLAIgAAeAJIgCAAIACgCIAEgDIAFgEIABAAIACAAIAPAAIgBABIgGAEIgFAEgAALAJIgDAAIADgCIAJgHIABAAIACAAIAOAAIgBABIgIAGIgCACgAgHAJIgBAAIgBAAIACgCIAHgHIABAAIACAAIAPAAIgBABIgKAIgAgaAJIgBAAIgBAAIACgCIAJgHIABAAIACAAIAOAAIgGAFIgFAEgAgtAJIgCAAIgBAAIADgCIAHgGIACgBIABAAIABAAIAPAAIgGAFIgGAEgAhAAJIgDAAIgBAAIADgCIAIgGIABgBIABAAIACAAIAPAAIgCABIgHAGIgDACgAhUAJIgCAAIgBAAIAHgFIAFgEIABAAIACAAIAOAAIgBABIgLAIgAhoAJIgCAAIACgCIAJgHIABAAIACAAIAOAAIgGAFIgFAEgAh7AJIgCAAIgBAAIAFgEIAHgFIAAAAIACAAIAPAAIgBABIgKAIgAiOAJIgCAAIgBAAIAFgEIAGgFIABAAIACAAIAPAAIgGAFIgFAEgAiiAJIgCAAIALgJIACAAIAQAAIgCABIgKAIgACNAAIgDAAIAAAAIAEgCIAGgFIACgCIABAAIABAAIAPAAIgMAJgAB5AAIgCAAIgBAAIAKgHIACgCIABAAIACAAIAOAAIgJAIIgCABgABlAAIgBAAIgBAAIAKgHIABgCIABAAIADAAIAOAAIgMAJgABSAAIgBAAIgBAAIADgCIAHgFIABgCIABAAIACAAIAPAAIgJAIIgCABgAA/AAIgCAAIAAAAIACgBIAHgGIACgCIAAAAIACAAIAQAAIgJAIIgDABgAAsAAIgCAAIgBAAIADgBIAHgGIACgCIAAAAIACAAIAPAAIgJAIIgCABgAAYAAIgCAAIgBAAIADgBIAHgGIACgCIABAAIACAAIAPAAIgJAIIgDABgAAFAAIgDAAIAAAAIAEgCIAGgFIACgCIAAAAIACAAIAPAAIgJAIIgDABgAgNAAIgCAAIgBAAIADgBIAHgGIACgCIAAAAIADAAIAMAAIgJAIIgCABgAghAAIgBAAIgBAAIACgBIAIgGIABgCIABAAIACAAIAPAAIgJAIIgCABgAg0AAIgBAAIgBAAIAAAAIAJgHIACgCIAAAAIACAAIAPAAIgLAJgAhHAAIgCAAIgBAAIAKgHIACgCIAAAAIACAAIAQAAIgMAJgAhaAAIgCAAIgCAAIALgHIACgCIAAAAIABAAIAQAAIgJAIIgDABgAhuAAIgCAAIgBAAIAHgFIADgCIACgCIABAAIACAAIAPAAIgJAIIgDABgAiCAAIgCAAIAAAAIACgBIAIgGIABgCIABAAIACAAIAPAAIgJAIIgDABgAiVAAIgDAAIAMgJIADAAIAOAAIgJAIIgCABgACZgKIgBAAIgBAAIACgCIAIgGIABgBIARAAIgBABIgDACIgHAGgACHgKIgCAAIgBAAIACgCIAIgGIABgBIASAAIgBABIgGAEIgFAEgABzgKIgCAAIgBAAIAFgEIAHgFIASAAIgCABIgLAIgABggKIgDAAIADgCIAJgHIARAAIgBABIgIAGIgDACgABMgKIgCAAIgBAAIAFgEIAHgFIARAAIgBABIgKAIgAA4gKIgCAAIAAAAIALgJIASAAIgBABIgIAGIgDACgAAlgKIgCAAIAAAAIACgCIAJgHIARAAIgBABIgIAGIgCACgAARgKIgBAAIgBAAIACgCIAIgGIABgBIATAAIgCABIgKAIgAAAgKIgCAAIAAAAIAKgJIARAAIgHAFIgFAEgAgTgKIgDAAIAAAAIAFgEIAHgFIAPAAIgFAFIgFAEgAgngKIgCAAIgBAAIAGgEIAHgFIARAAIgBABIgGAEIgFAEgAg7gKIgBAAIgBAAIAFgEIAHgFIARAAIgBABIgLAIgAhOgKIgCAAIAAAAIACgCIAJgHIASAAIgBABIgKAIgAhhgKIgCAAIAAAAIACgCIAJgHIARAAIgBABIgIAGIgCACgAh0gKIgCAAIgBAAIADgCIAJgHIARAAIgBABIgIAGIgCACgAiIgKIgDAAIAMgJIASAAIgCABIgKAIg");
	this.shape_17.setTransform(407.3,264.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["rgba(0,0,0,0.153)","rgba(0,0,0,0.353)"],[0,1],-3.1,1.5,3.2,0).s().p("AgfAKIA/g0IAAATIAAANIg/A1g");
	this.shape_18.setTransform(418.3,272);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(0,0,0,0.2)").s().p("AgvAMIAFgBQAHAFASAAQARAAAUgFIABABQgVAHgUAAQgUAAgHgHgAgNADQgBgBAAAAQAAgBAAAAQAAgBABAAQAAAAABAAIACgBQAAABgBAAQAAAAAAAAQAAAAAAAAQABAAAAABQACACAGAAQAEAAAGgCIAIgCIAAAAIgBABIAAAAQgDABgHACQgFADgFgBQgGABgCgDgAANgKQgNgBgOAGIgGgGIAFgCQAQgEAQgBIAIAAQAOABAIAEIABACIgSAGQgEgGgNABg");
	this.shape_19.setTransform(400.6,269.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["rgba(255,255,255,0.251)","rgba(0,0,0,0.102)"],[0,1],-5.9,2,-6,-3.5).s().p("AjRAbIBEg0IAWAAICJAAQgQAAgQAFIgFACIAGAFQANgFAOABQANgBAEAFIASgFIgBgCQgIgFgOAAICyAAIAHAAIhBA0gAgpADIgFABQAHAIAUgBQATABAWgIIgBgBIgFgDQgPAEgMgBQgNABgFgEIAAAAgAgCgMQgEACgDACIgCABQgBABAAAAQgBABAAAAQAAABAAAAQAAABABAAQACADAGAAQAEAAAGgDQAHgBADgDIAAAAIABgBQAAgBABAAQAAgBAAAAQAAgBAAAAQgBAAAAgBQgCgCgGAAIgCAAQgFAAgEACg");
	this.shape_20.setTransform(400.5,270.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["rgba(0,0,0,0.153)","rgba(0,0,0,0.353)"],[0,1],-2.5,0.2,2.8,-1.4).s().p("AgTASIgHAAIAAgLIA1grIAAAjIguAmg");
	this.shape_21.setTransform(423.7,265.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["rgba(255,255,255,0.251)","rgba(0,0,0,0.102)"],[0,1],1.5,1.1,1.5,-3.1).s().p("Ai8AWIgBAAIA3grIFEAAIAAAAIg3AsgABxAUIgBABIAQAAIAOgKIgDAAIgMAJIANgKIADAAIALgKIgCAAIABAAIADAAIALgIIgCAAIgKAIIALgJIADAAIAKgJIgCAAIABgBIgQAAIgCABIgBAAIABgBIgSAAIgBABIgBAAIABgBIgSAAIgHAFIAGgEIgCAAIABgBIgRAAIgJAHIAHgGIgBAAIABgBIgSAAIgGAFIAFgEIgCAAIABgBIgRAAIgMAJIAAAAIAKgIIgCAAIACgBIgSAAIgJAHIAIgGIgCAAIACgBIgSAAIgCABIgBAAIgGAEIAHgFIgRAAIgKAJIAAAAIAIgIIgCAAIgDAEIAEgFIgPAAIgHAFIAGgEIgCAAIABgBIgRAAIgHAFIAFgEIgCAAIACgBIgSAAIgGAFIAFgEIgCAAIABgBIgRAAIgJAHIAHgGIgCAAIACgBIgSAAIgJAHIAIgGIgCAAIABgBIgRAAIgJAHIAHgGIgBAAIABgBIgSAAIgLAJIACAAIgBABIgDAAIgLAJIACAAIgBAAIgDAAIgLAJIACAAIgBABIgDAAIgLAJIACAAIgBABIARAAIACgBIACAAIgCABIASABIABgCIACAAIgCACIASAAIACgCIABAAIgBACIARAAIACgCIACAAIgCACIASAAIABgCIACAAIgBACIARAAIABgCIACAAIgBACIASAAIABgCIACAAIgCACIASAAIABgCIACAAIgBACIARAAIACgCIACAAIgCACIAQAAIABgBIACAAIgBABIARAAIACgBIACAAIgCABIASAAIABgBIACAAIgBABIARAAIABgBIACAAIgBABIASAAIABgBIACAAIgCABIASAAIABgBgABIATIADgCIgDADgABSAKIACAAIgCABIgBAAIgLAJgAA+AKIACAAIgCABIgBAAIgKAJgAAEAKIACAAIgCABIgBAAIgJAIgAgNAKIACAAIgCABIgCAAIgKAIgAg0AKIACAAIgCABIgBAAIgLAIgAhHAKIABAAIgCABIgBAAIgKAIgAhbAKIACAAIgCABIgBAAIgLAIgAhuAKIABAAIgBABIgCAAIgKAIgAiCAKIACAAIgCABIgBAAIgLAIgAieATIADgCIgEACgAB5AKIACAAIgCABIgCAAIgIAHgABlAKIACAAIgBABIgCAAIgIAHgAArAKIACAAIgCABIgBAAIgIAHgAghAKIACAAIgCABIgBAAIgIAGgAiVAKIACAAIgCABIgCAAIgHAGgAAYAKIACAAIgCABIgCAAIgBACgAB8AKIABgBIAAAAIACAAIgCABgABoAKIABgBIABAAIABAAIgBABgABVAKIABgBIAAAAIACAAIgCABgABBAKIACgBIACAAIgCABgAAuAKIABgBIAAAAIACAAIgBABgAAaAKIABgBIADAAIgCABgAAHAKIABgBIACAAIgBABgAgKAKIABgBIACAAIgBABgAgeAKIACgBIABAAIgBABgAgxAKIABgBIAAAAIACAAIgCABgAhFAKIABgBIABAAIACAAIgCABgAhYAKIABgBIAAAAIACAAIgBABgAhsAKIABgBIADAAIgCABgAh/AKIABgBIACAAIgBABgAiTAKIABgBIABAAIACAAIgCABgACGAAIgBAAIgFAFIAGgFIACAAIgJAHgAASAAIgCAAIABAAIACAAIgJAHgAAAAAIgBAAIgGAFIAHgFIAAAAIgHAHgAgTAAIgCAAIgFAFIAGgFIACAAIgJAHgAhhAAIgCAAIACAAIACAAIgJAHgABgAAIgCAAIABAAIACAAIgHAFgABMAAIgBAAIABAAIACAAIgHAFgAA5AAIgCAAIABAAIACAAIgHAFgAhOAAIACAAIgFADIAEgDIgCAAIgFAFgAh0AAIgCAAIgFAFIAGgFIACAAIgGAFgAiIAAIgBAAIABAAIACAAIgHAFgAAlAAIgCAAIACAAIACAAIgGAEgAByAAIABAAIABAAIgBAAgAgoAAIABAAIACAAIgBAAgAg7AAIABAAIABAAIgBAAgACJAAIABAAIACAAIgBAAgAB1AAIACAAIABAAIgBAAIAAAAgABiAAIABAAIACAAIgBAAgABOAAIACAAIACAAIgCAAgAA7AAIABAAIACAAIgBAAgAAnAAIACAAIACAAIgCAAgAAUAAIABAAIACAAIgBAAgAABAAIABAAIACAAIgCAAgAgRAAIACAAIABAAIgBAAgAgkAAIABAAIACAAIgBAAgAg4AAIACAAIACAAIgCAAgAhLAAIABAAIACAAIgBAAgAhfAAIACAAIACAAIgCAAgAhyAAIABAAIACAAIgBAAgAiGAAIACAAIACAAIgBAAIgBAAgACKAAIADgCIgEACgACAgJIABAAIgBABIgCAAIgKAIgABQAAIADgCIgEACgAACAAIADgCIgEACgAgagJIACAAIgCABIgBAAIgLAIgAgtgJIABAAIgCABIgBAAIgKAIgAhxAAIAHgFIgHAFgACTgJIACAAIgCABIgCAAIgHAHgABsgJIACAAIgCABIgBAAIgIAHgABZgJIACAAIgCABIgCAAIgHAHgABFgJIACAAIgCABIgBAAIgIAHgAAygJIACAAIgCABIgCAAIgHAHgAAegJIACAAIgBABIgCAAIgIAHgAALgJIACAAIgCABIgCAAIgHAHgAgHgJIACAAIgCABIgBAAIgIAHgAhBgJIACAAIgCABIgBAAIgIAHgAhUgJIACAAIgCABIgCAAIgHAHgAhogJIACAAIgBABIgCAAIgIAHgAh7gJIACAAIgCABIgCAAIgHAHgACWgJIABgBIACAAIgBABgACCgJIACgBIACAAIgCABgABvgJIABgBIACAAIgBABgABbgJIABgBIADAAIgCABgABIgJIABgBIACAAIgBABgAA0gJIACgBIACAAIgCABgAAhgJIABgBIACAAIgBABgAANgJIACgBIACAAIgCABgAgEgJIABgBIACAAIgBABgAgYgJIACgBIACAAIgCABgAgrgJIABgBIACAAIgBABgAg+gJIABgBIACAAIgBABgAhSgJIACgBIACAAIgCABgAhlgJIABgBIACAAIgBABgAh5gJIACgBIACAAIgCABg");
	this.shape_22.setTransform(407.3,264.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["rgba(0,0,0,0.153)","rgba(0,0,0,0.353)"],[0,1],-0.2,0.3,1.8,0.7).s().p("AgaBgIApjFIALAOIglC9g");
	this.shape_23.setTransform(429.5,251.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["rgba(0,0,0,0.153)","rgba(0,0,0,0.353)"],[0,1],-1.7,0,1.8,0).s().p("AgRARIAigwIAAAeIgiAhg");
	this.shape_24.setTransform(46.1,274.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#57BDB4").s().p("AAAAAIAAAAIAAAAg");
	this.shape_25.setTransform(53.3,277.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#80CDC6").s().p("AAAAAIAAAAIAAAAg");
	this.shape_26.setTransform(55.3,272);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#007A68").s().p("AAAAAIAAAAIAAAAg");
	this.shape_27.setTransform(55.3,272);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["rgba(0,0,0,0.153)","rgba(0,0,0,0.353)"],[0,1],-0.9,0,1.1,0).s().p("AgJANIASgnIABABIAAAZIgSAaIgBABg");
	this.shape_28.setTransform(54.3,274.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["rgba(255,255,255,0.251)","rgba(0,0,0,0.153)"],[0,1],0,2.1,0,-1.9).s().p("AggAUIAUgnIAWAAIAAAAIABAAIAAAAIAWAAIgBABIgUAmg");
	this.shape_29.setTransform(51.9,274);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.lf(["rgba(0,0,0,0.153)","rgba(0,0,0,0.353)"],[0,1],-3,0,3.2,0).s().p("AgeApIAAgUIARAAIAAgRIAsgsIAAAQIgRARIAAAEIgBAAIAAABIABABIAAAHIgiAjg");
	this.shape_30.setTransform(46.8,266.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.lf(["rgba(0,0,0,0.153)","rgba(0,0,0,0.353)"],[0,1],-0.8,0,1,0).s().p("AgIgEIARAAIgCACIgFAHg");
	this.shape_31.setTransform(45.1,264.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.lf(["rgba(255,255,255,0.251)","rgba(0,0,0,0.102)"],[0,1],0,2.5,0,-2.4).s().p("AitAYIAkgvIArAAIDhAAIAKAAIAhAAIgkAvg");
	this.shape_32.setTransform(30.5,273.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(0,0,0,0.082)").s().p("A51A4IAAgOIAuAAIAAAOgA/ZA3IAAgQIAAAAIE5AAIAAAQgAZ1AtIAAghIFlAAIAAAhgA5JABIAAgBIgEgEQgDgEAFgCQADgDAJgBIATgIIAAABIAJgHIAAgCIACgEQgBgPg2gDIgggBIgBgBIAAgBIABAAQASAAAPACQA3ADAAAQIgBAFIgBABQgDAEgHAEIgSAHQgJACgDACQgBABgBAAQAAAAAAABQAAAAAAABQAAABABAAIADAFIAAABgAcdgKIANgEIAAAAQAEAFAOAAQAOAAAPgFIAEAEQgUAGgTAAQgSAAgHgGg");
	this.shape_33.setTransform(214,271.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(0,0,0,0.251)").s().p("A/lAqIAAgUIDkAAIAAAUgAcIALIgIAAIiMAAIAAgLIFGAAIAAALgAeiAAIACgBIAOAAIALgIIADAAIgNAJgAePAAIABgBIAPAAIADgCIAIgGIABAAIgHAGIgDACIABAAIgCABgAd7AAIACgBIAPAAIACgCIAIgGIACAAIgIAGIgCACIAAAAIgBABgAdpAAIABgBIAOAAIALgIIABAAIgGAFIgDADIgBAAIABAAIgBABgAdVAAIABgBIAPAAIALgIIABAAIgHAGIgDACIABAAIgCABgAdBAAIACgBIAPAAIACgCIAIgGIACAAIgKAIIAAAAIAAAAIgBABgAcuAAIABgBIAPAAIAJgHIACgBIACAAIgIAGIgDACIABAAIgCABgAcaAAIACgBIAPAAIAKgIIACAAIgKAIIAAAAIgBABgAcHAAIABgBIAPAAIALgIIABAAIgKAIIABAAIgCABgAb0AAIABgBIAPAAIADgCIAHgGIACAAIgKAIIAAAAIgBABgAbgAAIABgBIAQAAIAKgIIABAAIgKAIIABAAIgBABgAbNAAIABgBIAPAAIALgIIABAAIgHAGIgDACIABAAIgCABgAa6AAIABgBIAPAAIAKgIIACAAIgKAIIAAAAIgBABgAamAAIABgBIAPAAIALgIIABAAIgKAIIABAAIgBABgAaTAAIABgBIAPAAIAKgIIACAAIgKAIIAAAAIgBABgAZ/AAIACgBIAPAAIACgCIAIgGIABAAIgGAFIgDACIAAABIAAAAIgBABgAe/gLIgPAAIABgBIAQAAIAKgIIACAAIgLAJgAetgLIgCAAIgPAAIACgBIAPAAIAFgEIAFgEIACAAIgIAGIgCACIABAAIgBABIgBAAgAeagLIgCAAIgPAAIACgBIAOAAIAGgEIAFgEIACAAIgIAGIgDACIABAAIAAABIgBAAgAeGgLIgCAAIgOAAIABgBIAPAAIAKgIIACAAIgFAEIgFAEIABAAIgBABIgBAAgAdzgLIgCAAIgPAAIACgBIAOAAIALgIIACAAIgFAEIgGAEIABAAIgBABgAdfgLIgBAAIgPAAIABgBIAPAAIAFgEIAFgEIACAAIgFAEIgFAEIABAAIgBABIgBAAgAdMgLIgCAAIgPAAIACgBIAPAAIACgCIAIgGIACAAIgEADIgEADIgCACIgBABgAc5gLIgCAAIgPAAIABgBIAPAAIALgIIABAAIgHAGIgDACIgBABgAclgLIgCAAIgOAAIABgBIAPAAIAFgEIAFgEIACAAIgIAGIgCACIABAAIgCABgAcSgLIgCAAIgPAAIACgBIAOAAIAGgEIAFgEIABAAIgHAGIgDACIABAAIgBABgAb+gLIgCAAIgOAAIABgBIAPAAIACgCIAIgGIACAAIgIAGIgCACIABAAIgBABIgBAAgAbrgLIgCAAIgPAAIACgBIAOAAIALgIIABAAIgHAGIgDACIABAAIAAABIgBAAgAbXgLIgCAAIgOAAIABgBIAPAAIAFgEIAFgEIACAAIgDADIgHAFIABAAIgBABIgBAAgAbEgLIgCAAIgPAAIACgBIAPAAIAKgIIACAAIgIAGIgCACIgBABgAaxgLIgCAAIgPAAIABgBIAPAAIAFgEIAGgEIABAAIgFAEIgFAEIABAAIgCABgAadgLIgCAAIgPAAIACgBIAPAAIAKgIIACAAIgGAEIgFAEIABAAIAAABIgBAAgAfMgVIgPAAIABgBIAPAAIAKgIIADAAIgMAJgAe6gVIgCAAIgPAAIABgBIABAAIAPAAIACgCIAIgGIABAAIgGAFIgDACIAAABIAAAAIgBABgAengVIgCAAIgPAAIABgBIAPAAIALgIIABAAIgKAIIABAAIgBABgAeUgVIgCAAIgPAAIABgBIAPAAIADgCIAHgGIACAAIgKAIIABAAIgCABgAeAgVIgCAAIgPAAIACgBIAPAAIACgCIAIgGIACAAIgHAFIgDACIAAABIAAAAIgBABgAdtgVIgCAAIgPAAIABgBIAPAAIADgCIAHgGIACAAIgHAGIgDACIABAAIgCABgAdZgVIgCAAIgPAAIACgBIAPAAIACgCIAIgGIABAAIgHAGIgCACIAAAAIgBABgAdGgVIgCAAIgPAAIABgBIAPAAIADgCIAHgGIACAAIgHAGIgDACIABAAIgBABgAcygVIgCAAIgOAAIABgBIAPAAIACgCIAIgGIABAAIgGAFIgDACIAAABIAAAAIgBABgAcfgVIgCAAIgPAAIABgBIAPAAIADgCIAHgGIACAAIgHAGIgDACIABAAIgBABgAcLgVIgCAAIgOAAIABgBIAPAAIAKgIIACAAIgIAGIgCACIABAAIgCABgAb4gVIgCAAIgPAAIACgBIAOAAIALgIIABAAIgJAHIgBABIABAAIgBABgAblgVIgDAAIgOAAIABgBIAPAAIADgCIAHgGIACAAIgKAIIAAAAIgBABgAbRgVIgCAAIgPAAIACgBIAPAAIACgCIAIgGIABAAIgKAIIABAAIgBABgAa+gVIgCAAIgPAAIAAgBIABAAIAPAAIADgCIAHgGIACAAIgDACIgHAFIAAABIABAAIgCABgAaqgVIgCAAIgPAAIACgBIAPAAIACgCIAIgGIABAAIgHAGIgCACIAAAAIgBABgAfYggIgOAAIABgBIAPAAIAGgGIADgCIADAAIgLAJgAfHggIgCAAIgOAAIABgBIAPAAIAFgEIAGgEIABAAIgIAGIgCACIABAAIgCABgAe0ggIgCAAIgPAAIACgBIAOAAIALgIIACAAIgIAGIgDACIABAAIgBABgAegggIgBAAIgPAAIABgBIAPAAIADgCIAHgGIACAAIgFAEIgFAEIAAAAIgBABgAeNggIgCAAIgPAAIACgBIAPAAIAKgIIACAAIgIAGIgCACIgBABgAd6ggIgCAAIgPAAIABgBIAPAAIADgCIAIgGIABAAIgFAEIgFAEIABAAIgCABgAdmggIgCAAIgOAAIABgBIAPAAIACgCIAIgGIACAAIgKAIIAAAAIAAAAIgBABgAdTggIgCAAIgPAAIABgBIAPAAIALgIIABAAIgHAGIgDACIABAAIgCABgAc/ggIgCAAIgPAAIACgBIAPAAIAFgEIAFgEIACAAIgIAGIgCACIAAAAIgBABgAcsggIgCAAIgPAAIABgBIAPAAIAGgEIAFgEIACAAIgKAIIgBAAIABAAIgCABgAcYggIgCAAIgPAAIACgBIAPAAIAFgEIAFgEIACAAIgFAEIgFAEIAAAAIgBABgAcFggIgCAAIgPAAIABgBIAPAAIALgIIACAAIgFAEIgGAEIABAAIgCABgAbyggIgCAAIgQAAIACgBIAPAAIALgIIABAAIgFAEIgFAEIABAAIgCABgAbeggIgCAAIgPAAIACgBIAPAAIACgCIAIgGIACAAIgIAGIgCACIAAAAIgBABgAbLggIgCAAIgPAAIABgBIAPAAIADgCIAHgGIACAAIgHAGIgDACIABAAIgCABgAa3ggIgCAAIgPAAIACgBIAPAAIAKgIIACAAIgIAGIgCACIAAAAIgBABg");
	this.shape_34.setTransform(223.1,266.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(0,0,0,0.153)").s().p("A/mAVIgLgLIDlAAIAMALgAajgOIgOgGIFPAAIAPAGg");
	this.shape_35.setTransform(224.7,263);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.lf(["rgba(255,255,255,0.251)","rgba(0,0,0,0.153)"],[0,1],0,2.3,0,-2.2).s().p("AidAXIAegdIALAJIDlAAIAFgHIACgCIAGAAIAAgDIAOgNIASAAIgtAtg");
	this.shape_36.setTransform(34.1,264.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.lf(["rgba(255,255,255,0.251)","rgba(0,0,0,0.153)"],[0,1],0,0.8,0,-0.7).s().p("AidAIIBIgPIDzAAIghAPg");
	this.shape_37.setTransform(34.2,241.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.lf(["rgba(0,0,0,0.153)","rgba(0,0,0,0.353)"],[0,1],-1.5,0,1.7,0).s().p("AgPhhIAfgQIAADFIgRARIgOANg");
	this.shape_38.setTransform(48.4,252.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("rgba(255,255,255,0.4)").s().p("AbgCCQgBAAAAgBQAAAAAAAAQAAgBAAAAQAAgBABAAQACgCAFgBQAHgDAFABQAGgBADADQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAIAAAAIgJADQgFACgGAAQgHAAgBgCgA/YA2QgRAAgGgLQgCgFAAgHIAAh8QAAgHACgGQAGgLARAAIDHAAQAYAAAAAYIAAB8QAAAXgYAAgAbHAVIAgiYIEKAAIgfCYg");
	this.shape_39.setTransform(223.4,256.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("rgba(0,0,0,0.012)").s().p("A8QCLIjjAAIgcAAIAAgRIABAAIEQAAIAAARgA73BbIgTAAIjmAAIgdAAIAAjVIEcAAIAADTIAAACgA/6hYQgCAGAAAHIAAB8QAAAHACAFQAGALAQAAIDIAAQAYAAgBgXIAAh8QABgYgYAAIjIAAQgQAAgGALgAaWA8IAqjGIFQAAIgqDGgAa8AnIEKAAIAgiYIkLAAg");
	this.shape_40.setTransform(224.6,254.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7}]}).wait(411));
	
	


	// connector
	this.instance_14 = new lib.Connectoranimation();
	this.instance_14.setTransform(411.8,216.7,0.771,0.771,0,0,0,5,36.6);
	this.instance_14.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(333).to({regY:0,y:188.5,alpha:1},0).wait(2).to({alpha:0},0).wait(2).to({alpha:1},0).wait(2).to({alpha:0},0).wait(2).to({alpha:1},0).wait(2).to({alpha:0},0).wait(2).to({alpha:1},0).wait(2).to({alpha:0},0).wait(2).to({alpha:1},0).wait(2).to({alpha:0},0).wait(2).to({alpha:1},0).wait(2).to({alpha:0},0).wait(2).to({alpha:1},0).wait(2).to({alpha:0},0).wait(2).to({alpha:1},0).wait(2).to({alpha:0},0).wait(2).to({alpha:1},0).wait(2).wait(43).to({regY:36.6,y:216.7,mode:"synched",startPosition:0},0).wait(1));

	// wireless signal
	this.instance_15 = new lib.wireless_signal_1();
	this.instance_15.setTransform(189,144.2,0.924,0.924,0,-36.6,143.3);
	this.instance_15.alpha = 0;

	this.instance_16 = new lib.wireless_signal_1();
	this.instance_16.setTransform(189,144.2,0.924,0.924,0,-36.6,143.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_15,p:{alpha:0,rotation:0,skewX:-36.6,skewY:143.3,x:189}}]}).to({state:[{t:this.instance_15,p:{alpha:1,rotation:0,skewX:-36.6,skewY:143.3,x:189}}]},162).to({state:[{t:this.instance_15,p:{alpha:0,rotation:0,skewX:-36.6,skewY:143.3,x:189}}]},2).to({state:[{t:this.instance_15,p:{alpha:1,rotation:0,skewX:-36.6,skewY:143.3,x:189}}]},2).to({state:[{t:this.instance_15,p:{alpha:0,rotation:0,skewX:-36.6,skewY:143.3,x:189}}]},2).to({state:[{t:this.instance_15,p:{alpha:1,rotation:0,skewX:-36.6,skewY:143.3,x:189}}]},2).to({state:[{t:this.instance_15,p:{alpha:0,rotation:0,skewX:-36.6,skewY:143.3,x:189}}]},2).to({state:[{t:this.instance_15,p:{alpha:1,rotation:0,skewX:-36.6,skewY:143.3,x:189}}]},2).to({state:[{t:this.instance_15,p:{alpha:0,rotation:0,skewX:-36.6,skewY:143.3,x:189}}]},2).to({state:[{t:this.instance_15,p:{alpha:1,rotation:0,skewX:-36.6,skewY:143.3,x:189}}]},2).to({state:[{t:this.instance_15,p:{alpha:0,rotation:0,skewX:-36.6,skewY:143.3,x:189}}]},2).to({state:[{t:this.instance_15,p:{alpha:1,rotation:0,skewX:-36.6,skewY:143.3,x:189}}]},2).to({state:[{t:this.instance_15,p:{alpha:0,rotation:0,skewX:-36.6,skewY:143.3,x:189}}]},2).to({state:[{t:this.instance_15,p:{alpha:1,rotation:0,skewX:-36.6,skewY:143.3,x:189}}]},2).to({state:[{t:this.instance_16},{t:this.instance_15,p:{alpha:1,rotation:36.7,skewX:0,skewY:0,x:256.9}}]},24).to({state:[{t:this.instance_15,p:{alpha:1,rotation:0,skewX:-36.6,skewY:143.3,x:189}}]},2).to({state:[{t:this.instance_16},{t:this.instance_15,p:{alpha:1,rotation:36.7,skewX:0,skewY:0,x:256.9}}]},2).to({state:[{t:this.instance_15,p:{alpha:1,rotation:0,skewX:-36.6,skewY:143.3,x:189}}]},2).to({state:[{t:this.instance_16},{t:this.instance_15,p:{alpha:1,rotation:36.7,skewX:0,skewY:0,x:256.9}}]},2).to({state:[{t:this.instance_15,p:{alpha:1,rotation:0,skewX:-36.6,skewY:143.3,x:189}}]},2).to({state:[{t:this.instance_16},{t:this.instance_15,p:{alpha:1,rotation:36.7,skewX:0,skewY:0,x:256.9}}]},2).to({state:[{t:this.instance_15,p:{alpha:1,rotation:0,skewX:-36.6,skewY:143.3,x:189}}]},2).to({state:[{t:this.instance_16},{t:this.instance_15,p:{alpha:1,rotation:36.7,skewX:0,skewY:0,x:256.9}}]},2).to({state:[{t:this.instance_15,p:{alpha:1,rotation:0,skewX:-36.6,skewY:143.3,x:189}}]},2).to({state:[{t:this.instance_16},{t:this.instance_15,p:{alpha:1,rotation:36.7,skewX:0,skewY:0,x:256.9}}]},2).to({state:[{t:this.instance_15,p:{alpha:1,rotation:0,skewX:-36.6,skewY:143.3,x:189}}]},2).to({state:[{t:this.instance_16},{t:this.instance_15,p:{alpha:1,rotation:36.7,skewX:0,skewY:0,x:256.9}}]},2).to({state:[{t:this.instance_16},{t:this.instance_15,p:{alpha:1,rotation:36.7,skewX:0,skewY:0,x:256.9}}]},2).wait(175));

	// Lines
	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(2,2,1).p("AAAFvIAArd");
	this.shape_41.setTransform(35,211.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_41}]}).wait(411));	
	
	var _this = this;
	var image =  new Image();
	image.onload = function(ev)
	{			
		var _bt = new createjs.Bitmap(ev.target);
		_bt.cursor = "pointer";
		_this.addChild(_bt);
		_bt.x=415
		_bt.y=300
		
		var textbox = getCJSElement("TEXTBOX",{x:2,y:100,width:450,height:170,bodyId:"ID_InfoBody",div:"commonMediaText", titleId:"ID_InfoTitle",animated:0,subType:"CLOSABLE"});		
		_this.addChild(textbox);
		textbox.visible = false;
		
		var text = getCJSElement("TEXT",{x:376,y:285,width:77.85,expand:"left",align:"center",compId:"ID_TipText"});
		text.visible=false
		_this.addChild(text);
		_bt.onClick = function()
		{
			textbox.visible = true;
			update = true;
		}
		_bt.onMouseOver = function()
		{
			text.visible = true;
			update = true;
		}
		_bt.onMouseOut = function()
		{
			text.visible = false;
			update = true;
		}
		update = true;
	}
	image.src = "images/paper.png"
	
	

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(13,41,419.3,256.3);


(lib.Main = function() {
	this.initialize();

	// slide1
	this.anim01 = new lib.animation01();
	this.anim01.setTransform(223.3,160,1,1,0,0,0,221.7,167.7);
	this.addChild(this.anim01);

}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(14.6,61.3,419.3,256.3);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;