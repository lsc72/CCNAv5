(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.classesmediaMediaObject = function() {
	this.initialize();

	// main
	this.instance = new lib.Main();
	this.instance.setTransform(0,-6.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(2.5,-9.4,470,400.2);


// symbols:
(lib.Bitmap1 = function() {
	this.initialize(img.Bitmap1);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,123,86);


(lib.Bitmap1_1 = function() {
	this.initialize();
	this.bitmap = new cjs.Bitmap("images/Bitmap1_1.png");
	this.addChild(this.bitmap);
}).prototype = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,18,18);


(lib.Bitmap2 = function() {
	this.bitmap = new cjs.Bitmap("images/Bitmap2.png");
	this.addChild(this.bitmap);
}).prototype = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,55,54);


(lib.Bitmap3 = function() {
	var img = document.createElement("img");
	img.src = "images/Bitmap3.png";	
	$("#commonMediaText").append(img);
	var bitmap = new createjs.DOMElement(img);
	this.addChild(bitmap);
	
	/*
	this.bitmap = new cjs.Bitmap("images/Bitmap3.png");
	this.addChild(this.bitmap);*/
}).prototype = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,241,170);


(lib.image1 = function() {
	var img = document.createElement("img");
	img.src = "images/image1.png";	
	$("#commonMediaText").append(img);
	var bitmap = new createjs.DOMElement(img);
	this.addChild(bitmap);
}).prototype = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,248,116);


(lib.image2 = function() {
	var img = document.createElement("img");
	img.src = "images/image2.png";	
	$("#commonMediaText").append(img);
	var bitmap = new createjs.DOMElement(img);
	this.addChild(bitmap);
}).prototype = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,160,96);


(lib.image3 = function() {
	var img = document.createElement("img");
	img.src = "images/image3.png";	
	$("#commonMediaText").append(img);
	var bitmap = new createjs.DOMElement(img);
	this.addChild(bitmap);
}).prototype = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,308,99);


(lib.image4 = function() {
	var img = document.createElement("img");
	img.src = "images/image4.png";	
	$("#commonMediaText").append(img);
	var bitmap = new createjs.DOMElement(img);
	this.addChild(bitmap);
}).prototype = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,235,90);


(lib.image5 = function() {
	var img = document.createElement("img");
	img.src = "images/image5.png";		
	$("#commonMediaText").append(img);	
	var bitmap = new createjs.DOMElement(img);
	this.addChild(bitmap);
}).prototype = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,320,69);


(lib.image6 = function() {
	var img = document.createElement("img");
	img.src = "images/image6.png";	
	$("#commonMediaText").append(img);
	var bitmap = new createjs.DOMElement(img);
	this.addChild(bitmap);
}).prototype = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,68,21);


(lib.MagnifyingGlass = function() {
	this.bitmap = new cjs.Bitmap("images/MagnifyingGlass.png");
	this.addChild(this.bitmap);
}).prototype = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,16,16);


(lib.media_11222 = function() {
	this.bitmap = new cjs.Bitmap("images/media_11222.png");
	this.addChild(this.bitmap);
}).prototype = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,653,556);


(lib.WireShark = function() {
	this.bitmap = new cjs.Bitmap("images/Bitmap1_1.png");
	this.addChild(this.bitmap);
}).prototype = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,160,70);


(lib.whoiscom_01 = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.image4();
	this.instance.setTransform(7,-1.1,0.709,0.709);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-1.1,166.6,63.8);


(lib.Tween6 = function() {
	this.initialize();

	// Layer 1
	this.instance_1 = new lib.Bitmap3();
	this.instance_1.setTransform(-156.4,-90.4);

	this.addChild(this.instance_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-167.4,-90.4,241,170);


(lib.MagnifyingGlass_1 = function() {
	this.initialize();

	// Layer 2
	this.instance_2 = new lib.Bitmap2();
	this.instance_2.setTransform(0,-50.8);

	this.addChild(this.instance_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-50.8,55,54);


(lib.graphic_09 = function() {
	this.initialize();

	// Layer 3
	this.instance_3 = new lib.image2();
	this.instance_3.setTransform(-79,-20.9,1.099,1.061);

	this.addChild(this.instance_3);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-86,-20.9,175.9,101.9);


(lib.graphic_06 = function() {
	this.initialize();

	// Layer 2
	this.instance_4 = new lib.image1();
	this.instance_4.setTransform(-58.5,-26.3,0.468,0.444);

	this.addChild(this.instance_4);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-58.5,-26.3,116.2,51.6);


(lib.graphic_03 = function() {
	this.initialize();

	// Layer 2
	this.instance_5 = new lib.image3();
	this.instance_5.setTransform(-66.9,-23.7,0.48,0.486);

	this.addChild(this.instance_5);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-73.9,-23.7,147.9,48.2);


(lib.graphic_01 = function() {
	this.initialize();

	// Layer 2
	this.instance_6 = new lib.image5();
	this.instance_6.setTransform(-72.1,-19.7,0.498,0.498);

	this.addChild(this.instance_6);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-79.1,-19.7,159.4,34.4);


(lib.ciscocom_g = function() {
	this.initialize();

	// Layer 2
	this.instance_7 = new lib.image6();
	this.instance_7.setTransform(-24.2,-7.5,0.705,0.705);

	this.addChild(this.instance_7);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-24.2,-7.5,47.9,14.8);


(lib.ball_g = function() {
	this.initialize();

	// Layer 1
	this.instance_8 = new lib.Bitmap1_1();
	this.instance_8.setTransform(-8.9,-8.9);

	this.addChild(this.instance_8);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-8.9,-8.9,18,18);


(lib.ID_txt08 = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("ID_txt08", "10px Arial", "#010000");
	//this.text.lineHeight = 12;	
	this.text = getCJSElement("TEXT",{compId:"ID_txt08", width:252, expand:"down", align:"left", size:10});
	this.text.setTransform(5,1.9);
	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,252,17);


(lib.ID_txt07 = function() {
	this.initialize();

	// Layer 1
	//this.text_1 = new cjs.Text("ID_txt07", "10px Arial", "#010000");
	this.text_1 = getCJSElement("TEXT",{compId:"ID_txt07", width:104, expand:"left+right", align:"center", size:11});
	this.text_1.setTransform(0,1.9);

	this.addChild(this.text_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,104,17);


(lib.ID_txt06 = function() {
	this.initialize();

	// Layer 1
	//this.text_2 = new cjs.Text("ID_txt06", "10px Arial", "#010000");
	this.text_2 = getCJSElement("TEXT",{compId:"ID_txt06", width:104, expand:"left+right", align:"center", size:11});
	this.text_2.setTransform(0,1.9);

	this.addChild(this.text_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,104,17);


(lib.whoiscom_02_g = function() {
	this.initialize();

	// Layer 1
	this.instance_9 = new lib.graphic_09("synched",0);
	this.instance_9.setTransform(-2.8,0.1,0.685,0.685,0,0,0,2.5,30.9);

	this.addChild(this.instance_9);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-63.6,-35.5,120.6,69.8);

(lib.port_scans_m = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{},true);

	// text
	this.instance_10 = new lib.ID_txt07();
	this.instance_10.setTransform(-21.9,-69.6,1,1,0,0,0,52,8.5);
	this.instance_10.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(73).to({alpha:1},0).wait(1));

	// image
	this.instance_11 = new lib.graphic_03("synched",0);
	this.instance_11.setTransform(-20.6,-16.5,1.5,1.5);
	this.instance_11.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(73).to({alpha:1},0).wait(1));

	// caption
	this.instance_12 = new lib.Tween6("synched",0);
	this.instance_12.setTransform(26,1.3);
	this.instance_12.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(68).to({scaleX:0.1,scaleY:0.1,x:8.5,y:74.3,alpha:1},0).to({scaleX:1,scaleY:1,x:26,y:1.3},3).wait(3));

	// ball4
	this.instance_13 = new lib.ball_g();
	this.instance_13.setTransform(3,97);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(13).to({_off:false},0).to({x:82.8,y:98},9,cjs.Ease.get(1)).to({x:83.8,y:189.9},10,cjs.Ease.get(1)).to({x:115.8},5,cjs.Ease.get(1)).wait(6).to({x:83.8},5,cjs.Ease.get(1)).to({x:82.8,y:98},10,cjs.Ease.get(1)).to({x:3,y:97},9,cjs.Ease.get(1)).wait(7));

	// ball3
	this.instance_14 = new lib.ball_g();
	this.instance_14.setTransform(3,97);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(12).to({_off:false},0).to({x:82.8,y:98},9,cjs.Ease.get(1)).to({x:84.8,y:128},10,cjs.Ease.get(1)).to({x:115.8},5,cjs.Ease.get(1)).wait(6).to({x:84.8},5,cjs.Ease.get(1)).to({x:82.8,y:98},10,cjs.Ease.get(1)).to({x:3,y:97},9,cjs.Ease.get(1)).wait(8));

	// ball2
	this.instance_15 = new lib.ball_g();
	this.instance_15.setTransform(3,97);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(11).to({_off:false},0).to({x:82.8,y:98},9,cjs.Ease.get(1)).to({x:84.8,y:67},10,cjs.Ease.get(1)).to({x:115.8},5,cjs.Ease.get(1)).wait(6).to({x:84.8},5,cjs.Ease.get(1)).to({x:82.8,y:98},10,cjs.Ease.get(1)).to({x:3,y:97},9,cjs.Ease.get(1)).wait(9));

	// ball1
	this.instance_16 = new lib.ball_g();
	this.instance_16.setTransform(3,97);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(1).to({_off:false},0).to({x:82.8,y:98},18,cjs.Ease.get(1)).to({x:83.8,y:6},10,cjs.Ease.get(1)).to({x:115.8,y:5.9},5,cjs.Ease.get(1)).wait(6).to({x:83.8,y:6},5,cjs.Ease.get(1)).to({x:82.8,y:98},10,cjs.Ease.get(1)).to({x:3,y:97},9,cjs.Ease.get(1)).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-141.4,-89.1,241,170);


(lib.ping_scan_m = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{},true);

	// text
	this.instance_17 = new lib.ID_txt08();
	this.instance_17.setTransform(97,-66.4,1,1,0,0,0,126,8.5);
	this.instance_17.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(204).to({alpha:1},0).wait(6));

	// caption
	this.instance_18 = new lib.Tween6("synched",0);
	this.instance_18.setTransform(149,-0.6,1.095,0.878);
	this.instance_18.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(201).to({scaleX:0.1,scaleY:0.1,x:130.1,y:60.3,alpha:1},0).to({scaleX:1.1,scaleY:0.88,x:149,y:-0.5},3).wait(6));

	// ball4
	this.instance_19 = new lib.ball_g();
	this.instance_19.setTransform(123.7,84.4);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(73).to({_off:false},0).to({x:203.5,y:85.4},9,cjs.Ease.get(1)).to({x:204.5,y:177.3},10,cjs.Ease.get(1)).to({x:236.5},5,cjs.Ease.get(1)).wait(78).to({x:204.5},5,cjs.Ease.get(1)).to({x:203.5,y:85.4},10,cjs.Ease.get(1)).to({x:123.7,y:84.4},9,cjs.Ease.get(1)).wait(11));

	// ball3
	this.instance_20 = new lib.ball_g();
	this.instance_20.setTransform(123.7,84.4);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(49).to({_off:false},0).to({x:203.5,y:85.4},9,cjs.Ease.get(1)).to({x:205.5,y:115.4},10,cjs.Ease.get(1)).to({x:236.5},5,cjs.Ease.get(1)).wait(78).to({x:205.5},5,cjs.Ease.get(1)).to({x:203.5,y:85.4},10,cjs.Ease.get(1)).to({x:123.7,y:84.4},9,cjs.Ease.get(1)).wait(35));

	// ball2
	this.instance_21 = new lib.ball_g();
	this.instance_21.setTransform(123.7,84.4);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(25).to({_off:false},0).to({x:203.5,y:85.4},9,cjs.Ease.get(1)).to({x:205.5,y:54.3},10,cjs.Ease.get(1)).to({x:236.5,y:53.5},5,cjs.Ease.get(1)).wait(78).to({y:54.4},0).to({x:205.5},5,cjs.Ease.get(1)).to({x:203.5,y:85.4},10,cjs.Ease.get(1)).to({x:123.7,y:84.4},9,cjs.Ease.get(1)).wait(59));

	// ball1
	this.instance_22 = new lib.ball_g();
	this.instance_22.setTransform(123.7,84.4);
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(1).to({_off:false},0).to({x:203.5,y:85.4},9,cjs.Ease.get(1)).to({x:204.5,y:-6.5},10,cjs.Ease.get(1)).to({x:236.5},5,cjs.Ease.get(1)).wait(78).to({x:204.5},5,cjs.Ease.get(1)).to({x:203.5,y:85.4},10,cjs.Ease.get(1)).to({x:123.7,y:84.4},9,cjs.Ease.get(1)).wait(83));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.3,-80.1,264,149.4);


(lib.packet_sniffers_m = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{},true);

	// text
	this.instance_23 = new lib.ID_txt06();
	this.instance_23.setTransform(106,-85.1,1,1,0,0,0,52,8.5);
	this.instance_23.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(88).to({alpha:1},0).wait(1));

	// image
	this.instance_24 = new lib.graphic_06("synched",0);
	this.instance_24.setTransform(106.9,-29.9,1.5,1.5);
	this.instance_24.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(88).to({alpha:1},0).wait(1));

	// caption
	this.instance_25 = new lib.Tween6("synched",0);
	this.instance_25.setTransform(151,-11.6);
	this.instance_25.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(83).to({scaleX:0.1,scaleY:0.1,x:133,y:56.4,alpha:1},0).to({scaleX:1,scaleY:1,x:151,y:-11.5},3).wait(3));

	// ball4
	this.instance_26 = new lib.ball_g();
	this.instance_26.setTransform(203.8,84.5);
	this.instance_26._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(34).to({_off:false},0).to({x:204.6,y:175.4},4,cjs.Ease.get(1)).to({x:236.6,y:173.4},7,cjs.Ease.get(1)).to({x:207.6,y:174.4},6).to({x:205.6,y:-7.5},6,cjs.Ease.get(1)).to({x:239.6,y:-8.5},5,cjs.Ease.get(1)).to({x:205.6,y:-5.5},4).to({y:115.4},4).to({x:238.6,y:117.4},5).to({x:205.6},5).to({x:206.6},2).to({x:238.6,y:115.4},4).wait(3));

	// ball3
	this.instance_27 = new lib.ball_g();
	this.instance_27.setTransform(203.6,84.4);
	this.instance_27._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(34).to({_off:false},0).to({x:204.6,y:55.4},3,cjs.Ease.get(1)).to({x:236.6,y:53.4},4,cjs.Ease.get(1)).to({x:207.6,y:55.4},6).to({x:205.6,y:174.4},7,cjs.Ease.get(1)).to({x:239.6},4,cjs.Ease.get(1)).to({x:205.6,y:175.4},5).to({y:55.4},5).to({x:238.6,y:53.4},5).to({x:205.6,y:55.4},4).to({x:206.6,y:-6.5},5).to({x:238.6,y:-9.5},4).wait(3));

	// ball2
	this.instance_28 = new lib.ball_g();
	this.instance_28.setTransform(203.8,84.5);
	this.instance_28._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(34).to({_off:false},0).to({x:204.6,y:117.4},9,cjs.Ease.get(1)).to({x:237.2,y:115.8},9,cjs.Ease.get(1)).to({x:207.6,y:116.4},5).to({x:205.6,y:53.4},3,cjs.Ease.get(1)).to({x:239.6,y:54.4},5,cjs.Ease.get(1)).to({x:205.6,y:55.4},5).to({y:-8.5},3).to({x:238.6,y:-10.5},3).to({x:205.6,y:-7.5},3).to({x:206.6,y:175.4},3).to({x:238.6},4).wait(3));

	// ball1
	this.instance_29 = new lib.ball_g();
	this.instance_29.setTransform(240.6,-7.6);
	this.instance_29._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(1).to({_off:false},0).wait(26).to({x:206.6,y:-6.5},3).to({x:205.6,y:84.4},2).to({x:203.8,y:84.5},2).to({x:204.8,y:-7.4},5,cjs.Ease.get(1)).to({x:236.8},7,cjs.Ease.get(1)).to({x:207.6,y:-7.5},3).to({x:205.6,y:115.4},7,cjs.Ease.get(1)).to({x:239.6},6,cjs.Ease.get(1)).to({x:206.1,y:115},5).to({x:205.6,y:176.4},5).to({x:238.4,y:176.8},5).to({x:205.6,y:176.4},3).to({x:206.6,y:53.4},3).to({x:238.6},3).wait(3));

	// search
	this.instance_30 = new lib.MagnifyingGlass_1();
	this.instance_30.setTransform(119.4,90.9,0.291,0.291);
	this.instance_30._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(9).to({_off:false},0).to({x:196.2,y:90.6},5,cjs.Ease.get(1)).to({x:197,y:77.6},10,cjs.Ease.get(1)).to({x:196.2,y:107.6},10,cjs.Ease.get(1)).to({y:89.6},10,cjs.Ease.get(1)).wait(45));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.4,-102.1,241,170);


(lib.internet_queries_m = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{},true);

	// image3
	this.instance_31 = new lib.whoiscom_02_g("synched",0);
	this.instance_31.setTransform(104.2,-51.5,1.5,1.5);
	this.instance_31.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(98).to({alpha:1},0).wait(9));

	// text2
	this.instance_32 = new lib.ciscocom_g("synched",0);
	this.instance_32.setTransform(109.4,-29.2,0.997,1.003);
	this.instance_32.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(54).to({startPosition:0},0).to({scaleX:1,x:110.3,alpha:1},5,cjs.Ease.get(1)).wait(39).to({alpha:0},0).wait(9));

	// image2
	this.instance_33 = new lib.whoiscom_01("synched",0);
	this.instance_33.setTransform(97,-50.9,1.327,1.326,0,0,0,84,31.3);
	this.instance_33.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(51).to({alpha:1},0).wait(47).to({alpha:0},0).wait(9));

	// image1
	this.instance_34 = new lib.graphic_01("synched",0);
	this.instance_34.setTransform(96,-54.7,1.44,1.44,0,0,0,0,-2.5);
	this.instance_34.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(4).to({alpha:1},0).wait(47).to({alpha:0},0).wait(56));

	// caption
	this.instance_35 = new lib.Tween6("synched",0);
	this.instance_35.setTransform(143,-21.6);
	this.instance_35.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_35).wait(1).to({scaleX:0.1,scaleY:0.1,x:125,y:50.3,alpha:1},0).to({scaleX:1,scaleY:1,x:143,y:-21.5},3).wait(103));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.4,-112.1,241,170);

(lib.Main = function() {
	this.initialize();

	// mgm - packet_sniffer_m
	this.mgm = new lib.packet_sniffers_m();
	this.mgm.setTransform(160.6,150);

	// psm - ping_scan_m
	this.psm = new lib.ping_scan_m();
	this.psm.setTransform(162.2,148);

	// iqm - internet_queries_m
	this.iqm = new lib.internet_queries_m();
	this.iqm.setTransform(168,157.5);

	// posm - ports_scan_m
	this.posm = new lib.port_scans_m();	
	this.posm.setTransform(283.2,134.3);

	// topology
	this.instance_36 = new lib.media_11222();
	this.instance_36.setTransform(2.5,-2.4,0.72,0.72);
	
	this.clip = [this.iqm, this.psm, this.posm, this.mgm];
	this.playClip = function(id)
	{
		this.stopAll();
		this.clip[id].gotoAndPlay(0);
	}
	
	this.stopAll = function()
	{
		this.mgm.gotoAndStop(0);
		this.psm.gotoAndStop(0);
		this.iqm.gotoAndStop(0);
		this.posm.gotoAndStop(0);
	}
	
	this.stopAll();
	this.addChild(this.instance_36,this.posm,this.iqm,this.psm,this.mgm);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(2.5,-2.4,470,400.2);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;