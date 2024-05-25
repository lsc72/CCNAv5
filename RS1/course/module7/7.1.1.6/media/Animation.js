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
(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,653,556);


(lib.Bitmap2 = function() {
	this.initialize(img.Bitmap2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,543,551);


(lib.envelope_closed_static = function() {
	 this.initialize();
	this.instance = new DOMObject({type:"IMAGE",image:img.envelope_closed_static});
	this.addChild(this.instance);
}).prototype = new cjs.Container();	
p.nominalBounds = new cjs.Rectangle(0,0,123,79);


(lib.shade = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#CCE9E7","#67BDBC"],[0,1],-83.8,-121,20.1,-121).s().p("AJFEKImmABIrmi5IAJjNIMGiNIGAgFIABAAIgBIcg");
	this.shape.setTransform(69.3,27.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(10.8,0.5,117,54.2);


(lib.ID_txt07 = function() {
	this.initialize();

	// ID_txt07
	this.text = new DOMObject({type:"TEXT" , align:"center" ,compId:"ID_txt07", width:"90.8", expand:"up",class:"orangeCallOut"}); 
	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,103.8,16.2);


(lib.ID_txt06 = function() {
	this.initialize();

	// ID_txt06
	this.text = new DOMObject({type:"TEXT" , align:"center" ,compId:"ID_txt06", width:"125.6", expand:"up",class:"orangeCallOut"}); 
	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,107,16.2);


(lib.ID_txt05 = function() {
	this.initialize();

	// ID_txt05
	this.text = new DOMObject({type:"TEXT" , align:"left" ,compId:"ID_txt05", width:"103.8", expand:"down"}); 
	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,104,16.2);


(lib.ID_txt04 = function() {
	this.initialize();

	// ID_txt04
	this.text = new DOMObject({type:"TEXT" , align:"left" ,compId:"ID_txt04", width:"55.7", expand:"down"}); 
	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,73,30.1);


(lib.ID_txt03 = function() {
	this.initialize();

	// ID_txt03
	this.text = new DOMObject({type:"TEXT" , align:"center" ,compId:"ID_txt03", width:"54.45", expand:"up+down"}); 

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,92,30.1);


(lib.ID_txt02 = function() {
	this.initialize();

	// ID_txt02
	this.text = new DOMObject({type:"TEXT" , align:"center" ,compId:"ID_txt02", width:"48.6", expand:"up+down"}); 
	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,107,16.2);


(lib.ID_txt01 = function() {
	this.initialize();

	// ID_txt01
	this.text = new DOMObject({type:"TEXT" , align:"center" ,compId:"ID_txt01", width:"85", expand:"up+down"}); 
	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,107,16.2);


(lib.page_interior_blue = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#067EB2").ss(1,1,1,3,true).p("AHCm2IAANtIuDAA");
	this.shape.setTransform(0,16.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#66C0E5").ss(1,1,1,3,true).p("Ak2JYIAAyvIJtAA");
	this.shape_1.setTransform(-13.8,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#0197D6").ss(1,1,1,3,true).p("AiJigIBsBnICnDa");
	this.shape_2.setTransform(31.2,-43.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#66C0E5","#CDEAF8"],[0,0.431],0,60.3,0,-60.1).s().p("AnBJYIAAyvIJtAAIBsBnICqDbIAANtg");

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-44.9,-60,90,120.1);


(lib.page_corner_blue = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#067EB2").ss(1,1,1,3,true).p("ABnAxQhAgJg8gcQhGgcgLgg");
	this.shape.setTransform(-3.2,-15.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(1,1,1,3,true).p("AApB3QhFhvgKg7QgGgsANgX");
	this.shape_1.setTransform(10.3,1.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#33ABDF").ss(1,1,1,3,true).p("AiKinIAAAFQAOAeAcApQAMASAwBDIAzA7IB8Bz");
	this.shape_2.setTransform(0.4,-3.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#CDEAF8","#FFFFFF"],[0,1],-18.2,-15,-10.8,-22.4).s().p("AAPA1Igzg7Ig8hVQgcgpgOgeIAAgFQALAgBFAeQA8AbBAAJQgOAYAHArQAJA7BHBvg");
	this.shape_3.setTransform(0.4,-3.2);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-13.5,-20.1,28,33.8);


(lib.envelopeclosedstatic = function() {
	this.initialize();

	// png
	this.instance = new lib.envelope_closed_static();
	this.instance.setTransform(-7.5,-24.5,0.667,0.663);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-39.5,-24.5,82.1,52.4);


(lib.Page2_blue = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#66C0E5").ss(1,1,1,3,true).p("AnBJYIAAyvIODAA");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#067EB2").ss(1,1,1,3,true).p("AHCpXIAASvIuDAA");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#99D5EF","#CDEAF8"],[0,0.431],0,60.3,0,-60.1).s().p("AnBJYIAAyvIODAAIAASvg");

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-44.9,-60,90,120.1);


(lib.EndUserMale = function() {
	this.initialize();

	// seatedMan_at_desk
	this.instance = new lib.Bitmap2();
	this.instance.setTransform(0,2.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,2.4,543,551);


(lib.Page_blue = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.page_corner_blue();
	this.instance.setTransform(31.5,-46.4,1,1,180);
	this.instance.shadow = new cjs.Shadow("#000000",0,1,5);

	// Layer 1
	this.instance_1 = new lib.page_interior_blue();

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-44.9,-60,90,120.2);


(lib.moreInfo_bg = function() {
	this.initialize();

	// lines
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#067EB2").ss(2,1,1).p("AClCHIlJAAAClAtIlJAAACliGIlJAAAClgsIlJAA");
	this.shape.setTransform(24.8,42.9);

	// paper
	this.instance = new lib.Page_blue();
	this.instance.setTransform(24.8,38,0.551,0.55);
	this.instance.shadow = new cjs.Shadow("#7B7979",0,0,2);

	this.instance_1 = new lib.Page2_blue();
	this.instance_1.setTransform(30.2,33.1,0.551,0.55);
	this.instance_1.shadow = new cjs.Shadow("#7B7979",0,0,2);

	this.addChild(this.instance_1,this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,55,71.1);


(lib.animation01 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// orange_ID_txt07
	this.instance = new lib.ID_txt07();
	this.instance.setTransform(366.1,147.4,1,1,0,0,0,51.9,3.5);
    this.instance.alpha = 0;
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(239).to({alpha:1},0).wait(41));

	// orange_ID_txt06
	this.instance_1 = new lib.ID_txt06();
	this.instance_1.setTransform(85.7,145.8,1,1,0,0,0,70.8,2.5);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(25).to({alpha:1},0).wait(214).to({alpha:0},0).wait(41));

	// message
	this.instance_2 = new lib.envelopeclosedstatic();
	this.instance_2.setTransform(49,240.9,0.285,0.285,0,0,0,1.4,0);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(137).to({alpha:1},7).to({x:222.3,y:87.1},35).to({x:307.4,y:145.4},21).to({y:185.9},14).to({x:354.2,y:239.9},20).to({y:257.9,alpha:0},5).wait(41));

	// message
	this.instance_3 = new lib.envelopeclosedstatic();
	this.instance_3.setTransform(49,240.9,0.285,0.285,0,0,0,1.4,0);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(130).to({alpha:1},7).to({x:222.3,y:87.1},35).to({x:307.4,y:145.4},21).to({y:185.9},14).to({x:354.2,y:239.9},20).to({y:257.9,alpha:0},5).wait(48));

	// message
	this.instance_4 = new lib.envelopeclosedstatic();
	this.instance_4.setTransform(49,240.9,0.285,0.285,0,0,0,1.4,0);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(123).to({alpha:1},7).to({x:222.3,y:87.1},35).to({x:307.4,y:145.4},21).to({y:185.9},14).to({x:354.2,y:239.9},20).to({y:257.9,alpha:0},5).wait(55));

	// message
	this.instance_5 = new lib.envelopeclosedstatic();
	this.instance_5.setTransform(49,240.9,0.285,0.285,0,0,0,1.4,0);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(116).to({alpha:1},7).to({x:222.3,y:87.1},35).to({x:307.4,y:145.4},21).to({y:185.9},14).to({x:354.2,y:239.9},20).to({y:257.9,alpha:0},5).wait(62));

	// message
	this.instance_6 = new lib.envelopeclosedstatic();
	this.instance_6.setTransform(49,240.9,0.285,0.285,0,0,0,1.4,0);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(109).to({alpha:1},7).to({x:222.3,y:87.1},35).to({x:307.4,y:145.4},21).to({y:185.9},14).to({x:354.2,y:239.9},20).to({y:257.9,alpha:0},5).wait(69));

	// message
	this.instance_7 = new lib.envelopeclosedstatic();
	this.instance_7.setTransform(49,240.9,0.285,0.285,0,0,0,1.4,0);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(102).to({alpha:1},7).to({x:222.3,y:87.1},35).to({x:307.4,y:145.4},21).to({y:185.9},14).to({x:354.2,y:239.9},20).to({y:257.9,alpha:0},5).wait(76));

	// notepad
	this.instance_8 = new lib.moreInfo_bg();
	this.instance_8.setTransform(47.8,242.5,0.188,0.188,0,0,0,27.2,35.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(9).to({regX:27.4,scaleX:0.75,scaleY:0.75,x:132.3,y:244.6},31).wait(35).to({regX:27.2,scaleX:0.19,scaleY:0.19,x:47.8,y:242.5,alpha:0},25).wait(180));

	// computerman
	this.instance_9 = new lib.EndUserMale();
	this.instance_9.setTransform(47.7,274.6,0.166,0.166,0,0,0,271.4,276.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9}]}).wait(280));

	// shade
	this.instance_10 = new lib.shade();
	this.instance_10.setTransform(46.9,242.5,0.079,0.225,0,0,0,64.5,27.6);
	this.instance_10.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(9).to({alpha:1},0).to({regX:63.9,regY:27.4,scaleX:1,scaleY:1,x:89.5,y:244.4},31).wait(35).to({regX:64,regY:27.3,scaleX:0.09,scaleY:0.22,x:47.2,y:243.3},24).wait(1).to({alpha:0},0).wait(180));

	// ID_txt05
	this.instance_11 = new lib.ID_txt05();
	this.instance_11.setTransform(269.9,281.6,1,1,0,0,0,36.5,8.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11}]}).wait(280));

	// ID_txt04
	this.instance_12 = new lib.ID_txt04();
	this.instance_12.setTransform(362.3,281.6,1,1,0,0,0,18.9,8.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12}]}).wait(280));

	// ID_txt03
	this.instance_13 = new lib.ID_txt03();
	this.instance_13.setTransform(395.5,220.6,1,1,0,0,0,27.2,8.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13}]}).wait(280));

	// ID_txt02
	this.instance_14 = new lib.ID_txt02();
	this.instance_14.setTransform(166.4,177.6,1,1,0,0,0,24.3,8.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_14}]}).wait(280));

	// ID_txt01
	this.instance_15 = new lib.ID_txt01();
	this.instance_15.setTransform(231.3,86.2,1,1,0,0,0,52,8.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_15}]}).wait(280));

	// bg
	this.instance_16 = new lib.bg();
	this.instance_16.setTransform(0,0,0.72,0.719);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_16}]}).wait(280));

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