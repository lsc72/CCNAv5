(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.classesmediaMediaObject = function() {
	this.initialize();

	// main
	this.instance = new lib.Main();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-10.9,-1,481.2,400);


// symbols:
(lib._5_1_1_4 = function() {
	this.initialize(img._5_1_1_4);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,653,556);


(lib.Arrow = function() {
 
	 this.initialize();
	this.instance = new DOMObject({type:"IMAGE",image:img.Arrow});
	this.addChild(this.instance);
	
}).prototype = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,60,68);


 


(lib.arrow2 = function() {
	 this.initialize();
	this.instance = new DOMObject({type:"IMAGE",image:img.arrow2});
	
	this.addChild(this.instance);
	
}).prototype = new cjs.Container();


(lib.Bitmap1 = function() {
	this.initialize(img.Bitmap1);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,63,56);


(lib.computer = function() {
	this.initialize(img.computer);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,143,119);


(lib.envelope_closed_static = function() {
	this.initialize();
	this.instance = new DOMObject({type:"IMAGE",image:img.envelope_closed_static});
	this.instance.setTransform(10,-8);
	this.addChild(this.instance);

}).prototype = new cjs.Container();
 


(lib.highlightMc = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Bitmap1();
	this.instance.setTransform(-31.4,-27.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-31.4,-27.9,63,56);


(lib.arrowTextMc = function() {
	this.initialize();

	// Layer 1
	//this.text = new cjs.Text("ID_bubble09_c_d_65", "11px Courier New", "#393536");
	  	this.text = new DOMObject({type:"TEXT",compId:"ID_bubble09",width:"65",expand:"down",align:"center",class:"yellowCallOut"});

 
	this.text.setTransform(-10,-15);

	//this.text_1 = new cjs.Text("ID_bubble08_c_d_65", "11px Courier New", "#393536");
	  	this.text_1 = new DOMObject({type:"TEXT",compId:"ID_bubble08",width:"65",expand:"down",align:"center",class:"greenCallOut"});

	this.text_1.setTransform(-85,-15);

	this.addChild(this.text_1,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-122.9,-7.8,246,15.7);


(lib.arrow = function() {
	this.initialize();

	// purple arrow
	this.instance_1 = new lib.arrow2();
	this.instance_1.setTransform(-21.6,-18.9,1,1,0,0,180);

	this.addChild(this.instance_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-21.6,-18.9,45,37);


(lib.envelopeclosedstatic = function() {
	this.initialize();

	// Layer 2
	this.instance_2 = new lib.envelope_closed_static();
	this.instance_2.setTransform(-39.5,-26.1,0.595,0.595);

	this.addChild(this.instance_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-39.5,-26.1,82.1,52.4);


(lib.callout1 = function() {
	this.initialize();

	// Layer 1
	//this.text_2 = new cjs.Text("ID_bubble05_c_d_80", "11px Courier New", "#393536");
  	this.text_2 = new DOMObject({type:"TEXT",compId:"ID_bubble05",width:"80",expand:"down",align:"center",class:"orangeCallOut"});
	this.text_2.setTransform(-10,20);

	// Layer 2
	this.instance_3 = new lib.Arrow();
	this.instance_3.setTransform(-28.3,-24.9);

	this.addChild(this.instance_3,this.text_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-28.3,-24.9,123,68);


(lib.computer_1 = function() {
	this.initialize();

	// Layer 2
	this.instance_4 = new lib.computer();
	this.instance_4.setTransform(0,-74.6,0.626,0.624);

	this.addChild(this.instance_4);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-74.6,89.5,74.2);


(lib.frame03 = function() {
	this.initialize();

	// Layer 2
	//this.text_3 = new cjs.Text("ID_frame03_c_up+down_70", "11px Courier New", "#393536");
  	this.text_2 = new DOMObject({type:"TEXT",compId:"ID_frame03",width:"80",expand:"up",align:"center",size:"9"});
	this.text_2.setTransform(12,7);

	// Layer 1
	this.instance_5 = new lib.envelopeclosedstatic();
	this.instance_5.setTransform(50.8,8.5,0.877,0.876,0,0,0,1.6,0);

	this.addChild(this.instance_5,this.text_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(12.1,-14.3,156,45.9);


(lib.frame02 = function() {
	this.initialize();

	// Layer 3
	//this.text_4 = new cjs.Text("ID_frame02_c_up+down+70", "11px Courier New", "#393536");
  	this.text_4 = new DOMObject({type:"TEXT",compId:"ID_frame02",width:"70",expand:"up+down",align:"center",size:"9"});
 
	this.text_4.setTransform(15,2);

	// Layer 1
	this.instance_6 = new lib.envelopeclosedstatic();
	this.instance_6.setTransform(50.8,8.9,0.877,0.876,0,0,0,1.6,0);

	this.addChild(this.instance_6,this.text_4);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(11.1,-13.9,156,45.9);


(lib.frame01 = function() {
	this.initialize();

	// Layer 3
//	this.text_5 = new cjs.Text("ID_frame01_c_up+down_70", "11px Courier New", "#393536");
  	this.text_5 = new DOMObject({type:"TEXT",compId:"ID_frame01",width:"70",expand:"up+down",align:"center",size:"9"});

 
	this.text_5.setTransform(-148,-21.6);

	// Layer 1
	this.instance_7 = new lib.envelopeclosedstatic();
	//this.instance_7.setTransform(-111.9,-11.8,0.78,0.78,0,0,0,1.4,0.1);
	this.instance_7.setTransform(-111.9,-11.8,0.877,0.876,0,0,0,1.6,0);

	this.addChild(this.instance_7,this.text_5);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-143.9,-32.4,156,40.9);


(lib.Anim = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{},true);

	// broadcast3
	this.frame03 = new lib.frame03();
	this.frame03.setTransform(189.7,312.7,1,1,0,0,0,188,188);
	this.frame03.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.frame03).wait(255).to({alpha:1},10).to({x:74.7,y:397.7},57).to({alpha:0},10).wait(216).to({x:71.7},0).to({alpha:1},10).to({x:189.3,y:311.8},57).to({alpha:0},10).wait(300));

	// broadcast2
	this.frame02 = new lib.frame02();
	this.frame02.setTransform(-114.7,209.5);
	this.frame02.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.frame02).wait(111).to({x:-115.1,alpha:1},10).to({x:1,y:124.1},57).to({alpha:0},10).wait(522).to({x:-2.3,y:123.1},0).wait(11).to({alpha:1},10).to({x:-116.3,y:210.1},57).to({alpha:0},10).wait(127));

	// broadcast
	this.frame01 = new lib.frame01();
	this.frame01.setTransform(-213.8,304.7,1,1,0,0,0,-150.4,-19.9);
	this.frame01.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.frame01).wait(24).to({regX:-150.4,regY:-19.9,scaleX:1,scaleY:1,x:-215,y:302.2,alpha:1},10).to({regX:-150.3,regY:-19.8,scaleX:1,scaleY:1,x:-101.2,y:210.6},57).to({alpha:0},10).wait(91).wait(58).to({x:14.9,y:125.6,scaleX:1,scaleY:1},0).wait(97).to({x:-101.2,y:209.6},0).to({alpha:1},10).to({x:13.5,y:306.7},57).to({alpha:0},10).wait(36).to({x:12.5,y:307.7},0).to({alpha:1},10).to({x:-100.8,y:211.2},57).to({alpha:0},10).wait(274).to({x:-101.5,y:209.6,scaleX:1,scaleY:1},0).to({alpha:1},10).to({x:-213.8,y:307.7},57).to({alpha:0},10).wait(37));

	// purple arrow 1
	this.instance_8 = new lib.arrow("synched",0);
	this.instance_8.setTransform(130,60,1,1,1,0,0,0,0);
	this.instance_8.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(646).to({alpha:1},0).wait(48).to({alpha:0},0).wait(231));

	// purple arrow
	this.instance_9 = new lib.arrow("synched",0);
	this.instance_9.setTransform(50,60,1,1,0,0,180);
	this.instance_9.alpha =0;


	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(197).to({alpha:1},0).wait(45).to({alpha:0},0).wait(683));

	// arrow text
	this.instance_10 = new lib.arrowTextMc();
	this.instance_10.setTransform(85.5,85.3);
	this.instance_10.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(197).to({alpha:1},0).wait(728));

	// text bubbles
	//this.text_6 = new cjs.Text("ID_bubble01_c_up_70", "11px Courier New", "#393536");
  	this.text_6 = new DOMObject({type:"TEXT",compId:"ID_bubble01",width:"70",expand:"up",align:"center",color:"#652C8A"});

	this.text_6.setTransform(-100,113);

	//this.text_7 = new cjs.Text("ID_bubble02_r_d_70", "11px Courier New", "#393536");
	  this.text_7 = new DOMObject({type:"TEXT",compId:"ID_bubble02",width:"70",expand:"down",align:"right",color:"#652C8A"});

 
	this.text_7.setTransform(-205,172.8);

	//this.text_8 = new cjs.Text("ID_bubble03_l_d_70", "11px Courier New", "#393536");
	this.text_8 = new DOMObject({type:"TEXT",compId:"ID_bubble03",width:"70",expand:"down",align:"left",color:"#652C8A"});

 
	this.text_8.setTransform(10,172.8);

	//this.text_9 = new cjs.Text("ID_bubble04_c_d_138", "11px Courier New", "#393536");
	this.text_9 = new DOMObject({type:"TEXT",compId:"ID_bubble04",width:"138",expand:"down",align:"center",class:"grayCallOut"});

 
	this.text_9.setTransform(100,215);

	//this.text_10 = new cjs.Text("ID_bubble07_c_d_110", "11px Courier New", "#393536");
	this.text_10 = new DOMObject({type:"TEXT",compId:"ID_bubble07",width:"138",expand:"down",align:"center",class:"grayCallOut"});

	this.text_10.setTransform(100,111.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_10},{t:this.text_9},{t:this.text_8},{t:this.text_7},{t:this.text_6}]}).wait(925));

	// callout 1
	this.callOut01 = new lib.callout1();
	this.callOut01.setTransform(208.1,402.3,1,1,0,0,0,188,188);
	this.callOut01.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.callOut01).wait(111).to({alpha:1},10).wait(57).to({alpha:0},10).wait(67).to({alpha:1},10).wait(57).to({alpha:0},10).wait(216).to({alpha:1},10).wait(57).to({alpha:0},10).wait(96).to({alpha:1},10).wait(57).to({alpha:0},10).wait(127));

	// static text
	this.text_11 = new cjs.Text("PC3", "bold 11px Arial", "#FFFFFF");
	this.text_11.textAlign = "center";
	this.text_11.lineHeight = 13;
	this.text_11.setTransform(46,305);

	this.text_12 = new cjs.Text("PC2", "bold 11px Arial", "#FFFFFF");
	this.text_12.textAlign = "center";
	this.text_12.lineHeight = 13;
	this.text_12.setTransform(-71,305);

	this.text_13 = new cjs.Text("PC1", "bold 11px Arial", "#FFFFFF");
	this.text_13.textAlign = "center";
	this.text_13.lineHeight = 13;
	this.text_13.setTransform(-180,305);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_13},{t:this.text_12},{t:this.text_11}]}).wait(925));

	// symbols
	this.instance_11 = new lib.computer_1();
	this.instance_11.setTransform(-82.5,333.8,0.5,0.5,0,0,0,16.7,-0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11}]}).wait(925));

	// PC1 glow
	this.instance_12 = new lib.computer_1();
	this.instance_12.setTransform(-192,333.8,0.5,0.5,0,0,0,16.7,-0.9);


	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12}]}).wait(925));

	// pc1 glow png
	this.instance_13 = new lib.highlightMc();
	this.instance_13.setTransform(-176.4,319);
	this.instance_13.alpha = 0;

 
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(886).to({alpha:1},15).wait(12).to({alpha:0},11).wait(1));

	// PC3 glow
	this.instance_14 = new lib.computer_1();
	this.instance_14.setTransform(34.9,333.8,0.5,0.5,0,0,0,16.7,-0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(925));

	// pc3 glow png
	this.instance_15 = new lib.highlightMc();
	this.instance_15.setTransform(50.5,319);
	this.instance_15.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(425).to({alpha:1},12).wait(11).to({alpha:0},13).wait(464));

	// more static text
	this.text_14 = new cjs.Text("F0/1", "11px Arial", "#393536");
	this.text_14.textAlign = "center";
	this.text_14.lineHeight = 13;
	this.text_14.setTransform(-46,188.8);
	this.text_14.shadow = new cjs.Shadow("rgba(255,255,255,1)",0,0,5);

	this.text_15 = new cjs.Text("F0/2", "11px Arial", "#393536");
	this.text_15.textAlign = "center";
	this.text_15.lineHeight = 13;
	this.text_15.setTransform(-86.2,188.5);
	this.text_15.shadow = new cjs.Shadow("rgba(255,255,255,1)",0,0,5);

	this.text_16 = new cjs.Text("F0/1", "11px Arial", "#393536");
	this.text_16.textAlign = "center";
	this.text_16.lineHeight = 13;
	this.text_16.setTransform(-184.9,146.6);

	this.text_17 = new cjs.Text("F0/1", "11px Arial", "#393536");
	this.text_17.textAlign = "center";
	this.text_17.lineHeight = 13;
	this.text_17.setTransform(44.2,157);

	this.text_18 = new cjs.Text("F0/2", "11px Arial", "#393536");
	this.text_18.textAlign = "center";
	this.text_18.lineHeight = 13;
	this.text_18.setTransform(-137.2,114);

	this.text_19 = new cjs.Text("F0/2", "11px Arial", "#393536");
	this.text_19.textAlign = "center";
	this.text_19.lineHeight = 13;
	this.text_19.setTransform(17.5,114);

	this.text_20 = new cjs.Text("F0/11", "11px Arial", "#393536");
	this.text_20.textAlign = "center";
	this.text_20.lineHeight = 13;
	this.text_20.setTransform(-108.9,223);

	this.text_21 = new cjs.Text("F0/23", "11px Arial", "#393536");
	this.text_21.textAlign = "center";
	this.text_21.lineHeight = 13;
	this.text_21.setTransform(-28.7,222);

	this.text_22 = new cjs.Text("F0/18", "11px Arial", "#393536");
	this.text_22.textAlign = "center";
	this.text_22.lineHeight = 13;
	this.text_22.setTransform(-65,234.4);

	this.text_23 = new cjs.Text("172.17.20.22", "11px Arial", "#393536");
	this.text_23.textAlign = "center";
	this.text_23.lineHeight = 13;
	this.text_23.setTransform(-73.6,338);

	this.text_24 = new cjs.Text("172.17.10.21", "11px Arial", "#393536");
	this.text_24.textAlign = "center";
	this.text_24.lineHeight = 13;
	this.text_24.setTransform(-182.4,338);

	this.text_25 = new cjs.Text("172.17.30.23", "11px Arial", "#393536");
	this.text_25.textAlign = "center";
	this.text_25.lineHeight = 13;
	this.text_25.setTransform(44.2,338);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_25},{t:this.text_24},{t:this.text_23},{t:this.text_22},{t:this.text_21},{t:this.text_20},{t:this.text_19},{t:this.text_18},{t:this.text_17},{t:this.text_16},{t:this.text_15},{t:this.text_14}]}).wait(925));

	// bg
	this.instance_16 = new lib._5_1_1_4();
	this.instance_16.setTransform(-214.1,9.8,0.72,0.719);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_16}]}).wait(925));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-225.3,9.8,481.2,400);


(lib.Main = function() {
	this.initialize();

	// Animation
	this.Anim = new lib.Anim();
	this.Anim.setTransform(248.5,198.8,1,1,0,0,0,34.1,209.6);

	this.addChild(this.Anim);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-10.9,-1,481.2,400);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;