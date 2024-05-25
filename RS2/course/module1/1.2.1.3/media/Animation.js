(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.classesmediaMediaObject = function() {
	this.initialize();

	// main
	this.instance = new lib.Main();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(7.1,80.1,428.2,191.9);


// symbols:
(lib.computerpngcopy = function() {
	this.initialize();
	this.instance = new DOMObject({type:"IMAGE",image:img.computerpngcopy});
	this.addChild(this.instance);
}).prototype = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,143,119);


(lib.data_pack = function() {
	this.initialize(img.data_pack);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,230,40);


(lib.Emptypacket = function() {
	this.initialize(img.Emptypacket);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,46,12);


(lib.packetbg = function() {
	this.initialize(img.packetbg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,92,39);


(lib.packetbgjpgcopy = function() {
	this.initialize(img.packetbgjpgcopy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,92,39);


(lib.Server_file = function() {
	this.initialize();
	this.instance = new DOMObject({type:"IMAGE",image:img.Server_file});
	this.addChild(this.instance);
}).prototype = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,102,143);


(lib.Switch_workgroup = function() {
	this.initialize();
	this.instance = new DOMObject({type:"IMAGE",image:img.Switch_workgroup});
	this.addChild(this.instance);
}).prototype = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,165,79);


(lib.lazytext2 = function() {
	this.initialize();

	// ID_s2_txt03
	this.text= new DOMObject({type:"TEXT",compId:"ID_s2_txt03",width:"400.2",expand:"down",align:"left",class:"orangeCallOut"});	
	this.text.setTransform(20,255.8);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(8,255.8,425.2,16.2);


(lib.lazytext = function() {
	this.initialize();

	// ID_s3_txt03
	this.text = new DOMObject({type:"TEXT",compId:"ID_s3_txt03",width:"400.2",expand:"down",align:"left",class:"orangeCallOut"});	
	this.text.setTransform(20,255.8);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(8,255.8,425.2,16.2);


(lib.packet_box_empty = function() {
	this.initialize();

	// jpg
	this.instance = new lib.Emptypacket();
	this.instance.setTransform(1,-11.1,0.929,0.929);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(1,-11.1,42.8,11.2);


(lib.packet_3 = function() {
	this.initialize();

	// txt
	this.text= new DOMObject({type:"TEXT",compId:"ID_s3_txt04",width:"89.6",expand:"up+down",align:"center"});
	this.text.setTransform(-1,-26.8);

	// jpg
	this.instance = new lib.packetbg();
	this.instance.setTransform(-0.9,-37.9);

	this.addChild(this.instance,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.9,-37.9,94,39);


(lib.packet_2instance4 = function() {
	this.initialize();

	// txt
	this.text = new DOMObject({type:"TEXT",compId:"ID_s2_txt10",width:"89.6",expand:"up+down",align:"center"});
	this.text.setTransform(0,-26.8);

	// jpg
	this.instance = new lib.packetbg();
	this.instance.setTransform(-0.9,-37.9);

	this.addChild(this.instance,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.9,-37.9,92,39);


(lib.packet_2instance3 = function() {
	this.initialize();

	// txt
	this.text = new DOMObject({type:"TEXT",compId:"ID_s2_txt09",width:"89.6",expand:"up+down",align:"center"});
	this.text.setTransform(-0.1,-26.2);

	// jpg
	this.instance = new lib.packetbg();
	this.instance.setTransform(-0.9,-37.8);

	this.addChild(this.instance,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.9,-37.8,93,39);


(lib.packet_2instance2 = function() {
	this.initialize();

	// ID_s2_txt08
	this.text = new DOMObject({type:"TEXT",compId:"ID_s2_txt08",width:"89.6",expand:"up+down",align:"center"});	
	this.text.setTransform(-1,-54.4);

	// jpg
	this.instance = new lib.packetbg();
	this.instance.setTransform(-0.9,-37.9);

	this.addChild(this.instance,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.9,-54.4,107,55.5);


(lib.packet_2 = function() {
	this.initialize();

	// txt
	this.text = new DOMObject({type:"TEXT",compId:"ID_s2_txt08",width:"89.6",expand:"up+down",align:"center"});
	this.text.setTransform(-1,-54.4);

	// statictext
	this.text_1 = new DOMObject({type:"TEXT" , align:"center" ,text:"435869123", size:"11"});	
	this.text_1.setTransform(16.8,-17.3);

	this.text_2 = new DOMObject({type:"TEXT" , align:"center" ,text:"435869123", size:"11"});
	this.text_2.setTransform(16.8,-35);

	// jpg
	this.instance = new lib.packetbg();
	this.instance.setTransform(-0.9,-37.9);

	this.addChild(this.instance,this.text_2,this.text_1,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.9,-54.4,92,55.5);


(lib.move2 = function() {
	this.initialize();

	// Layer 1
	this.text = new DOMObject({type:"TEXT" , align:"center" ,text:"435869123", size:"11"});	
	this.text.setTransform(7.8,-15.6);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-15.6,65.5,15.7);


(lib.move1 = function() {
	this.initialize();

	// Layer 1
	this.text = new DOMObject({type:"TEXT" , align:"center" ,text:"435869123", size:"11"});	
	this.text.setTransform(7.8,-15.6);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-15.6,65.5,15.7);


(lib.data_pack_2 = function() {
	this.initialize();

	// ID_s3_txt08
	this.text = new DOMObject({type:"TEXT",compId:"ID_s3_txt08",width:"27.45",expand:"up+down",align:"center"});	
	this.text.setTransform(195,-27.4);

	// ID_s3_txt07
	this.text_1 = new DOMObject({type:"TEXT",compId:"ID_s3_txt07",width:"45.7",expand:"up+down",align:"center"});	
	this.text_1.setTransform(144,-27.4);

	// ID_s3_txt06
	this.text_2 = new DOMObject({type:"TEXT",compId:"ID_s3_txt06",width:"76.2",expand:"up+down",align:"center"});
	this.text_2.setTransform(72.5,-27.4);

	// ID_s3_txt05
	this.text_3 = new DOMObject({type:"TEXT",compId:"ID_s3_txt05",width:"76.2",expand:"up+down",align:"center"});
	this.text_3.setTransform(-3,-27.4);

	// bg
	this.instance = new lib.data_pack();
	this.instance.setTransform(-5.9,-38.9);

	this.addChild(this.instance,this.text_3,this.text_2,this.text_1,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.9,-38.9,230,54.6);


(lib.data_pack_1 = function() {
	this.initialize();

	// txt
	this.text = new DOMObject({type:"TEXT",compId:"ID_s2_txt07",width:"38.45",expand:"up+down",align:"center"});
	this.text.setTransform(193.6,-27.4,0.958,0.956);

	this.text_1 = new DOMObject({type:"TEXT",compId:"ID_s2_txt06",width:"36.7",expand:"up+down",align:"center"});
	this.text_1.setTransform(150,-27.4,0.958,0.956);

	this.text_2 = new DOMObject({type:"TEXT",compId:"ID_s2_txt05",width:"76.2",expand:"up+down",align:"center"});
	this.text_2.setTransform(77,-25.4,0.958,0.956);

	this.text_3 = new DOMObject({type:"TEXT",compId:"ID_s2_txt04",width:"76.2",expand:"up+down",align:"center"});
	this.text_3.setTransform(0,-25.4);

	// bg
	this.instance = new lib.data_pack();
	this.instance.setTransform(-0.9,-38.9);

	this.addChild(this.instance,this.text_3,this.text_2,this.text_1,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.9,-38.9,230,52.7);


(lib.Switchworkgroup = function() {
	this.initialize();

	// png
	this.instance = new lib.Switch_workgroup();
	this.instance.setTransform(10,-61.9,0.78,0.78);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-61.9,128.8,61.6);


(lib.Serverfile = function() {
	this.initialize();

	// png
	this.instance = new lib.Server_file();
	this.instance.setTransform(10,-86.3,0.623,0.622);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-86.3,63.5,89);


(lib.computer = function() {
	this.initialize();

	// png
	this.instance = new lib.computerpngcopy();
	this.instance.setTransform(10,-73.9,0.623,0.624);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-73.9,89.2,74.2);


(lib.animation02 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// icons
	this.instance = new lib.Serverfile();
	this.instance.setTransform(330,106.9,0.643,0.643,0,0,0,31.8,-44.7);

	this.instance_1 = new lib.computer();
	this.instance_1.setTransform(452.9,189.1,0.719,0.719,0,0,0,44.8,-36.8);

	this.instance_2 = new lib.computer();
	this.instance_2.setTransform(193,189.1,0.719,0.719,0,0,0,44.8,-36.8);

	this.instance_3 = new lib.Switchworkgroup();
	this.instance_3.setTransform(322.9,199,0.608,0.608,0,0,0,64.3,-30.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(430));

	// packet_3
	this.instance_4 = new lib.packet_3();
	this.instance_4.setTransform(325.4,191.1,0.474,0.474,0,0,0,45.1,-26.7);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(233).to({scaleX:1,scaleY:1,x:258.6,y:127.1,alpha:1},24).wait(52).to({scaleX:0.4,scaleY:0.4,x:325.2,y:196.1,alpha:0},26).wait(95));

	// cover
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AVZCRIAAkgIFeAAIAAEggA62CHIAAkMIFoAAIAAEMg");
	this.shape.setTransform(319,192.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},170).to({state:[]},248).wait(12));

	// packet_box
	this.instance_5 = new lib.packet_box_empty();
	this.instance_5.setTransform(450.4,191.8,1,1,0,0,0,22.3,-5.5);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(170).to({alpha:1},0).to({x:354.5},45).wait(135).to({x:190},64).to({alpha:0},3).wait(13));

	// text_box
	this.instance_6 = new lib.data_pack_2();
	this.instance_6.setTransform(447.9,204,0.32,0.211,0,0,0,114,-18.9);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({scaleX:1,scaleY:1,x:377,y:56.1,alpha:1},33).wait(83).to({regY:-18.6,scaleX:0.15,scaleY:0.1,x:450,y:184,alpha:0},36).wait(278));

	// lines
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(2,1,1,3,true).p("AyVEIISHAAIAApWAgOEIISkAAAgOFPIAAhH");
	this.shape_1.setTransform(329.5,165.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).wait(430));

	// lazy text
	this.instance_7 = new lib.lazytext();
	this.instance_7.setTransform(57.9,6.8,1,1,0,0,0,6.8,6.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7}]}).wait(430));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(59.1,80.1,425.7,191.9);


(lib.animation01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text_box
	this.instance = new lib.data_pack_1();
	this.instance.setTransform(139,191.9,0.32,0.211,0,0,0,114,-18.9);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,x:124,y:128.1,alpha:1},29).wait(74).to({scaleX:0.32,scaleY:0.21,x:139,y:191.9,alpha:0},24).wait(527));

	// icons
	this.instance_1 = new lib.Serverfile();
	this.instance_1.setTransform(278,106.9,0.643,0.643,0,0,0,31.8,-44.7);

	this.instance_2 = new lib.computer();
	this.instance_2.setTransform(400.9,189.1,0.719,0.719,0,0,0,44.8,-36.8);

	this.instance_3 = new lib.computer();
	this.instance_3.setTransform(141,189.1,0.719,0.719,0,0,0,44.8,-36.8);

	this.instance_4 = new lib.Switchworkgroup();
	this.instance_4.setTransform(270.9,199,0.608,0.608,0,0,0,64.3,-30.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(654));

	// textmovement-
	this.instance_5 = new lib.move2();
	this.instance_5.setTransform(347.3,135.4,1,1,0,0,0,32.8,-7.8);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(295).to({y:144.4,alpha:1},0).to({y:135.4},20).wait(1).to({alpha:0},0).wait(338));

	// textmovement-
	this.instance_6 = new lib.move1();
	this.instance_6.setTransform(347.3,126.7,1,1,0,0,0,32.8,-7.8);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(295).to({alpha:1},0).to({y:135.4},20).wait(40).wait(1).to({alpha:0},0).wait(298));

	// packet_2
	this.instance_7 = new lib.packet_2();
	this.instance_7.setTransform(289.1,194.6,0.405,0.405,0,0,0,45,-26.7);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(184).to({regX:45.1,scaleX:1,scaleY:1,x:348.6,y:127.1,alpha:1},22).wait(89).to({alpha:0},0).wait(359));

	// packet_2 instance_2
	this.instance_8 = new lib.packet_2instance2();
	this.instance_8.setTransform(348.6,127.1,1,1,0,0,0,45.1,-26.7);
	this.instance_8.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(295).to({alpha:1},0).wait(61).to({alpha:0},0).wait(298));

	// packet_2 instance3
	this.instance_9 = new lib.packet_2instance3();
	this.instance_9.setTransform(348.6,127.1,1,1,0,0,0,45.1,-26.7);
	this.instance_9.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(356).to({alpha:1},0).wait(57).to({alpha:0},23).wait(218));

	// packet_2 nstance4
	this.instance_10 = new lib.packet_2instance4();
	this.instance_10.setTransform(268.4,194.1,0.474,0.474,0,0,0,45.1,-26.7);
	this.instance_10.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(458).to({scaleX:1,scaleY:1,x:348.6,y:127.1,alpha:1},28).wait(65).to({alpha:0},20).wait(83));

	// packet_box
	this.instance_11 = new lib.packet_box_empty();
	this.instance_11.setTransform(140,191.8,1,1,0,0,0,22.3,-5.5);
	this.instance_11.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(127).to({alpha:1},0).to({x:275.7},55).wait(1).to({alpha:0},0).wait(406).to({x:280.7,alpha:1},0).to({x:394.4},54).to({x:400.7,alpha:0},2).wait(9));

	// lines
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1,3,true).p("AyVEIISHAAIAApWAgOFPIAAhHISkAA");
	this.shape.setTransform(277.5,165.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).wait(654));

	// lazytext
	this.instance_12 = new lib.lazytext2();
	this.instance_12.setTransform(5.5,5.5,1,1,0,0,0,5.5,5.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12}]}).wait(654));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(8,80.1,425.2,191.9);


(lib.slide_2 = function() {
	this.initialize();

	// animation 2
	this.anim02 = new lib.animation02();
	this.anim02.setTransform(-51.9,0);

	this.addChild(this.anim02);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(7.1,80.1,425.7,191.9);


(lib.slide_1 = function() {
	this.initialize();

	// animation 1
	this.anim01 = new lib.animation01();

	this.addChild(this.anim01);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(8,80.1,425.2,191.9);


(lib.Main = function() {
	this.initialize();

	// slide2
	this.slide02 = new lib.slide_2();
	this.slide02.setTransform(202.5,126.5,1,1,0,0,0,202.5,126.5);

	// slide1
	this.slide01 = new lib.slide_1();
	this.slide01.setTransform(202.5,126.5,1,1,0,0,0,202.5,126.5);

	this.addChild(this.slide01,this.slide02);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(7.1,80.1,426.2,191.9);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;