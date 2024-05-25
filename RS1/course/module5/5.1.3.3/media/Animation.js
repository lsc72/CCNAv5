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
(lib._10_1_3_3 = function() {
	this.initialize(img._10_1_3_3);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,653,556);


(lib.envelope_closed_static = function() {
	this.initialize(img.envelope_closed_static);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,123,79);


(lib.lazy_txt = function() {
	this.initialize();

	// Layer 1
	this.text = new DOMObject({type:"TEXT" , align:"left" ,compId:"ID_txt04", width:"118", expand:"up+down",size:10});
	this.text.setTransform(378,-4.8);

	this.text_1 = new DOMObject({type:"TEXT" , align:"left" ,compId:"ID_txt17", width:"100", expand:"left+right",size:10});
	this.text_1.setTransform(223,282.2);

	this.text_2 = new DOMObject({type:"TEXT" , align:"left" ,compId:"ID_txt16", width:"100", expand:"left+right",size:10});
	this.text_2.setTransform(292,245.2);

	this.text_3 = new DOMObject({type:"TEXT" , align:"center" ,compId:"ID_txt13", width:"50", expand:"down",size:10});
	this.text_3.setTransform(290,205);

	this.text_4 = new DOMObject({type:"TEXT" , align:"center" ,compId:"ID_txt12", width:"80", expand:"down",size:10});
	this.text_4.setTransform(211,205);

	this.text_5 = new DOMObject({type:"TEXT" , align:"center" ,compId:"ID_txt14", width:"80", expand:"down",size:10});
	this.text_5.setTransform(108,205);

	this.text_6 = new DOMObject({type:"TEXT" , align:"center" ,compId:"ID_txt15", width:"80", expand:"down",size:10});
	this.text_6.setTransform(14,205);

	this.text_7 = new DOMObject({type:"TEXT" , align:"center" ,compId:"ID_txt06", width:"45", expand:"up+down",size:10});
	this.text_7.setTransform(412,184.2);

	this.text_8 = new DOMObject({type:"TEXT" , align:"center" ,compId:"ID_txt07", width:"50", expand:"up+down",size:10});
	this.text_8.setTransform(354,184.2);

	this.text_9 = new DOMObject({type:"TEXT" , align:"center" ,compId:"ID_txt09", width:"60", expand:"up+down",size:10});
	this.text_9.setTransform(282,184.2);

	this.text_10 = new DOMObject({type:"TEXT" , align:"center" ,compId:"ID_txt08", width:"70", expand:"up+down",size:10});
	this.text_10.setTransform(207.1,184.2);

	this.text_11 = new DOMObject({type:"TEXT" , align:"center" ,compId:"ID_txt10", width:"100", expand:"up+down",size:10});
	this.text_11.setTransform(106.5,184.2);

	this.text_12 = new DOMObject({type:"TEXT" , align:"center" ,compId:"ID_txt11", width:"100", expand:"up+down",size:10});
	this.text_12.setTransform(4.3,184.2);

	this.text_13 = new DOMObject({type:"TEXT" , align:"center" ,compId:"ID_txt05", width:"160", expand:"up+down",size:10});
	this.text_13.setTransform(153,119);

	this.text_14 = new DOMObject({type:"TEXT" , align:"right" ,compId:"ID_txt03", width:"110", expand:"up+down",size:10});
	this.text_14.setTransform(-25,35);

	this.addChild(this.text_14,this.text_13,this.text_12,this.text_11,this.text_10,this.text_9,this.text_8,this.text_7,this.text_6,this.text_5,this.text_4,this.text_3,this.text_2,this.text_1,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(4.3,-4.8,452.8,303.2);


(lib.envelopeclosedstatic = function() {
	this.initialize();

	// inner lines
	this.instance = new lib.envelope_closed_static();
	this.instance.setTransform(-39.5,-26.1,0.667,0.663);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-39.5,-26.1,82.1,52.4);


(lib.bublle1 = function() {
	this.initialize();

	// Layer 1
	this.text_15 = new BubbleComp({x:"0",y:"0",width:"200",size:"11",compId:"ID_bubble_01",align:"center",tailPosition:"6",tailFlip:"1",extend:"right"});
//	var element = getCJSElement("BUBBLE",{x:"",y:"",width:"",compId:"",size:"11",div:"parentdiv" ,align:"center",tailPosition:"2",tailFlip:"1"});
	//this.text_15 = new cjs.Text("ID_bubble_01", "11px Arial", "#4E41C4D");
//	this.text_15.lineHeight = 13;
	this.text_15.setTransform(3,10.2);

	this.addChild(this.text_15);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(3,10.2,72.6,16.2);


(lib.envelopebubble = function() {
	this.initialize();

	// Layer 1
	this.instance_1 = new lib.envelopeclosedstatic();
	this.instance_1.setTransform(44.7,31.6,1.2,1.2,0,0,0,1.5,0.1);

	this.addChild(this.instance_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-4.5,0.1,98.5,62.9);


(lib.animation01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// bubble
	this.instance_2 = new lib.bublle1();
	this.instance_2.setTransform(125,53,1,1,0,0,0,103.1,32);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(8).to({alpha:1},11).wait(105));

	// texts
	this.instance_3 = new lib.lazy_txt();
	this.instance_3.setTransform(234.6,205.6,1,1,0,0,0,233.6,146);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).wait(124));

	// packet
	this.instance_4 = new lib.envelopebubble();
	this.instance_4.setTransform(144,92,0.395,0.395,0,0,0,44.6,31.5);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(19).to({x:115.2,y:95},0).to({alpha:1},12).to({x:236.4},45).to({regX:44.7,regY:31.6,scaleX:0.28,scaleY:0.28,x:358.6,y:66},41).wait(7));

	// back
	this.instance_5 = new lib._10_1_3_3();
	this.instance_5.setTransform(0,0,0.72,0.719);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5}]}).wait(124));

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