(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.classesmediaMediaObject = function() {
	this.initialize();

	// main
	this.instance = new lib.Main();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(5,22.3,430,329.8);


// symbols:
(lib.letterbg = function() {
	 this.initialize();
	this.instance = new DOMObject({type:"IMAGE",image:img.letter});

	
	this.addChild(this.instance);
}).prototype = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,366,236);


(lib.senderbg = function() {
	this.initialize(img.senderbg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,426,270);


(lib.stampbg = function() {
	 this.initialize();
	this.instance = new DOMObject({type:"IMAGE",image:img.stampbg});
	this.addChild(this.instance);
}).prototype = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,221,115);


(lib.tablebg = function() {
	this.initialize(img.tablebg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,316);


(lib.tablebg_1 = function() {
	this.initialize();

	// png
	this.instance = new lib.tablebg();
	this.instance.setTransform(0,0,0.717,0.714);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,430,225.6);


(lib.slide_2 = function() {
	this.initialize();

}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.ID_john = function() {
	this.initialize();

	// ID-john
	this.text = new DOMObject({type:"TEXT" , align:"left" ,compId:"ID_john", width:"50",  size:"8", expand:"down"}); 
	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,83.3,30.4);


(lib.ID_jane = function() {
	this.initialize();

	// ID_bodyText
	this.text = new DOMObject({type:"TEXT" , align:"left" ,compId:"ID_jane", width:"57",  size:"8", expand:"down"});	
	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,60,15.2);


(lib.ID_dear = function() {
	this.initialize();

	// ID_dear
	this.text = new DOMObject({type:"TEXT" , align:"left" ,compId:"ID_dear", width:"57",  size:"8", expand:"down"});	
	
	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,60,15.2);


(lib.ID_box9 = function() {
	this.initialize();

	// ID_box9
	this.text = new DOMObject({type:"TEXT" , align:"left" ,compId:"ID_box9", width:"300.6",  size:"8", expand:"down"});	

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300.6,15.2);


(lib.ID_box8 = function() {
	this.initialize();

	// ID_box8
	this.text = new DOMObject({type:"TEXT" , align:"left" ,compId:"ID_box8", width:"110.45",  size:"8", expand:"down"});	
	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,110.5,15.2);


(lib.ID_box7 = function() {
	this.initialize();

	// ID_box7
	this.text = new DOMObject({type:"TEXT" , align:"left" ,compId:"ID_box7", width:"60.05",  size:"8", expand:"down"});	
	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,60.1,15.2);


(lib.ID_box6 = function() {
	this.initialize();

	// ID_box6
	this.text = new DOMObject({type:"TEXT" , align:"left" ,compId:"ID_box6", width:"49.10",  size:"8", expand:"down"});	
	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,49.1,28.3);


(lib.ID_box5 = function() {
	this.initialize();

	// ID_box5
	this.text = new DOMObject({type:"TEXT" , align:"left" ,compId:"ID_box5", width:"71.5",  size:"8", expand:"down"});	
	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,71.5,15.2);


(lib.ID_box4 = function() {
	this.initialize();

	// ID_box4
	this.text = new DOMObject({type:"TEXT" , align:"left" ,compId:"ID_box4", width:"57",  size:"8", expand:"down"});	
	this.text.setTransform(2,0,0.999,1);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,60,15.2);


(lib.ID_box3 = function() {
	this.initialize();

	// ID_box3
	this.text = new DOMObject({type:"TEXT" , align:"left" ,compId:"ID_box3", width:"57",  size:"8", expand:"down"});	
	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,60.1,15.2);


(lib.ID_box2 = function() {
	this.initialize();

	// ID_box2
	this.text = new DOMObject({type:"TEXT" , align:"left" ,compId:"ID_box2", width:"57",  size:"8", expand:"down"});	
	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,60.1,15.2);


(lib.ID_box1 = function() {
	this.initialize();

	// ID_box1
	this.text = new DOMObject({type:"TEXT" , align:"left" ,compId:"ID_box1", width:"57",  size:"8", expand:"down"});	
	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,60.1,15.2);


(lib.ID_bodyText = function() {
	this.initialize();

	// ID_bodyText
	this.text = new DOMObject({type:"TEXT" , align:"left" ,compId:"ID_bodyText", width:"71.9",  size:"8", expand:"down"});	
	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,71.9,28.3);


(lib.ID_address2 = function() {
	this.initialize();

	// ID_address2
	this.text = new DOMObject({type:"TEXT" , align:"left" ,compId:"ID_address2", width:"57",  size:"8", expand:"down"});	
	
	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-20,0,60,28.3);


(lib.ID_address1 = function() {
	this.initialize();

	// ID_address1
	this.text = new DOMObject({type:"TEXT" , align:"left" ,compId:"ID_address1", width:"57",  size:"8", expand:"down"});	
	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,60,28.3);


(lib.Symbol2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFADD").s().p("Az7HMITsuXIULOXg");
	this.shape.setTransform(127.7,46.1);


	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,255.3,92.2);


(lib.stamp = function() {
	this.initialize();

	// png
	this.instance = new lib.stampbg();
	this.instance.setTransform(0,0,0.241,0.239);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,53.2,27.5);


(lib.new_Envelope_Graphic = function() {
	this.initialize();

	// ID_sender
	this.text = new DOMObject({type:"TEXT" , align:"left" ,compId:"ID_sender", width:"219.9",expand:"right"});
	this.text.setTransform(20.4,7.5);
	this.text_1 = new DOMObject({type:"TEXT" , align:"left" ,compId:"ID_recipient", width:"112.8",expand:"right"});
	this.text_1.setTransform(100.2,100.2);		
	

	// png
	this.instance = new lib.senderbg();
	this.instance.setTransform(0,0,0.72,0.721);

	this.addChild(this.instance,this.text,this.text_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,306.8,194.6);


(lib.letter = function() {
	this.initialize();

	// ID_letter
	this.text = new DOMObject({type:"TEXT" , align:"left" ,compId:"ID_letter", width:"219.9",expand:"down",color:"#0D658B"});	
	this.text.setTransform(23.6,28.1);


	// png
	this.instance = new lib.letterbg();
	this.instance.setTransform(0,0,0.721,0.72);


	this.addChild(this.instance,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,263.9,170);


(lib.highlight6 = function() {
	this.initialize();

	// ID_john
	this.text = new DOMObject({type:"TEXT" , align:"center" ,compId:"ID_john", width:"49.3",size:"6",expand:"down",class:"orangeCallOut"});	
	this.text.setTransform(-8,-16.1);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-8,-16.1,49.3,44.6);


(lib.highlight5 = function() {
	this.initialize();

	// ID_bodyText
	this.text = new DOMObject({type:"TEXT" , align:"left" ,compId:"ID_bodyText", width:"118",size:"6",expand:"down",class:"orangeCallOut"});	
	this.text.setTransform(0,-1.7);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-1.7,118,16.2);


(lib.highlight4 = function() {
	this.initialize();

	// ID_jane
	this.text = new DOMObject({type:"TEXT" , align:"center" ,compId:"ID_jane", width:"83.25",size:"6",expand:"down",class:"orangeCallOut"});	
	this.text.setTransform(-8.9,-7.1);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-8.9,-7.1,83.3,30.4);


(lib.highlight3 = function() {
	this.initialize();

	// ID_dear
	this.text = new DOMObject({type:"TEXT" , align:"center" ,compId:"ID_dear", width:"59.65",size:"6",expand:"down",class:"orangeCallOut"});	
	this.text.setTransform(0,-8.9);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-8.9,59.7,30.4);


(lib.highlight2 = function() {
	this.initialize();

	// ID_address1
	this.text = new DOMObject({type:"TEXT" , align:"left" ,compId:"ID_address1", width:"69.1",size:"5.5",expand:"down",class:"orangeCallOut"});	
	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,69.1,30.4);


(lib.highlight = function() {
	this.initialize();

	// ID_address2
	this.text = new DOMObject({type:"TEXT" , align:"left" ,compId:"ID_address2", width:"93.45",size:"5.5",expand:"Right",class:"orangeCallOut"});	
	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,83.3,30.4);


(lib.opening = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Symbol2();
	this.instance.setTransform(0,0,1,1,0,0,0,127.7,46.1);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,3,5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(213,213,213,0.502)").ss(1,1,1).p("AT8AAMgn3AAA");
	this.shape.setTransform(0,46);

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-127.6,-46.1,255.3,92.2);


(lib.animation = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// ID_john
	this.instance = new lib.highlight6();
	this.instance.setTransform(278.3,95.1,1,1,0,0,0,19.8,9.3);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(866).to({alpha:1},0).wait(5).to({alpha:0},0).wait(5).to({alpha:1},0).wait(5).to({alpha:0},0).wait(5).to({alpha:1},0).wait(5).to({alpha:0},0).wait(5).to({alpha:1},0).wait(15).to({scaleX:3,scaleY:3,x:204.6,y:232.9},15,cjs.Ease.get(1)).wait(25).to({scaleX:0.99,scaleY:0.99,x:336.7,y:254.5},14,cjs.Ease.get(1)).wait(1).to({scaleX:1,scaleY:1,x:278.3,y:95.1,alpha:0},0).wait(129));

	// ID_bodyText
	this.instance_1 = new lib.highlight5();
	this.instance_1.setTransform(316.8,53.5,1,1,0,0,0,59,4.7);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(751).to({alpha:1},0).wait(5).to({alpha:0},0).wait(5).to({alpha:1},0).wait(5).to({alpha:0},0).wait(5).to({alpha:1},0).wait(5).to({alpha:0},0).wait(5).to({alpha:1},0).wait(14).to({scaleX:3,scaleY:3,x:238.4,y:184.3},16,cjs.Ease.get(1)).wait(25).to({scaleX:0.5,scaleY:0.5,x:280.7,y:250.8},15,cjs.Ease.get(1)).wait(1).to({scaleX:1,scaleY:1,x:316.8,y:53.5,alpha:0},0).wait(243));

	// ID_jane
	this.instance_2 = new lib.highlight4();
	this.instance_2.setTransform(298.8,40.7,1,1,0,0,0,19.8,9.3);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(635).to({alpha:1},0).wait(5).to({alpha:0},0).wait(5).to({alpha:1},0).wait(5).to({alpha:0},0).wait(5).to({alpha:1},0).wait(5).to({alpha:0},0).wait(5).to({alpha:1},0).wait(16).to({scaleX:3,scaleY:3,x:213.3,y:227.1},16,cjs.Ease.get(1)).wait(24).to({scaleX:1.17,scaleY:1.17,x:216.9,y:255.9},15,cjs.Ease.get(1)).wait(1).to({scaleX:1,scaleY:1,x:298.8,y:40.7,alpha:0},0).wait(358));

	// ID_dear
	this.instance_3 = new lib.highlight3();
	this.instance_3.setTransform(293.8,58.8,1,1,0,0,0,40.3,26.4);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(521).to({alpha:1},0).wait(5).to({alpha:0},0).wait(5).to({alpha:1},0).wait(5).to({alpha:0},0).wait(5).to({alpha:1},0).wait(5).to({alpha:0},0).wait(5).to({alpha:1},0).wait(15).to({scaleX:3,scaleY:3,x:250.6,y:280.3},15,cjs.Ease.get(1)).wait(25).to({scaleX:0.9,scaleY:0.9,x:167.7,y:273},14).wait(1).to({alpha:0},0).wait(474));

	// ID_address2
	this.instance_4 = new lib.highlight();
	this.instance_4.setTransform(129.6,78.6,1.123,1,0,0,0,37.8,17.3);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(290).to({alpha:1},0).wait(5).to({alpha:0},0).wait(5).to({alpha:1},0).wait(5).to({alpha:0},0).wait(5).to({alpha:1},0).wait(5).to({alpha:0},0).wait(5).to({alpha:1},0).wait(14).to({scaleX:3,scaleY:3,x:215,y:249.5},17,cjs.Ease.get(1)).wait(25).to({regX:37.9,scaleX:0.55,scaleY:0.78,x:31.5,y:260.3},14,cjs.Ease.get(1)).wait(1).to({regX:37.8,scaleX:1.12,scaleY:1,x:129.6,y:78.6,alpha:0},0).wait(704));

	// ID_address1
	this.instance_5 = new lib.highlight2();
	this.instance_5.setTransform(103.4,26.7,1,1,0,0,0,34.6,4.4);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(406).to({alpha:1},0).wait(5).to({alpha:0},0).wait(5).to({alpha:1},0).wait(5).to({alpha:0},0).wait(5).to({alpha:1},0).wait(5).to({alpha:0},0).wait(5).to({alpha:1},0).wait(13).to({alpha:0},0).wait(2).to({alpha:1},0).to({scaleX:3,scaleY:3,x:217.7,y:217},14,cjs.Ease.get(1)).wait(26).to({scaleX:0.62,scaleY:0.62,x:95.2,y:251.2},15).wait(1).to({scaleX:1,scaleY:1,x:103.4,y:26.7,alpha:0},0).wait(588));

	// stamp
	this.instance_6 = new lib.stamp();
	this.instance_6.setTransform(220,37,0.471,0.476,0,0,0,53.2,13.8);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1026).to({scaleX:2.97,scaleY:3,x:297.9,y:226.9,alpha:1},15).wait(25).to({regX:53.1,regY:13.9,scaleX:0.9,scaleY:0.91,x:427.4,y:250.6},15,cjs.Ease.get(1)).wait(14));

	// stampshape
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFADD").s().p("AjABwIAAjfIGBAAIAADfg");
	this.shape.setTransform(181.5,36.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},981).to({state:[]},5).to({state:[{t:this.shape}]},5).to({state:[]},5).to({state:[{t:this.shape}]},5).to({state:[]},5).to({state:[{t:this.shape}]},5).to({state:[]},5).wait(79));

	// letter above
	this.instance_7 = new lib.letter();
	this.instance_7.setTransform(71.5,124.8,1.207,1.207);
	this.instance_7.alpha = 0;
	this.instance_7.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,3,5);


	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(65).to({scaleX:1,scaleY:1,x:92.5,y:96.7,alpha:1},0).to({y:10.3},20,cjs.Ease.get(1)).wait(44).to({scaleX:1.21,scaleY:1.21,x:71.5,y:124.8},21,cjs.Ease.get(1)).wait(51).to({scaleX:0.54,scaleY:0.54,x:245.6,y:7.4},30,cjs.Ease.get(1)).wait(864));

	// ID_sender
	this.instance_8 = new lib.new_Envelope_Graphic();
	this.instance_8.setTransform(154.1,134.4,1,1,0,0,0,87,50.5);
	this.instance_8.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,3,5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(10).to({regX:0,regY:0,x:67.1,y:93.9},0).to({x:66.6,y:158},24,cjs.Ease.get(1)).wait(80).to({scaleX:0.47,scaleY:0.47,y:6.4},36,cjs.Ease.get(1)).wait(945));

	// envelope flap
	this.instance_9 = new lib.opening();
	this.instance_9.setTransform(220.3,159.6,1.2,0.011,0,0,0,0,45.5);
	this.instance_9.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(34).to({regX:1.4,x:222,alpha:1},0).to({regX:0,regY:46,scaleY:1.2,x:220.3},24,cjs.Ease.get(1)).wait(32).to({regY:45.5,scaleY:0.01},18,cjs.Ease.get(1)).wait(6).to({alpha:0},0).wait(981));

	// table text 6
	this.instance_10 = new lib.ID_john();
	this.instance_10.setTransform(351.1,275,1,1,0,0,0,24.8,43.1);
	this.instance_10.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(966).to({alpha:1},0).wait(129));

	// table text 5
	this.instance_11 = new lib.ID_bodyText();
	this.instance_11.setTransform(282.4,275,1,1,0,0,0,36,43.8);
	this.instance_11.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(852).to({alpha:1},0).wait(243));

	// table text 4
	this.instance_12 = new lib.ID_jane();
	this.instance_12.setTransform(219,275,1,1,0,0,0,30,43.8);
	this.instance_12.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(737).to({alpha:1},0).wait(358));

	// table text 3
	this.instance_13 = new lib.ID_dear();
	this.instance_13.setTransform(161.6,275,1,1,0,0,0,30,43.1);
	this.instance_13.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(621).to({alpha:1},0).wait(474));

	// table text 2
	this.instance_14 = new lib.ID_address1();
	this.instance_14.setTransform(100.2,275,1,1,0,0,0,30,43.8);
	this.instance_14.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(507).to({alpha:1},0).wait(588));

	// table text 1
	this.instance_15 = new lib.ID_address2();
	this.instance_15.setTransform(40,275,1,1,0,0,0,30,43.1);
	this.instance_15.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(391).to({alpha:1},0).wait(704));

	// cover - white
	
	// ID_box1
	this.instance_16 = new lib.ID_box1();
	this.instance_16.setTransform(38.2,137.4,1,1,0,0,0,30,32);
	this.instance_16.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(238).to({alpha:1},0).wait(857));

	// ID_box2
	this.instance_17 = new lib.ID_box2();
	this.instance_17.setTransform(99.6,137.4,1,1,0,0,0,30,32);
	this.instance_17.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(238).to({alpha:1},0).wait(857));

	// ID_box3
	this.instance_18 = new lib.ID_box3();
	this.instance_18.setTransform(161.1,137.4,1,1,0,0,0,30,32);
	this.instance_18.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(238).to({alpha:1},0).wait(857));

	// ID_box4
	this.instance_19 = new lib.ID_box4();
	this.instance_19.setTransform(217.5,137.4,1,1,0,0,0,30,32);
	this.instance_19.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(238).to({alpha:1},0).wait(857));

	// ID_box5
	this.instance_20 = new lib.ID_box5();
	this.instance_20.setTransform(285.4,137.4,1,1,0,0,0,35.5,32);
	this.instance_20.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(238).to({alpha:1},0).wait(857));

	// ID_box6
	this.instance_21 = new lib.ID_box6();
	this.instance_21.setTransform(348.9,137.4,1,1,0,0,0,24.6,32);
	this.instance_21.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(238).to({alpha:1},0).wait(857));

	// ID_box7
	this.instance_22 = new lib.ID_box7();
	this.instance_22.setTransform(405,137.4,1,1,0,0,0,30,32);
	this.instance_22.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(238).to({alpha:1},0).wait(857));

	// ID_box8
	this.instance_23 = new lib.ID_box8();
	this.instance_23.setTransform(64.6,213,1,1,0,0,0,55.2,6.5);
	this.instance_23.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(238).to({alpha:1},0).wait(857));

	// ID_box9
	this.instance_24 = new lib.ID_box9();
	this.instance_24.setTransform(283,213,1,1,0,0,0,150.3,6.5);
	this.instance_24.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(238).to({alpha:1},0).wait(857));

	// table bg
	this.instance_25 = new lib.tablebg_1();
	this.instance_25.setTransform(219.9,215.2,1,1,0,0,0,214.9,112.8);
	this.instance_25.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(238).to({alpha:1},0).wait(857));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5,22.3,430,329.8);


(lib.slide_1 = function() {
	this.initialize();

	// animation 1
	this.anim01 = new lib.animation();
	this.anim01.setTransform(327.6,246.1,1,1,0,0,0,327.6,246.1);

	this.addChild(this.anim01);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(5,22.3,430,329.8);


(lib.Main = function() {
	this.initialize();

	// slide1
	this.slide01 = new lib.slide_1();
	this.slide01.setTransform(202.5,126.5,1,1,0,0,0,202.5,126.5);

	this.addChild(this.slide01);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(5,22.3,430,329.8);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;