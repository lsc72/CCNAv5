(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.classesmediaMediaObject = function() {
	this.initialize();

	// Main
	this.instance = new lib.Main();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,470,400);


// symbols:
(lib._2_1_2_5 = function() {
	this.initialize(img._2_1_2_5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,470,400);


(lib.Router = function() {
	this.initialize(img.Router);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,148,107);


(lib.Server_file = function() {
	this.initialize(img.Server_file);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,102,143);


(lib.Switch_ATM = function() {
	this.initialize(img.Switch_ATM);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,102,103);


(lib.Tween9 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#46A040").s().p("AhiBiQgpgpAAg5QAAg4ApgqQAqgpA4AAQA5AAApApQAqAqAAA4QAAA5gqApQgpAqg5AAQg4AAgqgqg");
	this.shape.setTransform(0,0.2,0.854,0.854);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-12,-11.7,24,24);


(lib.Tween7 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#164F6A").s().p("AhiBiQgpgpAAg5QAAg4ApgqQAqgpA4AAQA5AAApApQAqAqAAA4QAAA5gqApQgpAqg5AAQg4AAgqgqg");
	this.shape.setTransform(-0.2,0.7,0.854,0.854);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-12.2,-11.2,24,24);


(lib.Tween5 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFE773").s().p("AhTBUQgkgjABgxQgBgwAkgjQAjgkAwABQAxgBAjAkQAkAjAAAwQAAAxgkAjQgjAkgxAAQgwAAgjgkg");
	this.shape.setTransform(0,0.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-12,-11.9,24,24);


(lib.Tween3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#652C8A").s().p("AhUBUQgjgjAAgxQAAgwAjgjQAkgjAwAAQAxAAAjAjQAkAjAAAwQAAAxgkAjQgjAkgxgBQgwABgkgkg");
	this.shape.setTransform(0,0.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-12,-11.5,24,24);


(lib.Tween1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F26200").s().p("AhUBUQgjgjAAgxQAAgwAjgkQAkgjAwAAQAxAAAjAjQAkAkAAAwQAAAxgkAjQgjAkgxAAQgwAAgkgkg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-12,-12,24,24);


(lib.ID_txt02 = function() {
	this.initialize();

	// txt
	this.text= new DOMObject({type:"TEXT" , align:"left" ,compId:"ID_txt02", width:"285",  size:"11", expand:"up"}); 	
	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,16.2);


(lib.ID_txt01 = function() {
	this.initialize();

	// txt
	this.text= new DOMObject({type:"TEXT" , align:"right" ,compId:"ID_txt01", width:"104",  size:"11", expand:"left"});	
	this.text.setTransform(-3,0);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,104,16.2);


(lib.bubble02 = function() {
	this.initialize();

	// text
	this.text = new DOMObject({ type:"BUBBLE", compId:"ID_txt04",  width:"109.2", height:"80", align:"left", tailPosition:"3", tailFlip:"0" }); 
	this.text.setTransform(-1,-20);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2.9,31.3,109.2,17.5);


(lib.bubble01 = function() {
	this.initialize();

	// text
	this.text = new DOMObject({ type:"BUBBLE", compId:"ID_txt03",  width:"75", height:"45.05", align:"left", tailPosition:"7", tailFlip:"0" }); 
	this.text.setTransform(0,0);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,12.2,85,16.2);


(lib.SwitchATM = function() {
	this.initialize();

	// png
	this.instance = new lib.Switch_ATM();
	this.instance.setTransform(0.4,-64.4,0.623,0.626);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.4,-64.4,63.5,64.5);


(lib.Serverfile = function() {
	this.initialize();

	// png
	this.instance = new lib.Server_file();
	this.instance.setTransform(0,-89.2,0.652,0.625);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-89.2,66.5,89.4);


(lib.Router_1 = function() {
	this.initialize();

	// png
	this.instance = new lib.Router();
	this.instance.setTransform(0,-67.9,0.626,0.624);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-67.9,92.7,66.8);


(lib.animation01 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// lazy text
	this.instance = new lib.ID_txt02();
	this.instance.setTransform(162.6,347.4,1,1,0,0,0,150,8.5);

	this.instance_1 = new lib.ID_txt01();
	this.instance_1.setTransform(131.6,53.5,1,1,0,0,0,52,8.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(495));

	// bubble2
	this.instance_2 = new lib.bubble02();
	this.instance_2.setTransform(321.5,280.9);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(489).to({x:306.4,y:268.8,alpha:1},0).wait(6));

	// bubble01
	this.instance_3 = new lib.bubble01();
	this.instance_3.setTransform(37.8,123,1,1,0,0,0,35.5,22.5);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(3).to({y:101,alpha:1},0).wait(492));

	// text
	this.text = new cjs.Text("SRV2", "bold 11px Arial", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 13;
	this.text.setTransform(437,280.7);

	this.text_1 = new cjs.Text("SRV1", "bold 11px Arial", "#FFFFFF");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 13;
	this.text_1.setTransform(27.3,161);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_1},{t:this.text}]}).wait(495));

	// icons
	this.instance_4 = new lib.SwitchATM();
	this.instance_4.setTransform(232.8,280.3,0.706,0.706,0,0,0,31.8,-32.2);

	this.instance_5 = new lib.SwitchATM();
	this.instance_5.setTransform(235.4,76.3,0.706,0.706,0,0,0,31.8,-32.2);

	this.instance_6 = new lib.SwitchATM();
	this.instance_6.setTransform(385,98.3,0.706,0.706,0,0,0,31.8,-32.2);

	this.instance_7 = new lib.SwitchATM();
	this.instance_7.setTransform(304.8,165.8,0.706,0.706,0,0,0,31.8,-32.2);

	this.instance_8 = new lib.SwitchATM();
	this.instance_8.setTransform(198.8,165.8,0.706,0.706,0,0,0,31.8,-32.2);

	this.instance_9 = new lib.SwitchATM();
	this.instance_9.setTransform(110.8,259.5,0.706,0.706,0,0,0,31.8,-32.2);

	this.instance_10 = new lib.Router_1();
	this.instance_10.setTransform(362.6,240.6,0.542,0.542,0,0,0,46.4,-33.3);

	this.instance_11 = new lib.Serverfile();
	this.instance_11.setTransform(441,278.3,0.731,0.731,0,0,0,31.8,-44.6);

	this.instance_12 = new lib.Serverfile();
	this.instance_12.setTransform(31.1,157.9,0.731,0.731,0,0,0,31.8,-44.6);

	this.instance_13 = new lib.Router_1();
	this.instance_13.setTransform(116.5,102.1,0.542,0.542,0,0,0,46.4,-33.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4}]}).wait(495));

	// 72
	this.instance_14 = new lib.Tween5("synched",0);
	this.instance_14.setTransform(198.7,165.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({x:304.7},50).to({x:384.9,y:98.3},49).wait(396));

	// 219
	this.instance_15 = new lib.Tween7("synched",0);
	this.instance_15.setTransform(198.8,91.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({x:198.7,y:165.8},50).to({x:300.3,y:170.6},49).to({x:237.9,y:78.8},50).wait(346));

	// 87
	this.instance_16 = new lib.Tween9("synched",0);
	this.instance_16.setTransform(198.8,62.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).to({x:198.7,y:165.8},99).to({x:300.1,y:170.3},50).to({x:231,y:285.7},84).wait(262));

	// 175
	this.instance_17 = new lib.Tween3("synched",0);
	this.instance_17.setTransform(198.8,34);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).to({y:61.3},50).to({y:90},49).to({x:200.9,y:165.3},50).to({x:300.1},97).to({x:384.9,y:98.3},85).wait(164));

	// 121
	this.instance_18 = new lib.Tween1("synched",0);
	this.instance_18.setTransform(36.3,171.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).to({x:113.9,y:105.6},64).to({x:198.6,y:166.1},41).to({x:198.4,y:64.7},1).to({x:198.7,y:165.8},103).to({startPosition:0},62).to({x:304.7},88).to({x:362.5,y:240.5},60).to({x:429.8,y:298.9},70).wait(6));

	// bg
	this.instance_19 = new lib._2_1_2_5();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_19}]}).wait(495));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,470,400);


(lib.Main = function() {
	this.initialize();

	// animation 1
	this.anim01 = new lib.animation01();

	this.addChild(this.anim01);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,470,400);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;