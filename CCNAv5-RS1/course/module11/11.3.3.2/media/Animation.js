(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.classesmediaMediaObject = function() {
	this.initialize();

	// main
	this.instance = new lib.Main();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(2,43.6,419,272.5);


// symbols:
(lib.orangearrow = function() {
	this.initialize(img.orangearrow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,18,12);


(lib.ID_txt08 = function() {
	this.initialize();

	// ID_txt08
	this.text = new DOMObject({type:"TEXT" , align:"right" ,compId:"ID_txt08", width:"100", expand:"down"});	
	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,107,16.2);


(lib.ID_txt07 = function() {
	this.initialize();

	// ID_txt07
	this.text = new DOMObject({type:"TEXT" , align:"right" ,compId:"ID_txt07", width:"100", expand:"down"});	
	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,107,30.4);


(lib.ID_txt05 = function() {
	this.initialize();

	// ID_txt08
	this.text = new DOMObject({type:"TEXT" , align:"right" ,compId:"ID_txt05", width:"99", expand:"up+down"});	
	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,107,30.4);


(lib.ID_txt04 = function() {
	this.initialize();

	// ID_txt08
	this.text = new DOMObject({type:"TEXT" , align:"right" ,compId:"ID_txt04", width:"100", expand:"down"});	
	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,107,16.2);


(lib.ID_txt03 = function() {
	this.initialize();

	// ID_txt03
	this.text = new DOMObject({type:"TEXT" , align:"right" ,compId:"ID_txt03", width:"100", expand:"up"});	
	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,107,16.2);


(lib.ID_txt02 = function() {
	this.initialize();

	// ID_txt02
	this.text = new DOMObject({type:"TEXT" , align:"right" ,compId:"ID_txt02", width:"100", expand:"up+down"});	
	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,107,16.2);


(lib.ID_txt01 = function() {
	this.initialize();

	// ID_txt01
	this.text = new DOMObject({type:"TEXT" , align:"right" ,compId:"ID_txt01", width:"100", expand:"down"});	
	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,107,16.2);


(lib.ID_txt06 = function() {
	this.initialize();

	// ID_txt06
	this.text = new DOMObject({type:"TEXT" , align:"right" ,compId:"ID_txt06", width:"100", expand:"down"});	
	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,107,30.4);


(lib.Arrow = function() {
	this.initialize();

	// arrow
	this.instance = new lib.orangearrow();
	this.instance.setTransform(0,-3.2,0.556,0.554);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-3.2,10,6.7);


(lib.highlight_8 = function() {
	this.initialize();

	// ID_txt08
	this.instance = new lib.ID_txt08();
	this.instance.setTransform(90,11.2,1,1,0,0,0,64,8.5);

	// highlight
	this.instance_1 = new lib.Arrow();
	this.instance_1.setTransform(137.5,11.2,1.5,1.5,180,0,0,5,0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#F26200").ss(3,1,1).p("AB9AAIj5AA");
	this.shape.setTransform(154,11.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#F26200").ss(2,1,1).p("AzOhvMAm6AAAIAACAIAABfImaAAMgggAAAIgdAAIAAjfg");
	this.shape_1.setTransform(293,11.1);

	this.addChild(this.shape_1,this.shape,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,419,22.5);


(lib.highlight_7 = function() {
	this.initialize();

	// ID_txt07
	this.instance = new lib.ID_txt07();
	this.instance.setTransform(90,10.8,1,1,0,0,0,64,8.5);

	// highlight
	this.instance_1 = new lib.Arrow();
	this.instance_1.setTransform(137.5,9.5,1.5,1.5,180,0,0,5,0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#F26200").ss(3,1,1).p("AB9AAIj5AA");
	this.shape.setTransform(154,9.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#F26200").ss(2,1,1).p("ATsBmMgnXAAAIAAjLMAnXAAAg");
	this.shape_1.setTransform(293,9.5);

	this.addChild(this.shape_1,this.shape,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0.5,419,32.2);

(lib.highlight_6 = function() {
	this.initialize();

	// ID_txt06
	this.instance_1 = new lib.ID_txt06();
	this.instance_1.setTransform(90,8,1,1,0,0,0,64,8.5);


	// highlight
	this.instance = new lib.Arrow();
	this.instance.setTransform(137.5,6,1.5,1.5,180,0,0,5,0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#F26200").ss(3,1,1).p("AB9AAIj5AA");
	this.shape.setTransform(154,6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#F26200").ss(2,1,1).p("ATsBmMgnXAAAIAAjLMAnXAAAg");
	this.shape_1.setTransform(293,7);

	this.addChild(this.shape_1,this.shape,this.instance,this.text,this.instance_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,419,30.4);

(lib.highlight_5 = function() {
	this.initialize();

	// ID_txt05
	this.instance = new lib.ID_txt05();
	this.instance.setTransform(90,21.8,1,1,0,0,0,64,8.5);

	// higjlight
	this.instance_1 = new lib.Arrow();
	this.instance_1.setTransform(137.5,21.9,1.5,1.5,180,0,0,5,0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#F26200").ss(3,1,1).p("AB9hfIiUAAIAAC/IhlAA");
	this.shape.setTransform(153.7,12.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#F26200").ss(2,1,1).p("ATsAyMgnXAAAIAAhjMAnXAAAg");
	this.shape_1.setTransform(293,0);

	this.addChild(this.shape_1,this.shape,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,419,48.7);


(lib.highlight_4 = function() {
	this.initialize();

	// ID_txt04
	this.instance = new lib.ID_txt04();
	this.instance.setTransform(90,2.5,1,1,0,0,0,64,8.5);

	// highlights
	this.instance_1 = new lib.Arrow();
	this.instance_1.setTransform(137.5,0,1.5,1.5,180,0,0,5,0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#F26200").ss(3,1,1).p("AB9AAIj5AA");
	this.shape.setTransform(154,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#F26200").ss(2,1,1).p("ATsAyMgnXAAAIAAhjMAnXAAAg");
	this.shape_1.setTransform(293,0);

	this.addChild(this.shape_1,this.shape,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,419,18);


(lib.highlight_3 = function() {
	this.initialize();

	// ID_txt03
	this.instance = new lib.ID_txt03();
	this.instance.setTransform(90,3,1,1,0,0,0,64,8.5);

	// highlights
	this.instance_1 = new lib.Arrow();
	this.instance_1.setTransform(137.5,3,1.5,1.5,180,0,0,5,0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#F26200").ss(3,1,1).p("AB9AAIj5AA");
	this.shape.setTransform(154,3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#F26200").ss(2,1,1).p("ATsBmMgnXAAAIAAjLMAnXAAAg");
	this.shape_1.setTransform(293,3);

	this.addChild(this.shape_1,this.shape,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,419,20.5);


(lib.highlight_2 = function() {
	this.initialize();

	// ID_txt02
	this.instance = new lib.ID_txt02();
	this.instance.setTransform(90,3,1,1,0,0,0,64,8.5);

	// highlight
	this.instance_1 = new lib.Arrow();
	this.instance_1.setTransform(137.5,3,1.5,1.5,180,0,0,5,0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#F26200").ss(3,1,1).p("AB9AAIj5AA");
	this.shape.setTransform(154,3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#F26200").ss(2,1,1).p("ATsD9MgnXAAAIAAn5MAnXAAAg");
	this.shape_1.setTransform(293,16.4);

	this.addChild(this.shape_1,this.shape,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,419,50.7);


(lib.highlight_1 = function() {
	this.initialize();

	// ID_txt01
	this.instance = new lib.ID_txt01();
	this.instance.setTransform(90,0.75,1,1,0,0,0,64,8.5);

	// highlights
	this.instance_1 = new lib.Arrow();
	this.instance_1.setTransform(137.5,0.75,1.5,1.5,180,0,0,5,0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#F26200").ss(3,1,1).p("AB9AAIj5AA");
	this.shape.setTransform(154,0.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#F26200").ss(2,1,1).p("ATsBmMgnXAAAIAAjLMAnXAAAg");
	this.shape_1.setTransform(293,0.75);

	this.addChild(this.shape_1,this.shape,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,1.4,419,20.5);


(lib.animation = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// highlight & text 8
	this.instance = new lib.highlight_8();
	this.instance.setTransform(195.8,301.9,1,1,0,0,0,228.8,10.2);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(489).to({alpha:1},10).wait(5));

	// highlight & text 7
	this.instance_1 = new lib.highlight_7();
	this.instance_1.setTransform(195.8,271.9,1,1,0,0,0,228.8,10.2);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(419).to({alpha:1},10).wait(75));

	// highlight & text 6
	this.instance_2 = new lib.highlight_6();
	this.instance_2.setTransform(195.8,241.9,1,1,0,0,0,228.8,10.2);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(349).to({alpha:1},10).wait(145));

	// highlight & text 5
	this.instance_3 = new lib.highlight_5();
	this.instance_3.setTransform(195.8,192.3,1,1,0,0,0,228.8,10.2);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(279).to({alpha:1},10).wait(215));

	// highlight & text 4
	this.instance_4 = new lib.highlight_4();
	this.instance_4.setTransform(195.8,182.4,1,1,0,0,0,228.8,10.2);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(209).to({alpha:1},10).wait(285));

	// highlight & text 3
	this.instance_5 = new lib.highlight_3();
	this.instance_5.setTransform(195.8,162.1,1,1,0,0,0,228.8,10.2);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(139).to({alpha:1},10).wait(355));

	// highlight & text 2
	this.instance_6 = new lib.highlight_2();
	this.instance_6.setTransform(195.8,126.9,1,1,0,0,0,228.8,25.6);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(69).to({alpha:1},10).wait(425));

	// highlight & text 1
	this.instance_7 = new lib.highlight_1();
	this.instance_7.setTransform(195.8,50.4,1,1,0,0,0,228.8,10.2);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({alpha:1},8).wait(495));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2,43.6,419,272.5);


(lib.Main = function() {
	this.initialize();

	// animation
	this.anim01 = new lib.animation();

	this.addChild(this.anim01);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(2,43.6,419,272.5);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;