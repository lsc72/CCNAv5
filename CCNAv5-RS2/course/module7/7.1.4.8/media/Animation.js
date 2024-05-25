(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.classesmediaMediaObject = function() {
	this.initialize();

	// main
	this.instance = new lib.Main();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(11,0,470,400);


// symbols:
(lib._3148 = function() {
	this.initialize(img._3148);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,470,400);


(lib.envelope_closed_static = function() {
	 this.initialize();
	this.instance = new DOMObject({type:"IMAGE",image:img.envelope_closed_static});
	this.addChild(this.instance);
}).prototype = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,123,79);


(lib.envelopeclosedstatic = function() {
	this.initialize();

	// png
	this.instance = new lib.envelope_closed_static();
	this.instance.setTransform(-39.5,-26.1,0.667,0.663);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-39.5,-26.1,82.1,52.4);


(lib.RIP = function() {
	this.initialize();

	// txt
	this.text = new DOMObject({type:"TEXT",text:"RIP",bold:"1",size:"10"});	
	this.text.setTransform(-18,-7.1);

	// png
	this.instance = new lib.envelopeclosedstatic();
	this.instance.setTransform(0.1,0.1,0.35,0.35,0,0,0,1.6,0.1);

	this.addChild(this.instance,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-14.3,-9.1,28.7,18.4);


(lib.OSPF = function() {
	this.initialize();

	// txt
	this.text = new DOMObject({type:"TEXT",text:"OSPF",bold:"1",size:"10"});	
	this.text.setTransform(-23,-7.1);

	// png
	this.instance = new lib.envelopeclosedstatic();
	this.instance.setTransform(0.3,0,0.35,0.35,0,0,0,1.5,0);

	this.addChild(this.instance,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-15.6,-9.1,31.4,18.4);


(lib.animation01 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// envolope2
	this.instance = new lib.OSPF();
	this.instance.setTransform(57,265);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(140).to({alpha:1},9).to({x:382.7},45).to({x:257.7,y:109.9},34).to({x:158.7},11).to({alpha:0},10).wait(16));

	// envolope1
	this.instance_1 = new lib.RIP();
	this.instance_1.setTransform(57,265);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(19).to({alpha:1},10).to({x:128.9},15).to({x:257.7,y:109.9},60).to({x:158.7},15).to({alpha:0},11).wait(135));

	// lazy text
	this.text = new DOMObject({type:"TEXT",compId:"ID_txt01",width:"406.9",expand:"down",align:"left",size:"11"});
	this.text.setTransform(25.4,307);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text}]}).wait(265));

	// static text
	this.text_1 = new DOMObject({type:"TEXT",text:"T1"});	
	this.text_1.setTransform(232.4,276.7);

	this.text_2= new DOMObject({type:"TEXT",text:"T1"});	
	this.text_2.setTransform(333,184.7);

	this.text_3= new DOMObject({type:"TEXT",text:"172.16.1.0/24",bold:"1"});	
	this.text_3.setTransform(115.5,81);

	this.text_4= new DOMObject({type:"TEXT",text:"56kbps"});	
	this.text_4.setTransform(115.9,184.7);

	this.text_5= new DOMObject({type:"TEXT",text:"172.16.3.0/24",bold:"1"});	
	this.text_5.setTransform(15.8,233.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_5},{t:this.text_4},{t:this.text_3},{t:this.text_2},{t:this.text_1}]}).wait(265));

	// bg
	this.instance_2 = new lib._3148();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).wait(265));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,470,400);


(lib.slide_1 = function() {
	this.initialize();

	// animation 1
	this.anim01 = new lib.animation01();
	this.anim01.setTransform(11,0);

	this.addChild(this.anim01);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(11,0,470,400);


(lib.Main = function() {
	this.initialize();

	// slide1
	this.anim01 = new lib.animation01();
	this.anim01.setTransform(11,0);

	this.addChild(this.anim01);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(11,0,470,400);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;