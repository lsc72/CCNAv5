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
(lib._9_2_2_4_B = function() {
	this.initialize(img._9_2_2_4_B);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,653,556);


(lib.text_slide3 = function() {
	this.initialize();

	// Layer 1
	//this.text = new cjs.Text("ID_s3_txt04", "bold 11px Arial", "#F68026");
	this.text = new DOMObject({type:"TEXT" , compId:"ID_s3_txt04", width:"104",  size:"11", expand:"down",align:"center",class:"orangeCallOut" }); 


	this.text.setTransform(6,68);

	//this.text_1 = new cjs.Text("ID_s3_txt03", "bold 11px Arial", "#F68026");
	this.text_1 = new DOMObject({type:"TEXT" , compId:"ID_s3_txt03", width:"104",  size:"11", expand:"up",align:"center",class:"orangeCallOut" }); 

 	this.text_1.setTransform(6,-7);

	this.addChild(this.text_1,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,71.2,90.4);


(lib.text_slide2b = function() {
	this.initialize();

	// Layer 1
	//this.text_2 = new cjs.Text("ID_s2_txt04", "bold 11px Arial", "#E31C23");
	this.text_2 = new DOMObject({type:"TEXT" , compId:"ID_s2_txt04", width:"104",  size:"11", expand:"down",align:"center",class:"orangeCallOut" }); 

 

	this.addChild(this.text_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,65.2,16.6);


(lib.text_slide2 = function() {
	this.initialize();

	// Layer 1
//	this.text_3 = new cjs.Text("ID_s2_txt03", "bold 11px Arial", "#E31C23");
	this.text_3 = new DOMObject({type:"TEXT" , compId:"ID_s2_txt03", width:"104",  size:"11", expand:"down",align:"center",class:"orangeCallOut" }); 


	this.addChild(this.text_3);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,65.2,16.6);


(lib.Arrow = function() {
	this.initialize();

	// shape
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F68026").s().p("AgxAhIAighIgiggIBjAgIhjAh").cp();
	this.shape.setTransform(5,0);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-3.2,10,6.7);


(lib.animation03 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{},true);

	// lazytext_animated
	this.instance = new lib.text_slide3();
	this.instance.setTransform(212.8,230.6,1,1,0,0,0,52,43.3);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({alpha:1},10).wait(42));

	// labels
	//this.text_4 = new cjs.Text("ID_s3_txt02", "bold 11px Arial", "#F68026");
	this.text_4 = new DOMObject({type:"TEXT" , compId:"ID_s3_txt02", width:"104",  size:"11", expand:"down",align:"center" }); 

	this.text_4.setTransform(290,247);

	//this.text_5 = new cjs.Text("ID_s3_txt01", "bold 11px Arial", "#F68026");
	this.text_5 = new DOMObject({type:"TEXT" , compId:"ID_s3_txt01", width:"104",  size:"11", expand:"down",align:"center" }); 

	this.text_5.setTransform(32,264);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_5},{t:this.text_4}]}).wait(56));

	// Arrowhead
	this.instance_1 = new lib.Arrow();
	this.instance_1.setTransform(272.6,241.7,2,2,180,0,0,5,0);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).to({alpha:1},10).to({x:126.7,y:241.8},30).wait(12));

	// Arrowline
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().ls(["rgba(255,255,255,0)","#FFFFFF"],[0,1],13.9,0,-13.8,0).ss(2,1,1).p("ACBAAIkBAA");
	this.shape_1.setTransform(286.3,241.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().ls(["#FFFFFF","#FEF2E9"],[0,1],13.9,0,-13.8,0).ss(2,1,1).p("AiAAAIEBAA");
	this.shape_2.setTransform(286.6,241.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().ls(["#FFFFFF","#FDE6D4"],[0,1],13.9,0,-13.8,0).ss(2,1,1).p("AiAAAIEBAA");
	this.shape_3.setTransform(286.9,241.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().ls(["#FFFFFF","#FCD9BE"],[0,1],13.9,0,-13.8,0).ss(2,1,1).p("AiAAAIEBAA");
	this.shape_4.setTransform(287.2,241.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().ls(["#FFFFFF","#FBCCA8"],[0,1],13.9,0,-13.8,0).ss(2,1,1).p("AiAAAIEBAA");
	this.shape_5.setTransform(287.4,241.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().ls(["#FFFFFF","#FBBF92"],[0,1],13.9,0,-13.8,0).ss(2,1,1).p("AiAAAIEBAA");
	this.shape_6.setTransform(287.7,241.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().ls(["#FFFFFF","#FAB37D"],[0,1],13.9,0,-13.8,0).ss(2,1,1).p("AiAAAIEBAA");
	this.shape_7.setTransform(288,241.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().ls(["#FFFFFF","#F9A667"],[0,1],13.9,0,-13.8,0).ss(2,1,1).p("AiAAAIEBAA");
	this.shape_8.setTransform(288.3,241.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().ls(["#FFFFFF","#F89951"],[0,1],13.9,0,-13.8,0).ss(2,1,1).p("AiAAAIEBAA");
	this.shape_9.setTransform(288.6,241.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().ls(["#FFFFFF","#F78D3C"],[0,1],13.9,0,-13.8,0).ss(2,1,1).p("AiAAAIEBAA");
	this.shape_10.setTransform(288.8,241.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().ls(["#FFFFFF","#F68026"],[0,1],13.9,0,-13.8,0).ss(2,1,1).p("ACBAAIkBAA");
	this.shape_11.setTransform(289.1,241.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().ls(["#FFFFFF","#F68026"],[0,1],19.7,0,-14.4,0).ss(2,1,1).p("AiXAAIEvAA");
	this.shape_12.setTransform(286.5,241.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().ls(["#FFFFFF","#F68026"],[0,1],25.5,0,-15.1,0).ss(2,1,1).p("AivAAIFeAA");
	this.shape_13.setTransform(283.8,241.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().ls(["#FFFFFF","#F68026"],[0,1],31.2,0,-15.8,0).ss(2,1,1).p("AjGAAIGNAA");
	this.shape_14.setTransform(281.2,241.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().ls(["#FFFFFF","#F68026"],[0,1],37,0,-16.4,0).ss(2,1,1).p("AjdAAIG7AA");
	this.shape_15.setTransform(278.5,241.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().ls(["#FFFFFF","#F68026"],[0,1],42.7,0,-17.1,0).ss(2,1,1).p("Aj1AAIHrAA");
	this.shape_16.setTransform(275.9,241.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().ls(["#FFFFFF","#F68026"],[0,1],48.5,0,-17.7,0).ss(2,1,1).p("AkMAAIIZAA");
	this.shape_17.setTransform(273.2,241.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().ls(["#FFFFFF","#F68026"],[0,1],54.3,0,-18.4,0).ss(2,1,1).p("AkjAAIJHAA");
	this.shape_18.setTransform(270.6,241.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().ls(["#FFFFFF","#F68026"],[0,1],60,0,-19.1,0).ss(2,1,1).p("Ak7AAIJ3AA");
	this.shape_19.setTransform(267.9,241.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().ls(["#FFFFFF","#F68026"],[0,1],65.8,0,-19.7,0).ss(2,1,1).p("AlSAAIKlAA");
	this.shape_20.setTransform(265.3,241.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().ls(["#FFFFFF","#F68026"],[0,1],71.5,0,-20.4,0).ss(2,1,1).p("AlpAAILUAA");
	this.shape_21.setTransform(262.7,241.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().ls(["#FFFFFF","#F68026"],[0,1],77.3,0,-21.1,0).ss(2,1,1).p("AmBAAIMDAA");
	this.shape_22.setTransform(260,241.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().ls(["#FFFFFF","#F68026"],[0,1],83,0,-21.7,0).ss(2,1,1).p("AmYAAIMxAA");
	this.shape_23.setTransform(257.4,241.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().ls(["#FFFFFF","#F68026"],[0,1],88.8,0,-22.4,0).ss(2,1,1).p("AmwAAINhAA");
	this.shape_24.setTransform(254.7,241.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().ls(["#FFFFFF","#F68026"],[0,1],94.5,0,-23.1,0).ss(2,1,1).p("AnHAAIOPAA");
	this.shape_25.setTransform(252.1,241.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().ls(["#FFFFFF","#F68026"],[0,1],100.3,0,-23.7,0).ss(2,1,1).p("AneAAIO9AA");
	this.shape_26.setTransform(249.4,241.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().ls(["#FFFFFF","#F68026"],[0,1],106,0,-24.4,0).ss(2,1,1).p("An2AAIPtAA");
	this.shape_27.setTransform(246.8,241.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().ls(["#FFFFFF","#F68026"],[0,1],111.8,0,-25,0).ss(2,1,1).p("AoNAAIQbAA");
	this.shape_28.setTransform(244.1,241.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().ls(["#FFFFFF","#F68026"],[0,1],117.6,0,-25.7,0).ss(2,1,1).p("AolAAIRLAA");
	this.shape_29.setTransform(241.5,241.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().ls(["#FFFFFF","#F68026"],[0,1],123.3,0,-26.4,0).ss(2,1,1).p("Ao8AAIR5AA");
	this.shape_30.setTransform(238.8,241.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().ls(["#FFFFFF","#F68026"],[0,1],129.1,0,-27,0).ss(2,1,1).p("ApTAAISnAA");
	this.shape_31.setTransform(236.2,241.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().ls(["#FFFFFF","#F68026"],[0,1],134.8,0,-27.7,0).ss(2,1,1).p("AprAAITXAA");
	this.shape_32.setTransform(233.5,241.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().ls(["#FFFFFF","#F68026"],[0,1],140.6,0,-28.3,0).ss(2,1,1).p("AqCAAIUFAA");
	this.shape_33.setTransform(230.9,241.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().ls(["#FFFFFF","#F68026"],[0,1],146.4,0,-29,0).ss(2,1,1).p("AqZAAIUzAA");
	this.shape_34.setTransform(228.2,241.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().ls(["#FFFFFF","#F68026"],[0,1],152.1,0,-29.7,0).ss(2,1,1).p("AqxAAIVjAA");
	this.shape_35.setTransform(225.6,241.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().ls(["#FFFFFF","#F68026"],[0,1],157.9,0,-30.3,0).ss(2,1,1).p("ArIAAIWRAA");
	this.shape_36.setTransform(222.9,241.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().ls(["#FFFFFF","#F68026"],[0,1],163.6,0,-31,0).ss(2,1,1).p("ArgAAIXAAA");
	this.shape_37.setTransform(220.3,241.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().ls(["#FFFFFF","#F68026"],[0,1],169.4,0,-31.6,0).ss(2,1,1).p("Ar3AAIXvAA");
	this.shape_38.setTransform(217.6,241.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().ls(["#FFFFFF","#F68026"],[0,1],175.2,0,-32.3,0).ss(2,1,1).p("AsOAAIYdAA");
	this.shape_39.setTransform(215,241.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().ls(["#FFFFFF","#F68026"],[0,1],180.9,0,-33,0).ss(2,1,1).p("AsmAAIZNAA");
	this.shape_40.setTransform(212.3,241.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().ls(["#FFFFFF","#F68026"],[0,1],186.7,0.1,-33.6,0.1).ss(2,1,1).p("AM+AAI57AA");
	this.shape_41.setTransform(209.7,241.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1}]},4).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).wait(12));

	// Arrowhead
	this.instance_2 = new lib.Arrow();
	this.instance_2.setTransform(141.1,216.9,2,2,0,0,0,5,0);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(3).to({_off:false},0).to({alpha:1},10).to({x:301.7},30).wait(13));

	// Arrowline
	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().ls(["rgba(255,255,255,0)","#FFFFFF"],[0,1],-13.8,0,13.9,0).ss(2,1,1).p("AiAAAIEBAA");
	this.shape_42.setTransform(128.2,216.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().ls(["#FFFFFF","#FEF2E9"],[0,1],-13.8,0,13.9,0).ss(2,1,1).p("AiAAAIEBAA");
	this.shape_43.setTransform(128.2,216.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().ls(["#FFFFFF","#FDE6D4"],[0,1],-13.8,0,13.9,0).ss(2,1,1).p("AiAAAIEBAA");
	this.shape_44.setTransform(128.2,216.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().ls(["#FFFFFF","#FCD9BE"],[0,1],-13.8,0,13.9,0).ss(2,1,1).p("AiAAAIEBAA");
	this.shape_45.setTransform(128.2,216.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().ls(["#FFFFFF","#FBCCA8"],[0,1],-13.8,0,13.9,0).ss(2,1,1).p("AiAAAIEBAA");
	this.shape_46.setTransform(128.2,216.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().ls(["#FFFFFF","#FBBF92"],[0,1],-13.8,0,13.9,0).ss(2,1,1).p("AiAAAIEBAA");
	this.shape_47.setTransform(128.2,216.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().ls(["#FFFFFF","#FAB37D"],[0,1],-13.8,0,13.9,0).ss(2,1,1).p("AiAAAIEBAA");
	this.shape_48.setTransform(128.2,216.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().ls(["#FFFFFF","#F9A667"],[0,1],-13.8,0,13.9,0).ss(2,1,1).p("AiAAAIEBAA");
	this.shape_49.setTransform(128.2,216.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().ls(["#FFFFFF","#F89951"],[0,1],-13.8,0,13.9,0).ss(2,1,1).p("AiAAAIEBAA");
	this.shape_50.setTransform(128.2,216.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().ls(["#FFFFFF","#F78D3C"],[0,1],-13.8,0,13.9,0).ss(2,1,1).p("AiAAAIEBAA");
	this.shape_51.setTransform(128.2,216.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().ls(["#FFFFFF","#F68026"],[0,1],-13.8,0,13.9,0).ss(2,1,1).p("AiAAAIEBAA");
	this.shape_52.setTransform(128.2,216.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().ls(["#FFFFFF","#F68026"],[0,1],-17.1,0.1,14.4,0.1).ss(2,1,1).p("AiYAAIExAA");
	this.shape_53.setTransform(131.1,216.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().ls(["#FFFFFF","#F68026"],[0,1],-20.5,0.3,14.7,0.3).ss(2,1,1).p("AixAAIFjAA");
	this.shape_54.setTransform(134,216.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().ls(["#FFFFFF","#F68026"],[0,1],-23.8,0.4,15.1,0.4).ss(2,1,1).p("AjJAAIGTAA");
	this.shape_55.setTransform(136.9,216.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().ls(["#FFFFFF","#F68026"],[0,1],-27.1,0.6,15.5,0.6).ss(2,1,1).p("AjiAAIHFAA");
	this.shape_56.setTransform(139.8,216.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().ls(["#FFFFFF","#F68026"],[0,1],-30.4,0.7,15.9,0.7).ss(2,1,1).p("Aj6AAIH1AA");
	this.shape_57.setTransform(142.7,216.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().ls(["#FFFFFF","#F68026"],[0,1],-33.7,0.9,16.3,0.9).ss(2,1,1).p("AkTAAIInAA");
	this.shape_58.setTransform(145.6,216.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().ls(["#FFFFFF","#F68026"],[0,1],-37.1,1,16.7,1).ss(2,1,1).p("AkrAAIJXAA");
	this.shape_59.setTransform(148.5,216.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().ls(["#FFFFFF","#F68026"],[0,1],-40.4,1.2,17.1,1.2).ss(2,1,1).p("AlEAAIKJAA");
	this.shape_60.setTransform(151.4,216.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().ls(["#FFFFFF","#F68026"],[0,1],-43.8,1.3,17.4,1.3).ss(2,1,1).p("AldAAIK7AA");
	this.shape_61.setTransform(154.3,216.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().ls(["#FFFFFF","#F68026"],[0,1],-47.1,1.5,17.8,1.5).ss(2,1,1).p("Al1AAILrAA");
	this.shape_62.setTransform(157.2,216.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().ls(["#FFFFFF","#F68026"],[0,1],-50.4,1.6,18.2,1.6).ss(2,1,1).p("AmOAAIMdAA");
	this.shape_63.setTransform(160.1,216.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().ls(["#FFFFFF","#F68026"],[0,1],-53.7,1.8,18.6,1.8).ss(2,1,1).p("AmmAAINNAA");
	this.shape_64.setTransform(163,216.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().ls(["#FFFFFF","#F68026"],[0,1],-57,1.9,19,1.9).ss(2,1,1).p("Am/AAIN/AA");
	this.shape_65.setTransform(165.9,216.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().ls(["#FFFFFF","#F68026"],[0,1],-60.4,2.1,19.4,2.1).ss(2,1,1).p("AnXAAIOvAA");
	this.shape_66.setTransform(168.8,216.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().ls(["#FFFFFF","#F68026"],[0,1],-63.7,2.2,19.8,2.2).ss(2,1,1).p("AnwAAIPhAA");
	this.shape_67.setTransform(171.7,216.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().ls(["#FFFFFF","#F68026"],[0,1],-67,2.4,20.2,2.4).ss(2,1,1).p("AoIAAIQRAA");
	this.shape_68.setTransform(174.6,216.9);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().ls(["#FFFFFF","#F68026"],[0,1],-70.4,2.5,20.5,2.5).ss(2,1,1).p("AohAAIRDAA");
	this.shape_69.setTransform(177.5,216.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().ls(["#FFFFFF","#F68026"],[0,1],-73.7,2.7,20.9,2.7).ss(2,1,1).p("Ao5AAIRzAA");
	this.shape_70.setTransform(180.4,216.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().ls(["#FFFFFF","#F68026"],[0,1],-77,2.8,21.3,2.8).ss(2,1,1).p("ApSAAISlAA");
	this.shape_71.setTransform(183.3,216.9);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().ls(["#FFFFFF","#F68026"],[0,1],-80.3,3,21.7,3).ss(2,1,1).p("ApqAAITVAA");
	this.shape_72.setTransform(186.2,216.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().ls(["#FFFFFF","#F68026"],[0,1],-83.6,3.1,22.1,3.1).ss(2,1,1).p("AqDAAIUHAA");
	this.shape_73.setTransform(189.1,216.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().ls(["#FFFFFF","#F68026"],[0,1],-87,3.3,22.5,3.3).ss(2,1,1).p("AqbAAIU3AA");
	this.shape_74.setTransform(192,216.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().ls(["#FFFFFF","#F68026"],[0,1],-90.3,3.4,22.9,3.4).ss(2,1,1).p("Aq0AAIVpAA");
	this.shape_75.setTransform(194.9,216.9);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().ls(["#FFFFFF","#F68026"],[0,1],-93.7,3.6,23.2,3.6).ss(2,1,1).p("ArNAAIWbAA");
	this.shape_76.setTransform(197.8,216.9);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().ls(["#FFFFFF","#F68026"],[0,1],-97,3.7,23.6,3.7).ss(2,1,1).p("ArlAAIXLAA");
	this.shape_77.setTransform(200.7,216.9);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().ls(["#FFFFFF","#F68026"],[0,1],-100.3,3.9,24,3.9).ss(2,1,1).p("Ar+AAIX9AA");
	this.shape_78.setTransform(203.6,216.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().ls(["#FFFFFF","#F68026"],[0,1],-103.6,4,24.4,4).ss(2,1,1).p("AsWAAIYtAA");
	this.shape_79.setTransform(206.5,216.9);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().ls(["#FFFFFF","#F68026"],[0,1],-106.9,4.2,24.8,4.2).ss(2,1,1).p("AsvAAIZfAA");
	this.shape_80.setTransform(209.4,216.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().ls(["#FFFFFF","#F68026"],[0,1],-110.3,4.3,25.2,4.3).ss(2,1,1).p("AtHAAIaPAA");
	this.shape_81.setTransform(212.3,216.9);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().ls(["#FFFFFF","#F68026"],[0,1],-113.6,4.5,25.6,4.5).ss(2,1,1).p("ANhAAI7BAA");
	this.shape_82.setTransform(215.2,216.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_42}]},3).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).wait(13));

	// bg
	this.instance_3 = new lib._9_2_2_4_B();
	this.instance_3.setTransform(0,30,0.72,0.719);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).wait(56));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,30,470,400);


(lib.animation02 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{},true);

	// lazytext_animated
	this.instance_4 = new lib.text_slide2b();
	this.instance_4.setTransform(168,226,1,1,0,0,0,52,43.3);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(92).to({alpha:1},10).wait(61).to({alpha:0},10).wait(1));

	// lazytext_animated
	this.instance_5 = new lib.text_slide2();
	this.instance_5.setTransform(168,226,1,1,0,0,0,52,43.3);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(4).to({alpha:1},10).wait(40).to({alpha:0},10).wait(110));

	// icons
	//this.text_6 = new cjs.Text("ID_s2_txt02", "bold 11px Arial", "#E31C23");
	this.text_6 = new DOMObject({type:"TEXT" , compId:"ID_s2_txt02", width:"104",  size:"11", expand:"down",align:"center" }); 

	this.text_6.setTransform(290,247);

	//this.text_7 = new cjs.Text("ID_s2_txt01", "bold 11px Arial", "#E31C23");
	this.text_7 = new DOMObject({type:"TEXT" , compId:"ID_s2_txt01", width:"104",  size:"11", expand:"down",align:"center" }); 

	this.text_7.setTransform(32,264);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_7},{t:this.text_6}]}).wait(174));

	// Arrowhead
	this.instance_6 = new lib.Arrow();
	this.instance_6.setTransform(272.6,217.1,2,2,180,0,0,5,0);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(4).to({alpha:1},10).to({x:126.7,y:217.2},30).wait(10).to({alpha:0},10).to({_off:true},1).wait(27).to({rotation:0,skewX:180,x:155.7,_off:false},0).to({alpha:1},10).to({x:308.2},30).wait(31).to({alpha:0},10).wait(1));

	// Arrowline
	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#FFFFFF").ss(2,1,1).p("ADEAAImIAA");
	this.shape_83.setTransform(293.9,217.1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().ls(["#FFFFFF","#FEF2E9"],[0,1],21.3,0,-21,0).ss(2,1,1).p("AjDAAIGHAA");
	this.shape_84.setTransform(293.9,217.1);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().ls(["#FFFFFF","#FDE6D4"],[0,1],21.3,0,-21,0).ss(2,1,1).p("AjDAAIGHAA");
	this.shape_85.setTransform(293.9,217.1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().ls(["#FFFFFF","#FCD9BE"],[0,1],21.3,0,-21,0).ss(2,1,1).p("AjDAAIGHAA");
	this.shape_86.setTransform(293.9,217.1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().ls(["#FFFFFF","#FBCCA8"],[0,1],21.3,0,-21,0).ss(2,1,1).p("AjDAAIGHAA");
	this.shape_87.setTransform(293.9,217.1);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().ls(["#FFFFFF","#FBBF92"],[0,1],21.3,0,-21,0).ss(2,1,1).p("AjDAAIGHAA");
	this.shape_88.setTransform(293.9,217.1);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().ls(["#FFFFFF","#FAB37D"],[0,1],21.3,0,-21,0).ss(2,1,1).p("AjDAAIGHAA");
	this.shape_89.setTransform(293.9,217.1);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().ls(["#FFFFFF","#F9A667"],[0,1],21.3,0,-21,0).ss(2,1,1).p("AjDAAIGHAA");
	this.shape_90.setTransform(293.9,217.1);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().ls(["#FFFFFF","#F89951"],[0,1],21.3,0,-21,0).ss(2,1,1).p("AjDAAIGHAA");
	this.shape_91.setTransform(293.9,217.1);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().ls(["#FFFFFF","#F78D3C"],[0,1],21.3,0,-21,0).ss(2,1,1).p("AjDAAIGHAA");
	this.shape_92.setTransform(293.9,217.1);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().ls(["#FFFFFF","#F68026"],[0,1],21.3,0,-21,0).ss(2,1,1).p("ADEAAImIAA");
	this.shape_93.setTransform(293.9,217.1);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().ls(["#FFFFFF","#F68026"],[0,1],27.5,0,-21.6,0).ss(2,1,1).p("AjcAAIG5AA");
	this.shape_94.setTransform(291.4,217.1);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().ls(["#FFFFFF","#F68026"],[0,1],33.7,0,-22.1,0).ss(2,1,1).p("Aj0AAIHpAA");
	this.shape_95.setTransform(288.9,217.1);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().ls(["#FFFFFF","#F68026"],[0,1],39.9,0,-22.7,0).ss(2,1,1).p("AkMAAIIZAA");
	this.shape_96.setTransform(286.5,217.1);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().ls(["#FFFFFF","#F68026"],[0,1],46.1,0,-23.2,0).ss(2,1,1).p("AkkAAIJJAA");
	this.shape_97.setTransform(284,217.1);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().ls(["#FFFFFF","#F68026"],[0,1],52.3,0,-23.8,0).ss(2,1,1).p("Ak8AAIJ5AA");
	this.shape_98.setTransform(281.5,217.1);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().ls(["#FFFFFF","#F68026"],[0,1],58.5,0,-24.3,0).ss(2,1,1).p("AlVAAIKrAA");
	this.shape_99.setTransform(279.1,217.1);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().ls(["#FFFFFF","#F68026"],[0,1],64.7,0,-24.8,0).ss(2,1,1).p("AltAAILbAA");
	this.shape_100.setTransform(276.6,217.1);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().ls(["#FFFFFF","#F68026"],[0,1],70.9,0,-25.4,0).ss(2,1,1).p("AmFAAIMLAA");
	this.shape_101.setTransform(274.2,217.1);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().ls(["#FFFFFF","#F68026"],[0,1],77.1,0,-25.9,0).ss(2,1,1).p("AmdAAIM7AA");
	this.shape_102.setTransform(271.7,217.1);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().ls(["#FFFFFF","#F68026"],[0,1],83.3,0,-26.5,0).ss(2,1,1).p("Am1AAINrAA");
	this.shape_103.setTransform(269.2,217.1);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().ls(["#FFFFFF","#F68026"],[0,1],89.5,0,-27,0).ss(2,1,1).p("AnOAAIOdAA");
	this.shape_104.setTransform(266.8,217.1);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().ls(["#FFFFFF","#F68026"],[0,1],95.7,0,-27.6,0).ss(2,1,1).p("AnmAAIPNAA");
	this.shape_105.setTransform(264.3,217.1);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().ls(["#FFFFFF","#F68026"],[0,1],101.9,0,-28.1,0).ss(2,1,1).p("An+AAIP9AA");
	this.shape_106.setTransform(261.8,217.1);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().ls(["#FFFFFF","#F68026"],[0,1],108.1,0,-28.7,0).ss(2,1,1).p("AoWAAIQtAA");
	this.shape_107.setTransform(259.4,217.1);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().ls(["#FFFFFF","#F68026"],[0,1],114.3,0,-29.2,0).ss(2,1,1).p("AouAAIRdAA");
	this.shape_108.setTransform(256.9,217.1);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().ls(["#FFFFFF","#F68026"],[0,1],120.5,0,-29.8,0).ss(2,1,1).p("ApHAAISPAA");
	this.shape_109.setTransform(254.5,217.1);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().ls(["#FFFFFF","#F68026"],[0,1],126.7,0,-30.3,0).ss(2,1,1).p("ApfAAIS/AA");
	this.shape_110.setTransform(252,217.1);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().ls(["#FFFFFF","#F68026"],[0,1],132.9,0,-30.8,0).ss(2,1,1).p("Ap3AAITvAA");
	this.shape_111.setTransform(249.5,217.1);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().ls(["#FFFFFF","#F68026"],[0,1],139.1,0,-31.4,0).ss(2,1,1).p("AqPAAIUfAA");
	this.shape_112.setTransform(247.1,217.1);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().ls(["#FFFFFF","#F68026"],[0,1],145.3,0,-31.9,0).ss(2,1,1).p("AqnAAIVPAA");
	this.shape_113.setTransform(244.6,217.1);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().ls(["#FFFFFF","#F68026"],[0,1],151.5,0,-32.5,0).ss(2,1,1).p("ArAAAIWBAA");
	this.shape_114.setTransform(242.1,217.1);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().ls(["#FFFFFF","#F68026"],[0,1],157.7,0,-33,0).ss(2,1,1).p("ArYAAIWxAA");
	this.shape_115.setTransform(239.7,217.1);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().ls(["#FFFFFF","#F68026"],[0,1],163.9,0,-33.6,0).ss(2,1,1).p("ArwAAIXhAA");
	this.shape_116.setTransform(237.2,217.1);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().ls(["#FFFFFF","#F68026"],[0,1],170.1,0,-34.1,0).ss(2,1,1).p("AsIAAIYRAA");
	this.shape_117.setTransform(234.8,217.1);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().ls(["#FFFFFF","#F68026"],[0,1],176.3,0,-34.7,0).ss(2,1,1).p("AsgAAIZBAA");
	this.shape_118.setTransform(232.3,217.1);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().ls(["#FFFFFF","#F68026"],[0,1],182.5,0,-35.2,0).ss(2,1,1).p("As4AAIZxAA");
	this.shape_119.setTransform(229.8,217.1);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().ls(["#FFFFFF","#F68026"],[0,1],188.7,0,-35.8,0).ss(2,1,1).p("AtRAAIajAA");
	this.shape_120.setTransform(227.4,217.1);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().ls(["#FFFFFF","#F68026"],[0,1],194.9,0,-36.3,0).ss(2,1,1).p("AtpAAIbTAA");
	this.shape_121.setTransform(224.9,217.1);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().ls(["#FFFFFF","#F68026"],[0,1],201.1,0,-36.9,0).ss(2,1,1).p("AuBAAIcDAA");
	this.shape_122.setTransform(222.4,217.1);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().ls(["#FFFFFF","#F68026"],[0,1],207.3,0.1,-37.4,0.1).ss(2,1,1).p("AOaAAI8zAA");
	this.shape_123.setTransform(220,217.1);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().ls(["#FFFFFF","#F78D3C"],[0,1],207.3,0.1,-37.4,0.1).ss(2,1,1).p("AuZAAIczAA");
	this.shape_124.setTransform(220,217.1);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().ls(["#FFFFFF","#F89951"],[0,1],207.3,0.1,-37.4,0.1).ss(2,1,1).p("AuZAAIczAA");
	this.shape_125.setTransform(220,217.1);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().ls(["#FFFFFF","#F9A667"],[0,1],207.3,0.1,-37.4,0.1).ss(2,1,1).p("AuZAAIczAA");
	this.shape_126.setTransform(220,217.1);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().ls(["#FFFFFF","#FAB37D"],[0,1],207.3,0.1,-37.4,0.1).ss(2,1,1).p("AuZAAIczAA");
	this.shape_127.setTransform(220,217.1);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().ls(["#FFFFFF","#FBBF92"],[0,1],207.3,0.1,-37.4,0.1).ss(2,1,1).p("AuZAAIczAA");
	this.shape_128.setTransform(220,217.1);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().ls(["#FFFFFF","#FBCCA8"],[0,1],207.3,0.1,-37.4,0.1).ss(2,1,1).p("AuZAAIczAA");
	this.shape_129.setTransform(220,217.1);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().ls(["#FFFFFF","#FCD9BE"],[0,1],207.3,0.1,-37.4,0.1).ss(2,1,1).p("AuZAAIczAA");
	this.shape_130.setTransform(220,217.1);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().ls(["#FFFFFF","#FDE6D4"],[0,1],207.3,0.1,-37.4,0.1).ss(2,1,1).p("AuZAAIczAA");
	this.shape_131.setTransform(220,217.1);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().ls(["#FFFFFF","#FEF2E9"],[0,1],207.3,0.1,-37.4,0.1).ss(2,1,1).p("AuZAAIczAA");
	this.shape_132.setTransform(220,217.1);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("#FFFFFF").ss(2,1,1).p("AOaAAI8zAA");
	this.shape_133.setTransform(220,217.1);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().ls(["#FFFFFF","#FEF2E9"],[0,1],-21.1,0,21.2,0).ss(2,1,1).p("AjEAAIGJAA");
	this.shape_134.setTransform(137.9,217.1);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f().ls(["#FFFFFF","#FDE6D4"],[0,1],-21.1,0,21.2,0).ss(2,1,1).p("AjEAAIGJAA");
	this.shape_135.setTransform(137.9,217.1);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().ls(["#FFFFFF","#FCD9BE"],[0,1],-21.1,0,21.2,0).ss(2,1,1).p("AjEAAIGJAA");
	this.shape_136.setTransform(137.9,217.1);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f().ls(["#FFFFFF","#FBCCA8"],[0,1],-21.1,0,21.2,0).ss(2,1,1).p("AjEAAIGJAA");
	this.shape_137.setTransform(137.9,217.1);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().ls(["#FFFFFF","#FBBF92"],[0,1],-21.1,0,21.2,0).ss(2,1,1).p("AjEAAIGJAA");
	this.shape_138.setTransform(137.9,217.1);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f().ls(["#FFFFFF","#FAB37D"],[0,1],-21.1,0,21.2,0).ss(2,1,1).p("AjEAAIGJAA");
	this.shape_139.setTransform(137.9,217.1);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().ls(["#FFFFFF","#F9A667"],[0,1],-21.1,0,21.2,0).ss(2,1,1).p("AjEAAIGJAA");
	this.shape_140.setTransform(137.9,217.1);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f().ls(["#FFFFFF","#F89951"],[0,1],-21.1,0,21.2,0).ss(2,1,1).p("AjEAAIGJAA");
	this.shape_141.setTransform(137.9,217.1);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().ls(["#FFFFFF","#F78D3C"],[0,1],-21.1,0,21.2,0).ss(2,1,1).p("AjEAAIGJAA");
	this.shape_142.setTransform(137.9,217.1);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f().ls(["#FFFFFF","#F68026"],[0,1],-21.1,0,21.2,0).ss(2,1,1).p("AjEAAIGIAA");
	this.shape_143.setTransform(137.9,217.1);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().ls(["#FFFFFF","#F68026"],[0,1],-27.4,0,21.7,0).ss(2,1,1).p("AjcAAIG5AA");
	this.shape_144.setTransform(140.4,217.1);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f().ls(["#FFFFFF","#F68026"],[0,1],-33.6,0,22.2,0).ss(2,1,1).p("Aj1AAIHrAA");
	this.shape_145.setTransform(142.8,217.1);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().ls(["#FFFFFF","#F68026"],[0,1],-39.9,0,22.7,0).ss(2,1,1).p("AkOAAIIdAA");
	this.shape_146.setTransform(145.3,217.1);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f().ls(["#FFFFFF","#F68026"],[0,1],-46.1,0,23.2,0).ss(2,1,1).p("AkmAAIJNAA");
	this.shape_147.setTransform(147.8,217.1);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f().ls(["#FFFFFF","#F68026"],[0,1],-52.4,0,23.7,0).ss(2,1,1).p("Ak/AAIJ/AA");
	this.shape_148.setTransform(150.3,217.1);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f().ls(["#FFFFFF","#F68026"],[0,1],-58.7,0,24.1,0).ss(2,1,1).p("AlYAAIKxAA");
	this.shape_149.setTransform(152.7,217.1);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f().ls(["#FFFFFF","#F68026"],[0,1],-64.9,0,24.7,0).ss(2,1,1).p("AlxAAILjAA");
	this.shape_150.setTransform(155.2,217.1);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f().ls(["#FFFFFF","#F68026"],[0,1],-71.2,0,25.1,0).ss(2,1,1).p("AmJAAIMTAA");
	this.shape_151.setTransform(157.7,217.1);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f().ls(["#FFFFFF","#F68026"],[0,1],-77.4,0,25.6,0).ss(2,1,1).p("AmiAAINFAA");
	this.shape_152.setTransform(160.2,217.1);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f().ls(["#FFFFFF","#F68026"],[0,1],-83.7,0,26.1,0).ss(2,1,1).p("Am7AAIN3AA");
	this.shape_153.setTransform(162.6,217.1);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f().ls(["#FFFFFF","#F68026"],[0,1],-89.9,0,26.6,0).ss(2,1,1).p("AnUAAIOpAA");
	this.shape_154.setTransform(165.1,217.1);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f().ls(["#FFFFFF","#F68026"],[0,1],-96.2,0,27.1,0).ss(2,1,1).p("AnsAAIPZAA");
	this.shape_155.setTransform(167.6,217.1);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f().ls(["#FFFFFF","#F68026"],[0,1],-102.4,0,27.6,0).ss(2,1,1).p("AoFAAIQLAA");
	this.shape_156.setTransform(170.1,217.1);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f().ls(["#FFFFFF","#F68026"],[0,1],-108.7,0,28.1,0).ss(2,1,1).p("AoeAAIQ9AA");
	this.shape_157.setTransform(172.5,217.1);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f().ls(["#FFFFFF","#F68026"],[0,1],-115,0,28.5,0).ss(2,1,1).p("Ao3AAIRvAA");
	this.shape_158.setTransform(175,217.1);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f().ls(["#FFFFFF","#F68026"],[0,1],-121.2,0,29.1,0).ss(2,1,1).p("ApPAAISfAA");
	this.shape_159.setTransform(177.5,217.1);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f().ls(["#FFFFFF","#F68026"],[0,1],-127.5,0,29.5,0).ss(2,1,1).p("ApoAAITRAA");
	this.shape_160.setTransform(179.9,217.1);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f().ls(["#FFFFFF","#F68026"],[0,1],-133.7,0,30,0).ss(2,1,1).p("AqBAAIUDAA");
	this.shape_161.setTransform(182.4,217.1);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f().ls(["#FFFFFF","#F68026"],[0,1],-140,0,30.5,0).ss(2,1,1).p("AqZAAIUzAA");
	this.shape_162.setTransform(184.9,217.1);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f().ls(["#FFFFFF","#F68026"],[0,1],-146.2,0,31,0).ss(2,1,1).p("AqyAAIVlAA");
	this.shape_163.setTransform(187.4,217.1);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f().ls(["#FFFFFF","#F68026"],[0,1],-152.5,0,31.5,0).ss(2,1,1).p("ArLAAIWXAA");
	this.shape_164.setTransform(189.8,217.1);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f().ls(["#FFFFFF","#F68026"],[0,1],-158.7,0,32,0).ss(2,1,1).p("ArkAAIXJAA");
	this.shape_165.setTransform(192.3,217.1);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f().ls(["#FFFFFF","#F68026"],[0,1],-165,0,32.5,0).ss(2,1,1).p("Ar8AAIX5AA");
	this.shape_166.setTransform(194.8,217.1);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f().ls(["#FFFFFF","#F68026"],[0,1],-171.3,0,32.9,0).ss(2,1,1).p("AsVAAIYrAA");
	this.shape_167.setTransform(197.3,217.1);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f().ls(["#FFFFFF","#F68026"],[0,1],-177.5,0,33.5,0).ss(2,1,1).p("AsuAAIZdAA");
	this.shape_168.setTransform(199.7,217.1);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f().ls(["#FFFFFF","#F68026"],[0,1],-183.8,0,33.9,0).ss(2,1,1).p("AtHAAIaPAA");
	this.shape_169.setTransform(202.2,217.1);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f().ls(["#FFFFFF","#F68026"],[0,1],-190.1,0,34.4,0).ss(2,1,1).p("AtfAAIa/AA");
	this.shape_170.setTransform(204.7,217.1);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f().ls(["#FFFFFF","#F68026"],[0,1],-196.3,0,34.9,0).ss(2,1,1).p("At4AAIbxAA");
	this.shape_171.setTransform(207.2,217.1);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f().ls(["#FFFFFF","#F68026"],[0,1],-202.6,0,35.4,0).ss(2,1,1).p("AuRAAIcjAA");
	this.shape_172.setTransform(209.6,217.1);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f().ls(["#FFFFFF","#F68026"],[0,1],-208.8,0.1,35.9,0.1).ss(2,1,1).p("AupAAIdUAA");
	this.shape_173.setTransform(212.1,217.1);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f().ls(["#FFFFFF","#F78D3C"],[0,1],-208.8,0.1,35.9,0.1).ss(2,1,1).p("AupAAIdUAA");
	this.shape_174.setTransform(212.1,217.1);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f().ls(["#FFFFFF","#F89951"],[0,1],-208.8,0.1,35.9,0.1).ss(2,1,1).p("AupAAIdUAA");
	this.shape_175.setTransform(212.1,217.1);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f().ls(["#FFFFFF","#F9A667"],[0,1],-208.8,0.1,35.9,0.1).ss(2,1,1).p("AupAAIdUAA");
	this.shape_176.setTransform(212.1,217.1);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f().ls(["#FFFFFF","#FAB37D"],[0,1],-208.8,0.1,35.9,0.1).ss(2,1,1).p("AupAAIdUAA");
	this.shape_177.setTransform(212.1,217.1);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f().ls(["#FFFFFF","#FBBF92"],[0,1],-208.8,0.1,35.9,0.1).ss(2,1,1).p("AupAAIdUAA");
	this.shape_178.setTransform(212.1,217.1);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f().ls(["#FFFFFF","#FBCCA8"],[0,1],-208.8,0.1,35.9,0.1).ss(2,1,1).p("AupAAIdUAA");
	this.shape_179.setTransform(212.1,217.1);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f().ls(["#FFFFFF","#FCD9BE"],[0,1],-208.8,0.1,35.9,0.1).ss(2,1,1).p("AupAAIdUAA");
	this.shape_180.setTransform(212.1,217.1);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f().ls(["#FFFFFF","#FDE6D4"],[0,1],-208.8,0.1,35.9,0.1).ss(2,1,1).p("AupAAIdUAA");
	this.shape_181.setTransform(212.1,217.1);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f().ls(["#FFFFFF","#FEF2E9"],[0,1],-208.8,0.1,35.9,0.1).ss(2,1,1).p("AupAAIdUAA");
	this.shape_182.setTransform(212.1,217.1);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f().s("#FFFFFF").ss(2,1,1).p("AupAAIdUAA");
	this.shape_183.setTransform(212.1,217.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_83}]}).to({state:[{t:this.shape_83}]},4).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_123}]},10).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[]},1).to({state:[{t:this.shape_83}]},27).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_146}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_148}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_150}]},1).to({state:[{t:this.shape_151}]},1).to({state:[{t:this.shape_152}]},1).to({state:[{t:this.shape_153}]},1).to({state:[{t:this.shape_154}]},1).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_156}]},1).to({state:[{t:this.shape_157}]},1).to({state:[{t:this.shape_158}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_160}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_162}]},1).to({state:[{t:this.shape_163}]},1).to({state:[{t:this.shape_164}]},1).to({state:[{t:this.shape_165}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_167}]},1).to({state:[{t:this.shape_168}]},1).to({state:[{t:this.shape_169}]},1).to({state:[{t:this.shape_170}]},1).to({state:[{t:this.shape_171}]},1).to({state:[{t:this.shape_172}]},1).to({state:[{t:this.shape_173}]},1).to({state:[{t:this.shape_173}]},31).to({state:[{t:this.shape_174}]},1).to({state:[{t:this.shape_175}]},1).to({state:[{t:this.shape_176}]},1).to({state:[{t:this.shape_177}]},1).to({state:[{t:this.shape_178}]},1).to({state:[{t:this.shape_179}]},1).to({state:[{t:this.shape_180}]},1).to({state:[{t:this.shape_181}]},1).to({state:[{t:this.shape_182}]},1).to({state:[{t:this.shape_183}]},1).wait(1));

	// bg
	this.instance_7 = new lib._9_2_2_4_B();
	this.instance_7.setTransform(0,30,0.72,0.719);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7}]}).wait(174));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,30,470,400);


(lib.slide_3 = function() {
	this.initialize();

	// animation 3
	this.anim03 = new lib.animation03();
	this.anim03.setTransform(0,-29.9);

	this.addChild(this.anim03);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,470,400);


(lib.slide_2 = function() {
	this.initialize();

	// animation 2
	this.anim02 = new lib.animation02();
	this.anim02.setTransform(0,-29.9);

	this.addChild(this.anim02);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,470,400);


(lib.Main = function() {
	this.initialize();

	// slide3
	this.slide03 = new lib.slide_3();
	this.slide03.setTransform(202.5,126.5,1,1,0,0,0,202.5,126.5);

	// slide2
	this.slide02 = new lib.slide_2();
	this.slide02.setTransform(202.5,126.5,1,1,0,0,0,202.5,126.5);

	this.addChild(this.slide02,this.slide03);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,470,400);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;