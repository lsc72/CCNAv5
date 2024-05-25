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
(lib._1_2_2_3 = function() {
	this.initialize(img._1_2_2_3);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,653,556);


(lib.envelope_closed_static = function() {
	this.initialize(img.envelope_closed_static);	
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,123,79);


(lib.envelopeclosedstatic3 = function() {
	this.initialize();
	
	// Layer 2
	this.instance = new DOMObject({type:"IMAGE",image:img.envelope_closed_static});
	this.addChild(this.instance);	
	this.instance.setTransform(-12,-27.1,0.667,0.663);
 
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-39.4,-27.1,82.1,52.4);


(lib.envelopeclosedstatic2 = function() {
	this.initialize();

	// Layer 2
	this.instance_1 = new DOMObject({type:"IMAGE",image:img.envelope_closed_static});
	this.instance_1.setTransform(-12,-27.1,0.667,0.663);

	this.addChild(this.instance_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-39.4,-27.1,82.1,52.4);


(lib.envelopeclosedstatic1 = function() {
	this.initialize();

	// Layer 2
	this.instance_2 = new DOMObject({type:"IMAGE",image:img.envelope_closed_static});
	this.instance_2.setTransform(-12,-27.1,0.667,0.663);

	this.addChild(this.instance_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-39.4,-27.1,82.1,52.4);


(lib.envelopeclosedstatic = function() {
	this.initialize();

	// Layer 2
	this.instance_3 = new DOMObject({type:"IMAGE",image:img.envelope_closed_static});	
	this.instance_3.setTransform(-12,-27.1,0.667,0.663);

	this.addChild(this.instance_3);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-39.4,-27.1,82.1,52.4);


(lib.anim1 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{},true);

	// static text
	this.text = new DOMObject({type:"TEXT",text:"T1",bold:"1"});
	this.text.setTransform(198.4,225.4);

	this.text_1 = new DOMObject({type:"TEXT",text:"T1",bold:"1"});
	this.text_1.setTransform(199.9,146.6);

	
	this.text_2 = new DOMObject({type:"TEXT",text:"T1",bold:"1"});
	this.text_2.setTransform(145.3,182);

	this.text_3 = new DOMObject({type:"TEXT",text:"T1",bold:"1"});
	this.text_3.setTransform(262.9,182.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_3},{t:this.text_2},{t:this.text_1},{t:this.text}]}).wait(214));

	// Packet4
	this.instance_4 = new lib.envelopeclosedstatic();
	this.instance_4.setTransform(59.5,83.8,0.301,0.301,0,0,0,1.7,0.1);
	this.instance_4.alpha = 0;
	
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(50).to({alpha:1},10).to({regY:0,x:61.3,y:130.9},18).to({x:165.7,y:132.9},20).to({regY:0.1,y:164.1},14).to({x:255.4},23).to({regY:0,x:254.4,y:210.2},16).to({x:254.2,y:239.8},11).to({x:380.2},24).to({y:274.8},13).to({alpha:0},5).wait(10));



	// Packet3
	this.instance_5 = new lib.envelopeclosedstatic3();
	this.instance_5.setTransform(59.5,83.8,0.301,0.301,0,0,0,1.7,0.1);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(37).to({alpha:1},9).to({regY:0,x:61.3,y:130.9},12).to({x:165.7,y:132.9},20).to({regY:0.1,y:164.1},10).to({regY:0,x:165.6,y:211.4},17).to({x:254.4,y:210.2},16).to({x:254.2,y:239.8},11).to({x:380.2},21).to({y:274.8},12).to({alpha:0},2).wait(47));

	// Packet2
	this.instance_6 = new lib.envelopeclosedstatic2();
	this.instance_6.setTransform(59.5,84.5,0.301,0.301,0,0,0,1.7,0.1);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(23).to({alpha:1},9).to({regY:0,x:61.3,y:130.9},14).to({x:165.7,y:132.9},19).to({regY:0.1,y:164.1},8).to({x:255.7,y:165.4},23).to({regY:0,x:254.2,y:210.2},20).to({y:239.8},8).to({x:380.2},21).to({y:274.8},13).to({alpha:0},9).wait(47));

	// Packet1
	this.instance_7 = new lib.envelopeclosedstatic1();
	this.instance_7.setTransform(59.5,84.5,0.301,0.301,0,0,0,1.7,0.1);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(7).to({alpha:1},9).to({regY:0,x:61.3,y:130.9},12).to({x:165.7,y:132.9},21).to({regY:0.1,y:164.1},10).to({regY:0,y:210.2},15).to({x:254.2},24).to({y:239.8},7).to({x:380.2},25).to({y:274.8},13).to({alpha:0},6).wait(65));

	// bg
	this.instance_8 = new lib._1_2_2_3();
	this.instance_8.setTransform(0,0,0.72,0.719);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8}]}).wait(214));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,470,400);


(lib.Main = function() {
	this.initialize();

	// anim
	this.anim1 = new lib.anim1();
	this.anim1.setTransform(190.8,121.5,1,1,0,0,0,190.8,121.5);

	this.addChild(this.anim1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,470,400);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;