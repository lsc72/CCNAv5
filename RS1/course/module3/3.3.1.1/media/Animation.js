(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.classesmediaMediaObject = function() {
	this.initialize();

	// main
	this.instance = new lib.Main();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2.4,-1.2,481.1,402.8);


// symbols:
(lib._3_3_1_2_A = function() {
	this.initialize(img._3_3_1_2_A);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,653,556);


(lib._3_3_1_2_B = function() {
	this.initialize(img._3_3_1_2_B);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,653,556);


(lib.envelope_closed_static = function() {
	this.initialize(img.envelope_closed_static);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,123,79);


(lib.envelope_red = function() {
	this.initialize(img.envelope_red);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,55,35);


(lib.envelopeclosedstatic = function() {
	this.initialize();

	// png
	this.instance = new lib.envelope_closed_static();
	this.instance.setTransform(-39.5,-26.1,0.667,0.663);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-39.5,-26.1,82.1,52.4);


(lib.envelopeattackpacketalternatelocalonly = function() {
	this.initialize();

	// Layer 3
	this.instance_1 = new lib.envelope_red();
	this.instance_1.setTransform(-41,-26.1,1.493,1.497);

	this.addChild(this.instance_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-41,-26.1,82.1,52.4);


(lib.envelopebubble = function() {
	this.initialize();

	// Layer 1
	this.instance_2 = new lib.envelopeclosedstatic();
	this.instance_2.setTransform(44.7,31.6,1.2,1.2,0,0,0,1.5,0.1);

	this.addChild(this.instance_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-4.5,0.1,98.5,62.9);


(lib.movie_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// spot
	//this.text = new cjs.Text("ID_s1_txt01", "11px Arial", "#1C3635");
	this.text = new DOMObject({type:"TEXT" , align:"center" ,compId:"ID_s1_txt01", width:"263",  size:"13", expand:"up+down"}); 	
	this.text.setTransform(180,253.5);

	//this.text_1 = new cjs.Text("ID_s1_txt03", "11px Arial", "#1C3635");
	this.text_1 = new DOMObject({type:"TEXT" , align:"center" ,compId:"ID_s1_txt03", width:"280",  size:"13", expand:"up+down"}); 	
	this.text_1.setTransform(170,7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_1},{t:this.text}]}).wait(209));

	// Layer 7
	this.instance_3 = new lib.envelopebubble();
	this.instance_3.setTransform(15.4,62.7,0.4,0.4,0,0,0,44.8,31.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(7).to({_off:false},0).to({alpha:1},5).to({x:75.5,y:164},10).to({x:389.3},20).to({alpha:0},5).wait(15).to({x:15.4,y:62.7},0).to({alpha:1},5).to({x:75.5,y:164},10).to({x:389.3},20).to({alpha:0},5).wait(14).to({x:15.4,y:62.7},0).to({alpha:1},5).to({x:75.5,y:164},10).to({x:389.3},20).to({alpha:0},5).wait(53));

	// Layer 8
	this.instance_4 = new lib.envelopeattackpacketalternatelocalonly();
	this.instance_4.setTransform(18.4,272.2,0.48,0.481,0,0,0,1.5,0);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(22).to({_off:false},0).to({alpha:1},5).to({x:75.5,y:164},10).to({x:326.5},20).to({x:389.3,alpha:0},5).to({_off:true},10).wait(5).to({x:18.4,y:272.2,_off:false},0).to({alpha:1},5).to({x:75.5,y:164},10).to({x:326.5},20).to({x:389.3,alpha:0},5).to({_off:true},10).wait(4).to({x:18.4,y:272.2,_off:false},0).to({alpha:1},5).to({x:75.5,y:164},10).to({x:326.5},20).to({x:389.3,alpha:0},5).wait(38));

	// bg
	this.instance_5 = new lib._3_3_1_2_B();
	this.instance_5.setTransform(-92.8,-72.7,0.901,0.901);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5}]}).wait(209));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-92.8,-72.7,588.1,500.7);


(lib.movie_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// Layer 3
	//this.text_2 = new cjs.Text("ID_s1_txt02", "11px Arial", "#1C3635");
	this.text_2 = new DOMObject({type:"TEXT" , align:"center" ,compId:"ID_s1_txt02", width:"263",  size:"13", expand:"up+down"}); 
	this.text_2.setTransform(180,11.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_2}]}).wait(181));

	// big packet2
	this.instance_6 = new lib.envelopebubble();
	this.instance_6.setTransform(80.6,14.1,1,1,0,0,0,44.6,31.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(14).to({regX:44.7,scaleX:0.8,scaleY:0.8},15).wait(15).to({regX:44.6,scaleX:0.6,scaleY:0.6},15).wait(15).to({regX:44.8,scaleX:0.4,scaleY:0.4},15).to({_off:true},15).wait(77));

	// Layer 6
	this.instance_7 = new lib.envelopebubble();
	this.instance_7.setTransform(80.6,13.1,0.4,0.4,0,0,0,44.8,31.5);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(104).to({_off:false},0).to({x:15.4,y:62.7},15).to({x:75.5,y:164},10).to({x:389.3},20).to({alpha:0},5).wait(27));

	// Layer 7
	this.instance_8 = new lib.envelopebubble();
	this.instance_8.setTransform(80.6,13.1,0.4,0.4,0,0,0,44.8,31.5);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(74).to({_off:false},0).to({x:15.4,y:62.7},15).to({x:75.5,y:164},10).to({x:389.3},20).to({alpha:0},5).wait(57));

	// Layer 8
	this.instance_9 = new lib.envelopebubble();
	this.instance_9.setTransform(80.6,13.1,0.4,0.4,0,0,0,44.8,31.5);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(44).to({_off:false},0).to({x:15.4,y:62.7},15).to({x:75.5,y:164},10).to({x:389.3},20).to({alpha:0},5).wait(87));

	// Layer 9
	this.instance_10 = new lib.envelopebubble();
	this.instance_10.setTransform(80.6,13.1,0.4,0.4,0,0,0,44.8,31.5);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(14).to({_off:false},0).to({x:15.4,y:62.7},15).to({x:75.5,y:164},10).to({x:389.3},20).to({alpha:0},5).wait(117));

	// bg1
	this.instance_11 = new lib._3_3_1_2_A();
	this.instance_11.setTransform(-99.5,-80.5,0.945,0.929);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11}]}).wait(181));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-99.5,-80.5,616.8,516.6);


(lib.slide_1 = function() {
	this.initialize();

	// 2
	this.anim02 = new lib.movie_2();
	this.anim02.setTransform(124.3,24.1,0.78,0.78,0,0,0,62.8,-47.9);

	// 1
	this.anim01 = new lib.movie_1();
	this.anim01.setTransform(75.3,61.5,0.78,0.78);

	this.addChild(this.anim01,this.anim02);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2.4,-1.2,481.1,402.8);


(lib.Main = function() {
	this.initialize();

	// slide1
	this.slide01 = new lib.slide_1();
	this.slide01.setTransform(202.5,126.5,1,1,0,0,0,202.5,126.5);

	this.addChild(this.slide01);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2.4,-1.2,481.1,402.8);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;