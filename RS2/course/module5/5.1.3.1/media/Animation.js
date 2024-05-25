(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.classesmediaMediaObject = function() {
	this.initialize();

	// main
	this.instance = new lib.Main();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,470.9,400);


// symbols:
(lib.envelope_closed_static = function() {
	this.initialize(img.envelope_closed_static);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,123,79);

(lib.arrow = function() {
	this.initialize(img.arrow);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,65,28);


(lib.media_5131 = function() {
	this.initialize(img.media_5131);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,653,556);


(lib.yel_gre_text = function() {
	
	this.initialize();
		// Layer 1
	this.instance_2 = new lib.arrow_purple();
	this.instance_2.setTransform(0,-10);
	

	// Layer 2

	this.text = new DOMObject({type:"TEXT",compId:"ID_txt01",width:"64",expand:"down",align:"center",class:"greenCallOut"}); 
	this.text.setTransform(-90,-1.9);

	this.text_1 = new DOMObject({type:"TEXT",compId:"ID_txt02",width:"64",expand:"down",align:"center",class:"yellowCallOutLocal"}); 
	this.text_1.setTransform(-10,-1.9);

	this.addChild(this.text_1,this.text,this.instance_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-43.8,-21,116.5,35.6);


(lib.textbox9 = function() {
	this.initialize();

	// Layer 2
 
	
	 this.text_2 = new TextBoxComp({bodyId:"ID_tbox09",x:"28.5",y:"0",width:120,height:200,divId:"textBoxDiv_9"});

 
	this.text_2.setTransform(-60,-90);

	this.addChild(this.text_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-34.8,-7.5,69.7,15.2);


(lib.textbox8 = function() {
	this.initialize();

	// Layer 1
 
 
	
	this.text_3 = new TextBoxComp({bodyId:"ID_tbox08",x:"28.5",y:"0",width:120,height:200,divId:"textBoxDiv_8"});
 
	this.text_3.setTransform(-60,-90);

	this.addChild(this.text_3);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-24.8,-7.5,49.7,15.2);


(lib.textbox7 = function() {
	this.initialize();

	// Layer 1

	this.text_4 = new TextBoxComp({bodyId:"ID_tbox07",x:"28.5",y:"0",width:120,height:200,divId:"textBoxDiv_7"});
 
	this.text_4.setTransform(-60,-90);

	this.addChild(this.text_4);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-24.8,-7.5,49.7,15.2);


(lib.textbox6 = function() {
	this.initialize();

	// Layer 1
	
	this.text_5 = new TextBoxComp({bodyId:"ID_tbox06",x:"28.5",y:"0",width:120,height:200,divId:"textBoxDiv_6"});	
	this.text_5.setTransform(-60,-90);

	this.addChild(this.text_5);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-34.8,-7.5,69.7,15.2);


(lib.textbox5 = function() {
	this.initialize();

	// Layer 2
	this.text_6 = new TextBoxComp({bodyId:"ID_tbox05",x:"28.5",y:"0",width:120,height:200,divId:"textBoxDiv_5"});

	this.text_6.setTransform(-60,-90);

	this.addChild(this.text_6);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-36.2,-7.5,72.5,15.2);


(lib.textbox4 = function() {
	this.initialize();

	// Layer 1
	this.text_7 = new TextBoxComp({bodyId:"ID_tbox04",x:"28.5",y:"0",width:120,height:200,divId:"textBoxDiv_4"});
	this.text_7.setTransform(-60,-90);

	this.addChild(this.text_7);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-36.5,-7.5,73.1,15.2);


(lib.textbox3 = function() {
	this.initialize();

	// Layer 1
	this.text_8 = new TextBoxComp({bodyId:"ID_tbox03",x:"28.5",y:"0",width:120,height:200,divId:"textBoxDiv_3"});
	this.text_8.setTransform(-60,-90);

	this.addChild(this.text_8);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-24.8,-7.5,49.7,15.2);


(lib.textbox2 = function() {
	this.initialize();

	// Layer 1

	this.text_9 = new TextBoxComp({bodyId:"ID_tbox02",x:"28.5",y:"0",width:120,height:200,divId:"textBoxDiv_2"});
 
	this.text_9.setTransform(-60,-90);

	this.addChild(this.text_9);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-24.8,-7.5,49.7,15.2);


(lib.textbox1 = function() {
	this.initialize();

	// Layer 1
	this.text_10 = new TextBoxComp({bodyId:"ID_tbox01",x:"28.5",y:"0",width:120,height:200,divId:"textBoxDiv_1"});
	this.text_10.setTransform(-60,-90);

	this.addChild(this.text_10);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-24.8,-7.5,49.7,15.2);


(lib.statictext = function() {
	this.initialize();

	// Layer 1
	this.text_11 = new cjs.Text("VLAN 30", "10px Arial", "#393536");
	this.text_11.textAlign = "center";
	this.text_11.lineHeight = 12;
	this.text_11.setTransform(11.7,24.9);

	this.text_12 = new cjs.Text("VLAN 10", "10px Arial", "#393536");
	this.text_12.textAlign = "center";
	this.text_12.lineHeight = 12;
	this.text_12.setTransform(-107.3,24.9);

	this.text_13 = new cjs.Text("G0/0", "10px Arial", "#393536");
	this.text_13.textAlign = "center";
	this.text_13.lineHeight = 12;
	this.text_13.setTransform(118,-125);

	this.text_14 = new cjs.Text("F0/11", "10px Arial", "#393536");
	this.text_14.textAlign = "center";
	this.text_14.lineHeight = 12;
	this.text_14.setTransform(-83.6,11.5);

	this.text_15 = new cjs.Text("172.17.10.21", "10px Arial", "#393536");
	this.text_15.textAlign = "center";
	this.text_15.lineHeight = 12;
	this.text_15.setTransform(-101.7,118);

	this.text_16 = new cjs.Text("F0/6", "10px Arial", "#393536");
	this.text_16.textAlign = "center";
	this.text_16.lineHeight = 12;
	this.text_16.setTransform(-5,11.5);

	this.text_17 = new cjs.Text("172.17.30.23", "10px Arial", "#393536");
	this.text_17.textAlign = "center";
	this.text_17.lineHeight = 12;
	this.text_17.setTransform(23.5,118);

	this.addChild(this.text_17,this.text_16,this.text_15,this.text_14,this.text_13,this.text_12,this.text_11);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-130.9,-129.9,262,260.1);


(lib.Routerop = function() {
	this.initialize();

	// Layer 1
	//this.router = new RouterComp({width:331,height:63,x:-12});
	//this.addChild(this.router);
	
	this.instance = new DOMObject({type:"ROUTER",width:335,height:63,textId:"RouterText",x:-75,y:0,size:"10"});
	this.addChild(this.instance);

}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-27.7,-7.6,55.5,15.4);


(lib.lt_1 = function() {
	this.initialize();

	// ID_txt03
 
	this.text_19 = new DOMObject({type:"TEXT",compId:"ID_txt03",width:"118",expand:"down",align:"center",size:"10",class:"grayCallOut"});
	this.text_19.setTransform(75.6,64.5);

	// ID_txt07
	this.text_20 = new DOMObject({type:"TEXT",compId:"ID_txt07",width:"100",expand:"right",align:"left",size:"10",bold:"1",color:"#652C8A"});
	this.text_20.setTransform(14.6,7);

	// ID_txt04
	this.text_21 = new DOMObject({type:"TEXT",compId:"ID_txt04",width:"95",expand:"right",align:"left",size:"10",bold:"1",color:"#652C8A"});
	this.text_21.setTransform(100,-75.3);

	// ID_txt05
	this.text_22 = new DOMObject({type:"TEXT",compId:"ID_txt05",width:"100",expand:"up",align:"center",size:"10",bold:"1",color:"#652C8A"}); 
	this.text_22.setTransform(-83,-47.7);

	// ID_txt06
	this.text_23 = new DOMObject({type:"TEXT",compId:"ID_txt06",width:"97",expand:"down",align:"right",size:"10",bold:"1",color:"#652C8A"});
 	this.text_23.setTransform(-200,6.5);

	this.addChild(this.text_23,this.text_22,this.text_21,this.text_20,this.text_19);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-132.7,-75.3,311,155);


(lib.arrow_up = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#F68026").ss(3,1,1).p("ABWAAIirAA");
	this.shape.setTransform(-6.3,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F68026").s().p("ABLgxIgzAxIAzAyIiVgyICVgx").cp();
	this.shape_1.setTransform(-17.5,0);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-25,-4.9,27.3,10);

 


(lib.arrow_purple = function() {
	this.initialize();

	// Layer 1
	//this.instance = new lib.arrow();
	this.instance = new DOMObject({type:"IMAGE",image:img.arrow});
	
	this.instance.setTransform(-32.4,-13.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-32.4,-13.9,65,28);






(lib.vlancopy = function() {
	this.initialize();

	// ID_txt12 
	this.text_24 = new DOMObject({type:"TEXT",compId:"ID_txt12",width:"138",expand:"up+down",align:"center",size:"10",class:"orangeCallOut"});	
	this.text_24.setTransform(50.7,0);

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#F68026").ss(3,1,1).p("AkFAAIILAA");
	this.shape_2.setTransform(36.2,8.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F68026").s().p("ABLgxIgzAxIAzAyIiVgyICVgx").cp();
	this.shape_3.setTransform(7.5,8.7);

	this.addChild(this.shape_3,this.shape_2,this.text_24);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,3.4,160.2,15.2);


(lib.vlan = function() {
	this.initialize();

	// ID_txt13
 	this.text_25 = new DOMObject({type:"TEXT",compId:"ID_txt13",width:"98",expand:"down",align:"center",size:"10",class:"orangeCallOut"});	 
	this.text_25.setTransform(28,0);

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#F68026").ss(3,1,1).p("AiDAAIEHAA");
	this.shape_4.setTransform(23.2,8.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F68026").s().p("ABLgxIgzAxIAzAyIiVgyICVgx").cp();
	this.shape_5.setTransform(7.5,8.7);

	this.addChild(this.shape_5,this.shape_4,this.text_25);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,3.7,128.9,17.7);


(lib.arrow = function() {
	this.initialize();

	// Layer 1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#652C8A").ss(1,1,1).p("AgQh/QgvAFgoATQghAPgbAYQgxAqgRA0QgGAQgBASQgDAOAAAOQAAAGAAAGIhKAAQgBgGAAgGQAAgOADgOQABgSAGgQQARg0AygqQAbgYAhgPQA3gaBFAAQATAAASACQAQgCATAAIABAAQBrAABNBBQAwAqATA0QABAHACAGIApAAIhOBXIhchXIA2AAQgCgGgBgHQgTg0gwgqQgxgpg8gQQgSgEgSgCIAAAA").cp();
	this.shape_6.setTransform(-6,7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#8557A0").s().p("Ailh/QATgCASAAIABAAQBrAABLBBQAwAqATA0QABAHACAGIApAAIhNBXIhbhXIA1AAQgDgGgBgHQgSg0gvgqQgwgpg9gQQgSgEgUgCIAAAA").cp();
	this.shape_7.setTransform(8.8,7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#652C8A").s().p("ACUhyQgvAFgoATQggAPgcAYQgvArgRA0QgFAQgCARQgCAOAAAPQAAAGAAAFIhKAAQgBgFAAgGQAAgPACgOQACgRAFgQQASg0AxgrQAcgYAggPQA2gaBEAAQATAAASACIAAAA").cp();
	this.shape_8.setTransform(-22.6,5.7);

	this.addChild(this.shape_8,this.shape_7,this.shape_6);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-37.5,-6,63,26.2);


(lib.envelopeclosedstatic = function() {
	this.initialize();
	this.instance = new DOMObject({type:"IMAGE",image:img.envelope_closed_static});
 	this.instance.setTransform(-39.5,-26.1,0.667,0.663);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-39.6,-26.1,82.1,52.4);

 


(lib.frame12 = function() {
	this.initialize();

	// ID_txt11
	this.text_26 = new DOMObject({type:"TEXT",compId:"ID_txt11",width:"63.8",expand:"down",align:"center",size:"10",class:"glow"});	 

	this.text_26.setTransform(-37,-14);

	// Layer 1
	this.instance_1 = new lib.envelopeclosedstatic();
	this.instance_1.setTransform(0,0.1,0.792,0.783,0,0,0,1.4,0);

	this.addChild(this.instance_1,this.text_26);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-32.4,-20.4,65,41);


(lib.frame11 = function() {
	this.initialize();

	// Layer 2
	this.text_27 = new DOMObject({type:"TEXT",compId:"ID_txt10",width:"63.8",expand:"up+down",align:"center",size:"10",class:"glow"});	 
	this.text_27.setTransform(-37,-3.5);

	// Layer 1
	this.instance_2 = new lib.envelopeclosedstatic();
	this.instance_2.setTransform(0,0.1,0.792,0.783,0,0,0,1.4,0);

	this.addChild(this.instance_2,this.text_27);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-32.4,-20.4,65,41);


(lib.frame07b = function() {
	this.initialize();

	// ID_txt27b
	this.text_28 = new DOMObject({type:"TEXT",compId:"ID_txt27b",width:"98",expand:"up+down",align:"center",size:"10"});	 
	this.text_28.setTransform(-1.4,-7.5);

	// Layer 1
	this.instance_3 = new lib.envelopeclosedstatic();
	this.instance_3.setTransform(0,0.1,0.792,0.783,0,0,0,1.4,0);

	this.addChild(this.instance_3,this.text_28);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-32.4,-20.4,65,41);


(lib.frame06 = function() {
	this.initialize();

	// ID_txt09
 
	this.text_29 = new DOMObject({type:"TEXT",compId:"ID_txt09",width:"63.8",expand:"up+down",align:"center",size:"10",class:"glow"});	
	this.text_29.setTransform(-37,-3.5);

	// Layer 2
	this.instance_4 = new lib.envelopeclosedstatic();
	this.instance_4.setTransform(0.1,0.2,0.792,0.782,0,0,0,1.5,0.2);

	this.addChild(this.instance_4,this.text_29);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-32.5,-20.4,65,41);


(lib.frame05 = function() {
	this.initialize();

	// Layer 3
	this.text_30 = new DOMObject({type:"TEXT",compId:"ID_txt08",width:"63.8",expand:"up+down",align:"center",size:"10",class:"glow"});
	this.text_30.setTransform(-36,-7.5);

	// Layer 1
	this.instance_5 = new lib.envelopeclosedstatic();
	this.instance_5.setTransform(0,0.1,0.792,0.783,0,0,0,1.4,0);

	this.addChild(this.instance_5,this.text_30);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-32.4,-20.4,65,41);


(lib.animation01 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{},true);

	// broadcast9
	this.frame09 = new lib.frame11();
	this.frame09.setTransform(387,67);
	this.frame09.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.frame09).wait(499).to({alpha:1},10).to({x:315,y:148.5},55).to({alpha:0},10).wait(10).to({alpha:0.93},10).to({x:235,y:218.5},50).to({alpha:0},10).wait(120));

	// broadcast5
	this.frame05 = new lib.frame06();
	this.frame05.setTransform(235.1,218.6,1,1,0,0,0,0.1,0.1);
	this.frame05.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.frame05).wait(81).to({alpha:1},10).to({regX:0,regY:0,x:313,y:148.5},55).to({regX:0.1,regY:0.1,x:313.1,y:148.6,alpha:0},10).wait(10).to({regX:0,regY:0,x:313,y:148.5},0).to({alpha:1},10).to({regX:0.1,regY:0.1,x:387.1,y:68.1},55).to({alpha:0},10).wait(533));

	// bc new
	this.frame04 = new lib.frame12();
	this.frame04.setTransform(235,218.5);
	this.frame04.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.frame04).wait(664).to({alpha:1},10).to({x:300,y:305},50).to({regX:0,x:299.9,alpha:0},10).wait(40));

	// broadcast4
	this.frame04_1 = new lib.frame05();
	this.frame04_1.setTransform(178,306);
	this.frame04_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.frame04_1).wait(6).to({alpha:1},10).to({x:235,y:218.5},45).to({scaleX:1.01,alpha:0},10).wait(703));

	// broadcast
	this.frame01 = new lib.frame07b();
	this.frame01.setTransform(301,305);
	this.frame01.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.frame01).wait(774));

	// vlan frame2 
	this.instance_6 = new lib.vlan();
	this.instance_6.setTransform(399.2,125.3,1,1,0,0,0,57.2,7.3);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(166).to({alpha:1},0).wait(321).wait(86).to({x:469.3,y:118.1,alpha:0},0).wait(201));

	// co1
	this.instance_7 = new lib.vlancopy();
	this.instance_7.setTransform(322.2,202.3,1,1,0,0,0,57.2,7.3);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(81).to({x:321.3,alpha:1},0).wait(75).to({x:322.2,alpha:0},0).wait(428).to({alpha:1},0).wait(70).to({alpha:0},0).wait(120));

	
	// yelgre txt
	// yelgre txt
	this.instance_101 = new lib.yel_gre_text();
	this.instance_101.setTransform(259.8,51.5);
	this.instance_101.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_101).wait(392).to({alpha:1},0).wait(95).to({alpha:0},0).wait(287));
	
 
	
		// arrow
	/*this.instance_9 = new lib.arrow_purple();
	this.instance_9.setTransform(277.2,44);
	this.instance_9.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(392).to({alpha:1},0).wait(95).to({alpha:0},0).wait(287));*/
	

	// routeroutput bg
	this.instance_10 = new lib.Routerop();
	this.instance_10.setTransform(78.1,39.3);
	this.instance_10.alpha = 0;
	 
	
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(301).to({alpha:1},0).wait(91).to({alpha:0},0).wait(382));


	
	// arrow
	this.instance_11 = new lib.arrow_up();
	this.instance_11.setTransform(364.9,67.5,1,1,0,0,0,0.8,0);
	this.instance_11.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(301).to({x:363.6,alpha:1},0).wait(91).to({x:364.9,alpha:0},0).wait(382));

	// tb9
	this.instance_12 = new lib.textbox9();
	this.instance_12.setTransform(66.3,233);
	this.instance_12.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(663).to({alpha:1},0).wait(110).to({alpha:0},0).wait(1));

	// tb8
	this.instance_13 = new lib.textbox8();
	this.instance_13.setTransform(66.3,233);
	this.instance_13.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(578).to({alpha:1},0).wait(84).to({alpha:0},0).wait(112));

	// tb7
	this.instance_14 = new lib.textbox7();
	this.instance_14.setTransform(66.3,233);
	this.instance_14.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(487).to({alpha:1},0).wait(90).to({alpha:0},0).wait(197));

	// tb6
	this.instance_15 = new lib.textbox6();
	this.instance_15.setTransform(66.3,233);
	this.instance_15.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(392).to({alpha:1},0).wait(94).to({alpha:0},0).wait(288));

	// tb5
	this.instance_16 = new lib.textbox5();
	this.instance_16.setTransform(66.3,233);
	this.instance_16.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(301).to({alpha:1},0).wait(90).to({alpha:0},0).wait(383));

	// tb4
	this.instance_17 = new lib.textbox4();
	this.instance_17.setTransform(66.3,233);
	this.instance_17.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(242).to({alpha:1},0).wait(58).to({alpha:0},0).wait(474));

	// tb3
	this.instance_18 = new lib.textbox3();
	this.instance_18.setTransform(66.3,233);
	this.instance_18.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(166).to({alpha:1},0).wait(75).to({alpha:0},0).wait(533));

	// tb2
	this.instance_19 = new lib.textbox2();
	this.instance_19.setTransform(66.3,233);
	this.instance_19.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(81).to({alpha:1},0).wait(84).to({alpha:0},0).wait(609));

	// tb1
	this.instance_20 = new lib.textbox1();
	this.instance_20.setTransform(66.3,233);
	this.instance_20.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(5).to({alpha:1},0).wait(75).to({alpha:0},0).to({_off:true},407).wait(111));

	// lazytext
	this.instance_21 = new lib.lt_1();
	this.instance_21.setTransform(274.2,174.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_21}]}).wait(774));

	// static text
	this.instance_22 = new lib.statictext();
	this.instance_22.setTransform(274.8,212.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_22}]}).wait(774));

	// bg
	this.instance_23 = new lib.media_5131();
	this.instance_23.setTransform(0,0,0.72,0.719);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_23}]}).wait(774));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,470.9,400);


(lib.Main = function() {
	this.initialize();

	// slide1
	this.anim01 = new lib.animation01();

	this.addChild(this.anim01);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,470.9,400);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;