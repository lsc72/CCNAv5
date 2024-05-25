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
(lib._4111_A = function() {
	this.initialize(img._4111_A);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,470,400);


(lib.envelope_closed_static = function() {
	this.initialize();
	this.instance = new DOMObject({type:"IMAGE",image:img.envelope_closed_static});
    this.addChild(this.instance);
}).prototype = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,123,79);


(lib.Not_Allowed = function() {
	this.initialize(img.Not_Allowed);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);


(lib.ID_s1_txt07 = function() {
	this.initialize();

	// ID_s1_txt07
	this.text = new TextBoxComp({bodyId:"ID_s1_txt07",width:175,height:103,divId:"textBoxDiv_3"});
	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,125,16.2);


(lib.ID_s1_txt06 = function() {
	this.initialize();

	// ID_s1_txt06
	this.text = new TextBoxComp({bodyId:"ID_s1_txt06",width:175,height:103,divId:"textBoxDiv_2"});
	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,125,16.2);


(lib.ID_s1_txt05 = function() {
	this.initialize();

	// ID_s1_txt05
	this.text = new TextBoxComp({bodyId:"ID_s1_txt05",width:175,height:103,divId:"textBoxDiv_1"});
	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,125,16.2);


(lib.ID_s1_txt04 = function() {
	this.initialize();

	// ID_s1_txt04
	this.text = new TextBoxComp({bodyId:"ID_s1_txt04",width:175,height:103,divId:"textBoxDiv_0"});
	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,125,16.2);


(lib.ID_s1_txt03 = function() {
	this.initialize();

	// ID_s1_txt03
	this.text = new DOMObject({type:"TEXT",compId:"ID_s1_txt03",width:"80",expand:"up",align:"left",color:"#652C8A",bold:"1"});
	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,104,16.2);


(lib.ID_s1_txt02 = function() {
	this.initialize();

	// ID_s1_txt02
	this.text = new DOMObject({type:"TEXT",compId:"ID_s1_txt02",width:"80",expand:"up+down",align:"right",color:"#652C8A",bold:"1"});
	

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,73,16.2);


(lib.ID_s1_txt01 = function() {
	this.initialize();

	// ID_s1_txt01
	this.text = new DOMObject({type:"TEXT",compId:"ID_s1_txt01",width:"104",expand:"up",align:"left",color:"#652C8A",bold:"1"});
	

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,60,30.4);


(lib.NotAllowed = function() {
	this.initialize();

	// png
	this.instance = new lib.Not_Allowed();
	this.instance.setTransform(-24.9,-24.9,0.5,0.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-24.9,-24.9,50,50);


(lib.envelopeclosedstatic = function() {
	this.initialize();

	// png
	this.instance = new lib.envelope_closed_static();
	this.instance.setTransform(-30.5,-26.1,0.663,0.663);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-39.5,-26.1,81.6,52.4);


(lib.Anim = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// not allowed
	this.instance = new lib.NotAllowed();
	this.instance.setTransform(219.3,121.8);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(305).to({alpha:1},0).wait(463).to({alpha:0},0).wait(285));

	// broadcast
	this.instance_1 = new lib.envelopeclosedstatic();
	this.instance_1.setTransform(40.1,291.6,0.468,0.468,0,0,0,1.4,0.1);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(24).to({alpha:1},0).to({x:157.7,y:178.8},34).to({x:268.4,y:72.7},32).to({x:401.4},32).to({alpha:0},13).wait(14).to({alpha:1},13).to({x:268.4},33).to({x:40.1,y:291.6},66).to({alpha:0},15).wait(64).to({alpha:1},11).to({x:158.9,y:176.6},42).to({x:158.8,y:176.5},1).wait(25).to({x:157.2,y:175.1},0).to({x:46.5,y:74.7},67).to({x:401.5,y:72.7},65).to({alpha:0},11).wait(10).to({alpha:1},12).to({x:46.5,y:74.7},71).to({x:158.9,y:176.6},51).to({x:40.1,y:291.6},50).to({alpha:0},12).to({alpha:1},11).to({x:161.2,y:175.5},35).to({x:163.5,y:173.3},1).wait(25).to({x:164.6,y:172.2},0).to({x:268.4,y:72.7},31).to({x:400.4},31).to({alpha:0},11).wait(7).to({alpha:1},11).to({x:268.4},30).to({x:40.1,y:291.6},82).to({alpha:0},9).wait(1));
// embedded text
	this.text = new DOMObject({type:"TEXT",text:"172.17.10.27",size:"11"});
	this.text.setTransform(363.8,95.1);

	this.text_1 = new DOMObject({type:"TEXT",text:"F0/1",size:"11",align:"center"});
	this.text_1.setTransform(188.1,149.8);
	this.text_1.shadow = new cjs.Shadow("rgba(255,255,255,1)",0,0,5);

	this.text_2 = new DOMObject({type:"TEXT",text:"F0/2",size:"11",align:"center"});
	this.text_2.setTransform(102.5,151.9);
	this.text_2.shadow = new cjs.Shadow("rgba(255,255,255,1)",0,0,5);

	this.text_3= new DOMObject({type:"TEXT",text:"F0/2",size:"11",align:"center"});	
	this.text_3.setTransform(31.7,90.3);

	this.text_4 = new DOMObject({type:"TEXT",text:"F0/1",size:"11",align:"center"});
	this.text_4.setTransform(255.8,91.2);

	this.text_5 = new DOMObject({type:"TEXT",text:"F0/1",size:"11",align:"center"});
	this.text_5.setTransform(70.5,75.8);

	this.text_6= new DOMObject({type:"TEXT",text:"F0/2",size:"11",align:"center"});		
	this.text_6.setTransform(220.1,75);

	this.text_7= new DOMObject({type:"TEXT",text:"F0/3",size:"11",align:"center"});		
	this.text_7.setTransform(292.9,74);

	this.text_8 = new DOMObject({type:"TEXT",text:"172.17.10.22",size:"11"});	
	this.text_8.setTransform(126,315.1);

	this.text_9= new DOMObject({type:"TEXT",text:"F0/11",size:"11",align:"center"});		
	this.text_9.setTransform(100.4,187);

	this.text_10= new DOMObject({type:"TEXT",text:"F0/18",size:"11",align:"center"});
	this.text_10.setTransform(144,192.4);
	this.text_10.shadow = new cjs.Shadow("rgba(255,255,255,1)",0,0,5);

	this.text_11 = new DOMObject({type:"TEXT",text:"172.17.10.21",size:"11"});
	this.text_11.setTransform(7.1,315.1);

	this.text_12= new DOMObject({type:"TEXT",text:"F0/6",size:"11",align:"center"});
	this.text_12.textAlign = "center";
	this.text_12.lineHeight = 13;
	this.text_12.setTransform(188.8,187);

	this.text_13 = new DOMObject({type:"TEXT",text:"172.17.10.23",size:"11"});	
	this.text_13.setTransform(239.8,315.1);
	
	
		this.shape = new cjs.Shape();
	this.shape.graphics.f("#ffffff").s().p("AAPAqIgdAAIAAhTIAdAAIAABT").cp();
	this.shape.setTransform(159,199,1,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).wait(1053));

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_13},{t:this.text_12},{t:this.text_11},{t:this.text_10},{t:this.text_9},{t:this.text_8},{t:this.text_7},{t:this.text_6},{t:this.text_5},{t:this.text_4},{t:this.text_3},{t:this.text_2},{t:this.text_1},{t:this.text}]}).wait(1053));

	// ID_s1_txt07
	this.instance_2 = new lib.ID_s1_txt07();
	this.instance_2.setTransform(341,190,1,1,0,0,0,91,51.5);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(814).to({alpha:1},0).wait(239));

	// ID_s1_txt06
	this.instance_3 = new lib.ID_s1_txt06();
	this.instance_3.setTransform(341,190,1,1,0,0,0,91,51.5);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(394).to({alpha:1},0).wait(420).to({alpha:0},0).wait(239));

	// ID_s1_txt05
	this.instance_4 = new lib.ID_s1_txt05();
	this.instance_4.setTransform(341,190,1,1,0,0,0,91,51.5);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(305).to({alpha:1},0).wait(89).to({alpha:0},0).wait(659));

	// ID_s1_txt04
	this.instance_5 = new lib.ID_s1_txt04();
	this.instance_5.setTransform(341,190,1,1,0,0,0,91,51.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(305).to({alpha:0},0).wait(748));

	// ID_s1_txt03
	this.instance_6 = new lib.ID_s1_txt03();
	this.instance_6.setTransform(190,59.6,1,1,0,0,0,52,8.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6}]}).wait(1053));

	// ID_s1_txt02
	this.instance_7 = new lib.ID_s1_txt02();
	this.instance_7.setTransform(50,133.5,1,1,0,0,0,36.5,8.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7}]}).wait(1053));

	// ID_s1_txt01
	this.instance_8 = new lib.ID_s1_txt01();
	this.instance_8.setTransform(257.3,133.5,1,1,0,0,0,36.5,8.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8}]}).wait(1053));

	// bg
	this.instance_9 = new lib._4111_A();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9}]}).wait(1053));


}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,470,400);


(lib.slide_1 = function() {
	this.initialize();

	// animation
	this.anim01 = new lib.Anim();
	this.anim01.setTransform(34.1,209.6,1,1,0,0,0,34.1,209.6);

	this.addChild(this.anim01);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,470,400);


(lib.Main = function() {
	this.initialize();

	// slide1
	this.slide01 = new lib.slide_1();
	this.slide01.setTransform(202.5,126.5,1,1,0,0,0,202.5,126.5);

	this.addChild(this.slide01);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,470,400);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;