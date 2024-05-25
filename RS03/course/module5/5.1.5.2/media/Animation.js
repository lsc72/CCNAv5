(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.classesmediaMediaObject = function() {
	this.initialize();

	// main
	this.instance = new lib.Main();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,491.6,400);


// symbols:
(lib.media_7142 = function() {
	this.initialize(img.media_7142);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,653,556);


(lib.Router = function() {
	this.initialize(img.Router);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,148,107);


(lib.routerhigh = function() {
	this.initialize(img.routerhigh);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,64,52);


(lib.router_highlight = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.routerhigh();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,64,52);


(lib.lazytxt1 = function() {
	this.initialize();

	// Layer 2
	this.text = new DOMObject({type:"TEXT",compId:"ID_txt03",width:"115",expand:"down",class:"orangeCallOut",align:"center",size:"10"});
	
	this.text.setTransform(21,0);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,62.8,16.2);


(lib.lazytext2 = function() {
	this.initialize();

	// Layer 2
	this.text = new DOMObject({type:"TEXT",compId:"ID_txt04",width:"115",expand:"down",class:"orangeCallOut",align:"center",size:"10"});
	this.text.setTransform(21,0);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,62.8,16.2);


(lib.ID_txt03a = function() {
	this.initialize();

	// Layer 2
	this.text = new DOMObject({type:"TEXT",compId:"ID_txt03a",width:"115",expand:"down",class:"orangeCallOut",align:"center",size:"10"});
	this.text.setTransform(21,0);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,62.8,16.2);

(lib.Router_1 = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.Router();
	this.instance.setTransform(0,-66.5,0.626,0.624);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-66.5,92.7,66.8);


(lib.popupbg = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E6EBA8").s().p("AoqKZIAA0xIRUAAIAAUxg");
	this.shape.setTransform(55.5,66.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,111,133);


(lib.Arrow = function() {
	this.initialize();

	// shape
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgPAAIgiggIBiAgIhiAhg");
	this.shape.setTransform(5,0);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-3.2,10,6.7);


(lib.popup2 = function() {
	this.initialize();

	// Layer 2
	this.text = new DOMObject({type:"TEXT",compId:"ID_txt02d",width:"32",expand:"down",class:"greyCallOut",align:"center",size:"10"});
	this.text.setTransform(65,52.7);

	this.text_1= new DOMObject({type:"TEXT",compId:"ID_txt02e",width:"97",expand:"down",class:"greyCallOut",align:"left",size:"10"});
	this.text_1.setTransform(1,110.2);

	this.text_2 = new DOMObject({type:"TEXT",compId:"ID_txt02c",width:"47",expand:"left",class:"greyCallOut",align:"left",size:"10"});
	this.text_2.setTransform(2,77);

	this.text_3 = new DOMObject({type:"TEXT",compId:"ID_txt02b",width:"47",expand:"left",class:"greyCallOut",align:"left",size:"10"});
	this.text_3.setTransform(2,55);

	this.text_4 = new DOMObject({type:"TEXT",compId:"ID_txt02a",width:"100",expand:"down",align:"left",size:"10"});
	this.text_4.setTransform(0,3);

	// arrows
	this.instance = new lib.Arrow();
	this.instance.setTransform(89.1,105.3,1,1,90,0,0,5,0);

	this.instance_1 = new lib.Arrow();
	this.instance_1.setTransform(60.6,86.5,1,1,0,0,0,5,0);

	this.instance_2 = new lib.Arrow();
	this.instance_2.setTransform(60.6,63.9,1,1,0,0,0,5,0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AAADjIAAnF");
	this.shape.setTransform(89.1,82.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,2,1).p("AgdBwIA7AAAgdhwIA6AA");
	this.shape_1.setTransform(57.9,75.2);

	// bg
	this.instance_3 = new lib.popupbg();
	this.instance_3.setTransform(52,66.5,0.937,1,0,0,0,55.5,66.5);
	this.instance_3.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,2,3);

	this.addChild(this.instance_3,this.shape_1,this.shape,this.instance_2,this.instance_1,this.instance,this.text_4,this.text_3,this.text_2,this.text_1,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,134.6,133);


(lib.popup = function() {
	this.initialize();

	// Layer 2
	this.text = new DOMObject({type:"TEXT",compId:"ID_txt01d",width:"32",expand:"down",class:"greyCallOut",align:"center",size:"10"});
	this.text.setTransform(66,52.8);

	this.text_1 = new DOMObject({type:"TEXT",compId:"ID_txt01e",width:"96",expand:"down",class:"greyCallOut",align:"left",size:"10"});	
	this.text_1.setTransform(1,109.9);

	this.text_2 = new DOMObject({type:"TEXT",compId:"ID_txt01c",width:"47",expand:"left",class:"greyCallOut",align:"left",size:"10"});
	this.text_2.setTransform(2,75);

	this.text_3 = new DOMObject({type:"TEXT",compId:"ID_txt01a",width:"90",expand:"down",align:"left",size:"10"});	
	this.text_3.setTransform(0,5);

	this.text_4 = new DOMObject({type:"TEXT",compId:"ID_txt01b",width:"47",expand:"left",class:"greyCallOut",align:"left",size:"10"});
	this.text_4.setTransform(2,53);

	// arrows
	this.instance = new lib.Arrow();
	this.instance.setTransform(89.1,105.3,1,1,90,0,0,5,0);

	this.instance_1 = new lib.Arrow();
	this.instance_1.setTransform(60.6,86.5,1,1,0,0,0,5,0);

	this.instance_2 = new lib.Arrow();
	this.instance_2.setTransform(60.6,63.9,1,1,0,0,0,5,0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AAADjIAAnF");
	this.shape.setTransform(89.1,82.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,2,1).p("AgdhwIA6AAAgdBwIA7AA");
	this.shape_1.setTransform(57.9,75.2);

	// bg
	this.instance_3 = new lib.popupbg();
	this.instance_3.setTransform(52,66.5,0.937,1,0,0,0,55.5,66.5);
	this.instance_3.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,2,3);

	this.addChild(this.instance_3,this.shape_1,this.shape,this.instance_2,this.instance_1,this.instance,this.text_4,this.text_3,this.text_2,this.text_1,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,134.5,133);


(lib.Animation_s1 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// r1r3 text
	this.text = new DOMObject({type:"TEXT",text:"R3",color:"#FFFFFF",bold:"1"});	
	this.text.setTransform(327,185.5);

	this.text_1 = new DOMObject({type:"TEXT",text:"R1",color:"#FFFFFF",bold:"1"});	
	this.text_1.setTransform(144,185.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_1},{t:this.text}]}).wait(493));

	// ID_txt03a
	this.instance = new lib.ID_txt03a();
	this.instance.setTransform(220.6,179.5,1,1,0,0,0,57.5,8.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(371).to({alpha:1},0).wait(73).to({alpha:0},0).wait(49));

	// text ong
	this.instance_1 = new lib.lazytext2();
	this.instance_1.setTransform(220.6,179.5,1,1,0,0,0,57.5,8.5);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(472).to({alpha:1},0).wait(21));

	// center text
	this.instance_2 = new lib.lazytxt1();
	this.instance_2.setTransform(220.6,179.5,1,1,0,0,0,57.5,8.5);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(270).to({alpha:1},0).wait(73).to({alpha:0},0).wait(150));

	// ip addr
	this.text_2 = new DOMObject({type:"TEXT",text:"192.168.30.10/24",size:"10",width:"100"}); 
	this.text_2.setTransform(290,337);

	this.text_3 = new DOMObject({type:"TEXT",text:"192.168.10.10/24",size:"10",width:"100"}); 
	this.text_3.setTransform(110,337);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_3},{t:this.text_2}]}).wait(493));

	// arc
	this.instance_3 = new lib.popup2();
	this.instance_3.setTransform(23.7,112);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(161).to({alpha:1},0).wait(7).to({alpha:0},0).wait(7).to({alpha:1},0).wait(7).to({alpha:0},0).wait(7).to({alpha:1},0).wait(304));

	// topology icons
	this.instance_4 = new lib.popup();
	this.instance_4.setTransform(357.2,112);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(14).to({alpha:1},0).wait(8).to({alpha:0},0).wait(8).to({alpha:1},0).wait(8).to({alpha:0},0).wait(8).to({alpha:1},0).wait(447));

	// topology lines
	this.instance_5 = new lib.Router_1();
	this.instance_5.setTransform(313.2,199.4,0.432,0.432,0,0,0,-1.1,-1);

	this.instance_6 = new lib.Router_1();
	this.instance_6.setTransform(131.4,199.7,0.432,0.432,0,0,0,-1.1,-1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5}]}).wait(493));

	// r1highlight
	this.instance_7 = new lib.router_highlight();
	this.instance_7.setTransform(153.5,187.6,1,1,0,0,0,32,26);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(161).to({x:153,alpha:1},0).wait(7).to({x:153.5,alpha:0},0).wait(7).to({alpha:1},0).wait(7).to({alpha:0},0).wait(7).to({alpha:1},0).wait(47).to({alpha:0},0).wait(236).to({alpha:1},0).wait(21));


	// r3 highligh
	this.instance_8 = new lib.router_highlight();
	this.instance_8.setTransform(335.2,187.6,1,1,0,0,0,32,26);
	this.instance_8.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(14).to({alpha:1},0).wait(8).to({alpha:0},0).wait(8).to({alpha:1},0).wait(8).to({alpha:0},0).wait(8).to({alpha:1},0).wait(53).to({alpha:0},0).wait(373).to({alpha:1},0).wait(21));

	// image
	this.instance_9 = new lib.media_7142();
	this.instance_9.setTransform(0,0,0.72,0.719);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9}]}).wait(493));

	// white bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgktAfPMAAAg+eMBJaAAAMAAAA+eg");
	this.shape.setTransform(235,200);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).wait(493));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,491.6,400);


(lib.Main = function() {
	this.initialize();

	// anim
	this.anim = new lib.Animation_s1();
	this.anim.setTransform(250,224,1,1,0,0,0,250,224);

	this.addChild(this.anim);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,491.6,400);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;