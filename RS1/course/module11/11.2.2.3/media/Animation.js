(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.classesmediaMediaObject = function() {
	this.initialize();

	// main
	this.instance = new lib.Main();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(3,146.7,415.8,201.3);


// symbols:
(lib.Arrow = function() {
	this.initialize(img.Arrow);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,40,27);

(lib.Bitmap1 = function() {
	this.initialize(img.Bitmap1);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3,49);

(lib.computer_red = function() {
	this.initialize(img.computer_red);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,143,119);

(lib.Cloud = function() {
	this.initialize(img.Cloud);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,216,131);


(lib.computer = function() {
	this.initialize(img.computer);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,143,119);


(lib.computer_laptop = function() {
	this.initialize(img.computer_laptop);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,172,115);


(lib.envelope_closed_static = function() {
	this.initialize(img.envelope_closed_static);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,123,79);


(lib.Firewall_PIX_left = function() {
	this.initialize(img.Firewall_PIX_left);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,152,109);


(lib.Firewall_PIX_leftpngcopy = function() {
	this.initialize(img.Firewall_PIX_leftpngcopy);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,152,109);


(lib.Firewall_PIX_right = function() {
	this.initialize(img.Firewall_PIX_right);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,152,109);

(lib.computer_red_1 = function() {
	this.initialize();

	// shape
	this.instance_2 = new lib.computer_red();
	this.instance_2.setTransform(0,-72.9,0.626,0.624);

	this.addChild(this.instance_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-72.9,89.5,74.2);


(lib.hacker = function() {
	this.initialize(img.hacker);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,173,231);


(lib.Router = function() {
	this.initialize(img.Router);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,148,107);


(lib.Server_file = function() {
	this.initialize(img.Server_file);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,102,143);


(lib.Switch_Layer_3 = function() {
	this.initialize(img.Switch_Layer_3);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,102,103);


(lib.Switch_workgroup = function() {
	this.initialize(img.Switch_workgroup);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,165,79);


(lib.Wan_line = function() {
	this.initialize(img.Wan_line);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,314,23);


(lib.text_upper_2 = function() {
	this.initialize();

	// Layer 1
	this.text = new DOMObject({type:"TEXT" , align:"center" ,compId:"ID_s2_txt03", width:"100", expand:"up+down",size:10});
	this.text.setTransform(3,-7);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(3,-1.8,62.8,16.2);


(lib.text_upper_1 = function() {
	this.initialize();

	// Layer 1
	this.text_1 = new DOMObject({type:"TEXT" , align:"center" ,compId:"ID_s2_txt01", width:"100", expand:"up",size:10});
	this.text_1.setTransform(0,7);

	this.addChild(this.text_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,1.2,62.8,16.2);


(lib.FakedTable = function() {
	this.initialize();

	this.text_115 = new TextComp({subType:"TABLE",x:"0",y:"0",width:"420",height:"90",size:"11",compId:"ID_s2_table"});

	this.addChild(this.text_115);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(2.8,0,435.3,111.3);


(lib.text_left = function() {
	this.initialize();

	// Layer 1
	this.text_2 = new DOMObject({type:"TEXT" , align:"center" ,compId:"ID_s2_txt09", width:"100", expand:"down",size:10});
	this.text_2.setTransform(0,10);

	this.addChild(this.text_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0.2,62.8,16.2);


(lib.label = function() {
	this.initialize();

	// Layer 1
	this.text_3 = new DOMObject({type:"TEXT" , align:"left" ,compId:"ID_s2_txt08", width:"100", expand:"up+down",size:10});
	this.text_3.setTransform(20,126.2);

	this.text_4 = new DOMObject({type:"TEXT" , align:"left" ,compId:"ID_s2_txt04", width:"100", expand:"up+down",size:10});
	this.text_4.setTransform(249,47.2);

	this.text_5 = new DOMObject({type:"TEXT" , align:"left" ,compId:"ID_s2_txt02", width:"100", expand:"up+down",size:10});
	this.text_5.setTransform(20,3.2);

	this.addChild(this.text_5,this.text_4,this.text_3);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,3.2,311.8,139.2);


(lib.ID_s2_txt11 = function() {
	this.initialize();

	// Layer 1
	this.text_6 = new DOMObject({type:"TEXT" , align:"left" ,compId:"ID_s2_txt11", width:"140", expand:"down",size:10});
	this.text_6.setTransform(8,1.2);

	this.addChild(this.text_6);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,1.2,62,16.2);


(lib.ID_s2_txt07 = function() {
	this.initialize();

	// Layer 1
	this.text_7 = new DOMObject({type:"TEXT" , align:"left" ,compId:"ID_s2_txt07", width:"100", expand:"up+down",size:10});
	this.text_7.setTransform(0,1.2);

	this.addChild(this.text_7);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,1.2,62.8,16.2);


(lib.ID_s2_txt05 = function() {
	this.initialize();

	// Layer 1
	this.text_8 = new DOMObject({type:"TEXT" , align:"center" ,compId:"ID_s2_txt05", width:"100", expand:"down",size:10});
	this.text_8.setTransform(10,10);

	this.addChild(this.text_8);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(3,2.2,62.8,16.2);


(lib.hacker_new_noShadow = function() {
	this.initialize();

	// outline
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.4)").s().p("Agyk/IAAAAQgUgcAAgnQAAgoAUgcQAUgdAcAAQABAAABABQAAgBABAAQAdgBAVAeQAUAcAAAoQAAAngUAdQgCADgDADQABAAABABQABABABADIAAAHIBNAAQABAAACABQABABABABICJEAIAAAAQABABABACQAAACgCACQgCACgCADIAOAdQAAAAAAAAQADAUgUAPQgVAPgVgOQgCgBAAgCIgBgEQgBABgBAAQgCABgBAAQgKgCgCgKQgBgEACgHQgDABgCAAQgCABgBgBQgCgBgBgBIhKiUQAABtAABqQAAACgBACQgCABgCAAIgNAAIBjFIQAAABAAACQgBABgBABIgEAEQBSAbgPAmQAAABgBABQgCABgBAAIieAAQgCAAgBgBQgCgCAAgCIAAgjIgMAAQgCAAgBgBQgCgBAAgBIhKj8IhJD8QAAABgCABQgBABgCAAIgMAAIAAAjQAAACgCACQgBABgCAAIieAAQgBAAgCgBQgBgBAAgBQgPgmBTgbIgFgEQgBgBgBgBQAAgCAAgBIBjlIIgNAAQgCAAgCgBQgBgCAAgCQAAhqAAhtIhKCUQgBABgCABQgBABgCgBQgCAAgDgBQACAHgBAEQgCAKgKACQgBAAgCgBQgBAAgBgBIgBAEQAAACgCABQgVAOgVgPQgUgPADgUQAAAAAAAAIAPgdQgDgDgCgCQgBgCAAgBQAAgBAAgCICKkBQABgBABgBQACgBABAAIBNAAIAAgHQABgDABgBQABgBABAAQgDgDgCgEIAAAAAArnAQgRgZgZAAQgBAAAAgBQgBABgBAAQgXABgRAYQgSAZAAAlQAAAkASAaIAAAAQADAEAEAEQABABAAADIABAAQABABAQAPQAQAPATgSQATgSAFgHQASgaAAgkQAAglgSgZIAAAAAAtkiQgDAAgBgBQgBgCAAgCIAAgHIgFAAQglAmgggmIgFAAIAAAHQAAACgBACQgBABgDAAIhPAAQhEB+hDB+QACACACACQACABAAACQAAACgBABIgPAeQgBAOAOALQAOAKAPgIIAFgTQAAgCABgBQACgBABAAQACAAABABQACABAAACIADAIQABgGgEgKQAAgCAAAAQABgCACgBQACAAACAAQAEACAFABIBbi5IAAD+IAYAAIhoFRIAJAHIAAABIAXAYIgagPQhKAXAEAcICVAAIAAgjQAAgCABgBQACgCACAAIAOAAIBOkIQAAgCABAAQACgBAAAAQABAAACABQABAAAAACIBOEIIAOAAQACAAACACQABABAAACIAAAjICVAAQAEgchJgXIgfARIAbgbIAJgHIhmlRIAWAAIAAkAIBbC7QAFgBAEgCQACAAACAAQACABABACQAAAAAAACQgEAKABAGIADgIQAAgCACgBQABgBACAAQABAAACABQABABAAACIAFATQAPAIAOgKQAOgLgBgPIgPgdQgBgBABgCQAAgBABgBQACgDACgCIiHj8IhPAA").cp();
	this.shape.setTransform(0.3,3.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.6)").s().p("AAAAAIAAAAIAAAAIAAAA").cp();
	this.shape_1.setTransform(-4.8,-28.3);

	// shading
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(0,0,0,0.2)","rgba(0,0,0,0)"],[0,1],32.9,1.1,-32.7,-19.6).s().p("AAHAGIgBAAQgagGAagFQAAADABACIAAAG").cp();
	this.shape_2.setTransform(-26.4,51.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(0,0,0,0.051)","rgba(0,0,0,0.251)"],[0,1],7.9,-18.3,-10.7,52.3).s().p("AAnl8QABACABABQABACACAAIBQAAICHD8QgCACgCACQgBABgBACQAAABABACIAPAfQABAOgPALQgOALgOgJIgFgTQAAgBgBgBQgCgBgBAAQgCAAgBABQgCABAAABIgDABQABgEACgFQAAgCgBgBQAAgCgCgBQgCgBgCABQgEACgFABIhbi7IAAECIgWAAIBmFPIgJAHIgcAaIAggQQBJAXgFAcIiUAAIAAgjQAAgCgCgCQgBgBgCAAIgOAAIhOkIQAAgCgCgBQgBgBgBAAQAAAAgCABQgBABAAACIhOEIIgOAAQgCAAgCABQgBACAAACIAAAjIiVAAQgEgcBKgXIAaAPIgXgZIAAAAIgJgHIBolPIgYAAIAAkBIhbC6QgFgBgEgCQgCgBgCABQgCABgBACQAAABAAACQACAFABAEIgDgBQAAgBgCgBQgBgBgCAAQgBAAgCABQgBABAAABIgFATQgPAJgOgLQgOgLABgOIAPgfQABgCAAgBQAAgCgCgBQgCgCgCgCQBDh+BEh+IBPAAQADAAABgCQABgBAAgCIAAgIIAFAAQAgAnAlgnIAEAAIAAAI").cp();
	this.shape_3.setTransform(0.3,12.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["rgba(0,0,0,0.051)","rgba(0,0,0,0.251)"],[0,1],1.4,0.4,-10.3,-2.6).s().p("AArhBQASAZAAAlQAAAigSAaQgFAHgTASQgTASgQgPQgQgPgBgBIgBAAQAAgCgBgCQgEgEgDgEIAAAAQgSgaAAgiQAAglASgZQARgYAXgBQABAAABgBQAAABABAAQAZAAARAZIAAAA").cp();
	this.shape_4.setTransform(0.3,-34.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.6)").s().p("AAAAAIAAAAIAAAAIAAAA").cp();
	this.shape_5.setTransform(-4.8,-28.3);

	// color
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AkBHhQgPgmBTgbIgFgEQgBgBgBgBQAAgCAAgBIBjlIIgNAAQgCAAgCgBQgBgCAAgCQAAhqAAhtIhKCUQgBABgCABQgBABgCgBQgCAAgDgBQACAHgBAEQgCAKgKACQgBAAgCgBQgBAAgBgBIgBAEQAAACgCABQgVAOgVgPQgUgPADgUQAAAAAAAAIAPgdQgDgDgCgCQgBgCAAgBQAAgBAAgCICKkBIAFgDIBNAAIAAgHQABgDABgBQABgBABAAQgDgDgCgEIAAABQgUgdAAgnQAAgoAUgcQAUgdAcAAIADAAQAdgBAVAeQAUAcAAAoQAAAngUAdQgCADgDADQABAAABABQABABABADIAAAHIBNAAIAFADICJEAIAAAAQABABABACQAAACgCACQgCACgCADIAOAdQAAAAAAAAQADAUgUAPQgVAPgVgOQgCgBAAgCIgBgEQgBABgBAAQgCABgBAAQgKgCgCgKQgBgEACgHQgDABgCAAQgCABgBgBQgCgBgBgBIhKiUQAABtAABqQAAACgBACQgCABgCAAIgNAAIBjFIQAAABAAACQgBABgBABIgEAEQBSAbgPAmIgEADIieAAQgCAAgBgBQgCgCAAgCIAAgjIgMAAQgCAAgBgBQgCgBAAgBIhKj8IhJD8QAAABgCABQgBABgCAAIgMAAIAAAjQAAACgCACQgBABgCAAIieAAIgEgD").cp();
	this.shape_6.setTransform(0.3,3.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFD255").s().p("ACEmFIgFgDQABABACAAQABABABABIAAAAAECGFQAAACgBABQgCAAgBABIAEgEAkBGFIAEAEQgBgBgCAAQgBgBAAgCIAAAAAh+mIIgFADQABgBABgBQACAAABgBIAAAA").cp();
	this.shape_7.setTransform(0.3,12.8);

	this.addChild(this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-27.7,-44.7,56,96.9);


(lib.bubble_clip2 = function() {
	this.initialize();

	// Layer 1
			this.text_9 = new BubbleComp({x:"0",y:"0",width:"100",size:"11",compId:"ID_s2_txt12",align:"center",tailPosition:"5",tailFlip:"2",extend:"up+down"});

	//this.text_9 = new DOMObject({type:"TEXT" , align:"left" ,compId:"ID_s2_txt12", width:"100", expand:"up+down",size:10});
	this.text_9.setTransform(11,-10);

	this.addChild(this.text_9);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(11,18.2,62.8,16.2);


(lib.bubble_clip = function() {
	this.initialize();

	// Layer 1
		this.text_10 = new BubbleComp({x:"0",y:"0",width:"100",size:"11",compId:"ID_s2_txt10",align:"center",tailPosition:"5",tailFlip:"2",extend:"up+down"});

//	this.text_10 = new DOMObject({type:"TEXT" , align:"left" ,compId:"ID_s2_txt10", width:"100", expand:"up+down",size:10});
	this.text_10.setTransform(10,0);

	this.addChild(this.text_10);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(10,11.2,62.8,16.2);


(lib.Arrow_1 = function() {
	this.initialize();

	// shape
	this.instance = new lib.Arrow();
	this.instance.setTransform(0,-3.2,0.25,0.246);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-3.2,10,6.7);


(lib.FirewallPIXleft = function() {
	this.initialize();

	// I<
	this.instance_1 = new lib.Firewall_PIX_leftpngcopy();
	this.instance_1.setTransform(0,-66.7,0.61,0.612);

	this.addChild(this.instance_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-66.7,92.7,66.8);


(lib.computer_1 = function() {
	this.initialize();


	// shape
	this.instance_2 = new lib.computer();
	this.instance_2.setTransform(0,-73.9,0.626,0.624);

	this.addChild(this.instance_2,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-73.9,89.5,74.2);


(lib.Cloud_1 = function() {
	this.initialize();

	// center
	this.instance_3 = new lib.Cloud();
	this.instance_3.setTransform(-84.4,-55.3,0.783,0.78);

	this.addChild(this.instance_3);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-84.4,-55.3,169.1,102.2);


(lib.Tween3 = function() {
	this.initialize();

	// Layer 1
		this.instance_4 = new lib.Bitmap1();
	this.instance_4.setTransform(-1.5,-20.5);

	this.instance_5 = new lib.Arrow_1();
	this.instance_5.setTransform(0.1,-19.1,1.506,1.506,-89.9,0,0,5,0.1);

	this.addChild(this.instance_5,this.instance_4);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-4.9,-26.6,10,53.4);


(lib.arrow1extent = function() {
	this.initialize();

	// Layer 1
	this.instance_5 = new lib.Arrow_1();
	this.instance_5.setTransform(82.1,5.1,1.506,1.506,0,0,0,5,0.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#AF3939").ss(3,0,1).p("AFSAAIqjAA");
	this.shape_26.setTransform(45.9,5.1);

	this.addChild(this.shape_26,this.instance_5);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(12,0,77.6,10);


(lib.arrow_3 = function() {
	this.initialize();

	// Layer 1
	this.instance_6 = new lib.Arrow_1();
	this.instance_6.setTransform(64.3,5.1,1.506,1.506,0,0,0,5,0.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#AF3939").ss(3,0,1).p("AE1AAIppAA");
	this.shape_27.setTransform(30.9,5.1);

	this.addChild(this.shape_27,this.instance_6);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,71.8,10);


(lib.arrow_2 = function() {
	this.initialize();

	// Layer 1
	this.instance_7 = new lib.Arrow_1();
	this.instance_7.setTransform(5.1,7.5,1.506,1.506,-89.9,0,0,5,0.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#AF3939").ss(3,0,1).p("AAAjGIAAGN");
	this.shape_28.setTransform(5.1,29.9);

	this.addChild(this.shape_28,this.instance_7);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,10,49.8);


(lib.animation1 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{},true);
// table
      this.instance_8 = new lib.FakedTable();
	this.instance_8.setTransform(228,96.6,1,1,0,0,0,222,59.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8}]}).wait(352));
	// static text
	this.instance_8 = new lib.label();
	this.instance_8.setTransform(262,278.1,1,1,0,0,0,155,72.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8}]}).wait(352));

	// hacker
	this.instance_9 = new lib.hacker_new_noShadow();
	this.instance_9.setTransform(111,294.1,0.65,0.651,0,0,0,-18.2,3.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9}]}).wait(352));

	// icons
	this.instance_10 = new lib.Cloud_1();
	this.instance_10.setTransform(283.1,314.1,0.491,0.491,0,0,0,0,-4.1);

	this.instance_11 = new lib.computer();
	this.instance_11.setTransform(122.8,289.9,0.352,0.351);

	this.instance_12 = new lib.FirewallPIXleft();
	this.instance_12.setTransform(275.8,233.2,0.563,0.563,0,0,0,46.4,-33.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#57BDB4").s().p("AAAAAIAAAAIAAAAIAAAA").cp();
	this.shape_29.setTransform(168.8,331.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.lf(["rgba(0,0,0,0.153)","rgba(0,0,0,0.353)"],[0,1],-1.1,0,1.2,0).s().p("AgJAeIgBABIAAgQIAVgsIABAAIAAAeIgVAd").cp();
	this.shape_30.setTransform(170,328.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#80CDC6").s().p("AAAAAIAAAAIAAAAIAAAA").cp();
	this.shape_31.setTransform(171.2,325.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#007A68").s().p("AAAAAIAAAAIAAAAIAAAA").cp();
	this.shape_32.setTransform(171.1,325.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.lf(["rgba(255,255,255,0.251)","rgba(0,0,0,0.153)"],[0,1],0,2.4,0,-2.2).s().p("AAOAXIgzAAIAXgtIAaAAIAAAAIABAAQAAAAAAAAIAZAAIgBABIgXAs").cp();
	this.shape_33.setTransform(167.3,327.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.lf(["rgba(0,0,0,0.153)","rgba(0,0,0,0.353)"],[0,1],-1.8,0,1.9,0).s().p("AASiCIAADhIgUAUIgQAPIAAjxIAkgT").cp();
	this.shape_34.setTransform(163.3,303);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(0,0,0,0.251)").s().p("AiBAMIAAgWIEDAAIAAAWIkDAA").cp();
	this.shape_35.setTransform(144.8,322.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.lf(["rgba(0,0,0,0.153)","rgba(0,0,0,0.353)"],[0,1],-1.9,0,2.1,0).s().p("AgTATIAng3IAAAiIgnAnIAAgS").cp();
	this.shape_36.setTransform(160.7,327.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.lf(["rgba(255,255,255,0.251)","rgba(0,0,0,0.102)"],[0,1],0,2.9,0,-2.7).s().p("ADGgbIgpA3IljAAIApg3IAwAAIEDAAIALAAIAlAA").cp();
	this.shape_37.setTransform(142.8,327);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("rgba(0,0,0,0.082)").s().p("Aj5AtIFiAAIAAASIlkAAIAAgSIACAAACWg/QAWAAARACQA+AEAAASQAAADgBADQAAAAgBABQgEAEgHAFIgVAIQgLACgDADQgDACABADQADAEACABIAAABQAAAAgBAAIAAAAIAAAAQgCgBgDgFQgDgEAEgDQAFgCAKgCIAVgJQAHgEADgDQABgBAAgBQACgDAAgCQgBgRg9gEQgRgBgVAAIAAAAIAAgBQAAAAAAgBIAAAAACaAwIA1AAIAAAQIg1AAIAAgQ").cp();
	this.shape_38.setTransform(148,325.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.lf(["rgba(0,0,0,0.153)","rgba(0,0,0,0.353)"],[0,1],-3.4,0,3.6,0).s().p("AgPAFIAyg0IAAATIgTAUIAAAEIgBAAQAAABAAAAIAAABIABAAIAAAIIgnAqIgLAAIAAgZIATAAIAAgS").cp();
	this.shape_39.setTransform(161.4,319.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("rgba(0,0,0,0.153)").s().p("AiJgFIEFAAIAOALIkGAAIgNgL").cp();
	this.shape_40.setTransform(146,316.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.lf(["rgba(0,0,0,0.153)","rgba(0,0,0,0.353)"],[0,1],-1,0,1.1,0).s().p("AACAGIgMgLIAUAAIgCACIgGAJ").cp();
	this.shape_41.setTransform(159.6,316.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.lf(["rgba(255,255,255,0.251)","rgba(0,0,0,0.153)"],[0,1],0,2.7,0,-2.5).s().p("AC1gZIg0AzIk1AAIAjghIANAKIEFAAIAGgIIACgCIAIAAIAAgDIAQgPIAUAA").cp();
	this.shape_42.setTransform(146.9,317.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("rgba(255,255,255,0.4)").s().p("AByhiQAbAAAAAcIAACOQAAAagbABIjiAAQgTgBgGgMQgDgGAAgIIAAiOQAAgIADgGQAGgOATAAIDiAA").cp();
	this.shape_43.setTransform(145,304.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("rgba(0,0,0,0.012)").s().p("ABxh7IjiAAQgTAAgGAOQgDAGAAAIIAACOQAAAIADAGQAGAMATABIDiAAQAbgBAAgaIAAiOQAAgcgbAAIAAAAACFBfIkEAAIgiAAIAAjzIFEAAIAADxIAAACIgIAAIgWAAAB/CVIkCAAIgfAAIAAgSIAAAAIE1AAIAAASIgUAA").cp();
	this.shape_44.setTransform(145.1,306.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.lf(["rgba(255,255,255,0.251)","rgba(0,0,0,0.153)"],[0,1],0,1,0,-0.8).s().p("Ai0AJIBSgRIEXAAIgmARIlDAA").cp();
	this.shape_45.setTransform(147,290.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10}]}).wait(352));

	this.instance_16 = new lib.computer_red_1();
	this.instance_16.setTransform(383.7,231.1,0.563,0.563,0,0,0,44.6,-36.9);
	this.instance_16.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(265).to({alpha:1},0).wait(87));
	// computer_right
	this.instance_13 = new lib.computer();
	this.instance_13.setTransform(358.6,210.2,0.352,0.351);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.lf(["rgba(0,0,0,0.153)","rgba(0,0,0,0.353)"],[0,1],-1.9,0,2.1,0).s().p("AgTATIAng3IAAAiIgnAnIAAgS").cp();
	this.shape_46.setTransform(396.4,248.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#57BDB4").s().p("AAAAAIAAAAIAAAAIAAAA").cp();
	this.shape_47.setTransform(404.6,252);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.lf(["rgba(0,0,0,0.153)","rgba(0,0,0,0.353)"],[0,1],-1,0,1.1,0).s().p("AACAGIgLgLIAUAAIgDACIgGAJ").cp();
	this.shape_48.setTransform(395.3,237.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.lf(["rgba(255,255,255,0.251)","rgba(0,0,0,0.102)"],[0,1],0,2.9,0,-2.7).s().p("ADHgbIgpA3IljAAIAog3IAxAAIECAAIAMAAIAlAA").cp();
	this.shape_49.setTransform(378.6,247.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.lf(["rgba(0,0,0,0.153)","rgba(0,0,0,0.353)"],[0,1],-3.4,0,3.6,0).s().p("AgPAFIAygzIAAATIgTATIAAAFIgBAAQAAAAAAABIAAAAIABAAIAAAJIgnApIgLAAIAAgYIATAAIAAgT").cp();
	this.shape_50.setTransform(397.2,239.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("rgba(0,0,0,0.251)").s().p("AiBgKIEDAAIAAAVIkDAAIAAgV").cp();
	this.shape_51.setTransform(380.6,243.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("rgba(0,0,0,0.153)").s().p("AiJgFIEFAAIAOALIkGAAIgNgL").cp();
	this.shape_52.setTransform(381.8,237.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.lf(["rgba(255,255,255,0.251)","rgba(0,0,0,0.153)"],[0,1],0,2.7,0,-2.5).s().p("AC1gZIg0AzIk1AAIAjghIANAKIEFAAIAGgIIACgCIAIAAIAAgDIAQgPIAUAA").cp();
	this.shape_53.setTransform(382.6,237.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("rgba(255,255,255,0.4)").s().p("ACNhGIAACOQAAAagbABIjiAAQgTgBgGgMQgDgGAAgIIAAiOQAAgIADgGQAGgOATAAIDiAAQAbAAAAAcIAAAA").cp();
	this.shape_54.setTransform(380.7,224.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("rgba(0,0,0,0.012)").s().p("ACACVIkDAAIgfAAIAAgSIABAAIE0AAIAAASIgTAAACGBfIkFAAIghAAIAAjzIFDAAIAADxIAAACIgHAAIgWAAACMhfQAAgcgaAAIjjAAQgTAAgGAOQgCAGAAAIIAACOQAAAIACAGQAGAMATABIDjAAQAagBAAgaIAAiO").cp();
	this.shape_55.setTransform(380.8,227.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.lf(["rgba(255,255,255,0.251)","rgba(0,0,0,0.153)"],[0,1],0,1,0,-0.8).s().p("ACPAJIlDAAIBSgRIEXAAIgmAR").cp();
	this.shape_56.setTransform(382.8,211.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.lf(["rgba(0,0,0,0.153)","rgba(0,0,0,0.353)"],[0,1],-1.8,0,1.9,0).s().p("AgBBzIgQAPIAAjxIAkgTIAADhIgUAU").cp();
	this.shape_57.setTransform(399.1,223.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.lf(["rgba(0,0,0,0.153)","rgba(0,0,0,0.353)"],[0,1],-1.1,0,1.2,0).s().p("AgJAeIgBAAIAAgPIAVgsIAAAAIAAAdIgUAe").cp();
	this.shape_58.setTransform(405.7,248.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#80CDC6").s().p("AAAAAIAAAAIAAAAIAAAA").cp();
	this.shape_59.setTransform(407,245.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#007A68").s().p("AAAAAIAAAAIAAAAIAAAA").cp();
	this.shape_60.setTransform(406.9,245.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.lf(["rgba(255,255,255,0.251)","rgba(0,0,0,0.153)"],[0,1],0,2.4,0,-2.2).s().p("AAOAXIgzAAIAXgtIAaAAIAAAAIABAAQAAAAAAAAIAZAAIgBABIgXAs").cp();
	this.shape_61.setTransform(403,248.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("rgba(0,0,0,0.082)").s().p("ADOABQAAAAAAAAIgBAAIAAAAQgCgBgDgFQgDgEAEgDQAFgCAKgCIAVgJQAHgEADgDQABgBAAgBQACgDAAgCQgBgRg9gEQgRgBgVAAIAAAAIAAgBQAAAAAAgBIAAAAQAWAAARACQA+AEAAASQAAADgBADQAAAAgBABQgDAEgIAFIgVAIQgLACgDADQgDACABADQADAEACABIAAABAj6AtIFkAAIAAASIlkAAIAAgSIAAAAACZAwIA2AAIAAAQIg2AAIAAgQ").cp();
	this.shape_62.setTransform(383.8,245.6);

	this.instance_14 = new lib.computer_1();
	this.instance_14.setTransform(383.7,231.1,0.563,0.563,0,0,0,44.6,-36.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.instance_13}]}).to({state:[{t:this.instance_14}]},265).wait(87));

	// text_passmith
	this.instance_15 = new lib.ID_s2_txt11();
	this.instance_15.setTransform(174,227,1,1,0,0,0,55,8.5);
	this.instance_15.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(98).to({alpha:1},0).wait(254));

	// arrows_3
	this.instance_16 = new lib.arrow_3();
	this.instance_16.setTransform(275.1,231,0.741,1,0,0,0,35.1,5);
	this.instance_16.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(234).to({alpha:1},0).to({scaleX:1,x:285.1},4).to({x:323.6},10).wait(104));

	// arrows_2
	this.instance_17 = new lib.arrow_2();
	this.instance_17.setTransform(267,307.6,1,1,0,0,0,5,25.7);
	this.instance_17.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(214).to({alpha:1},0).to({y:280.6},11).wait(127));

	// arromask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_186 = new cjs.Graphics().p("AF9A3Ir6AAIAAhtIL6AAIAABt").cp();

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(186).to({graphics:mask_graphics_186,x:203.6,y:311.2}).wait(166));

	// arrows_1
	this.instance_18 = new lib.arrow1extent();
	this.instance_18.setTransform(106.4,311,1,1,0,0,0,29.1,5);
	this.instance_18.alpha = 0;

	this.instance_18.mask = mask;
	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(186).to({alpha:1},0).to({x:181.4},22).wait(144));

	// pass_text_2
	this.instance_19 = new lib.ID_s2_txt07();
	this.instance_19.setTransform(208,266,1,1,0,0,0,55,8.5);
	this.instance_19.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(172).to({alpha:1},0).wait(180));

	// text_right_bottom
	this.instance_20 = new lib.ID_s2_txt05();
	this.instance_20.setTransform(378.4,288.5,1,1,0,0,0,61.6,22.5);
	this.instance_20.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(256).to({alpha:1},0).wait(96));

	// arrowmask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_298 = new cjs.Graphics().p("ABPkjIAAJHIidAAIAApHICdAA").cp();

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(298).to({graphics:mask_1_graphics_298,x:146,y:260.8}).wait(54));

	// arrow4
	this.instance_21 = new lib.Tween3("synched",0);
	this.instance_21.setTransform(145,316.5);
	this.instance_21.alpha = 0;

	this.instance_21.mask = mask_1;
	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(298).to({alpha:1},0).to({y:270.5},21).wait(33));

	// bubble
	this.instance_22 = new lib.bubble_clip2();
	this.instance_22.setTransform(95.5,269.6,0.5,0.5,0,0,0,51.5,40);
	this.instance_22.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(277).to({scaleX:1,scaleY:1,x:55.5,y:229.6,alpha:1},9).wait(66));

	// bubble
	this.instance_23 = new lib.bubble_clip();
	this.instance_23.setTransform(95.8,254,0.45,0.45,0,0,0,51.5,40);
	this.instance_23.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(135).to({scaleX:1,scaleY:1,x:55.5,y:229.6,alpha:1},14).wait(78).to({alpha:0},5).wait(120));

	// text_left
	this.instance_24 = new lib.text_left();
	this.instance_24.setTransform(52.5,298.5,1,1,0,0,0,49.5,26.5);
	this.instance_24.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(62).to({alpha:1},5).wait(285));

	//computerred
	this.instance_28 = new lib.computer_red_1();
	this.instance_28.setTransform(147.9,184.7,0.563,0.563,0,0,0,44.6,-36.9);
	this.instance_28.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(322).to({alpha:1},0).wait(30));


  
	// computer
	this.instance_25 = new lib.computer_1();
	this.instance_25.setTransform(147.9,184.7,0.563,0.563,0,0,0,44.6,-36.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(41).to({alpha:0},0).to({alpha:1},13).wait(5).wait(14).to({alpha:0},0).wait(14).to({alpha:1},5).wait(18).to({alpha:0},0).wait(14).to({alpha:1},5).wait(223));

	// text_upper_2
	this.instance_26 = new lib.text_upper_2();
	this.instance_26.setTransform(382,200,1,1,0,0,0,59,8.5);
	this.instance_26.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(23).to({alpha:1},6).wait(323));

	// text_upper_1
	this.instance_27 = new lib.text_upper_1();
	this.instance_27.setTransform(148,154,1,1,0,0,0,59,8.5);
	this.instance_27.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(23).to({alpha:1},6).wait(323));

	// lines
	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#000000").ss(2,1,1).p("AvsqsIRMAAIAAVZAE3hJIK2AA");
	this.shape_63.setTransform(266,245.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_63}]}).wait(352));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3,146.7,415.8,201.3);


(lib.slide_2 = function() {
	this.initialize();

	// animation
	this.anim01 = new lib.animation1();
	this.anim01.setTransform(33.3,8.3,1,1,0,0,0,33.3,8.3);

	this.addChild(this.anim01);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(3,146.7,415.8,201.3);


(lib.Main = function() {
	this.initialize();

	// slide2
	this.slide02 = new lib.slide_2();
	this.slide02.setTransform(202.5,126.5,1,1,0,0,0,202.5,126.5);

	this.addChild(this.slide02);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(3,146.7,415.8,201.3);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;