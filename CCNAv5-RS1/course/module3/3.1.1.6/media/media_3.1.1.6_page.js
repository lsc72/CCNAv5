function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}
loadScript("../../../common/scripts/swfobject.js", registerSWF);

(slide1 = function(slideContainer){
//var slide01 = new slide_1();
	
	var p; // shortcut to reference prototypes
		
	(bubble4 = function() {
		this.initialize();
	
		// ID_s1_txt04
		this.text = new DOMObject({ type:"BUBBLE", compId:"ID_s1_txt04", width:"137.95",height:"80", align:"left", tailPosition:"6"}); 
		this.text.setTransform(-0.9,0.2);
	
		this.addChild(this.text);
	}).prototype = p = new createjs.Container();
	p.nominalBounds = new createjs.Rectangle(-0.9,0.2,139,30.4);
	
	
	(bubble3 = function() {
		this.initialize();
	
		// ID_s1_txt03
		this.text = new DOMObject({ type:"BUBBLE", compId:"ID_s1_txt03", width:"137.95",height:"80", align:"left", tailPosition:"6"}); 
		this.text.setTransform(-56.9,0.2);
	
		this.addChild(this.text);
	}).prototype = p = new createjs.Container();
	p.nominalBounds = new createjs.Rectangle(-56.9,0.2,139,30.4);
	
	
	(bubble2 = function() {
		this.initialize();
	
		// ID_s1_txt02
		this.text = new DOMObject({ type:"BUBBLE", compId:"ID_s1_txt02", width:"137.95",height:"80", align:"left", tailPosition:"6"}); 
		this.text.setTransform(-0.9,0.2);
	
		this.addChild(this.text);
	}).prototype = p = new createjs.Container();
	p.nominalBounds = new createjs.Rectangle(-0.9,0.2,139,30.4);
	
	
	(bubble1 = function() {
		this.initialize();
	
		// ID_s1_txt01
		this.text = new DOMObject({ type:"BUBBLE", compId:"ID_s1_txt01", width:"137.95",height:"80", align:"left", tailPosition:"6"}); 
		this.text.setTransform(-55.9,0.2);
	
		this.addChild(this.text);
	}).prototype = p = new createjs.Container();
	p.nominalBounds = new createjs.Rectangle(-55.9,0.2,139,30.4);
	
	
	(anim1 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// bubble4
		this.instance = new bubble4();
		this.instance.setTransform(305.4,84.4,1,1,0,0,0,40,40);
		this.instance.alpha = 0;
	
		this.timeline.addTween(createjs.Tween.get(this.instance).wait(85).to({alpha:1},0).wait(65));
	
		// bubble3
		this.instance_1 = new bubble3();
		this.instance_1.setTransform(121.4,87.4,1,1,0,0,0,40,40);
		this.instance_1.alpha = 0;
	
		this.timeline.addTween(createjs.Tween.get(this.instance_1).wait(85).to({alpha:1},0).wait(65));
	
		// bubble2
		this.instance_2 = new bubble2();
		this.instance_2.setTransform(305.4,84.4,1,1,0,0,0,40,40);
		this.instance_2.alpha = 0;
	
		this.timeline.addTween(createjs.Tween.get(this.instance_2).wait(15).to({alpha:1},0).wait(47).wait(1).to({alpha:0},0).wait(87));
	
		// bubble1
		this.instance_3 = new bubble1();
		this.instance_3.setTransform(121.4,87.4,1,1,0,0,0,40,40);
		this.instance_3.alpha = 0;
	
		this.timeline.addTween(createjs.Tween.get(this.instance_3).wait(15).to({alpha:1},0).wait(47).wait(1).to({alpha:0},0).wait(87));
	
	}).prototype = p = new createjs.MovieClip();
	p.nominalBounds = new createjs.Rectangle(25.4,33.5,395,41.4);
	
	
	(slide_1 = function() {
		this.initialize();
	
		// anim01
		this.anim01 = new anim1();
		this.anim01.setTransform(15.5,10,1,1,0,0,0,15.5,10);
	
		this.addChild(this.anim01);
	}).prototype = p = new createjs.Container();
	p.nominalBounds = new createjs.Rectangle(25.4,33.5,395,41.4);


	slideContainer.addChild(new slide_1());
	
});

(slide2 = function(slideContainer){
	var p; // shortcut to reference prototypes
	(s2_bubble2 = function() {
		this.initialize();
	
		// ID_s1_txt03
		this.text = new DOMObject({ type:"BUBBLE", compId:"ID_s2_txt02", width:"137.95", height:"80", align:"left", tailPosition:"6"}); 
		this.text.setTransform(0,0.2);
	
		this.addChild(this.text);
	}).prototype = p = new createjs.Container();
	p.nominalBounds = new createjs.Rectangle(0,0.2,139,30.4);
	
	
	(s2_bubble1 = function() {
		this.initialize();
	
		// ID_s1_txt01
		this.text = new DOMObject({ type:"BUBBLE", compId:"ID_s2_txt01", width:"137.95", height:"80", align:"left", tailPosition:"6"}); 
		this.text.setTransform(-56.9,0.2);
	
		this.addChild(this.text);
	}).prototype = p = new createjs.Container();
	p.nominalBounds = new createjs.Rectangle(-56.9,0.2,139,30.4);
	
	(anim_2 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// bubble2
		this.instance = new s2_bubble2();
		this.instance.setTransform(305.4,87.4,1,1,0,0,0,40,40);
		this.instance.alpha = 0;
	
		this.timeline.addTween(createjs.Tween.get(this.instance).wait(143).to({alpha:1},0).wait(45).to({alpha:0},0).wait(8));
	
		// bubble1
		this.instance_1 = new s2_bubble1();
		this.instance_1.setTransform(121.4,87.4,1,1,0,0,0,40,40);
		this.instance_1.alpha = 0;
	
		this.timeline.addTween(createjs.Tween.get(this.instance_1).wait(15).to({alpha:1},0).wait(23).to({alpha:0},0).wait(14).to({alpha:1},0).wait(34).to({alpha:0},0).wait(14).to({alpha:1},0).wait(28).to({alpha:0},0).wait(68));
	
	}).prototype = p = new createjs.MovieClip();
	p.nominalBounds = new createjs.Rectangle(25.4,33.5,396,41.4);
		
	(slide_2 = function() {
		this.initialize();
	
		// anim_2
		this.anim02 = new anim_2();
		this.anim02.setTransform(10.5,7,1,1,0,0,0,10.5,7);
	
		this.addChild(this.anim02);
	}).prototype = p = new createjs.Container();
	p.nominalBounds = new createjs.Rectangle(25.4,33.5,396,41.4);
	
	slideContainer.addChild(new slide_2());
});

(slide3 = function(slideContainer){
	var p; // shortcut to reference prototypes
	// symbols:
	(s3_bubble3 = function() {
		this.initialize();
	
		// ID_s3_txt02
		this.text = new DOMObject({ type:"BUBBLE", compId:"ID_s3_txt02", width:"137.95", height:"80", align:"left", tailPosition:"6"}); 
		this.text.setTransform(-56.9,0.2);
	
		this.addChild(this.text);
	}).prototype = p = new createjs.Container();
	p.nominalBounds = new createjs.Rectangle(-56.9,0.2,139,30.4);
	
	
	(s3_bubble1 = function() {
		this.initialize();
	
		// ID_s3_txt01
		this.text = new DOMObject({ type:"BUBBLE", compId:"ID_s3_txt01", width:"137.95", height:"80", align:"left", tailPosition:"6"}); 
		this.text.setTransform(-56.9,0.2);
	
		this.addChild(this.text);
	}).prototype = p = new createjs.Container();
	p.nominalBounds = new createjs.Rectangle(-56.9,0.2,139,30.4);
		
	(anim_3 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// bubbletext2
		this.instance = new s3_bubble3();
		this.instance.setTransform(121.4,87.4,1,1,0,0,0,40,40);
		this.instance.alpha = 0;
	
		this.timeline.addTween(createjs.Tween.get(this.instance).wait(82).to({alpha:1},0).wait(30));
	
		// bubbletext1
		this.instance_1 = new s3_bubble1();
		this.instance_1.setTransform(121.4,87.4,1,1,0,0,0,40,40);
		this.instance_1.alpha = 0;
	
		this.timeline.addTween(createjs.Tween.get(this.instance_1).wait(15).to({alpha:1},0).wait(30).to({alpha:0},0).wait(67));
	
	}).prototype = p = new createjs.MovieClip();
	p.nominalBounds = new createjs.Rectangle(25.4,33.5,195,30.4);
		
	(slide_3 = function() {
		this.initialize();
	
		// anim03
		this.anim03 = new anim_3();
		this.anim03.setTransform(11.5,8.5,1,1,0,0,0,11.5,8.5);
	
		this.addChild(this.anim03);
	}).prototype = p = new createjs.Container();
	p.nominalBounds = new createjs.Rectangle(25.4,33.5,195,30.4);
	
	slideContainer.addChild(new slide_3());
});

(slideViewDidLoad = function(slideContainer,id){	
	var slideCont ;
	if(id == 1)
	{	
		$("#commonMediaText").append('<div id="animationContent"></div>');
		slideCont = slideContainer;
		loadImages([{src:"../../../common/scripts/templates_ext_dev.js", id:"ext"}],function(){					
			slide1(slideCont);
		});
	}
	else if(id == 2)
	{	
		slideCont = slideContainer;
		loadImages([{src:"../../../common/scripts/templates_ext_dev.js", id:"ext"}],function(){			
			slide2(slideCont);
		});
	}
	else if(id == 3)
	{	
		slideCont = slideContainer;
		loadImages([{src:"../../../common/scripts/templates_ext_dev.js", id:"ext"}],function(){			
			slide3(slideCont);
		});
	}	
});

