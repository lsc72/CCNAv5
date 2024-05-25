(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.classesmediaMediaObject = function() {
	this.initialize();

	// main
	this.instance = new lib.Main();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(9,78.2,386,199);


// symbols:
(lib.computer = function() {
	this.initialize(img.computer);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,143,119);


(lib.Server_file = function() {
	this.initialize(img.Server_file);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,102,143);


(lib.Switch_workgroup = function() {
	this.initialize(img.Switch_workgroup);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,165,79);


(lib.packet_box_empty = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AhIA3IiVAAIAAhtICVAAICSAAIBJAAIBLAAIAABtIhLAAIhJAAIiSAAAhIg2IAABtABKA3IAAhtACTg2IAABt");
	this.shape.setTransform(22.3,-5.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F4F5D3").s().p("ABJg2IBLAAIAABtIhLAAIAAhtAAAg2IAABtIiTAAIAAhtICTAA").cp();
	this.shape_1.setTransform(29.7,-5.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E9E7E8").s().p("AgjA3IiVAAIAAhtICVAAIAABtABwA3IAAhtIBJAAIAABtIhJAA").cp();
	this.shape_2.setTransform(18.5,-5.5);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-11.1,44.5,11.2);


(lib.packet_2instance4 = function() {
	this.initialize();

	// Layer 2
	this.text = new DOMObject({type:"TEXT" , align:"center" ,compId:"ID_txt04", width:"100", expand:"up+down"});
	this.text.setTransform(-5,-25.8);

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E9E7E8").s("#000000").ss(2,1,1).p("AHCi3IAAFvIuDAAIAAlvIODAA").cp();
	this.shape_3.setTransform(45.1,-18.3);

	this.addChild(this.shape_3,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-36.7,90.2,36.8);


(lib.label2 = function() {
	this.initialize();

	// Layer 1
	this.text = new DOMObject({type:"TEXT" , align:"left" ,compId:"ID_txt03", width:"450", expand:"up+down",class:"orangeCallOut"});
	this.text.setTransform(27,5.2);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(27,5.2,45.1,16.2);


(lib.label = function() {
	this.initialize();

	// Layer 1
	this.text_1 = new DOMObject({type:"TEXT" , align:"left" ,compId:"ID_txt02", width:"60", expand:"up+down"});
	this.text_1.setTransform(310,1.2);

	this.text_2 = new DOMObject({type:"TEXT" , align:"center" ,compId:"ID_txt01", width:"60", expand:"up+down"});
	this.text_2.setTransform(50,0.8);

	this.addChild(this.text_2,this.text_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0.8,316.1,16.5);


(lib.Switchworkgroup = function() {
	this.initialize();

	// <><>
	this.instance = new lib.Switch_workgroup();
	this.instance.setTransform(0,-61.9,0.78,0.785);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-61.9,128.8,62);


(lib.Serverfile = function() {
	this.initialize();

	// detail
	this.instance_1 = new lib.Server_file();
	this.instance_1.setTransform(0,-89.3,0.623,0.625);

	this.addChild(this.instance_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-89.3,63.5,89.4);


(lib.animation02 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{},true);

	// text_box_1
	this.instance_2 = new lib.packet_2instance4();
	this.instance_2.setTransform(268.4,194.1,0.474,0.474,0,0,0,45.1,-26.7);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(41).to({scaleX:1,scaleY:1,x:348.6,y:127.1,alpha:1},24).wait(41).to({scaleX:0.4,scaleY:0.4,x:279.6,y:196.1,alpha:0},19).wait(75));


	// icons
	this.instance_3 = new lib.Serverfile();
	this.instance_3.setTransform(278,106.9,0.643,0.643,0,0,0,31.8,-44.7);

	this.instance_4 = new lib.computer();
	this.instance_4.setTransform(368.7,162.3,0.45,0.448);

	this.instance_5 = new lib.computer();
	this.instance_5.setTransform(108.8,162.3,0.45,0.448);

	this.instance_6 = new lib.Switchworkgroup();
	this.instance_6.setTransform(270.9,199,0.608,0.608,0,0,0,64.3,-30.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["rgba(255,255,255,0.251)","rgba(0,0,0,0.102)"],[0,1],0,3.7,0,-3.5).s().p("AiLgjIFLAAIAOAAIAwAAIg0BHInHAAIA0hHIA+AA").cp();
	this.shape_4.setTransform(394.2,209.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["rgba(0,0,0,0.153)","rgba(0,0,0,0.353)"],[0,1],-2.5,0,2.6,0).s().p("AgZAZIAzhIIAAAsIgzAzIAAgX").cp();
	this.shape_5.setTransform(417,210.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["rgba(0,0,0,0.153)","rgba(0,0,0,0.353)"],[0,1],-1.4,0,1.5,0).s().p("AgNAmIgBABIAAgUIAcg5IABAAIAAAnIgcAl").cp();
	this.shape_6.setTransform(428.9,211.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["rgba(255,255,255,0.251)","rgba(0,0,0,0.153)"],[0,1],0,3.1,0,-2.9).s().p("AATAeIhDAAIAeg7IAhAAQAAABAAAAIACAAQAAAAAAAAIAAgBIAgAAIgBACIgdA5").cp();
	this.shape_7.setTransform(425.4,210.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["rgba(0,0,0,0.153)","rgba(0,0,0,0.353)"],[0,1],-4.4,0,4.6,0).s().p("AgdA8IgPAAIAAgeIAZAAIAAgXIBAhCIAAAYIgYAZIAAAFIgBABQAAAAAAABIABAAIAAAMIgyAz").cp();
	this.shape_8.setTransform(418,199.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["rgba(0,0,0,0.153)","rgba(0,0,0,0.353)"],[0,1],-1.3,0,1.4,0).s().p("AACAHIgPgOIAbAAIgDADIgJAL").cp();
	this.shape_9.setTransform(415.6,196.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["rgba(0,0,0,0.153)","rgba(0,0,0,0.353)"],[0,1],-2.3,0,2.5,0).s().p("AgXCmIAAk0IAvgXIAAEeIgaAaIgVAT").cp();
	this.shape_10.setTransform(420.3,179);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["rgba(255,255,255,0.251)","rgba(0,0,0,0.153)"],[0,1],0,1.2,0,-1.1).s().p("ADngKIgwAVImdAAIBpgVIFkAA").cp();
	this.shape_11.setTransform(399.6,163.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["rgba(255,255,255,0.251)","rgba(0,0,0,0.153)"],[0,1],0,3.4,0,-3.3).s().p("ACkAFIAJgMIADgCIAJAAIAAgEIAVgUIAZAAIhDBDImKAAIAsgrIARAOIFNAA").cp();
	this.shape_12.setTransform(399.4,197.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#57BDB4").s().p("AUSAAIABAAIAAAAIgBAAA0SAAIABAAIAAAAIgBAA").cp();
	this.shape_13.setTransform(297.5,215.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#80CDC6").s().p("AUSAAIAAAAIABAAIgBAAA0SAAIAAAAIABAAIgBAA").cp();
	this.shape_14.setTransform(300.5,207.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#007A68").s().p("AUTAAIgBAAIABAAIAAAAA0SAAIABAAIAAAAIgBAA").cp();
	this.shape_15.setTransform(300.4,207.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["rgba(0,0,0,0.153)","rgba(0,0,0,0.353)"],[0,1],-1.4,0,1.5,0).s().p("AgNAmIgBABIAAgUIAcg5IABAAIAAAnIgcAl").cp();
	this.shape_16.setTransform(169,211.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["rgba(255,255,255,0.251)","rgba(0,0,0,0.153)"],[0,1],0,3.1,0,-2.9).s().p("AATAeIhDAAIAeg7IAhAAQAAABAAAAIACAAQAAAAAAAAIAAgBIAgAAIgBACIgdA5").cp();
	this.shape_17.setTransform(165.6,210.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(0,0,0,0.251)").s().p("AW5APIlMAAIAAgdIFMAAIAAAdAxrAPIlNAAIAAgdIFNAAIAAAd").cp();
	this.shape_18.setTransform(266.9,204.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["rgba(0,0,0,0.153)","rgba(0,0,0,0.353)"],[0,1],-2.5,0,2.6,0).s().p("AgYAZIAxhIIAAAsIgxAzIAAgX").cp();
	this.shape_19.setTransform(157.2,210.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["rgba(255,255,255,0.251)","rgba(0,0,0,0.102)"],[0,1],0,3.7,0,-3.5).s().p("AiLgjIFLAAIAOAAIAwAAIg0BHInHAAIA0hHIA+AA").cp();
	this.shape_20.setTransform(134.3,209.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(0,0,0,0.082)").s().p("AXThOIAAgBQgBAAAAgBIABgBQAcABAWACQBPAFABAXQAAADgCAEQgBABAAABQgFAFgJAGIgBAAIgaALQgOACgEAEQgFACADAEQADAFADACIAAABIAAAAQAAABgBAAIgBAAQgBgBAAAAQgCgCgDgFQgEgGAGgEQAGgDANgCIAbgLIAAAAQAIgFAEgFQABgBABgBQACgDAAgDQgBgWhPgFQgVgBgbAAIAAAAAXXA9IBFAAIAAAVIhFAAIAAgVAPSA6IHJAAIAAAXInKAAIAAgXIABAAAwKABIAAAAQAAABAAAAIgCAAQAAgBAAAAQgCgCgDgFQgFgGAHgEQAFgDANgCIAbgLIAAAAQAJgFAEgFQAAgBABgBQACgDAAgDQgBgWhPgFQgUgBgcAAIAAgBQAAAAAAgBIAAgBQAdABAVACQBQAFAAAXQAAADgCAEQgBABAAABQgFAFgJAGIAAAAIgbALQgNACgFAEQgEACACAEQAEAFACACIAAABAxNA9IBFAAIAAAVIhFAAIAAgVA5SA6IHIAAIAAAXInJAAIAAgXIABAA").cp();
	this.shape_21.setTransform(270.9,207.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["rgba(255,255,255,0.251)","rgba(0,0,0,0.153)"],[0,1],0,1.2,0,-1.1).s().p("AC3ALImdAAIBpgVIFkAAIgwAV").cp();
	this.shape_22.setTransform(139.7,163.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(0,0,0,0.153)").s().p("AWygHIARAOIlQAAIgQgOIFPAAA3CgHIFPAAIARAOIlPAAIgRgO").cp();
	this.shape_23.setTransform(268.3,196.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["rgba(255,255,255,0.251)","rgba(0,0,0,0.153)"],[0,1],0,3.4,0,-3.3).s().p("ADOghIAZAAIhDBDImKAAIAsgrIARAOIFNAAIAJgMIADgCIAJAAIAAgEIAVgU").cp();
	this.shape_24.setTransform(139.5,197.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["rgba(0,0,0,0.153)","rgba(0,0,0,0.353)"],[0,1],-1.3,0,1.4,0).s().p("AACAHIgPgOIAbAAIgDADIgJAL").cp();
	this.shape_25.setTransform(155.7,196.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(255,255,255,0.4)").s().p("ARihsQAHgRAYAAIEkAAQAiAAAAAjIAAC2QAAAigiAAIkkAAQgYAAgHgRQgEgHAAgKIAAi2QAAgLAEgHIAAAAA3GhaQAAgLADgHQAHgRAZAAIEjAAQAiAAAAAjIAAC2QAAAigiAAIkjAAQgZAAgHgRQgDgHAAgKIAAi2").cp();
	this.shape_26.setTransform(267.1,180.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(0,0,0,0.012)").s().p("ARhiMQgDAHAAALIAAC2QAAAKADAHQAIARAYAAIEkAAQAiAAAAgiIAAi2QAAgjgiAAIkkAAQgYAAgIARIAAAAAW3C/IlNAAIgoAAIAAgYIABAAIGMAAIAAAYIgYAAAXki+IAAE0IAAAEIgJAAIgdAAIlPAAIgqAAIAAk4IGfAAAxmB6IlPAAIgrAAIAAk4IGfAAIAAE0IAAAEIgJAAIgcAAAxuC/IlMAAIgoAAIAAgYIABAAIGMAAIAAAYIgZAAA3Gh6IAAC2QAAAKADAHQAHARAZAAIEjAAQAiAAAAgiIAAi2QAAgjgiAAIkjAAQgZAAgHARQgDAHAAALIAAAA").cp();
	this.shape_27.setTransform(267.1,183.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["rgba(0,0,0,0.153)","rgba(0,0,0,0.353)"],[0,1],-2.3,0,2.5,0).s().p("AgCCTIgVATIAAk0IAvgXIAAEeIgaAa").cp();
	this.shape_28.setTransform(160.5,179);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["rgba(0,0,0,0.153)","rgba(0,0,0,0.353)"],[0,1],-4.4,0,4.6,0).s().p("AgUAHIBBhCIAAAYIgZAZIAAAFIgBABQAAAAABABIAAAAIAAAMIgyAzIgOAAIAAgeIAYAAIAAgX").cp();
	this.shape_29.setTransform(158.1,199.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3}]}).wait(200));

	// packet_box
	this.instance_7 = new lib.packet_box_empty();
	this.instance_7.setTransform(400.7,191.8,1,1,0,0,0,22.3,-5.5);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({x:394.4,alpha:1},3).to({x:280.7},36).wait(39).wait(57).to({x:275.7},0).to({x:150},32).to({x:138.2,alpha:0},3).wait(30));

	// texts
	this.instance_8 = new lib.label2();
	this.instance_8.setTransform(232.6,264.3,1,1,0,0,0,212.6,8.5);

	this.instance_9 = new lib.label();
	this.instance_9.setTransform(228.1,226.3,1,1,0,0,0,169.1,8.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8}]}).wait(200));

	// lines
	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(2,1,1).p("AyVEIISHAAIAApWAgOFPIAAhHISkAA");
	this.shape_30.setTransform(277.5,165.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30}]}).wait(200));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(47,78.2,386,199);


(lib.Main = function() {
	this.initialize();

	// animation 2
	this.anim01 = new lib.animation02();
	this.anim01.setTransform(-37.9,0);

	this.addChild(this.anim01);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(9,78.2,386,199);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;