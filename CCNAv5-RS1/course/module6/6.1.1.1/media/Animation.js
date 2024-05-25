(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.classesmediaMediaObject = function() {
	this.initialize();

	// main
	this.instance = new lib.Main();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0.8,470,400);

(lib.arrow2 = function() {
	this.initialize(img.arrow2);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,42,28);

// symbols:
(lib.network = function() {
	this.initialize(img.network);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,653,556);

(lib.purple_block = function() {
	this.image = new DOMObject({type:"IMAGE",image:img.purple_block});
	this.addChild(this.image);
}).prototype = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,145,30);

(lib.textlabel = function() {
	this.initialize();

	// Layer 1
	this.text = new DOMObject({type:"TEXT" , align:"left" ,compId:"ID_txt03", width:"440", expand:"up"});
	//this.text = new cjs.Text("ID_txt03", "10px Courier New");
	//this.text.lineHeight = 16;
	this.text.setTransform(5,323);
	
	this.text_1 = new DOMObject({type:"TEXT" , align:"left" ,compId:"ID_txt02", width:"175", expand:"up+down"});
/*
	this.text_1 = new cjs.Text("ID_txt02", "10px Courier New");
	this.text_1.lineHeight = 16;*/
	this.text_1.setTransform(311,1);

	this.text_2 = new DOMObject({type:"TEXT" , align:"left" ,compId:"ID_txt01", width:"175", expand:"up+down"});
	/*this.text_2 = new cjs.Text("ID_txt01", "10px Courier New");
	this.text_2.lineHeight = 16;*/
	this.text_2.setTransform(81,-1.9);

	this.addChild(this.text_2,this.text_1,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(5,-1.9,355,338.8);


(lib.packet_2 = function() {
	this.initialize();

	// Layer 1
	this.text_3 = new DOMObject({type:"TEXT" , align:"center" ,compId:"ID_txt13", width:"100", expand:"up+down",class:"blueBox"});
/*
	this.text_3 = new cjs.Text("ID_txt13", "10px Courier New");
	this.text_3.lineHeight = 16;*/
	this.text_3.setTransform(-50,-10);

	this.addChild(this.text_3);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-24.9,-6.9,49,14.8);


(lib.packet = function() {
	this.initialize();

	// Layer 1
		this.text_4 = new DOMObject({type:"TEXT" , align:"center" ,compId:"ID_txt07", width:"100", expand:"up+down",class:"blueBox"});
/*
	this.text_4 = new cjs.Text("ID_txt07", "10px Courier New");
	this.text_4.lineHeight = 16;
*/	this.text_4.setTransform(-60,-10);

	this.addChild(this.text_4);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-23.9,-8.9,49,14.8);


(lib.label1 = function() {
	this.initialize();

	// Layer 1
	this.text_5 = new DOMObject({type:"TEXT" , align:"left" ,compId:"ID_osi_2txt01", width:"126", expand:"up+down"});
    this.text_5.setTransform(305,202);

	this.text_6 = new DOMObject({type:"TEXT" , align:"left" ,compId:"ID_osi_2txt02", width:"126", expand:"up+down"});
	this.text_6.setTransform(305,168);

 	this.text_7 = new DOMObject({type:"TEXT" , align:"left" ,compId:"ID_osi_2txt03", width:"126", expand:"up+down"});
	this.text_7.setTransform(305,135);
	
 	this.text_8 = new DOMObject({type:"TEXT" , align:"left" ,compId:"ID_osi_2txt04", width:"126", expand:"up+down"});
	this.text_8.setTransform(305,102);

 	this.text_9 = new DOMObject({type:"TEXT" , align:"left" ,compId:"ID_osi_2txt05", width:"126", expand:"up+down"});
	this.text_9.setTransform(305,70);

 	this.text_10 = new DOMObject({type:"TEXT" , align:"left" ,compId:"ID_osi_2txt06", width:"126", expand:"up+down"});
	this.text_10.setTransform(305,36);

 	this.text_11 = new DOMObject({type:"TEXT" , align:"left" ,compId:"ID_osi_2txt07", width:"115", expand:"up+down"});
	this.text_11.setTransform(305,0);

 	this.text_12 = new DOMObject({type:"TEXT" , align:"left" ,compId:"ID_osi_1txt01", width:"120", expand:"up+down"});
	this.text_12.setTransform(1,202);

 	this.text_13 = new DOMObject({type:"TEXT" , align:"left" ,compId:"ID_osi_1txt02", width:"175", expand:"up+down"});
	this.text_13.setTransform(1,169);

 	this.text_14 = new DOMObject({type:"TEXT" , align:"left" ,compId:"ID_osi_1txt03", width:"175", expand:"up+down"});
	this.text_14.setTransform(1,136);

 	this.text_15 = new DOMObject({type:"TEXT" , align:"left" ,compId:"ID_osi_1txt04", width:"175", expand:"up+down"});
	this.text_15.setTransform(1,102.9);

 	this.text_16 = new DOMObject({type:"TEXT" , align:"left" ,compId:"ID_osi_1txt05", width:"175", expand:"up+down"});
	this.text_16.setTransform(1,70);

 	this.text_17 = new DOMObject({type:"TEXT" , align:"left" ,compId:"ID_osi_1txt06", width:"175", expand:"up+down"});
	this.text_17.setTransform(-5,35.4);

 	this.text_18 = new DOMObject({type:"TEXT" , align:"left" ,compId:"ID_osi_1txt07", width:"150", expand:"up+down"});
	this.text_18.setTransform(1,1);

	this.addChild(this.text_18,this.text_17,this.text_16,this.text_15,this.text_14,this.text_13,this.text_12,this.text_11,this.text_10,this.text_9,this.text_8,this.text_7,this.text_6,this.text_5);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(1,0,390,216.8);


(lib.ips = function() {
	this.initialize();

	// Layer 1
	this.text_19 = new cjs.Text("192.168.36.5", "11px Arial", "#393536");
	this.text_19.textAlign = "center";
	this.text_19.lineHeight = 13;
	this.text_19.setTransform(131.8,-8);

	this.text_20 = new cjs.Text("192.168.32.11", "11px Arial", "#393536");
	this.text_20.textAlign = "center";
	this.text_20.lineHeight = 13;
	this.text_20.setTransform(-134.2,-8);

	this.addChild(this.text_20,this.text_19);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-169.3,-8,337.3,16.2);


(lib.frame_2 = function() {
	this.initialize();

	// Layer 1
	this.text_21 = new DOMObject({type:"TEXT" , align:"left" ,compId:"ID_txt11", width:"100", expand:"up+down",class:"orangeBox"});
	this.text_21.setTransform(-50,-10);

	this.addChild(this.text_21);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-22.9,-5.9,49,14.8);


(lib.frame = function() {
	this.initialize();

	// Layer 1
	this.text_22 = new DOMObject({type:"TEXT" , align:"center" ,compId:"ID_txt08", width:"100", expand:"up+down",class:"orangeBox"});
   this.text_22.setTransform(-60,-10);

	this.addChild(this.text_22);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-25.9,-5.9,49,14.8);


(lib.data_2 = function() {
	this.initialize();

	// Layer 1
		this.text_23 = new DOMObject({type:"TEXT" , align:"center" ,compId:"ID_txt14", width:"100", expand:"up+down",class:"greenBox"});
	this.text_23.setTransform(-60,-10);

	this.addChild(this.text_23);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-21.9,-6.9,49,14.8);


(lib.data = function() {
	this.initialize();

	// Layer 1
	this.text_24 = new DOMObject({type:"TEXT" , align:"center" ,compId:"ID_txt04", width:"100", expand:"up+down",class:"greenBox"});
	this.text_24.setTransform(-60,-10);

	this.addChild(this.text_24);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-27.9,-1.9,49,14.8);


(lib.countlabel = function() {
	this.initialize();

	// Layer 1
	this.text_25 = new DOMObject({type:"TEXT" , align:"left" ,compId:"ID_OSI_2num01", width:"50", expand:"up+down",size:13,color:"#00918e"});
	this.text_25.setTransform(312,203);

	this.text_26 = new DOMObject({type:"TEXT" , align:"left" ,compId:"ID_OSI_2num02", width:"50", expand:"up+down",size:13,color:"#00918e"});
	this.text_26.setTransform(312,168);

	this.text_27 = new DOMObject({type:"TEXT" , align:"left" ,compId:"ID_OSI_2num03", width:"50", expand:"up+down",size:13,color:"#00918e"});
	this.text_27.setTransform(312,136);

	this.text_28 = new DOMObject({type:"TEXT" , align:"left" ,compId:"ID_OSI_2num04", width:"50", expand:"up+down",size:13,color:"#00918e"});
	this.text_28.setTransform(312,102);

	this.text_29 = new DOMObject({type:"TEXT" , align:"left" ,compId:"ID_OSI_2num05", width:"50", expand:"up+down",size:13,color:"#00918e"});
	this.text_29.setTransform(312,69);

	this.text_30 = new DOMObject({type:"TEXT" , align:"left" ,compId:"ID_OSI_2num06", width:"50", expand:"up+down",size:13,color:"#00918e"});
	this.text_30.setTransform(312,36);

	this.text_31 = new DOMObject({type:"TEXT" , align:"left" ,compId:"ID_OSI_2num07", width:"50", expand:"up+down",size:13,color:"#00918e"});
	this.text_31.setTransform(312,2);

	this.text_32 = new DOMObject({type:"TEXT" , align:"left" ,compId:"ID_OSI_1num01", width:"50", expand:"up+down",size:13,color:"#00918e"});
	this.text_32.setTransform(3,201);

	this.text_33 = new DOMObject({type:"TEXT" , align:"left" ,compId:"ID_OSI_1num02", width:"50", expand:"up+down",size:13,color:"#00918e"});
	this.text_33.setTransform(3,169);

	this.text_34 = new DOMObject({type:"TEXT" , align:"left" ,compId:"ID_OSI_1num03", width:"50", expand:"up+down",size:13,color:"#00918e"});
	this.text_34.setTransform(3,134);

	this.text_35 = new DOMObject({type:"TEXT" , align:"left" ,compId:"ID_OSI_1num04", width:"50", expand:"up+down",size:13,color:"#00918e"});
	this.text_35.setTransform(3,100);

	this.text_36 = new DOMObject({type:"TEXT" , align:"left" ,compId:"ID_OSI_1num05", width:"50", expand:"up+down",size:13,color:"#00918e"});
	this.text_36.setTransform(3,70);

	this.text_37 = new DOMObject({type:"TEXT" , align:"left" ,compId:"ID_OSI_1num06", width:"50", expand:"up+down",size:13,color:"#00918e"});
	this.text_37.setTransform(3,36);

	this.text_38 = new DOMObject({type:"TEXT" , align:"left" ,compId:"ID_OSI_1num07", width:"50", expand:"up+down",size:13,color:"#00918e"});
	this.text_38.setTransform(3,1);

	this.addChild(this.text_38,this.text_37,this.text_36,this.text_35,this.text_34,this.text_33,this.text_32,this.text_31,this.text_30,this.text_29,this.text_28,this.text_27,this.text_26,this.text_25);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,1,389,216.8);


(lib.blank_2 = function() {
	this.initialize();

	// Layer 1
	this.text_39 = new DOMObject({type:"TEXT" , align:"center" ,compId:"ID_txt13", width:"100", expand:"up+down",class:"blueBox"});
	this.text_39.setTransform(-50,-10);

	this.addChild(this.text_39);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-21.9,-6.9,49,14.8);


(lib.binary = function() {
	this.initialize();

	// Layer 1
	this.text_40 = new DOMObject({type:"TEXT" , align:"left" ,compId:"ID_txt09", width:"100", expand:"up+down",class:"lightBlueBox"});
	this.text_40.setTransform(-60,-10);

	this.addChild(this.text_40);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-29.9,-7.9,49,14.8);


(lib.Arrow = function() {
	this.initialize();

	// shape
	this.instance = new lib.arrow2();
	
	this.instance.setTransform(0,-3.2,0.238,0.238);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-3.2,10,6.7);


(lib.routing = function() {
	this.initialize();

	// Layer 1
	this.text_41 = new DOMObject({type:"TEXT" , align:"left" ,compId:"ID_txt10", width:"100", expand:"up",class:"orangeCallOut"});
	this.text_41.setTransform(-50.9,-28.9);

	// Layer 2
	this.instance_1 = new lib.Arrow();
	this.instance_1.setTransform(-31.3,75.8,1.502,1.502,90,0,0,5.2,0.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#F68026").ss(3,0,1).p("AAAGfIAAs9");
	this.shape.setTransform(-31.4,31.6);

    this.addChild(this.shape,this.instance_1,this.text_41);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-50.9,-28.9,49,112);


(lib.encapsulation = function() {
	this.initialize();

	// Layer 1
	this.text_42 = new DOMObject({type:"TEXT" , align:"left" ,compId:"ID_txt06", width:"100", expand:"up+down",class:"orangeCallOut"});
	this.text_42.setTransform(-60,-28);

	// Layer 2
	this.instance_2 = new lib.Arrow();
	this.instance_2.setTransform(-94.4,-15.9,1.504,1.504,-179.9,0,0,5.2,0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#F68026").ss(3,0,1).p("AjKAAIGVAA");
	this.shape_1.setTransform(-71.4,-16);

	this.addChild(this.shape_1,this.instance_2,this.text_42);;
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-101.7,-20.9,123.8,14.8);


(lib.decapsulation = function() {
	this.initialize();

	// Layer 1
		this.text_43 = new DOMObject({type:"TEXT" , align:"left" ,compId:"ID_txt12", width:"100", expand:"up+down",class:"orangeCallOut"});
	this.text_43.setTransform(-50,-38.2);

	// Layer 2
	this.instance_3 = new lib.Arrow();
	this.instance_3.setTransform(101.6,-28.3,1.502,1.502,0,0,0,5.3,0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#F68026").ss(3,0,1).p("AE3AAIptAA");
	this.shape_2.setTransform(69.2,-28.3);

	this.addChild(this.shape_2,this.instance_3,this.text_43);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-16.9,-38.2,125.6,14.8);


(lib.data_blank = function() {
	this.initialize();
/*	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A481B9").s("#333333").ss(2,1,1).p("AH+hiIAADFIv7AAIAAjFIP7AA").cp();
	this.shape.setTransform(1.6,1.4);

	this.addChild(this.shape);
	*/
this.instance = new lib.purple_block();
this.instance.setTransform(-49.4,-8.5,0.704,0.662);

	this.addChild(this.instance);

}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-50.7,-9.9,101.5,20);


(lib.blank_3 = function() {
	this.initialize();
	this.instance = new lib.purple_block();
this.instance.setTransform(-49.4,-8.5,0.704,0.662);

	this.addChild(this.instance);

}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-50.7,-9.9,101.5,20);


(lib.adrresiing = function() {
	this.initialize();

	// Layer 1
		this.text_44 = new DOMObject({type:"TEXT" , align:"center",size:"11" ,compId:"ID_txt05", width:"175", expand:"up+down"});
	this.text_44.setTransform(-94.9,-7.9);

	// Layer 2
	this.instance_4 = new lib.Arrow();
	this.instance_4.setTransform(-97.1,-0.9,1.504,1.504,180,0,0,5,0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#F68026").ss(3,0,1).p("AjLAAIGXAA");
	this.shape_3.setTransform(-74.7,-1);

	this.instance_5 = new lib.Arrow();
	this.instance_5.setTransform(80.7,-0.8,1.505,1.505,0,0,0,5,0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#F68026").ss(3,0,1).p("ADMAAImXAA");
	this.shape_4.setTransform(58.3,-0.8);

	this.addChild(this.shape_4,this.instance_5,this.shape_3,this.instance_4,this.text_44);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-84.7,-7.9,173,14.8);


(lib.animation01 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{},true);

	// capsulation&decapsulation
	this.instance_5 = new lib.decapsulation();
	this.instance_5.setTransform(238,258.1);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(638).to({alpha:1},11).wait(22).to({alpha:0},10).wait(11).to({y:225.1},0).to({alpha:1},9).wait(40).to({alpha:0},12).wait(40).to({y:193.1},0).to({alpha:1},13).wait(44).to({alpha:0},10).wait(160));

	// capsulation&decapsulation
	this.instance_6 = new lib.routing();
	this.instance_6.setTransform(220.4,193.1);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(477).to({alpha:1},0).wait(99).to({alpha:0},10).wait(20).to({x:238,y:203.1},0).wait(414));

	// capsulation&decapsulation
	this.instance_7 = new lib.encapsulation();
	this.instance_7.setTransform(238,180.1);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(184).to({alpha:1},13).wait(40).to({alpha:0},13).wait(22).to({y:213.1},0).to({alpha:1},8).wait(35).to({alpha:0},9).wait(38).to({y:245.1},0).to({alpha:1},10).wait(42).to({alpha:0},11).wait(595));

   this.instance_9 = new lib.data_blank();
	this.instance_9.setTransform(83.6,162.4);
	this.instance_9.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(239).to({alpha:1},8).wait(8).to({y:197.4},16).wait(46).to({alpha:0},0).wait(703));
	// packet
	this.instance_10 = new lib.packet();
	this.instance_10.setTransform(83.6,197.4);
	this.instance_10.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(329).to({alpha:1},9).wait(8).to({y:230.4},17).wait(51).to({alpha:0},10).wait(596));

	// frame
	this.instance_11 = new lib.frame();
	this.instance_11.setTransform(83.6,230.4);
	this.instance_11.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(425).to({alpha:0.34},0).to({alpha:1},9).wait(26).to({y:261.4,alpha:0},16).wait(544));

	// binary
	this.instance_12 = new lib.binary();
	this.instance_12.setTransform(83.6,264.4);
	this.instance_12.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(477).to({alpha:1},0).wait(7).to({y:302.9},20).wait(15).to({y:303.9},0).to({x:410},45).wait(16).to({y:262.9},19).wait(2).to({alpha:0},0).wait(419));

	// frame2
	this.instance_13 = new lib.frame_2();
	this.instance_13.setTransform(398.6,262.9);
	this.instance_13.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(617).to({alpha:1},0).to({y:229.9,alpha:0},17).wait(386));

	// packet2
	this.instance_14 = new lib.packet_2();
	this.instance_14.setTransform(398.6,229.9);
	this.instance_14.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(636).to({alpha:1},0).wait(42).to({alpha:0},0).wait(342));

	// blank2
	this.instance_15 = new lib.blank_2();
	this.instance_15.setTransform(398.6,229.9);
	this.instance_15.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(681).to({alpha:1},0).to({y:196.9},12).wait(48).to({alpha:0},12).wait(267));

	// blank3
	this.instance_16 = new lib.blank_3();
	this.instance_16.setTransform(398.6,196.9);
	this.instance_16.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(755).to({alpha:1},0).wait(3).to({y:164.9},16).wait(7).to({alpha:0},11).wait(228));

	// data2
	this.instance_17 = new lib.data_2();
	this.instance_17.setTransform(408.6,164.9);
	this.instance_17.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(793).to({alpha:1},0).wait(76).to({y:62.9},38).wait(20).to({y:22.9},17).wait(2).to({x:518.6,alpha:0},37).wait(37));

	// data
	this.instance_18 = new lib.data();
	this.instance_18.setTransform(33.6,18.4);
	this.instance_18.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(35).to({alpha:1},19).wait(16).to({x:83.6},35).wait(11).to({y:162.4},56).wait(58).wait(9).to({alpha:0},0).wait(781));


	// ips
	this.instance_16 = new lib.ips();
	this.instance_16.setTransform(236.1,13.4);
	this.instance_16.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).to({alpha:1},80).wait(1007));

	// addressing
	this.instance_17 = new lib.adrresiing();
	this.instance_17.setTransform(237.4,20.9);
	this.instance_17.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).to({alpha:1},80).wait(1007));

	// Layer 4
	this.instance_18 = new lib.textlabel();
	this.instance_18.setTransform(234.8,191.3,1,1,0,0,0,227.3,168.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_18}]}).wait(1020));

	// Layer 3
	this.instance_19 = new lib.countlabel();
	this.instance_19.setTransform(169.2,164,1,1,0,0,0,165.1,108.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_19}]}).wait(1020));

	// base_txt
	this.instance_20 = new lib.label1();
	this.instance_20.setTransform(247.6,164,1,1,0,0,0,216,108.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_20}]}).wait(1020));

	// base
	this.instance_21 = new lib.network();
	this.instance_21.setTransform(0,4,0.72,0.719);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_21}]}).wait(1020));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,4,470,400);


(lib.Main = function() {
	this.initialize();

	// animation
	this.anim01 = new lib.animation01();
	this.anim01.setTransform(0,-3.1);

	this.addChild(this.anim01);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0.8,470,400);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;