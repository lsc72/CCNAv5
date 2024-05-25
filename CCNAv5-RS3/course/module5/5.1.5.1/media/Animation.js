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
(lib.Arrow = function() {
	this.initialize(img.Arrow);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,40,27);


(lib.Arrow1 = function() {
	this.initialize(img.Arrow1);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,40,27);


(lib.computer_laptop = function() {
	this.initialize(img.computer_laptop);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,172,115);


(lib.envelope_closed_static = function() {
	this.initialize(img.envelope_closed_static);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,123,79);


(lib.hacker = function() {
	this.initialize(img.hacker);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,173,231);


(lib.media_7141 = function() {
	this.initialize(img.media_7141);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,653,556);


(lib.Symbol11 = function() {
	this.initialize();

	// Layer 1
	//this.text = new cjs.Text("ID_txt01", "11px Courier New");
	this.text = new BubbleComp({width:140,height:155,compId:"ID_txt01",tailPosition:"7"});

 

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,69,15.7);


(lib.Symbol7 = function() {
	this.initialize();

 
	
	this.instance_71 = new lib.Arrow_1();
	this.instance_71.setTransform(1,41.8,1.57,1.57,90,0,0,5,0);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#F68026").ss(3,1,1).p("AAACgIAAk/");
	this.shape_21.setTransform(1.1,23.1);

	//this.addChild(this.shape_21,this.instance_71);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Symbol6 = function() {
	this.initialize();

	// Layer 2
	//this.text_1 = new cjs.Text("ID_txt06", "11px Courier New");
	this.text_1 = new DOMObject({type:"TEXT",compId:"ID_txt06",width:"109",expand:"down",class:"orangeCallOut",align:"left"});

	this.text_1.setTransform(0,-10);
	this.addChild(this.text_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,67,15.7);


(lib.Symbol5 = function() {
	this.initialize();

	// Layer 1
	//this.text_2 = new cjs.Text("ID_txt02", "11px Courier New");
	
	this.text_2 = new DOMObject({type:"TEXT",compId:"ID_txt02",width:"65",expand:"down",class:"orangeCallOut",align:"left"});


	this.addChild(this.text_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,71,15.7);


(lib.Symbol4 = function() {
	this.initialize();

	// Layer 1
	//this.text_3 = new cjs.Text("ID_to", "11px Courier New");
	this.text_3 = new DOMObject({type:"TEXT",compId:"ID_to",width:"109",expand:"down",class:"grayCallOut",align:"center"});

	 

	this.addChild(this.text_3);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(1,0,108,15.7);


(lib.ID_txt04 = function() {
	this.initialize();

	// Layer 1
	//this.text_4 = new cjs.Text("ID_txt04", "8px Arial");
		this.text_4 = new DOMObject({type:"TEXT",compId:"ID_txt04",width:"155",expand:"down",class:"orangeCallOut",align:"left"});


	this.addChild(this.text_4);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,33.9,12.9);


(lib.ID_txt03 = function() {
	this.initialize();

	// Layer 1
	//this.text_5 = new cjs.Text("ID_txt03", "11px Courier New");
	
	 this.text_5 = new DOMObject({type:"TEXT",compId:"ID_txt03",width:"130",expand:"down",class:"orangeCallOut",align:"left"});


	this.addChild(this.text_5);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,57,15.7);


(lib.arrowpurple = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Arrow();
	this.instance.setTransform(18.1,30.5,0.677,0.693,0,105.3,-70.1);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,27.3,30.5);


(lib.hacker_1 = function() {
	this.initialize();

	// outlines
	this.instance_1 = new lib.hacker();
	this.instance_1.setTransform(3.1,2.1,0.892,0.892);

	this.addChild(this.instance_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(3.1,2.1,154.4,206);


(lib.envelopeclosedstatic = function() {
	this.initialize();

	// inner lines
	this.instance_2 = new lib.envelope_closed_static();
	this.instance_2.setTransform(-39.5,-26.1,0.667,0.663);

	this.addChild(this.instance_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-39.5,-26.1,82.1,52.4);


(lib.computerlaptop = function() {
	this.initialize();

	// keys
	this.instance_3 = new lib.computer_laptop();
	this.instance_3.setTransform(0,-71.8,0.623,0.626);

	this.addChild(this.instance_3);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-71.8,107.2,72);


(lib.Arrowpurple = function() {
	this.initialize();

	// Layer 2
	this.instance_4 = new lib.Arrow();
	this.instance_4.setTransform(0.1,3.4,0.25,0.247,0,180,0);

	this.addChild(this.instance_4);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,-3.2,10,6.7);


(lib.Arrow_1 = function() {
	this.initialize();

	// shape
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F68026").s().p("AgxAhIAighIgiggIBjAgIhjAh").cp();
	this.shape_1.setTransform(5,0);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-3.2,10,6.7);


(lib.Symbol9 = function() {
	this.initialize();

	// Layer 1
	this.instance_5 = new lib.computerlaptop();
	this.instance_5.setTransform(20.4,50.9,0.49,0.49,0,0,0,9.6,-0.9);

	this.instance_6 = new lib.hacker_1();
	this.instance_6.setTransform(19.5,26,0.252,0.252,0,0,0,80.4,105.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(2,1,1).p("AmOBNIMdiZ");
	this.shape_2.setTransform(89.4,21.4);

	this.addChild(this.shape_2,this.instance_6,this.instance_5);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,129.3,51.9);


(lib.Symbol1 = function() {
	this.initialize();

	// Layer 1
	this.instance_7 = new lib.arrowpurple();
	this.instance_7.setTransform(129.3,33.7,1,1,0,0,0,13.6,15.2);

	this.instance_8 = new lib.Arrowpurple();
	this.instance_8.setTransform(54,106.3,2.639,2.878,0,-27.6,-27.1,4.9,0);

	this.instance_9 = new lib.Arrowpurple();
	this.instance_9.setTransform(36.2,40.9,2.751,2.772,0,145.5,140.5,4.9,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#652C8A").ss(2,1,1).p("AHUAAQjGDykSCrQkVCrjDAAQjCAAADirQACirDFjyQDGjxETirQEVirDCAAQDDAAgDCrQgCCrjGDxIAAAA").cp();
	this.shape_3.setTransform(66.9,58.5);

	this.addChild(this.shape_3,this.instance_9,this.instance_8,this.instance_7);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,143,120.7);


(lib.orangeMc = function() {
	this.initialize();

	// Layer 1
	this.instance_10 = new lib.Arrow_1();
	this.instance_10.setTransform(32.5,164.6,2.243,2.243,55,0,0,5,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#F68026").ss(2,1,1).p("AHThZIAACzIulAAIAAizIOlAA").cp();
	this.shape_4.setTransform(48.3,194.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#F68026").ss(3,1,1).p("AiLNDQoxtBFcoTIAAkxINGAAIAAJiItGAAIAAkx");
	this.shape_5.setTransform(48.6,83.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(246,128,38,0.498)").s().p("AHThZIAACzIulAAIAAizIOlAA").cp();
	this.shape_6.setTransform(48.3,194.1);

	this.addChild(this.shape_6,this.shape_5,this.shape_4,this.instance_10);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,97.3,203.1);


(lib.Animation = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{},true);

	// R3 text
	this.instance_11 = new lib.ID_txt04();
	this.instance_11.setTransform(300,50,1,1,0,0,0,16.9,6.5);
	this.instance_11.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(523).to({alpha:1},0).wait(264));

	// ring with arrows
	this.instance_12 = new lib.Symbol1();
	this.instance_12.setTransform(184.6,128,1,1,0,0,0,70.9,59.9);
	this.instance_12.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(639).to({alpha:1},0).wait(148));

	// Layer 4
	this.instance_13 = new lib.Symbol5();
	this.instance_13.setTransform(37,201,1,1,0,0,0,36,8.5);
	this.instance_13.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(353).to({alpha:1},0).wait(80).to({alpha:0},0).wait(354));
	//this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(353).to({alpha:1},0).wait(80).to({alpha:0},0).wait(354));


	// PC2 text
	this.instance_14 = new lib.Symbol4();
	this.instance_14.setTransform(400,297.5,1,1,0,0,0,52,8.5);
	this.instance_14.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(173).to({alpha:1},0).wait(102).to({alpha:0},0).wait(512));

	// envelope
	this.instance_15 = new lib.envelopeclosedstatic();
	this.instance_15.setTransform(305.8,299.5,0.5,0.5,0,0,0,-45.4,0.4);
	this.instance_15.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(173).to({alpha:1},0).wait(26).to({regX:-45.2,rotation:-1.1,x:306.1,y:170.3},31).wait(12).to({regX:-45.3,regY:0.3,rotation:0,x:206.9,y:68},33).wait(37).to({x:109.5,y:169.9},25).wait(158).to({regY:0.4,x:206.2,y:69.1},28).wait(177).to({x:205.8,y:68.4},27).to({regY:0.3,x:110.4,y:169.5},28).wait(32));

	// R1 text
	this.instance_16 = new lib.Symbol6();
	this.instance_16.setTransform(206.5,195,1,1,0,0,0,52.5,8.5);
	this.instance_16.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(79).to({alpha:1},0).wait(68).to({alpha:0},0).wait(640));

	// bubble
	this.instance_17 = new lib.Symbol11("synched",0);
	this.instance_17.setTransform(90,0,1,1,0,0,0,75,40);
	this.instance_17.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(39).to({alpha:1},0).wait(748));

	// hacker
	this.instance_18 = new lib.Symbol9();
	this.instance_18.setTransform(88.3,129.3,1,1,0,0,0,65.2,25.9);
	this.instance_18.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(29).to({alpha:1},0).wait(758));

	// topology text
	this.text_6 = new cjs.Text("192.168.30.10/24", "11px Arial", "#393536");
	this.text_6.textAlign = "center";
	this.text_6.lineHeight = 11;
	this.text_6.setTransform(323.1,323);

	this.text_7 = new cjs.Text("192.168.10.10/24", "11px Arial", "#393536");
	this.text_7.textAlign = "center";
	this.text_7.lineHeight = 11;
	this.text_7.setTransform(123.5,323);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_7},{t:this.text_6}]}).wait(787));

	// ID_txt03
	this.instance_19 = new lib.ID_txt03();
	this.instance_19.setTransform(187,164,1,1,0,0,0,28.5,7.9);
	this.instance_19.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(459).to({alpha:1},0).wait(64).to({alpha:0},0).wait(264));

	// center text
	this.instance_20 = new lib.orangeMc();
	this.instance_20.setTransform(126.3,235,1,1,0,0,0,48.6,101.3);
	this.instance_20.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(353).to({alpha:1},0).wait(80).to({alpha:0},0).wait(354));

	// arc
	this.instance_21 = new lib.Symbol7();
	this.instance_21.setTransform(172.1,126.9);
	this.instance_21.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(79).to({alpha:1},0).wait(68).to({alpha:0},0).wait(640));

	// bg
	this.instance_22 = new lib.media_7141();
	this.instance_22.setTransform(0,0,0.72,0.719);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_22}]}).wait(787));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,470,400);


(lib.Main = function() {
	this.initialize();

	// Animation
	this.anim = new lib.Animation();
	this.anim.setTransform(250,224,1,1,0,0,0,250,224);

	this.addChild(this.anim);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,470,400);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;