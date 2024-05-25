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
(lib.background = function() {
	this.initialize(img.background);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,653,556);


(lib.Bitmap1 = function() {
	this.initialize(img.Bitmap1);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,38,24);


(lib.Bitmap2 = function() {
	this.initialize(img.Bitmap2);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,9,32);


(lib.ID_txt05 = function() {
	this.initialize();

	// Layer 1

	
	
		this.text = new DOMObject({type:"TEXT" , align:"left" ,compId:"ID_txt05", size:"11", width:"378.85", expand:"up+down"}); 
this.text.setTransform(11,0);
	
	
	
	

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,104,16.4);


(lib.ID_txt04 = function() {
	this.initialize();

	// Layer 1
	
	
		this.text_1 = new DOMObject({type:"TEXT" , align:"left" ,compId:"ID_txt04", size:"11", width:"155.9",  expand:"up+down"}); 
this.text_1.setTransform(0,0);

	this.addChild(this.text_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,104,16.4);


(lib.ID_txt032 = function() {
	this.initialize();

	// Layer 1

	
		this.text_2 = new DOMObject({type:"TEXT" , align:"left" ,compId:"ID_txt03-2", size:"11", width:"75", expand:"up"}); 
this.text_2.setTransform(0,5);
	

	this.addChild(this.text_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,57.5,16.4);


(lib.ID_txt031 = function() {
	this.initialize();

	// Layer 2
	
	
		this.text_3 = new DOMObject({type:"TEXT" , align:"left" ,compId:"ID_txt03-2", size:"11", width:"75", expand:"up"}); 
this.text_3.setTransform(2,5);
	this.addChild(this.text_3);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,54.5,17.5);


(lib.ID_txt02 = function() {
	this.initialize();

	

	
	
		this.text_4 = new DOMObject({type:"TEXT" , align:"center" ,compId:"ID_txt02", size:"11", width:"135", expand:"up+down"}); 
	this.text_4.setTransform(-10,3);
	

	this.addChild(this.text_4);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,104,16.4);


(lib.ID_txt01 = function() {
	this.initialize();

	// Layer 1
	this.text_5 = new DOMObject({type:"TEXT" , align:"left" ,compId:"ID_txt01", size:"11", width:"37", expand:"right"}); 
	this.text_5.setTransform(0,3);

	this.addChild(this.text_5);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,52,16.4);


(lib.envelope_clip = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Bitmap1();
	this.instance.setTransform(0.3,2.3);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.3,2.3,38,24);


(lib.arrow_callout = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#F68026").ss(3,2,1).p("AAABOIAAib");
	this.shape.setTransform(7.7,38.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F68026").s().p("AAAgaIA4g6Ig4CpIg3ipIA3A6").cp();
	this.shape_1.setTransform(7.6,49.3);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(2,30.7,11.3,27.1);


(lib.arrow = function() {
	this.initialize();

	// line
	this.instance_1 = new lib.Bitmap2();
	this.instance_1.setTransform(3.2,24);

	this.addChild(this.instance_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(3.2,24,9,32);


(lib.questionMark_red = function() {
	this.initialize();

	// details
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.4)").s().p("AAjgJQANALABAUQAAABAAABIAAAAQgKgYgLgHQgLgIgRgBQgPAAgKAHQgKAIgNAZIAAAAQAAgBAAgBQABgUANgLQAPgOATAAQAVAAAOAOIAAAA").cp();
	this.shape_2.setTransform(-0.4,19.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.502)").s().p("ABfjMQAKAIADAKQAEAHAAAOQAAAGgBABIgCAGIAAAAQAAAAAAgGQAAgcgUgTQgGgEgGgFQgHgFgXgEQgOgDgXADQgTADgQAOQgPAMgPAuQgMAoghAAQgKAAgNgJQALAEALAAQAgAAALgoQAMglARgTQATgVAjAAQARAAAIACQAYAFAVATIAAAAABhgLQgLAKgHAGQgHAJgDAGQgEAHgCAHQgBAGgEARQgGAkghAAQgSAAgJgMQgJgIgCgNQAEALAGAEQAJAMARAAQAgAAAGgjQAEgUABgDQADgHADgGQACgFAIgJQAIgIAJgIQAGgGAZgRQgMAMgPAOIAAAAAAwDXQAKgGANgZQgBAVgNAMQgPAOgUAAQgTAAgNgOQgOgLgBgWQANAaALAGQAJAGAOAAQAOAAAMgHIAAAA").cp();
	this.shape_3.setTransform(-2.7,3.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.251)").s().p("ACRhfIgKgNQgTgWgcgNQgNgHgNgDIgQgEQgVgEgWAAQgWAAgYAFQgYAGgSAKQgnAWgUAgQgEAGgEAIQgMAZAAAZQAAAKAHAKQgMgMAAgLIAAgDQAAgZAMgZQAEgJAEgHQAVghAogXQAogWAzAAQAjAAAeAKQAMAEALAFQAfAOATAYIAJAMQAHAKAFAOQAIAUAAAYIAAADQgBAdgKASQgKASgKALIgGAHIgCACIgEAEIALgNQAKgNAGgLQALgUAAgcQAAgUgGgTQgGgPgIgNIAAAAAA4APQAKgKAKgPQALgSgDALQgDAKgNARQgOASgXAUQgXATgMAOQgOAOgIANQgIANgHAhQgHAhAAgXQABgYAJgVQAJgVAPgQQAOgQAYgWQAWgTAKgKIAAAA").cp();
	this.shape_4.setTransform(0,-8);

	// shading
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["rgba(0,0,0,0.353)","rgba(0,0,0,0.102)","rgba(255,255,255,0.153)","rgba(255,255,255,0.251)","rgba(255,255,255,0.2)","rgba(204,204,204,0.259)","rgba(0,0,0,0.502)"],[0,0.141,0.267,0.525,0.667,0.886,1],-20.7,18.3,28.7,-9.2).s().p("AAEh6QglAAgSATQgSAUgNAmQgMAnghAAQgUAAgNgNQgOgOAAgQQAAgiAVgiQAWgiApgXQApgWA1AAQAzAAAnATQAnASAVAhQAVAgAAAmQAAAegLAWQgNAVgQAQQgRAQgrAnQgMALgHAIQgIAJgDAHQgEAHgCAHQgCAGgEASQgGAkghAAQgTAAgMgMQgNgMAAgXQAAgeAJgWQAKgVAPgQQAPgRAYgXQAWgTAKgIQAKgKAHgNQAHgMAAgOQAAgdgVgTQgVgTghAAIAAAA").cp();
	this.shape_5.setTransform(0,-6.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["rgba(0,0,0,0.353)","rgba(0,0,0,0.102)","rgba(255,255,255,0.153)","rgba(255,255,255,0.4)","rgba(255,255,255,0.2)","rgba(204,204,204,0.259)","rgba(0,0,0,0.502)"],[0,0.141,0.267,0.525,0.667,0.886,1],-20.3,-9.8,29.2,-37.4).s().p("AAAgzQAWAAAPAPQAPAOAAAWQAAAAAAAAQAAABAAAAQAAAYgPANQgQAOgVAAQgTAAgQgOQgQgNAAgYQAAAAAAgBQAAAAAAAAQAAgWAOgOQAQgPAVAAIAAAA").cp();
	this.shape_6.setTransform(-0.4,22);

	// mask
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E31C23").s().p("AAEi/QglAAgSAUQgSATgNAmQgMAoghAAQgUAAgNgOQgOgOAAgQQAAghAVgiQAWgjApgWQApgXA1AAQAzAAAnATQAnATAVAgQAVAgAAAmQAAAegLAXQgNAWgQARQgRAQgrAlQgMAKgHAJQgIAJgDAHQgEAGgCAHQgCAHgEARQgGAlghAAQgTAAgMgMQgNgMAAgYQAAgeAJgVQAKgWAPgOQAPgRAYgWQAWgUAKgKQAKgKAHgMQAHgNAAgOQAAgcgVgTQgVgUghAAIAAAAAgpCwQAQgPAWAAQAVAAAPAPQAPAPAAAWQAAAYgQAPQgQAOgTAAQgVAAgQgOQgQgOAAgZQAAgWAPgPIAAAA").cp();
	this.shape_7.setTransform(0,0.7);

	this.addChild(this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-17.5,-25.9,35.2,53.2);


(lib.call_out2 = function() {
	this.initialize();

	// Layer 1
	this.instance_2 = new lib.arrow_callout();
	this.instance_2.setTransform(38.8,69.2,1,1,0,0,0,7.7,27.7);

	this.text_6 = new cjs.Text(" {if (a) then }", "11px Times New Roman", "#393536");
	this.text_6.textAlign = "center";
	this.text_6.lineHeight = 13;
	this.text_6.lineWidth = 65;
	this.text_6.setTransform(36.3,97.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(1,1,1).p("AkthCIJbAAIAACFIpbAAIAAiF").cp();
	this.shape_8.setTransform(37.7,63.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(1,1,1).p("AgWo9IhiH8IH4AAAjYhBIinAAAGAg8IAAJ5Ir/ABIAAp6AFlgeIAAI9IrMAAIAApCILMAAAjYhBIDAn7");
	this.shape_9.setTransform(38.5,57.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AllkhILLAAIAAAFIAAI+IrLAAIAApD").cp();
	this.shape_10.setTransform(38.3,82.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E0D5E6").s().p("AjYhBIDAn7IACgBIhiH8IAKAAIAQAAQAIAAAJAAQBwABBzAAIDpAEIABAAIAAJ5Ir/ABIAAp6IClAAIACgFAlngjIAAJCILMAAIAAo9IAAgFIAAgEIrMAAIAAAEAFlIvIAAgFIrMAAIAAAFILMAA").cp();
	this.shape_11.setTransform(38.5,57.4);

	// Layer 3
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E0D5E6").s().p("AFrAGIrVAAIAAgLILVAAIAAAL").cp();
	this.shape_12.setTransform(38.6,112.9);

	this.addChild(this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.text_6,this.instance_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,76.9,114.8);


(lib.animation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// callout
	this.instance_3 = new lib.call_out2();
	this.instance_3.setTransform(184.1,243.1,1,1,0,0,0,38.5,57.4);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(253).to({alpha:1},0).wait(116).wait(1).to({alpha:0},0).wait(342));

	// arrows1
	this.instance_4 = new lib.arrow();
	this.instance_4.setTransform(188.1,175.8,0.857,0.857,-116.1,0,0,7.7,27.7);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(220).to({x:199.9,y:168.6,alpha:1},15).to({regX:7.6,regY:27.6,scaleX:0.86,scaleY:0.86,rotation:-115.9,x:199.8},1).to({regX:7.7,regY:27.7,scaleX:0.86,scaleY:0.86,rotation:-116,x:199.4,alpha:0},17).to({alpha:1},18).to({alpha:0},18).to({alpha:1},17).to({alpha:0},12).to({alpha:1},15).to({alpha:0},13).wait(366));

	// arrows2
	this.instance_5 = new lib.arrow();
	this.instance_5.setTransform(187.6,179.9,0.852,0.852,-59.7,0,0,7.8,27.6);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(220).to({x:198.8,y:182.1,alpha:1},15).to({x:198.3,alpha:0},18).to({alpha:1},18).to({alpha:0},18).to({alpha:1},17).to({alpha:0},12).to({alpha:1},15).to({alpha:0},13).wait(366));

	// arrows3
	this.instance_6 = new lib.arrow();
	this.instance_6.setTransform(188,177.9,0.833,0.833,-89.9,0,0,7.7,27.7);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(220).to({x:200.8,y:174.9,alpha:1},15).to({x:200.3,alpha:0},18).to({alpha:1},18).to({alpha:0},18).to({alpha:1},17).to({alpha:0},12).to({alpha:1},15).to({alpha:0},13).wait(366));

	// question_mark
	this.instance_7 = new lib.questionMark_red();
	this.instance_7.setTransform(174.6,147.6,0.471,0.471,0,0,0,0.1,0.6);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(147).to({alpha:1},0).wait(28).to({alpha:0},15).to({alpha:1},15).wait(163).wait(1).to({alpha:0},0).wait(343));

	// envelope_animation
	this.instance_8 = new lib.envelope_clip();
	this.instance_8.setTransform(46.8,93.9,0.533,0.533,0,0,0,19.3,12.4);
	this.instance_8.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({y:97.1,alpha:1},8).wait(9).to({x:98.8,y:114.4},22).wait(5).to({alpha:0},20).to({alpha:1},16).to({x:171.8,y:171.9},46).wait(244).to({x:231.5,y:143.4},49).wait(12).to({x:371.5,y:110.9},49).wait(27).to({x:427,y:140.9},43).wait(17).to({alpha:0},16).to({alpha:1},17).to({alpha:0},17).to({alpha:1},22).to({alpha:0},25).wait(48));

	// text
	this.instance_9 = new lib.ID_txt05();
	this.instance_9.setTransform(232,329.1,1,1,0,0,0,189.4,8.5);

	this.instance_10 = new lib.ID_txt032();
	this.instance_10.setTransform(351,169,1,1,0,0,0,14.5,8.5);

	this.instance_11 = new lib.ID_txt04();
	this.instance_11.setTransform(380.8,245.2,1,1,0,0,0,78,22.5);

	this.instance_12 = new lib.ID_txt01();
	this.instance_12.setTransform(209,178.6,1,1,0,0,0,18.8,8.5);

	this.instance_13 = new lib.ID_txt02();
	this.instance_13.setTransform(252.8,119.3,1,1,0,0,0,74,8.5);

	this.instance_14 = new lib.ID_txt031();
	this.instance_14.setTransform(81,169,1,1,0,0,0,14.5,8.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9}]}).wait(712));

	// bg
	this.instance_15 = new lib.background();
	this.instance_15.setTransform(0,0,0.72,0.719);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_15}]}).wait(712));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,470,400);


(lib.Main = function() {
	this.initialize();

	// animation
	this.anim01 = new lib.animation();
	this.anim01.setTransform(19.3,12.3,1,1,0,0,0,19.3,12.3);

	this.addChild(this.anim01);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,470,400);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;