(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.classesmediaMediaObject = function() {
	this.initialize();

	// main
	this.instance = new lib.Main();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-55.9,0,526,400.2);


// symbols:
(lib._11_1_2_4 = function() {
	this.initialize(img._11_1_2_4);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,653,556);


(lib.arrow = function() {
	this.initialize(img.arrow);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,10,52);


(lib.envelope_closed_static = function() {
	this.initialize(img.envelope_closed_static);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,123,79);


(lib.table = function() {
	this.initialize(img.table);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,278,92);


(lib.table_2row = function() {
	this.initialize(img.table_2row);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,278,113);


(lib.arrowMc = function() {
	this.initialize();

	// arrowImg
	this.instance = new lib.arrow();
	this.instance.setTransform(-4.9,0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-4.9,0,10,52);


(lib.table2 = function() {
	this.initialize();

	// Lazy text
 	this.text = new DOMObject({type:"TEXT" , align:"left" ,compId:"ID_txt06",  width:"128", expand:"up+down", size:"10",color:"#ffffff"}); 
	this.text.setTransform(160,45.2);

 	this.text_1 = new DOMObject({type:"TEXT" , align:"left" ,compId:"ID_txt05",  width:"128", expand:"up+down", size:"10",color:"#ffffff"}); 
	this.text_1.setTransform(14,45.2);

	//this.text_2 = new cjs.Text("ID_txt04", "11px Arial");
 	this.text_2 = new DOMObject({type:"TEXT" , align:"left" ,compId:"ID_txt04",  width:"274", expand:"up+down", size:"10"}); 
	this.text_2.setTransform(4,4.2);

	// static text
	this.text_3 = new cjs.Text("209.165.200.226:1445", "11px Arial", "#393536");
 	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 13;
	this.text_3.setTransform(59.1,94.9);

	this.text_4 = new cjs.Text("192.168.10.12:1444", "11px Arial", "#393536");
	this.text_4.lineHeight = 13;
	this.text_4.setTransform(141.1,94.9);

	this.text_5 = new cjs.Text("209.165.200.226:1444", "11px Arial", "#393536");
	this.text_5.textAlign = "center";
	this.text_5.lineHeight = 13;
	this.text_5.setTransform(59.1,77.9);

	this.text_6 = new cjs.Text("192.168.10.11:1444", "11px Arial", "#393536");
	this.text_6.lineHeight = 13;
	this.text_6.setTransform(141.1,77.9);

	// Layer 3
	this.instance_1 = new lib.table_2row();

	this.addChild(this.instance_1,this.text_6,this.text_5,this.text_4,this.text_3,this.text_2,this.text_1,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,278,113);


(lib.table1 = function() {
	this.initialize();

	// Lazy text
 	this.text_7 = new DOMObject({type:"TEXT" , align:"left" ,compId:"ID_txt03",  width:"128", expand:"up+down", size:"10",color:"#ffffff"}); 

	this.text_7.setTransform(160,45.2);

 	this.text_8 = new DOMObject({type:"TEXT" , align:"left" ,compId:"ID_txt02",  width:"128", expand:"up+down", size:"10",color:"#ffffff"}); 

	this.text_8.setTransform(14,45.2);

 	this.text_9 = new DOMObject({type:"TEXT" , align:"left" ,compId:"ID_txt01",  width:"274", expand:"up+down", size:"10"}); 

	this.text_9.setTransform(4,4.2);

	// static text
	this.text_10 = new cjs.Text("209.165.200.226:1444", "11px Arial", "#393536");
	this.text_10.textAlign = "center";
	this.text_10.lineHeight = 13;
	this.text_10.setTransform(59.1,77.9);

	this.text_11 = new cjs.Text("192.168.10.11:1444", "11px Arial", "#393536");
	this.text_11.lineHeight = 13;
	this.text_11.setTransform(141.1,77.9);

	// tableImg
	this.instance_2 = new lib.table();

	this.addChild(this.instance_2,this.text_11,this.text_10,this.text_9,this.text_8,this.text_7);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,278,92);


(lib.envelopeclosedstatic = function() {
	this.initialize(); 
	this.instance = new DOMObject({type:"IMAGE",image:img.envelope_closed_static});
	this.addChild(this.instance);
	this.instance.setTransform(-30.7,-26.1,0.663,0.663);
}).prototype = p = new cjs.Container(); 

(lib.packet4 = function() {
	this.initialize();

	// Layer 1
	this.text_12 = new DOMObject({type:"TEXT" , align:"center" ,compId:"ID_txt14",  width:"120", expand:"up+down", size:"9",bold:"1"}); 

	this.text_12.setTransform(53.3,13);

	this.instance_4 = new lib.envelopeclosedstatic();
	this.instance_4.setTransform(64.9,14.7,0.75,0.75,0,0,0,-45.5,0.5);

	this.addChild(this.instance_4,this.text_12);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(42.6,-0.3,114.6,39.3);


(lib.packet3 = function() {
	this.initialize();

	// Layer 1
	this.text_13 = new DOMObject({type:"TEXT" , align:"center" ,compId:"ID_txt13",  width:"120", expand:"up+down", size:"9",bold:"1"}); 

	this.text_13.setTransform(48,13);

	this.instance_5 = new lib.envelopeclosedstatic();
	this.instance_5.setTransform(60.9,14.7,0.75,0.75,0,0,0,-45.5,0.5);

	this.addChild(this.instance_5,this.text_13);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(48.7,-0.3,102.4,39.3);


(lib.packet2 = function() {
	this.initialize();

	// Layer 1
	this.text_14 = new DOMObject({type:"TEXT" , align:"center" ,compId:"ID_txt12",  width:"120", expand:"up+down", size:"9",bold:"1"}); 

	this.text_14.setTransform(53.3,18);

	this.instance_6 = new lib.envelopeclosedstatic();
	this.instance_6.setTransform(63.9,19.7,0.75,0.75,0,0,0,-45.5,0.5);

	this.addChild(this.instance_6,this.text_14);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(42.6,-0.3,114.6,39.3);


(lib.packet = function() {
	this.initialize();

	// Layer 1
	//this.text_15 = new cjs.Text("SA\n192.168.10.11:1444", "bold 11px Arial", "#393536");
	this.text_15 = new DOMObject({type:"TEXT" , align:"center" ,compId:"ID_txt11",  width:"120", expand:"up+down", size:"9",bold:"1"}); 
	this.text_15.setTransform(48,13);

	this.instance_7 = new lib.envelopeclosedstatic();
	this.instance_7.setTransform(60.9,14.7,0.75,0.75,0,0,0,-45.5,0.5);

	this.addChild(this.instance_7,this.text_15);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(49,-0.3,101.8,39.3);


(lib.animation01 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{},true);

	// Table1
	this.instance_8 = new lib.table1();
	this.instance_8.setTransform(323.7,257.7,1,1,0,0,0,138.2,47.5);
	this.instance_8.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(106).to({alpha:1},0).wait(297).to({alpha:0},0).wait(157));

	// Table2
	this.instance_9 = new lib.table2();
	this.instance_9.setTransform(323.7,257.7,1,1,0,0,0,138.2,47.5);
	this.instance_9.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(403).to({alpha:1},0).wait(157));

	// Packet4
	this.instance_10 = new lib.packet4();
	this.instance_10.setTransform(185.1,152,1,1,0,0,0,65.8,19.7);
	this.instance_10.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(454).to({x:206.7,alpha:1},9).to({x:336.3},54).to({x:361.1,alpha:0},11).wait(32));

	// Packet3
	this.instance_11 = new lib.packet3();
	this.instance_11.setTransform(-38.8,281,1,1,0,0,0,65.8,19.7);
	this.instance_11.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(267).to({x:101.1,y:280,alpha:1},43).wait(1).to({y:152},43).wait(1).to({x:151.1},28).to({x:201.1,alpha:0},20).wait(157));

	// packet2
	this.instance_12 = new lib.packet2();
	this.instance_12.setTransform(196.1,152,1,1,0,0,0,65.8,19.7);
	this.instance_12.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(165).to({x:221.6,alpha:1},10).to({x:346.8},49).to({x:372.1,alpha:0},12).wait(324));

	// Packet
	this.instance_13 = new lib.packet();
	this.instance_13.setTransform(-38.8,188,1,1,0,0,0,65.8,19.7);
	this.instance_13.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({x:101.1,alpha:1},47).wait(1).to({y:152},17).wait(1).to({x:151.1},20).to({x:201.1,alpha:0},20).wait(454));

	// lazy text
	 	this.text_16 = new DOMObject({type:"TEXT" , align:"center" ,compId:"ID_txt09",  width:"56", expand:"up+down", size:"10"}); 

 
	this.text_16.setTransform(379,142.3);

	 	this.text_17 = new DOMObject({type:"TEXT" , align:"center" ,compId:"ID_txt08",  width:"56", expand:"up+down", size:"10"}); 

	this.text_17.setTransform(317,94.3);

	this.text_18 = new DOMObject({type:"TEXT" , align:"center" ,compId:"ID_txt10",  width:"56", expand:"up+down", size:"10"}); 

	this.text_18.setTransform(70,100.3);

	this.text_19 = new DOMObject({type:"TEXT" , align:"center" ,compId:"ID_txt07",  width:"56", expand:"up+down", size:"10"}); 

	this.text_19.setTransform(60,42.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_19},{t:this.text_18},{t:this.text_17},{t:this.text_16}]}).wait(560));

	// Texts
	this.text_20 = new cjs.Text("192.168.10.12", "11px Arial", "#393536");
	this.text_20.textAlign = "center";
	this.text_20.lineHeight = 13;
	this.text_20.setTransform(59.2,322.5);

	this.text_21 = new cjs.Text("192.168.10.11", "11px Arial", "#393536");
	this.text_21.textAlign = "center";
	this.text_21.lineHeight = 13;
	this.text_21.setTransform(59.2,228.5);

	this.text_22 = new cjs.Text("192.168.10.10", "11px Arial", "#393536");
	this.text_22.textAlign = "center";
	this.text_22.lineHeight = 13;
	this.text_22.setTransform(59.2,134);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_22},{t:this.text_21},{t:this.text_20}]}).wait(560));

	// arrow
	this.instance_14 = new lib.arrowMc();
	this.instance_14.setTransform(232.6,197.6,1,1,0,0,0,0,24.4);
	this.instance_14.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(106).to({alpha:1},0).wait(454));

	// bg
	this.instance_15 = new lib._11_1_2_4();
	this.instance_15.setTransform(0,0,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_15}]}).wait(560));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55.9,0,526,400.2);


(lib.Main = function() {
	this.initialize();

	// Animation
	this.anim01 = new lib.animation01();

	this.addChild(this.anim01);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-55.9,0,526,400.2);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;