(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.classesmediaMediaObject = function() {
	this.initialize();

	// main
	this.instance = new lib.Main();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,4,470,400);


// symbols:
(lib._10400 = function() {
	this.initialize();
	this.image = new DOMObject({type:"IMAGE",image:img._10400});
	this.addChild(this.image);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,63,30);


(lib._10400_highlight = function() {
	this.initialize();
	this.image = new DOMObject({type:"IMAGE",image:img._10400_highlight});
	this.addChild(this.image);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,63,30);


(lib._2highlight = function() {
	this.initialize();
	this.image = new DOMObject({type:"IMAGE",image:img._2highlight});
	this.addChild(this.image);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,36,30);


(lib._2hl = function() {
	this.initialize();
	this.image = new DOMObject({type:"IMAGE",image:img._2hl});
	this.addChild(this.image);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,36,30);


(lib._3134 = function() {
	this.initialize(img._3134);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,470,400);


(lib.box1 = function() {
	this.initialize();
	this.image = new DOMObject({type:"IMAGE",image:img.box1});
	this.addChild(this.image);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,57,30);


(lib.box4 = function() {
	this.initialize();
	this.image = new DOMObject({type:"IMAGE",image:img.box4});
	this.addChild(this.image);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,63,30);


(lib.box5 = function() {
	this.initialize();
	this.image = new DOMObject({type:"IMAGE",image:img.box5});
	this.addChild(this.image);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,63,30);


(lib.envelope_closed_static = function() {
	this.initialize();
	this.image = new DOMObject({type:"IMAGE",image:img.envelope_closed_static});
	this.addChild(this.image);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,123,79);


(lib.one = function() {
	this.initialize();
	this.image = new DOMObject({type:"IMAGE",image:img.one});
	this.addChild(this.image);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,36,30);


(lib.onewh = function() {
	this.initialize();
	this.image = new DOMObject({type:"IMAGE",image:img.onewh});
	this.addChild(this.image);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,36,30);


(lib.Router = function() {
	this.initialize(img.Router);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,148,107);


(lib.Wan_line = function() {
	this.initialize(img.Wan_line);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,314,23);


(lib.zero = function() {
	this.initialize();
	this.image = new DOMObject({type:"IMAGE",image:img.zero});
	this.addChild(this.image);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,36,30);


(lib.zerowh = function() {
	this.initialize();
	this.image = new DOMObject({type:"IMAGE",image:img.zerowh});
	this.addChild(this.image);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,36,30);


(lib._zero_lt_bg = function() {
	this.initialize();

	// txt
	this.text = new DOMObject({type:"TEXT",text:"0", color:"#393536"});		
	this.text.setTransform(-13,-7.5);

	// png
	this.instance = new lib.zerowh();
	this.instance.setTransform(-16.9,-13.7,0.944,0.917);

	this.addChild(this.instance,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-16.9,-13.7,34,27.5);


(lib._zero = function() {
	this.initialize();

	// txt
	this.text = new DOMObject({type:"TEXT",text:"0", color:"#393536"});
	this.text.setTransform(-13,-7.5);

	// png
	this.instance = new lib.zero();
	this.instance.setTransform(-16.9,-13.7,0.944,0.917);

	this.addChild(this.instance,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-16.9,-13.7,34,27.5);


(lib._two_hilite = function() {
	this.initialize();

	// txt
	this.text = new DOMObject({type:"TEXT",text:"2", color:"#393536"});
	this.text.setTransform(-13,-7.5);

	// png
	this.instance = new lib._2hl();
	this.instance.setTransform(-16.9,-13.7,0.944,0.917);

	this.addChild(this.instance,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-16.9,-13.7,34,27.5);


(lib._S0_0_1 = function() {
	this.initialize();

	// txt
	this.text = new DOMObject({type:"TEXT",text:"S0/0/1", color:"#393536"});	
	this.text.setTransform(-25,-7.5);

	// png
	this.instance = new lib.box1();
	this.instance.setTransform(-27.4,-13.7,0.965,0.917);

	this.addChild(this.instance,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-27.4,-13.7,55,27.5);


(lib._S0_0_0 = function() {
	this.initialize();
    // txt
	this.text = new DOMObject({type:"TEXT",text:"S0/0/0", color:"#393536"});	
	this.text.setTransform(-27,-7.5);
	// png
	this.instance = new lib.box1();
	this.instance.setTransform(-27.4,-13.7,0.965,0.917);

	this.addChild(this.instance,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-27.4,-13.7,55,27.5);


(lib._one_lt_bg = function() {
	this.initialize();

	// txt
	this.text = new DOMObject({type:"TEXT",text:"1", color:"#393536"});		
	this.text.setTransform(-13,-7);

	// png
	this.instance = new lib.onewh();
	this.instance.setTransform(-16.9,-13.7,0.944,0.917);

	this.addChild(this.instance,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-16.9,-13.7,34,27.5);


(lib._one = function() {
	this.initialize();

	// txt
	this.text = new DOMObject({type:"TEXT",text:"1", color:"#393536"});		
	this.text.setTransform(-13,-7.5);

	// png
	this.instance = new lib.one();
	this.instance.setTransform(-16.9,-12.9,0.944,0.917);

	this.addChild(this.instance,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-16.9,-12.9,34,27.5);


(lib._10400_1 = function() {
	this.initialize();

	// txt
	this.text = new DOMObject({type:"TEXT",text:"10.4.0.0", color:"#393536"});		
	this.text.setTransform(-30,-7.5);

	// jpg
	this.instance = new lib.box5();
	this.instance.setTransform(-30.4,-13.7,0.968,0.917);

	this.addChild(this.instance,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-30.4,-13.7,61,27.5);


(lib._10300_lt_bg = function() {
	this.initialize();

	// txt
	this.text = new DOMObject({type:"TEXT",text:"10.3.0.0", color:"#393536"});
	this.text.setTransform(-30,-7.5);

	// jpg
	this.instance = new lib.box4();
	this.instance.setTransform(-30.4,-13.7,0.968,0.917);

	this.addChild(this.instance,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-30.4,-13.7,61,27.5);


(lib._10300 = function() {
	this.initialize();

	// txt
	this.text = new DOMObject({type:"TEXT",text:"10.3.0.0", color:"#393536"});	
	this.text.setTransform(-30,-7.5);

	// jpg
	this.instance = new lib.box5();
	this.instance.setTransform(-30.4,-13.7,0.968,0.917);

	this.addChild(this.instance,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-30.4,-13.7,61,27.5);


(lib._10200_lt_bg = function() {
	this.initialize();

	// txt
	this.text = new DOMObject({type:"TEXT",text:"10.2.0.0", color:"#393536"});
	this.text.setTransform(-30,-7.5);
	// jpg
	this.instance = new lib.box4();
	this.instance.setTransform(-30.4,-13.7,0.968,0.917);

	this.addChild(this.instance,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-30.4,-13.7,61,27.5);


(lib._10200 = function() {
	this.initialize();

	// txt
	this.text = new DOMObject({type:"TEXT",text:"10.2.0.0", color:"#393536"});
	this.text.setTransform(-30,-7.5);

	// jpg
	this.instance = new lib.box5();
	this.instance.setTransform(-30.4,-13.7,0.968,0.917);

	this.addChild(this.instance,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-30.4,-13.7,61,27.5);


(lib._10100_lt_bg = function() {
	this.initialize();

	// txt
	this.text = new DOMObject({type:"TEXT",text:"10.1.0.0", color:"#393536"});	
	this.text.setTransform(-30,-7.5);

	// jpg
	this.instance = new lib.box4();
	this.instance.setTransform(-30.4,-13.7,0.968,0.917);

	this.addChild(this.instance,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-30.4,-13.7,61,27.5);


(lib._10100 = function() {
	this.initialize();

	// txt
	this.text = new DOMObject({type:"TEXT",text:"10.1.0.0", color:"#393536"});	
	this.text.setTransform(-30,-7.5);

	// jpg
	this.instance = new lib.box5();
	this.instance.setTransform(-30.4,-13.7,0.968,0.917);

	this.addChild(this.instance,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-30.4,-13.7,61,27.5);


(lib.ID_txt09 = function() {
	this.initialize();

	// txt
		this.text = new DOMObject({type:"TEXT",compId:"ID_txt09",width:"34.2",expand:"down",align:"center",color:"#FFFFFF"});

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,34.2,28.3);


(lib.ID_txt08 = function() {
	this.initialize();

	// txt
	this.text = new DOMObject({type:"TEXT",compId:"ID_txt08",width:"53.4",expand:"down",align:"center",color:"#FFFFFF"});


	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,53.4,15.2);


(lib.ID_txt07 = function() {
	this.initialize();

	// txt
	this.text = new DOMObject({type:"TEXT",compId:"ID_txt07",width:"57.2",expand:"down",align:"center",color:"#FFFFFF"});

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,57.2,15.2);


(lib.ID_txt06 = function() {
	this.initialize();

	// txt
	this.text = new DOMObject({type:"TEXT",compId:"ID_txt06",width:"31.65",expand:"down",align:"center",color:"#FFFFFF"});	

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,34.2,28.3);


(lib.ID_txt05 = function() {
	this.initialize();

	// txt
	this.text = new DOMObject({type:"TEXT",compId:"ID_txt05",width:"52.85",expand:"down",align:"center",color:"#FFFFFF"});

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,52.9,15.2);


(lib.ID_txt04 = function() {
	this.initialize();

	// txt
	this.text = new DOMObject({type:"TEXT",compId:"ID_txt04",width:"57.2",expand:"down",align:"center",color:"#FFFFFF"});

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,57.2,15.2);


(lib.ID_txt03 = function() {
	this.initialize();

	// txt
	this.text = new DOMObject({type:"TEXT",compId:"ID_txt03",width:"32.95",expand:"down",align:"center",color:"#FFFFFF"});

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,33,28.3);


(lib.ID_txt02 = function() {
	this.initialize();

	// txt
	this.text = new DOMObject({type:"TEXT",compId:"ID_txt02",width:"52.75",expand:"down",align:"center",color:"#FFFFFF"});

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,52.8,15.2);


(lib.ID_txt01 = function() {
	this.initialize();

	// txt
	this.text = new DOMObject({type:"TEXT",compId:"ID_txt01",width:"52.75",expand:"down",align:"center",color:"#FFFFFF"});

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,57.2,15.2);


(lib._10400_2 = function() {
	this.initialize();

	// Layer 1
	this.text = new DOMObject({type:"TEXT",text:"10.4.0.0", color:"#393536"});	
	this.text.setTransform(-2,0);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,40.3,15.2);


(lib.txtboxMc = function() {
	this.initialize();

	// txt
	this.text = new DOMObject({type:"TEXT",compId:"ID_txt20",width:"52.70",expand:"left+right",align:"center"});
	this.text.setTransform(-28.5,-8.4);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-28.5,-8.4,57.2,16.2);


(lib.envelopeclosedstatic = function() {
	this.initialize();

	// png
	this.instance = new lib.envelope_closed_static();
	this.instance.setTransform(-39,-25.5,0.652,0.65);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-39,-25.5,80.2,51.4);


(lib._2mc = function() {
	this.initialize();

	// Layer 1
	this.text = new DOMObject({type:"TEXT",text:"2", color:"#393536"});	
	this.text.setTransform(0,0);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,10.2,15.2);


(lib._2 = function() {
	this.initialize();

	// Layer 1
	this.text = new DOMObject({type:"TEXT",text:"2", color:"#393536"});	
	this.text.setTransform(0,0);
	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,10.2,15.2);


(lib.EnvelopeStatic6 = function() {
	this.initialize();

	// label
	this.text = new DOMObject({type:"TEXT",compId:"ID_txt15",width:"41.15",expand:"up+down",align:"center"});	
	this.text.setTransform(-22,-5);

	// Layer 1
	this.instance = new lib.envelopeclosedstatic();
	this.instance.setTransform(7,0.1,0.65,0.65,0,0,0,1.3,0.2);

	this.addChild(this.instance,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-20.4,-12.9,40.6,36.2);


(lib.EnvelopeStatic5 = function() {
	this.initialize();

	// label
	 this.text = new DOMObject({type:"TEXT",compId:"ID_txt14",width:"40.65",expand:"up+down",align:"center"});
	this.text.setTransform(-20,-5);

	// Layer 1
	this.instance = new lib.envelopeclosedstatic();
	this.instance.setTransform(10,0.1,0.65,0.65,0,0,0,1.3,0.2);

	this.addChild(this.instance,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-20.4,-12.9,40.6,36.2);


(lib.EnvelopeStatic4 = function() {
	this.initialize();

	// label
	this.text = new DOMObject({type:"TEXT",compId:"ID_txt13",width:"40.7",expand:"up+down",align:"center"});
	this.text.setTransform(-24,-5);

	// Layer 1
	this.instance = new lib.envelopeclosedstatic();
	this.instance.setTransform(5,0.1,0.65,0.65,0,0,0,1.3,0.2);

	this.addChild(this.instance,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-20.4,-12.9,40.6,36.2);


(lib.EnvelopeStatic3 = function() {
	this.initialize();

	// label
	this.text = new DOMObject({type:"TEXT",compId:"ID_txt12",width:"40.3",expand:"up+down",align:"center"});
	this.text.setTransform(-20,-5);

	// Layer 1
	this.instance = new lib.envelopeclosedstatic();
	this.instance.setTransform(9,0.1,0.65,0.65,0,0,0,1.3,0.2);

	this.addChild(this.instance,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-20.4,-12.9,40.6,36.2);


(lib.EnvelopeStatic2 = function() {
	this.initialize();

	// label
	this.text = new DOMObject({type:"TEXT",compId:"ID_txt11",width:"39.85",expand:"up+down",align:"center"});
	this.text.setTransform(-20,-5);

	// Layer 1
	this.instance = new lib.envelopeclosedstatic();
	this.instance.setTransform(10,0.1,0.65,0.65,0,0,0,1.3,0.1);

	this.addChild(this.instance,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-20.4,-12.8,40.6,36.2);


(lib.EnvelopeStatic = function() {
	this.initialize();

	// txt
	this.text = new DOMObject({type:"TEXT",compId:"ID_txt10",width:"38.55",expand:"up+down",align:"center"});
	this.text.setTransform(-20,-5);

	// Layer 1
	this.instance = new lib.envelopeclosedstatic();
	this.instance.setTransform(10,0.1,0.65,0.65,0,0,0,1.3,0.2);

	this.addChild(this.instance,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-20.4,-12.9,40.6,36.2);


(lib.animation01 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// textbox
	this.instance = new lib.txtboxMc();
	this.instance.setTransform(234.9,128.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(789).to({alpha:1},7).wait(32).to({alpha:0},7).wait(267));

	// table3, row4, col2
	this.instance_1 = new lib._S0_0_1();
	this.instance_1.setTransform(337.5,88.3,0.709,0.636);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1050).to({alpha:1,mode:"synched",startPosition:0},0).to({scaleX:1,scaleY:1,x:414,y:141.3},15).wait(5).to({startPosition:0},0).to({y:308.3},18).wait(14));

	// table3, row4, col3
	this.instance_2 = new lib._two_hilite("synched",0);
	this.instance_2.setTransform(409.7,141.3);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(992).to({alpha:1},0).wait(4).to({startPosition:0},0).to({x:459,y:308.3},23).to({alpha:0},17).wait(1).to({startPosition:0},0).wait(65));

	// table3, row4, col3
	this.instance_3 = new lib._one("synched",0);
	this.instance_3.setTransform(400.6,90.2,0.649,0.855);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(976).to({alpha:1},0).to({scaleX:1,scaleY:1,x:409.7,y:141.3,alpha:0},15).wait(111));

	// table3, row4, col1
	this.instance_4 = new lib._10100("synched",0);
	this.instance_4.setTransform(370.4,90.3,0.649,0.855);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(976).to({alpha:1},0).to({scaleX:1,scaleY:1,x:363.1,y:141.3},15).wait(5).to({startPosition:0},0).to({x:356.5,y:308.3},23).wait(83));

	// table 3, row4, text
	this.instance_5 = new lib._2();
	this.instance_5.setTransform(450,308.2,1,1,0,0,0,5.1,7.5);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1019).to({alpha:1},0).wait(83));

	// table3, row3, col3
	this.instance_6 = new lib._one_lt_bg("synched",0);
	this.instance_6.setTransform(450,280.8);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(680).to({alpha:1},0).to({x:407.1,y:143},15).wait(24).to({startPosition:0},0).to({scaleX:0.64,scaleY:0.72,x:443.7,y:91.7},9).to({alpha:0},10).wait(1).to({startPosition:0},0).wait(363));

	// table3, row3, col1
	this.instance_7 = new lib._10200_lt_bg("synched",0);
	this.instance_7.setTransform(347.5,280.8);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(680).to({alpha:1},0).to({x:359.7,y:143},15).wait(24).to({startPosition:0},0).to({scaleX:0.64,scaleY:0.72,x:413.1,y:91.7},9).to({alpha:0},10).wait(364));

	// table3, row2, col3
	this.instance_8 = new lib._zero("synched",0);
	this.instance_8.setTransform(450,253.3);
	this.instance_8.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(595).to({alpha:1,mode:"independent"},0).to({x:407.3,y:142.8},17).wait(25).to({scaleX:0.62,scaleY:0.63,x:375,y:93.5},9).to({alpha:0},10).wait(446));

	// table3, row2, col1
	this.instance_9 = new lib._10400_1("synched",0);
	this.instance_9.setTransform(347.5,253.3);
	this.instance_9.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(595).to({alpha:1,mode:"independent"},0).to({x:360,y:142.8},17).wait(25).to({scaleX:0.62,scaleY:0.63,x:345.5,y:93.5},9).to({alpha:0},10).wait(446));

	// table3, row1, co3
	this.instance_10 = new lib._zero_lt_bg();
	this.instance_10.setTransform(450,225.8);
	this.instance_10.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(511).to({alpha:1},0).to({x:405,y:142.8},15).wait(25).to({scaleX:0.56,scaleY:0.56,x:439.9,y:91.9},9).to({alpha:0},10).wait(532));

	// table3, row1, col1
	this.instance_11 = new lib._10300_lt_bg("synched",0);
	this.instance_11.setTransform(347.5,225.8);
	this.instance_11.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(511).to({alpha:1,mode:"independent"},0).to({x:357.5,y:142.8},15).wait(25).to({scaleX:0.56,scaleY:0.56,x:413.2,y:91.9},9).to({alpha:0},10).wait(532));

	// table2, row4, col3
	this.instance_12 = new lib._one();
	this.instance_12.setTransform(294,308.3);
	this.instance_12.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(427).to({alpha:1},0).to({x:261.8,y:155.2},15).wait(25).to({scaleX:0.53,scaleY:0.52,x:221.7,y:99.7},9).to({alpha:0},10).wait(616));

	// table2, row4, col1
	this.instance_13 = new lib._10400_1();
	this.instance_13.setTransform(191.5,308.3);
	this.instance_13.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(427).to({alpha:1},0).to({x:214.4,y:155.2},15).wait(25).to({scaleX:0.53,scaleY:0.52,x:196.3,y:99.9},9).to({alpha:0},10).wait(616));

	// table2, row2, col3
	this.instance_14 = new lib._zero();
	this.instance_14.setTransform(294,253.3);
	this.instance_14.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(427).to({alpha:1},0).to({x:261.8,y:128.2},15).wait(25).to({scaleX:0.53,scaleY:0.52,x:221.7,y:85.6},9).to({alpha:0},10).wait(616));

	// table2, row2, col1
	this.instance_15 = new lib._10300("synched",0);
	this.instance_15.setTransform(191.5,253.3);
	this.instance_15.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(427).to({alpha:1,mode:"independent"},0).to({x:214.4,y:128.2},15).wait(25).to({scaleX:0.53,scaleY:0.52,x:196.3,y:85.6},9).to({alpha:0},10).wait(616));

	// table2, row1, col3
	this.instance_16 = new lib._zero_lt_bg();
	this.instance_16.setTransform(294,225.8);
	this.instance_16.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(339).to({alpha:1},0).to({x:261.2,y:128},21).wait(25).to({scaleX:0.59,scaleY:0.57,x:295.2,y:83},9).to({alpha:0},10).wait(698));

	// table2, row1, col1
	this.instance_17 = new lib._10200_lt_bg("synched",0);
	this.instance_17.setTransform(191.5,225.8);
	this.instance_17.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(339).to({alpha:1,mode:"independent"},0).to({x:213.5,y:128},21).wait(25).to({scaleX:0.59,scaleY:0.57,x:267.1,y:83},9).to({alpha:0},10).wait(698));

	// table2, row3, col3
	this.instance_18 = new lib._one_lt_bg("synched",0);
	this.instance_18.setTransform(294,280.8);
	this.instance_18.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(339).to({alpha:1,mode:"independent"},0).to({x:261.2,y:156},21).wait(25).to({scaleX:0.59,scaleY:0.57,x:295.3,y:98.7},9).to({alpha:0},10).wait(698));

	// table2, row3, col1
	this.instance_19 = new lib._10100_lt_bg("synched",0);
	this.instance_19.setTransform(191.5,280.8);
	this.instance_19.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(339).to({alpha:1},0).to({x:213.5,y:156},21).wait(25).to({startPosition:0},0).to({scaleX:0.59,scaleY:0.57,x:267.1,y:98.9},9).to({alpha:0},10).to({startPosition:0},1).wait(697));

	// table1, row4, col2
	this.instance_20 = new lib._S0_0_0("synched",0);
	this.instance_20.setTransform(138,94.4,0.511,0.444);
	this.instance_20.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(916).to({alpha:1},0).to({scaleX:1,scaleY:1,x:101,y:139.3},16).wait(7).to({startPosition:0},0).to({y:308.3},16).wait(147));

	// table1, row4, col3
	this.instance_21 = new lib._two_hilite("synched",0);
	this.instance_21.setTransform(121.4,145.8);
	this.instance_21.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(863).to({alpha:1,mode:"independent"},0).wait(3).to({x:145.7,y:308.3},20).to({y:308,alpha:0},20).wait(196));

	// table1, row4, col3
	this.instance_22 = new lib._one();
	this.instance_22.setTransform(110.9,92.3,0.63,0.722);
	this.instance_22.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(845).to({alpha:1},0).to({scaleX:1,scaleY:1,x:121.4,y:145.8,alpha:0},17).wait(240));

	// table1, row4, col1
	this.instance_23 = new lib._10400_1();
	this.instance_23.setTransform(81.5,92.3,0.63,0.722);
	this.instance_23.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(845).to({alpha:1},0).to({scaleX:1,scaleY:1,x:74.8,y:145.8},17).wait(4).to({x:42.6,y:308.3},20).to({alpha:0},20).wait(196));

	// 2
	this.instance_24 = new lib._2mc();
	this.instance_24.setTransform(137,308.2,1,1,0,0,0,5.1,7.5);
	this.instance_24.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(886).to({alpha:1},0).wait(216));

	// 10.4.0.0
	this.instance_25 = new lib._10400_2();
	this.instance_25.setTransform(34.6,308.2,1,1,0,0,0,20.2,7.5);
	this.instance_25.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(886).to({alpha:1},0).wait(216));

	// table1, row3, col3
	this.instance_26 = new lib._one_lt_bg("synched",0);
	this.instance_26.setTransform(145,280.8);
	this.instance_26.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(245).to({alpha:1},0).to({x:100.1,y:136},20).wait(25).to({startPosition:0},0).to({scaleX:0.63,scaleY:0.71,x:83,y:93},9).to({alpha:0},9).to({startPosition:0},1).wait(793));

	// table1, row3, col1
	this.instance_27 = new lib._10300_lt_bg("synched",0);
	this.instance_27.setTransform(46.5,280.8);
	this.instance_27.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(245).to({alpha:1},0).to({x:52.9,y:136},20).wait(25).to({startPosition:0},0).to({scaleX:0.63,scaleY:0.71,x:52,y:93},9).to({alpha:0},9).to({startPosition:0},1).wait(793));

	// table1, row2, col3
	this.instance_28 = new lib._zero("synched",0);
	this.instance_28.setTransform(145,253.3);
	this.instance_28.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(153).to({alpha:1},0).to({x:101.5,y:135.6},19).wait(26).to({startPosition:0},0).to({scaleX:0.64,scaleY:0.59,x:83,y:92.4},8).to({alpha:0},9).to({startPosition:0},1).wait(886));

	// table1, row2, col1
	this.instance_29 = new lib._10200("synched",0);
	this.instance_29.setTransform(46.5,253.3);
	this.instance_29.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(153).to({alpha:1},0).to({x:53.9,y:135.6},19).wait(26).to({startPosition:0},0).to({scaleX:0.64,scaleY:0.59,x:52,y:92.4},8).to({alpha:0},9).to({startPosition:0},1).wait(886));

	// table1, row1, col3
	this.instance_30 = new lib._zero_lt_bg("synched",0);
	this.instance_30.setTransform(145,225.9);
	this.instance_30.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(60).to({alpha:1},0).to({x:103,y:135.7},20).wait(25).to({startPosition:0},0).to({scaleX:0.56,scaleY:0.61,x:150.1,y:91.2},9).to({x:150.6,y:91.5,alpha:0},9).to({startPosition:0},1).wait(978));

	// table1, row1, col1
	this.instance_31 = new lib._10100_lt_bg("synched",0);
	this.instance_31.setTransform(46.5,225.8);
	this.instance_31.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(60).to({alpha:1},0).to({x:56,y:135.7},20).wait(25).to({y:135.8},0).to({scaleX:0.56,scaleY:0.61,x:123.5,y:91.2},9).to({alpha:0},9).to({startPosition:0},1).wait(978));

	// envelope6
	this.instance_32 = new lib.EnvelopeStatic6();
	this.instance_32.setTransform(403.8,90.8);
	this.instance_32.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(10).to({x:419.8,alpha:1},20).wait(722).to({x:422.2},0).to({x:482.2,alpha:0},10).wait(340));

	// envelope5
	this.instance_33 = new lib.EnvelopeStatic5();
	this.instance_33.setTransform(362.2,90.8);
	this.instance_33.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(10).to({x:346.2,alpha:1},20).wait(737).to({x:342.2},0).to({x:272.2},10).to({alpha:0},9).wait(316));

	// envelope4
	this.instance_34 = new lib.EnvelopeStatic4();
	this.instance_34.setTransform(260.6,90.8);
	this.instance_34.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(10).to({x:275.8,alpha:1},20).wait(737).to({x:274.2},0).to({x:381.2},10).wait(311).to({scaleX:0.66,scaleY:0.66,alpha:0},13).wait(1));

	// envelope3
	this.instance_35 = new lib.EnvelopeStatic3();
	this.instance_35.setTransform(215.7,90.8);
	this.instance_35.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_35).wait(10).to({x:202.7,alpha:1},20).wait(737).to({x:100.7},10).wait(169).to({scaleX:0.88,scaleY:0.88,x:92.2},0).to({alpha:0},22).wait(134));

	// envelope2
	this.instance_36 = new lib.EnvelopeStatic2();
	this.instance_36.setTransform(112.5,90.8);
	this.instance_36.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_36).wait(10).to({x:120.6,alpha:1},20).wait(737).to({x:207.6},10).to({alpha:0},9).wait(316));

	// envelope1
	this.instance_37 = new lib.EnvelopeStatic();
	this.instance_37.setTransform(68.9,90.8);
	this.instance_37.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_37).wait(10).to({x:53.2,alpha:1},20).wait(722).to({x:21.2,alpha:0},10).wait(340));

	// ID_txt01
	this.instance_38 = new lib.ID_txt01();
	this.instance_38.setTransform(34.9,190,1,1,0,0,0,28.6,8.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_38}]}).wait(1102));

	// ID_txt02
	this.instance_39 = new lib.ID_txt02();
	this.instance_39.setTransform(91.7,190,1,1,0,0,0,26.4,8.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_39}]}).wait(1102));

	// ID_txt03
	this.instance_40 = new lib.ID_txt03();
	this.instance_40.setTransform(136.7,190,1,1,0,0,0,16.4,8.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_40}]}).wait(1102));

	// ID_txt04
	this.instance_41 = new lib.ID_txt04();
	this.instance_41.setTransform(191.9,190,1,1,0,0,0,28.6,8.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_41}]}).wait(1102));

	// ID_txt05
	this.instance_42 = new lib.ID_txt05();
	this.instance_42.setTransform(249.5,190,1,1,0,0,0,26.4,8.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_42}]}).wait(1102));

	// ID_txt06
	this.instance_43 = new lib.ID_txt06();
	this.instance_43.setTransform(294.1,190,1,1,0,0,0,15.8,8.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_43}]}).wait(1102));

	// ID_txt09
	this.instance_44 = new lib.ID_txt09();
	this.instance_44.setTransform(450.4,190,1,1,0,0,0,17.1,8.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_44}]}).wait(1102));

	// ID_txt08
	this.instance_45 = new lib.ID_txt08();
	this.instance_45.setTransform(405.4,190,1,1,0,0,0,26.7,8.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_45}]}).wait(1102));

	// ID_txt07
	this.instance_46 = new lib.ID_txt07();
	this.instance_46.setTransform(347.9,190,1,1,0,0,0,28.6,8.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_46}]}).wait(1102));

	// table 3 text
	this.text = new DOMObject({type:"TEXT",text:"1", color:"#393536"});	
	this.text.setTransform(445,273.2);

	this.text_1 = new DOMObject({type:"TEXT",text:"10.2.0.0", color:"#393536"});
	this.text_1.setTransform(325.5,273.2);

	this.text_2 = new DOMObject({type:"TEXT",text:"0", color:"#393536"});	
	this.text_2.setTransform(445,245.7);

	this.text_3 = new DOMObject({type:"TEXT",text:"0", color:"#393536"});	
	this.text_3.setTransform(445,218.2);

	this.text_4 = new DOMObject({type:"TEXT",text:"S0/0/1", color:"#393536"});	
	this.text_4.setTransform(388,273.2);

	this.text_5 = new DOMObject({type:"TEXT",text:"Fa0/0", color:"#393536"});	
	this.text_5.setTransform(388,245.7);

	this.text_6 = new DOMObject({type:"TEXT",text:"S0/0/1", color:"#393536"});	
	this.text_6.setTransform(388,218.2);

	this.text_7 = new DOMObject({type:"TEXT",text:"10.4.0.0", color:"#393536"});	
	this.text_7.setTransform(325.5,245.7);

	this.text_8 = new DOMObject({type:"TEXT",text:"10.3.0.0", color:"#393536"});
	this.text_8.setTransform(325.5,218.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_8},{t:this.text_7},{t:this.text_6},{t:this.text_5},{t:this.text_4},{t:this.text_3},{t:this.text_2},{t:this.text_1},{t:this.text}]}).wait(1102));

	

	// table 2 text
	this.text_9 = new DOMObject({type:"TEXT",text:"1", color:"#393536"});	
	this.text_9.setTransform(288,300.7);

	this.text_10 = new DOMObject({type:"TEXT",text:"S0/0/1", color:"#393536"});		
	this.text_10.setTransform(233.5,300.7);

	this.text_11= new DOMObject({type:"TEXT",text:"1", color:"#393536"});	
	this.text_11.setTransform(288,273.2);

	this.text_12 = new DOMObject({type:"TEXT",text:"0", color:"#393536"});	
	this.text_12.setTransform(288,245.7);

	this.text_13 = new DOMObject({type:"TEXT",text:"0", color:"#393536"});	
	this.text_13.setTransform(288,218.2);

	this.text_14 = new DOMObject({type:"TEXT",text:"S0/0/0", color:"#393536"});	
	this.text_14.setTransform(233.5,273.2);

	this.text_15 = new DOMObject({type:"TEXT",text:"S0/0/1", color:"#393536"});	
	this.text_15.setTransform(233.5,245.7);

	this.text_16 = new DOMObject({type:"TEXT",text:"S0/0/0", color:"#393536"});	
	this.text_16.setTransform(233.5,218.2);

	this.text_17 = new DOMObject({type:"TEXT",text:"10.4.0.0", color:"#393536"});	
	this.text_17.setTransform(170.5,300.7);

	this.text_18 = new DOMObject({type:"TEXT",text:"10.1.0.0", color:"#393536"});	
	this.text_18.setTransform(170.5,273.2);

	this.text_19 = new DOMObject({type:"TEXT",text:"10.3.0.0", color:"#393536"});	
	this.text_19.setTransform(170.5,245.7);

	this.text_20 = new DOMObject({type:"TEXT",text:"10.2.0.0", color:"#393536"});	
	this.text_20.setTransform(170.5,218.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_20},{t:this.text_19},{t:this.text_18},{t:this.text_17},{t:this.text_16},{t:this.text_15},{t:this.text_14},{t:this.text_13},{t:this.text_12},{t:this.text_11},{t:this.text_10},{t:this.text_9}]}).wait(1102));

	this.text_21 = new DOMObject({type:"TEXT",text:"1", color:"#393536"});	
	this.text_21.setTransform(131,273.2);

	this.text_22 = new DOMObject({type:"TEXT",text:"0", color:"#393536"});	
	this.text_22.setTransform(131,245.7);

	this.text_23 = new DOMObject({type:"TEXT",text:"0", color:"#393536"});	
	this.text_23.setTransform(131,218.2);

	this.text_24 = new DOMObject({type:"TEXT",text:"S0/0/0", color:"#393536"});	
	this.text_24.setTransform(75.5,273.2);

	this.text_25= new DOMObject({type:"TEXT",text:"S0/0/0", color:"#393536"});	
	this.text_25.setTransform(75.5,245.7);

	this.text_26 = new DOMObject({type:"TEXT",text:"Fa0/0", color:"#393536"});	
	this.text_26.setTransform(75.5,218.2);

	this.text_27 = new DOMObject({type:"TEXT",text:"10.3.0.0", color:"#393536"});	
	this.text_27.setTransform(12.5,273.2);

	this.text_28 = new DOMObject({type:"TEXT",text:"10.2.0.0", color:"#393536"});	
	this.text_28.setTransform(12.5,245.7);

	this.text_29 = new DOMObject({type:"TEXT",text:"10.1.0.0", color:"#393536"});	
	this.text_29.setTransform(12.5,218.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_29},{t:this.text_28},{t:this.text_27},{t:this.text_26},{t:this.text_25},{t:this.text_24},{t:this.text_23},{t:this.text_22},{t:this.text_21}]}).wait(1102));

	// text
	this.text_30 = new DOMObject({type:"TEXT",text:"Fa0/0", color:"#393536"});	
	this.text_30.setTransform(407.1,70.8);

	this.text_31 =  new DOMObject({type:"TEXT",text:"10.4.0.0", color:"#393536",bold:"1"});
	this.text_31.setTransform(417.9,28);

	this.text_32 =new DOMObject({type:"TEXT",text:"10.3.0.0", color:"#393536",bold:"1"});
	this.text_32.setTransform(280.8,28);

	this.text_33 =new DOMObject({type:"TEXT",text:"S0/0/1", color:"#393536"});
	this.text_33.setTransform(321,79.6);

	this.text_34 = new DOMObject({type:"TEXT",text:"S0/0/1", color:"#393536"});
	this.text_34.setTransform(262.1,88);

	this.text_35 =new DOMObject({type:"TEXT",text:"S0/0/0", color:"#393536"});
	this.text_35.setTransform(176.6,79.6);

	this.text_36 =  new DOMObject({type:"TEXT",text:"Fa0/0", color:"#393536"});
	this.text_36.setTransform(34.1,70.8);

	this.text_37 =new DOMObject({type:"TEXT",text:"10.2.0.0", color:"#393536",bold:"1"});
	this.text_37.setTransform(139.3,28);

	this.text_38 = new DOMObject({type:"TEXT",text:"S0/0/0", color:"#393536"});	
	this.text_38.setTransform(115.1,88);
	
	this.text_39 =new DOMObject({type:"TEXT",text:"10.1.0.0", color:"#393536",bold:"1"});	
	this.text_39.setTransform(17.3,28);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_39},{t:this.text_38},{t:this.text_37},{t:this.text_36},{t:this.text_35},{t:this.text_34},{t:this.text_33},{t:this.text_32},{t:this.text_31},{t:this.text_30}]}).wait(1102));

	// bg
	this.instance_47 = new lib._3134();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_47}]}).wait(1102));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,470,400);


(lib.Main = function() {
	this.initialize();

	// animation
	this.anim01 = new lib.animation01();
	this.anim01.setTransform(0,4);

	this.addChild(this.anim01);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,4,470,400);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;