(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.classesmediaMediaObject = function() {
	this.initialize();

	// main
	this.instance = new lib.Main();
	this.instance.setTransform(-110.9,0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2.6,-29,473,400);


// symbols:
(lib._4_1_1_3 = function() {
	this.initialize(img._4_1_1_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,470,400);


(lib.envelope_closed_static = function() {
	 this.initialize();
	this.instance = new DOMObject({type:"IMAGE",image:img.envelope_closed_static});
	this.addChild(this.instance);
}).prototype = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,123,79);


(lib.Not_Allowed = function() {
	 this.initialize();
	this.instance = new DOMObject({type:"IMAGE",image:img.Not_Allowed});
	this.addChild(this.instance);
}).prototype = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);


(lib.ID_txt05 = function() {
	this.initialize();

	// ID_txt05
	this.text = new DOMObject({type:"TEXT",compId:"ID_txt05",width:"50",expand:"up+down",align:"center",color:"#652c8a",bold:"1"});
	this.text.setTransform(-5,10);


	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,96,16.2);


(lib.ID_txt04 = function() {
	this.initialize();

	// ID_txt04
	this.text= new DOMObject({type:"TEXT",compId:"ID_txt04",width:"105",expand:"up+down",align:"center",color:"#652c8a",bold:"1"});	
	this.text.setTransform(-5,5);
	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,105,16.2);


(lib.ID_txt03 = function() {
	this.initialize();

	// ID_txt03
	this.text = new DOMObject({type:"TEXT",compId:"ID_txt03",width:"40",expand:"up+down",align:"center",color:"#652c8a",bold:"1"});
	this.text.setTransform(20,10);
	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,79,16.2);


(lib.text4 = function() {
	this.initialize();

	// ID_txt09
	this.text = new TextBoxComp({width:130,height:180,titleId:"",bodyId:"ID_txt09",size:"11",divId:"textBox4"});
	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-5.9,0,143,16.2);


(lib.text3 = function() {
	this.initialize();

	// ID_txt08
	this.text = new TextBoxComp({width:130,height:180,titleId:"",bodyId:"ID_txt08",size:"11",divId:"textBox3"});
	
	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-5.9,0,143,16.2);


(lib.text2 = function() {
	this.initialize();

	// ID_txt07
	this.text = new TextBoxComp({width:130,height:180,titleId:"",bodyId:"ID_txt07",size:"11",divId:"textBox2"});
	
	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-5.9,0,143,16.2);


(lib.text1 = function() {
	this.initialize();

	// ID_txt06
	this.text = new TextBoxComp({width:130,height:180,titleId:"",bodyId:"ID_txt06",size:"11",divId:"textBox1"});
	
	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-5.9,0,143,16.2);


(lib.NotAllowed = function() {
	this.initialize();

	// png
	this.instance = new lib.Not_Allowed();
	this.instance.setTransform(-24.9,-24.9,0.5,0.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-24.9,-24.9,50,50);

(lib.envelopeclosedstatic = function() {
	this.initialize();

	// png
	this.instance = new lib.envelope_closed_static();
	this.instance.setTransform(-39.5,-26.8,0.667,0.663);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-39.5,-26.8,82.1,52.4);


(lib.envelopeorangeclosedstatic = function() {
	this.initialize();

	// inner lines
	this.instance = new DOMObject({type:"IMAGE",image:img.envelope_orange});
	//this.instance = new lib.envelope_orange_closed_static();
	this.instance.setTransform(-39.5,-26.8,0.667,0.663);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-39.5,-26.8,82.1,52.4);

(lib.envelopegreenclosedstatic = function() {
	this.initialize();
	this.instance = new DOMObject({type:"IMAGE",image:img.envelope_green});
	this.instance.setTransform(-39.5,-26.8,0.667,0.663);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-39.5,-26.8,82.1,52.4);

(lib.envelopebrownclosedstatic = function() {
	this.initialize();

	// inner lines
this.instance = new DOMObject({type:"IMAGE",image:img.envelope_brown});
	this.instance.setTransform(-39.5,-26.8,0.667,0.663);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-39.5,-26.8,82.1,52.4);

(lib.Anim = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// not allowed
	this.instance = new lib.NotAllowed();
	this.instance.setTransform(330.2,271,0.752,0.752,0,0,0,39.5,39.5);
	this.instance.alpha = 0;
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,3,3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(498).to({alpha:1},0).wait(84));

	// envelope_brown
	this.instance_1 = new lib.envelopebrownclosedstatic();
	this.instance_1.setTransform(302.7,329,0.565,0.565,0,0,0,3.6,2.6);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(472).to({alpha:1},0).to({x:301.7,y:244},26).wait(84));

	// envelopegreen
	this.instance_2 = new lib.envelopegreenclosedstatic();
	this.instance_2.setTransform(305.7,210,0.565,0.565,0,0,0,3.6,2.6);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(456).to({alpha:1},0).to({x:372.4,y:127.5},42).wait(84));

	// envelopegreen
	this.instance_3 = new lib.envelopegreenclosedstatic();
	this.instance_3.setTransform(390.7,102,0.565,0.565,0,0,0,3.6,2.6);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(408).to({alpha:1},0).to({x:305.7,y:210},48).to({x:244.9,y:127.5},42).wait(84));

	// envelopegreen
	this.instance_4 = new lib.envelopegreenclosedstatic();
	this.instance_4.setTransform(222.7,102,0.565,0.565,0,0,0,3.6,2.6);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(456).to({alpha:1},0).to({x:352.4,y:100.5},42).wait(84));

	// envelopegreen
	this.instance_5 = new lib.envelopegreenclosedstatic();
	this.instance_5.setTransform(390.7,102,0.565,0.565,0,0,0,3.6,2.6);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(408).to({alpha:1},0).to({x:222.7},48).to({x:284.9,y:183},42).wait(84));

	// envelopegreen
	this.instance_6 = new lib.envelopegreenclosedstatic();
	this.instance_6.setTransform(391.7,102,0.565,0.565,0,0,0,3.6,2.6);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(456).to({alpha:1},0).to({x:519.2,y:100.5},42).wait(84));

	// envelopegreen
	this.instance_7 = new lib.envelopegreenclosedstatic();
	this.instance_7.setTransform(391.7,102,0.565,0.565,0,0,0,3.6,2.6);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(502).to({alpha:1},0).to({x:266.4,y:100.5},47).wait(33));

	// envelopegreen
	this.instance_8 = new lib.envelopegreenclosedstatic();
	this.instance_8.setTransform(223.7,102,0.565,0.565,0,0,0,3.6,2.6);
	this.instance_8.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(453).to({alpha:1},0).to({x:391.7},49).to({x:327.2,y:183},47).wait(33));

	// envelopegreen
	this.instance_9 = new lib.envelopegreenclosedstatic();
	this.instance_9.setTransform(303.7,212,0.565,0.565,0,0,0,3.6,2.6);
	this.instance_9.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(404).to({alpha:1},0).to({x:390.7,y:102},49).to({x:560.7},49).wait(1).to({alpha:0},0).wait(79));

	// envelopegreen
	this.instance_10 = new lib.envelopegreenclosedstatic();
	this.instance_10.setTransform(303.7,212,0.565,0.565,0,0,0,3.6,2.6);
	this.instance_10.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(404).to({alpha:1},0).to({x:223.7,y:102},49).to({x:306.7,y:210},49).to({x:393.7,y:306},47).wait(33));

	// envelopegreen
	this.instance_11 = new lib.envelopegreenclosedstatic();
	this.instance_11.setTransform(303.7,212,0.565,0.565,0,0,0,3.6,2.6);
	this.instance_11.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(404).to({alpha:1},0).to({x:182.7,y:341},49).wait(1).to({alpha:0},0).wait(48).to({x:306.7,y:210,alpha:1},0).to({x:303.7,y:306},47).wait(33));

	// envelopegreen
	this.instance_12 = new lib.envelopegreenclosedstatic();
	this.instance_12.setTransform(423.7,338,0.565,0.565,0,0,0,3.6,2.6);
	this.instance_12.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(353).to({alpha:1},0).to({x:303.7,y:212},51).to({y:337},49).wait(1).to({alpha:0},0).wait(48).to({x:306.7,y:210,alpha:1},0).to({x:215.2,y:306},47).wait(33));

	// envelope_orange
	this.instance_13 = new lib.envelopeorangeclosedstatic();
	this.instance_13.setTransform(223.7,102,0.565,0.565,0,0,0,3.6,2.6);
	this.instance_13.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(295).to({alpha:1},0).to({x:390.7},56).to({x:304.7,y:212},48).to({x:224.7,y:102},50).to({x:304.7,y:212},49).to({x:235.7,y:117.1},51).wait(33));

	// envelope_orange
	this.instance_14 = new lib.envelopeorangeclosedstatic();
	this.instance_14.setTransform(303.7,212,0.565,0.565,0,0,0,3.6,2.6);
	this.instance_14.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(351).to({alpha:1},0).to({x:394.7,y:101},48).to({x:304.7,y:211},50).to({x:394.7,y:101},49).to({x:248.1},51).wait(33));

	// envelope_orange
	this.instance_15 = new lib.envelopeorangeclosedstatic();
	this.instance_15.setTransform(223.7,102,0.565,0.565,0,0,0,3.6,2.6);
	this.instance_15.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(295).to({alpha:1},0).to({x:303.7,y:212},56).to({x:224.7,y:101},48).to({x:304.7,y:211},50).to({x:224.7,y:101},49).to({x:362.6},51).wait(33));

	// envelope_orange
	this.instance_16 = new lib.envelopeorangeclosedstatic();
	this.instance_16.setTransform(389.7,102,0.565,0.565,0,0,0,3.6,2.6);
	this.instance_16.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(351).to({alpha:1},0).to({x:560.7},48).wait(1).to({x:390.7},0).to({x:560.7},49).wait(1).to({x:390.7},0).to({x:550.7},48).wait(1).to({x:390.7},0).to({x:527.8},50).wait(33));

	// envelope_orange
	this.instance_17 = new lib.envelopeorangeclosedstatic();
	this.instance_17.setTransform(305.7,211,0.565,0.565,0,0,0,3.6,2.6);
	this.instance_17.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(295).to({alpha:1},0).to({x:389.7,y:102},56).to({x:225.7},48).to({x:395.7},50).to({x:305.7,y:212},49).to({x:374.6,y:117.1},51).wait(33));

	// envelope_orange
	this.instance_18 = new lib.envelopeorangeclosedstatic();
	this.instance_18.setTransform(225.7,101,0.565,0.565,0,0,0,3.6,2.6);
	this.instance_18.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(351).to({alpha:1},0).to({x:304.7,y:212},48).to({x:394.7,y:102},50).to({x:224.7},49).to({x:293.6,y:196.8},51).wait(33));

	// envelope_orange
	this.instance_19 = new lib.envelopeorangeclosedstatic();
	this.instance_19.setTransform(305.7,211,0.565,0.565,0,0,0,3.6,2.6);
	this.instance_19.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(295).to({alpha:1},0).to({x:225.7,y:101},56).to({x:395.7},48).to({x:225.7},50).to({x:395.7},49).to({x:318.1,y:195.8},51).wait(33));

	// envelope_orange
	this.instance_20 = new lib.envelopeorangeclosedstatic();
	this.instance_20.setTransform(305.7,211,0.565,0.565,0,0,0,3.6,2.6);
	this.instance_20.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(295).to({alpha:1},0).to({x:183.7,y:336},56).to({x:305.7,y:211},1).to({x:183.7,y:336},47).wait(1).to({x:305.7,y:211},0).to({x:183.7,y:336},47).wait(1).to({alpha:0},0).wait(1).to({x:305.7,y:211,alpha:1},0).to({x:183.7,y:336},49).wait(1).to({x:305.7,y:211},0).to({x:201.1,y:318.1},50).wait(33));

	// envelope_orange
	this.instance_21 = new lib.envelopeorangeclosedstatic();
	this.instance_21.setTransform(305.7,211,0.565,0.565,0,0,0,3.6,2.6);
	this.instance_21.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(295).to({alpha:1},0).to({x:302.7,y:340},56).to({x:305.7,y:211},1).to({x:302.7,y:340},47).wait(1).to({x:305.7,y:211},0).to({x:302.7,y:340},47).wait(1).to({alpha:0},0).wait(1).to({x:305.7,y:211,alpha:1},0).to({x:302.7,y:340},49).wait(1).to({x:305.7,y:211},0).to({x:303.1,y:321.5},50).wait(33));

	// envelope_orange
	this.instance_22 = new lib.envelopeorangeclosedstatic();
	this.instance_22.setTransform(305.7,211,0.565,0.565,0,0,0,3.6,2.6);
	this.instance_22.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(295).to({alpha:1},0).to({x:423.7,y:337},56).to({x:305.7,y:211},1).to({x:423.7,y:337},47).wait(1).to({x:305.7,y:211},0).to({x:423.7,y:337},47).wait(1).to({alpha:0},0).wait(1).to({x:305.7,y:211,alpha:1},0).to({x:423.7,y:337},49).wait(1).to({x:305.7,y:211},0).to({x:406.8,y:319},50).wait(33));

	// envelope_orange
	this.instance_23 = new lib.envelopeorangeclosedstatic();
	this.instance_23.setTransform(391.7,102,0.565,0.565,0,0,0,3.6,2.6);
	this.instance_23.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(241).to({alpha:1},0).to({x:223.7},54).wait(1).to({alpha:0},0).wait(286));

	// envelope_orange
	this.instance_24 = new lib.envelopeorangeclosedstatic();
	this.instance_24.setTransform(561.7,102,0.565,0.565,0,0,0,3.6,2.6);
	this.instance_24.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(183).to({alpha:1},0).to({x:391.7},58).to({x:305.7,y:211},54).wait(1).to({alpha:0},0).wait(286));

	// envelope
	this.instance_25 = new lib.envelopeclosedstatic();
	this.instance_25.setTransform(391.7,102,0.565,0.565,0,0,0,3.6,2.6);
	this.instance_25.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(122).to({alpha:1},0).to({x:561.7},61).to({alpha:0},1).wait(57).to({x:391.7,alpha:1},0).to({x:561.7},54).to({alpha:0},1).wait(57).to({x:391.7,alpha:1},0).to({x:231.7},52).to({x:391.7},52).to({x:221.7},59).to({x:290.7},33).wait(33));

	// envelope
	this.instance_26 = new lib.envelopeclosedstatic();
	this.instance_26.setTransform(391.7,102,0.565,0.565,0,0,0,3.6,2.6);
	this.instance_26.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(122).to({alpha:1},0).to({x:302.7,y:212},61).to({x:424.7,y:336},58).wait(1).to({alpha:0},0).wait(340));

	// envelope
	this.instance_27 = new lib.envelopeclosedstatic();
	this.instance_27.setTransform(221.7,102,0.565,0.565,0,0,0,3.6,2.6);
	this.instance_27.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(183).to({alpha:1},0).to({x:392.7},58).to({x:221.7},56).to({x:391.7},56).to({x:561.7},52).wait(1).to({x:391.7},0).to({x:561.7},51).wait(1).to({x:391.7},0).to({x:561.7},58).wait(1).to({x:391.7},0).to({x:457.5},32).wait(33));

	// envelope
	this.instance_28 = new lib.envelopeclosedstatic();
	this.instance_28.setTransform(303.7,213,0.565,0.565,0,0,0,3.6,2.6);
	this.instance_28.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(48).to({alpha:1},0).wait(11).to({x:391.7,y:102},63).to({x:221.7},61).to({x:302.7,y:212},58).to({x:221.7,y:102},56).to({x:303.7,y:212},56).to({x:393.7,y:102},52).to({x:303.7,y:212},52).to({x:221.7,y:102},59).to({x:254.2,y:146.7},33).wait(33));

	// envelope
	this.instance_29 = new lib.envelopeclosedstatic();
	this.instance_29.setTransform(303.7,212,0.565,0.565,0,0,0,3.6,2.6);
	this.instance_29.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(183).to({alpha:1},0).to({x:392.7,y:102},58).to({x:303.7,y:212},56).to({x:393.7,y:102},56).to({x:303.7,y:212},52).to({x:223.7,y:102},52).to({x:393.7},59).to({x:324.6},33).wait(33));

	// envelope
	this.instance_30 = new lib.envelopeclosedstatic();
	this.instance_30.setTransform(303.7,212,0.565,0.565,0,0,0,3.6,2.6);
	this.instance_30.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(183).to({alpha:1},0).to({x:221.7,y:102},58).to({x:303.7,y:212},56).to({x:223.7,y:102},56).to({x:383.7},52).to({x:223.7},52).to({x:303.7,y:212},59).to({x:271.2,y:167.3},33).wait(33));

	// envelope
	this.instance_31 = new lib.envelopeclosedstatic();
	this.instance_31.setTransform(303.7,212,0.565,0.565,0,0,0,3.6,2.6);
	this.instance_31.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(183).to({alpha:1},0).to({y:341},58).wait(1).to({alpha:0},0).wait(340));

	// envelope
	this.instance_32 = new lib.envelopeclosedstatic();
	this.instance_32.setTransform(301.7,212,0.565,0.565,0,0,0,3.6,2.6);
	this.instance_32.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(241).to({alpha:1},0).to({x:424.7,y:336},54).wait(1).to({alpha:0},0).wait(1).to({x:301.7,y:212,alpha:1},0).to({x:424.7,y:336},56).wait(1).to({x:301.7,y:212},0).to({x:424.7,y:336},51).wait(1).to({x:301.7,y:212},0).to({x:424.7,y:336},51).wait(1).to({x:301.7,y:212},0).to({x:424.7,y:336},58).wait(1).to({x:301.7,y:212},0).to({x:349.3,y:260},32).wait(33));

	// envelope
	this.instance_33 = new lib.envelopeclosedstatic();
	this.instance_33.setTransform(303.7,212,0.565,0.565,0,0,0,3.6,2.6);
	this.instance_33.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(241).to({alpha:1},0).to({y:341},54).wait(1).to({alpha:0},0).wait(1).to({y:212,alpha:1},0).to({y:341},56).wait(1).to({y:212},0).to({y:341},51).wait(1).to({y:212},0).to({y:341},51).wait(1).to({y:212},0).to({y:341},58).wait(1).to({y:212},0).to({y:261.9},32).wait(33));

	// envelope
	this.instance_34 = new lib.envelopeclosedstatic();
	this.instance_34.setTransform(303.7,212,0.565,0.565,0,0,0,3.6,2.6);
	this.instance_34.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(241).to({alpha:1},0).to({x:183.7,y:341},54).wait(1).to({alpha:0},0).wait(1).to({x:303.7,y:212,alpha:1},0).to({x:183.7,y:341},56).wait(1).to({x:303.7,y:212},0).to({x:183.7,y:341},51).wait(1).to({x:303.7,y:212},0).to({x:183.7,y:341},51).wait(1).to({x:303.7,y:212},0).to({x:183.7,y:341},58).wait(1).to({x:303.7,y:212},0).to({x:257.2,y:261.9},32).wait(33));

	// envelope
	this.instance_35 = new lib.envelopeclosedstatic();
	this.instance_35.setTransform(221.7,102,0.565,0.565,0,0,0,3.6,2.6);
	this.instance_35.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_35).wait(122).to({alpha:1},0).to({x:303.7,y:212},61).to({x:183.7,y:341},58).wait(1).to({alpha:0},0).wait(340));

	// envelope
	this.instance_36 = new lib.envelopeclosedstatic();
	this.instance_36.setTransform(303.7,213,0.565,0.565,0,0,0,3.6,2.6);
	this.instance_36.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_36).wait(48).to({alpha:1},0).wait(11).to({x:221.7,y:102},63).to({x:391.7},61).to({x:301.7,y:212},58).to({x:391.7,y:102},56).to({x:221.7},56).to({x:301.7,y:212},52).to({x:391.7,y:102},52).to({x:301.7,y:212},59).to({x:338.2,y:167.3},33).wait(33));

	// envelope
	this.instance_37 = new lib.envelopeclosedstatic();
	this.instance_37.setTransform(303.7,213,0.565,0.565,0,0,0,3.6,2.6);
	this.instance_37.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_37).wait(48).to({alpha:1},0).wait(11).to({x:423.7,y:342},63).wait(1).to({alpha:0},0).wait(60).to({x:391.7,y:102,alpha:1},0).to({x:221.7},58).to({x:391.7},56).to({x:303.7,y:212},56).to({x:223.7,y:102},52).to({x:303.7,y:212},52).to({x:393.7,y:102},59).to({x:357.1,y:146.7},33).wait(33));

	// envelope
	this.instance_38 = new lib.envelopeclosedstatic();
	this.instance_38.setTransform(184.7,335,0.565,0.565,0,0,0,3.6,2.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_38).to({x:303.7,y:213},48).wait(11).to({y:342},63).wait(1).to({alpha:0},0).wait(459));
	// textbox1
	this.instance_39 = new lib.text1();
	this.instance_39.setTransform(535.5,178.5,1,1,0,0,0,88.5,8.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_39).wait(183).to({alpha:0},0).wait(399));

	// textbox2
	this.instance_40 = new lib.text2();
	this.instance_40.setTransform(535.5,178.5,1,1,0,0,0,88.5,8.5);
	this.instance_40.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_40).wait(183).to({alpha:1},0).wait(170).to({alpha:0},0).wait(229));

	// textbox3
	this.instance_41 = new lib.text3();
	this.instance_41.setTransform(535.5,178.5,1,1,0,0,0,88.5,8.5);
	this.instance_41.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_41).wait(353).to({alpha:1},0).wait(119).to({alpha:0},0).wait(110));

	// textbox4
	this.instance_42 = new lib.text4();
	this.instance_42.setTransform(535.5,178.5,1,1,0,0,0,88.5,8.5);
	this.instance_42.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_42).wait(472).to({alpha:1},0).wait(110));

	// ID_txt03
	this.instance_43 = new lib.ID_txt03();
	this.instance_43.setTransform(219.2,161.5,1,1,0,0,0,36.5,8.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_43}]}).wait(582));

	// ID_txt04
	this.instance_44 = new lib.ID_txt04();
	this.instance_44.setTransform(307.2,89.6,1,1,0,0,0,52,8.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_44}]}).wait(582));

	// ID_txt05
	this.instance_45 = new lib.ID_txt05();
	this.instance_45.setTransform(390.3,161.5,1,1,0,0,0,42,8.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_45}]}).wait(582));

	// static text
	this.text = new cjs.Text("F0/18", "11px Arial", "#393536");
	this.text.textAlign = "center";
	this.text.lineHeight = 13;
	this.text.setTransform(291.1,233);
	this.text.shadow = new cjs.Shadow("rgba(255,255,255,1)",0,0,5);

	this.text_1 = new cjs.Text("F0/1", "11px Arial", "#393536");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 13;
	this.text_1.setTransform(379.1,119);

	this.text_2 = new cjs.Text("F0/3", "11px Arial", "#393536");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 13;
	this.text_2.setTransform(425.1,104);

	this.text_3 = new cjs.Text("F0/2", "11px Arial", "#393536");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 13;
	this.text_3.setTransform(335.1,104);

	this.text_4 = new cjs.Text("F0/1", "11px Arial", "#393536");
	this.text_4.textAlign = "center";
	this.text_4.lineHeight = 13;
	this.text_4.setTransform(255.1,104);

	this.text_5 = new cjs.Text("F0/2", "11px Arial", "#393536");
	this.text_5.textAlign = "center";
	this.text_5.lineHeight = 13;
	this.text_5.setTransform(210.1,119);

	this.text_6 = new cjs.Text("F0/1", "11px Arial", "#393536");
	this.text_6.textAlign = "center";
	this.text_6.lineHeight = 13;
	this.text_6.setTransform(330.1,180);

	this.text_7 = new cjs.Text("F0/2", "11px Arial", "#393536");
	this.text_7.textAlign = "center";
	this.text_7.lineHeight = 13;
	this.text_7.setTransform(263.1,180);

	this.text_8 = new cjs.Text("F0/6", "11px Arial", "#393536");
	this.text_8.textAlign = "center";
	this.text_8.lineHeight = 13;
	this.text_8.setTransform(336.1,225);

	this.text_9 = new cjs.Text("F0/11", "11px Arial", "#393536");
	this.text_9.textAlign = "center";
	this.text_9.lineHeight = 13;
	this.text_9.setTransform(249.1,225);

	this.text_10 = new cjs.Text("172.17.10.27", "bold 11px Arial", "#393536");
	this.text_10.textAlign = "center";
	this.text_10.lineHeight = 13;
	this.text_10.lineWidth = 86;
	this.text_10.setTransform(556,121.5);

	this.text_11 = new cjs.Text("172.17.10.23", "bold 11px Arial", "#393536");
	this.text_11.textAlign = "center";
	this.text_11.lineHeight = 13;
	this.text_11.lineWidth = 86;
	this.text_11.setTransform(417,364.5);

	this.text_12 = new cjs.Text("172.17.10.22", "bold 11px Arial", "#393536");
	this.text_12.textAlign = "center";
	this.text_12.lineHeight = 13;
	this.text_12.lineWidth = 86;
	this.text_12.setTransform(297,364.5);

	this.text_13 = new cjs.Text("172.17.10.21", "bold 11px Arial", "#393536");
	this.text_13.textAlign = "center";
	this.text_13.lineHeight = 13;
	this.text_13.lineWidth = 86;
	this.text_13.setTransform(177,364.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_13},{t:this.text_12},{t:this.text_11},{t:this.text_10},{t:this.text_9},{t:this.text_8},{t:this.text_7},{t:this.text_6},{t:this.text_5},{t:this.text_4},{t:this.text_3},{t:this.text_2},{t:this.text_1},{t:this.text}]}).wait(582));

	// bg
	this.instance_46 = new lib._4_1_1_3();
	this.instance_46.setTransform(127,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_46}]}).wait(582));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(134,0,473,400);


(lib.Main = function() {
	this.initialize();

	// Animation
	this.anim01 = new lib.Anim();
	this.anim01.setTransform(190.3,196.1,1,1,0,0,0,316,225.1);

	this.addChild(this.anim01);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(108.3,-29,473,400);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;