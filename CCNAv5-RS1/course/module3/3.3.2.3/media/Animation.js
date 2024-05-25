(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.classesmediaMediaObject = function() {
	this.initialize();

	// main
	this.instance = new lib.Main();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-10.5,-19.9,480.6,400);



// symbols:
(lib._3_3_2_3 = function() {
	this.initialize();
	this.instance = new DOMObject({type:"IMAGE",image:img._3_3_2_3});
	this.addChild(this.instance);

}).prototype = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,470,400);

(lib.envelope_closed_action = function() {
	this.initialize();
	this.instance = new DOMObject({type:"IMAGE",image:img.envelope_closed_action});
	this.addChild(this.instance);
}).prototype = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,263,79);



(lib.textMc = function() {
	this.initialize();

	// Layer 1
//	this.text = new cjs.Text("ID_txt03", "11px Arial", "#393536");
	this.text = new DOMObject({type:"TEXT" , align:"left" ,compId:"ID_txt03", width:"129", expand:"down"}); 

	this.text.setTransform(27,37.2);

//	this.text_1 = new cjs.Text("ID_txt04", "11px Arial", "#393536");
 	this.text_1 = new DOMObject({type:"TEXT" , align:"left" ,compId:"ID_txt04", width:"120", expand:"down"}); 

	this.text_1.setTransform(27,167.2);

	//this.text_2 = new cjs.Text("ID_txt05", "11px Arial", "#393536");
 	this.text_2 = new DOMObject({type:"TEXT" , align:"left" ,compId:"ID_txt05", width:"122",  expand:"down"}); 

	this.text_2.setTransform(365.1,165.2);

/*	this.text_3 = new cjs.Text("ID_txt02", "11px Arial", "#393536");
 	this.text_3 = new DOMObject({type:"TEXT" , align:"center" ,compId:"ID_txt02", width:"29",  color:"#ffffff" ,expand:"up+down"}); 

 
	this.text_3.setTransform(410,1.8);*/

//	this.text_4 = new cjs.Text("ID_txt06", "11px Arial", "#393536");
 	this.text_4 = new DOMObject({type:"TEXT" , align:"left" ,compId:"ID_txt06", width:"123",  expand:"down"}); 

	this.text_4.setTransform(365.1,22.2);

/*this.text_5 = new cjs.Text("ID_txt01", "11px Arial", "#393536");
 	this.text_5 = new DOMObject({type:"TEXT" , align:"center" ,compId:"ID_txt01", width:"53", color:"#ffffff", expand:"up+down"}); 

 
	this.text_5.setTransform(213.1,3);*/

	this.addChild(this.text_4,this.text_2,this.text_1,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(3.6,-0.8,427.1,184.2);

(lib.lineMc = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AQeNlIu76mAqpKJIKO3KAZ6tkMgzzAAA");
	this.shape.setTransform(155,87);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,331.8,173.9);




(lib.ID_bubble02 = function() {
	this.initialize();

	// Layer 1
	//this.text_6 = new cjs.Text("ID_bubble02", "11px Arial", "#393536");
	this.text_6 = new DOMObject({ type:"BUBBLE", compId:"ID_bubble02",  width:"155", height:"70", align:"left",  tailPosition:"7", tailFlip:"0",divId:"bubble2" }); 
	this.text_6.setTransform(31.2,0);

	this.addChild(this.text_6);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,66.4,16.2);


(lib.ID_bubble01 = function() {
	this.initialize();

	// Layer 1
	this.text_7 = new DOMObject({ type:"BUBBLE", compId:"ID_bubble01",  width:"195", height:"55", align:"left",  tailPosition:"7", tailFlip:"0",divId:"bubble1" }); 

	this.text_7.setTransform(31.2,0);

	this.addChild(this.text_7);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,66.4,16.2);



(lib.arprequest = function() {
	this.initialize();

	// text
//	this.text_8 = new cjs.Text("ID_txt07", "11px Arial", "#393536");
	this.text_8 = new DOMObject({type:"TEXT" , align:"center" ,compId:"ID_txt07", size:"10",width:"45", expand:"up+down"}); 


	this.text_8.setTransform(37,5);

	// envelope
	this.instance = new lib.envelope_closed_action();
	this.instance.setTransform(-10.5,-3.1,0.347,0.345);

	this.addChild(this.instance,this.text_8);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-10.5,-3.1,92.2,27.3);

(lib.arpreply = function() {
	this.initialize();

	// text
	//this.text_9 = new cjs.Text("ID_txt08", "11px Arial", "#393536");
	this.text_9 = new DOMObject({type:"TEXT" , align:"center" ,compId:"ID_txt08", width:"45",  size:"10", expand:"up+down"}); 



	this.text_9.setTransform(37,5);

	// Layer 2
	this.instance_1 = new lib.envelope_closed_action();
	this.instance_1.setTransform(-12.9,-3.9,0.367,0.365);

	this.addChild(this.instance_1,this.text_9);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-12.9,-3.9,96.6,28.8);


(lib.animation01 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{},true);

	// bubble1
	this.instance_2 = new lib.ID_bubble01();
	this.instance_2.setTransform(20,73,1,1,0,0,0,33.2,8.1);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(14).to({alpha:1},0).wait(250));

	// bubble2
	this.instance_3 = new lib.ID_bubble02(); 
	this.instance_3.setTransform(300,250,1,1,0,0,0,33.2,8.1);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(160).to({alpha:1},0).wait(104));

	// text
	this.instance_4 = new lib.textMc();
	this.instance_4.setTransform(210,252.2,1,1,0,0,0,233,94.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4}]}).wait(264));

		// bg
	this.instance_10 = new lib._3_3_2_3();


	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10}]}).wait(264));

	// packet 5
	this.instance_5 = new lib.arpreply();
	this.instance_5.setTransform(295.4,332.9,1,1,0,0,0,35.1,10.5);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(190).to({alpha:1},0).to({x:210.3,y:155.9},29).wait(11).to({x:35.3},30).wait(1).to({alpha:0},0).wait(3));

	// packet 4
	this.instance_6 = new lib.arprequest();
	this.instance_6.setTransform(210.3,155.9,1,1,0,0,0,35.1,10.5);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(115).to({alpha:1},0).to({x:383.3},30).wait(1).to({alpha:0},0).wait(118));

	// packet 3
	this.instance_7 = new lib.arprequest();
	this.instance_7.setTransform(210.3,155.9,1,1,0,0,0,35.1,10.5);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(115).to({alpha:1},0).to({x:295.4,y:332.9},35).wait(1).to({alpha:0},0).wait(113));

	// packet 2
	this.instance_8 = new lib.arprequest();
	this.instance_8.setTransform(212.3,155.9,1,1,0,0,0,35.1,10.5);
	this.instance_8.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(115).to({alpha:1},0).to({x:124.5,y:332.2},35).wait(1).to({alpha:0},0).wait(113));

	// packet 1
	this.instance_9 = new lib.arprequest();
	this.instance_9.setTransform(35.1,156,1,1,0,0,0,35.1,10.5);
	this.instance_9.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(74).to({alpha:1},0).to({x:210.3,y:155.9},30).wait(1).to({alpha:0},0).wait(159));


	// lines
	this.instance_11 = new lib.lineMc();
	this.instance_11.setTransform(223.3,242.7,1,1,0,0,0,165.8,87);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11}]}).wait(264));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.5,0,480.6,400);


(lib.Main = function() {
	this.initialize();

	// animation
	this.anim01 = new lib.animation01();
	this.anim01.setTransform(0,-19.9);

	this.addChild(this.anim01);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-10.5,-19.9,480.6,400);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;