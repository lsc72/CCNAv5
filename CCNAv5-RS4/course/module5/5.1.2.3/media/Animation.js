(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.classesmediaMediaObject = function() {
	this.initialize();

	// main
	this.instance = new lib.Main();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-207.2,0,677.3,400);


// symbols:
(lib._11123 = function() {
	this.initialize(img._11123);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,470,400);

(lib.router = function() {
	this.initialize();
	this.instance = new DOMObject({type:"IMAGE",image:img.router});
	//this.instance.setTran
	this.instance.setTransform(201,123,0.72,0.72);
	this.addChild(this.instance);
}).prototype = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,233,46);


(lib.Arrow = function() {
	this.initialize(img.Arrow);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,40,27);


(lib.Arrow1 = function() {
	this.initialize(img.Arrow1);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,40,27);


(lib.bigtable = function() {
	this.initialize(img.bigtable);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,476,103);


(lib.smalltable = function() {
	this.initialize();
	this.instance = new DOMObject({type:"IMAGE",image:img.smalltable});
	this.addChild(this.instance);
}).prototype = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,233,46);


(lib.ID_txt11 = function() {
	this.initialize();

	// ID_txt11
	this.text = new DOMObject({type:"TEXT",compId:"ID_txt11",width:"75",expand:"up+down",align:"right"});
	//this.text = new cjs.Text("ID_txt11", "10px Times New Roman", "#393536");
	//this.text.lineHeight = 12;
	//this.text.lineWidth = 55;

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,58.5,15.3);


(lib.ID_txt10 = function() {
	this.initialize();

	// ID_txt10
	this.text_1 = new DOMObject({type:"TEXT",compId:"ID_txt10",width:"75",expand:"up+down",align:"right"});
	//this.text_1 = new cjs.Text("ID_txt10", "10px Times New Roman", "#393536");
	//this.text_1.lineHeight = 12;
	//this.text_1.lineWidth = 55;

	this.addChild(this.text_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,58.5,15.3);


(lib.ID_txt09 = function() {
	this.initialize();

	// ID_txt09
	this.text_2 = new DOMObject({type:"TEXT",compId:"ID_txt09",width:"80",expand:"up+down",align:"center"});
	//this.text_2 = new cjs.Text("ID_txt09", "10px Times New Roman", "#393536");
	//this.text_2.lineHeight = 12;
	//this.text_2.lineWidth = 77;

	this.addChild(this.text_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,81,15.3);


(lib.ID_txt08 = function() {
	this.initialize();

	// ID_txt08
	this.text_3 = new DOMObject({type:"TEXT",compId:"ID_txt08",width:"200",expand:"up+down",align:"center"});
	//this.text_3 = new cjs.Text("ID_txt08", "10px Times New Roman", "#393536");
	//this.text_3.lineHeight = 12;
	//this.text_3.lineWidth = 199;

	this.addChild(this.text_3);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,203,15.3);


(lib.ID_txt07 = function() {
	this.initialize();

	// ID_txt07
	this.text_4 = new DOMObject({type:"TEXT",compId:"ID_txt07",width:"200",expand:"up",align:"center"});
	//this.text_4 = new cjs.Text("ID_txt07", "10px Times New Roman", "#393536");
	//this.text_4.lineHeight = 12;
	//this.text_4.lineWidth = 156;

	this.addChild(this.text_4);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,160,15.3);


(lib.bg = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib._11123();
	this.instance2 = new lib.router();

	this.addChild(this.instance,this.instance2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,470,400);


(lib.arrowbg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// Layer 1
	this.instance_1 = new lib.Arrow();
	this.instance_1.setTransform(0,11,0.412,0.406,0,180,0);

	this.instance_2 = new lib.Arrow1();
	this.instance_2.setTransform(0,0,0.413,0.406);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,16.5,11);


(lib.table2 = function() {
	this.initialize();

	// ID_txt06
	this.text_5 = new DOMObject({type:"TEXT",compId:"ID_txt06",width:"100",expand:"up+down",align:"left",color:"#FFFFFF"});
	//this.text_5 = new cjs.Text("ID_txt06", "10px Arial", "#FFFFFF");
	//this.text_5.lineHeight = 12;
	//this.text_5.lineWidth = 102;
	this.text_5.setTransform(340,67);

	// ID_txt05
	this.text_6 = new DOMObject({type:"TEXT",compId:"ID_txt05",width:"100",expand:"up+down",align:"left",color:"#FFFFFF"});
	//this.text_6 = new cjs.Text("ID_txt05", "10px Arial", "#FFFFFF");
	//this.text_6.lineHeight = 12;
	//this.text_6.lineWidth = 105;
	this.text_6.setTransform(226.5,67);

	// ID_txt03
	this.text_7 = new DOMObject({type:"TEXT",compId:"ID_txt03",width:"100",expand:"up+down",align:"left",color:"#FFFFFF"});
	
	this.text_7.setTransform(111.8,67);

	// ID_txt02
	this.text_8 = new DOMObject({type:"TEXT",compId:"ID_txt02",width:"100",expand:"up+down",align:"left",color:"#FFFFFF"});
	this.text_8.setTransform(-3,67);

	// ID_txt04
	this.text_9 = new DOMObject({type:"TEXT",compId:"ID_txt04",width:"200",expand:"right",align:"left"});
	this.text_9.setTransform(-5,41);

	// static text
	this.text_10 = new cjs.Text("209.165.202.129:80", "10px Arial", "#393536");
	this.text_10.lineHeight = 12;
	this.text_10.setTransform(350.5,112);

	this.text_11 = new cjs.Text("209.165.201.1:80", "10px Arial", "#393536");
	this.text_11.lineHeight = 12;
	this.text_11.setTransform(350.5,92.6);

	this.text_12 = new cjs.Text("209.165.202.129:80", "10px Arial", "#393536");
	this.text_12.lineHeight = 12;
	this.text_12.setTransform(237.4,112);

	this.text_13 = new cjs.Text("209.165.200.226:1331", "10px Arial", "#393536");
	this.text_13.lineHeight = 12;
	this.text_13.setTransform(4.5,112);

	this.text_14 = new cjs.Text("192.168.10.10:1331", "10px Arial", "#393536");
	this.text_14.lineHeight = 12;
	this.text_14.setTransform(118.9,112);

	this.text_15 = new cjs.Text("209.165.201.1:80", "10px Arial", "#393536");
	this.text_15.lineHeight = 12;
	this.text_15.setTransform(237.4,92.6);

	this.text_16 = new cjs.Text("209.165.200.226:1555", "10px Arial", "#393536");
	this.text_16.lineHeight = 12;
	this.text_16.setTransform(4.5,92.6);

	this.text_17 = new cjs.Text("192.168.10.10:1555", "10px Arial", "#393536");
	this.text_17.lineHeight = 12;
	this.text_17.setTransform(118.9,92.6);

	// table
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCE9E7").ss(2,1,1).p("EAj8gEMIAAFfIAACuIAAACIAACzIx2AAIxkAAIyfAAIx+AAIAAi1IAAiuIAAlfIAAipMBH3AAAIAACpASGkMIAAFfIR2AAASGGmIAAAQASGEDIAABsATqEBIhkAAIAAACIBkAAIAAgCIQSAAEgj7gEMIR+AAISfAAIRkAAIR2AAASGBTIAACMATqEDIQSAAAAikMIAAFfIRkAAAAiEcIAABTAAiGmIAAAQASGEDImuAAIAAgCMgvTAAAAAiBTIAACMAx9kMIAAFfISfAAAx9EcIAABTAx9GmIAAAQEgj7ABTIR+AAIAACMALYEBIGuAA");
	this.shape.setTransform(230,83.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Egj7gBZMAvTAAAIAAADIGuAAIBkAAIQSAAIAACwIx2AAIxkAAIyfAAIx+AAIAAizASGBKIAAAQIAAgQASGhWIAABpIAAhpAAig+IAABRIAAhRAAiBKIAAAQIAAgQAx9g+IAABRIAAhRAx9BKIAAAQIAAgQ").cp();
	this.shape_1.setTransform(230,118.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#077A77").s().p("Ax9CwIx+AAIAAlfIR+AAISfAAIRkAAIR2AAIAAFfIx2AAIAAlfIAAFfIxkAAIAAlfIAAFfIyfAAIAAlfIAAFf").cp();
	this.shape_2.setTransform(230,74.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EFF8F7").s().p("Egj7gBXIR+AAISfAAIAACKIAAiKIRkAAIAACKIAAiKIR2AAIAACsIwSAAIhkAAIAAACImuAAIAAgCMgvTAAAIAAisAx9hXIAACKIAAiKALYBVIGuAAImuAA").cp();
	this.shape_3.setTransform(230,100.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CCE9E7").s().p("EAj8ABUIx2AAIxkAAIyfAAIx+AAIAAinMBH3AAAIAACn").cp();
	this.shape_4.setTransform(230,48.2);
	
	
	
	
	

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape,this.text_17,this.text_16,this.text_15,this.text_14,this.text_13,this.text_12,this.text_11,this.text_10,this.text_9,this.text_8,this.text_7,this.text_6,this.text_5);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,39.7,460,87.6);


(lib.movigtable2copy = function() {
	this.initialize();

	// static text
	this.text_18 = new DOMObject({type:"TEXT" , align:"center" ,text:"AD", size:"11",color:"#FFFFFF",bold:"1"});
	//this.text_18 = new cjs.Text("DA", "bold 11px Arial", "#FFFFFF");
	//this.text_18.lineHeight = 13;
	this.text_18.setTransform(155,37);

    this.text_19 = new DOMObject({type:"TEXT" , align:"center" ,text:"AS", size:"11",color:"#FFFFFF",bold:"1"});
	//this.text_19 = new cjs.Text("SA", "bold 11px Arial", "#FFFFFF");
	//this.text_19.lineHeight = 13;
	this.text_19.setTransform(48.1,37);

    this.text_20 = new DOMObject({type:"TEXT" , align:"center" ,text:"209.165.202.129:80"});
	//this.text_20 = new cjs.Text("209.165.202.129:80", "11px Arial", "#393536");
	//this.text_20.textAlign = "center";
	//this.text_20.lineHeight = 13;
	this.text_20.setTransform(120,60);

    this.text_21 = new DOMObject({type:"TEXT" , align:"center" ,text:"209.165.200.226:1331"});
	//this.text_21 = new cjs.Text("209.165.200.226:1331", "11px Arial", "#393536");
	//this.text_21.lineHeight = 13;
	this.text_21.setTransform(-5,60);

	// bg
	this.instance_3 = new lib.smalltable();
	this.instance_3.setTransform(0,30);

	this.addChild(this.instance_3,this.text_21,this.text_20,this.text_19,this.text_18);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,30,233,46);


(lib.movigtable2 = function() {
	this.initialize();

	// static text
	this.text_22 = new DOMObject({type:"TEXT" , align:"center" ,text:"AD", size:"11",color:"#FFFFFF",bold:"1"});
	//this.text_22 = new cjs.Text("DA", "bold 11px Arial", "#FFFFFF");
	//this.text_22.lineHeight = 13;
	this.text_22.setTransform(155,37);

    this.text_23 = new DOMObject({type:"TEXT" , align:"center" ,text:"AS", size:"11",color:"#FFFFFF",bold:"1"});
	//this.text_23 = new cjs.Text("SA", "bold 11px Arial", "#FFFFFF");
	//this.text_23.lineHeight = 13;
	this.text_23.setTransform(48.1,37);
	
    this.text_24 = new DOMObject({type:"TEXT" , align:"center" ,text:"209.165.202.129:80"});
	//this.text_24 = new cjs.Text("209.165.202.129:80", "11px Arial", "#393536");
	//this.text_24.textAlign = "center";
	//this.text_24.lineHeight = 13;
	this.text_24.setTransform(120,60);

    this.text_25 = new DOMObject({type:"TEXT" , align:"center" ,text:"192.168.10.11:1331"});
	//this.text_25 = new cjs.Text("192.168.10.11:1331", "11px Arial", "#393536");
	//this.text_25.lineHeight = 13;
	this.text_25.setTransform(6.9,60);

	// bg
	this.instance_4 = new lib.smalltable();
	this.instance_4.setTransform(0,30);

	this.addChild(this.instance_4,this.text_25,this.text_24,this.text_23,this.text_22);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,30,233,46);


(lib.movigtable1copy = function() {
	this.initialize();

	// static text
	this.text_26 = new DOMObject({type:"TEXT" , align:"center" ,text:"AD", size:"11",color:"#FFFFFF",bold:"1"});
	//this.text_26 = new cjs.Text("DA", "bold 11px Arial", "#FFFFFF");
	//this.text_26.lineHeight = 13;
	this.text_26.setTransform(155,37);

    this.text_27 = new DOMObject({type:"TEXT" , align:"center" ,text:"AS", size:"11",color:"#FFFFFF",bold:"1"});
	//this.text_27 = new cjs.Text("SA", "bold 11px Arial", "#FFFFFF");
	//this.text_27.lineHeight = 13;
	this.text_27.setTransform(48.1,37);

    this.text_28 = new DOMObject({type:"TEXT" , align:"center" ,text:"209.165.201.1:80"});
	//this.text_28 = new cjs.Text("209.165.201.1:80", "11px Arial", "#393536");
	//this.text_28.textAlign = "center";
	//this.text_28.lineHeight = 13;
	this.text_28.setTransform(125,60);

     this.text_29 = new DOMObject({type:"TEXT" , align:"center" ,text:"209.165.200.226:1555"});
	//this.text_29 = new cjs.Text("209.165.200.226:1555", "11px Arial", "#393536");
	//this.text_29.lineHeight = 13;
	this.text_29.setTransform(-5,60);

	// bg
	this.instance_5 = new lib.smalltable();
	this.instance_5.setTransform(0,30);

	this.addChild(this.instance_5,this.text_29,this.text_28,this.text_27,this.text_26);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,30,233,46);


(lib.movigtable1 = function() {
	this.initialize();

	// static text
	this.text_30 = new DOMObject({type:"TEXT" , align:"center" ,text:"AD", size:"11",color:"#FFFFFF",bold:"1"});
	//this.text_30 = new cjs.Text("DA", "bold 11px Arial", "#FFFFFF");
	//this.text_30.lineHeight = 13;
	this.text_30.setTransform(155,37);

    this.text_31 = new DOMObject({type:"TEXT" , align:"center" ,text:"AS", size:"11",color:"#FFFFFF",bold:"1"});
	//this.text_31 = new cjs.Text("SA", "bold 11px Arial", "#FFFFFF");
	//this.text_31.lineHeight = 13;
	this.text_31.setTransform(48.1,37);

    this.text_32 = new DOMObject({type:"TEXT" , align:"center" ,text:"209.165.201.1:80"});
	//this.text_32 = new cjs.Text("209.165.201.1:80", "11px Arial", "#393536");
	//this.text_32.textAlign = "center";
	//this.text_32.lineHeight = 13;
	this.text_32.setTransform(125,60);

    this.text_33 = new DOMObject({type:"TEXT" , align:"center" ,text:"192.168.10.10:1555"});
	//this.text_33 = new cjs.Text("192.168.10.10:1555", "11px Arial", "#393536");
	//this.text_33.lineHeight = 13;
	this.text_33.setTransform(5,60);

	// bg
	this.instance_6 = new lib.smalltable();
	this.instance_6.setTransform(0,30);

	this.addChild(this.instance_6,this.text_33,this.text_32,this.text_31,this.text_30);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,30,233,46);


(lib.commonlazymc = function() {
	this.initialize();

	// ID_txt11
	this.instance_7 = new lib.ID_txt11();
	this.instance_7.setTransform(365,225.2,1,1,0,0,0,29.3,8.5);

	// ID_txt10
	this.instance_8 = new lib.ID_txt10();
	this.instance_8.setTransform(365,81.2,1,1,0,0,0,29.3,8.5);

	// ID_txt09
	this.instance_9 = new lib.ID_txt09();
	this.instance_9.setTransform(360,151.7,1,1,0,0,0,40.5,8.5);

	// ID_txt08
	this.instance_10 = new lib.ID_txt08();
	this.instance_10.setTransform(345.5,48,1,1,0,0,0,101.5,8.5);

	// ID_txt07
	this.instance_11 = new lib.ID_txt07();
	this.instance_11.setTransform(63.9,48,1,1,0,0,0,80,8.5);

	this.addChild(this.instance_11,this.instance_10,this.instance_9,this.instance_8,this.instance_7);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(8.9,35.9,449.1,196);


(lib.arrow = function() {
	this.initialize();

	// Layer 1
	this.instance_12 = new lib.arrowbg("synched",1,false);
	this.instance_12.setTransform(1.2,99.5,1,1,90,0,0,8.3,9.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#F68026").ss(3,1,1).p("AAAnlIAAPL");
	this.shape_5.setTransform(4.9,48.6);

	this.addChild(this.shape_5,this.instance_12);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,11,107.7);


(lib.animation01 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{},true);

	// Moving table1
	this.instance_13 = new lib.movigtable1copy();
	this.instance_13.setTransform(218.4,129.2,1,1,0,0,0,115.7,51.9);
	this.instance_13.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(138).to({alpha:1},0).wait(20).to({x:348.4},37).to({y:100.2},54).to({x:443.4},33).to({x:588.4,alpha:0},43).wait(6));

	// Moving table1
	this.instance_14 = new lib.movigtable1();
	this.instance_14.setTransform(-91.5,100.2,1,1,0,0,0,115.7,51.9);
	this.instance_14.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1).to({x:-43.2,alpha:1},14).to({x:88.4},41).to({y:129.2},43).to({x:219.1},39).to({alpha:0},1).wait(192));

	// Moving table2
	this.instance_15 = new lib.movigtable2copy();
	this.instance_15.setTransform(218.4,176.6,1,1,0,0,0,115.7,51.9);
	this.instance_15.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(138).to({alpha:1},0).wait(20).to({x:348.4},37).to({y:222.6},54).to({x:443.4},33).to({x:588.4,alpha:0},43).wait(6));

	// Moving table2
	this.instance_16 = new lib.movigtable2();
	this.instance_16.setTransform(-91.5,222.6,1,1,0,0,0,115.7,51.9);
	this.instance_16.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(1).to({x:-43.2,alpha:1},14).to({x:88.4},41).to({y:176.6},43).to({x:219.1},39).to({alpha:0},1).wait(192));

	// arrows
	this.instance_17 = new lib.arrow();
	this.instance_17.setTransform(231.1,212.2,1,1,0,0,0,5.5,54.1);
	this.instance_17.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(123).to({alpha:1},0).wait(208));

	// commonlazytext
	this.instance_18 = new lib.commonlazymc();
	this.instance_18.setTransform(6.3,6.3,1,1,0,0,0,6.3,6.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_18}]}).wait(331));

	// Statictexts
	//this.text_34 = new DOMObject({type:"TEXT" , align:"center" ,text:"192.165.202.129", size:"11"});	
	this.text_34 = new cjs.Text("209.165.202.129", "11px Arial", "#393536");
	this.text_34.textAlign = "center";
	this.text_34.lineHeight = 13;
	this.text_34.setTransform(415.9,240);
	
	//this.text_35 = new DOMObject({type:"TEXT" , align:"center" ,text:"192.165.201.1", size:"11"});

	this.text_35 = new cjs.Text("209.165.201.1", "11px Arial", "#393536");
	this.text_35.textAlign = "center";
	this.text_35.lineHeight = 13;
	this.text_35.setTransform(422.3,108);
	
	this.text_36 = new DOMObject({type:"TEXT" , align:"center" ,text:"192.168.10.11", size:"11"});

	//this.text_36 = new cjs.Text("192.168.10.11", "11px Arial", "#393536");
	//this.text_36.textAlign = "center";
	//this.text_36.lineHeight = 13;
	this.text_36.setTransform(20,239.5);
	
     this.text_37 = new DOMObject({type:"TEXT" , align:"center" ,text:"192.168.10.10", size:"11"});
	//this.text_37 = new cjs.Text("192.168.10.10", "11px Arial", "#393536");
	//this.text_37.textAlign = "center";
	//this.text_37.lineHeight = 13;
	this.text_37.setTransform(20,138.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_37},{t:this.text_36},{t:this.text_35},{t:this.text_34}]}).wait(331));

	// Table2
	this.instance_19 = new lib.table2();
	this.instance_19.setTransform(236.4,310,1,1,0,0,0,230,83.4);
	this.instance_19.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(123).to({alpha:1},0).wait(208));

	// bg
	this.instance_20 = new lib.bg();
	this.instance_20.setTransform(235,200,1,1,0,0,0,235,200);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_20}]}).wait(331));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-207.2,0,677.3,400);


(lib.Main = function() {
	this.initialize();

	// Animation
	this.anim01 = new lib.animation01();

	this.addChild(this.anim01);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-207.2,0,677.3,400);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;