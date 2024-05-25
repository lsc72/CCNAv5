(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.classesmediaMediaObject = function() {
	this.initialize();

	// main
	this.instance = new lib.Main();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(73.4,76.4,288,214);


// symbols:
(lib.baseimage = function() {
	this.initialize(img.baseimage);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,271,214);


(lib.baseimagepngcopy = function() {
	this.initialize(img.baseimagepngcopy);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,489,386);


(lib.envelope_closed_static = function() {
	this.initialize(img.envelope_closed_static);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,123,79);


(lib.envelopeclosedstatic = function() {
	this.initialize();

	// anim_packet
	this.instance = new lib.envelope_closed_static();
	this.instance.setTransform(-39.5,-26,0.667,0.667);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-39.5,-26,82.1,52.7);


(lib.EnvelopeStatic2 = function() {
	this.initialize();

	// Layer 2
this.text = new DOMObject({type:"TEXT" , align:"center" ,compId:"ID_txt01", expand:"up+down"}); 	
	this.text.setTransform(12,11.7);
	// Layer 1
	this.instance_1 = new lib.envelopeclosedstatic();
	this.instance_1.setTransform(30.8,19.7,0.75,0.75,0,0,0,1.4,0.1);

	this.addChild(this.instance_1,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0.1,61.6,39.5);


(lib.EnvelopeStatic = function() {
	this.initialize();

	// Layer 2
	this.text_1 = new DOMObject({type:"TEXT" , align:"center" ,compId:"ID_txt02", expand:"up+down"}); 
	this.text_1.setTransform(12,11.7);

	// Layer 1
	this.instance_2 = new lib.envelopeclosedstatic();
	this.instance_2.setTransform(30.8,19.7,0.75,0.75,0,0,0,1.4,0.1);

	this.addChild(this.instance_2,this.text_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0.1,61.6,39.5);


(lib.animation01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// envelope2
	this.instance_3 = new lib.EnvelopeStatic2();
	this.instance_3.setTransform(104.2,264,1,1,0,0,0,30.8,19.7);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({alpha:1},19).to({x:234.3,y:99},31).wait(1).to({alpha:0},0).wait(28).to({x:201.3,alpha:1},0).wait(16).to({x:123.2,y:267.2},32).wait(1).to({alpha:0},0).wait(27).to({x:301.2,alpha:1},0).wait(15).to({x:282.3},0).to({x:123.2},30).wait(1));

	// envelope1
	this.instance_4 = new lib.EnvelopeStatic();
	this.instance_4.setTransform(145.2,264,1,1,0,0,0,30.8,19.7);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({alpha:1},19).to({x:327.2},31).wait(1).to({alpha:0},0).wait(28).to({x:265.3,y:99.1,alpha:1},0).wait(16).to({x:330.4,y:267.2},32).wait(1).to({alpha:0},0).wait(27).to({x:364.4,alpha:1},0).wait(15).to({x:350.6,y:249.3},0).to({x:234.5,y:99.2},30).wait(1));

	// Bg image
	this.instance_5 = new lib.baseimage();
	this.instance_5.setTransform(90.4,76.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5}]}).wait(201));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(73.4,76.4,288,214);


(lib.Main = function() {
	this.initialize();

	// animation
	this.anim01 = new lib.animation01();

	this.addChild(this.anim01);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(73.4,76.4,288,214);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;



























