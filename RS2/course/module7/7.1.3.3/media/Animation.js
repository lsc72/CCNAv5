(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.classesmediaMediaObject = function() {
	this.initialize();

	// Main
	this.instance = new lib.Main();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,4,476.3,400);


// symbols:
(lib.background = function() {
	this.initialize(img.background);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,470,400);

//DOMObject({type:"IMAGE",image:img.Bitmap1});

(lib.Bitmap1 = function() {
	
	this.initialize(img.Bitmap1);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,63,30);


(lib.Bitmap2 = function() {
	this.initialize(img.Bitmap2);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,63,30);


(lib.Bitmap3 = function() {
	this.initialize(img.Bitmap3);
}).prototype =new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,36,30);


(lib.Bitmap4 = function() {
	this.initialize(img.Bitmap4);
}).prototype =new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,36,30);


(lib.Bitmap5 = function() {
	this.initialize(img.Bitmap5);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,36,30);


(lib.Bitmap6 = function() {
	this.initialize(img.Bitmap6);
}).prototype =new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,57,30);


(lib.envelope_closed_static = function() {
	this.initialize(img.envelope_closed_static);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,123,79);


(lib.t3_r43h2 = function() {
	this.initialize();

	// Layer 2
	//this.text = new DOMObject({type:"TEXT",text:"1",size:"10"});
	this.text = new cjs.Text("1", "10px Arial", "#393536");
	this.text.textAlign = "center";
	this.text.lineHeight = 12;
	this.text.setTransform(13.1,9.3);

	// Layer 1
	this.instance =new DOMObject({type:"IMAGE",image:img.Bitmap5});

	this.addChild(this.instance,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,36,30);


(lib._zero_lt_bg = function() {
	this.initialize();

	// Layer 2
	this.text_1 = new DOMObject({type:"TEXT",text:"0",size:"10"});
	//this.text_1 = new cjs.Text("0", "10px Arial", "#393536");
	//this.text_1.textAlign = "center";
	//this.text_1.lineHeight = 12;
	this.text_1.setTransform(5,7);

	// Layer 1
	this.instance_1 =new DOMObject({type:"IMAGE",image:img.Bitmap5});

	this.addChild(this.instance_1,this.text_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,36,30);


(lib._zero = function() {
	this.initialize();

	// Layer 2
	this.text_2 = new DOMObject({type:"TEXT",text:"0",size:"10"});
	//this.text_2 = new cjs.Text("0", "10px Arial", "#393536");
	//this.text_2.textAlign = "center";
	//this.text_2.lineHeight = 12;
	this.text_2.setTransform(2,8);

	// Layer 1
	this.instance_2 = new DOMObject({type:"IMAGE",image:img.Bitmap3});

	this.addChild(this.instance_2,this.text_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,36,30);


(lib._S0_0_1_lt_bg = function() {
	this.initialize();

	// Layer 2
	this.text_3 = new DOMObject({type:"TEXT",text:"S0/0/1",size:"10"});
	//this.text_3 = new cjs.Text("S0/0/1", "10px Arial", "#393536");
	//this.text_3.textAlign = "center";
	//this.text_3.lineHeight = 12;
	this.text_3.setTransform(15,7);

	// Layer 1
	this.instance_3 =new DOMObject({type:"IMAGE",image:img.Bitmap2});;
    this.instance_3 .setTransform(11,0);
	this.addChild(this.instance_3,this.text_3);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,63,30);


(lib._S0_0_1 = function() {
	this.initialize();

	// Layer 2
	this.text_4 = new DOMObject({type:"TEXT",text:"S0/0/1",size:"10"});
	//this.text_4 = new cjs.Text("S0/0/1", "10px Arial", "#393536");
	//this.text_4.textAlign = "center";
	//this.text_4.lineHeight = 12;
	this.text_4.setTransform(15,7.6);

	// Layer 1
	this.instance_4 = new DOMObject({type:"IMAGE",image:img.Bitmap1});
    this.instance_4.setTransform(11,0);
	this.addChild(this.instance_4,this.text_4);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,63,30);


(lib._S0_0_0 = function() {
	this.initialize();

	// Layer 2
	this.text_5 = new DOMObject({type:"TEXT",text:"S0/0/0",size:"10"});
	//this.text_5 = new cjs.Text("S0/0/0", "10px Arial", "#393536");
	//this.text_5.textAlign = "center";
	//this.text_5.lineHeight = 12;
	this.text_5.setTransform(10,7.6);

	// Layer 1
	this.instance_5 =new DOMObject({type:"IMAGE",image:img.Bitmap6});
	this.instance_5.setTransform(8,-1);

	this.addChild(this.instance_5,this.text_5);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.9,-0.9,57,30);


(lib._one_hilite = function() {
	this.initialize();

	// Layer 2
	this.text_6 = new DOMObject({type:"TEXT",text:"1",size:"10"});
	//this.text_6 = new cjs.Text("1", "10px Arial", "#393536");
	//this.text_6.textAlign = "center";
	//this.text_6.lineHeight = 12;
	this.text_6.setTransform(5,7.3);

	// Layer 1
	this.instance_6 =new DOMObject({type:"IMAGE",image:img.Bitmap4});
	this.instance_6.setTransform(-0.9,-0.9);

	this.addChild(this.instance_6,this.text_6);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.9,-0.9,36,30);


(lib._one = function() {
	this.initialize();

	// Layer 2
	this.text_7 = new DOMObject({type:"TEXT",text:"1",size:"10"});
	//this.text_7 = new cjs.Text("1", "10px Arial", "#393536");
	//this.text_7.textAlign = "center";
	//this.text_7.lineHeight = 12;
	this.text_7.setTransform(5,7);

	// Layer 3
	this.instance_7 = new DOMObject({type:"IMAGE",image:img.Bitmap3});

	this.addChild(this.instance_7,this.text_7);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,36,30);


(lib._10400_lt_bg = function() {
	this.initialize();

	// Layer 2
	this.text_8 = new DOMObject({type:"TEXT",text:"10.4.0.0",size:"10"});
	//this.text_8 = new cjs.Text("10.4.0.0", "10px Arial", "#393536");
	//this.text_8.textAlign = "center";
	//this.text_8.lineHeight = 12;
	this.text_8.setTransform(5,6.9);

	// Layer 1
	this.instance_8 =new DOMObject({type:"IMAGE",image:img.Bitmap2});

	this.addChild(this.instance_8,this.text_8);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,63,30);


(lib._10300_lt_bg = function() {
	this.initialize();

	// Layer 2
	this.text_9 = new DOMObject({type:"TEXT",text:"10.3.0.0",size:"10"});
	//this.text_9 = new cjs.Text("10.3.0.0", "10px Arial", "#393536");
	//this.text_9.textAlign = "center";
	//this.text_9.lineHeight = 12;
	this.text_9.setTransform(5,5);

	// Layer 1
	this.instance_9 = new DOMObject({type:"IMAGE",image:img.Bitmap2});

	this.addChild(this.instance_9,this.text_9);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,63,30);


(lib._10300 = function() {
	this.initialize();

	// Layer 2
	this.text_10 = new DOMObject({type:"TEXT",text:"10.3.0.0",size:"10"});
	//this.text_10 = new cjs.Text("10.3.0.0", "10px Arial", "#393536");
	//this.text_10.textAlign = "center";
	//this.text_10.lineHeight = 12;
	this.text_10.setTransform(-2,7);

	// Layer 1
	this.instance_10 = new DOMObject({type:"IMAGE",image:img.Bitmap1});
   
	this.addChild(this.instance_10,this.text_10);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,63,30);


(lib._10200_lt_bg = function() {
	this.initialize();

	// Layer 2
	this.text_11 = new DOMObject({type:"TEXT",text:"10.2.0.0",size:"10"});
	//this.text_11 = new cjs.Text("10.2.0.0", "10px Arial", "#393536");
	//this.text_11.textAlign = "center";
	//this.text_11.lineHeight = 12;
	this.text_11.setTransform(-2,8);

	// Layer 1
	this.instance_11 = new DOMObject({type:"IMAGE",image:img.Bitmap2});
	//this.instance_11.setTransform(10,0);

	this.addChild(this.instance_11,this.text_11);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,63,30);


(lib._10200 = function() {
	this.initialize();

	// Layer 2
		this.text_12 = new DOMObject({type:"TEXT",text:"10.2.0.0",size:"10"});
	//this.text_12 = new cjs.Text("10.2.0.0", "10px Arial", "#393536");
	//this.text_12.textAlign = "center";
	//this.text_12.lineHeight = 12;
	this.text_12.setTransform(0,7);

	// Layer 1
	this.instance_12 = new DOMObject({type:"IMAGE",image:img.Bitmap1});


  this.text_13 = new DOMObject({type:"TEXT",text:"10.2.0.0",size:"10"});
//	this.text_13 = new cjs.Text("10.2.0.0", "10px Arial", "#393536");
//	this.text_13.textAlign = "center";
//	this.text_13.lineHeight = 12;
//	this.text_13.setTransform(28.5,7);

	this.addChild(this.text_13,this.instance_12,this.text_12);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,63,30);


(lib._10100 = function() {
	this.initialize();

	// Layer 2
	this.text_14 = new DOMObject({type:"TEXT",text:"10.1.0.0",size:"10"});
	//this.text_14 = new cjs.Text("10.1.0.0", "10px Arial", "#393536");
	//this.text_14.textAlign = "center";
	///this.text_14.lineHeight = 12;
	this.text_14.setTransform(2,8);

	// Layer 1
	this.instance_13 = new DOMObject({type:"IMAGE",image:img.Bitmap1});
	

	this.addChild(this.instance_13,this.text_14);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,63,30);


(lib.Symbol6 = function() {
	this.initialize();

	// Layer 1
	this.text_15 = new cjs.Text("1", "10px Arial", "#393536");
	this.text_15.textAlign = "center";
	this.text_15.lineHeight = 12;
	this.text_15.setTransform(15,7.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EFF8F7").s("#98D3D1").ss(2,1,1).p("ACqiIIAAERIlTAAIAAkRIFTAA").cp();
	this.shape.setTransform(17,13.8);

	this.addChild(this.shape,this.text_15);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,34,27.5);


(lib.Symbol5 = function() {
	this.initialize();

	// Layer 1
	this.text_16 = new cjs.Text("1", "10px Arial", "#393536");
	this.text_16.textAlign = "center";
	this.text_16.lineHeight = 12;
	this.text_16.setTransform(15,7.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EFF8F7").s("#98D3D1").ss(2,1,1).p("ACqiIIAAERIlTAAIAAkRIFTAA").cp();
	this.shape_1.setTransform(17,13.8);

	this.addChild(this.shape_1,this.text_16);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,34,27.5);


(lib.h33 = function() {
	this.initialize();

	// Layer 1
		this.text_17 = new DOMObject({type:"TEXT",compId:"ID_txt09",width:"25",expand:"down",align:"left",color:"#ffffff"});

		this.text_17.setTransform(5,10);

	this.addChild(this.text_17);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,41.4,15.2);


(lib.h32 = function() {
	this.initialize();

	// Layer 1
	this.text_18 = new DOMObject({type:"TEXT",compId:"ID_txt08",width:"60",expand:"down",align:"left",color:"#ffffff"});
	this.text_18.setTransform(5,10);

	this.addChild(this.text_18);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,41.4,15.2);


(lib.h31 = function() {
	this.initialize();

	// Layer 1
			this.text_19 = new DOMObject({type:"TEXT",compId:"ID_txt07",width:"100",expand:"down",align:"left",color:"#ffffff"});
	
	this.text_19.setTransform(5,10);

	this.addChild(this.text_19);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,41.4,15.2);


(lib.h23 = function() {
	this.initialize();

	// Layer 1
		this.text_20 = new DOMObject({type:"TEXT",compId:"ID_txt06",width:"100",expand:"down",align:"left",color:"#ffffff"});

	this.text_20.setTransform(5,10);

	this.addChild(this.text_20);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,41.4,15.2);


(lib.h22 = function() {
	this.initialize();

	// Layer 1
		this.text_21 = new DOMObject({type:"TEXT",compId:"ID_txt05",width:"100",expand:"down",align:"left",color:"#ffffff"});
	this.text_21.setTransform(5,10);

	this.addChild(this.text_21);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,41.4,15.2);


(lib.h21 = function() {
	this.initialize();

	// Layer 1
	this.text_22 = new DOMObject({type:"TEXT",compId:"ID_txt04",width:"100",expand:"down",align:"left",color:"#ffffff"});
	this.text_22.setTransform(5,-8);

	this.addChild(this.text_22);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,57.2,15.2);


(lib.h13 = function() {
	this.initialize();

	// Layer 1
		this.text_23 = new DOMObject({type:"TEXT",compId:"ID_txt03",width:"100",expand:"down",align:"left",color:"#ffffff"});
		this.text_23.setTransform(5,10);

	this.addChild(this.text_23);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,30.7,28.3);


(lib.h12 = function() {
	this.initialize();

	// Layer 1
	this.text_24 = new DOMObject({type:"TEXT",compId:"ID_txt02",width:"100",expand:"down",align:"left",color:"#ffffff"});
	this.text_24.setTransform(5,10);

	this.addChild(this.text_24);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,41.4,15.2);


(lib.h11 = function() {
	this.initialize();

	// Layer 2
		this.text_25 = new DOMObject({type:"TEXT",compId:"ID_txt01",width:"100",expand:"down",align:"left",color:"#ffffff"});
		this.text_25.setTransform(5,10);

	this.addChild(this.text_25);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,52.5,15.2);


(lib.envelopeclosedstatic = function() {
	this.initialize();

	// inner lines
	this.instance_14 = new lib.envelope_closed_static();
	this.instance_14.setTransform(-39.5,-26.1,0.667,0.663);

	this.addChild(this.instance_14);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-39.5,-26.1,82.1,52.4);


(lib.EnvelopeStatic6 = function() {
	this.initialize();

	// label
	this.text_26 = new DOMObject({type:"TEXT",compId:"ID_txt15",width:"40",expand:"down",align:"center",size:"10"});
	this.text_26.setTransform(-20,-13.4);

	// Layer 1
	this.instance_15 = new lib.envelopeclosedstatic();
	this.instance_15.setTransform(0,0.1,0.6,0.6,0,0,0,1.3,0.2);

	this.addChild(this.instance_15,this.text_26);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-20.7,-13.2,41.6,26.6);


(lib.EnvelopeStatic4copy = function() {
	this.initialize();

	// label
	this.text_27  = new DOMObject({type:"TEXT",compId:"ID_txt14",width:"40",expand:"down",align:"center",size:"10"});
	
	this.text_27.setTransform(-20,-13.4);

	// Layer 1
	this.instance_16 = new lib.envelopeclosedstatic();
	this.instance_16.setTransform(0,0.1,0.6,0.6,0,0,0,1.3,0.2);

	this.addChild(this.instance_16,this.text_27);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-20.7,-13.2,41.7,26.6);


(lib.EnvelopeStatic4 = function() {
	this.initialize();

	// label
		this.text_28 = new DOMObject({type:"TEXT",compId:"ID_txt13",width:"40",expand:"down",align:"center",size:"10"});

		this.text_28.setTransform(-20,-13.4);

	// Layer 1
	this.instance_17 = new lib.envelopeclosedstatic();
	this.instance_17.setTransform(0,0.1,0.6,0.6,0,0,0,1.3,0.2);

	this.addChild(this.instance_17,this.text_28);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-20.7,-13.2,41.6,26.6);


(lib.EnvelopeStatic3 = function() {
	this.initialize();

	// label
	this.text_29 = new DOMObject({type:"TEXT",compId:"ID_txt12",width:"40",expand:"down",align:"center",size:"10"});
	this.text_29.setTransform(-20,-13.4);

	// Layer 1
	this.instance_18 = new lib.envelopeclosedstatic();
	this.instance_18.setTransform(0,0.1,0.6,0.6,0,0,0,1.3,0.2);

	this.addChild(this.instance_18,this.text_29);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-20.7,-13.2,41.6,26.6);


(lib.EnvelopeStatic2 = function() {
	this.initialize();

	// label
	this.text_30 = new DOMObject({type:"TEXT",compId:"ID_txt11",width:"40",expand:"down",align:"center",size:"10"});
	this.text_30.setTransform(-20,-13.4);

	// Layer 1
	this.instance_19 = new lib.envelopeclosedstatic();
	this.instance_19.setTransform(0,0.1,0.6,0.6,0,0,0,1.3,0.1);

	this.addChild(this.instance_19,this.text_30);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-20.7,-13.1,41.6,26.6);


(lib.EnvelopeStatic = function() {
	this.initialize();

	// label
	this.text_31 = new DOMObject({type:"TEXT",compId:"ID_txt10",width:"40",expand:"down",align:"center",size:"10"});

	this.text_31.setTransform(-20,-13.4);

	// Layer 1
	this.instance_20 = new lib.envelopeclosedstatic();
	this.instance_20.setTransform(0,0.1,0.6,0.6,0,0,0,1.3,0.2);

	this.addChild(this.instance_20,this.text_31);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-20.7,-13.2,41.6,26.6);


(lib.animation01 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{},true);

	// t1_row1_col3
	this.instance_21 = new lib._zero("synched",0);
	this.instance_21.setTransform(137,250,1,1,0,0,0,17,13.8);
	this.instance_21.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(38).to({alpha:1},0).to({x:123.5,y:141.8},15).wait(21).to({startPosition:0},0).to({regX:17.1,regY:13.7,scaleX:0.43,scaleY:0.43,x:142.2,y:90.9},16).wait(9).to({startPosition:0},0).to({regX:17,scaleX:0.38,scaleY:0.38,x:132.2,y:91.8,alpha:0},10).wait(1).to({startPosition:0},0).wait(1200));

	// t1_10.1.0.0
	this.instance_22 = new lib._10100("synched",0);
	this.instance_22.setTransform(34.5,225.8,1,1,0,0,0,30.5,13.8);
	this.instance_22.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(38).to({alpha:1},0).to({x:76,y:141.8},15).wait(21).to({startPosition:0},0).to({regX:30.4,regY:13.7,scaleX:0.43,scaleY:0.43,x:121.7,y:90.9},16).wait(9).to({startPosition:0},0).to({regX:30.5,scaleX:0.38,scaleY:0.38,x:114.2,y:91.8,alpha:0},10).wait(1).to({startPosition:0},0).wait(1200));

	// t1_row2_col3
	this.instance_23 = new lib._zero_lt_bg("synched",0);
	this.instance_23.setTransform(137,253.3,1,1,0,0,0,17,13.8);
	this.instance_23.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(137).to({alpha:1},0).to({x:122,y:141.8},15).wait(21).to({startPosition:0},0).to({scaleX:0.43,scaleY:0.43,x:73.9,y:90.9},16).wait(9).to({startPosition:0},0).to({alpha:0},9).wait(1).to({startPosition:0},0).wait(1102));

	// t1_10.2.0.0
	this.instance_24 = new lib._10200_lt_bg("synched",0);
	this.instance_24.setTransform(44,252,1,1,0,0,0,30.5,13.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(137).to({startPosition:0},0).to({x:76,y:141.8},15).wait(21).to({startPosition:0},0).to({scaleX:0.43,scaleY:0.43,x:54.3,y:90.9},16).wait(9).to({startPosition:0},0).to({alpha:0},9).wait(1).to({startPosition:0},0).wait(1102));

	// t2_10.2.0.0
	this.instance_25 = new lib._10200("synched",0);
	this.instance_25.setTransform(191.5,225.8,1,1,0,0,0,30.5,13.8);
	this.instance_25.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(230).to({alpha:1},0).to({x:221.5,y:141.8},15).wait(21).to({startPosition:0},0).to({scaleX:0.42,scaleY:0.42,x:275.6,y:90.8},16).wait(9).to({startPosition:0},0).to({alpha:0},9).wait(1).to({startPosition:0},0).wait(1009));

	// t2_row1_col3
	this.instance_26 = new lib._zero("synched",0);
	this.instance_26.setTransform(294,225.8,1,1,0,0,0,17,13.8);
	this.instance_26.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(230).to({alpha:1},0).to({x:270,y:141.8},15).wait(21).to({startPosition:0},0).to({regX:16.9,scaleX:0.42,scaleY:0.42,x:296.8,y:90.8},16).wait(9).to({startPosition:0},0).to({alpha:0},9).wait(1).to({startPosition:0},0).wait(1009));

	// t2_10.3.0.0
	this.instance_27 = new lib._10300_lt_bg("synched",0);
	this.instance_27.setTransform(220,253.3,1,1,0,0,0,30.5,13.8);
	this.instance_27.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(323).to({alpha:1},0).to({x:221.5,y:141.6},15).wait(21).to({startPosition:0},0).to({regX:30.4,regY:13.7,scaleX:0.42,scaleY:0.42,x:203.4,y:90.7},16).wait(9).to({startPosition:0},0).to({alpha:0},9).wait(1).to({startPosition:0},0).wait(916));

	// t1_row3-col3
	this.instance_28 = new lib.Symbol6();
	this.instance_28.setTransform(137,280.8,1,1,0,0,0,17,13.8);
	this.instance_28.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(734).to({alpha:1},0).wait(576));

	// t1_row3-col3
	this.instance_29 = new lib._one_hilite();
	this.instance_29.setTransform(122.5,141.3,1,1,0,0,0,17,13.8);
	this.instance_29.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(698).to({x:124.4,y:142.3,alpha:1,mode:"synched",startPosition:0},0).wait(20).to({x:122.5,y:141.3},0).to({x:137,y:280.8},15).wait(1).to({alpha:0},0).wait(576));

	// t1_row3-col3
	this.instance_30 = new lib._zero("synched",0);
	this.instance_30.setTransform(110.7,90.3,0.435,0.435,0,-0.9,0,17,13.8);
	this.instance_30.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(663).to({startPosition:0},0).to({alpha:1},9).wait(9).to({startPosition:0},0).to({scaleX:1,scaleY:1,skewX:0,x:122.5,y:141.3},16).wait(1).to({alpha:0},0).wait(612));

	// t2_row2_col3
	this.instance_31 = new lib._zero_lt_bg("synched",0);
	this.instance_31.setTransform(294,253.3,1,1,0,0,0,17,13.8);
	this.instance_31.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(323).to({alpha:1},0).to({x:270,y:141.6},15).wait(21).to({startPosition:0},0).to({regX:17.1,regY:13.7,scaleX:0.42,scaleY:0.42,x:223.6,y:90.7},16).wait(9).to({startPosition:0},0).to({alpha:0},9).wait(1).to({startPosition:0},0).wait(916));

	// t3_10.3.0.0
	this.instance_32 = new lib._10300("synched",0);
	this.instance_32.setTransform(347.5,225.8,1,1,0,0,0,30.5,13.8);
	this.instance_32.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(420).to({alpha:1},0).to({x:362.5,y:140.8},15).wait(21).to({startPosition:0},0).to({regX:13.7,regY:13.7,scaleX:0.42,scaleY:0.42,x:413,y:90},16).wait(9).to({startPosition:0},0).to({alpha:0},9).wait(1).to({startPosition:0},0).wait(819));

	// t3_row1-col3
	this.instance_33 = new lib._zero("synched",0);
	this.instance_33.setTransform(450,225.8,1,1,0,0,0,17,13.8);
	this.instance_33.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(420).to({alpha:1},0).to({x:410,y:140.8},15).wait(21).to({startPosition:0},0).to({regY:13.7,scaleX:0.42,scaleY:0.42,x:440.5,y:90},16).wait(9).to({startPosition:0},0).to({alpha:0},9).wait(1).to({startPosition:0},0).wait(819));

	// t3_10.4.0.0
	this.instance_34 = new lib._10400_lt_bg("synched",0);
	this.instance_34.setTransform(347.5,253.3,1,1,0,0,0,30.5,13.8);
	this.instance_34.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(515).to({alpha:1},0).to({x:362.5,y:140.8},15).wait(21).to({startPosition:0},0).to({regY:13.7,scaleX:0.43,scaleY:0.43,x:347.1,y:89.9},16).wait(9).to({startPosition:0},0).to({alpha:0},9).wait(1).to({startPosition:0},0).wait(724));

	// t3_row2-col3
	this.instance_35 = new lib._zero_lt_bg("synched",0);
	this.instance_35.setTransform(450,253.3,1,1,0,0,0,17,13.8);
	this.instance_35.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_35).wait(515).to({alpha:1},0).to({x:410,y:140.8},15).wait(21).to({startPosition:0},0).to({regY:13.7,scaleX:0.43,scaleY:0.43,x:367.3,y:89.9},16).wait(9).to({startPosition:0},0).to({alpha:0},9).wait(1).to({startPosition:0},0).wait(724));

	// t1_10.3.0.0
	this.instance_36 = new lib._10300("synched",0);
	this.instance_36.setTransform(90,90.3,0.435,0.435,0,-0.9,0,30.6,13.8);
	this.instance_36.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_36).wait(663).to({startPosition:0},0).to({alpha:1},9).wait(9).to({startPosition:0},0).to({regX:30.5,scaleX:1,scaleY:1,skewX:0,x:75.5,y:141.3},16).wait(21).to({startPosition:0},0).to({scaleX:0.99,x:44,y:279.6},15).wait(577));

	// t3_row3-col3
	this.instance_37 = new lib.Symbol5();
	this.instance_37.setTransform(450,280.8,1,1,0,0,0,17,13.8);
	this.instance_37.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_37).wait(1250).to({alpha:1},0).wait(60));

	// t3_row3-col3
	this.instance_38 = new lib._one_hilite();
	this.instance_38.setTransform(410,140.8,1,1,0,0,0,17,13.8);
	this.instance_38.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_38).wait(1214).to({y:142.2,alpha:1,mode:"synched",startPosition:0},0).wait(20).to({y:140.8},0).to({x:450,y:280.8},15).wait(1).to({rotation:-0.2,x:449.5,alpha:0},0).wait(60));

	// t3_row3-col3
	this.instance_39 = new lib._zero("synched",0);
	this.instance_39.setTransform(401.5,90.1,0.405,0.405,0,0,0,17.1,13.8);
	this.instance_39.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_39).wait(1179).to({startPosition:0},0).to({alpha:1},9).wait(9).to({startPosition:0},0).to({regX:17,scaleX:1,scaleY:1,x:410,y:140,alpha:0},16).wait(97));

	// t1_row3-col2
	this.instance_40 = new lib._S0_0_0("synched",0);
	this.instance_40.setTransform(90.1,90,0.694,0.694,0,0,0,27.5,13.8);
	this.instance_40.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_40).wait(753).to({startPosition:0},0).to({alpha:1},9).wait(12).to({startPosition:0},0).to({scaleX:1,scaleY:1,x:92.5,y:140.8},12).wait(9).to({startPosition:0},0).to({regX:27.7,regY:13.9,x:92.7,y:280.9},17).wait(498));

    this.instance_57 = new lib._one("synched",0);
	this.instance_57.setTransform(460,280.8);
	this.instance_57.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_57).wait(1075).to({x:285,y:293,alpha:1},0).wait(60));
	// t2_10.4.0.0
	this.instance_41 = new lib._10400_lt_bg("synched",0);
	this.instance_41.setTransform(277.9,90.6,0.407,0.407,0,0,0,30.4,13.8);
	this.instance_41.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_41).wait(1000).to({startPosition:0},0).to({alpha:1},9).wait(9).to({startPosition:0},0).to({regX:30.5,scaleX:1,scaleY:1,x:221.5,y:141.8},16).wait(21).to({startPosition:0},0).to({regX:31.5,regY:29.9,scaleY:0.96,x:201,y:322.8},15).wait(240));

	// t2_r4-3
	this.instance_42 = new lib.t3_r43h2("synched",0);
	this.instance_42.setTransform(55,27.5);
	this.instance_42.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_42).wait(1071).to({scaleX:0.99,scaleY:0.93,x:285,y:294,alpha:1},0).wait(239));

   
	
	// t2_r4-3
	this.instance_43 = new lib._one_hilite("synched",0);
	this.instance_43.setTransform(252,130);
	this.instance_43.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_43).wait(1035).to({alpha:1},0).wait(20).to({startPosition:0},0).to({x:277,y:295.5},15).wait(1).to({alpha:0},0).wait(239));
	


	// t2_r4-3
	this.instance_44 = new lib._zero_lt_bg("synched",0);
	this.instance_44.setTransform(288.6,85,0.407,0.407);
	this.instance_44.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_44).wait(1000).to({startPosition:0},0).to({alpha:1},9).wait(9).to({startPosition:0},0).to({scaleX:1,scaleY:1,x:252.5,y:128},16).wait(1).to({alpha:0},0).wait(275));
		


	// t2_r4_2
	this.instance_45 = new lib._S0_0_1_lt_bg("synched",0);
	this.instance_45.setTransform(274,90.6,0.691,0.691,0,0,0,27.5,13.8);
	this.instance_45.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_45).wait(1083).to({startPosition:0},0).to({alpha:1},10).to({startPosition:0},9).to({scaleX:1,scaleY:1,x:243.5,y:141.3},13).to({startPosition:0},13).to({regX:31.3,regY:0,scaleX:0.89,scaleY:0.94,x:249.8,y:294.5},19).wait(163));

    		
	// t2_10.1.0.0
	this.instance_46 = new lib._10100("synched",0);
	this.instance_46.setTransform(198.3,90.5,0.432,0.609,0,0,0,30.6,13.7);
	this.instance_46.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_46).wait(841).to({startPosition:0},0).to({alpha:1},9).wait(9).to({startPosition:0},0).to({regX:30.5,regY:13.8,scaleX:1,scaleY:1,x:221.5,y:140.8},16).to({startPosition:0},21).to({x:199,y:280},15).wait(399));

	// t2_row3-col3
	this.instance_47 = new lib._one("synched",0);
	this.instance_47.setTransform(277,267);
	this.instance_47.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_47).wait(912).to({x:286,y:266.1,alpha:1},0).wait(398));

	// t2_row3-col3
	this.instance_48 = new lib._one_hilite("synched",0);
	this.instance_48.setTransform(270,140.8,1,1,0,0,0,17,13.8);
	this.instance_48.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_48).wait(876).to({x:270.3,y:141.8,alpha:1},0).wait(20).to({regX:0,regY:0,x:253,y:127},0).to({x:286,y:267},15).wait(399));

	// t2_row3-col3
	this.instance_49 = new lib._zero("synched",0);
	this.instance_49.setTransform(219.2,90.5,0.432,0.609,0,0,0,17,13.7);
	this.instance_49.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_49).wait(841).to({startPosition:0},0).to({alpha:1},9).wait(9).to({startPosition:0},0).to({regY:13.8,scaleX:1,scaleY:1,x:270,y:140.8},16).wait(1).to({alpha:0},0).wait(434));

	// t2_row3-col2
	this.instance_50 = new lib._S0_0_0("synched",0);
	this.instance_50.setTransform(205.8,90.6,0.618,0.618,0,0,0,27.5,13.8);
	this.instance_50.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_50).wait(924).to({startPosition:0},0).to({alpha:1},10).wait(8).to({startPosition:0},0).to({scaleX:1,scaleY:1,x:241.5,y:141.8},16).wait(13).to({startPosition:0},0).to({x:249.5,y:280.8},15).wait(324));


      
	// t3_10.2.0.0
	this.instance_51 = new lib._10200("synched",0);
	this.instance_51.setTransform(382.2,90.1,0.405,0.405,0,0,0,30.6,13.8);
	this.instance_51.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_51).wait(1179).to({startPosition:0},0).to({alpha:1},9).wait(9).to({startPosition:0},0).to({regX:30.5,scaleX:1,scaleY:1,x:362.5,y:140.8},16).wait(21).to({startPosition:0},0).to({x:356,y:280},15).wait(61));

     // t3_row3-col3
	
	
	
	
	// t3_row3-col3
	this.instance_52 = new lib._one("synched",0);
	this.instance_52.setTransform(450,280.8,1,1,0,0,0,17,13.8);
	this.instance_52.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_52).wait(1250).to({regX:-0.1,regY:15,x:440.9,y:281,alpha:1},0).wait(60));

	// t3_row3-col3
	/*this.instance_53 = new lib._one_hilite("synched",0);
	this.instance_53.setTransform(410,140.8,1,1,0,0,0,17,13.8);
	this.instance_53.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_53).wait(1214).to({y:141.9,alpha:1},0).wait(20).to({y:140.8},0).to({x:360,y:280.8},15).wait(61));*/

	
	
	

	/* Layers with classic tweens must contain only a single symbol instance. */

	// t3_row3-col2
	this.instance_54 = new lib._S0_0_1("synched",0);
	this.instance_54.setTransform(382.2,90.1,0.6,0.6,0,0,0,27.5,13.8);
	this.instance_54.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_54).wait(1253).to({startPosition:0},0).to({alpha:1},8).to({startPosition:0},8).to({scaleX:1,scaleY:1,x:381.2,y:139.3},10).to({startPosition:0},10).to({regX:31.5,regY:0.8,scaleX:0.9,x:405.5,y:266.8},16).wait(5));

	// envelope6
	this.instance_55 = new lib.EnvelopeStatic6();
	this.instance_55.setTransform(419.8,90.8);
	this.instance_55.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_55).wait(10).to({alpha:1},12).wait(581).to({x:410,alpha:0},20).wait(687));

	// envelope5
	this.instance_56 = new lib.EnvelopeStatic4copy();
	this.instance_56.setTransform(346.2,90.8);
	this.instance_56.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_56).wait(10).to({alpha:1},12).wait(581).to({x:275},20).wait(530).to({alpha:0},11).wait(146));

	// envelope4
	this.instance_57 = new lib.EnvelopeStatic4();
	this.instance_57.setTransform(275.8,90.8);
	this.instance_57.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_57).wait(10).to({alpha:1},12).wait(581).to({x:381.5},20).wait(682).to({alpha:0},4).wait(1));

	// envelope3
	this.instance_58 = new lib.EnvelopeStatic3();
	this.instance_58.setTransform(202.7,90.8);
	this.instance_58.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_58).wait(10).to({alpha:1},12).wait(581).to({x:90.2},20).wait(196).to({alpha:0},9).wait(140).to({scaleX:0.88,scaleY:0.88,x:92.2},0).wait(342));

	// envelope2
	this.instance_59 = new lib.EnvelopeStatic2();
	this.instance_59.setTransform(124,90.8);
	this.instance_59.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_59).wait(10).to({alpha:1},12).wait(581).to({x:206},20).wait(368).to({alpha:0},6).wait(313));

	// envelope1
	this.instance_60 = new lib.EnvelopeStatic();
	this.instance_60.setTransform(53.2,90.8);
	this.instance_60.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_60).wait(10).to({alpha:1},12).wait(581).to({x:0,alpha:0},20).wait(687));

	// text
	this.text_32 = new cjs.Text("Fa0/0", "10px Arial", "#393536");
	this.text_32.textAlign = "center";
	this.text_32.lineHeight = 12;
	this.text_32.setTransform(420.1,73.3);

	this.text_33 = new cjs.Text("10.4.0.0", "bold 10px Arial", "#393536");
	this.text_33.textAlign = "center";
	this.text_33.lineHeight = 12;
	this.text_33.setTransform(427.9,28);

	this.text_34 = new cjs.Text("10.3.0.0", "bold 10px Arial", "#393536");
	this.text_34.textAlign = "center";
	this.text_34.lineHeight = 12;
	this.text_34.setTransform(295.8,28);

	this.text_35 = new cjs.Text("S0/0/1", "10px Arial", "#393536");
	this.text_35.textAlign = "center";
	this.text_35.lineHeight = 12;
	this.text_35.setTransform(337.5,79.6);

	this.text_36 = new cjs.Text("S0/0/1", "10px Arial", "#393536");
	this.text_36.textAlign = "center";
	this.text_36.lineHeight = 12;
	this.text_36.setTransform(280,92);

	this.text_37 = new cjs.Text("S0/0/0", "10px Arial", "#393536");
	this.text_37.textAlign = "center";
	this.text_37.lineHeight = 12;
	this.text_37.setTransform(195,80);

	this.text_38 = new cjs.Text("Fa0/0", "10px Arial", "#393536");
	this.text_38.textAlign = "center";
	this.text_38.lineHeight = 12;
	this.text_38.setTransform(50,73.8);

	this.text_39 = new cjs.Text("10.2.0.0", "bold 10px Arial", "#393536");
	this.text_39.textAlign = "center";
	this.text_39.lineHeight = 12;
	this.text_39.setTransform(154.3,28);

	this.text_40 = new cjs.Text("S0/0/0", "10px Arial", "#393536");
	this.text_40.textAlign = "center";
	this.text_40.lineHeight = 12;
	this.text_40.setTransform(135,92);

	this.text_41 = new cjs.Text("10.1.0.0", "bold 10px Arial", "#393536");
	this.text_41.textAlign = "center";
	this.text_41.lineHeight = 12;
	this.text_41.setTransform(32.3,28);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_41},{t:this.text_40},{t:this.text_39},{t:this.text_38},{t:this.text_37},{t:this.text_36},{t:this.text_35},{t:this.text_34},{t:this.text_33},{t:this.text_32}]}).wait(1310));

	// Table header3
	this.instance_61 = new lib.h33();
	this.instance_61.setTransform(450.1,181.5,1,1,0,0,0,15.2,8.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_61}]}).wait(1310));

	// Table header3
	this.instance_62 = new lib.h32();
	this.instance_62.setTransform(405.5,181.5,1,1,0,0,0,26.1,8.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_62}]}).wait(1310));

	// Table header3
	this.instance_63 = new lib.h31();
	this.instance_63.setTransform(347.5,182.5,1,1,0,0,0,28.6,8.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_63}]}).wait(1310));

	// Table header2
	this.instance_64 = new lib.h23();
	this.instance_64.setTransform(294.1,181.5,1,1,0,0,0,15.3,8.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_64}]}).wait(1310));

	// Table header2
	this.instance_65 = new lib.h22();
	this.instance_65.setTransform(249.6,181.5,1,1,0,0,0,25.3,8.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_65}]}).wait(1310));

	// Table header2
	this.instance_66 = new lib.h21();
	this.instance_66.setTransform(191.5,200,1,1,0,0,0,28.6,8.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_66}]}).wait(1310));

	// Table header1
	this.instance_67 = new lib.h13();
	this.instance_67.setTransform(137.1,182.3,1,1,0,0,0,15.4,8.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_67}]}).wait(1310));

	// Table header1
	this.instance_68 = new lib.h12();
	this.instance_68.setTransform(92.5,181.5,1,1,0,0,0,25.1,8.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_68}]}).wait(1310));

	// Table header1
	this.instance_69 = new lib.h11();
	this.instance_69.setTransform(34.5,182.5,1,1,0,0,0,28.6,8.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_69}]}).wait(1310));

	// table3
	this.text_42 = new cjs.Text("0", "10px Arial", "#393536");
	this.text_42.textAlign = "center";
	this.text_42.lineHeight = 12;
	this.text_42.setTransform(448,246.7);

	this.text_43 = new cjs.Text("0", "10px Arial", "#393536");
	this.text_43.textAlign = "center";
	this.text_43.lineHeight = 12;
	this.text_43.setTransform(448,219);

	this.text_44 = new cjs.Text("Fa0/0", "10px Arial", "#393536");
	this.text_44.textAlign = "center";
	this.text_44.lineHeight = 12;
	this.text_44.setTransform(403.5,246.8);

	this.text_45 = new cjs.Text("S0/0/1", "10px Arial", "#393536");
	this.text_45.textAlign = "center";
	this.text_45.lineHeight = 12;
	this.text_45.setTransform(403.5,219);

	this.text_46 = new cjs.Text("10.4.0.0", "10px Arial", "#393536");
	this.text_46.textAlign = "center";
	this.text_46.lineHeight = 12;
	this.text_46.setTransform(345.5,246.4);

	this.text_47 = new cjs.Text("10.3.0.0", "10px Arial", "#393536");
	this.text_47.textAlign = "center";
	this.text_47.lineHeight = 12;
	this.text_47.setTransform(345.5,219);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_47},{t:this.text_46},{t:this.text_45},{t:this.text_44},{t:this.text_43},{t:this.text_42}]}).wait(1310));

	// table2
	this.text_48 = new cjs.Text("0", "10px Arial", "#393536");
	this.text_48.textAlign = "center";
	this.text_48.lineHeight = 12;
	this.text_48.setTransform(292,246.7);

	this.text_49 = new cjs.Text("0", "10px Arial", "#393536");
	this.text_49.textAlign = "center";
	this.text_49.lineHeight = 12;
	this.text_49.setTransform(292,219);

	this.text_50 = new cjs.Text("S0/0/1", "10px Arial", "#393536");
	this.text_50.textAlign = "center";
	this.text_50.lineHeight = 12;
	this.text_50.setTransform(247.5,246.8);

	this.text_51 = new cjs.Text("S0/0/0", "10px Arial", "#393536");
	this.text_51.textAlign = "center";
	this.text_51.lineHeight = 12;
	this.text_51.setTransform(247.5,219);

	this.text_52 = new cjs.Text("10.3.0.0", "10px Arial", "#393536");
	this.text_52.textAlign = "center";
	this.text_52.lineHeight = 12;
	this.text_52.setTransform(189.5,246.4);

	this.text_53 = new cjs.Text("10.2.0.0", "10px Arial", "#393536");
	this.text_53.textAlign = "center";
	this.text_53.lineHeight = 12;
	this.text_53.setTransform(189.5,219);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_53},{t:this.text_52},{t:this.text_51},{t:this.text_50},{t:this.text_49},{t:this.text_48}]}).wait(1310));

	// table1
	this.text_54 = new cjs.Text("0", "10px Arial", "#393536");
	this.text_54.textAlign = "center";
	this.text_54.lineHeight = 12;
	this.text_54.setTransform(135,246.7);

	this.text_55 = new cjs.Text("0", "10px Arial", "#393536");
	this.text_55.textAlign = "center";
	this.text_55.lineHeight = 12;
	this.text_55.setTransform(135,219);

	this.text_56 = new cjs.Text("S0/0/0", "10px Arial", "#393536");
	this.text_56.textAlign = "center";
	this.text_56.lineHeight = 12;
	this.text_56.setTransform(90.5,246.8);

	this.text_57 = new cjs.Text("Fa0/0", "10px Arial", "#393536");
	this.text_57.textAlign = "center";
	this.text_57.lineHeight = 12;
	this.text_57.setTransform(90.5,219);

	this.text_58 = new cjs.Text("10.2.0.0", "10px Arial", "#393536");
	this.text_58.textAlign = "center";
	this.text_58.lineHeight = 12;
	this.text_58.setTransform(32.5,246.4);

	this.text_59 = new cjs.Text("10.1.0.0", "10px Arial", "#393536");
	this.text_59.textAlign = "center";
	this.text_59.lineHeight = 12;
	this.text_59.setTransform(32.5,219);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_59},{t:this.text_58},{t:this.text_57},{t:this.text_56},{t:this.text_55},{t:this.text_54}]}).wait(1310));

	// background
	this.instance_70 = new lib.background();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_70}]}).wait(1310));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,476.3,400);


(lib.Main = function() {
	this.initialize();

	// animation
	this.anim01 = new lib.animation01();
	this.anim01.setTransform(0,4);

	this.addChild(this.anim01);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,4,476.3,400);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;