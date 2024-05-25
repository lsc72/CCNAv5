(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.classesmediaMediaObject = function() {
	this.initialize();

	// main
	this.instance = new lib.Main();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,469.8,400);


// symbols:
(lib._1222 = function() {
	this.initialize(img._1222);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,653,556);


(lib.envelope_closed_static = function() {
	this.initialize(img.envelope_closed_static);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,123,79);


(lib.text2 = function() {
	this.initialize();

	// Layer 1
	this.text = new DOMObject({type:"TEXT",compId:"ID_txt03",width:"109",expand:"right",class:"orangeCallOut",align:"center"});
	//this.text = new cjs.Text("ID_txt03", "11px Arial", "#393536");
	//this.text.lineHeight = 13;
	//this.text.lineWidth = 102;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,106.5,16.2);


(lib.label = function() {
	this.initialize();

	// Layer 1
	//this.text_1 = new cjs.Text("ID_txt01", "11px Arial", "#393536");
	this.text_1 = new DOMObject({type:"TEXT",compId:"ID_txt01",width:'104',expand:"right",class:"orangeCallOut",align:"center"});
	//this.text_1.lineHeight = 13;
	//this.text_1.lineWidth = 102;
	this.text_1.setTransform(-17.9,15);

	this.addChild(this.text_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-17.9,15,106.5,16.2);


(lib.envelope_closed_static_1 = function() {
	this.initialize();

	// inner lines
	this.instance = new lib.envelope_closed_static();
	this.instance.setTransform(-39.5,-26.1,0.667,0.663);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-39.5,-26.1,82.1,52.4);


(lib.envelopeclosedstatic = function() {
	this.initialize();

	// Layer 2
	this.instance_1 = new lib.envelope_closed_static();
	this.instance_1.setTransform(-39.4,-26.1,0.667,0.667);

	this.addChild(this.instance_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-39.4,-26.1,82.1,52.7);


(lib.envelope_closed_static_2 = function() {
	this.initialize();

	// Layer 1
	this.instance_2 = new lib.envelopeclosedstatic();
	this.instance_2.setTransform(44.7,31.6,1.2,1.2,0,0,0,1.5,0.1);

	this.addChild(this.instance_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-4.4,0.1,98.5,63.3);


(lib.animation01 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{},true);

	// ID_txt02
	this.text_2 = new DOMObject({type:"TEXT",compId:"ID_txt02",width:'105',expand:"right"});
	//this.text_2.lineHeight = 13;
	//this.text_2.lineWidth = 102;
	this.text_2.setTransform(234.6,166.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_2}]}).wait(503));

	// ID_txt03
	this.instance_3 = new lib.text2();
	this.instance_3.setTransform(102,260.9,1.077,1,0,0,0,52,8.5);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(333).to({alpha:1},13).wait(145).to({alpha:0},11).wait(1));

	// ID_txt01
	this.instance_4 = new lib.label();
	this.instance_4.setTransform(305.9,122.4,1,1,0,0,0,52,8.5);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(10).to({regX:0,regY:0,x:253.9,y:113.9},0).to({alpha:1},13).wait(293).to({regX:52,regY:8.5,x:305.9,y:122.4},0).to({alpha:0},14).wait(173));

	// packet
	this.instance_5 = new lib.envelope_closed_static_2();
	this.instance_5.setTransform(41.2,55.1,0.285,0.285,0,0,0,44.6,31.4);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(10).to({alpha:1},13).wait(10).to({y:112.6},41).wait(1).to({x:164.2},51).wait(1).to({y:151.6},29).wait(1).to({x:277.3,y:223.8},53).wait(1).to({x:277.8},0).to({x:277.3,y:265.8},17).wait(1).to({x:421.8},49).wait(1).to({y:305.8},23).wait(6).to({alpha:0},16).wait(179));

	// packet
	this.instance_6 = new lib.envelope_closed_static_2();
	this.instance_6.setTransform(41.2,55.1,0.285,0.285,0,0,0,44.6,31.4);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(333).to({alpha:1},13).wait(10).to({y:112.6},13).wait(1).to({x:164.2},17).wait(1).to({y:151.6},6).wait(1).to({x:164.8,y:232.3},14).wait(1).to({x:277.8},17).wait(1).to({y:264.3},5).wait(1).to({x:277.3,y:265.8},0).to({x:421.8},27).wait(1).to({y:305.8},12).wait(6).to({alpha:0},16).wait(7));

	// static text
	this.text_3 = new DOMObject({type:"TEXT",text:"T1",bold:"1"});
	//this.text_3.lineHeight = 13;
	this.text_3.setTransform(217.6,242.3);

	this.text_4 = new DOMObject({type:"TEXT",text:"T1",bold:"1"});
	//this.text_4 = new cjs.Text("T1", "bold 11px Arial", "#393536");
	//this.text_4.lineHeight = 13;
	this.text_4.setTransform(134.6,186.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_4},{t:this.text_3}]}).wait(503));

	// Layer 2
	this.instance_7 = new lib._1222();
	this.instance_7.setTransform(0,0,0.719,0.719);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7}]}).wait(503));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,469.8,400);


(lib.Main = function() {
	this.initialize();

	// animation
	this.anim01 = new lib.animation01();

	// controller
	this.instance_8 = new lib._1222();
	this.instance_8.setTransform(0,0,0.719,0.719);

	this.addChild(this.instance_8,this.anim01);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,469.8,400);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;