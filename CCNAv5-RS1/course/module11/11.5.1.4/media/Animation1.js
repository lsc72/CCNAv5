(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.animation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// Layer 3
	this.instance = new lib.verp_graphic_anim02();
	this.instance.setTransform(116.4,244.7,1.13,0.771,0,-133.9,-129.6);

	this.instance_1 = new lib.verp_graphic_anim02();
	this.instance_1.setTransform(55.4,147.1,1.205,0.821,0,-125.5,-121.1);

	this.instance_2 = new lib.verp_graphic_anim02();
	this.instance_2.setTransform(169.7,183.9,2.708,1.846,0,-125.5,-121.1);

	this.instance_3 = new lib.verp_graphic_anim02();
	this.instance_3.setTransform(340.1,232.1,5.049,3.44,0,-125.5,-121.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(85));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(41.4,118,322.3,126.7);


// symbols:
(lib.slide_1 = function() {
	this.initialize(img.slide_1);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,436,400);


(lib.verp_graphic_obj = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#395656").s().p("AhvAqQBpiMB2BhQh2g4hpBjIAAAA").cp();
	this.shape.setTransform(11.3,4.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,22.5,8.5);


(lib.Imprtpage_interior_blue = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#067EB2").ss(0.1,1,1).p("AHCm2IAANtIuDAA");
	this.shape_1.setTransform(0,16.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#66C0E5").ss(0.1,1,1).p("Ak2JYIAAyvIJtAA");
	this.shape_2.setTransform(-13.8,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#0197D6").ss(0.1,1,1).p("AiJigIBsBnICnDa");
	this.shape_3.setTransform(31.2,-43.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#66C0E5","#CDEAF8"],[0,0.431],0,60.3,0,-60.1).s().p("AnBJYIAAyvIJuAAIBsBnICpDbIAANtIuDAA").cp();

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-44.9,-60,90,120.1);


(lib.verp_graphic_anim02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// Layer 6
	this.instance = new lib.verp_graphic_obj("synched",0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(48).to({startPosition:0,_off:false},0).to({y:-29.8,alpha:0},35).wait(1));

	// Layer 5
	this.instance_1 = new lib.verp_graphic_obj("synched",0);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(38).to({startPosition:0,_off:false},0).to({y:-29.8,alpha:0},35).to({_off:true},1).wait(10));

	// Layer 4
	this.instance_2 = new lib.verp_graphic_obj("synched",0);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(29).to({startPosition:0,_off:false},0).to({y:-29.8,alpha:0},34).to({_off:true},1).wait(20));

	// Layer 3
	this.instance_3 = new lib.verp_graphic_obj("synched",0);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(19).to({startPosition:0,_off:false},0).to({y:-29.8,alpha:0},34).to({_off:true},1).wait(30));

	// Layer 2
	this.instance_4 = new lib.verp_graphic_obj("synched",0);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(9).to({startPosition:0,_off:false},0).to({y:-29.8,alpha:0},34).to({_off:true},1).wait(40));

	// Layer 1
	this.instance_5 = new lib.verp_graphic_obj("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({y:-29.8,alpha:0},34).to({_off:true},1).wait(49));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,22.5,8.5);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;