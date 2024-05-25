(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.classesmediaMediaObject = function() {
	this.initialize();

	// main
	this.instance = new lib.Main();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,470.3,400);


// symbols:
(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,783,667);


(lib.ID_txt13 = function() {
	this.initialize();

	// Layer 2
	
	
	this.text = new DOMObject({type:"TEXT" , align:"center" ,compId:"ID_txt13",  color:"white", size:"11px", width:"28", expand:"up+down"}); 
    this.text.setTransform(1,1);
	
	
	

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,24.9,16.2);


(lib.ID_txt12 = function() {
	this.initialize();

	// Layer 2

	
	this.text_1 = new DOMObject({type:"TEXT" , align:"center" ,compId:"ID_txt12",  color:"white", size:"11px", width:"28", expand:"up+down"}); 
    this.text_1.setTransform(1,1);
	

	this.addChild(this.text_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,24.9,16.2);


(lib.ID_txt11 = function() {
	this.initialize();

	// Layer 2

	
	this.text_2 = new DOMObject({type:"TEXT" , align:"center" ,compId:"ID_txt11",  color:"white", size:"11px", width:"28", expand:"up+down"}); 
    this.text_2.setTransform(1,1);
	
	
	

	this.addChild(this.text_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,24.9,16.2);


(lib.ID_txt10 = function() {
	this.initialize();

	// Layer 2
	this.text_3 = new DOMObject({type:"TEXT" , align:"center" ,compId:"ID_txt10",  color:"white", size:"11px", width:"28", expand:"up+down"}); 
    this.text_3.setTransform(1,1);
	
	

	this.addChild(this.text_3);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,24.9,16.2);


(lib.Frameclip = function() {
	this.initialize();

	// Layer 2
this.text_4 = new DOMObject({type:"TEXT", bgColor:"#CB6D25",  border:"2", padding:"5" , align:"center" ,compId:"ID_txt08", color:"#ffffff", size:"11", width:"50", expand:"left+right" }); 
this.text_4.setTransform(-26,-2.7);
	

	this.addChild(this.text_4);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-34.9,-4.9,70.6,16.2);


(lib.bubble7 = function() {
	this.initialize();

	// Layer 2

	
this.text_5 = new DOMObject({ type:"BUBBLE", compId:"ID_txt07", x:"0", y:"0", width:"80", height:"60", align:"left", tailPosition:"5", tailFlip:"0" }); 
this.text_5.setTransform(2,-5);	
	
	
	

	this.addChild(this.text_5);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(1,0,96.2,16.2);


(lib.bubble6 = function() {
	this.initialize();

	// Layer 2
	
this.text_6 = new DOMObject({ type:"BUBBLE", compId:"ID_txt06", x:"0", y:"0", width:"220", height:"60", align:"left", tailPosition:"9", tailFlip:"0" }); 
this.text_6.setTransform(2,-5);	
	
	

	this.addChild(this.text_6);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(14,11,158.2,16.2);


(lib.bubble5 = function() {
	this.initialize();


	
	
this.text_7 = new DOMObject({ type:"BUBBLE", compId:"ID_txt05", x:"0", y:"0", width:"80", height:"60", align:"left", tailPosition:"9", tailFlip:"0" }); 
this.text_7.setTransform(2,-5);
	
	
	

	this.addChild(this.text_7);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2.3,0,129,16.2);


(lib.bubble4 = function() {
	this.initialize();

	// Layer 2

	
	
this.text_8 = new DOMObject({ type:"BUBBLE", compId:"ID_txt04", x:"0", y:"0", width:"160", height:"60", align:"left", tailPosition:"11", tailFlip:"1" }); 
this.text_8.setTransform(2,3);
	

	this.addChild(this.text_8);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(5,0,158.2,16.2);


(lib.bubble3 = function() {
	this.initialize();

	// Layer 2

	
		
this.text_9 = new DOMObject({ type:"BUBBLE", compId:"ID_txt03", x:"0", y:"0", width:"80", height:"60", align:"left", tailPosition:"11", tailFlip:"1" }); 
this.text_9.setTransform(2,-5);
	
	
	

	this.addChild(this.text_9);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(5,0,83.1,16.2);


(lib.bubble2 = function() {
	this.initialize();

	// Layer 2

	
	
this.text_10 = new DOMObject({ type:"BUBBLE", compId:"ID_txt02", x:"0", y:"0", width:"215", height:"60", align:"left", tailPosition:"3", tailFlip:"0" }); 
this.text_10.setTransform(2,-5);
	
	

	this.addChild(this.text_10);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,215,16.2);


(lib.bubble1 = function() {
	this.initialize();

	// Layer 2
this.text_11 = new DOMObject({ type:"BUBBLE", compId:"ID_txt01", x:"0", y:"0", width:"160", height:"80", align:"left", tailPosition:"5", tailFlip:"1" }); 
this.text_11.setTransform(2,2);
	
	
	

	this.addChild(this.text_11);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(5,0,158.2,16.2);


(lib.animation01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// Layer 2
	this.instance = new lib.Frameclip();
	this.instance.setTransform(136.7,203.4);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(54).to({alpha:1},0).wait(40).wait(1).to({regX:0.4,regY:3.8,x:137.9,y:209.8},0).wait(1).to({x:139,y:212.3},0).wait(1).to({x:140.3,y:214.8},0).wait(1).to({x:141.8,y:217.1},0).wait(1).to({x:143.5,y:219.3},0).wait(1).to({x:145.3,y:221.3},0).wait(1).to({x:147.3,y:223.3},0).wait(1).to({x:149.3,y:225.1},0).wait(1).to({x:151.5,y:226.9},0).wait(1).to({x:153.7,y:228.5},0).wait(1).to({x:156,y:230.1},0).wait(1).to({x:158.3,y:231.6},0).wait(1).to({x:160.7,y:233},0).wait(1).to({x:163.1,y:234.3},0).wait(1).to({x:165.6,y:235.6},0).wait(1).to({x:168.1,y:236.8},0).wait(1).to({x:170.6,y:237.9},0).wait(1).to({x:173.1,y:239.1},0).wait(1).to({x:175.7,y:240.1},0).wait(1).to({x:178.2,y:241.1},0).wait(1).to({x:180.8,y:242.1},0).wait(1).to({x:183.4,y:243},0).wait(1).to({x:186,y:243.9},0).wait(1).to({x:188.7,y:244.8},0).wait(1).to({x:191.3,y:245.6},0).wait(1).to({x:194,y:246.4},0).wait(1).to({x:196.6,y:247.2},0).wait(1).to({x:199.3,y:248},0).wait(1).to({x:201.9,y:248.7},0).wait(1).to({x:204.6,y:249.4},0).wait(1).to({x:207.3,y:250.1},0).wait(1).to({x:210,y:250.7},0).wait(1).to({x:212.7,y:251.4},0).wait(1).to({x:215.4,y:252},0).wait(1).to({x:218.1,y:252.6},0).wait(1).to({x:220.8,y:253.2},0).wait(1).to({x:223.5,y:253.7},0).wait(1).to({x:226.2,y:254.3},0).wait(1).to({x:228.9,y:254.8},0).wait(1).to({x:231.7,y:255.3},0).wait(1).to({regX:0,regY:0,x:231.3,y:251.5},0).wait(85).wait(1).to({regX:0.4,regY:3.8,x:234.7,y:255.6},0).wait(1).to({x:237.8,y:255.8},0).wait(1).to({x:240.9,y:256},0).wait(1).to({x:244,y:256.1},0).wait(1).to({x:247.1},0).wait(1).to({x:250.2},0).wait(1).to({x:253.3,y:256},0).wait(1).to({x:256.4,y:255.9},0).wait(1).to({x:259.5,y:255.7},0).wait(1).to({x:262.5,y:255.4},0).wait(1).to({x:265.6,y:255},0).wait(1).to({x:268.7,y:254.5},0).wait(1).to({x:271.7,y:253.9},0).wait(1).to({x:274.7,y:253.3},0).wait(1).to({x:277.7,y:252.6},0).wait(1).to({x:280.7,y:251.8},0).wait(1).to({x:283.7,y:250.8},0).wait(1).to({x:286.6,y:249.8},0).wait(1).to({x:289.5,y:248.7},0).wait(1).to({x:292.3,y:247.5},0).wait(1).to({x:295.1,y:246.1},0).wait(1).to({x:297.8,y:244.7},0).wait(1).to({x:300.5,y:243.1},0).wait(1).to({x:303.1,y:241.4},0).wait(1).to({x:305.6,y:239.6},0).wait(1).to({x:308.1,y:237.7},0).wait(1).to({x:310.4,y:235.7},0).wait(1).to({x:312.6,y:233.5},0).wait(1).to({x:314.7,y:231.2},0).wait(1).to({x:316.7,y:228.9},0).wait(1).to({x:318.5,y:226.4},0).wait(1).to({x:320.2,y:223.8},0).wait(1).to({x:321.7,y:221.1},0).wait(1).to({x:323,y:218.3},0).wait(1).to({x:324.2,y:215.4},0).wait(1).to({x:325.1,y:212.4},0).wait(1).to({x:325.8,y:209.4},0).wait(1).to({x:326.3,y:206.4},0).wait(1).to({x:326.6,y:203.3},0).wait(1).to({regX:0,regY:0,x:326.2,y:199.5},0).wait(85).wait(1).to({regX:0.4,regY:3.8,x:326.4,y:199.8},0).wait(1).to({x:326.1,y:196.3},0).wait(1).to({x:325.8,y:192.9},0).wait(1).to({x:325.3,y:189.4},0).wait(1).to({x:324.9,y:186},0).wait(1).to({x:324.3,y:182.5},0).wait(1).to({x:323.6,y:179.1},0).wait(1).to({x:322.8,y:175.7},0).wait(1).to({x:322,y:172.3},0).wait(1).to({x:321,y:169},0).wait(1).to({x:319.9,y:165.7},0).wait(1).to({x:318.6,y:162.5},0).wait(1).to({x:317.3,y:159.3},0).wait(1).to({x:315.8,y:156.1},0).wait(1).to({x:314.1,y:153.1},0).wait(1).to({x:312.3,y:150.1},0).wait(1).to({x:310.3,y:147.2},0).wait(1).to({x:308.1,y:144.5},0).wait(1).to({x:305.8,y:141.9},0).wait(1).to({x:303.3,y:139.4},0).wait(1).to({x:300.7,y:137.1},0).wait(1).to({x:298,y:135},0).wait(1).to({x:295.1,y:133},0).wait(1).to({x:292.1,y:131.2},0).wait(1).to({x:289.1,y:129.6},0).wait(1).to({x:285.9,y:128.1},0).wait(1).to({x:282.7,y:126.8},0).wait(1).to({x:279.4,y:125.7},0).wait(1).to({x:276.1,y:124.7},0).wait(1).to({x:272.7,y:123.8},0).wait(1).to({x:269.3,y:123},0).wait(1).to({x:265.9,y:122.4},0).wait(1).to({x:262.4,y:121.8},0).wait(1).to({x:259,y:121.4},0).wait(1).to({x:255.5,y:121},0).wait(1).to({x:252.1,y:120.7},0).wait(1).to({x:248.6,y:120.5},0).wait(1).to({x:245.1,y:120.4},0).wait(1).to({x:241.6,y:120.3},0).wait(1).to({regX:0,regY:0,x:229.2,y:116.5},0).wait(85).to({x:229},0).wait(20).to({x:229.7,y:116.2,alpha:0},0).wait(8));

	// text
	this.instance_1 = new lib.ID_txt12();
	this.instance_1.setTransform(326,186.7,1,1,0,0,0,14.2,8.5);

	this.instance_2 = new lib.ID_txt13();
	this.instance_2.setTransform(230,100,1,1,0,0,0,14.2,8.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(498));

	// ID_txt11
	this.instance_3 = new lib.ID_txt11();
	this.instance_3.setTransform(230,276.1,1,1,0,0,0,14.2,8.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).wait(498));

	// ID_txt10
	this.instance_4 = new lib.ID_txt10();
	this.instance_4.setTransform(136,186.7,1,1,0,0,0,14.2,8.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4}]}).wait(498));

	// text bubble 7
	this.instance_5 = new lib.bubble7();
	this.instance_5.setTransform(198.5,80.4,1,1,0,0,0,40,40);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(435).to({alpha:1},0).wait(63));

	// text bubble 6
	this.instance_6 = new lib.bubble6();
	this.instance_6.setTransform(357.1,95.2,1,1,0,0,0,110,40);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(395).to({alpha:1},0).wait(103));

	// text bubble 5
	this.instance_7 = new lib.bubble5();
	this.instance_7.setTransform(382.1,175.7,1,1,0,0,0,40,40);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(310).to({alpha:1},0).wait(188));

	// text bubble 4
	this.instance_8 = new lib.bubble4();
	this.instance_8.setTransform(387.1,254.7,1,1,0,0,0,80,40);
	this.instance_8.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(270).to({alpha:1},0).wait(228));

	// text bubble 3
	this.instance_9 = new lib.bubble3();
	this.instance_9.setTransform(255.4,333.9,1,1,0,0,0,40,40);
	this.instance_9.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(185).to({alpha:1},0).wait(313));

	// text bubble 2
	this.instance_10 = new lib.bubble2();
	this.instance_10.setTransform(110.8,289.6,1,1,0,0,0,107.5,40);
	this.instance_10.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(145).to({alpha:1},0).wait(353));

	// text bubble 1
	this.instance_11 = new lib.bubble1();
	this.instance_11.setTransform(83.3,133.8,1,1,0,0,0,80,40);
	this.instance_11.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(10).to({alpha:1},0).wait(488));

	// Bg
	this.instance_12 = new lib.bg();
	this.instance_12.setTransform(0,0,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12}]}).wait(498));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,470.3,400);


(lib.Main = function() {
	this.initialize();

	// animation
	this.anim01 = new lib.animation01();

	this.addChild(this.anim01);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,470.3,400);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;