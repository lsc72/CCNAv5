(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.classesmediaMediaObject = function() {
	this.initialize();

	// main
	this.instance = new lib.Main();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,-0.9,470,400);


// symbols:
(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,653,556);


(lib.CiscoWebpage1copy = function() {
	this.initialize();
	this.instance = new DOMObject({type:"IMAGE",image:img.CiscoWebpage1copy});
	this.addChild(this.instance);
}).prototype = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,214,137);


(lib.Tween1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ASssYIAAYxMglXAAAIAA4xMAlXAAA").cp();
	this.shape.setTransform(0.5,0);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-119.1,-79.3,238.3,158.8);


(lib.ID_txt21 = function() {
	this.initialize();

	// Layer 1
	this.text = new DOMObject({type:"TEXT" , align:"center" ,compId:"ID_txt21", width:"70",  size:"11", expand:"up+down"});  
	this.text.setTransform(-12,24);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,41.4,15.2);


(lib.ID_txt20 = function() {
	this.initialize();

 
	// Layer 1
	this.text_1 = new DOMObject({type:"TEXT" , align:"center" ,compId:"ID_txt20", width:"30",  size:"11", expand:"up+down"});  

	this.text_1.setTransform(3,-17);

	this.addChild(this.text_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,41.4,15.2);


(lib.ID_txt19 = function() {
	this.initialize();

	// Layer 1
	this.text_2 = new DOMObject({type:"TEXT" , align:"center" ,compId:"ID_txt19", width:"23",  size:"11", expand:"up+down"});  
	this.text_2.setTransform(1,35);

	this.addChild(this.text_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,41.4,15.2);


(lib.ID_txt18 = function() {
	this.initialize();

	// Layer 1
	this.text_3 = new DOMObject({type:"TEXT" , align:"center" ,compId:"ID_txt18", width:"23",  size:"11", expand:"up+down"});  



	this.text_3.setTransform(12,-1);

	this.addChild(this.text_3);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,41.4,15.2);


(lib.boxTitleMc = function() {
	this.initialize();

	// Layer 1
	this.text_4 = new DOMObject({type:"TEXT" , align:"center" ,compId:"ID_txt03", width:"55",  size:"11", expand:"up+down"});
	this.text_4.setTransform(122.5,28.7);

	this.text_5 = new DOMObject({type:"TEXT" , align:"center" ,compId:"ID_txt05", width:"39",  size:"11", expand:"up+down"}); 
	this.text_5.setTransform(53,28.7);

	this.text_6 = new DOMObject({type:"TEXT" , align:"center" ,compId:"ID_txt04", width:"22",  size:"11", expand:"up+down"}); 
	this.text_6.setTransform(93,28.7);

	this.text_7 = new DOMObject({type:"TEXT" , align:"center" ,compId:"ID_txt06", width:"81",  size:"11", expand:"up+down"}); 
	this.text_7.setTransform(-21,28.7);

	this.text_8 = new DOMObject({type:"TEXT" , align:"center" ,compId:"ID_txt02", width:"232",  size:"11", expand:"up+down",bold:"1"}); 
	this.text_8.setTransform(-37,-2);

	this.text_9 = new DOMObject({type:"TEXT" , align:"right" ,compId:"ID_txt07ab", width:"47",  size:"11", expand:"up"}); 
	this.text_9.setTransform(127,62);

	this.text_10 = new DOMObject({type:"TEXT" , align:"right" ,compId:"ID_txt08", width:"88",  size:"11", expand:"left"});
 	this.text_10.setTransform(85,87);

	this.text_11 = new DOMObject({type:"TEXT" , align:"right" ,compId:"ID_txt09", width:"110",  size:"11", expand:"left"}); 
	this.text_11.setTransform(62,109);

	this.text_12 = new DOMObject({type:"TEXT" , align:"right" ,compId:"ID_txt10", width:"191",  size:"11", expand:"left"});
	this.text_12.setTransform(-18,129.5);
	
	this.addChild(this.text_12,this.text_11,this.text_10,this.text_9,this.text_8,this.text_7,this.text_6,this.text_5,this.text_4);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,192.8,142.8);


(lib.wireText = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ak/gqIAABUIgLAAIAAhBQgEADgGAEQgGADgFACIAAgKQAJgEAHgGQAGgGADgFIAHAAAkRgQQgHADgFACIAAgKQAKgEAGgGQAGgGADgFIAHAAIAABUIgKAAIAAhBQgEADgGAEIAAAAAjPgQQgGADgFACIAAgKQAJgEAGgGQAHgGADgFIAHAAIAABUIgLAAIAAhBQgDADgHAEIAAAAAiTglQAGgFAKAAQAHAAAFACQAFADADAFQAEAGACAHQACAIAAALQAAAPgDAJQgDAJgHAFQgGAFgJAAQgNAAgHgJQgIgKAAgYQAAgOADgJQADgJAGgFIAAAAAiDgiQgIAAgEAGQgFAIAAAUQAAAVAFAHQAEAHAIAAQAHAAAFgHQAFgIAAgUQAAgUgFgHQgFgHgHAAIAAAAAhVgVQAJgEAHgGQAGgGADgFIAHAAIAABUIgLAAIAAhBQgDADgHAEQgGADgFACIAAgKAgHgQQgHADgEACIAAgKQAJgEAGgGQAFgGADgFIAGAAIAABUIgKAAIAAhBQgCADgGAEIAAAAAAzglQAGgFAJAAQAHAAAFACQAGADADAFQADAGACAHQACAIAAALQAAAPgDAJQgDAJgGAFQgGAFgKAAQgMAAgHgJQgJgKAAgYQAAgOADgJQAEgJAGgFIAAAAAA3gcQgGAIAAAUQAAAVAFAHQAFAHAHAAQAIAAAEgHQAFgIAAgUQAAgUgFgHQgEgHgIAAQgHAAgEAGIAAAAAB8gQQgGADgFACIAAgKQAJgEAGgGQAHgGADgFIAGAAIAABUIgKAAIAAhBQgEADgGAEIAAAAAC8gcQgGAIAAAUQAAAVAFAHQAFAHAHAAQAIAAAEgHQAFgIAAgUQAAgUgFgHQgEgHgIAAQgHAAgEAGIAAAAADcggQADAGACAHQACAIAAALQAAAPgDAJQgDAJgGAFQgGAFgKAAQgMAAgHgJQgJgKAAgYQAAgOADgJQAEgJAGgFQAGgFAJAAQAHAAAFACQAGADADAFIAAAAAEPgqIAGAAIAABUIgKAAIAAhBQgEADgGAEQgGADgFACIAAgKQAJgEAGgGQAHgGADgFIAAAAAFYgoQAGADADAFQADAGACAHQACAIAAALQAAAPgDAJQgDAJgGAFQgGAFgKAAQgMAAgHgJQgJgKAAgYQAAgOADgJQAEgJAGgFQAGgFAJAAQAHAAAFACIAAAAAFMgiQgHAAgEAGQgGAIAAAUQAAAVAFAHQAFAHAHAAQAIAAAEgHQAFgIAAgUQAAgUgFgHQgEgHgIAAIAAAAAF/glQAGgFAKAAQAHAAAFACQAFADADAFQAEAGACAHQACAIAAALQAAAPgDAJQgDAJgHAFQgGAFgJAAQgNAAgHgJQgIgKAAgYQAAgOADgJQADgJAGgFIAAAAAGPgiQgIAAgEAGQgFAIAAAUQAAAVAFAHQAEAHAIAAQAHAAAFgHQAFgIAAgUQAAgUgFgHQgFgHgHAAIAAAAAG9gLIAAgKQAJgEAHgGQAGgGADgFIAHAAIAABUIgLAAIAAhBQgDADgHAEQgGADgFACIAAAAAIEglQAGgFAKAAQAHAAAFACQAFADADAFQAEAGACAHQACAIAAALQAAAPgDAJQgDAJgHAFQgGAFgJAAQgNAAgHgJQgIgKAAgYQAAgOADgJQADgJAGgFIAAAAAIUgiQgIAAgEAGQgFAIAAAUQAAAVAFAHQAEAHAIAAQAHAAAFgHQAFgIAAgUQAAgUgFgHQgFgHgHAAIAAAAAJWgqQAHAAAFACQAGADADAFQADAGACAHQACAIAAALQAAAPgDAJQgDAJgGAFQgGAFgKAAQgMAAgHgJQgJgKAAgYQAAgOADgJQAEgJAGgFQAGgFAJAAIAAAAAJWgiQgHAAgEAGQgGAIAAAUQAAAVAFAHQAFAHAHAAQAIAAAEgHQAFgIAAgUQAAgUgFgHQgEgHgIAAIAAAAAKFgVQAJgEAGgGQAHgGADgFIAGAAIAABUIgKAAIAAhBQgEADgGAEQgGADgFACIAAgKAMKgVQAJgEAGgGQAHgGADgFIAGAAIAABUIgKAAIAAhBQgEADgGAEQgGADgFACIAAgKALMglQAGgFAJAAQAHAAAFACQAGADADAFQADAGACAHQACAIAAALQAAAPgDAJQgDAJgGAFQgGAFgKAAQgMAAgHgJQgJgKAAgYQAAgOADgJQAEgJAGgFIAAAAALbgiQgHAAgEAGQgGAIAAAUQAAAVAFAHQAFAHAHAAQAIAAAEgHQAFgIAAgUQAAgUgFgHQgEgHgIAAIAAAAANRglQAGgFAJAAQAHAAAFACQAGADADAFQADAGACAHQACAIAAALQAAAPgDAJQgDAJgGAFQgGAFgKAAQgMAAgHgJQgJgKAAgYQAAgOADgJQAEgJAGgFIAAAAANggiQgHAAgEAGQgGAIAAAUQAAAVAFAHQAFAHAHAAQAIAAAEgHQAFgIAAgUQAAgUgFgHQgEgHgIAAIAAAAAOagQQgGADgFACIAAgKQAJgEAGgGQAHgGADgFIAGAAIAABUIgKAAIAAhBQgEADgGAEIAAAAAPlgqQAHAAAFACQAGADADAFQADAGACAHQACAIAAALQAAAPgDAJQgDAJgGAFQgGAFgKAAQgMAAgHgJQgJgKAAgYQAAgOADgJQAEgJAGgFQAGgFAJAAIAAAAAPlgiQgHAAgEAGQgGAIAAAUQAAAVAFAHQAFAHAHAAQAIAAAEgHQAFgIAAgUQAAgUgFgHQgEgHgIAAIAAAAAQUgVQAJgEAGgGQAHgGADgFIAGAAIAABUIgKAAIAAhBQgEADgGAEQgGADgFACIAAgKARhgQQgGADgFACIAAgKQAJgEAHgGQAGgGADgFIAHAAIAABUIgLAAIAAhBQgDADgHAEIAAAAASdglQAGgFAKAAQAHAAAFACQAFADADAFQAEAGACAHQACAIAAALQAAAPgDAJQgDAJgHAFQgGAFgJAAQgNAAgHgJQgIgKAAgYQAAgOADgJQADgJAGgFIAAAAAStgiQgIAAgEAGQgFAIAAAUQAAAVAFAHQAEAHAIAAQAHAAAFgHQAFgIAAgUQAAgUgFgHQgFgHgHAAIAAAAATrgfQAGgGADgFIAHAAIAABUIgLAAIAAhBQgDADgHAEQgGADgFACIAAgKQAJgEAHgGIAAAAAUpgQQgGADgFACIAAgKQAIgEAHgGQAHgGADgFIAGAAIAABUIgKAAIAAhBQgEADgGAEIAAAAAVlglQAGgFAJAAQAHAAAFACQAFADAEAFQADAGACAHQACAIAAALQAAAPgDAJQgDAJgGAFQgGAFgKAAQgNAAgGgJQgJgKAAgYQAAgOADgJQAEgJAGgFIAAAAAV0giQgIAAgDAGQgGAIAAAUQAAAVAFAHQAEAHAIAAQAHAAAFgHQAFgIAAgUQAAgUgFgHQgFgHgHAAIAAAAA1FgVQAJgEAHgGQAGgGADgFIAHAAIAABUIgKAAIAAhBQgEADgGAEQgHADgFACIAAgKA2DglQAGgFAKAAQAHAAAFACQAGADACAFQAEAGACAHQACAIAAALQAAAPgDAJQgDAJgHAFQgGAFgJAAQgMAAgIgJQgIgKAAgYQAAgOADgJQADgJAGgFIAAAAA1zgiQgHAAgFAGQgFAIAAAUQAAAVAFAHQAFAHAHAAQAIAAAEgHQAFgIAAgUQAAgUgFgHQgEgHgIAAIAAAAAz6gcQgFAIAAAUQAAAVAFAHQAEAHAIAAQAHAAAFgHQAFgIAAgUQAAgUgFgHQgFgHgHAAQgIAAgEAGIAAAAAz+glQAGgFAKAAQAHAAAFACQAFADADAFQAEAGACAHQACAIAAALQAAAPgDAJQgDAJgHAFQgGAFgJAAQgNAAgHgJQgIgKAAgYQAAgOADgJQADgJAGgFIAAAAAx5glQAGgFAKAAQAHAAAFACQAFADADAFQAEAGACAHQACAIAAALQAAAPgDAJQgDAJgHAFQgGAFgJAAQgNAAgHgJQgIgKAAgYQAAgOADgJQADgJAGgFIAAAAAyggqIAABUIgLAAIAAhBQgDADgHAEQgGADgFACIAAgKQAJgEAHgGQAGgGADgFIAHAAAxpgiQgIAAgEAGQgFAIAAAUQAAAVAFAHQAEAHAIAAQAHAAAFgHQAFgIAAgUQAAgUgFgHQgFgHgHAAIAAAAAwbgqIAABUIgLAAIAAhBQgDADgHAEQgGADgFACIAAgKQAJgEAHgGQAGgGADgFIAHAAAuxglQAGgFAJAAQAHAAAFACQAGADADAFQAEAGABAHQACAIAAALQAAAPgDAJQgDAJgGAFQgGAFgKAAQgMAAgHgJQgJgKAAgYQAAgOADgJQAEgJAGgFIAAAAAvZgqIAABUIgKAAIAAhBQgEADgGAEQgGADgFACIAAgKQAJgEAGgGQAHgGADgFIAGAAAutgcQgGAIAAAUQAAAVAFAHQAFAHAHAAQAIAAAEgHQAFgIAAgUQAAgUgFgHQgEgHgIAAQgHAAgEAGIAAAAAtUgqIAABUIgKAAIAAhBQgDADgHAEQgGADgFACIAAgKQAJgEAGgGQAHgGADgFIAGAAArugVQAJgEAGgGQAHgGADgFIAGAAIAABUIgKAAIAAhBQgEADgGAEQgGADgFACIAAgKAsogcQgGAIAAAUQAAAVAFAHQAFAHAHAAQAIAAAEgHQAFgIAAgUQAAgUgFgHQgEgHgIAAQgHAAgEAGIAAAAAsCgTQABAIAAALQAAAPgDAJQgDAJgGAFQgGAFgKAAQgMAAgHgJQgJgKAAgYQAAgOADgJQAEgJAGgFQAGgFAJAAQAHAAAFACQAGADADAFQADAGADAHIAAAAAqYgqQAHAAAFACQAGADADAFQADAGACAHQACAIAAALQAAAPgDAJQgDAJgGAFQgGAFgKAAQgMAAgHgJQgJgKAAgYQAAgOADgJQAEgJAGgFQAGgFAJAAIAAAAAqYgiQgHAAgEAGQgFAIAAAUQAAAVAFAHQAEAHAHAAQAIAAAEgHQAFgIAAgUQAAgUgFgHQgEgHgIAAIAAAAAplglQAGgFAKAAQAHAAAFACQAFADADAFQAEAGACAHQACAIAAALQAAAPgDAJQgDAJgHAFQgGAFgJAAQgNAAgHgJQgIgKAAgYQAAgOADgJQADgJAGgFIAAAAAphgcQgFAIAAAUQAAAVAFAHQAEAHAIAAQAHAAAFgHQAFgIAAgUQAAgUgFgHQgFgHgHAAQgIAAgEAGIAAAAAongLIAAgKQAJgEAHgGQAGgGADgFIAHAAIAABUIgLAAIAAhBQgDADgHAEQgGADgFACIAAAAAnEgoQAFADADAFQAEAGACAHQACAIAAALQAAAPgDAJQgDAJgHAFQgFAFgKAAQgNAAgHgJQgIgKAAgYQAAgOADgJQAEgJAGgFQAFgFAKAAQAHAAAFACIAAAAAnQgiQgIAAgDAGQgGAIAAAUQAAAVAFAHQAEAHAIAAQAHAAAFgHQAFgIAAgUQAAgUgFgHQgFgHgHAAIAAAAAmXgQQgGADgFACIAAgKQAJgEAHgGQAHgGACgFIAHAAIAABUIgLAAIAAhBQgDADgHAEIAAAA").cp();
	this.shape_1.setTransform(33.6,1);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-108.8,-3.3,284.9,8.8);


(lib.wireBg = function() {
	this.initialize();

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("AW4hNIAACbA23BOIAAibMAtvAAAA23BOMAtvAAA");
	this.shape_2.setTransform(35,0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A3913B").s().p("A23hNMAtvAAAIAACbMgtvAAAIAAib").cp();
	this.shape_3.setTransform(35,0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C1CD23").s().p("AW4hMMgtvAAAIAAgFMAtvAAAIAAAFA23BOMAtvAAAIAAAEMgtvAAAIAAgE").cp();
	this.shape_4.setTransform(35,0);

	this.addChild(this.shape_4,this.shape_3,this.shape_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-111.3,-8.2,292.8,16.5);


(lib.UDP_bkg = function() {
	this.initialize();

	// Layer 1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("rgba(0,0,0,0.992)").ss(1,1,1).p("AShhjIAADHICgAAIAAjHIigAAAhtBkIADAAAhqhjIkYAAIAADHIEVAAIAAjDAhqhjIFyAAIOZAAAEIBkIlyAAAEIBkIAAjHAmFhjIu7AAIAADHIO7AAAShBkIuZAA");
	this.shape_5.setTransform(134.5,10.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFF3B9").s().p("AHMBkIuXAAIAAjHIOXAAIAADH").cp();
	this.shape_6.setTransform(207,10.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#DBECDA").s().p("AC5hjIAADHIlyAAIAAjHIFyAA").cp();
	this.shape_7.setTransform(142.3,10.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E0D5E6").s().p("ACIBkIAAjDIAADDIkSAAIAAjHIEVAAIAADHIgDAA").cp();
	this.shape_8.setTransform(109.7,10.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F9D1D2").s().p("AHdBkIu5AAIAAjHIO5AAIAADH").cp();
	this.shape_9.setTransform(47.7,10.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D3BA46").s().p("AhOhjICdAAIAADHIidAAIAAjH").cp();
	this.shape_10.setTransform(261,10.1);

	this.addChild(this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,269,20.1);


(lib.glow5base = function() {
	this.initialize();

	// Layer 9
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#F26200").ss(6,2,1).p("ALCJ5I2DAAIAAzxIWDAAIAATx").cp();
	this.shape_11.setTransform(8.2,6.8);

	this.addChild(this.shape_11);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-62.4,-56.5,141.3,126.6);


(lib.CiscoWebpage = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.CiscoWebpage1copy();
	this.instance.setTransform(-95,-68.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-106.9,-68.4,214,137);


(lib.computerNoShadow4 = function() {
	this.initialize();

	// Layer 9
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#F26200").ss(5,2,1).p("AMQJ5I4fAAIAAzxIYfAAIAATx").cp();
	this.shape_12.setTransform(16.3,6.8);

	this.addChild(this.shape_12);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-62,-56.5,156.9,126.6);


(lib.webGlow5 = function() {
	this.initialize();

	// Layer 1
	this.instance_1 = new lib.glow5base();
	this.instance_1.setTransform(23.1,2.5,0.794,0.768,0,0,0,-62.4,-56.5);
	this.instance_1.shadow = new cjs.Shadow("rgba(242,98,0,1)",0,0,7);

	this.addChild(this.instance_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(23.1,2.5,112.3,97.2);


(lib.webGlow4 = function() {
	this.initialize();

	// Layer 1
	this.instance_2 = new lib.computerNoShadow4();
	this.instance_2.setTransform(18.3,55.3,0.78,0.837,0,0,0,-61.7,7.4);
	this.instance_2.shadow = new cjs.Shadow("rgba(242,98,0,1)",0,0,7);

	this.addChild(this.instance_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(18,1.7,122.4,106);


(lib.webGlow3 = function() {
	this.initialize();

	// Layer 1
	this.instance_3 = new lib.computerNoShadow4();
	this.instance_3.setTransform(18.8,55.3,0.849,0.837,0,0,0,-61.7,7.4);
	this.instance_3.shadow = new cjs.Shadow("rgba(242,98,0,1)",0,0,7);

	this.addChild(this.instance_3);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(18.5,1.7,133.3,106);


(lib.Tween5 = function() {
	this.initialize();

	// Layer 2
	/*this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#393536").ss(2,1,1).p("AQuqrIAAVXMghbAAAIAA1XMAhbAAA").cp();
	this.shape_13.setTransform(-1,-0.8);*/

	// Layer 1
	this.instance_4 = new lib.CiscoWebpage("synched",0);

	this.addChild(this.instance_4);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-108.1,-69.3,215.2,137.9);


(lib.animation = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{},true);

	// Title
	this.instance_5 = new lib.Tween5("synched",0);
	this.instance_5.setTransform(374.2,208,0.077,0.077);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(549).to({startPosition:0},0).to({alpha:0.988},15).to({scaleX:0.32,scaleY:0.32,x:386,y:172.6,alpha:0.992},13).to({scaleX:0.77,scaleY:0.77,x:355,y:107.3,alpha:1},24).wait(11));

	// gradient
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#0099FF","#FFFFFF"],[0,1],4,4.6,4.2,0.6).s().p("AmQgkIDmBOIErAAIEQhTIshAF").cp();
	this.shape_14.setTransform(376.6,193.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#069BFD","#F6FBFB"],[0,1],5,5.3,3.9,-0.3).s().p("AmigqINFgFIkZBfIkqAAIkCha").cp();
	this.shape_15.setTransform(375.6,193.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#0D9EFB","#EEF8F7"],[0,1],6.1,6.1,3.6,-1.2).s().p("AmzgwINngFIkgBrIkpAAIkehm").cp();
	this.shape_16.setTransform(374.6,192.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#13A0F9","#E5F4F4"],[0,1],7.2,6.8,3.4,-2.1).s().p("AnFg2IOLgFIkoB3IkpAAIk6hy").cp();
	this.shape_17.setTransform(373.5,191.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#19A3F7","#DDF0F0"],[0,1],8.3,7.5,3.1,-3.1).s().p("AnXg9IOvgEIkxCDIkoAAIlWh/").cp();
	this.shape_18.setTransform(372.5,191.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#20A5F5","#D4EDEC"],[0,1],9.4,8.2,2.8,-4.1).s().p("AnphDIPTgEIk5CPIkoAAIlyiL").cp();
	this.shape_19.setTransform(371.5,190.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#26A7F3","#CCE9E8"],[0,1],10.5,9,2.6,-5).s().p("An6hJIP1gEIlACbIkoAAImNiX").cp();
	this.shape_20.setTransform(370.5,189.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#2CAAF2","#C3E5E4"],[0,1],11.6,9.7,2.3,-6).s().p("AoMhPIQZgEIlJCnIknAAImpij").cp();
	this.shape_21.setTransform(369.5,189.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["#33ACF0","#BBE2E1"],[0,1],12.7,10.5,2,-6.9).s().p("AoehWIQ9gDIlRCzIknAAInFiw").cp();
	this.shape_22.setTransform(368.5,188.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["#39AFEE","#B2DEDD"],[0,1],13.7,11.2,1.7,-7.8).s().p("AowhcIRhgDIlZC/IknAAInhi8").cp();
	this.shape_23.setTransform(367.5,187.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["#3FB1EC","#AADAD9"],[0,1],14.8,11.9,1.4,-8.8).s().p("ApBhiISDgDIlhDLIklAAIn9jI").cp();
	this.shape_24.setTransform(366.5,187.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["#46B4EA","#A1D7D5"],[0,1],15.9,12.6,1.2,-9.8).s().p("ApThoISngDIlpDXIklAAIoZjU").cp();
	this.shape_25.setTransform(365.4,186.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.lf(["#4CB6E8","#99D3D1"],[0,1],17,13.4,0.9,-10.7).s().p("AplhvITLgDIlxDlIklAAIo1ji").cp();
	this.shape_26.setTransform(364.4,186);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["#52B8E6","#90CFCE"],[0,1],18.1,14.1,0.6,-11.6).s().p("Ap3h1ITvgDIl6DxIkkAAIpRju").cp();
	this.shape_27.setTransform(363.4,185.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["#59BBE4","#88CCCA"],[0,1],19.2,14.8,0.3,-12.6).s().p("AqIh7IURgDImBD9IkkAAIpsj6").cp();
	this.shape_28.setTransform(362.4,184.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["#5FBDE2","#80C8C6"],[0,1],20.3,15.6,0.1,-13.5).s().p("AqaiCIU1gCImJEJIkkAAIqIkH").cp();
	this.shape_29.setTransform(361.4,184.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.lf(["#65C0E0","#77C4C2"],[0,1],21.4,16.3,-0.1,-14.5).s().p("AqsiIIVZgCImSEVIkjAAIqkkT").cp();
	this.shape_30.setTransform(360.4,183.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.lf(["#6CC2DE","#6FC1BF"],[0,1],22.4,17,-0.4,-15.5).s().p("Aq+iOIV9gCImaEhIkkAAIq/kf").cp();
	this.shape_31.setTransform(359.4,182.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.lf(["#72C5DD","#66BDBB"],[0,1],23.5,17.8,-0.7,-16.4).s().p("ArPiUIWfgCImhEtIkkAAIrakr").cp();
	this.shape_32.setTransform(358.4,182.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.lf(["#78C7DB","#5EB9B7"],[0,1],24.6,18.5,-0.9,-17.3).s().p("ArhiaIXDgCImqE5IkjAAIr2k3").cp();
	this.shape_33.setTransform(357.4,181.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.lf(["#7FC9D9","#55B6B3"],[0,1],25.7,19.2,-1.2,-18.3).s().p("ArzihIXngBImyFFIkjAAIsSlE").cp();
	this.shape_34.setTransform(356.3,180.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.lf(["#85CCD7","#4DB2AF"],[0,1],26.8,20,-1.5,-19.2).s().p("AsFinIYLgBIm6FRIkjAAIsulQ").cp();
	this.shape_35.setTransform(355.3,180.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.lf(["#8BCED5","#44AEAC"],[0,1],27.9,20.7,-1.8,-20.2).s().p("AsWitIYtgBInCFdIkiAAItJlc").cp();
	this.shape_36.setTransform(354.3,179.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.lf(["#92D1D3","#3CABA8"],[0,1],28.9,21.4,-2.1,-21.1).s().p("AsoizIZRgBInKFpIkiAAItllo").cp();
	this.shape_37.setTransform(353.3,178.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.lf(["#98D3D1","#33A7A4"],[0,1],30.1,22.2,-2.3,-22).s().p("AFoC7IHTl1I51AAIOBF1IEhAA").cp();
	this.shape_38.setTransform(352.3,178.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_14}]},577).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).wait(11));

	// whiteshape
	this.instance_6 = new lib.Tween1("synched",0);
	this.instance_6.setTransform(350.8,118.6);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(577).to({startPosition:0,_off:false},0).to({alpha:1},24).wait(11));


	// Wiretext
	this.instance_7 = new lib.wireText();
	this.instance_7.setTransform(118.8,300.1,0.773,0.773);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({x:234.1,y:300.5},56).wait(4).to({alpha:0},25).wait(527));

	// Wire
	this.instance_8 = new lib.wireBg();
	this.instance_8.setTransform(117.6,301.3,0.784,0.848);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({x:233.1},56).wait(4).to({alpha:0},25).wait(527));

	// Highlight
	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AAEB9IgHAAIAAj5IAHAAIAAD5").cp();
	this.shape_39.setTransform(373.9,266.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgHh7IAPAAIAAD4IgPAAIAAj4").cp();
	this.shape_40.setTransform(373.5,266.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgKh7IAVAAIAAD4IgVAAIAAj4").cp();
	this.shape_41.setTransform(373.2,266.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgNh7IAbAAIAAD4IgbAAIAAj4").cp();
	this.shape_42.setTransform(372.9,266.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgQh7IAhAAIAAD4IghAAIAAj4").cp();
	this.shape_43.setTransform(372.5,266.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgUh7IAoAAIAAD4IgoAAIAAj4").cp();
	this.shape_44.setTransform(372.2,266.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgXh7IAvAAIAAD4IgvAAIAAj4").cp();
	this.shape_45.setTransform(371.8,266.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("Agah7IA1AAIAAD4Ig1AAIAAj4").cp();
	this.shape_46.setTransform(371.5,266.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("Agdh7IA7AAIAAD4Ig7AAIAAj4").cp();
	this.shape_47.setTransform(371.2,266.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("Aghh7IBCAAIAAD4IhCAAIAAj4").cp();
	this.shape_48.setTransform(370.8,266.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("Agkh7IBJAAIAAD4IhJAAIAAj4").cp();
	this.shape_49.setTransform(370.5,266.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("Agnh7IBPAAIAAD4IhPAAIAAj4").cp();
	this.shape_50.setTransform(370.2,266.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("Agqh7IBVAAIAAD4IhVAAIAAj4").cp();
	this.shape_51.setTransform(369.8,266.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("Agth7IBbAAIAAD4IhbAAIAAj4").cp();
	this.shape_52.setTransform(369.5,266.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("Agxh7IBjAAIAAD4IhjAAIAAj4").cp();
	this.shape_53.setTransform(369.1,266.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("Ag0h7IBpAAIAAD4IhpAAIAAj4").cp();
	this.shape_54.setTransform(368.8,266.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("Ag3h7IBvAAIAAD4IhvAAIAAj4").cp();
	this.shape_55.setTransform(368.5,266.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("Ag7h7IB3AAIAAD4Ih3AAIAAj4").cp();
	this.shape_56.setTransform(368.1,266.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("Ag+h7IB9AAIAAD4Ih9AAIAAj4").cp();
	this.shape_57.setTransform(367.8,266.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AhBh8ICDAAIAAD5IiDAAIAAj5").cp();
	this.shape_58.setTransform(367.5,266.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_39}]},188).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).wait(405));

	// overlay
	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("ABvh8IAAD5IjdAAIAAj5IDdAA").cp();
	this.shape_59.setTransform(148.8,266.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("Ahuh8IDdAAIAAD5IjdAAIAAj5").cp();
	this.shape_60.setTransform(152.8,266.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("Ah+h7ID9AAIAAD4Ij9AAIAAj4").cp();
	this.shape_61.setTransform(155.1,266.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AiPh7IEfAAIAAD4IkfAAIAAj4").cp();
	this.shape_62.setTransform(157.4,266.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("Aifh7IE/AAIAAD4Ik/AAIAAj4").cp();
	this.shape_63.setTransform(159.7,266.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("Aivh7IFfAAIAAD4IlfAAIAAj4").cp();
	this.shape_64.setTransform(162,266.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("Ai/h7IF/AAIAAD4Il/AAIAAj4").cp();
	this.shape_65.setTransform(164.3,266.2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AjQh7IGhAAIAAD4ImhAAIAAj4").cp();
	this.shape_66.setTransform(166.6,266.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("Ajgh7IHBAAIAAD4InBAAIAAj4").cp();
	this.shape_67.setTransform(168.9,266.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("Ajwh7IHhAAIAAD4InhAAIAAj4").cp();
	this.shape_68.setTransform(171.2,266.2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AkBh7IIDAAIAAD4IoDAAIAAj4").cp();
	this.shape_69.setTransform(173.5,266.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AkRh7IIjAAIAAD4IojAAIAAj4").cp();
	this.shape_70.setTransform(175.7,266.2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("Akhh7IJDAAIAAD4IpDAAIAAj4").cp();
	this.shape_71.setTransform(178,266.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("Akxh7IJjAAIAAD4IpjAAIAAj4").cp();
	this.shape_72.setTransform(180.3,266.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AlCh7IKFAAIAAD4IqFAAIAAj4").cp();
	this.shape_73.setTransform(182.6,266.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AlSh7IKlAAIAAD4IqlAAIAAj4").cp();
	this.shape_74.setTransform(184.9,266.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("Alih7ILFAAIAAD4IrFAAIAAj4").cp();
	this.shape_75.setTransform(187.2,266.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("Alzh7ILnAAIAAD4IrnAAIAAj4").cp();
	this.shape_76.setTransform(189.5,266.2);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AmDh7IMHAAIAAD4IsHAAIAAj4").cp();
	this.shape_77.setTransform(191.8,266.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AmTh7IMnAAIAAD4IsnAAIAAj4").cp();
	this.shape_78.setTransform(194.1,266.2);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("Amjh8INHAAIAAD5ItHAAIAAj5").cp();
	this.shape_79.setTransform(196.4,266.2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("Amth7INbAAIAAD4ItbAAIAAj4").cp();
	this.shape_80.setTransform(197.5,266.2);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("Am2h7INtAAIAAD4IttAAIAAj4").cp();
	this.shape_81.setTransform(198.7,266.2);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("Am/h7IN/AAIAAD4It/AAIAAj4").cp();
	this.shape_82.setTransform(199.9,266.2);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AnJh7IOTAAIAAD4IuTAAIAAj4").cp();
	this.shape_83.setTransform(201.1,266.2);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AnSh7IOlAAIAAD4IulAAIAAj4").cp();
	this.shape_84.setTransform(202.3,266.2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("Anch7IO4AAIAAD4Iu4AAIAAj4").cp();
	this.shape_85.setTransform(203.5,266.2);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("Anlh7IPLAAIAAD4IvLAAIAAj4").cp();
	this.shape_86.setTransform(204.7,266.2);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("Anuh7IPdAAIAAD4IvdAAIAAj4").cp();
	this.shape_87.setTransform(205.9,266.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("An4h7IPxAAIAAD4IvxAAIAAj4").cp();
	this.shape_88.setTransform(207.1,266.2);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AoBh8IQDAAIAAD5IwDAAIAAj5").cp();
	this.shape_89.setTransform(208.4,266.2);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("Ap4h8ITxAAIAAD5IzxAAIAAj5").cp();
	this.shape_90.setTransform(196.5,266.2);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("Ap7h7IT3AAIAAD4Iz3AAIAAj4").cp();
	this.shape_91.setTransform(199.1,266.2);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("Ap+h7IT9AAIAAD4Iz9AAIAAj4").cp();
	this.shape_92.setTransform(201.7,266.2);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AqBh7IUDAAIAAD4I0DAAIAAj4").cp();
	this.shape_93.setTransform(204.3,266.2);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AqEh7IUJAAIAAD4I0JAAIAAj4").cp();
	this.shape_94.setTransform(206.9,266.2);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AqGh7IUOAAIAAD4I0OAAIAAj4").cp();
	this.shape_95.setTransform(209.5,266.2);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AqJh7IUTAAIAAD4I0TAAIAAj4").cp();
	this.shape_96.setTransform(212,266.2);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AqMh7IUZAAIAAD4I0ZAAIAAj4").cp();
	this.shape_97.setTransform(214.6,266.2);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AqPh7IUfAAIAAD4I0fAAIAAj4").cp();
	this.shape_98.setTransform(217.2,266.2);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AqSh7IUlAAIAAD4I0lAAIAAj4").cp();
	this.shape_99.setTransform(219.8,266.2);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AqVh8IUrAAIAAD5I0rAAIAAj5").cp();
	this.shape_100.setTransform(222.4,266.2);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AQkB9MghHAAAIAAj5MAhHAAAIAAD5").cp();
	this.shape_101.setTransform(262.2,266.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_59}]}).to({state:[{t:this.shape_60}]},188).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},100).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},99).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},128).wait(58));

	// ID_txt18
	this.instance_9 = new lib.ID_txt18();
	this.instance_9.setTransform(191.3,268.9,1,1,0,0,0,20.7,7.5);
	this.instance_9.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(89).to({alpha:1},0).wait(99).to({alpha:0},11).wait(413));

	// ID_txt19
	this.instance_10 = new lib.ID_txt19();
	this.instance_10.setTransform(259.3,232.9,1,1,0,0,0,20.7,7.5);
	this.instance_10.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(89).to({alpha:1},0).wait(218).to({alpha:0},10).wait(295));

	// ID_txt20
	this.instance_11 = new lib.ID_txt20();
	this.instance_11.setTransform(278.3,284.7,1,1,0,0,0,20.7,7.5);
	this.instance_11.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(89).to({alpha:1},0).wait(327).to({alpha:0},10).wait(186));

	// ID_txt21
	this.instance_12 = new lib.ID_txt21();
	this.instance_12.setTransform(324.3,243.9,1,1,0,0,0,20.7,7.5);
	this.instance_12.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(89).to({alpha:1},0).wait(459).to({alpha:0},6).wait(58));

	// Text 3 bg
	this.instance_13 = new lib.UDP_bkg();
	this.instance_13.setTransform(251.7,300.7,0.773,0.773,0,0,0,112.5,10.1);
	this.instance_13.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(59).to({regY:10,y:267.4,alpha:1},30).wait(459).to({x:253.3,alpha:0},6).wait(58));

	// glow2
	this.btn6 = new lib.webGlow3();
	this.btn6.setTransform(353.6,55.2,0.72,0.713,0,0,0,18.4,1.7);
	this.btn6.alpha = 0;
	this.btn6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.btn6).wait(343).to({_off:false},0).to({alpha:1},10).to({alpha:0},10).wait(5).to({alpha:1},10).to({alpha:0},10).wait(5).to({alpha:1},10).to({alpha:0},10).to({_off:true},1).wait(198));

	// glow3
	this.btn6_1 = new lib.webGlow5();
	this.btn6_1.setTransform(473.4,110,0.501,0.544,0,0,0,182.3,104.8);
	this.btn6_1.alpha = 0;
	this.btn6_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.btn6_1).wait(460).to({_off:false},0).to({alpha:1},10).to({alpha:0},10).wait(5).to({alpha:1},10).to({alpha:0},10).wait(5).to({alpha:1},10).to({alpha:0},10).to({_off:true},1).wait(81));

	// glow
	this.btn6_2 = new lib.webGlow4();
	this.btn6_2.setTransform(539.4,171.6,1.779,1.134,0,0,0,182.2,104.6);
	this.btn6_2.alpha = 0;
	this.btn6_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.btn6_2).wait(114).to({_off:false},0).to({alpha:1},10).to({alpha:0},10).wait(5).to({alpha:1},10).to({alpha:0},10).wait(5).to({alpha:1},10).to({alpha:0},10).to({_off:true},1).wait(39).to({regX:19.4,regY:3.4,scaleX:0.99,scaleY:0.94,x:331.7,y:55.3,_off:false},0).to({scaleY:0.95,y:54.8,alpha:1},19).to({alpha:0},10).wait(5).to({scaleY:0.94,y:55.3},0).to({scaleY:0.93,y:56.8,alpha:1},9).to({alpha:0},11).wait(5).to({y:55.8,alpha:1},10).to({scaleY:0.93,y:56.5,alpha:0},10).to({_off:true},1).wait(308));

	// lazy text
	this.text_13 = new DOMObject({type:"TEXT" , align:"left" ,compId:"ID_txt13", width:"70",  size:"11", expand:"up+down"});
 
	this.text_13.setTransform(399,205.6);

	this.text_14 = new DOMObject({type:"TEXT" , align:"left" ,compId:"ID_txt12", width:"95",  size:"11", expand:"up+down"});

	this.text_14.setTransform(53.4,201);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_14},{t:this.text_13}]}).wait(612));

	// Box Title
	this.instance_14 = new lib.boxTitleMc();
	this.instance_14.setTransform(367.1,98.6,1,1,0,0,0,96.4,71.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(577).to({alpha:0},24).wait(11));



	// bg
	this.instance_15 = new lib.bg();
	this.instance_15.setTransform(1,-17.8,0.72,0.719);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_15}]}).wait(612));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1,-17.8,470,400);
(lib.Main = function() {
	this.initialize();

	// animation
	this.anim01z = new lib.animation();
	this.anim01z.setTransform(86.1,67.4,1,1,0,0,0,87,50.5);

	this.addChild(this.anim01z);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,-0.9,470,400);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;