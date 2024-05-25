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
(lib.bg_image = function() {
	this.initialize(img.bg_image);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,783,667);


(lib.Bitmap1 = function() {
	this.initialize(img.Bitmap1);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,80,71);


(lib.Bitmap2 = function() {
	this.initialize(img.Bitmap2);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,80,71);


(lib.Bitmap3 = function() {
	this.initialize(img.Bitmap3);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,92,70);


(lib.Bitmap4 = function() {
	this.initialize(img.Bitmap4);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,92,70);


(lib.Bitmap5 = function() {
	this.initialize(img.Bitmap5);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,91,52);


(lib.Bitmap6 = function() {
this.initialize();
	this.instance = new DOMObject({type:"IMAGE",image:img.Bitmap6});
	this.addChild(this.instance);
}).prototype = new cjs.Container();



(lib.printer_glow = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Bitmap5();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,91,52);


(lib.laptop2_glow = function() {
	this.initialize();

	// Layer 1
	this.instance_1 = new lib.Bitmap4();

	this.addChild(this.instance_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,92,70);


(lib.laptop1_glow = function() {
	this.initialize();

	// Layer 1
	this.instance_2 = new lib.Bitmap3();

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
p.nominalBounds = new cjs.Rectangle(0,0,296.9,16.2);


(lib.c2_glow = function() {
	this.initialize();

	// Layer 1
	this.instance_3 = new lib.Bitmap2();

	this.addChild(this.instance_3);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,80,71);


(lib.c1_glow = function() {
	this.initialize();

	// Layer 1
	this.instance_4 = new lib.Bitmap1();

	this.addChild(this.instance_4);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,80,71);


(lib.envelopeclosedstatic = function() {
	this.initialize();

	// inner lines
	this.instance_5 = new lib.Bitmap6();
	this.instance_5.setTransform(-22,-26.1);

	this.addChild(this.instance_5);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-39.5,-26.1,82,52);


(lib.Arrow4 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F68026").s().p("AgPAAIgiggIBjAgIhjAhIAigh").cp();
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

	var minus_factor =34;
	

	
	this.text_1 = new DOMObject({type:"TEXT" , align:"center" ,text:"172.16.4.3\n224.10.10.5", width:"68.2",   size:"11"});
    this.text_1.setTransform(235-minus_factor,332);
	

	
	this.text_2 = new DOMObject({type:"TEXT" , align:"center" ,text:"172.16.4.4\n224.10.10.5", width:"68.2",   size:"11"});
    this.text_2.setTransform(312-minus_factor,324);
	
	
	
	
	


	
	this.text_3 = new DOMObject({type:"TEXT" , align:"center" ,text:"172.16.4.253", width:"68.2",   size:"11"});
    this.text_3.setTransform(394-minus_factor,272);
	
	
	
	
	

	this.text_4 = new DOMObject({type:"TEXT" , align:"center" ,text:"172.16.4.2", width:"68.2",   size:"11"});
    this.text_4.setTransform(144-minus_factor,327);
	
	

	
	this.text_5 = new DOMObject({type:"TEXT" , align:"center" ,text:"172.16.4.1", width:"72",   size:"11"});
    this.text_5.setTransform(53.1-minus_factor,294);
	
	
	
	

this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_5},{t:this.text_4},{t:this.text_3},{t:this.text_2},{t:this.text_1}]}).wait(102));

	// Packet3
	this.instance_7 = new lib.envelopeclosedstatic();
	this.instance_7.setTransform(246.3,152.2,0.45,0.45,0,0,0,1.5,0.1);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(52).to({alpha:0.988},0).to({x:249.7,y:298.3},32).wait(18));

	// Packet2
	this.instance_8 = new lib.envelopeclosedstatic();
	this.instance_8.setTransform(246.3,152.2,0.45,0.45,0,0,0,1.5,0.1);
	this.instance_8.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(52).to({alpha:0.988},0).to({x:326,y:289.7},32).wait(18));

	// Packet
	this.instance_9 = new lib.envelopeclosedstatic();
	this.instance_9.setTransform(58.8,257.7,0.45,0.45,0,0,0,1.6,0.1);
	this.instance_9.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(12).to({alpha:0.988},12).to({regX:1.5,x:246.3,y:152.2},28).wait(1).to({alpha:0},0).wait(49));

	// Arrow3
	this.instance_10 = new lib.Arrow4();
	this.instance_10.setTransform(246,198.8,1.797,1.797,86.9,0,0,5,0);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(56).to({_off:false},0).to({x:250.8,y:274.9},8).to({alpha:0},11).to({_off:true},1).wait(26));

	// Arrowline3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#F68026").ss(3,1,1).p("AgIiGIAREN");
	this.shape_2.setTransform(244.9,186.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#F68026").ss(3,1,1).p("AgLi1IAXFr");
	this.shape_3.setTransform(245.2,190.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#F68026").ss(3,1,1).p("AgOjkIAdHJ");
	this.shape_4.setTransform(245.5,195.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#F68026").ss(3,1,1).p("AgRkSIAjIl");
	this.shape_5.setTransform(245.8,200.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#F68026").ss(3,1,1).p("AgUlBIApKD");
	this.shape_6.setTransform(246.1,204.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#F68026").ss(3,1,1).p("AgXlvIAvLf");
	this.shape_7.setTransform(246.4,209.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#F68026").ss(3,1,1).p("AgameIA1M9");
	this.shape_8.setTransform(246.7,214.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#F68026").ss(3,1,1).p("AgdnNIA7Ob");
	this.shape_9.setTransform(247,218.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#F68026").ss(3,1,1).p("Aghn7IBDP3");
	this.shape_10.setTransform(247.4,223.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#F78C3A").ss(3,1,1).p("Aghn7IBCP3");
	this.shape_11.setTransform(247.4,223.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#F8974D").ss(3,1,1).p("Aghn7IBCP3");
	this.shape_12.setTransform(247.4,223.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#F8A361").ss(3,1,1).p("Aghn7IBCP3");
	this.shape_13.setTransform(247.4,223.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#F9AE75").ss(3,1,1).p("Aghn7IBCP3");
	this.shape_14.setTransform(247.4,223.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FABA89").ss(3,1,1).p("Aghn7IBCP3");
	this.shape_15.setTransform(247.4,223.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FBC59C").ss(3,1,1).p("Aghn7IBCP3");
	this.shape_16.setTransform(247.4,223.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FCD1B0").ss(3,1,1).p("Aghn7IBCP3");
	this.shape_17.setTransform(247.4,223.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FDDCC4").ss(3,1,1).p("Aghn7IBCP3");
	this.shape_18.setTransform(247.4,223.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#FDE8D8").ss(3,1,1).p("Aghn7IBCP3");
	this.shape_19.setTransform(247.4,223.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FEF3EB").ss(3,1,1).p("Aghn7IBCP3");
	this.shape_20.setTransform(247.4,223.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("rgba(246,128,38,0)").ss(3,1,1).p("Aghn7IBDP3");
	this.shape_21.setTransform(247.4,223.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2}]},56).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[]},1).wait(26));

	// Arrow2
	this.instance_11 = new lib.Arrow4();
	this.instance_11.setTransform(272.7,194.1,1.797,1.797,66.8,0,0,5,0);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(56).to({_off:false},0).to({x:304.2,y:267.2},8).to({alpha:0},11).to({_off:true},1).wait(26));

	// Arrowline2
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#F68026").ss(3,1,1).p("AgshqIBZDV");
	this.shape_22.setTransform(267.9,183);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#F68026").ss(3,1,1).p("Ag/iXIB/Ev");
	this.shape_23.setTransform(269.9,187.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#F68026").ss(3,1,1).p("AhTjFICnGL");
	this.shape_24.setTransform(271.8,192.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#F68026").ss(3,1,1).p("AhmjzIDNHn");
	this.shape_25.setTransform(273.8,196.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#F68026").ss(3,1,1).p("Ah6kgID1JB");
	this.shape_26.setTransform(275.7,201.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#F68026").ss(3,1,1).p("AiNlOIEbKd");
	this.shape_27.setTransform(277.7,205.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#F68026").ss(3,1,1).p("Aihl8IFDL5");
	this.shape_28.setTransform(279.6,210.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#F68026").ss(3,1,1).p("Ai0mpIFpNT");
	this.shape_29.setTransform(281.6,214.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#F68026").ss(3,1,1).p("AjInXIGROv");
	this.shape_30.setTransform(283.5,219.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#F78C3A").ss(3,1,1).p("AjInXIGROv");
	this.shape_31.setTransform(283.5,219.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#F8974D").ss(3,1,1).p("AjInXIGROv");
	this.shape_32.setTransform(283.5,219.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#F8A361").ss(3,1,1).p("AjInXIGROv");
	this.shape_33.setTransform(283.5,219.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#F9AE75").ss(3,1,1).p("AjInXIGROv");
	this.shape_34.setTransform(283.5,219.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#FABA89").ss(3,1,1).p("AjInXIGROv");
	this.shape_35.setTransform(283.5,219.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#FBC59C").ss(3,1,1).p("AjInXIGROv");
	this.shape_36.setTransform(283.5,219.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#FCD1B0").ss(3,1,1).p("AjInXIGROv");
	this.shape_37.setTransform(283.5,219.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#FDDCC4").ss(3,1,1).p("AjInXIGROv");
	this.shape_38.setTransform(283.5,219.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#FDE8D8").ss(3,1,1).p("AjInXIGROv");
	this.shape_39.setTransform(283.5,219.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#FEF3EB").ss(3,1,1).p("AjInXIGROv");
	this.shape_40.setTransform(283.5,219.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("rgba(246,128,38,0)").ss(3,1,1).p("AjInXIGROv");
	this.shape_41.setTransform(283.5,219.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_22}]},56).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[]},1).wait(26));

	// Arrow
	this.instance_12 = new lib.Arrow();
	this.instance_12.setTransform(97.8,231.2,1.8,1.8,-29.9,0,0,5,0);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(24).to({_off:false},0).to({x:201.3,y:176.3},14).to({alpha:0},14).wait(50));

	// Arrowline
	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#F68026").ss(3,1,1).p("AhBAkICChH");
	this.shape_42.setTransform(89.1,236.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#F68026").ss(3,1,1).p("AhlA3IDLht");
	this.shape_43.setTransform(92.6,234.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#F68026").ss(3,1,1).p("AiKBLIEViV");
	this.shape_44.setTransform(96.2,232.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#F68026").ss(3,1,1).p("AivBfIFfi9");
	this.shape_45.setTransform(99.8,230.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#F68026").ss(3,1,1).p("AjUByIGpjj");
	this.shape_46.setTransform(103.4,228.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#F68026").ss(3,1,1).p("Aj4CGIHxkL");
	this.shape_47.setTransform(107,226.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#F68026").ss(3,1,1).p("AkdCaII7kz");
	this.shape_48.setTransform(110.6,224.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#F68026").ss(3,1,1).p("AlCCtIKFlZ");
	this.shape_49.setTransform(114.2,222.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#F68026").ss(3,1,1).p("AlnDBILPmB");
	this.shape_50.setTransform(117.8,220.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#F68026").ss(3,1,1).p("AmMDUIMZmn");
	this.shape_51.setTransform(121.4,218.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#F68026").ss(3,1,1).p("AmwDoINhnP");
	this.shape_52.setTransform(124.9,216.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#F68026").ss(3,1,1).p("AnVD8IOrn3");
	this.shape_53.setTransform(128.5,215);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#F68026").ss(3,1,1).p("An6EPIP1od");
	this.shape_54.setTransform(132.1,213.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#F68026").ss(3,1,1).p("AofEjIQ/pF");
	this.shape_55.setTransform(135.7,211.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#F68026").ss(3,1,1).p("ApEE2ISJpr");
	this.shape_56.setTransform(139.3,209.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#F78936").ss(3,1,1).p("ApEE3ISJps");
	this.shape_57.setTransform(139.3,209.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#F79245").ss(3,1,1).p("ApEE3ISJps");
	this.shape_58.setTransform(139.3,209.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#F89B55").ss(3,1,1).p("ApEE3ISJps");
	this.shape_59.setTransform(139.3,209.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#F9A464").ss(3,1,1).p("ApEE3ISJps");
	this.shape_60.setTransform(139.3,209.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#F9AD74").ss(3,1,1).p("ApEE3ISJps");
	this.shape_61.setTransform(139.3,209.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#FAB683").ss(3,1,1).p("ApEE3ISJps");
	this.shape_62.setTransform(139.3,209.3);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#FBBF92").ss(3,1,1).p("ApEE3ISJps");
	this.shape_63.setTransform(139.3,209.3);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#FBC9A2").ss(3,1,1).p("ApEE3ISJps");
	this.shape_64.setTransform(139.3,209.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#FCD2B1").ss(3,1,1).p("ApEE3ISJps");
	this.shape_65.setTransform(139.3,209.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#FCDBC1").ss(3,1,1).p("ApEE3ISJps");
	this.shape_66.setTransform(139.3,209.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#FDE4D0").ss(3,1,1).p("ApEE3ISJps");
	this.shape_67.setTransform(139.3,209.3);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#FEEDE0").ss(3,1,1).p("ApEE3ISJps");
	this.shape_68.setTransform(139.3,209.3);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#FEF6F0").ss(3,1,1).p("ApEE3ISJps");
	this.shape_69.setTransform(139.3,209.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("rgba(246,128,38,0)").ss(3,1,1).p("ApEE2ISJpr");
	this.shape_70.setTransform(139.3,209.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_42}]},24).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).wait(50));

	// printer_glow
	this.instance_13 = new lib.printer_glow();
	this.instance_13.setTransform(403.3,253.8,1,1,0,0,0,45.5,26);
	this.instance_13.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(84).to({alpha:1},7).wait(11));

	// lpa2_glow
	this.instance_14 = new lib.laptop2_glow();
	this.instance_14.setTransform(320.9,298.9,1,1,0,0,0,46,35);
	this.instance_14.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(84).to({alpha:1},7).wait(11));

	// laptop1_glow
	this.instance_15 = new lib.laptop1_glow();
	this.instance_15.setTransform(244.9,307.9,1,1,0,0,0,46,35);
	this.instance_15.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(84).to({alpha:1},7).wait(11));

	// c2_glow
	this.instance_16 = new lib.c2_glow();
	this.instance_16.setTransform(154.7,300,1,1,0,0,0,40,35.5);
	this.instance_16.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(84).to({alpha:1},7).wait(11));

	// c1_glow
	this.instance_17 = new lib.c1_glow();
	this.instance_17.setTransform(63.3,268,1,1,0,0,0,40,35.5);
	this.instance_17.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(7).to({alpha:1},4).wait(91));

	// bg
	this.instance_18 = new lib.bg_image();
	this.instance_18.setTransform(0,0,0.6,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_18}]}).wait(102));

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