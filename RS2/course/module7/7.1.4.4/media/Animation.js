(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.classesmediaMediaObject = function() {
	this.initialize();

	// main
	this.instance = new lib.Main();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,4,470,400);


// symbols:
(lib._3144 = function() {
	this.initialize(img._3144);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,653,556);


(lib.envelope_closed_static = function() {
	this.initialize();	
	this.image = new DOMObject({type:"IMAGE",image:img.envelope_closed_static});
	this.addChild(this.image);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,123,79);


(lib.RedX = function() {
	this.initialize(img.RedX);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,74,90);


(lib.Router = function() {
	this.initialize(img.Router);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,148,107);


(lib.Wan_line = function() {
	this.initialize(img.Wan_line);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,314,23);


(lib.ID_txt07 = function() {
	this.initialize();

	// txt
	this.text = new DOMObject({type:"TEXT",compId:"ID_txt07",width:"460.05",expand:"up",align:"center"});	
    this.text.setTransform(1,5);
	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,460.1,15.2);


(lib.ID_txt04 = function() {ID_txt07
	this.initialize();

	// txt
	this.text = new DOMObject({type:"TEXT",compId:"ID_txt04",width:"134",expand:"down",align:"center",class:"lazybgCallOut"});	
	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,134,15.2);


(lib.ID_txt03 = function() {
	this.initialize();

	// txt
	this.text = new DOMObject({type:"TEXT",compId:"ID_txt03",width:"115",expand:"left",align:"center",class:"lazybgCallOut"});
	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,104,15.2);


(lib.ID_txt02 = function() {
	this.initialize();

	// txt
	this.text = new DOMObject({type:"TEXT",compId:"ID_txt02",width:"104",expand:"down",align:"center",class:"lazybgCallOut"});		
	this.text.setTransform(15,0,0.776,1);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,104,15.2);


(lib.ID_txt01 = function() {
	this.initialize();

	// txt
	this.text = new DOMObject({type:"TEXT",compId:"ID_txt01",width:"115",expand:"right",align:"center",class:"lazybgCallOut"});
	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,104,15.2);


(lib.RedX_1 = function() {
	this.initialize();

	// png
	this.instance = new lib.RedX();
	this.instance.setTransform(-18.3,-22.2,0.497,0.502);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-18.3,-22.2,36.8,45.2);


(lib.envelopeclosedstatic = function() {
	this.initialize();

	// png
	this.instance = new lib.envelope_closed_static();
	this.instance.setTransform(-29,-26.1,0.667,0.663);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-39.5,-26.1,82.1,52.4);


(lib.EnvelopeStatic3 = function() {
	this.initialize();

	// txt
	this.text = new DOMObject({type:"TEXT",compId:"ID_txt06",width:"65.7",expand:"up+down",align:"center"});	
	this.text.setTransform(-1,13.4);

	// Layer 1
	this.instance = new lib.envelopeclosedstatic();
	this.instance.setTransform(32.9,22.1,0.9,0.9,0,0,0,1.4,0.1);

	this.addChild(this.instance,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,1.1,65.8,41.9);


(lib.EnvelopeStatic = function() {
	this.initialize();

	// txt
	this.text = new DOMObject({type:"TEXT",compId:"ID_txt05",width:"65.7",expand:"up+down",align:"center"});	
	this.text.setTransform(-1,13.4);

	// envelope
	this.instance = new lib.envelopeclosedstatic();
	this.instance.setTransform(32.9,22.1,0.9,0.9,0,0,0,1.4,0.1);

	this.addChild(this.instance,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,1.1,65.8,41.9);


(lib.animation01 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// envelope2
	this.instance = new lib.EnvelopeStatic3();
	this.instance.setTransform(208.3,164.3,1,1,0,0,0,30.8,19.7);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(85).to({alpha:1},0).to({regX:31,regY:19.5,y:44.2},31).to({regX:30.8,regY:19.7,y:45.3,alpha:0},11).wait(32));

	// envelope1
	this.instance_1 = new lib.EnvelopeStatic();
	this.instance_1.setTransform(77.3,277.2,1,1,0,0,0,30.8,19.7);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(19).to({alpha:1},26).to({x:208.3,y:164.3},30).wait(10).to({x:349.4,y:276.2},31).wait(11).to({regX:30.9,x:424.5},31).wait(1));

	// static text
	this.text = new DOMObject({type:"TEXT",text:"172.16.3.0/24", color:"#393536"});	
	this.text.textAlign = "center";
	this.text.lineHeight = 12;
	this.text.setTransform(5,240.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text}]}).wait(159));

	// ID_txt07
	this.instance_2 = new lib.ID_txt07();
	this.instance_2.setTransform(234.4,342.1,1,1,0,0,0,230,8.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).wait(159));

	// ID_txt04
	this.instance_3 = new lib.ID_txt04();
	this.instance_3.setTransform(324,44.4,1,1,0,0,0,77,10);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).wait(159));

	// ID_txt03
	this.instance_4 = new lib.ID_txt03();
	this.instance_4.setTransform(360.5,316,1,1,0,0,0,57.5,10);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4}]}).wait(159));

	// ID_txt02
	this.instance_5 = new lib.ID_txt02();
	this.instance_5.setTransform(211,213.6,1,1,0,0,0,52,14.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5}]}).wait(159));

	// ID_txt01
	this.instance_6 = new lib.ID_txt01();
	this.instance_6.setTransform(70.5,316,1,1,0,0,0,57.5,10);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6}]}).wait(159));

	// cross mark
	this.instance_7 = new lib.RedX_1();
	this.instance_7.setTransform(20.6,280.7,0.64,0.64,0,0,0,0,0.3);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(5).to({alpha:1},9).wait(145));

	// bg
	this.instance_8 = new lib._3144();
	this.instance_8.setTransform(0,0,0.72,0.719);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8}]}).wait(159));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,470,400);


(lib.Main = function() {
	this.initialize();

	// slide1
	this.anim01 = new lib.animation01();
	this.anim01.setTransform(0,4);

	this.addChild(this.anim01);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,4,470,400);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;