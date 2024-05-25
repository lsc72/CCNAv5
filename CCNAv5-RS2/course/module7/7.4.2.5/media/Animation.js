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
(lib._3425 = function() {
	this.initialize(img._3425);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,653,556);


(lib.envelope_closed_static = function() {
	this.initialize();	
	this.image = new DOMObject({type:"IMAGE",image:img.envelope_closed_static});
	this.addChild(this.image);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,123,79);


(lib.Router = function() {
	this.initialize(img.Router);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,148,107);


(lib.envelopeclosedstatic = function() {
	this.initialize();

	// png
	this.instance = new lib.envelope_closed_static();
	this.instance.setTransform(-39.5,-26.1,0.667,0.663);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-39.5,-26.1,82.1,52.4);


(lib.EnvelopeStatic4 = function() {
	this.initialize();

	// txt
	this.text = new DOMObject({type:"TEXT",compId:"ID_txt04",width:"60.1",expand:"up+down",align:"center",size:"15"});
	this.text.setTransform(-10,10);

	// Layer 1
	this.instance = new lib.envelopeclosedstatic();
	this.instance.setTransform(30.8,19.7,0.75,0.75,0,0,0,1.4,0.1);

	this.addChild(this.instance,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,61.6,39.3);


(lib.EnvelopeStatic3 = function() {
	this.initialize();

	// txt
	this.text = new DOMObject({type:"TEXT",compId:"ID_txt03",width:"60.1",expand:"up+down",align:"center",size:"15"});	
	this.text.setTransform(-10,10);

	// Layer 1
	this.instance = new lib.envelopeclosedstatic();
	this.instance.setTransform(30.8,19.7,0.75,0.75,0,0,0,1.4,0.1);

	this.addChild(this.instance,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,61.6,39.3);


(lib.EnvelopeStatic2 = function() {
	this.initialize();

	// txt
	this.text = new DOMObject({type:"TEXT",compId:"ID_txt02",width:"60.1",expand:"up+down",align:"center",size:"15"});
	this.text.setTransform(-10,10);

	// Layer 1
	this.instance = new lib.envelopeclosedstatic();
	this.instance.setTransform(30.8,19.7,0.75,0.75,0,0,0,1.4,0.1);

	this.addChild(this.instance,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,61.6,39.3);


(lib.EnvelopeStatic = function() {
	this.initialize();

	// txt
	this.text = new DOMObject({type:"TEXT",compId:"ID_txt01",width:"60.1",expand:"up+down",align:"center",size:"15"});
	this.text.setTransform(-10,10);

	// Layer 1
	this.instance = new lib.envelopeclosedstatic();
	this.instance.setTransform(30.8,19.7,0.75,0.75,0,0,0,1.4,0.1);

	this.addChild(this.instance,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,61.6,39.3);

(lib.Symbol40 = function() {
this.initialize();

// Layer 1
this.text_40 = new TextBoxComp({width:460.20,height:90,titleId:"ID_Title_txt01",bodyId:"ID_Body_txt01",size:"11"});
this.addChild(this.text_40);
}).prototype = p = new cjs.Container();

(lib.animation01 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// envelope44
	this.instance = new lib.EnvelopeStatic4();
	this.instance.setTransform(220.7,317.5,0.64,0.64,0,0,0,30.8,19.6);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(56).to({scaleX:0.64,scaleY:0.65,x:233,y:322.8,alpha:1},0).to({scaleX:0.64,scaleY:0.64,x:230,y:236.4},39).wait(1));

	// envelope3
	this.instance_1 = new lib.EnvelopeStatic3();
	this.instance_1.setTransform(95.7,240.9,0.64,0.64,0,0,0,30.8,19.6);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({x:95.7,y:241,alpha:1},15).to({x:157,y:202.9},20).to({x:230,y:166.5},20).to({x:367.2,y:240.7},39).wait(1));

	// envelope2
	this.instance_2 = new lib.EnvelopeStatic2();
	this.instance_2.setTransform(95.7,240.9,0.64,0.64,0,0,0,30.8,19.6);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({alpha:1},15).to({x:231,y:238.2},40).to({y:315.2},39).wait(1));

	// envelope1
	this.instance_3 = new lib.EnvelopeStatic();
	this.instance_3.setTransform(95.7,238.9,0.64,0.64,0,0,0,30.8,19.6);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({x:95.7,y:242.8,alpha:1},15).to({x:230,y:323},40).to({x:367.2,y:236.7},39).wait(1));

	// Static texts
	this.text = new DOMObject({type:"TEXT",text:"2", color:"#393536"});	
	this.text.textAlign = "center";
	this.text.lineHeight = 13;
	this.text.setTransform(212.6,330);

	this.text_1 = new DOMObject({type:"TEXT",text:".1", color:"#393536"});	
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 13;
	this.text_1.setTransform(51.4,218.8);

	this.text_2 = new DOMObject({type:"TEXT",text:"10.8.0.0/16", color:"#393536"});		
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 13;
	this.text_2.setTransform(196,345);

	this.text_3 = new DOMObject({type:"TEXT",text:"10.10.0.0/16", color:"#393536"});		
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 13;
	this.text_3.setTransform(304.7,273.2);

	this.text_4 = new DOMObject({type:"TEXT",text:"10.7.0.0/16", color:"#393536"});
	this.text_4.textAlign = "center";
	this.text_4.lineHeight = 13;
	this.text_4.setTransform(222.6,274.7);

	this.text_5 = new DOMObject({type:"TEXT",text:"2", color:"#393536"});
	this.text_5.textAlign = "center";
	this.text_5.lineHeight = 13;
	this.text_5.setTransform(252.6,219.9);

	this.text_6 = new DOMObject({type:"TEXT",text:"10.6.0.0/16", color:"#393536"});
	this.text_6.textAlign = "center";
	this.text_6.lineHeight = 13;
	this.text_6.setTransform(268.6,228.1);

	this.text_7= new DOMObject({type:"TEXT",text:"10", color:"#393536"});
	this.text_7.textAlign = "center";
	this.text_7.lineHeight = 13;
	this.text_7.setTransform(206.6,264.9);

	this.text_8= new DOMObject({type:"TEXT",text:"10", color:"#393536"});
	this.text_8.textAlign = "center";
	this.text_8.lineHeight = 13;
	this.text_8.setTransform(285,261.4);

	this.text_9= new DOMObject({type:"TEXT",text:"2", color:"#393536"});
	this.text_9.textAlign = "center";
	this.text_9.lineHeight = 13;
	this.text_9.setTransform(407.1,217.9);

	this.text_10= new DOMObject({type:"TEXT",text:"10.11.0.0/16", color:"#393536"});
	this.text_10.textAlign = "center";
	this.text_10.lineHeight = 13;
	this.text_10.setTransform(370.1,194.1);

	this.text_11= new DOMObject({type:"TEXT",text:"10", color:"#393536"});
	this.text_11.textAlign = "center";
	this.text_11.lineHeight = 13;
	this.text_11.setTransform(283,206.6);

	this.text_12= new DOMObject({type:"TEXT",text:"10.9.0.0/16", color:"#393536"});
	this.text_12.textAlign = "center";
	this.text_12.lineHeight = 13;
	this.text_12.setTransform(273.1,179.6);

	this.text_13= new DOMObject({type:"TEXT",text:"2", color:"#393536"});
	this.text_13.textAlign = "center";
	this.text_13.lineHeight = 13;
	this.text_13.setTransform(212.6,141.1);

	this.text_14= new DOMObject({type:"TEXT",text:"10.5.0.0/16", color:"#393536"});
	this.text_14.textAlign = "center";
	this.text_14.lineHeight = 13;
	this.text_14.setTransform(196,125.1);

	this.text_15= new DOMObject({type:"TEXT",text:"10.4.0.0/16", color:"#393536"});
	this.text_15.textAlign = "center";
	this.text_15.lineHeight = 13;
	this.text_15.setTransform(105.1,285.6);

	this.text_16= new DOMObject({type:"TEXT",text:"10.3.0.0/16", color:"#393536"});
	this.text_16.textAlign = "center";
	this.text_16.lineHeight = 13;
	this.text_16.setTransform(135.6,236.8);

	this.text_17= new DOMObject({type:"TEXT",text:"Fa0/0", color:"#393536"});
	this.text_17.lineHeight = 13;
	this.text_17.setTransform(10.5,218.7);

	this.text_18= new DOMObject({type:"TEXT",text:"2", color:"#393536"});
	this.text_18.textAlign = "center";
	this.text_18.lineHeight = 13;
	this.text_18.setTransform(10.5,236.8);

	this.text_19= new DOMObject({type:"TEXT",text:"10.1.0.0/16", color:"#393536"});
	this.text_19.textAlign = "center";
	this.text_19.lineHeight = 13;
	this.text_19.setTransform(10.5,194.5);

	this.text_20= new DOMObject({type:"TEXT",text:"5", color:"#393536"});
	this.text_20.textAlign = "center";
	this.text_20.lineHeight = 13;
	this.text_20.setTransform(168.1,219.3);

	this.text_21= new DOMObject({type:"TEXT",text:"20", color:"#393536"});
	this.text_21.textAlign = "center";
	this.text_21.lineHeight = 13;
	this.text_21.setTransform(171,274.4);

	this.text_22= new DOMObject({type:"TEXT",text:"20", color:"#393536"});
	this.text_22.textAlign = "center";
	this.text_22.lineHeight = 13;
	this.text_22.setTransform(171,196);

	this.text_23= new DOMObject({type:"TEXT",text:"10.2.0.0/16", color:"#393536"});
	this.text_23.textAlign = "center";
	this.text_23.lineHeight = 13;
	this.text_23.setTransform(115.6,181);
	
		this.instance_40 = new lib.Symbol40();
	this.instance_40.setTransform(4,18.35);
	

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_23},{t:this.text_22},{t:this.text_21},{t:this.text_20},{t:this.text_19},{t:this.text_18},{t:this.text_17},{t:this.text_16},{t:this.text_15},{t:this.text_14},{t:this.text_13},{t:this.text_12},{t:this.text_11},{t:this.text_10},{t:this.text_9},{t:this.text_8},{t:this.text_7},{t:this.text_6},{t:this.text_5},{t:this.text_4},{t:this.text_3},{t:this.text_2},{t:this.text_1},{t:this.text},{t:this.instance_40}]}).wait(96));

	// icons
	this.instance_4 = new lib._3425();
	this.instance_4.setTransform(0,0,0.72,0.719);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4}]}).wait(96));

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