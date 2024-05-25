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
(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,783,667);


(lib.Bitmap1 = function() {
        this.initialize();
	this.instance = new DOMObject({type:"IMAGE",image:img.Bitmap1});
	this.addChild(this.instance);
}).prototype = new cjs.Container();



(lib.Bitmap2 = function() {
	this.initialize(img.Bitmap2);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,80,71);


(lib.Bitmap3 = function() {
	this.initialize(img.Bitmap3);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,80,71);


(lib.Bitmap4 = function() {
	this.initialize(img.Bitmap4);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,95,56);


(lib.Bitmap5 = function() {
	this.initialize(img.Bitmap5);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,92,70);

/*
(lib.Bitmap6 = function() {
	this.initialize(img.Bitmap6);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,28,34);
*/
(lib.Bitmap6 = function() {
	this.initialize();
	this.instance = new DOMObject({type:"IMAGE",image:img.Bitmap6});
	this.addChild(this.instance);
}).prototype = new cjs.Container();

(lib.red_X = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Bitmap6();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,28,34);


(lib.printer_glow = function() {
	this.initialize();

	// Layer 1
	this.instance_1 = new lib.Bitmap4();

	this.addChild(this.instance_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,95,56);


(lib.laptop_glow = function() {
	this.initialize();

	// Layer 1
	this.instance_2 = new lib.Bitmap5();

	this.addChild(this.instance_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,92,70);


(lib.ID_txt01 = function() {
	this.initialize();

	// ID_txt01
		this.text = new DOMObject({type:"TEXT" , align:"center" ,compId:"ID_txt01", size:"11", width:"298.1", expand:"up"}); 
this.text.setTransform(0,5);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,290.5,16.2);


(lib.computer2_glow = function() {
	this.initialize();

	// Layer 1
	this.instance_3 = new lib.Bitmap3();

	this.addChild(this.instance_3);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,80,71);


(lib.computer1_glow = function() {
	this.initialize();

	// Layer 1
	this.instance_4 = new lib.Bitmap2();

	this.addChild(this.instance_4);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,80,71);


(lib.envelopeclosedstatic = function() {
	this.initialize();

	// inner lines
	this.instance_5 = new lib.Bitmap1();
	this.instance_5.setTransform(-18,-26.1);

	this.addChild(this.instance_5);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-39.5,-26.1,82,52);


(lib.Arrow4 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F68026").s().p("AgxAhIAighIgiggIBjAgIhjAh").cp();
	this.shape.setTransform(5,0);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-3.2,10,6.7);


(lib.Arrow = function() {
	this.initialize();

	// shape
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F68026").s().p("AgxAhIAighIgiggIBjAgIhjAh").cp();
	this.shape_1.setTransform(5,0);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-3.2,10,6.7);


(lib.animation01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// title
	this.instance_6 = new lib.ID_txt01();
	this.instance_6.setTransform(247.5,52.4,1,1,0,0,0,149.1,8.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6}]}).wait(102));

	// labels
	
var minus_factor = 34;
this.text_1 = new DOMObject({type:"TEXT" , align:"center" ,text:"172.16.4.253", width:"68.2",   size:"11"});
this.text_1.setTransform(394-minus_factor,273.5);

	
this.text_2 = new DOMObject({type:"TEXT" , align:"center" ,text:"172.16.4.3", width:"68.2",   size:"11"});
this.text_2.setTransform(287.5-minus_factor,342);	


this.text_3 = new DOMObject({type:"TEXT" , align:"center" ,text:"172.16.4.2", width:"68.2",   size:"11"});
this.text_3.setTransform(171-minus_factor,342);	
	

	
this.text_4 = new DOMObject({type:"TEXT" , align:"center" ,text:"172.16.4.1", width:"75",   size:"11"});
this.text_4.setTransform(53.1-minus_factor,295);		
	
	
	
	
	


	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_4},{t:this.text_3},{t:this.text_2},{t:this.text_1}]}).wait(102));

	// Red x
	this.instance_7 = new lib.red_X();
	this.instance_7.setTransform(256.7,85.1,1,1,0,0,0,14,17);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(84).to({alpha:1},7).wait(11));

	// Packet4
	this.instance_8 = new lib.envelopeclosedstatic();
	this.instance_8.setTransform(246.3,152.2,0.45,0.45,0,0,0,1.5,0.1);
	this.instance_8.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(52).to({alpha:0.988},0).to({x:247.5,y:85.1},32).wait(18));

	// Packet3
	this.instance_9 = new lib.envelopeclosedstatic();
	this.instance_9.setTransform(246.3,152.2,0.45,0.45,0,0,0,1.5,0.1);
	this.instance_9.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(52).to({alpha:0.988},0).to({x:177.7,y:306.3},32).wait(18));

	// Packet2
	this.instance_10 = new lib.envelopeclosedstatic();
	this.instance_10.setTransform(246.3,152.2,0.45,0.45,0,0,0,1.5,0.1);
	this.instance_10.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(52).to({alpha:0.988},0).to({x:309,y:305.6},32).wait(18));

	// Packet
	this.instance_11 = new lib.envelopeclosedstatic();
	this.instance_11.setTransform(58.8,257.7,0.45,0.45,0,0,0,1.6,0.1);
	this.instance_11.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(12).to({alpha:0.988},12).to({regX:1.5,x:246.3,y:152.2},28).to({x:392.9,y:254.9},32).wait(18));

	// Arrow5
	this.instance_12 = new lib.Arrow4();
	this.instance_12.setTransform(245.7,119.3,1.797,1.797,-90.8,0,0,5,0);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(56).to({_off:false},0).to({y:111.9},8).to({alpha:0},11).to({_off:true},1).wait(26));

	// Arrowline5
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#F68026").ss(3,1,1).p("AAAhDIAACH");
	this.shape_2.setTransform(245.6,124);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#F68026").ss(3,1,1).p("AAABJIAAiR");
	this.shape_3.setTransform(245.6,123.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#F68026").ss(3,1,1).p("AAABOIAAib");
	this.shape_4.setTransform(245.6,122.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#F68026").ss(3,1,1).p("AAABTIAAil");
	this.shape_5.setTransform(245.6,122.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#F68026").ss(3,1,1).p("AAABXIAAit");
	this.shape_6.setTransform(245.6,121.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#F68026").ss(3,1,1).p("AAABcIAAi3");
	this.shape_7.setTransform(245.6,121.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#F68026").ss(3,1,1).p("AAABhIAAjB");
	this.shape_8.setTransform(245.6,120.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#F68026").ss(3,1,1).p("AAABmIAAjL");
	this.shape_9.setTransform(245.6,120.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#F68026").ss(3,1,1).p("AAAhqIAADV");
	this.shape_10.setTransform(245.6,119.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#F78C3A").ss(3,1,1).p("AAABrIAAjV");
	this.shape_11.setTransform(245.6,119.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#F8974D").ss(3,1,1).p("AAABrIAAjV");
	this.shape_12.setTransform(245.6,119.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#F8A361").ss(3,1,1).p("AAABrIAAjV");
	this.shape_13.setTransform(245.6,119.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#F9AE75").ss(3,1,1).p("AAABrIAAjV");
	this.shape_14.setTransform(245.6,119.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FABA89").ss(3,1,1).p("AAABrIAAjV");
	this.shape_15.setTransform(245.6,119.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FBC59C").ss(3,1,1).p("AAABrIAAjV");
	this.shape_16.setTransform(245.6,119.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FCD1B0").ss(3,1,1).p("AAABrIAAjV");
	this.shape_17.setTransform(245.6,119.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FDDCC4").ss(3,1,1).p("AAABrIAAjV");
	this.shape_18.setTransform(245.6,119.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#FDE8D8").ss(3,1,1).p("AAABrIAAjV");
	this.shape_19.setTransform(245.6,119.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FEF3EB").ss(3,1,1).p("AAABrIAAjV");
	this.shape_20.setTransform(245.6,119.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("rgba(246,128,38,0)").ss(3,1,1).p("AAAhqIAADV");
	this.shape_21.setTransform(245.6,119.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2}]},56).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[]},1).wait(26));

	// Arrow4
	this.instance_13 = new lib.Arrow4();
	this.instance_13.setTransform(227.5,193.1,1.797,1.797,111.8,0,0,5,0);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(56).to({_off:false},0).to({x:191.8,y:281.4},8).to({alpha:0},11).to({_off:true},1).wait(26));

	// Arrowline4
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#F68026").ss(3,1,1).p("AArhqIhWDV");
	this.shape_22.setTransform(231.6,183.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#F68026").ss(3,1,1).p("AhBCiICDlD");
	this.shape_23.setTransform(229.3,188.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#F68026").ss(3,1,1).p("AhXDaICvmz");
	this.shape_24.setTransform(227.1,194.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#F68026").ss(3,1,1).p("AhtERIDboh");
	this.shape_25.setTransform(224.9,199.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#F68026").ss(3,1,1).p("AiDFIIEHqP");
	this.shape_26.setTransform(222.7,205.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#F68026").ss(3,1,1).p("AiZGAIEzr/");
	this.shape_27.setTransform(220.5,211);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#F68026").ss(3,1,1).p("AivG3IFftt");
	this.shape_28.setTransform(218.3,216.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#F68026").ss(3,1,1).p("AjFHvIGLvd");
	this.shape_29.setTransform(216.1,222.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#F68026").ss(3,1,1).p("ADcolIm3RL");
	this.shape_30.setTransform(213.9,227.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#F78C3A").ss(3,1,1).p("AjbImIG3xL");
	this.shape_31.setTransform(213.9,227.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#F8974D").ss(3,1,1).p("AjbImIG3xL");
	this.shape_32.setTransform(213.9,227.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#F8A361").ss(3,1,1).p("AjbImIG3xL");
	this.shape_33.setTransform(213.9,227.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#F9AE75").ss(3,1,1).p("AjbImIG3xL");
	this.shape_34.setTransform(213.9,227.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#FABA89").ss(3,1,1).p("AjbImIG3xL");
	this.shape_35.setTransform(213.9,227.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#FBC59C").ss(3,1,1).p("AjbImIG3xL");
	this.shape_36.setTransform(213.9,227.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#FCD1B0").ss(3,1,1).p("AjbImIG3xL");
	this.shape_37.setTransform(213.9,227.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#FDDCC4").ss(3,1,1).p("AjbImIG3xL");
	this.shape_38.setTransform(213.9,227.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#FDE8D8").ss(3,1,1).p("AjbImIG3xL");
	this.shape_39.setTransform(213.9,227.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#FEF3EB").ss(3,1,1).p("AjbImIG3xL");
	this.shape_40.setTransform(213.9,227.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("rgba(246,128,38,0)").ss(3,1,1).p("ADcolIm3RL");
	this.shape_41.setTransform(213.9,227.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_22}]},56).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[]},1).wait(26));

	// Arrow3
	this.instance_14 = new lib.Arrow4();
	this.instance_14.setTransform(262.4,194.4,1.797,1.797,74,0,0,5,0);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(56).to({_off:false},0).to({x:286.4,y:281},8).to({alpha:0},11).to({_off:true},1).wait(26));

	// Arrowline3
	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#F68026").ss(3,1,1).p("AgZheIA0C9");
	this.shape_42.setTransform(258.9,181.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#F68026").ss(3,1,1).p("AgpiWIBTEt");
	this.shape_43.setTransform(260.5,187.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#F68026").ss(3,1,1).p("Ag5jOIBzGd");
	this.shape_44.setTransform(262,193);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#F68026").ss(3,1,1).p("AhIkHICRIP");
	this.shape_45.setTransform(263.6,198.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#F68026").ss(3,1,1).p("AhYk/ICxJ/");
	this.shape_46.setTransform(265.1,204.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#F68026").ss(3,1,1).p("Ahnl4IDPLx");
	this.shape_47.setTransform(266.7,210);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#F68026").ss(3,1,1).p("Ah3mwIDvNh");
	this.shape_48.setTransform(268.3,215.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#F68026").ss(3,1,1).p("AiHnpIEPPT");
	this.shape_49.setTransform(269.8,221.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#F68026").ss(3,1,1).p("AiWohIEtRD");
	this.shape_50.setTransform(271.4,226.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#F78C3A").ss(3,1,1).p("AiWohIEtRD");
	this.shape_51.setTransform(271.4,226.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#F8974D").ss(3,1,1).p("AiWohIEtRD");
	this.shape_52.setTransform(271.4,226.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#F8A361").ss(3,1,1).p("AiWohIEtRD");
	this.shape_53.setTransform(271.4,226.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#F9AE75").ss(3,1,1).p("AiWohIEtRD");
	this.shape_54.setTransform(271.4,226.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#FABA89").ss(3,1,1).p("AiWohIEtRD");
	this.shape_55.setTransform(271.4,226.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#FBC59C").ss(3,1,1).p("AiWohIEtRD");
	this.shape_56.setTransform(271.4,226.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#FCD1B0").ss(3,1,1).p("AiWohIEtRD");
	this.shape_57.setTransform(271.4,226.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#FDDCC4").ss(3,1,1).p("AiWohIEtRD");
	this.shape_58.setTransform(271.4,226.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#FDE8D8").ss(3,1,1).p("AiWohIEtRD");
	this.shape_59.setTransform(271.4,226.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#FEF3EB").ss(3,1,1).p("AiWohIEtRD");
	this.shape_60.setTransform(271.4,226.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("rgba(246,128,38,0)").ss(3,1,1).p("AiWohIEtRD");
	this.shape_61.setTransform(271.4,226.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_42}]},56).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[]},1).wait(26));

	// Arrow2
	this.instance_15 = new lib.Arrow4();
	this.instance_15.setTransform(291.5,177.1,1.797,1.797,41.6,0,0,5,0);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(56).to({_off:false},0).to({x:366.6,y:235.2},8).to({alpha:0},11).to({_off:true},1).wait(26));

	// Arrowline2
	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#F68026").ss(3,1,1).p("AhKg4ICVBx");
	this.shape_62.setTransform(281.3,168.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#F68026").ss(3,1,1).p("Ah5hdIDzC7");
	this.shape_63.setTransform(286,172.3);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#F68026").ss(3,1,1).p("AipiCIFTEF");
	this.shape_64.setTransform(290.8,176);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#F68026").ss(3,1,1).p("AjYinIGxFP");
	this.shape_65.setTransform(295.5,179.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#F68026").ss(3,1,1).p("AkIjMIIRGZ");
	this.shape_66.setTransform(300.3,183.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#F68026").ss(3,1,1).p("Ak3jyIJvHl");
	this.shape_67.setTransform(305,187.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#F68026").ss(3,1,1).p("AlnkXILPIv");
	this.shape_68.setTransform(309.8,190.9);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#F68026").ss(3,1,1).p("AmXk8IMvJ5");
	this.shape_69.setTransform(314.6,194.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#F68026").ss(3,1,1).p("AnGlhIONLD");
	this.shape_70.setTransform(319.3,198.3);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#F78C3A").ss(3,1,1).p("AnGlhIONLD");
	this.shape_71.setTransform(319.3,198.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#F8974D").ss(3,1,1).p("AnGlhIONLD");
	this.shape_72.setTransform(319.3,198.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#F8A361").ss(3,1,1).p("AnGlhIONLD");
	this.shape_73.setTransform(319.3,198.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#F9AE75").ss(3,1,1).p("AnGlhIONLD");
	this.shape_74.setTransform(319.3,198.3);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#FABA89").ss(3,1,1).p("AnGlhIONLD");
	this.shape_75.setTransform(319.3,198.3);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#FBC59C").ss(3,1,1).p("AnGlhIONLD");
	this.shape_76.setTransform(319.3,198.3);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#FCD1B0").ss(3,1,1).p("AnGlhIONLD");
	this.shape_77.setTransform(319.3,198.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#FDDCC4").ss(3,1,1).p("AnGlhIONLD");
	this.shape_78.setTransform(319.3,198.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#FDE8D8").ss(3,1,1).p("AnGlhIONLD");
	this.shape_79.setTransform(319.3,198.3);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#FEF3EB").ss(3,1,1).p("AnGlhIONLD");
	this.shape_80.setTransform(319.3,198.3);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("rgba(246,128,38,0)").ss(3,1,1).p("AnGlhIONLD");
	this.shape_81.setTransform(319.3,198.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_62}]},56).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[]},1).wait(26));

	// Arrow
	this.instance_16 = new lib.Arrow();
	this.instance_16.setTransform(97.8,231.2,1.8,1.8,-29.9,0,0,5,0);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(24).to({_off:false},0).to({x:201.3,y:176.3},14).to({alpha:0},14).wait(50));

	// Arrowline
	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#F68026").ss(3,1,1).p("AhBAkICChH");
	this.shape_82.setTransform(89.1,236.1);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#F68026").ss(3,1,1).p("AhlA3IDLht");
	this.shape_83.setTransform(92.6,234.2);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#F68026").ss(3,1,1).p("AiKBLIEViV");
	this.shape_84.setTransform(96.2,232.3);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#F68026").ss(3,1,1).p("AivBfIFfi9");
	this.shape_85.setTransform(99.8,230.4);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#F68026").ss(3,1,1).p("AjUByIGpjj");
	this.shape_86.setTransform(103.4,228.4);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#F68026").ss(3,1,1).p("Aj4CGIHxkL");
	this.shape_87.setTransform(107,226.5);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#F68026").ss(3,1,1).p("AkdCaII7kz");
	this.shape_88.setTransform(110.6,224.6);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#F68026").ss(3,1,1).p("AlCCtIKFlZ");
	this.shape_89.setTransform(114.2,222.7);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#F68026").ss(3,1,1).p("AlnDBILPmB");
	this.shape_90.setTransform(117.8,220.8);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#F68026").ss(3,1,1).p("AmMDUIMZmn");
	this.shape_91.setTransform(121.4,218.8);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#F68026").ss(3,1,1).p("AmwDoINhnP");
	this.shape_92.setTransform(124.9,216.9);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#F68026").ss(3,1,1).p("AnVD8IOrn3");
	this.shape_93.setTransform(128.5,215);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#F68026").ss(3,1,1).p("An6EPIP1od");
	this.shape_94.setTransform(132.1,213.1);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#F68026").ss(3,1,1).p("AofEjIQ/pF");
	this.shape_95.setTransform(135.7,211.2);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#F68026").ss(3,1,1).p("ApEE2ISJpr");
	this.shape_96.setTransform(139.3,209.3);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#F78936").ss(3,1,1).p("ApEE3ISJps");
	this.shape_97.setTransform(139.3,209.3);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#F79245").ss(3,1,1).p("ApEE3ISJps");
	this.shape_98.setTransform(139.3,209.3);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#F89B55").ss(3,1,1).p("ApEE3ISJps");
	this.shape_99.setTransform(139.3,209.3);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#F9A464").ss(3,1,1).p("ApEE3ISJps");
	this.shape_100.setTransform(139.3,209.3);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#F9AD74").ss(3,1,1).p("ApEE3ISJps");
	this.shape_101.setTransform(139.3,209.3);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#FAB683").ss(3,1,1).p("ApEE3ISJps");
	this.shape_102.setTransform(139.3,209.3);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#FBBF92").ss(3,1,1).p("ApEE3ISJps");
	this.shape_103.setTransform(139.3,209.3);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#FBC9A2").ss(3,1,1).p("ApEE3ISJps");
	this.shape_104.setTransform(139.3,209.3);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#FCD2B1").ss(3,1,1).p("ApEE3ISJps");
	this.shape_105.setTransform(139.3,209.3);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#FCDBC1").ss(3,1,1).p("ApEE3ISJps");
	this.shape_106.setTransform(139.3,209.3);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#FDE4D0").ss(3,1,1).p("ApEE3ISJps");
	this.shape_107.setTransform(139.3,209.3);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#FEEDE0").ss(3,1,1).p("ApEE3ISJps");
	this.shape_108.setTransform(139.3,209.3);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#FEF6F0").ss(3,1,1).p("ApEE3ISJps");
	this.shape_109.setTransform(139.3,209.3);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("rgba(246,128,38,0)").ss(3,1,1).p("ApEE2ISJpr");
	this.shape_110.setTransform(139.3,209.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_82}]},24).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).wait(50));

	// laptop_glow
	this.instance_17 = new lib.laptop_glow();
	this.instance_17.setTransform(301.9,316.9,1,1,0,0,0,46,35);
	this.instance_17.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(84).to({alpha:1},7).wait(11));

	// printer_glow
	this.instance_18 = new lib.printer_glow();
	this.instance_18.setTransform(403.3,255.8,1,1,0,0,0,47.5,28);
	this.instance_18.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(84).to({alpha:1},7).wait(11));

	// computer2_glow
	this.instance_19 = new lib.computer2_glow();
	this.instance_19.setTransform(181.7,316,1,1,0,0,0,40,35.5);
	this.instance_19.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(84).to({alpha:1},7).wait(11));

	// computer1_glow copy
	this.instance_20 = new lib.computer1_glow();
	this.instance_20.setTransform(63.3,268,1,1,0,0,0,40,35.5);
	this.instance_20.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(7).to({alpha:1},4).wait(91));

	// bg
	this.instance_21 = new lib.bg();
	this.instance_21.setTransform(0,0,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_21}]}).wait(102));

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