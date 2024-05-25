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
(lib.computer = function() {
	this.initialize(img.computer);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,143,119);


(lib.envelope_closed_static = function() {
	this.initialize(img.envelope_closed_static);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,123,79);


(lib.media_10212 = function() {
	this.initialize(img.media_10212);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,653,556);


(lib.Switch_workgroup = function() {
	this.initialize(img.Switch_workgroup);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,165,79);


(lib.bubbles = function() {
	this.initialize();

	// Layer 1
	this.text = new BubbleComp({x:"0",y:"0",width:"130",size:"10",compId:"ID_txt08",align:"center",tailPosition:"6",tailFlip:"2",extend:"right"});
	this.text.setTransform(320,130);

	this.text_1 = new BubbleComp({x:"0",y:"0",width:"100",size:"10",compId:"ID_txt07",align:"center",tailPosition:"6",tailFlip:"2",extend:"right"});
	this.text_1.setTransform(330,0);

	this.text_2 = new BubbleComp({x:"0",y:"0",width:"100",size:"10",compId:"ID_txt06",align:"center",tailPosition:"6",tailFlip:"2",extend:"right"});
	this.text_2.setTransform(5,140);

	this.addChild(this.text_2,this.text_1,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(41,13.2,373.1,158.2);


(lib.bubble4 = function() {
	this.initialize();

	// Layer 1
		this.text_3 = new BubbleComp({x:"0",y:"0",width:"100",size:"10",compId:"ID_txt10",align:"center",tailPosition:"6",tailFlip:"2",extend:"right"});

	this.text_3.setTransform(0,-5);

	this.addChild(this.text_3);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(19,3.2,45.1,16.2);


(lib.bubble2 = function() {
	this.initialize();

	// Layer 1
	this.text_4 = new BubbleComp({x:"0",y:"0",width:"250",compId:"ID_txt09",align:"left",tailPosition:"7",tailFlip:"2",extend:"right"});
	this.text_4.setTransform(5,-16);

	this.addChild(this.text_4);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(22,0,45.1,16.2);


(lib.bubble1 = function() {
	this.initialize();

	// Layer 1
		this.text_5 = new BubbleComp({x:"0",y:"0",width:"250",compId:"ID_txt05",align:"left",tailPosition:"7",tailFlip:"2",extend:"right"});
	this.text_5.setTransform(10,-30);

	this.addChild(this.text_5);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(10,0,45.1,16.2);


(lib.envelopeclosedstatic = function() {
	this.initialize();

	// inner lines
	this.instance = new lib.envelope_closed_static();
	this.instance.setTransform(-39.5,-26.1,0.667,0.663);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-39.5,-26.1,82.1,52.4);


(lib.Switchworkgroup = function() {
	this.initialize();

	// z box_flat
	this.instance_1 = new lib.Switch_workgroup();
	this.instance_1.setTransform(0,-61.9,0.78,0.785);

	this.addChild(this.instance_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-61.9,128.8,62);

(lib.Animation = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{},true);

	// bubbles
	this.instance_2 = new lib.bubbles();
	this.instance_2.setTransform(235,188,1,1,0,0,0,226.1,92);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(135).to({alpha:1},0).wait(57).to({alpha:0},0).wait(179));

	// bubbles4
	this.instance_2 = new lib.bubble2();
	this.instance_2.setTransform(170,116,1,1,0,0,0,125,20);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(306).to({alpha:1},0).wait(61).to({alpha:0},0).wait(4));

	// bubbles3
	this.instance_3 = new lib.bubble1();
	this.instance_3.setTransform(173.5,116,1,1,0,0,0,137.5,20);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(14).to({alpha:1},0).wait(292).to({alpha:0},0).wait(65));

	// bubble4
	this.instance_4 = new lib.bubble4();
	this.instance_4.setTransform(400.2,260,1,1,0,0,0,59.2,20);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(368).to({alpha:1},0).wait(3));

	// text
	this.text_6 = new cjs.Text("192.168.1.7", "11px Arial", "#393536");
	this.text_6.textAlign = "center";
	this.text_6.lineHeight = 13;
	this.text_6.setTransform(399,326);

	this.text_7 = new cjs.Text("192.168.1.8", "11px Arial", "#393536");
	this.text_7.textAlign = "center";
	this.text_7.lineHeight = 13;
	this.text_7.setTransform(399,183);

	this.text_8 = new cjs.Text("192.168.1.6", "11px Arial", "#393536");
	this.text_8.textAlign = "center";
	this.text_8.lineHeight = 13;
	this.text_8.setTransform(68.1,326);

	this.text_9 = new cjs.Text("192.168.1.5", "11px Arial", "#393536");
	this.text_9.textAlign = "center";
	this.text_9.lineHeight = 13;
	this.text_9.setTransform(69.6,183);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_9},{t:this.text_8},{t:this.text_7},{t:this.text_6}]}).wait(371));


// icons
	this.text_10 = new cjs.Text("H3", "bold 11px Arial", "#FFFFFF");
	this.text_10.lineHeight = 11;
	this.text_10.setTransform(392,145);

	this.instance_6 = new lib.computer();
	this.instance_6.setTransform(370.9,129.5,0.438,0.436);

	this.text_11 = new cjs.Text("H4", "bold 11px Arial", "#FFFFFF");
	this.text_11.lineHeight = 11;
	this.text_11.setTransform(392,288);

	this.instance_7 = new lib.computer();
	this.instance_7.setTransform(370.9,272.1,0.438,0.436);

	this.text_12 = new cjs.Text("H1", "bold 11px Arial", "#FFFFFF");
	this.text_12.lineHeight = 11;
	this.text_12.setTransform(65,145);

	this.instance_8 = new lib.computer();
	this.instance_8.setTransform(41.9,129.5,0.438,0.436);

	this.text_13 = new cjs.Text("H2", "bold 11px Arial", "#FFFFFF");
	this.text_13.lineHeight = 11;
	this.text_13.setTransform(65,288);

	this.instance_9 = new lib.computer();
	this.instance_9.setTransform(41.9,272.1,0.438,0.436);

	this.instance_10 = new lib.Switchworkgroup();
	this.instance_10.setTransform(215.2,170,0.5,0.5,0,0,0,19.3,-1.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0.153)","rgba(0,0,0,0.353)"],[0,1],-2.4,0,2.6,0).s().p("AgYAYIAxhFIAAAqIgxAxIAAgW").cp();
	this.shape.setTransform(417.9,319.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(0,0,0,0.153)","rgba(0,0,0,0.353)"],[0,1],-4.3,0,4.4,0).s().p("AgrAeIAYAAIAAgYIA/hAIAAAXIgYAZIAAAFQAAAAAAABQgBAAAAAAQAAAAABAAQAAABAAAAIAAALIgxAzIgOAAIAAgd").cp();
	this.shape_1.setTransform(418.9,308.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(0,0,0,0.153)","rgba(0,0,0,0.353)"],[0,1],-1.2,0,1.4,0).s().p("AACAHIgOgNIAZAAIgDACIgIAL").cp();
	this.shape_2.setTransform(416.5,305.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(0,0,0,0.153)","rgba(0,0,0,0.353)"],[0,1],-1.4,0,1.5,0).s().p("AgMAkIgCACIAAgUIAcg3IABAAIAAAlIgbAk").cp();
	this.shape_3.setTransform(429.5,320.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["rgba(255,255,255,0.251)","rgba(0,0,0,0.153)"],[0,1],0,3,0,-2.8).s().p("AASAdIhBAAIAdg5IAgAAQAAAAABABIAAAAQABAAAAAAQABAAAAgBIAAAAIAfAAIgBACIgdA3").cp();
	this.shape_4.setTransform(426.1,319.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["rgba(255,255,255,0.251)","rgba(0,0,0,0.102)"],[0,1],0,3.6,0,-3.4).s().p("AiHgiIFBAAIAPAAIAuAAIgzBFIm6AAIAzhFIA8AA").cp();
	this.shape_5.setTransform(395.7,318.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["rgba(255,255,255,0.251)","rgba(0,0,0,0.153)"],[0,1],0,3.3,0,-3.2).s().p("ACgAEIAIgLIADgDIAJAAIAAgDIAUgTIAZAAIhBBBImAAAIArgrIAQAOIFFAA").cp();
	this.shape_6.setTransform(400.8,306.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["rgba(255,255,255,0.251)","rgba(0,0,0,0.153)"],[0,1],0,1.2,0,-1).s().p("ACyALImSAAIBngVIFaAAIgvAV").cp();
	this.shape_7.setTransform(400.9,273.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["rgba(0,0,0,0.153)","rgba(0,0,0,0.353)"],[0,1],-2.2,0,2.4,0).s().p("AAXihIAAEXIgYAZIgVATIAAksIAtgX").cp();
	this.shape_8.setTransform(421.2,288.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["rgba(0,0,0,0.153)","rgba(0,0,0,0.353)"],[0,1],-2.4,0,2.6,0).s().p("AgYAYIAxhFIAAAqIgxAxIAAgW").cp();
	this.shape_9.setTransform(89,319.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["rgba(0,0,0,0.153)","rgba(0,0,0,0.353)"],[0,1],-1.2,0,1.4,0).s().p("AANgGIgDACIgIALIgOgNIAZAA").cp();
	this.shape_10.setTransform(87.6,305.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["rgba(0,0,0,0.153)","rgba(0,0,0,0.353)"],[0,1],-4.3,0,4.4,0).s().p("AgrAeIAYAAIAAgYIA/hAIAAAXIgYAZIAAAFQAAAAAAABQgBAAAAAAQAAAAABAAQAAABAAAAIAAALIgxAzIgOAAIAAgd").cp();
	this.shape_11.setTransform(89.9,308.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["rgba(255,255,255,0.251)","rgba(0,0,0,0.153)"],[0,1],0,3,0,-2.8).s().p("AASAdIhBAAIAdg5IAgAAQAAAAABABIAAAAQABAAAAAAQABAAAAgBIAAAAIAfAAIgBACIgdA3").cp();
	this.shape_12.setTransform(97.2,319.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["rgba(0,0,0,0.153)","rgba(0,0,0,0.353)"],[0,1],-1.4,0,1.5,0).s().p("AgMAkIgCACIAAgUIAcg3IABAAIAAAlIgbAk").cp();
	this.shape_13.setTransform(100.5,320.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["rgba(255,255,255,0.251)","rgba(0,0,0,0.102)"],[0,1],0,3.6,0,-3.4).s().p("AiHgiIFCAAIANAAIAvAAIgzBFIm6AAIAzhFIA8AA").cp();
	this.shape_14.setTransform(66.8,318.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["rgba(255,255,255,0.251)","rgba(0,0,0,0.153)"],[0,1],0,3.3,0,-3.2).s().p("ACgAEIAIgLIADgDIAJAAIAAgDIAUgTIAZAAIhBBBImAAAIArgrIAQAOIFFAA").cp();
	this.shape_15.setTransform(71.8,306.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["rgba(255,255,255,0.251)","rgba(0,0,0,0.153)"],[0,1],0,1.2,0,-1).s().p("ACyALImSAAIBngVIFaAAIgvAV").cp();
	this.shape_16.setTransform(72,273.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["rgba(0,0,0,0.153)","rgba(0,0,0,0.353)"],[0,1],-2.2,0,2.4,0).s().p("AAXihIAAEXIgYAZIgVATIAAksIAtgX").cp();
	this.shape_17.setTransform(92.2,288.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["rgba(0,0,0,0.153)","rgba(0,0,0,0.353)"],[0,1],-1.4,0,1.5,0).s().p("AgMAlIgCABIAAgUIAcg3IABABIAAAkIgbAl").cp();
	this.shape_18.setTransform(429.5,177.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["rgba(0,0,0,0.153)","rgba(0,0,0,0.353)"],[0,1],-2.4,0,2.6,0).s().p("AAZgtIAAAqIgxAxIAAgWIAxhF").cp();
	this.shape_19.setTransform(417.9,176.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["rgba(255,255,255,0.251)","rgba(0,0,0,0.153)"],[0,1],0,3,0,-2.8).s().p("AASAdIhBAAIAdg5IAgAAQAAAAABABIAAAAQABAAAAAAQABAAAAgBIAAAAIAfAAIgBACIgdA3").cp();
	this.shape_20.setTransform(426.1,176.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["rgba(0,0,0,0.153)","rgba(0,0,0,0.353)"],[0,1],-1.2,0,1.4,0).s().p("AANgGIgDACIgIALIgOgNIAZAA").cp();
	this.shape_21.setTransform(416.5,163.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["rgba(0,0,0,0.153)","rgba(0,0,0,0.353)"],[0,1],-4.3,0,4.4,0).s().p("AgrAdIAYAAIAAgXIA/hAIAAAXIgYAYIAAAGQAAAAAAAAQgBAAAAABQAAAAABAAQAAABAAAAIAAALIgxAzIgOAAIAAge").cp();
	this.shape_22.setTransform(418.9,166.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["rgba(0,0,0,0.153)","rgba(0,0,0,0.353)"],[0,1],-2.2,0,2.4,0).s().p("AAXihIAAEYIgYAZIgVASIAAksIAtgX").cp();
	this.shape_23.setTransform(421.2,145.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["rgba(255,255,255,0.251)","rgba(0,0,0,0.153)"],[0,1],0,3.3,0,-3.2).s().p("ACgAEIAIgLIADgCIAJAAIAAgEIAUgSIAZAAIhBBAImAAAIArgqIAQANIFFAA").cp();
	this.shape_24.setTransform(400.8,163.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["rgba(255,255,255,0.251)","rgba(0,0,0,0.102)"],[0,1],0,3.6,0,-3.4).s().p("AiHgiIFBAAIAPAAIAuAAIgzBFIm6AAIAzhFIA8AA").cp();
	this.shape_25.setTransform(395.7,175.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.lf(["rgba(255,255,255,0.251)","rgba(0,0,0,0.153)"],[0,1],0,1.2,0,-1).s().p("ADhgKIgvAVImSAAIBngVIFaAA").cp();
	this.shape_26.setTransform(400.9,130.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#80CDC6").s().p("AZsrGIAAgDIABAAIgBADAZsLKIAAgDIABAAIgBADA5srGIAAgDIABAAIgBADA5sLKIAAgDIABAAIgBAD").cp();
	this.shape_27.setTransform(266.5,245);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#007A68").s().p("AZtrGIgBgBIABgCIAAADAZsLJIABgCIAAADIgBgBA5rrGIgBgBIABgCIAAADA5rLHIAAADIgBgBIABgC").cp();
	this.shape_28.setTransform(266.4,245);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["rgba(0,0,0,0.153)","rgba(0,0,0,0.353)"],[0,1],-2.4,0,2.6,0).s().p("AAZgtIAAAqIgxAxIAAgWIAxhF").cp();
	this.shape_29.setTransform(89,176.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#57BDB4").s().p("AZrrHIACgBIAAABIgCAAAZrLJIACgBIAAABIgCAAA5srHIABgBIAAABIgBAAA5sLJIABgBIAAABIgBAA").cp();
	this.shape_30.setTransform(263.6,252.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.lf(["rgba(0,0,0,0.153)","rgba(0,0,0,0.353)"],[0,1],-1.4,0,1.5,0).s().p("AgOASIAcg3IABABIAAAkIgbAlIgCABIAAgU").cp();
	this.shape_31.setTransform(100.5,177.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.lf(["rgba(255,255,255,0.251)","rgba(0,0,0,0.153)"],[0,1],0,3,0,-2.8).s().p("AAvgaIgdA3IhBAAIAdg5IAgAAQAAAAABABIAAAAQABAAAAAAQABAAAAgBIAAAAIAfAAIgBAC").cp();
	this.shape_32.setTransform(97.2,176.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.lf(["rgba(0,0,0,0.153)","rgba(0,0,0,0.353)"],[0,1],-4.3,0,4.4,0).s().p("AgTAGIA/hAIAAAXIgYAYIAAAGQAAAAAAAAQgBAAAAABQAAAAABAAQAAABAAAAIAAALIgxAzIgOAAIAAgeIAYAAIAAgX").cp();
	this.shape_33.setTransform(89.9,166.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.lf(["rgba(0,0,0,0.153)","rgba(0,0,0,0.353)"],[0,1],-1.2,0,1.4,0).s().p("AACAHIgOgNIAZAAIgDACIgIAL").cp();
	this.shape_34.setTransform(87.6,163.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.lf(["rgba(0,0,0,0.153)","rgba(0,0,0,0.353)"],[0,1],-2.2,0,2.4,0).s().p("AgWCiIAAksIAtgXIAAEYIgYAZIgVAS").cp();
	this.shape_35.setTransform(92.2,145.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("rgba(0,0,0,0.082)").s().p("AbwqPIAAAWIm9AAIAAgWIABAAIG8AAAdtrGIAAAAQAAAAAAAAQgBAAAAAAIgBAAQAAAAAAAAQgCgEgDgFQgEgGAGgDQAFgEANgCIAagLIAAABQAIgFAEgFQABgBABAAQACgEAAgDQgBgVhNgFQgUgBgagBQgBAAAAAAQAAAAAAAAQAAgBAAAAQAAgBABAAQAbABAVABQBNAGABAWQAAADgCAEQgBABAAAAQgFAGgJAGIgaAKQgNACgFAEQgEACACAEQAEAFACAFIAAAAAcsqMIBCAAIAAAUIhCAAIAAgUAU0MBIG8AAIAAAWIm9AAIAAgWIABAAAcoJ7QgBAAAAgBQAAAAAAgBQAAAAAAAAQAAAAABAAQAbAAAVACQBNAFABAWQAAAEgCADQgBABAAABQgFAFgJAGIgaALQgNACgFADQgEADACADQAEAGACADIAAABQAAABAAAAQgBAAAAAAIgBAAQAAgBAAgBQgCgDgDgFQgEgFAGgEQAFgDANgDIAagKIAAAAQAIgFAEgEQABgCABgBQACgDAAgDQgBgVhNgFQgUgBgaAAIAAAAAcsMFIBCAAIAAAUIhCAAIAAgUA3nqPIAAAWIm9AAIAAgWIAAAAIG9AAA1qrGIAAAAQAAAAgBAAQAAAAgBAAIgBAAQAAAAAAAAQgCgEgDgFQgEgGAGgDQAGgEAMgCIAagLIAAABQAIgFAEgFQABgBABAAQACgEAAgDQgBgVhNgFQgUgBgagBQAAAAAAAAQgBAAAAAAQAAgBABAAQAAgBAAAAQAbABAVABQBNAGABAWQAAADgCAEQgBABAAAAQgEAGgKAGIgaAKQgNACgFAEQgEACADAEQADAFADAFIAAAAA2sqMIBCAAIAAAUIhCAAIAAgUA+kMBIG9AAIAAAWIm9AAIAAgWIAAAAA1qLJIAAABQAAABgBAAQAAAAgBAAIgBAAQAAgBAAgBQgCgDgDgFQgEgFAGgEQAGgDAMgDIAagKIAAAAQAIgFAEgEQABgCABgBQACgDAAgDQgBgVhNgFQgUgBgaAAQAAAAAAgBQgBAAAAgBQAAAAABAAQAAAAAAAAQAbAAAVACQBNAFABAWQAAAEgCADQgBABAAABQgEAFgKAGIgaALQgNACgFADQgEADADADQADAGADADIAAAAA2sMFIBCAAIAAAUIhCAAIAAgU").cp();
	this.shape_36.setTransform(237.7,244.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.lf(["rgba(255,255,255,0.251)","rgba(0,0,0,0.102)"],[0,1],0,3.6,0,-3.4).s().p("AiHgiIFCAAIANAAIAvAAIgzBFIm6AAIAzhFIA8AA").cp();
	this.shape_37.setTransform(66.8,175.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("rgba(0,0,0,0.153)").s().p("AcHrPIARAPIlHAAIgQgPIFGAAAcHLBIARAPIlHAAIgQgPIFGAAA8XrPIFGAAIARAPIlHAAIgQgPA3RLBIARAPIlHAAIgQgPIFGAA").cp();
	this.shape_38.setTransform(235.2,234.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.lf(["rgba(255,255,255,0.251)","rgba(0,0,0,0.153)"],[0,1],0,3.3,0,-3.2).s().p("ADhgfIhBBAImAAAIArgqIAQANIFFAAIAIgLIADgCIAJAAIAAgEIAUgSIAZAA").cp();
	this.shape_39.setTransform(71.8,163.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("rgba(0,0,0,0.251)").s().p("AXLrWIFDAAIAAAdIlDAAIAAgdAXLK6IFDAAIAAAdIlDAAIAAgdA8NrWIFDAAIAAAdIlDAAIAAgdA3KLXIlDAAIAAgdIFDAAIAAAd").cp();
	this.shape_40.setTransform(233.8,241.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("rgba(255,255,255,0.4)").s().p("AXAsyQAHgRAYAAIEcAAQAhAAAAAiIAACzQAAAhghAAIkcAAQgYAAgHgQQgDgHAAgKIAAizQAAgKADgHIAAAAAccJwIAACyQAAAighAAIkcAAQgYAAgHgRQgDgHAAgKIAAiyQAAgLADgHQAHgRAYAAIEcAAQAhAAAAAjIAAAAA8YsyQAIgRAYAAIEbAAQAhAAAAAiIAACzQAAAhghAAIkbAAQgYAAgIgQQgDgHAAgKIAAizQAAgKADgHIAAAAA28JwIAACyQAAAighAAIkbAAQgYAAgIgRQgDgHAAgKIAAiyQAAgLADgHQAIgRAYAAIEbAAQAhAAAAAjIAAAA").cp();
	this.shape_41.setTransform(233.9,218.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("rgba(0,0,0,0.012)").s().p("AW/tRQgDAHAAAKIAACzQAAAKADAHQAHAQAZAAIEbAAQAhAAAAghIAAizQAAgighAAIkbAAQgZAAgHARIAAAAAc4uCIAAEuIAAADIgKAAIgbAAIlGAAIgqAAIAAkxIGVAAAcLoNIlDAAIgnAAIAAgYIABAAIGCAAIAAAYIgZAAAcbJQQAAgighAAIkbAAQgZAAgHARQgDAHAAAKIAACzQAAAKADAHQAHAQAZAAIEbAAQAhAAAAghIAAizAc4M8IAAADIgKAAIgbAAIlGAAIgqAAIAAkxIGVAAIAAEuAcLODIlDAAIgnAAIAAgYIABAAIGCAAIAAAYIgZAAA8ZtRQgDAHAAAKIAACzQAAAKADAHQAIAQAYAAIEbAAQAhAAAAghIAAizQAAgighAAIkbAAQgYAAgIARIAAAAA3FpRIlGAAIgqAAIAAkxIGVAAIAAEuIAAADIgJAAIgcAAA3MoNIlEAAIgnAAIAAgYIABAAIGCAAIAAAYIgYAAA2gM8IAAADIgJAAIgcAAIlGAAIgqAAIAAkxIGVAAIAAEuA29JQQAAgighAAIkbAAQgYAAgIARQgDAHAAAKIAACzQAAAKADAHQAIAQAYAAIEbAAQAhAAAAghIAAizA3MODIlEAAIgnAAIAAgYIABAAIGCAAIAAAYIgYAA").cp();
	this.shape_42.setTransform(234,221.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.lf(["rgba(255,255,255,0.251)","rgba(0,0,0,0.153)"],[0,1],0,1.2,0,-1).s().p("ADhgKIgvAVImSAAIBngVIFaAA").cp();
	this.shape_43.setTransform(72,130.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_10},{t:this.instance_9},{t:this.text_13},{t:this.instance_8},{t:this.text_12},{t:this.instance_7},{t:this.text_11},{t:this.instance_6},{t:this.text_10}]}).wait(371));


	// packets H2
	this.instance_5 = new lib.envelopeclosedstatic();
	this.instance_5.setTransform(70,153.9,0.3,0.3);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(74).to({alpha:1},0).to({x:234.9},30).to({x:74.8,y:294.3},30).wait(1).to({alpha:0},0).wait(236));

	// packets H3
	this.instance_6 = new lib.envelopeclosedstatic();
	this.instance_6.setTransform(234.9,153.9,0.3,0.3);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(104).to({alpha:1},0).to({x:397.5,y:294.3},30).wait(58).to({x:235.1,y:155.5},31).to({x:75.4},29).wait(55).to({regX:44.5,regY:40.9,x:88.8,y:167.7},0).to({x:249.9},30).to({x:410.4,y:309},30).wait(4));

	// packets H4
	this.instance_7 = new lib.envelopeclosedstatic();
	this.instance_7.setTransform(234.9,153.9,0.3,0.3);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(104).to({alpha:1},0).to({x:397.5},30).wait(1).to({alpha:0},0).wait(236));

	// Layer 2
	this.instance_8 = new lib.media_10212();
	this.instance_8.setTransform(0,0,0.72,0.719);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8}]}).wait(371));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,470,400);


(lib.Main = function() {
	this.initialize();

	// animation
	this.anim01 = new lib.Animation();

	this.addChild(this.anim01);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,470,400);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;