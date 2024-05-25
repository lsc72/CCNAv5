(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.classesmediaMediaObject = function() {
	this.initialize();

	// main
	this.instance = new lib.Main();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.7,34.4,436.4,319.4);


// symbols:
(lib.lines = function() {
	this.initialize(img.lines);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,438,73);


(lib.media_1121 = function() {
	this.initialize(img.media_1121);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,423,176);


(lib.topPart = function() {
	this.initialize(img.topPart);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,323,141);


(lib.txt2 = function() {
	this.initialize();

// Layer 2
//	this.text = new cjs.Text("ID_s1_txt07", "10px Arial", "#393536");



	this.text = new DOMObject({type:"TEXT",compId:"ID_s1_txt07",width:"104",expand:"left+right",align:"center"});
	this.text.setTransform(79,304.6);

	//this.text_1 = new cjs.Text("ID_s1_txt06", "10px Arial", "#393536");
	this.text_1 = new DOMObject({type:"TEXT",compId:"ID_s1_txt06",width:"104",expand:"down",align:"left",color:"#F68026"});


	this.text_1.setTransform(-82.9,127);

//	this.text_2 = new cjs.Text("ID_s1_txt05", "10px Arial", "#393536");
	this.text_2 = new DOMObject({type:"TEXT",compId:"ID_s1_txt05",width:"104",expand:"right",align:"left",color:"#F68026"});


 	this.text_2.setTransform(-82.9,64.6);

	//this.text_3 = new cjs.Text("ID_s1_txt04", "10px Arial", "#393536");
	this.text_3 = new DOMObject({type:"TEXT",compId:"ID_s1_txt04",width:"104",expand:"right",align:"left",color:"#F68026"});




	this.text_3.setTransform(-82.9,24);

	//this.text_4 = new cjs.Text("ID_s1_txt03", "10px Arial", "#393536");
	this.text_4 = new DOMObject({type:"TEXT",compId:"ID_s1_txt03",width:"104",expand:"left+right",align:"center"});


	this.text_4.setTransform(77.8,0.4);

	this.addChild(this.text_4,this.text_3,this.text_2,this.text_1,this.text);
	
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-132.6,0.4,265.3,319.4);


(lib.txt1 = function() {
	this.initialize();

// Layer 2
	//this.text_5 = new cjs.Text("ID_s1_txt02", "10px Arial", "#393536");
	this.text_5 = new DOMObject({type:"TEXT",compId:"ID_s1_txt02",width:"369.85",expand:"left+right",align:"center"});


	this.text_5.setTransform(-182.8,194);

//	this.text_6 = new cjs.Text("ID_s1_txt01", "10px Arial", "#393536");
	this.text_6 = new DOMObject({type:"TEXT",compId:"ID_s1_txt01",width:"104",expand:"left+right",align:"center"});



	this.text_6.setTransform(-60,0.7);

	this.addChild(this.text_6,this.text_5);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-51,0.7,102.5,180.7);


(lib.topPartMc = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.topPart();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,323,141);


(lib.lines2 = function() {
	this.initialize();

	// Layer 1
	this.instance_1 = new lib.lines();

	this.addChild(this.instance_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,438,73);


(lib.horizontalline = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,2,1).p("A2VAAMAsrAAA");
	this.shape.setTransform(143,0);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.bg1 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E6EBA8").s().rr(-217,-98,434,196,5);
	this.shape_1.setTransform(0,98);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-216.9,0,434,196);


(lib.Four_Box_Cross = function() {
	this.initialize();

	// shape
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#999999","#FFFFFF"],[0,1],3,4.2,-1,1.8).s().p("AAUAKIgNAGIgkgQIAPgPIAsAUIgKAF").cp();
	this.shape_2.setTransform(-3.3,-1.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#999999","#FFFFFF"],[0,1],-3.9,-1.6,0.4,0.9).s().p("AAQAQIgugVIAcAAIAAgKIAhAPIgPAQ").cp();
	this.shape_3.setTransform(-8,-3.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#999999","#FFFFFF"],[0,1],-5.2,-1.4,-1,0.9).s().p("AgHgPIAmARIgRAOIgCAAIgqgUIAKgFIANgG").cp();
	this.shape_4.setTransform(2.9,1.7);



	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#999999","#FFFFFF"],[0,1],3.9,5.2,-0.6,2.5).s().p("AAJAQIgmgRIARgOIAqATIgVAAIAAAM").cp();
	this.shape_5.setTransform(7.4,3.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#999999","#FFFFFF"],[0,1],6.8,0.5,1.9,0.5).s().p("AgpgJIBTAAIAAATIhTAAIAAgT").cp();
	this.shape_6.setTransform(4.1,6.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#999999","#FFFFFF"],[0,1],-7.8,0,-1.4,0).s().p("AApAKIhRAAIAAgTIBRAAIAAAT").cp();
	this.shape_7.setTransform(-4.2,6.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#999999","#FFFFFF"],[0,1],-5.8,4.6,-0.3,1.4).s().p("AAYgVIAOgGIAVANIgLAFIhQAlIAAgLIgaAAIBSgm").cp();
	this.shape_8.setTransform(-5,2.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#999999","#FFFFFF"],[0,1],-7.1,0,-1.4,0).s().p("AgmgJIBNAAIAAATIhNAAIAAgT").cp();
	this.shape_9.setTransform(-4.5,-6.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#999999","#FFFFFF"],[0,1],6.8,0.2,2.2,0.2).s().p("AgsgJIBZAAIAAATIhZAAIAAgT").cp();
	this.shape_10.setTransform(3.9,-6.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#999999","#FFFFFF"],[0,1],7.2,-3.9,2,-0.9).s().p("AgmAdIgVgNIAKgFIBVgnIAAAMIAYAAIhUAnIgOAG").cp();
	this.shape_11.setTransform(4.7,-2.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("ABUBOIAAgVIAAgFIAAgMIAVAAIByAAIAAA3IiHAAIAAgRABUgyIAAgGIAAgVIAAgRICHAAIAAA3IhwAAIgXAAIAAgLAhThNIAAAVIAAAIIAAAJIgcAAIhrAAIAAg3ICHAAIAAARAhtAoIAaAAIAAAKIAAAHIAAAVIAAARIiHAAIAAg3IBtAA").cp();

	// shadow
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(0,0,0,0.502)").s().p("ABUheICHAAIAAA3IhwAAIhWAnIBUAoIByAAIAAA3IiHAAIAAgRIinAAIAAARIiHAAIAAg3IBtAAIBUgoIhWgnIhrAAIAAg3ICHAAIAAARICnAAIAAgRABUg4IinAAIAAAIIBSAnIBVgpIAAgGAhTA5ICnAAIAAgFIhVgpIhSAnIAAAH").cp();
	this.shape_13.setTransform(2,2);

	this.addChild(this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-21.9,-9.5,46,21.2);



(lib.anim = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{},true);

	// lazy text
	this.instance_2 = new lib.txt2();
	this.instance_2.setTransform(84,161,1,1,0,0,0,0,160.5);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(104).to({alpha:1},19).wait(1));

	// dashed lines
	this.instance_3 = new lib.lines2();
	this.instance_3.setTransform(2.5,89.9,0.031,1,0,0,0,219.8,36.5);
	this.instance_3.alpha = 0;

//	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(88).to({alpha:1},0).to({regX:219.3,scaleX:1.01,x:214.6},19).wait(17));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(88).to({alpha:1},0).to({regX:219.3,scaleX:0.99,x:214.6},19).wait(17));


	// lazy text 2
	this.instance_4 = new lib.txt1();
	this.instance_4.setTransform(215,199.9,1,1,0,0,0,0,91);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(50).to({alpha:0},20).wait(54));

	// bottom image
	this.instance_5 = new lib.media_1121();
	this.instance_5.setTransform(8,88);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5}]}).wait(124));

	// toppart
	this.instance_6 = new lib.topPartMc();
	this.instance_6.setTransform(216.7,90.2,1,1,0,0,0,161.5,70.5);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(71).to({_off:false},0).to({alpha:1},19).wait(34));

	// horizontal line
	this.instance_7 = new lib.horizontalline();
	this.instance_7.setTransform(210,147.3,1,1,0,0,0,143,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(50).to({alpha:0},20).wait(54));

	// bg1
	this.instance_8 = new lib.bg1();
	this.instance_8.setTransform(215,200,1,1,0,0,0,0,98);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(50).to({alpha:0},20).wait(54));

	// bg3
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E6EBA8").s().rr(-72,-98,144,196,5);
	this.shape_14.setTransform(360,200);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E6EBA8").s().rr(-68,-98,136,196,5);
	this.shape_15.setTransform(215,200);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E6EBA8").s().rr(-72,-98,144,196,5);
	this.shape_16.setTransform(70,200);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]}).wait(124));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.3,-0.5,436.4,319.4);


(lib.slide_1 = function() {
	this.initialize();

	// anim
	this.anim = new lib.anim();
	this.anim.setTransform(11.8,41.8,1,1,0,0,0,6.8,6.8);

	this.addChild(this.anim);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.7,34.4,436.4,319.4);


(lib.Main = function() {
	this.initialize();

	// slide1
	this.slide01 = new lib.slide_1();
	this.slide01.setTransform(202.5,126.5,1,1,0,0,0,202.5,126.5);

	this.addChild(this.slide01);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.7,34.4,436.4,319.4);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;