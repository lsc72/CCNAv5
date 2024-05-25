(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.classesmediaMediaObject = function() {
	this.initialize();

	// main
	this.instance = new lib.Main();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.2,0,470,400);


// symbols:
(lib._4_1_3_4 = function() {
	this.initialize(img._4_1_3_4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,470,400);

(lib.F = function() {
	this.initialize();	
	this.image = new DOMObject({type:"IMAGE",image:img.F});
	this.addChild(this.image);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,31,18);



(lib.purplebg = function() {
	this.initialize();	
	this.image = new DOMObject({type:"IMAGE",image:img.purplebg});
	this.addChild(this.image);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,31,18);


(lib.Switch_ATM = function() {
	this.initialize();	
	this.image = new DOMObject({type:"IMAGE",image:img.Switch_ATM});
	this.addChild(this.image);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,102,103);


(lib.yellowbg = function() {
	this.initialize();	
	this.image = new DOMObject({type:"IMAGE",image:img.yellowbg});
	this.addChild(this.image);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,31,18);


(lib.Symbol2 = function() {
	this.initialize();

	// Layer 1
	this.text = new DOMObject({type:"TEXT",compId:"ID_txt03_queue",width:"40",expand:"up+down",align:"left",color:"#f68026"})
	
	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,1,84,14.8);


(lib.Symbol1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF9900").ss(2.8,1,1).p("AlfncIK/AAIAAO5Iq/AAg");
	this.shape.setTransform(29.3,48.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AlfHdIAAu5IK/AAIAAO5g");
	this.shape_1.setTransform(29.3,48.7);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,70.5,95.5);


(lib.Tween25 = function() {
	this.initialize();

	// png
	this.instance = new lib.yellowbg();
	this.instance.setTransform(-14.5,-8.4,0.976,1);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-14.5,-8.4,30.3,18);


(lib.Tween23 = function() {
	this.initialize();

	// png
	this.instance = new lib.F();
	this.instance.setTransform(-15.1,-8.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-15.1,-8.9,31,18);


(lib.Tween20 = function() {
	this.initialize();

	// png
	this.instance = new lib.F();
	this.instance.setTransform(-15.1,-8.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-15.1,-8.9,31,18);


(lib.Tween18 = function() {
	this.initialize();

	// png
	this.instance = new lib.F();
	this.instance.setTransform(-15.1,-9.2);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-15.1,-9.2,31,18);


(lib.Tween16 = function() {
	this.initialize();

	// png
	this.instance = new lib.F();
	this.instance.setTransform(-15.1,-9.1);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-15.1,-9.1,31,18);



(lib.Symbol1427 = function() {
	this.initialize();

	// png
	this.instance = new lib.purplebg();
	this.instance.setTransform(7,0,0.976,1);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.3,0,30.3,18);


(lib.SwitchATM = function() {
	this.initialize();

	// png
	this.instance = new lib.Switch_ATM();
	this.instance.setTransform(0,-64.4,0.632,0.626);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-64.4,64.5,64.5);


(lib.instr3 = function() {
	this.initialize();

	// Layer 1
	this.text= new DOMObject({type:"TEXT",compId:"ID_caption3",width:"420",expand:"down",align:"left",class:"orangeCallOut"});
	this.text.setTransform(1,0);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(1,0,66.9,14.8);


(lib.instr2 = function() {
	this.initialize();

	// Layer 1
	this.text= new DOMObject({type:"TEXT",compId:"ID_caption2",width:"420",expand:"down",align:"left",class:"orangeCallOut"});
	this.text.setTransform(1,1);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(1,1,66.9,14.8);


(lib.instr1 = function() {
	this.initialize();

	// Layer 1
    this.text= new DOMObject({type:"TEXT",compId:"ID_caption1",width:"420",expand:"down",align:"left",class:"orangeCallOut"});
	this.text.setTransform(0,0.7);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0.7,66.9,14.8);


(lib.anim = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// box4
	this.instance = new lib.Tween16("synched",0);
	this.instance.setTransform(66.5,82.4);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(356).to({alpha:1},0).to({scaleX:1,scaleY:1,x:175,y:82.5},19).to({alpha:0},1).wait(154));

	// box4
	this.instance_1 = new lib.Symbol1427("synched",0);
	this.instance_1.setTransform(-172,105);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(165).to({alpha:1},0).to({x:-98.9,y:102},17).to({x:-122.9,y:117},12).to({x:-58.9,y:112.5},21).to({x:-58.3,y:98.7},6).to({x:41.2,y:73.5},24).to({scaleX:1,x:1,y:68.5},21).wait(68).to({startPosition:0},0).to({x:45.7},8).wait(12).to({alpha:0},0).wait(176));

	// box3
	this.instance_2 = new lib.Tween18("synched",0);
	this.instance_2.setTransform(66.5,82.5);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(346).to({alpha:1},0).to({x:179},19).to({alpha:0},1).wait(164));

	// box3
	this.instance_3 = new lib.Symbol1427("synched",0);
	this.instance_3.setTransform(-172,105);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(110).to({alpha:1},0).to({x:-98.9,y:102},17).to({x:-122.9,y:117},12).to({x:-58.9,y:112.5},21).to({x:-57.3,y:98.7},5).to({x:41.5,y:74.8},13).to({scaleX:1,x:1,y:44.5},33).wait(103).to({startPosition:0},0).to({x:35.2},5).to({y:74.9},10).to({x:43.8},5).wait(10).to({alpha:0},0).wait(186));

	// box2
	this.instance_4 = new lib.Tween23("synched",0);
	this.instance_4.setTransform(66.5,82.5);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(331).to({alpha:1},0).to({x:168},19).to({alpha:0},1).wait(179));

	// box2
	this.instance_5 = new lib.Symbol1427("synched",0);
	this.instance_5.setTransform(-172,105);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(55).to({alpha:1},0).to({x:-98.9,y:102},17).to({x:-122.9,y:117},12).to({x:-58.9,y:112.5},21).to({x:-57.3,y:98.7},5).to({x:41.5,y:74.8},13).to({scaleX:1,x:1,y:20.5},31).wait(145).to({startPosition:0},0).to({x:35.2},5).to({y:74.7},10).to({x:44.7},5).wait(10).to({alpha:0},0).wait(201));

	// box1
	this.instance_6 = new lib.Tween25("synched",0);
	this.instance_6.setTransform(53,80.5);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(346).to({alpha:1},0).to({x:-44.4,y:105.5},30).to({y:121.5},6).to({x:-105.4},20).to({x:-96.4,y:112.5},16).to({x:-157.4,y:116.5},23).to({alpha:0},1).wait(88));

	// box1
	this.instance_7 = new lib.Tween20("synched",0);
	this.instance_7.setTransform(66.5,82.5,1.002,1);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(316).to({alpha:1},0).to({x:176.4},19).to({alpha:0},1).wait(9).to({startPosition:0},0).wait(185));

	// box1
	this.instance_8 = new lib.Symbol1427("synched",0);
	this.instance_8.setTransform(-172,105);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({x:-98.9,y:102},17).to({x:-122.9,y:117},12).to({x:-57.9,y:112.5},21).to({x:-58.3,y:98.7},5).to({x:41.5,y:74.8},13).to({x:15.6,y:25.3},21).to({scaleX:1,x:1,y:-3.3},12).wait(183).to({startPosition:0},0).to({x:35.2},5).to({y:72.5},10).to({x:44.7},5).wait(10).to({alpha:0},0).wait(216));

	// icons
	this.instance_9 = new lib.SwitchATM();
	this.instance_9.setTransform(38.3,102.4,0.706,0.706);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9}]}).wait(530));

	// toptext
	this.instance_10 = new lib.Symbol2();
	this.instance_10.setTransform(119.4,8.4,1,1,0,0,0,52,8.5);
	this.instance_10.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(69).to({alpha:1},0).wait(461));

	// table
	this.instance_11 = new lib.instr3();
	this.instance_11.setTransform(-6.3,-97.4,1,1,0,0,0,217,8.5);
	this.instance_11.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(422).to({alpha:1},10).wait(98));

	// orange callout
	this.instance_12 = new lib.instr2();
	this.instance_12.setTransform(-6.3,-97.4,1,1,0,0,0,217,8.5);
	this.instance_12.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(188).to({alpha:1},9).wait(225).to({alpha:0},0).wait(108));

	// orange callout2
	this.instance_13 = new lib.instr1();
	this.instance_13.setTransform(-5.6,-97.4,1,1,0,0,0,217,8.5);
	this.instance_13.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(18).to({alpha:1},11).wait(159).to({alpha:0},0).wait(342));

	// Queue
	this.instance_14 = new lib.Symbol1();
	this.instance_14.setTransform(34.1,41.2,1,1,0,0,0,35.3,47.7);
	this.instance_14.alpha = 0;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAAGeIAAs8IABAAIAAM8g");
	this.shape.setTransform(69.4,38.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_14,p:{alpha:0}}]}).to({state:[{t:this.shape},{t:this.instance_14,p:{alpha:0}}]},68).to({state:[{t:this.shape},{t:this.instance_14,p:{alpha:1}}]},1).wait(461));

	// static text
	this.text= new DOMObject({type:"TEXT" , align:"center" ,text:"1", size:"11"});
	this.text.setTransform(77.1,89.8);

	this.text_1= new DOMObject({type:"TEXT" , align:"center" ,text:"0", size:"11"});
	this.text_1.setTransform(19.1,90.8);

	this.text_2= new DOMObject({type:"TEXT" , align:"center" ,text:"A", size:"11"}); 
	this.text_2.setTransform(53.1,43.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_2},{t:this.text_1},{t:this.text}]}).wait(530));

	// background
	this.instance_15 = new lib._4_1_3_4();
	this.instance_15.setTransform(-225.7,-145.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_15}]}).wait(530));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-225.7,-145.9,470,400);


(lib.slide_2 = function() {
	this.initialize();

	// anim
	this.anim01 = new lib.anim();
	this.anim01.setTransform(243,174,1,1,0,0,0,17,28);

	this.addChild(this.anim01);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.2,0,470,400);


(lib.Main = function() {
	this.initialize();

	// slide2
	this.slide02 = new lib.slide_2();
	this.slide02.setTransform(202.5,126.5,1,1,0,0,0,202.5,126.5);

	this.addChild(this.slide02);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.2,0,470,400);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;