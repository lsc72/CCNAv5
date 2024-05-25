(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.Animation = function() {
	this.initialize();

	// main
	this.Main = new lib.Main();

	this.addChild(this.Main);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.5,0.5,470,400);


// symbols:
(lib.Anim01bg = function() {
	this.initialize(img.Anim01bg);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,470,400);


(lib.Anim02bg = function() {
	this.initialize(img.Anim02bg);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,470,400);


(lib.Bitmap1 = function() {
	this.initialize();
	this.instance = new DOMObject({type:"IMAGE",image:img.Bitmap1});
	this.addChild(this.instance);
	
	
	
}).prototype = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,81,21);


(lib.Bitmap2 = function() {
	this.initialize();
	this.instance = new DOMObject({type:"IMAGE",image:img.Bitmap2});
	this.addChild(this.instance);	
}).prototype = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,81,21);


(lib.Bitmap3 = function() {
this.initialize();
	this.instance = new DOMObject({type:"IMAGE",image:img.Bitmap3});
	this.addChild(this.instance);	
	
}).prototype = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,81,21);


(lib.Bitmap4 = function() {
	this.initialize();
	this.instance = new DOMObject({type:"IMAGE",image:img.Bitmap4});
	this.addChild(this.instance);	
}).prototype = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,81,21);


(lib.Bitmap5 = function() {
	this.initialize();
	this.instance = new DOMObject({type:"IMAGE",image:img.Bitmap5});
	this.addChild(this.instance);	
}).prototype = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,81,21);


(lib.Bitmap6 = function() {
	this.initialize();
	this.instance = new DOMObject({type:"IMAGE",image:img.Bitmap6});
	this.addChild(this.instance);	
}).prototype = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,81,21);


(lib.Bitmap7 = function() {
this.initialize();
	this.instance = new DOMObject({type:"IMAGE",image:img.Bitmap7});
	this.addChild(this.instance);	
}).prototype = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,81,21);


(lib.bubble02 = function() {
	this.initialize();

	// Layer 1
	
	
		this.text = new DOMObject({ type:"BUBBLE", compId:"ID_s4_txt04", width:"102.35", height:"80", align:"left", tailPosition:"1", tailFlip:"0" }); 
this.text.setTransform(0,0);
	
	

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(7,23,67,30.4);


(lib.bubble01 = function() {
	this.initialize();

	// Layer 1
	this.text_1 = new DOMObject({ type:"BUBBLE", compId:"ID_s4_txt03",  width:"102.35", height:"80", align:"left", tailPosition:"5", tailFlip:"0" }); 
	this.text_1.setTransform(0,0);

	this.addChild(this.text_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(7,25.1,67,30.4);


(lib.Bg_7 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Bitmap7();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,81,21);


(lib.Bg_6 = function() {
	this.initialize();

	// Layer 1
	this.instance_1 = new lib.Bitmap6();

	this.addChild(this.instance_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,81,21);


(lib.Bg_5 = function() {
	this.initialize();

	// Layer 1
	this.instance_2 = new lib.Bitmap5();

	this.addChild(this.instance_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,81,21);


(lib.Bg_4 = function() {
	this.initialize();

	// Layer 1
	this.instance_3 = new lib.Bitmap4();

	this.addChild(this.instance_3);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,81,21);


(lib.Bg_3 = function() {
	this.initialize();

	// Layer 1
	this.instance_4 = new lib.Bitmap3();

	this.addChild(this.instance_4);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,81,21);


(lib.Bg_2 = function() {
	this.initialize();

	// Layer 1
	this.instance_5 = new lib.Bitmap2();

	this.addChild(this.instance_5);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,81,21);


(lib.Bg_1 = function() {
	this.initialize();

	// Layer 1
	this.instance_6 = new lib.Bitmap1();

	this.addChild(this.instance_6);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,81,21);


(lib.LSA5 = function() {
	this.initialize();

	// Layer 3
    this.text_2 = new DOMObject({type:"TEXT" , align:"left" ,compId:"ID_txt05", width:"76", expand:"up+down"}); 	
	this.text_2.setTransform(5,3);

	// Layer 4
	this.Bg_2 = new lib.Bg_2();
	this.Bg_2.setTransform(40,10,1,1,0,0,0,40.5,10.5);

	this.addChild(this.Bg_2,this.text_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.4,-0.4,81,21);


(lib.LSA4 = function() {
	this.initialize();

	// Layer 3
	this.text_3 = new DOMObject({type:"TEXT" , align:"left" ,compId:"ID_txt03", width:"76", expand:"up+down"}); 	
	this.text_3.setTransform(5,3);

	// Layer 4
	this.Bg_3 = new lib.Bg_3();
	this.Bg_3.setTransform(40,10,1,1,0,0,0,40.5,10.5);

	this.addChild(this.Bg_3,this.text_3);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.4,-0.4,81,21);


(lib.LSA3 = function() {
	this.initialize();

	// Layer 2
		this.text_4 = new DOMObject({type:"TEXT" , align:"left" ,compId:"ID_txt04", width:"76", expand:"up+down"}); 	
	this.text_4.setTransform(5,3);

	// Layer 4
	this.Bg_7 = new lib.Bg_7();
	this.Bg_7.setTransform(40,10,1,1,0,0,0,40.5,10.5);

	this.addChild(this.Bg_7,this.text_4);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.4,-0.4,81,21);


(lib.LSA2copy = function() {
	this.initialize();

	// Layer 3
	this.text_5 = new DOMObject({type:"TEXT" , align:"left" ,compId:"ID_s4_txt06", width:"76", expand:"up+down"}); 
	this.text_5.setTransform(19,3);

	// Layer 4
	this.Bg_4 = new lib.Bg_4();
	this.Bg_4.setTransform(40,10,1,1,0,0,0,40.5,10.5);

	this.addChild(this.Bg_4,this.text_5);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.4,-0.4,81,21);


(lib.LSA2 = function() {
	this.initialize();

	// Layer 3
	this.text_6 = new DOMObject({type:"TEXT" , align:"left" ,compId:"ID_txt02", width:"76", expand:"up+down"}); 	
	this.text_6.setTransform(5,3);

	// Layer 4
	this.Bg_6 = new lib.Bg_6();
	this.Bg_6.setTransform(40,10,1,1,0,0,0,40.5,10.5);

	this.addChild(this.Bg_6,this.text_6);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.4,-0.4,81,21);


(lib.LSA1copy = function() {
	this.initialize();

	// text
		this.text_7 = new DOMObject({type:"TEXT" , align:"left" ,compId:"ID_s4_txt05", width:"76", expand:"up+down"}); 
	this.text_7.setTransform(19,3);

	// box
	this.Bg_5 = new lib.Bg_5();
	this.Bg_5.setTransform(40,10,1,1,0,0,0,40.5,10.5);

	this.addChild(this.Bg_5,this.text_7);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.4,-0.4,81,21);


(lib.LSA1 = function() {
	this.initialize();

	// text
	this.text_8 = new DOMObject({type:"TEXT" , align:"left" ,compId:"ID_txt01", width:"76", expand:"up+down"}); 	
	this.text_8.setTransform(5,3);

	// box
	this.Bg_1 = new lib.Bg_1();
	this.Bg_1.setTransform(40,10,1,1,0,0,0,40.5,10.5);

	this.addChild(this.Bg_1,this.text_8);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.4,-0.4,81,21);


(lib.animation02copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// Layer 4
	this.instance_7 = new lib.bubble02();
	this.instance_7.setTransform(47.1,156.3,1,1,0,0,0,40,40);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(106).to({alpha:1},0).wait(124));

	// bubble
	this.instance_8 = new lib.bubble01();
	this.instance_8.setTransform(52.4,182.4,1,1,0,0,0,40,40);
	this.instance_8.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(9).to({alpha:1},0).wait(96).wait(1).to({alpha:0},0).wait(124));

	// LSA2
	this.instance_9 = new lib.LSA2copy();
	this.instance_9.setTransform(69.8,94.7,1,1,0,0,0,31.5,9.1);
	this.instance_9.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(106).to({alpha:1},9).wait(12).to({x:211.8,y:164.7},18).wait(10).to({x:356.8,y:96.7},13).wait(8).to({alpha:0},10).wait(1).to({x:-476.2,y:-23.1},0).wait(43));

	// LSA2
	this.instance_10 = new lib.LSA2copy();
	this.instance_10.setTransform(69.8,94.7,1,1,0,0,0,31.5,9.1);
	this.instance_10.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(106).to({alpha:1},9).wait(12).to({x:211.8,y:164.7},18).wait(10).to({x:356.8,y:238.7},13).wait(8).to({alpha:0},10).wait(1).to({x:-476.2,y:118.7},0).wait(43));

	// LSA2
	this.instance_11 = new lib.LSA2copy();
	this.instance_11.setTransform(69.8,94.7,1,1,0,0,0,31.5,9.1);
	this.instance_11.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(106).to({alpha:1},9).wait(12).to({x:211.8,y:164.7},18).wait(10).to({x:212.8,y:307.7},13).wait(8).to({alpha:0},10).wait(1).to({x:-620.2,y:187.7},0).wait(43));

	// LSA2
	this.instance_12 = new lib.LSA2copy();
	this.instance_12.setTransform(69.8,94.7,1,1,0,0,0,31.5,9.1);
	this.instance_12.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(106).to({alpha:1},9).wait(12).to({x:211.8,y:164.7},18).wait(10).to({x:69.8,y:238.7},13).wait(8).to({alpha:0},10).wait(1).to({x:-763.2,y:118.7},0).wait(43));

	// LSA1
	this.instance_13 = new lib.LSA1copy();
	this.instance_13.setTransform(40.7,235.6);
	this.instance_13.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(9).to({alpha:1},6).to({x:180.7,y:155.6},15).to({x:39.7,y:85.6},17).wait(16).to({alpha:0},14).wait(153));

	// LSA1
	this.instance_14 = new lib.LSA1copy();
	this.instance_14.setTransform(180.7,155.6);
	this.instance_14.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(30).to({alpha:1},0).to({x:322.7,y:85.6},17).wait(16).to({alpha:0},14).wait(153));

	// Layer 2
	this.instance_15 = new lib.Anim02bg();
	this.instance_15.setTransform(0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_15}]}).wait(230));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.5,0.5,470,400);


(lib.anim01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// LSA5
	this.instance_16 = new lib.LSA5();
	this.instance_16.setTransform(180.1,295.5);
	this.instance_16.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(400).to({alpha:1},0).to({y:254},29).to({y:159.5},66).to({x:323.1,y:89.5},88).wait(1).to({alpha:0},0).wait(4));

	// LSA5
	this.instance_17 = new lib.LSA5();
	this.instance_17.setTransform(180.1,295.5);
	this.instance_17.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(387).to({alpha:1},0).to({y:159.5},95).to({x:323.1,y:229.5},88).wait(1).to({alpha:0},0).wait(17));

	// LSA5
	this.instance_18 = new lib.LSA5();
	this.instance_18.setTransform(180.1,295.5);
	this.instance_18.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(378).to({alpha:1},0).to({y:159.5},95).to({x:43.1,y:89.5},88).wait(1).to({alpha:0},0).wait(26));

	// LSA5
	this.instance_19 = new lib.LSA5();
	this.instance_19.setTransform(180.1,295.5);
	this.instance_19.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(367).to({alpha:1},0).to({y:291.2},3).to({y:159.5},92).to({x:33.1,y:229.5},88).wait(1).to({alpha:0},0).wait(37));

	// LSA4
	this.instance_20 = new lib.LSA3();
	this.instance_20.setTransform(38.3,226.2);
	this.instance_20.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(356).to({alpha:1},0).to({x:182.2,y:162.1},95).to({x:43,y:90.3},88).wait(1).to({alpha:0},0).wait(48));

	// LSA4
	this.instance_21 = new lib.LSA3();
	this.instance_21.setTransform(38.3,226.2);
	this.instance_21.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(346).to({alpha:1},0).to({x:182.2,y:162.1},95).to({x:323,y:90.3},88).wait(1).to({alpha:0},0).wait(58));

	// LSA4
	this.instance_22 = new lib.LSA3();
	this.instance_22.setTransform(38.3,226.2);
	this.instance_22.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(336).to({alpha:1},0).to({x:182.2,y:162.1},95).to({x:323,y:230.3},88).wait(1).to({alpha:0},0).wait(68));

	// LSA4
	this.instance_23 = new lib.LSA3();
	this.instance_23.setTransform(38.3,226.2);
	this.instance_23.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(326).to({alpha:1},0).to({x:182.2,y:162.1},95).to({x:184,y:301.3},88).wait(1).to({alpha:0},0).wait(78));

	// LSA3
	this.instance_24 = new lib.LSA4();
	this.instance_24.setTransform(326,230.3);
	this.instance_24.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(316).to({alpha:1},0).to({x:181.1,y:163.1},95).to({x:324.3,y:90.3},88).wait(1).to({alpha:0},0).wait(88));

	// LSA3
	this.instance_25 = new lib.LSA4();
	this.instance_25.setTransform(326,230.3);
	this.instance_25.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(306).to({alpha:1},0).to({x:181.1,y:163.1},95).to({x:44.3,y:90.3},88).wait(1).to({alpha:0},0).wait(98));

	// LSA3
	this.instance_26 = new lib.LSA4();
	this.instance_26.setTransform(326,230.3);
	this.instance_26.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(296).to({alpha:1},0).to({x:181.1,y:163.1},95).to({x:34.3,y:230.3},88).wait(1).to({alpha:0},0).wait(108));

	// LSA3
	this.instance_27 = new lib.LSA4();
	this.instance_27.setTransform(326,230.3);
	this.instance_27.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(286).to({alpha:1},0).to({x:323,y:228.9},2).to({x:181.1,y:163.1},93).to({x:182.3,y:301.3},88).wait(1).to({alpha:0},0).wait(118));

	// LSA2
	this.instance_28 = new lib.LSA2();
	this.instance_28.setTransform(326,80.3);
	this.instance_28.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(276).to({alpha:1},0).to({x:182,y:161.3},95).to({x:44,y:90.3},88).wait(1).to({alpha:0},0).wait(128));

	// LSA2
	this.instance_29 = new lib.LSA2();
	this.instance_29.setTransform(326,80.3);
	this.instance_29.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(266).to({alpha:1},0).to({x:182,y:161.3},95).to({x:34,y:230.3},88).wait(1).to({alpha:0},0).wait(138));

	// LSA2
	this.instance_30 = new lib.LSA2();
	this.instance_30.setTransform(326,80.3);
	this.instance_30.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(256).to({alpha:1},0).to({x:182,y:161.3},95).to({x:322,y:230.3},88).wait(1).to({alpha:0},0).wait(148));

	// LSA2
	this.instance_31 = new lib.LSA2();
	this.instance_31.setTransform(325,80.3);
	this.instance_31.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(246).to({alpha:1},0).to({x:182,y:161.3},95).to({y:301.3},88).wait(1).to({alpha:0},0).wait(158));

	// LSA1
	this.instance_32 = new lib.LSA1();
	this.instance_32.setTransform(36.3,85.3);
	this.instance_32.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(41).to({x:37.3,alpha:1},0).to({x:63,y:99.1},17).to({x:181.3,y:162.3},78).to({x:39.1,y:230.4},88).wait(1).to({alpha:0},0).wait(363));

	// LSA1
	this.instance_33 = new lib.LSA1();
	this.instance_33.setTransform(37.3,85.3);
	this.instance_33.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(31).to({alpha:1},0).to({x:181.3,y:162.3},95).to({x:179.1,y:301.4},88).wait(1).to({alpha:0},0).wait(373));

	// LSA1
	this.instance_34 = new lib.LSA1();
	this.instance_34.setTransform(37.3,85.3);
	this.instance_34.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(21).to({alpha:1},0).to({x:181.3,y:162.3},95).to({x:324.1,y:230.4},88).wait(1).to({alpha:0},0).wait(383));

	// LSA1
	this.instance_35 = new lib.LSA1();
	this.instance_35.setTransform(37.3,85.3);
	this.instance_35.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_35).wait(11).to({alpha:1},0).to({x:181.3,y:162.3},95).to({x:324.1,y:80.4},88).wait(1).to({alpha:0},0).wait(393));

	// Layer 2
	this.instance_36 = new lib.Anim01bg();
	this.instance_36.setTransform(0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_36}]}).wait(588));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.5,0.5,470,400);


(lib.slide_4 = function() {
	this.initialize();

	// Layer 1
	this.anim02 = new lib.animation02copy();
	this.anim02.setTransform(-0.4,-0.4);

	this.addChild(this.anim02);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,470,400);


(lib.slide_3 = function() {
	this.initialize();

	// Layer 1
	this.anim01 = new lib.anim01();
	this.anim01.setTransform(-0.4,-0.4);

	this.addChild(this.anim01);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,470,400);


(lib.Main = function() {
	this.initialize();

	// animation1
	this.slide03 = new lib.slide_3();
	this.slide03.setTransform(235.3,200.3,1,1,0,0,0,234.8,199.8);

	// animation2
	this.slide04 = new lib.slide_4();
	this.slide04.setTransform(235.3,200.3,1,1,0,0,0,234.8,199.8);

	this.addChild(this.slide04,this.slide03);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.5,0.5,470,400);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;