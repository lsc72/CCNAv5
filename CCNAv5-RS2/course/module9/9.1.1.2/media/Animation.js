(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.classesmediaMediaObject = function() {
	this.initialize();

	// Main
	this.instance = new lib.Main();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,470,400);


// symbols:
(lib._9112 = function() {
	this.initialize(img._9112);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,653,556);


(lib.Arrow = function() {
	this.initialize(img.Arrow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,40,27);


(lib.Arrow1 = function() {
	this.initialize(img.Arrow1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,40,27);


(lib.computer = function() {
	this.initialize(img.computer);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,143,119);


(lib.envelope_closed_static = function() {
	this.initialize(img.envelope_closed_static);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,123,79);


(lib.IBM_mainframe = function() {
	this.initialize(img.IBM_mainframe);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,122,151);


(lib.arrowbg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Arrow();
	this.instance.setTransform(0,11,0.412,0.406,0,180,0);

	this.instance_1 = new lib.Arrow1();
	this.instance_1.setTransform(-2,0,0.413,0.406);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.5,11);


(lib.fade_19 = function() {
	this.initialize();

	// txt
	this.text = new DOMObject({type:"TEXT",compId:"ID_s1_txt20",width:"84",expand:"left+right",align:"left",size:"10"});
	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,84,15.2);


(lib.fade_17 = function() {
	this.initialize();

	// txt
	this.text = new DOMObject({type:"TEXT",compId:"ID_s1_txt17",width:"84",expand:"down",align:"right",size:"10"});

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,82,15.2);


(lib.fade_15 = function() {
	this.initialize();

	// txt
	this.text = new DOMObject({type:"TEXT",compId:"ID_s1_txt16",width:"84",expand:"left+right",align:"left",size:"10"});

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,84,15.2);


(lib.fade_13 = function() {
	this.initialize();

	// txt
	this.text = new DOMObject({type:"TEXT",compId:"ID_s1_txt13",width:"84",expand:"down",align:"right",size:"10"});

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,82,15.2);


(lib.fade_11 = function() {
	this.initialize();

	// txt
	this.text = new DOMObject({type:"TEXT",compId:"ID_s1_txt12",width:"84",expand:"left+right",align:"left",size:"10"});

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,84,15.2);


(lib.fade_09 = function() {
	this.initialize();

	// txt
	this.text = new DOMObject({type:"TEXT",compId:"ID_s1_txt10",width:"84",expand:"left+right",align:"left",size:"10"});

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,82,15.2);


(lib.fade_07 = function() {
	this.initialize();

	// txt
	this.text = new DOMObject({type:"TEXT",compId:"ID_s1_txt07",width:"84",expand:"down",align:"right",size:"10"});

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,83,15.2);


(lib.fade_05 = function() {
	this.initialize();

	// txt
	this.text = new DOMObject({type:"TEXT",compId:"ID_s1_txt05",width:"84",expand:"down",align:"right",size:"10"});
	this.text.setTransform(-0.9,0);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.9,0,84,15.2);


(lib.fade_03 = function() {
	this.initialize();

	// txt
	this.text = new DOMObject({type:"TEXT",compId:"ID_s1_txt04",width:"84",expand:"left+right",align:"left",size:"10"});
	this.text.setTransform(0.5,1);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.5,1,83,15.2);


(lib.fade_01 = function() {
	this.initialize();

	// txt
	this.text = new DOMObject({type:"TEXT",compId:"ID_s1_txt01",width:"84",expand:"down",align:"right",size:"10"});
	this.text.setTransform(-0.9,1);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.9,1,83,15.2);


(lib.envelopeclosedstatic = function() {
	this.initialize();

	// jpg
	this.instance = new lib.envelope_closed_static();
	this.instance.setTransform(-37.5,-26.1,0.667,0.663);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-39.5,-26.1,82.1,52.4);


(lib.fade_20 = function() {
	this.initialize();

	// txt
	this.text = new DOMObject({type:"TEXT",compId:"ID_s1_txt19",width:"224",expand:"up",align:"right",size:"10"});
	this.text.setTransform(-2,-0.9);

	// Layer 1
	this.instance = new lib.envelopeclosedstatic();
	this.instance.setTransform(240,10.5,0.4,0.4,0,0,0,1.5,0);

	this.instance_1 = new lib.arrowbg("synched",1,false);
	this.instance_1.setTransform(5.4,11.7,1,1,180,0,0,8.4,9.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#F68026").ss(3,0,1).p("AzKAAMAmVAAA");
	this.shape.setTransform(130.1,15.9);

	this.addChild(this.shape,this.instance_1,this.instance,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2.6,-0.9,260.9,22.4);


(lib.fade_18 = function() {
	this.initialize();

	// txt
	this.text = new DOMObject({type:"TEXT",compId:"ID_s1_txt18",width:"224",expand:"up",align:"left",size:"10"});
	this.text.setTransform(37,0);

	// Layer 1
	this.instance = new lib.envelopeclosedstatic();
	this.instance.setTransform(16.5,10.5,0.4,0.4,0,0,0,1.5,0);

	this.instance_1 = new lib.arrowbg("synched",0,false);
	this.instance_1.setTransform(250.4,19.7,1,1,0,0,0,8.3,9.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#652C8A").ss(3,0,1).p("ATLAAMgmVAAA");
	this.shape.setTransform(127.7,15.9);

	this.addChild(this.shape,this.instance_1,this.instance,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,258.6,21);


(lib.fade_16 = function() {
	this.initialize();

	// txt
	this.text = new DOMObject({type:"TEXT",compId:"ID_s1_txt15",width:"224",expand:"up",align:"right",size:"10"});
	this.text.setTransform(-2,1);

	// Layer 1
	this.instance = new lib.envelopeclosedstatic();
	this.instance.setTransform(240,10.5,0.4,0.4,0,0,0,1.5,0);

	this.instance_1 = new lib.arrowbg("synched",1,false);
	this.instance_1.setTransform(5.4,11.7,1,1,180,0,0,8.4,9.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#F68026").ss(3,0,1).p("AzKAAMAmVAAA");
	this.shape.setTransform(130.1,15.9);

	this.addChild(this.shape,this.instance_1,this.instance,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2.6,-1.9,260.9,23.4);


(lib.fade_14 = function() {
	this.initialize();

	// txt
	this.text = new DOMObject({type:"TEXT",compId:"ID_s1_txt14",width:"224",expand:"up",align:"left",size:"10"});
	this.text.setTransform(37,-0.9);

	// Layer 1
	this.instance = new lib.envelopeclosedstatic();
	this.instance.setTransform(16.5,10.5,0.4,0.4,0,0,0,1.5,0);

	this.instance_1 = new lib.arrowbg("synched",0,false);
	this.instance_1.setTransform(250.4,20.7,1,1,0,0,0,8.3,9.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#652C8A").ss(3,0,1).p("ATLAAMgmVAAA");
	this.shape.setTransform(127.7,15.9);

	this.addChild(this.shape,this.instance_1,this.instance,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-0.9,258.6,22.9);


(lib.fade_12 = function() {
	this.initialize();

	// txt
	this.text = new DOMObject({type:"TEXT",compId:"ID_s1_txt11",width:"224",expand:"up",align:"right",size:"10"});	
	this.text.setTransform(-2,-0.9);

	// Layer 1
	this.instance = new lib.envelopeclosedstatic();
	this.instance.setTransform(240,10.5,0.4,0.4,0,0,0,1.5,0);

	this.instance_1 = new lib.arrowbg("synched",1,false);
	this.instance_1.setTransform(5.4,11.7,1,1,180,0,0,8.4,9.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#F68026").ss(3,0,1).p("AzKAAMAmVAAA");
	this.shape.setTransform(130.1,15.9);

	this.addChild(this.shape,this.instance_1,this.instance,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2.6,-0.9,260.9,22.4);


(lib.fade_10 = function() {
	this.initialize();

	// txt
	this.text = new DOMObject({type:"TEXT",compId:"ID_s1_txt09",width:"224",expand:"up",align:"right",size:"10"});	
	this.text.setTransform(-2,-0.7);

	// Layer 1
	this.instance = new lib.envelopeclosedstatic();
	this.instance.setTransform(240,10.5,0.4,0.4,0,0,0,1.5,0);

	this.instance_1 = new lib.arrowbg("synched",1,false);
	this.instance_1.setTransform(5.4,11.7,1,1,180,0,0,8.4,9.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#F68026").ss(3,0,1).p("AzKAAMAmVAAA");
	this.shape.setTransform(130.1,15.9);

	this.addChild(this.shape,this.instance_1,this.instance,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2.6,-0.7,260.9,22.1);


(lib.fade_08 = function() {
	this.initialize();

	// txt
	 this.text = new DOMObject({type:"TEXT",compId:"ID_s1_txt08",width:"224",expand:"up",align:"left",size:"10"});	
	this.text.setTransform(37,1);

	// Layer 1
	this.instance = new lib.envelopeclosedstatic();
	this.instance.setTransform(16.5,10.5,0.4,0.4,0,0,0,1.5,0);

	this.instance_1 = new lib.arrowbg("synched",0,false);
	this.instance_1.setTransform(250.4,20.7,1,1,0,0,0,8.3,9.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#652C8A").ss(3,0,1).p("ATLAAMgmVAAA");
	this.shape.setTransform(127.7,15.9);

	this.addChild(this.shape,this.instance_1,this.instance,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-1.9,258.6,23.9);


(lib.fade_06 = function() {
	this.initialize();

	// txt
	this.text = new DOMObject({type:"TEXT",compId:"ID_s1_txt06",width:"224",expand:"up",align:"left",size:"10"});	
	this.text.setTransform(37,-0.1);

	// Layer 1
	this.instance = new lib.envelopeclosedstatic();
	this.instance.setTransform(16.5,10.5,0.4,0.4,0,0,0,1.5,0);

	this.instance_1 = new lib.arrowbg("synched",0,false);
	this.instance_1.setTransform(250.4,20.7,1,1,0,0,0,8.3,9.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#652C8A").ss(3,0,1).p("ATLAAMgmVAAA");
	this.shape.setTransform(127.7,15.9);

	this.addChild(this.shape,this.instance_1,this.instance,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-0.1,258.6,22);


(lib.fade_04 = function() {
	this.initialize();

	// Layer 2
	this.text = new DOMObject({type:"TEXT",compId:"ID_s1_txt03",width:"224",expand:"up",align:"right",size:"10"});
	this.text.setTransform(-2,-1.9);

	// Layer 1
	this.instance = new lib.envelopeclosedstatic();
	this.instance.setTransform(240,10.5,0.4,0.4,0,0,0,1.5,0);

	this.instance_1 = new lib.arrowbg("synched",1,false);
	this.instance_1.setTransform(5.4,11.7,1,1,180,0,0,8.4,9.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#F68026").ss(3,0,1).p("AzKAAMAmVAAA");
	this.shape.setTransform(130.1,15.9);

	this.addChild(this.shape,this.instance_1,this.instance,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2.6,-1.9,260.9,23.4);


(lib.fade_02 = function() {
	this.initialize();

	// txt
	this.text = new DOMObject({type:"TEXT",compId:"ID_s1_txt02",width:"224",expand:"up",align:"left",size:"10"});	
	this.text.setTransform(37,0);

	// envelope
	this.instance = new lib.envelopeclosedstatic();
	this.instance.setTransform(16.5,10.5,0.4,0.4,0,0,0,1.5,0);

	// arrow
	this.instance_1 = new lib.arrowbg("synched",0,false);
	this.instance_1.setTransform(250.4,20.7,1,1,0,0,0,8.3,9.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#652C8A").ss(3,0,1).p("ATLAAMgmVAAA");
	this.shape.setTransform(127.9,16.4);

	this.addChild(this.shape,this.instance_1,this.instance,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,258.6,21.9);


(lib.animation01 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// text 1
	this.instance = new lib.fade_01();
	this.instance.setTransform(43,71.3,1,1,0,0,0,42,8.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:43.5,alpha:1},9).wait(571));

	// arrow 1
	this.instance_1 = new lib.fade_02();
	this.instance_1.setTransform(215.8,73.5,1,1,0,0,0,128.9,10.7);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10).to({alpha:1},0).wait(571));

	// text 2
	this.instance_2 = new lib.fade_03();
	this.instance_2.setTransform(390.1,101.9,1,1,0,0,0,42,8.5);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(60).to({x:391.1,alpha:1},10).wait(511));

	// arrow 2
	this.instance_3 = new lib.fade_04();
	this.instance_3.setTransform(232.1,74.1,1,1,0,0,0,129.1,10.5);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(70).to({x:217.1,y:103.9,alpha:1},0).wait(511));

	// text 3
	this.instance_4 = new lib.fade_05();
	this.instance_4.setTransform(43,132.1,1,1,0,0,0,42,8.5);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(120).to({alpha:1},10).wait(451));

	// arrow 3
	this.instance_5 = new lib.fade_06();
	this.instance_5.setTransform(215.8,134.1,1,1,0,0,0,128.9,10.5);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(130).to({alpha:1},0).wait(451));

	// text 4
	this.instance_6 = new lib.fade_07();
	this.instance_6.setTransform(43,162.3,1,1,0,0,0,42,8.5);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(180).to({x:42.5,alpha:1},10).wait(391));

	// arrow 4
	this.instance_7 = new lib.fade_08();
	this.instance_7.setTransform(215.8,164.3,1,1,0,0,0,128.9,10.5);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(190).to({alpha:1},0).wait(391));

	// text 5
	this.instance_8 = new lib.fade_09();
	this.instance_8.setTransform(390.1,192.5,1,1,0,0,0,42,8.5);
	this.instance_8.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(240).to({x:392.1,alpha:1},10).wait(331));

	// arrow 5
	this.instance_9 = new lib.fade_10();
	this.instance_9.setTransform(217.1,194.5,1,1,0,0,0,129.1,10.5);
	this.instance_9.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(250).to({alpha:1},0).wait(331));

	// text 6
	this.instance_10 = new lib.fade_11();
	this.instance_10.setTransform(390.1,222.7,1,1,0,0,0,42,8.5);
	this.instance_10.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(300).to({x:391.1,alpha:1},10).wait(271));

	// arrow 6
	this.instance_11 = new lib.fade_12();
	this.instance_11.setTransform(217.1,224.7,1,1,0,0,0,129.1,10.5);
	this.instance_11.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(310).to({alpha:1},0).wait(271));

	// text 7
	this.instance_12 = new lib.fade_13();
	this.instance_12.setTransform(43,252.9,1,1,0,0,0,42,8.5);
	this.instance_12.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(360).to({alpha:1},10).wait(211));

	// arrow 7
	this.instance_13 = new lib.fade_14();
	this.instance_13.setTransform(215.8,254.9,1,1,0,0,0,128.9,10.5);
	this.instance_13.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(370).to({alpha:1},0).wait(211));

	// text 8
	this.instance_14 = new lib.fade_15();
	this.instance_14.setTransform(390.1,283.1,1,1,0,0,0,42,8.5);
	this.instance_14.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(420).to({x:391.1,alpha:1},10).wait(151));

	// arrow 8
	this.instance_15 = new lib.fade_16();
	this.instance_15.setTransform(217.1,285.1,1,1,0,0,0,129.1,10.5);
	this.instance_15.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(430).to({alpha:1},0).wait(151));

	// text 9
	this.instance_16 = new lib.fade_17();
	this.instance_16.setTransform(43,313.3,1,1,0,0,0,42,8.5);
	this.instance_16.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(490).to({alpha:1},10).wait(81));

	// arrow 9
	this.instance_17 = new lib.fade_18();
	this.instance_17.setTransform(215.8,315.3,1,1,0,0,0,128.9,10.5);
	this.instance_17.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(500).to({alpha:1},0).wait(81));

	// text 10
	this.instance_18 = new lib.fade_19();
	this.instance_18.setTransform(390.1,343.5,1,1,0,0,0,42,8.5);
	this.instance_18.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(560).to({x:391.1,alpha:1},10).wait(11));

	// arrow 10
	this.instance_19 = new lib.fade_20();
	this.instance_19.setTransform(217.1,345.5,1,1,0,0,0,129.1,10.5);
	this.instance_19.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(570).to({alpha:1},0).wait(11));

	// bg
	this.instance_20 = new lib._9112();
	this.instance_20.setTransform(0,-2,0.72,0.719);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_20}]}).wait(581));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,470,400);


(lib.slide_1 = function() {
	this.initialize();

	// animation
	this.anim01 = new lib.animation01();

	this.addChild(this.anim01);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,470,400);


(lib.Main = function() {
	this.initialize();

	// slide1
	this.slide01 = new lib.slide_1();

	this.addChild(this.slide01);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,470,400);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;