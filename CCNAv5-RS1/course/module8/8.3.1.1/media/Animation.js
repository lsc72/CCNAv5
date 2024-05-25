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
(lib._7_3_1_1 = function() {
	this.initialize(img._7_3_1_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,470,400);


(lib.envelope_closed_static = function() {
	 this.initialize();
	this.instance = new DOMObject({type:"IMAGE",image:img.envelope_closed_static});
	this.addChild(this.instance);
}).prototype = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,123,79);


(lib.Ping = function() {
	this.initialize();

	// ID_txt02
	this.text = new DOMObject({type:"TEXT" , align:"center" ,compId:"ID_txt02", width:"120", expand:"right",class:"orangeCallOut"}); 
	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-59.9,-8.4,105,16.2);


(lib.Bubble_2 = function() {
	this.initialize();

	// ID_txt04
	this.text = new DOMObject({ type:"BUBBLE", compId:"ID_txt04",  width:"120", height:"80", align:"left", tailPosition:"5"}); 
	this.text.setTransform(-59.9,-39.9);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-59.9,-39.9,116,16.2);


(lib.Bubble_1 = function() {
	this.initialize();

	// ID_txt04
	this.text = new DOMObject({ type:"BUBBLE", compId:"ID_txt01",  width:"120", height:"80", align:"left", tailPosition:"7"}); 
	this.text.setTransform(-75.9,-41.9);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-59.9,-39.9,116,16.2);


(lib.envelopeclosedstatic = function() {
	this.initialize();

	// png
	this.instance = new lib.envelope_closed_static();
	this.instance.setTransform(-28.5,-26.1,0.667,0.663);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-39.5,-26.1,82.1,52.4);


(lib.packet_2 = function() {
	this.initialize();

	// ID_txt05
	this.text = new DOMObject({type:"TEXT" , align:"center" ,compId:"ID_txt05", width:"80", expand:"up+down",color:"#FFFFFF"});
	this.text.setTransform(-40,-5)
	// envelope
	this.instance = new lib.envelopeclosedstatic();
	this.instance.setTransform(0.1,0.1,1,1,0,0,0,1.5,0.1);

	this.addChild(this.instance,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-41,-26.1,90.4,52.4);


(lib.packet_1 = function() {
	this.initialize();

	// ID_txt03
	this.text = new DOMObject({type:"TEXT" , align:"center" ,compId:"ID_txt03", width:"80", expand:"up+down",color:"#FFFFFF"});
	this.text.setTransform(-40,-5)

	// envelope
	this.instance = new lib.envelopeclosedstatic();
	this.instance.setTransform(0.1,0.1,1,1,0,0,0,1.5,0.1);

	this.addChild(this.instance,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-41,-26.1,83.4,52.4);


(lib.animation01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// packet2
	this.instance = new lib.packet_2();
	this.instance.setTransform(423,120,0.5,0.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(229).to({scaleX:1,scaleY:1,x:427,y:126,alpha:1},15).to({x:307},20).to({y:319},30).to({x:134},30).to({y:126},30).to({x:43},20).to({scaleX:0.5,scaleY:0.5,x:39,y:120,alpha:0},15).wait(1));

	// bubble_2
	this.instance_1 = new lib.Bubble_2();
	this.instance_1.setTransform(387.4,55.4);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(214).to({alpha:1},15).wait(161));

	// packet 1
	this.instance_2 = new lib.packet_1();
	this.instance_2.setTransform(40,120,0.5,0.5);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(39).to({scaleX:1,scaleY:1,x:44,y:126,alpha:1},15).to({x:141},20).to({y:319},30).to({x:314},30).to({x:314.4,y:126},30).to({x:426},20).to({scaleX:0.5,scaleY:0.5,x:424,y:120,alpha:0},15).wait(191));

	// orange
	this.instance_3 = new lib.Ping();
	this.instance_3.setTransform(100.3,113.4);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(24).to({alpha:1},5).wait(45).to({alpha:0},5).wait(311));

	// bubble_1
	this.instance_4 = new lib.Bubble_1();
	this.instance_4.setTransform(97.4,55.4);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({alpha:1},13).wait(376));

	// static text
	this.text = new cjs.Text("192.168.30.1", "bold 11px Arial", "#393536");
	this.text.lineHeight = 13;
	this.text.setTransform(391.5,161.8);

	this.text_1 = new cjs.Text("192.168.10.1", "bold 11px Arial", "#393536");
	this.text_1.lineHeight = 13;
	this.text_1.setTransform(7,161.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_1},{t:this.text}]}).wait(390));

	// bg
	this.instance_5 = new lib._7_3_1_1();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5}]}).wait(390));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,470,400);


(lib.Main = function() {
	this.initialize();

	// animation
	this.anim01 = new lib.animation01();

	this.addChild(this.anim01);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,470,400);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;