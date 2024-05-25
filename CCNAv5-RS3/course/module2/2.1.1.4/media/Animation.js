(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.classesmediaMediaObject = function() {
	this.initialize();

	// main
	this.instance = new lib.Main();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-8.6,0.2,470,400);


// symbols:
(lib.envelope_closed_static = function() {
	this.initialize();	
	this.image = new DOMObject({type:"IMAGE",image:img.envelope_closed_static});
	this.addChild(this.image);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,123,79);


(lib.media_4114 = function() {
	this.initialize(img.media_4114);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,653,556);


(lib.textbubble3 = function() {
	this.initialize();

	// Layer 1
	this.text = new DOMObject({type:"TEXT",compId:"ID_s1_txt03",width:"40",expand:"down",align:"center",color:"#652c8a",bold:"1"});
	this.text.setTransform(0,0);
	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,59,15.2);


(lib.textBubble2 = function() {
	this.initialize();

	// Layer 1
	this.text = new DOMObject({type:"TEXT",compId:"ID_s1_txt01",width:"40",expand:"up",align:"center",color:"#652c8a",bold:"1"});
	this.text.setTransform(7,0.1);
	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(1,0.1,61,15.2);


(lib.textbubble1 = function() {
	this.initialize();

	// Layer 1
	this.text = new DOMObject({type:"TEXT",compId:"ID_s1_txt02",width:"50",expand:"down",align:"center",color:"#652c8a",bold:"1"});
	this.text.setTransform(26,0);
	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0.7,73,15.2);


(lib.greenbubble3 = function() {
	this.initialize();

	// Layer 1
	this.text = new DOMObject({type:"TEXT",compId:"ID_s1_txt10",width:"87",expand:"up",align:"left",color:"#393536",class:"greenCallOut"});
	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,104,15.2);


(lib.greenbubble2 = function() {
	this.initialize();

	// Layer 1
	this.text = new DOMObject({type:"TEXT",compId:"ID_s1_txt09",width:"87",expand:"up",align:"left",color:"#393536",class:"greenCallOut"});
	this.text.setTransform(1,-8);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(1,0.1,66,15.2);


(lib.greenbubble1 = function() {
	this.initialize();

	// Layer 1
	this.text = new DOMObject({type:"TEXT",compId:"ID_s1_txt08",width:"87",expand:"up",align:"left",color:"#393536",class:"greenCallOut"});
	this.text.setTransform(1,-8);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(1,1.1,65,16);


(lib.textbox4 = function() {
	this.initialize();

	// Layer 1
	this.text = new TextBoxComp({width:120,height:180,titleId:"",bodyId:"ID_s1_txt07",size:"11",divId:"textBox4"});
	this.text.setTransform(0,0);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.7,0,62.8,16.2);


(lib.textbox3 = function() {
	this.initialize();

	// Layer 1
	this.text = new TextBoxComp({width:120,height:180,titleId:"",bodyId:"ID_s1_txt06",size:"11",divId:"textBox3"});
	this.text.setTransform(0,0);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.7,0.2,62.8,16.2);


(lib.textbox2 = function() {
	this.initialize();

	// Layer 1
	this.text = new TextBoxComp({width:120,height:180,titleId:"",bodyId:"ID_s1_txt05",size:"11",divId:"textBox2"});
	this.text.setTransform(0,0);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,62.8,16.2);


(lib.textbox1 = function() {
	this.initialize();

	// Layer 1
	this.text = new TextBoxComp({width:120,height:180,titleId:"",bodyId:"ID_s1_txt04",size:"11",divId:"textBox1"});
	this.text.setTransform(0,0);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.7,0.2,62.8,16.2);


(lib.envelopeclosedstatic = function() {
	this.initialize();

	// inner lines
	this.instance = new lib.envelope_closed_static();
	this.instance.setTransform(-39.5,-26.1,0.663,0.663);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-39.5,-26.1,81.6,52.4);


(lib.textbox1_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.textbox1();
	this.instance.setTransform(80,77.5,1,1,0,0,0,80,77.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.7,0.2,62.8,16.2);


(lib.Anim = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// envelope4
	this.instance = new lib.envelopeclosedstatic();
	this.instance.setTransform(-25,82.5,0.468,0.468,0,0,0,1.4,0.1);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(171).to({alpha:1},0).to({x:97.1,y:80.5},48).to({alpha:0},14).wait(36));

	// envelope3
	this.instance_1 = new lib.envelopeclosedstatic();
	this.instance_1.setTransform(-25,82.5,0.468,0.468,0,0,0,1.4,0.1);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(122).to({alpha:1},0).to({x:97.1,y:80.5},49).to({alpha:0},15).wait(83));

	// envelope2
	this.instance_2 = new lib.envelopeclosedstatic();
	this.instance_2.setTransform(-140,184.2,0.468,0.468,0,0,0,1.4,0.1);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(73).to({alpha:1},0).to({x:-39.7,y:82.5},49).wait(1).to({alpha:0},0).wait(146));

	// envelope1
	this.instance_3 = new lib.envelopeclosedstatic();
	this.instance_3.setTransform(-140,184.2,0.468,0.468,0,0,0,1.4,0.1);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(73).to({alpha:1},0).to({x:-253.1,y:82.5},49).to({x:-39.7},49).wait(1).to({alpha:0},0).wait(97));

	// Layer 4
	this.instance_4 = new lib.envelopeclosedstatic();
	this.instance_4.setTransform(-140,184.2,0.468,0.468,0,0,0,1.4,0.1);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(73).to({alpha:1},0).to({x:-27.7,y:299.5},49).to({alpha:0},13).wait(134));

	// not allowed
	this.instance_5 = new lib.envelopeclosedstatic();
	this.instance_5.setTransform(-140,184.2,0.468,0.468,0,0,0,1.4,0.1);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(73).to({alpha:1},0).to({x:-140,y:299.5},49).to({alpha:0},13).wait(134));

	// broadcast
	this.instance_6 = new lib.envelopeclosedstatic();
	this.instance_6.setTransform(-266.7,299.5,0.468,0.468,0,0,0,1.4,0.1);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(24).to({alpha:1},0).to({x:-140,y:183.2},48).to({x:-266.7,y:299.5},50).to({alpha:0},13).wait(134));

	// switch texts
	this.instance_7 = new lib.greenbubble3();
	this.instance_7.setTransform(-268.7,205.6,1,1,0,0,0,51.9,8.5);
	this.instance_7.alpha = 0;

	this.instance_8 = new lib.greenbubble2();
	this.instance_8.setTransform(-6.1,58.6,1,1,0,0,0,56.5,8.5);
	this.instance_8.alpha = 0;

	this.instance_9 = new lib.greenbubble1();
	this.instance_9.setTransform(-271.1,58.6,1,1,0,0,0,56.5,8.5);
	this.instance_9.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9,p:{alpha:0}},{t:this.instance_8,p:{alpha:0}},{t:this.instance_7,p:{alpha:0}}]}).to({state:[{t:this.instance_9,p:{alpha:1}},{t:this.instance_8,p:{alpha:1}},{t:this.instance_7,p:{alpha:1}}]},122).wait(147));

	// textbox
	this.instance_10 = new lib.textbox4();
	this.instance_10.setTransform(76.2,111.4,1,1,0,0,0,80,0);
	this.instance_10.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(171).to({alpha:1},0).wait(98));

	// textbox
	this.instance_11 = new lib.textbox3();
	this.instance_11.setTransform(76.2,188.9,1,1,0,0,0,80,77.5);
	this.instance_11.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(122).to({alpha:1},0).wait(49).to({alpha:0},0).wait(98));

	// textbox
	this.instance_12 = new lib.textbox2();
	this.instance_12.setTransform(76.2,188.9,1,1,0,0,0,80,77.5);
	this.instance_12.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(72).to({alpha:1},0).wait(50).to({alpha:0},0).wait(147));

	// textbox
	this.instance_13 = new lib.textbox1_1();
	this.instance_13.setTransform(59.7,201.4,1,1,0,0,0,63.5,90);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(72).to({alpha:0},0).wait(197));

	// text bubbles
	this.instance_14 = new lib.textbubble3();
	this.instance_14.setTransform(-45.4,132.4,1,1,0,0,0,34,8.5);

	this.instance_15 = new lib.textBubble2();
	this.instance_15.setTransform(-149.1,68.6,1,1,0,0,0,34.5,8.5);

	this.instance_16 = new lib.textbubble1();
	this.instance_16.setTransform(-259.1,132.4,1,1,0,0,0,30,8.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_16},{t:this.instance_15},{t:this.instance_14}]}).wait(269));

	// static text
	this.text = new cjs.Text("172.17.10.27", "11px Arial", "#393536");
	this.text.textAlign = "center";
	this.text.lineHeight = 13;
	this.text.setTransform(86.9,100);

	this.text_1 = new cjs.Text("F0/1", "11px Arial", "#393536");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 13;
	this.text_1.setTransform(-107,157.8);
	this.text_1.shadow = new cjs.Shadow("rgba(255,255,255,1)",0,0,5);

	this.text_2 = new cjs.Text("F0/2", "11px Arial", "#393536");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 13;
	this.text_2.setTransform(-187.4,161.9);
	this.text_2.shadow = new cjs.Shadow("rgba(255,255,255,1)",0,0,5);

	this.text_3 = new cjs.Text("F0/2", "11px Arial", "#393536");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 13;
	this.text_3.setTransform(-263.2,98.3);

	this.text_4 = new cjs.Text("F0/1", "11px Arial", "#393536");
	this.text_4.textAlign = "center";
	this.text_4.lineHeight = 13;
	this.text_4.setTransform(-43.1,99.1);

	this.text_5 = new cjs.Text("F0/1", "11px Arial", "#393536");
	this.text_5.textAlign = "center";
	this.text_5.lineHeight = 13;
	this.text_5.setTransform(-224.4,83.7);

	this.text_6 = new cjs.Text("F0/2", "11px Arial", "#393536");
	this.text_6.textAlign = "center";
	this.text_6.lineHeight = 13;
	this.text_6.setTransform(-77.8,83.7);

	this.text_7 = new cjs.Text("F0/3", "11px Arial", "#393536");
	this.text_7.textAlign = "center";
	this.text_7.lineHeight = 13;
	this.text_7.setTransform(-1,81.9);

	this.text_8 = new cjs.Text("172.17.10.22", "11px Arial", "#393536");
	this.text_8.textAlign = "center";
	this.text_8.lineHeight = 13;
	this.text_8.setTransform(-153.9,320.1);

	this.text_9 = new cjs.Text("F0/11", "11px Arial", "#393536");
	this.text_9.textAlign = "center";
	this.text_9.lineHeight = 13;
	this.text_9.setTransform(-194.5,195);

	this.text_10 = new cjs.Text("F0/18", "11px Arial", "#393536");
	this.text_10.textAlign = "center";
	this.text_10.lineHeight = 13;
	this.text_10.setTransform(-147.8,203.3);
	this.text_10.shadow = new cjs.Shadow("rgba(255,255,255,1)",0,0,5);

	this.text_11 = new cjs.Text("172.17.10.21", "11px Arial", "#393536");
	this.text_11.textAlign = "center";
	this.text_11.lineHeight = 13;
	this.text_11.setTransform(-272.7,320.1);

	this.text_12 = new cjs.Text("F0/6", "11px Arial", "#393536");
	this.text_12.textAlign = "center";
	this.text_12.lineHeight = 13;
	this.text_12.setTransform(-115.1,189.4);

	this.text_13 = new cjs.Text("172.17.10.23", "11px Arial", "#393536");
	this.text_13.textAlign = "center";
	this.text_13.lineHeight = 13;
	this.text_13.setTransform(-40.1,320.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_13},{t:this.text_12},{t:this.text_11},{t:this.text_10},{t:this.text_9},{t:this.text_8},{t:this.text_7},{t:this.text_6},{t:this.text_5},{t:this.text_4},{t:this.text_3},{t:this.text_2},{t:this.text_1},{t:this.text}]}).wait(269));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgOAqIAAhTIAdAAIAABTg");
	this.shape.setTransform(-150.2,208.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).wait(269));

	// Layer 1
	this.instance_17 = new lib.media_4114();
	this.instance_17.setTransform(-341.9,-16.9,0.72,0.719);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_17}]}).wait(269));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-341.9,-16.9,470,400);


(lib.slide_1 = function() {
	this.initialize();

	// animation
	this.Anim = new lib.Anim();
	this.Anim.setTransform(337.5,220.8,1,1,0,0,0,34.1,209.6);

	this.addChild(this.Anim);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-38.6,-5.8,470,400);


(lib.Main = function() {
	this.initialize();

	// animation
	this.anim01 = new lib.Anim();
	this.anim01.setTransform(367.5,226.8,1,1,0,0,0,34.1,209.6);

	this.addChild(this.anim01);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-8.6,0.2,470,400);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;