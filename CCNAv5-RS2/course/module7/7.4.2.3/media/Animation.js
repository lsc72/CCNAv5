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
(lib._3423 = function() {
	this.initialize(img._3423);
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


(lib.ID_txt04 = function() {
	this.initialize();

	// txt
	this.text = new BubbleComp({width:85,height:26.05,compId:"ID_txt04",tailPosition:"2",align:"left"});	
	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,80,16.2);


(lib.ID_txt03 = function() {
	this.initialize();

	// txt
	this.text = new BubbleComp({width:80,height:80,compId:"ID_txt03",tailPosition:"1",align:"left"});	
	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,80,16.2);


(lib.ID_txt02 = function() {
	this.initialize();

	// txt
	this.text = new BubbleComp({width:80,height:80,compId:"ID_txt02",tailPosition:"1",align:"left"});	
	this.text.setTransform(5,0);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(5,0,80,16.2);


(lib.ID_txt01 = function() {
	this.initialize();

	// txt
	this.text = new BubbleComp({width:80,height:80,compId:"ID_txt01",tailPosition:"5",align:"left"});	

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,80,16.2);


(lib.envelopeclosedstatic = function() {
	this.initialize();

	// png
	this.instance = new lib.envelope_closed_static();
	this.instance.setTransform(-20,-25.5,0.667,0.65);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-39,-25.5,82.1,51.4);


(lib.envelopebubble = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.envelopeclosedstatic();
	this.instance.setTransform(44.7,31.6,1.2,1.2,0,0,0,1.5,0.1);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-3.9,0.8,98.5,61.6);


(lib.animation01 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// packet_01 
	this.instance = new lib.envelopebubble();
	this.instance.setTransform(141.1,180.1,0.4,0.4,0,0,0,44.6,31.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10).to({alpha:1},15).to({x:383.1,y:48.1},58).wait(12).to({alpha:0},15).wait(23).to({alpha:1},7).wait(13).to({x:372.3,y:54},0).to({x:140.1,y:181.1},57).wait(7).to({alpha:0},15).wait(3));

	// packet_02
	this.instance_1 = new lib.envelopebubble();
	this.instance_1.setTransform(141.1,180.1,0.4,0.4,0,0,0,44.6,31.5);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10).to({alpha:1},15).to({x:382.1},58).wait(12).to({alpha:0},15).wait(23).to({alpha:1},7).wait(13).to({x:371.4},0).to({x:141.1},57).wait(7).to({alpha:0},0).wait(18));

	// packet_03
	this.instance_2 = new lib.envelopebubble();
	this.instance_2.setTransform(141.1,180.1,0.4,0.4,0,0,0,44.6,31.5);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10).to({alpha:1},15).to({x:383.1,y:312.1},58).wait(12).to({alpha:0},15).wait(23).to({alpha:1},7).wait(13).to({x:372.3,y:306.3},0).to({x:141.1,y:181.1},57).wait(7).to({y:180.1,alpha:0},0).wait(18));

	// packet_04
	this.instance_3 = new lib.envelopebubble();
	this.instance_3.setTransform(141.1,180.1,0.4,0.4,0,0,0,44.6,31.5);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(10).to({alpha:1},15).to({x:22.9},58).wait(12).to({alpha:0},15).wait(125));

	// bubble_01
	this.instance_4 = new lib.ID_txt01();
	this.instance_4.setTransform(112,119.4,1,1,0,0,0,40,40);
this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(10).to({alpha:1},0).wait(74).to({alpha:0},0).wait(151));

	// bubble_02
	this.instance_5 = new lib.ID_txt02();
	this.instance_5.setTransform(374.4,128,1,1,0,0,0,40,40);
this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(133).to({alpha:1},0).wait(102));

	// bubble_03
	this.instance_6 = new lib.ID_txt03();
	this.instance_6.setTransform(374.4,242.9,1,1,0,0,0,40,40);
this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(133).to({alpha:1},0).wait(102));

	// bubble_04
	this.instance_7 = new lib.ID_txt04();
	this.instance_7.setTransform(316,320.5,1,1,0,0,0,47.5,13);
this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(133).to({alpha:1},0).wait(102));

	// txt
	this.text = new DOMObject({type:"TEXT",text:"S0/0/1\n.1", color:"#393536"});
	this.text.lineHeight = 13;
	this.text.lineWidth = 55;
	this.text.setTransform(176.1,166.5);

	this.text_1 = new DOMObject({type:"TEXT",text:".1\nS0/1/0", color:"#393536"});	
	this.text_1.textAlign = "right";
	this.text_1.lineHeight = 13;
	this.text_1.lineWidth = 48;
	this.text_1.setTransform(153,197);

	this.text_2 = new DOMObject({type:"TEXT",text:"Fa0/0", color:"#393536"});
	this.text_2.textAlign = "right";
	this.text_2.lineHeight = 13;
	this.text_2.lineWidth = 51;
	this.text_2.setTransform(72,163.8);

	this.text_3 = new DOMObject({type:"TEXT",text:"S0/0/0\n.1", color:"#393536"});
	this.text_3.lineHeight = 13;
	this.text_3.lineWidth = 55;
	this.text_3.setTransform(161.6,134.1);

	this.text_4 = new DOMObject({type:"TEXT",text:"10.2.0.0/16", color:"#393536",bold:"1"});
	this.text_4.textAlign = "center";
	this.text_4.lineHeight = 13;
	this.text_4.lineWidth = 70;
	this.text_4.setTransform(220.1,92.2);

	this.text_5 = new DOMObject({type:"TEXT",text:"10.3.0.0/16", color:"#393536",bold:"1"});
	this.text_5.textAlign = "center";
	this.text_5.lineHeight = 13;
	this.text_5.lineWidth = 70;
	this.text_5.setTransform(243.4,182.6);

	this.text_6 = new DOMObject({type:"TEXT",text:"10.4.0.0/16", color:"#393536",bold:"1"});
	this.text_6.textAlign = "center";
	this.text_6.lineHeight = 13;
	this.text_6.lineWidth = 71;
	this.text_6.setTransform(214.6,255.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_6},{t:this.text_5},{t:this.text_4},{t:this.text_3},{t:this.text_2},{t:this.text_1},{t:this.text}]}).wait(235));

	// bg
	this.instance_8 = new lib._3423();
	this.instance_8.setTransform(0,0,0.72,0.719);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8}]}).wait(235));

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