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
(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,653,556);

(lib.text2 = function() {
	this.initialize();

	// Layer 3
this.text = new DOMObject({type:"TEXT" , align:"center" ,compId:"ID_s2_txt03", size:"11", bgColor:"#E0D5E6", borderColor:"#652C8A", border:"2", corner:"5", width:"175", expand:"up+down"}); 
this.text.setTransform(4,0);
	
	

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,57.5,15.2);


(lib.text1 = function() {
	this.initialize();

	// Layer 2
	this.text_1 = new DOMObject({type:"TEXT" , align:"center" ,compId:"ID_s2_txt02", size:"11",bgColor:"#FDE6D4", borderColor:"#F68026", border:"2", corner:"5", width:"175", expand:"up"}); 
this.text_1.setTransform(4,0);
	this.addChild(this.text_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,57.5,15.2);

(lib.lock = function() {
 this.initialize();
	this.instance = new DOMObject({type:"IMAGE",image:img.lock});
	this.addChild(this.instance);
}).prototype = new cjs.Container();


(lib.lock_1 = function() {
	this.initialize();

	// img
	this.instance = new lib.lock();
	this.instance.setTransform(-32,-33.8,0.721,0.721);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-32,-33.8,54.1,62);


(lib.AnimMc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// lock 1
	this.instance_1 = new lib.lock_1();
	this.instance_1.setTransform(116.5,141.2,0.7,0.7,0,0,0,-4.9,-2.6);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(11).to({alpha:1},21).wait(193));

	// lock 2
	this.instance_2 = new lib.lock_1();
	this.instance_2.setTransform(191.4,230.2,0.7,0.7,0,0,0,-4.9,-2.6);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(11).to({alpha:1},21).wait(193));

	// text 2
	this.instance_3 = new lib.text2();
	this.instance_3.setTransform(198.9,140.5,1,1,0,0,0,75,8.5);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(139).to({alpha:1},0).to({x:271.1,y:226.1},46).to({alpha:0},1).wait(39));

	// text 1
	this.instance_4 = new lib.text1();
	this.instance_4.setTransform(131.4,60.6,1,1,0,0,0,75,8.5);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(54).to({alpha:1},8).wait(34).to({x:197.4,y:138.7},42).to({alpha:0},1).wait(47).to({x:272.7,y:227.9,alpha:1},0).to({x:321.4,y:285.6},31).wait(8));

	// bg
	this.instance_5 = new lib.bg();
	this.instance_5.setTransform(0,0,0.72,0.719);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5}]}).wait(225));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,470,400);


(lib.slide_2 = function() {
	this.initialize();

	// imageLoader
	this.anim01 = new lib.AnimMc();

	this.addChild(this.anim01);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,470,400);


(lib.Main = function() {
	this.initialize();

	// slide2
	this.slide02 = new lib.slide_2();
	this.slide02.setTransform(202.5,126.5,1,1,0,0,0,202.5,126.5);

	this.addChild(this.slide02);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,470,400);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;