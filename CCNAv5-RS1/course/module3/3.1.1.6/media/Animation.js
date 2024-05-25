(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.classesmediaMediaObject = function() {
	this.initialize();

	// main
	this.instance = new lib.Main();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(25.4,33.5,396,41.4);


// symbols:
(lib.s3_bubble3 = function() {
	this.initialize();

	// ID_s3_txt02
	this.text = new cjs.Text("ID_s3_txt02_TP06_W137.95_H80", "11px Arial", "#393536");
	this.text.lineHeight = 13;
	this.text.lineWidth = 135;
	this.text.setTransform(-0.9,0.2);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.9,0.2,139,30.4);


(lib.s3_bubble1 = function() {
	this.initialize();

	// ID_s3_txt01
	this.text = new cjs.Text("ID_s3_txt01_TP06_W137.95_H80", "11px Arial", "#393536");
	this.text.lineHeight = 13;
	this.text.lineWidth = 135;
	this.text.setTransform(-56.9,0.2);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-56.9,0.2,139,30.4);


(lib.s2_bubble2 = function() {
	this.initialize();

	// ID_s1_txt03
	this.text = new cjs.Text("ID_s1_txt02_TP06_W137.95_H80", "11px Arial", "#393536");
	this.text.lineHeight = 13;
	this.text.lineWidth = 135;
	this.text.setTransform(0,0.2);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0.2,139,30.4);


(lib.s2_bubble1 = function() {
	this.initialize();

	// ID_s1_txt01
	this.text = new cjs.Text("ID_s2_txt01_TP06_W137.95_H80", "11px Arial", "#393536");
	this.text.lineHeight = 13;
	this.text.lineWidth = 135;
	this.text.setTransform(-56.9,0.2);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-56.9,0.2,139,30.4);


(lib.bubble4 = function() {
	this.initialize();

	// ID_s1_txt04
	this.text = new cjs.Text("ID_s1_txt04_TP06_W137.95_H80", "11px Arial", "#393536");
	this.text.lineHeight = 13;
	this.text.lineWidth = 135;
	this.text.setTransform(-0.9,0.2);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.9,0.2,139,30.4);


(lib.bubble3 = function() {
	this.initialize();

	// ID_s1_txt03
	this.text = new cjs.Text("ID_s1_txt03_TP06_W137.95_H80", "11px Arial", "#393536");
	this.text.lineHeight = 13;
	this.text.lineWidth = 135;
	this.text.setTransform(-56.9,0.2);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-56.9,0.2,139,30.4);


(lib.bubble2 = function() {
	this.initialize();

	// ID_s1_txt02
	this.text = new cjs.Text("ID_s1_txt02_TP06_W137.95_H80", "11px Arial", "#393536");
	this.text.lineHeight = 13;
	this.text.lineWidth = 135;
	this.text.setTransform(-0.9,0.2);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.9,0.2,139,30.4);


(lib.bubble1 = function() {
	this.initialize();

	// ID_s1_txt01
	this.text = new cjs.Text("ID_s1_txt01_TP06_W137.95_H80", "11px Arial", "#393536");
	this.text.lineHeight = 13;
	this.text.lineWidth = 135;
	this.text.setTransform(-55.9,0.2);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-55.9,0.2,139,30.4);


(lib.anim1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bubble4
	this.instance = new lib.bubble4();
	this.instance.setTransform(322.4,84.4,1,1,0,0,0,40,40);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(85).to({alpha:1},0).wait(65));

	// bubble3
	this.instance_1 = new lib.bubble3();
	this.instance_1.setTransform(122.4,73.4,1,1,0,0,0,40,40);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(85).to({alpha:1},0).wait(65));

	// bubble2
	this.instance_2 = new lib.bubble2();
	this.instance_2.setTransform(322.4,84.4,1,1,0,0,0,40,40);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(15).to({alpha:1},0).wait(47).wait(1).to({alpha:0},0).wait(87));

	// bubble1
	this.instance_3 = new lib.bubble1();
	this.instance_3.setTransform(122.4,73.4,1,1,0,0,0,40,40);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(15).to({alpha:1},0).wait(47).wait(1).to({alpha:0},0).wait(87));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(25.4,33.5,395,41.4);


(lib.anim_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bubbletext2
	this.instance = new lib.s3_bubble3();
	this.instance.setTransform(122.4,73.4,1,1,0,0,0,40,40);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(82).to({alpha:1},0).wait(30));

	// bubbletext1
	this.instance_1 = new lib.s3_bubble1();
	this.instance_1.setTransform(122.4,73.4,1,1,0,0,0,40,40);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(15).to({alpha:1},0).wait(30).to({alpha:0},0).wait(67));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(25.4,33.5,195,30.4);


(lib.anim_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bubble2
	this.instance = new lib.s2_bubble2();
	this.instance.setTransform(322.4,84.4,1,1,0,0,0,40,40);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(143).to({alpha:1},0).wait(45).to({alpha:0},0).wait(8));

	// bubble1
	this.instance_1 = new lib.s2_bubble1();
	this.instance_1.setTransform(122.4,73.4,1,1,0,0,0,40,40);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(15).to({alpha:1},0).wait(23).to({alpha:0},0).wait(14).to({alpha:1},0).wait(34).to({alpha:0},0).wait(14).to({alpha:1},0).wait(28).to({alpha:0},0).wait(68));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(25.4,33.5,396,41.4);


(lib.slide_3 = function() {
	this.initialize();

	// anim03
	this.anim03 = new lib.anim_3();
	this.anim03.setTransform(11.5,8.5,1,1,0,0,0,11.5,8.5);

	this.addChild(this.anim03);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(25.4,33.5,195,30.4);


(lib.slide_2 = function() {
	this.initialize();

	// anim_2
	this.anim02 = new lib.anim_2();
	this.anim02.setTransform(10.5,7,1,1,0,0,0,10.5,7);

	this.addChild(this.anim02);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(25.4,33.5,396,41.4);


(lib.slide_1 = function() {
	this.initialize();

	// anim01
	this.anim01 = new lib.anim1();
	this.anim01.setTransform(15.5,10,1,1,0,0,0,15.5,10);

	this.addChild(this.anim01);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(25.4,33.5,395,41.4);


(lib.Main = function() {
	this.initialize();

	// slide3
	this.slide03 = new lib.slide_3();
	this.slide03.setTransform(220,10.5,1,1,0,0,0,220,10.5);

	// slide2
	this.slide02 = new lib.slide_2();
	this.slide02.setTransform(202.5,126.5,1,1,0,0,0,202.5,126.5);

	// slide1
	this.slide01 = new lib.slide_1();
	this.slide01.setTransform(202.5,126.5,1,1,0,0,0,202.5,126.5);

	this.addChild(this.slide01,this.slide02,this.slide03);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(25.4,33.5,396,41.4);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;