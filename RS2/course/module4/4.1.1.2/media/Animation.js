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
(lib._1841a = function() {
	this.initialize(img._1841a);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,145);


(lib._1841t = function() {
	this.initialize(img._1841t);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,504,400);


(lib.media_1112_Animation = function() {
	this.initialize(img.media_1112_Animation);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,653,556);


(lib.Router = function() {
	this.initialize(img.Router);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,148,107);


(lib.routerhigh = function() {
	this.initialize(img.routerhigh);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,64,52);


(lib.router_highlight = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.routerhigh();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,64,52);


(lib.label_router_output = function() {
	this.initialize();

	// Layer 2
	
	this.text = new DOMObject({type:"TEXT",compId:"ID_txt05",width:"462.15",expand:"down",align:"center"});

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,45.1,16.2);


(lib.label_1841_top = function() {
	this.initialize();

	// Layer 2
	 
	this.text_1 = new DOMObject({type:"TEXT",compId:"ID_txt04",width:"462.15",expand:"down",align:"center"});
	
	this.addChild(this.text_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,45.1,16.2);


(lib.label_1841_front = function() {
	this.initialize();

	// Layer 2
	
	this.text_2 = new DOMObject({type:"TEXT",compId:"ID_txt03",width:"350",expand:"down",align:"center"});
	this.addChild(this.text_2);
	
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,45.1,16.2);



(lib.routerWindow = function() {
	this.initialize();

	this.router = new RouterComp({width:468,height:181,textId:"ID_s1_txt01",x:2,y:1,size:10});
	this.addChild(this.router);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,112,16.6);

//this.instance_32 = new RouterComp({width:350,height:190,textId:"ID_s1_txt01",x:10,y:165,size:10});


(lib._1841top = function() {
	this.initialize();

	// Layer 1
	this.instance_1 = new lib._1841t();
	this.instance_1.setTransform(0,0,0.883,0.883);

	this.addChild(this.instance_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,445,353);


(lib._1841front = function() {
	this.initialize();

	// Layer 1
	this.instance_2 = new lib._1841a();

	this.addChild(this.instance_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,600,145);


(lib.Router_1 = function() {
	this.initialize();

	// Layer 2
	this.instance_3 = new lib.Router();
	this.instance_3.setTransform(0,-67.1,0.626,0.624);

	this.addChild(this.instance_3);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-67.1,92.7,66.8);


(lib.router_mc = function() {
	this.initialize();

	// text

	this.text_4 = new DOMObject({type:"TEXT",text:"R1",bold:"1",color:"#FFFFFF"});
	this.text_4.setTransform(18,21);

	// router
	this.instance_4 = new lib.Router_1();
	this.instance_4.setTransform(25,18,0.54,0.54,0,0,0,46.2,-33.4);

	this.addChild(this.instance_4,this.text_4);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-0.1,50.1,37);


(lib.anim = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{},true);

	// lazy text
	this.instance_5 = new lib.label_router_output();
	this.instance_5.setTransform(235.4,336.4,1,1,0,0,0,231.1,8.5);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(271).to({alpha:1},17).wait(2));

	// router output
	this.ro = new lib.routerWindow();
	this.ro.setTransform(4.7,143.5);
	this.ro.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.ro).wait(271).to({alpha:1},17).wait(2));

	// lazy text 2
	this.instance_6 = new lib.label_1841_top();
	this.instance_6.setTransform(235.4,333.4,1,1,0,0,0,231.1,8.5);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(124).to({alpha:1},10).wait(88).to({alpha:0},21).wait(47));

	// 1841 top
	this.instance_7 = new lib._1841top();
	this.instance_7.setTransform(252.2,246,0.5,0.5,0,0,0,252,200);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(124).to({alpha:1},10).wait(88).to({alpha:0},21).wait(47));

	// lazy text 3
	this.instance_8 = new lib.label_1841_front();
	this.instance_8.setTransform(228.4,314.4,1,1,0,0,0,175,8.5);
	this.instance_8.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(28).to({alpha:1},16).wait(70).to({alpha:0},10).wait(105).to({alpha:1},19).wait(8).to({alpha:0},14).wait(20));

	// 1841 front
	this.instance_9 = new lib._1841front();
	this.instance_9.setTransform(234,119.4,0.246,0.246,0,0,0,299.8,72.5);
	this.instance_9.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(28).to({regX:300,scaleX:0.6,scaleY:0.6,x:238.7,y:259.5,alpha:1},16,cjs.Ease.get(1)).wait(70).to({alpha:0},10).wait(105).to({alpha:1},19).wait(8).to({alpha:0},14).wait(20));

	// router
	this.instance_10 = new lib.router_mc();
	this.instance_10.setTransform(233.5,120,1,1,0,0,0,25,18.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10}]}).wait(290));

	// highlight
	this.instance_11 = new lib.router_highlight();
	this.instance_11.setTransform(235.9,122.2,1.158,1.211,0,0,0,32,26);
	this.instance_11.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(4).to({alpha:1},10).wait(276));

	// bg
	this.instance_12 = new lib.media_1112_Animation();
	this.instance_12.setTransform(0,0,0.72,0.719);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12}]}).wait(290));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,470,400);


(lib.Main = function() {
	this.initialize();

	// Animation
	this.anim1 = new lib.anim();
	this.anim1.setTransform(277.1,-135.3,1,1,0,0,0,277.1,-135.4);

	this.addChild(this.anim1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,470,400);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;