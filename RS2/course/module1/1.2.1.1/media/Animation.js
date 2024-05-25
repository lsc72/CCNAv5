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
(lib.envelope_closed_static = function() {
	this.initialize(img.envelope_closed_static);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,123,79);


(lib.media_1211 = function() {
	this.initialize(img.media_1211);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,653,556);


(lib.tableMc = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("tablemc", "12px Times New Roman");
	this.text.lineHeight = 14;
	this.text.setTransform(0,-8.6);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-8.6,42.2,17.5);


(lib.bubble03 = function() {
	this.initialize();

	// Layer 1
	//this.text = new cjs.Text("bubble03", "12px Times New Roman");
	 this.text = new DOMObject({ type:"BUBBLE", compId:"ID_bubble03",  width:"90", height:"80", align:"left", tailPosition:"6", tailFlip:"0" });

	this.text.setTransform(8,-52);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-16.4,128,32.9);


(lib.bubble02 = function() {
	this.initialize();

	// Layer 1
	//this.text = new cjs.Text("bubble02", "12px Times New Roman");
		  this.text = new DOMObject({ type:"BUBBLE", compId:"ID_bubble02",  width:"90", height:"80", align:"left", tailPosition:"6", tailFlip:"0" });


	this.text.setTransform(6,-50);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-16.4,102,32.9);


(lib.bubble01 = function() {
	this.initialize();

	// Layer 1
	//this.text = new cjs.Text("ID_bubble01", "12px Times New Roman");
	  this.text = new DOMObject({ type:"BUBBLE", compId:"ID_bubble01",  width:"90", height:"80", align:"left", tailPosition:"6", tailFlip:"0" });
	 
	this.text.setTransform(-27,-37);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-8.6,67.6,17.5);


(lib.envelopeclosedstatic = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.envelope_closed_static();
	this.instance.setTransform(-39.5,-26.1,0.667,0.663);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-39.5,-26.1,82.1,52.4);


(lib.animation01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// speech bubble 3
	this.instance = new lib.bubble03();
	this.instance.setTransform(205,65.7,1,1,0,0,0,64,0);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(490).to({alpha:1},0).wait(73).to({alpha:0},0).wait(87));

	// packet 3
	this.instance_1 = new lib.envelopeclosedstatic();
	this.instance_1.setTransform(202.3,50,0.525,0.525,0,0,0,1.5,0);
	this.instance_1.alpha = 0;
	this.instance_1.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,2,3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(440).to({alpha:1},10).wait(14).to({y:117},21).wait(90).to({alpha:0},10).wait(5).to({x:397.4},0).to({alpha:1},10).wait(19).to({y:39.6,alpha:0},20).wait(11));

	// speech bubble 2
	this.instance_2 = new lib.bubble02();
	this.instance_2.setTransform(327,66.7,1,1,0,0,0,51,0);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(275).to({alpha:1},0).wait(75).to({alpha:0},0).wait(300));

	// packet 2
	this.instance_3 = new lib.envelopeclosedstatic();
	this.instance_3.setTransform(332.4,50,0.525,0.525,0,0,0,1.5,0);
	this.instance_3.alpha = 0;
	this.instance_3.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,2,3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(225).to({alpha:1},10).wait(14).to({y:117},21).wait(90).to({alpha:0},10).wait(5).to({x:72.3},0).to({alpha:1},10).wait(19).to({y:49,alpha:0},20).wait(226));

	// speech bubble 1
	this.instance_4 = new lib.bubble01();
	this.instance_4.setTransform(82.8,52,1,1,0,0,0,33.8,0);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(64).to({alpha:1},0).wait(71).to({alpha:0},0).wait(515));

	// packet 1
	this.instance_5 = new lib.envelopeclosedstatic();
	this.instance_5.setTransform(72.3,50,0.525,0.525,0,0,0,1.5,0);
	this.instance_5.alpha = 0;
	this.instance_5.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,2,3);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(10).to({alpha:1},10).wait(14).to({y:117},21).wait(90).to({alpha:0},10).wait(5).to({x:267.3},0).to({alpha:1},10).wait(19).to({y:49,alpha:0},20).wait(441));

	// Layer 3
	this.instance_6 = new lib.tableMc();
	this.instance_6.setTransform(102.1,242,1,1,0,0,0,21.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6}]}).wait(650));

	// bg
	this.instance_7 = new lib.media_1211();
	this.instance_7.setTransform(0,0,0.72,0.719);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7}]}).wait(650));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,470,400);


(lib.Main = function() {
	this.initialize();

	// anim01
	this.anim01 = new lib.animation01();

	this.addChild(this.anim01);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,470,400);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;