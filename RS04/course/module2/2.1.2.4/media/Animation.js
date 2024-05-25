(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.classesmediaMediaObject = function() {
	this.initialize();

	// Main
	this.instance = new lib.Main();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-12.6,0,482.7,400);


// symbols:
(lib._2_1_2_4 = function() {
	this.initialize(img._2_1_2_4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,470,400);


(lib.phone = function() {
	this.initialize(img.phone);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,165,92);


(lib.Switch_PBX = function() {
	this.initialize(img.Switch_PBX);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,102,103);


(lib.ID_txt03 = function() {
	this.initialize();

	// txt
	this.text= new DOMObject({type:"TEXT" , align:"left" ,compId:"ID_txt03", width:"355",  size:"11", expand:"up"});
	this.text.setTransform(9,0.7);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0.7,355,16.4);


(lib.ID_txt02 = function() {
	this.initialize();

	// txt
	this.text= new DOMObject({type:"TEXT" , align:"center" ,compId:"ID_txt02", width:"60",  size:"11", expand:"left+right",bold:"1"}); 

	this.text.setTransform(0.1,0.4);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,0.4,50.1,16.4);


(lib.ID_txt01 = function() {
	this.initialize();

	// txt
	this.text= new DOMObject({type:"TEXT" , align:"center" ,compId:"ID_txt01", width:"60",  size:"11", expand:"left+right",bold:"1"}); 
	this.text.setTransform(0,0.7);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0.7,50.1,16.4);


(lib.bubble02 = function() {
	this.initialize();

	// txt
	this.text = new DOMObject({ type:"BUBBLE", compId:"ID_txt05",  width:"70", height:"41", align:"left", tailPosition:"6", tailFlip:"0" }); 
	this.text.setTransform(5,5);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-6.9,85,16.4);


(lib.bubble01 = function() {
	this.initialize();

	// txt
	this.text = new DOMObject({ type:"BUBBLE", compId:"ID_txt04",  width:"95", height:"45.05", align:"left", tailPosition:"6", tailFlip:"0" }); 	this.text.setTransform(-14.9,18);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-14.9,14,95,16.4);


(lib.SwitchPBX = function() {
	this.initialize();

	// png
	this.instance = new lib.Switch_PBX();
	this.instance.setTransform(0,-64.4,0.623,0.626);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-64.4,63.5,64.5);


(lib.phone_1 = function() {
	this.initialize();

	// png
	this.instance = new lib.phone();
	this.instance.setTransform(0,-58.3,0.623,0.624);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-58.3,102.9,57.5);


(lib.animation01 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// ID_txt01
	this.instance = new lib.ID_txt01();
	this.instance.setTransform(30.2,214.4,1,1,0,0,0,25,8.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).wait(149));

	// ID_txt02
	this.instance_1 = new lib.ID_txt02();
	this.instance_1.setTransform(400.2,331.4,1,1,0,0,0,25,8.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).wait(149));

	// ID_txt03
	this.instance_2 = new lib.ID_txt03();
	this.instance_2.setTransform(182.1,345.9,1,1,0,0,0,177.5,8.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).wait(149));

	// bubble2
	this.instance_3 = new lib.bubble02();
	this.instance_3.setTransform(382.9,244.7);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(144).to({alpha:1},0).wait(5));

	// bubble01
	this.instance_4 = new lib.bubble01();
	this.instance_4.setTransform(37.8,135,1,1,0,0,0,35.5,22.5);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(3).to({regY:22.4,x:53.8,y:127.9,alpha:1},0).wait(146));

	// Topology
	this.instance_5 = new lib.SwitchPBX();
	this.instance_5.setTransform(146.5,148.9,0.669,0.669,0,0,0,31.8,-32.2);

	this.instance_6 = new lib.SwitchPBX();
	this.instance_6.setTransform(146.5,244.9,0.669,0.669,0,0,0,31.8,-32.2);

	this.instance_7 = new lib.SwitchPBX();
	this.instance_7.setTransform(344.5,244.9,0.669,0.669,0,0,0,31.8,-32.2);

	this.instance_8 = new lib.SwitchPBX();
	this.instance_8.setTransform(207.5,186.9,0.669,0.669,0,0,0,31.8,-32.2);

	this.instance_9 = new lib.SwitchPBX();
	this.instance_9.setTransform(247.5,265.3,0.669,0.669,0,0,0,31.8,-32.2);

	this.instance_10 = new lib.SwitchPBX();
	this.instance_10.setTransform(305.5,186.3,0.669,0.669,0,0,0,31.8,-32.2);

	this.instance_11 = new lib.SwitchPBX();
	this.instance_11.setTransform(362,140.3,0.669,0.669,0,0,0,31.8,-32.2);

	this.instance_12 = new lib.SwitchPBX();
	this.instance_12.setTransform(242.8,123.1,0.669,0.669,0,0,0,31.8,-32.2);

	this.instance_13 = new lib.phone_1();
	this.instance_13.setTransform(411.2,302.5,0.703,0.703,0,0,0,51.4,-28.7);

	this.instance_14 = new lib.phone_1();
	this.instance_14.setTransform(41.3,185.5,0.703,0.703,0,0,0,51.4,-28.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5}]}).wait(149));

	// Line_Hilight_5
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#F26200").ss(2,2,1).p("AgUgXIApAv");
	this.shape.setTransform(364.6,254.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#F26200").ss(2,2,1).p("AgbgfIA3A/");
	this.shape_1.setTransform(365.3,255.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#F26200").ss(2,2,1).p("AgigmIBFBN");
	this.shape_2.setTransform(366.1,256.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#F26200").ss(2,2,1).p("AgoguIBRBd");
	this.shape_3.setTransform(366.8,257.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#F26200").ss(2,2,1).p("Agvg2IBfBt");
	this.shape_4.setTransform(367.5,258.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#F26200").ss(2,2,1).p("Ag2g+IBtB9");
	this.shape_5.setTransform(368.3,259.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#F26200").ss(2,2,1).p("Ag9hFIB7CL");
	this.shape_6.setTransform(369,259.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#F26200").ss(2,2,1).p("AhDhNICHCb");
	this.shape_7.setTransform(369.7,260.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#F26200").ss(2,2,1).p("AhKhVICVCr");
	this.shape_8.setTransform(370.5,261.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#F26200").ss(2,2,1).p("AhRhdICjC7");
	this.shape_9.setTransform(371.2,262.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#F26200").ss(2,2,1).p("AhYhkICxDJ");
	this.shape_10.setTransform(371.9,263.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#F26200").ss(2,2,1).p("AhfhsIC/DZ");
	this.shape_11.setTransform(372.7,264);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#F26200").ss(2,2,1).p("Ahlh0IDLDp");
	this.shape_12.setTransform(373.4,264.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#F26200").ss(2,2,1).p("Ahsh8IDZD5");
	this.shape_13.setTransform(374.2,265.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#F26200").ss(2,2,1).p("AhziDIDnEH");
	this.shape_14.setTransform(374.9,266.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#F26200").ss(2,2,1).p("Ah6iLID1EX");
	this.shape_15.setTransform(375.6,267.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#F26200").ss(2,2,1).p("AiBiTIEDEn");
	this.shape_16.setTransform(376.4,268.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#F26200").ss(2,2,1).p("AiHibIEPE3");
	this.shape_17.setTransform(377.1,269);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#F26200").ss(2,2,1).p("AiOiiIEdFF");
	this.shape_18.setTransform(377.8,269.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#F26200").ss(2,2,1).p("AiViqIErFV");
	this.shape_19.setTransform(378.6,270.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#F26200").ss(2,2,1).p("AiciyIE5Fl");
	this.shape_20.setTransform(379.3,271.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#F26200").ss(2,2,1).p("Aiii6IFFF1");
	this.shape_21.setTransform(380,272.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#F26200").ss(2,2,1).p("AipjBIFTGD");
	this.shape_22.setTransform(380.8,273.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#F26200").ss(2,2,1).p("AiwjJIFhGT");
	this.shape_23.setTransform(381.5,274);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},121).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).wait(5));

	// Line_Hilight_4
	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#F26200").ss(2,2,1).p("AgLgRIAXAj");
	this.shape_24.setTransform(322.6,202.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#F26200").ss(2,2,1).p("AgPgWIAfAt");
	this.shape_25.setTransform(323,202.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#F26200").ss(2,2,1).p("AgSgbIAlA3");
	this.shape_26.setTransform(323.3,203.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#F26200").ss(2,2,1).p("AgWggIAtBB");
	this.shape_27.setTransform(323.7,203.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#F26200").ss(2,2,1).p("AgZglIAzBL");
	this.shape_28.setTransform(324,204.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#F26200").ss(2,2,1).p("AgdgqIA7BV");
	this.shape_29.setTransform(324.4,204.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#F26200").ss(2,2,1).p("AgggvIBBBf");
	this.shape_30.setTransform(324.7,205.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#F26200").ss(2,2,1).p("Agkg0IBJBp");
	this.shape_31.setTransform(325.1,205.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#F26200").ss(2,2,1).p("Agng5IBPBz");
	this.shape_32.setTransform(325.4,206.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#F26200").ss(2,2,1).p("Agrg+IBXB9");
	this.shape_33.setTransform(325.8,206.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#F26200").ss(2,2,1).p("AguhDIBdCH");
	this.shape_34.setTransform(326.1,207.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#F26200").ss(2,2,1).p("AgyhIIBlCR");
	this.shape_35.setTransform(326.5,207.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#F26200").ss(2,2,1).p("Ag1hNIBrCb");
	this.shape_36.setTransform(326.8,208.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#F26200").ss(2,2,1).p("Ag5hSIBzCl");
	this.shape_37.setTransform(327.2,208.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#F26200").ss(2,2,1).p("Ag8hXIB5Cv");
	this.shape_38.setTransform(327.5,209.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#F26200").ss(2,2,1).p("AhAhcICBC5");
	this.shape_39.setTransform(327.9,209.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#F26200").ss(2,2,1).p("AhDhhICHDD");
	this.shape_40.setTransform(328.2,210.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#F26200").ss(2,2,1).p("AhHhmICPDN");
	this.shape_41.setTransform(328.6,210.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#F26200").ss(2,2,1).p("AhKhrICVDX");
	this.shape_42.setTransform(328.9,211.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#F26200").ss(2,2,1).p("AhOhwICdDh");
	this.shape_43.setTransform(329.3,211.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#F26200").ss(2,2,1).p("AhRh1ICjDr");
	this.shape_44.setTransform(329.6,212.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#F26200").ss(2,2,1).p("AhVh6ICrD1");
	this.shape_45.setTransform(330,212.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#F26200").ss(2,2,1).p("AhYh/ICxD/");
	this.shape_46.setTransform(330.3,213.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#F26200").ss(2,2,1).p("AhciEIC5EJ");
	this.shape_47.setTransform(330.7,213.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#F26200").ss(2,2,1).p("AhfiJIC/ET");
	this.shape_48.setTransform(331,214.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_24}]},96).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).wait(29));

	// Line_Hilight_3
	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#F26200").ss(2,2,1).p("AgaAAIA1AA");
	this.shape_49.setTransform(227.8,177);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#F26200").ss(2,2,1).p("AgkAAIBJAA");
	this.shape_50.setTransform(228.7,177);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#F26200").ss(2,2,1).p("AguAAIBdAA");
	this.shape_51.setTransform(229.7,177);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#F26200").ss(2,2,1).p("Ag3AAIBvAA");
	this.shape_52.setTransform(230.7,177);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#F26200").ss(2,2,1).p("AhBAAICDAA");
	this.shape_53.setTransform(231.7,177);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#F26200").ss(2,2,1).p("AhLAAICXAA");
	this.shape_54.setTransform(232.6,177);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#F26200").ss(2,2,1).p("AhVAAICrAA");
	this.shape_55.setTransform(233.6,177);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#F26200").ss(2,2,1).p("AhfAAIC/AA");
	this.shape_56.setTransform(234.6,177);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#F26200").ss(2,2,1).p("AhoAAIDRAA");
	this.shape_57.setTransform(235.6,177);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#F26200").ss(2,2,1).p("AhyAAIDlAA");
	this.shape_58.setTransform(236.6,177);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#F26200").ss(2,2,1).p("Ah8AAID5AA");
	this.shape_59.setTransform(237.5,177);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#F26200").ss(2,2,1).p("AiGAAIENAA");
	this.shape_60.setTransform(238.5,177);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#F26200").ss(2,2,1).p("AiQAAIEhAA");
	this.shape_61.setTransform(239.5,177);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#F26200").ss(2,2,1).p("AiZAAIEzAA");
	this.shape_62.setTransform(240.5,177);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#F26200").ss(2,2,1).p("AijAAIFHAA");
	this.shape_63.setTransform(241.5,177);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#F26200").ss(2,2,1).p("AitAAIFbAA");
	this.shape_64.setTransform(242.4,177);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#F26200").ss(2,2,1).p("Ai3AAIFvAA");
	this.shape_65.setTransform(243.4,177);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#F26200").ss(2,2,1).p("AjBAAIGDAA");
	this.shape_66.setTransform(244.4,177);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#F26200").ss(2,2,1).p("AjKAAIGVAA");
	this.shape_67.setTransform(245.4,177);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#F26200").ss(2,2,1).p("AjUAAIGpAA");
	this.shape_68.setTransform(246.4,177);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#F26200").ss(2,2,1).p("AjeAAIG9AA");
	this.shape_69.setTransform(247.3,177);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#F26200").ss(2,2,1).p("AjoAAIHRAA");
	this.shape_70.setTransform(248.3,177);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#F26200").ss(2,2,1).p("AjyAAIHlAA");
	this.shape_71.setTransform(249.3,177);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#F26200").ss(2,2,1).p("Aj7AAIH3AA");
	this.shape_72.setTransform(250.3,177);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#F26200").ss(2,2,1).p("AkFAAIILAA");
	this.shape_73.setTransform(251.3,177);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#F26200").ss(2,2,1).p("AkPAAIIfAA");
	this.shape_74.setTransform(252.2,177);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#F26200").ss(2,2,1).p("AkZAAIIzAA");
	this.shape_75.setTransform(253.2,177);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#F26200").ss(2,2,1).p("AkjAAIJHAA");
	this.shape_76.setTransform(254.2,177);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#F26200").ss(2,2,1).p("AksAAIJZAA");
	this.shape_77.setTransform(255.2,177);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#F26200").ss(2,2,1).p("Ak2AAIJtAA");
	this.shape_78.setTransform(256.2,177);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#F26200").ss(2,2,1).p("AlAAAIKBAA");
	this.shape_79.setTransform(257.1,177);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#F26200").ss(2,2,1).p("AlKAAIKVAA");
	this.shape_80.setTransform(258.1,177);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_49}]},63).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).wait(55));

	// Line_Hilight_2
	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#F26200").ss(2,2,1).p("AgagQIA1Ah");
	this.shape_81.setTransform(166.2,151.7);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#F26200").ss(2,2,1).p("AghgUIBDAp");
	this.shape_82.setTransform(166.9,152.1);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#F26200").ss(2,2,1).p("AgngYIBPAx");
	this.shape_83.setTransform(167.5,152.5);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#F26200").ss(2,2,1).p("AgugcIBdA5");
	this.shape_84.setTransform(168.2,152.9);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#F26200").ss(2,2,1).p("Ag1ggIBrBB");
	this.shape_85.setTransform(168.9,153.3);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#F26200").ss(2,2,1).p("Ag7gkIB3BK");
	this.shape_86.setTransform(169.5,153.8);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#F26200").ss(2,2,1).p("AhCgpICFBT");
	this.shape_87.setTransform(170.2,154.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#F26200").ss(2,2,1).p("AhIgtICRBb");
	this.shape_88.setTransform(170.8,154.6);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#F26200").ss(2,2,1).p("AhPgxICfBj");
	this.shape_89.setTransform(171.5,155);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#F26200").ss(2,2,1).p("AhWg1ICtBr");
	this.shape_90.setTransform(172.2,155.4);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#F26200").ss(2,2,1).p("Ahcg5IC5Bz");
	this.shape_91.setTransform(172.8,155.8);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#F26200").ss(2,2,1).p("Ahjg9IDHB7");
	this.shape_92.setTransform(173.5,156.2);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#F26200").ss(2,2,1).p("AhqhCIDUCF");
	this.shape_93.setTransform(174.2,156.7);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#F26200").ss(2,2,1).p("AhwhGIDhCN");
	this.shape_94.setTransform(174.8,157.1);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#F26200").ss(2,2,1).p("Ah3hKIDvCV");
	this.shape_95.setTransform(175.5,157.5);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#F26200").ss(2,2,1).p("Ah9hOID7Cd");
	this.shape_96.setTransform(176.1,157.9);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#F26200").ss(2,2,1).p("AiEhSIEJCl");
	this.shape_97.setTransform(176.8,158.3);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#F26200").ss(2,2,1).p("AiLhWIEXCt");
	this.shape_98.setTransform(177.5,158.7);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#F26200").ss(2,2,1).p("AiRhaIEjC1");
	this.shape_99.setTransform(178.1,159.1);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#F26200").ss(2,2,1).p("AiYhfIExC/");
	this.shape_100.setTransform(178.8,159.6);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#F26200").ss(2,2,1).p("AifhjIE/DH");
	this.shape_101.setTransform(179.5,160);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_81}]},42).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).wait(87));

	// Line_Hilight_1
	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#F26200").ss(2,2,1).p("AgJAEIATgH");
	this.shape_102.setTransform(76.6,168.6);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#F26200").ss(2,2,1).p("AgUAJIApgR");
	this.shape_103.setTransform(77.7,168.1);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#F26200").ss(2,2,1).p("AgfANIA/gZ");
	this.shape_104.setTransform(78.8,167.6);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#F26200").ss(2,2,1).p("AgqASIBVgj");
	this.shape_105.setTransform(79.9,167.1);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#F26200").ss(2,2,1).p("Ag1AXIBrgt");
	this.shape_106.setTransform(81,166.7);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#F26200").ss(2,2,1).p("AhAAcICBg3");
	this.shape_107.setTransform(82.1,166.2);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#F26200").ss(2,2,1).p("AhLAgICXg/");
	this.shape_108.setTransform(83.2,165.7);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#F26200").ss(2,2,1).p("AhWAlICthJ");
	this.shape_109.setTransform(84.3,165.2);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#F26200").ss(2,2,1).p("AhhAqIDDhT");
	this.shape_110.setTransform(85.4,164.8);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#F26200").ss(2,2,1).p("AhsAvIDZhd");
	this.shape_111.setTransform(86.5,164.3);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#F26200").ss(2,2,1).p("Ah3AzIDvhl");
	this.shape_112.setTransform(87.6,163.8);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#F26200").ss(2,2,1).p("AiCA4IEFhv");
	this.shape_113.setTransform(88.7,163.3);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#F26200").ss(2,2,1).p("AiNA9IEbh5");
	this.shape_114.setTransform(89.8,162.9);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#F26200").ss(2,2,1).p("AiYBBIExiB");
	this.shape_115.setTransform(90.9,162.4);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#F26200").ss(2,2,1).p("AijBGIFHiL");
	this.shape_116.setTransform(92,161.9);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#F26200").ss(2,2,1).p("AiuBLIFdiV");
	this.shape_117.setTransform(93.1,161.5);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#F26200").ss(2,2,1).p("Ai6BQIF1if");
	this.shape_118.setTransform(94.2,161);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#F26200").ss(2,2,1).p("AjFBUIGLin");
	this.shape_119.setTransform(95.3,160.5);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#F26200").ss(2,2,1).p("AjQBZIGhix");
	this.shape_120.setTransform(96.4,160);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#F26200").ss(2,2,1).p("AjbBeIG3i7");
	this.shape_121.setTransform(97.5,159.6);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#F26200").ss(2,2,1).p("AjmBjIHNjF");
	this.shape_122.setTransform(98.6,159.1);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#F26200").ss(2,2,1).p("AjxBnIHjjN");
	this.shape_123.setTransform(99.7,158.6);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#F26200").ss(2,2,1).p("Aj8BsIH5jX");
	this.shape_124.setTransform(100.8,158.1);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#F26200").ss(2,2,1).p("AkHBxIIPjh");
	this.shape_125.setTransform(101.9,157.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_102}]},6).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).wait(120));

	// bg
	this.instance_15 = new lib._2_1_2_4();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_15}]}).wait(149));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.6,0,482.7,400);


(lib.Main = function() {
	this.initialize();

	// animation 1
	this.anim01 = new lib.animation01();

	this.addChild(this.anim01);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-12.6,0,482.7,400);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;