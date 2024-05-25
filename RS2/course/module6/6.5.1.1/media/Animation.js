(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.classesmediaMediaObject = function() {
	this.initialize();

	// Main
	this.instance = new lib.Main();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,470,400);


// symbols:
(lib._2_5_1_1 = function() {
	this.initialize(img._2_5_1_1);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,653,556);


(lib.envelope_closed_static = function() {
	
	this.initialize();
	
	this.image = new DOMObject({type:"IMAGE",image:img.envelope_closed_static});
	this.addChild(this.image);
	
}).prototype = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,123,79);


(lib.envelopeclosedstatic = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.envelope_closed_static();
	//adjust for x y position if reg pt changed for envelope static 
	this.instance.setTransform(-16,-26.1,0.667,0.663);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-39.5,-26.1,82.1,52.4);


(lib.animation01 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{},true);

	// Packets
	this.instance_1 = new lib.envelopeclosedstatic();
	this.instance_1.setTransform(31.8,285.7,0.41,0.41,0,0,0,1.5,0.1);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({alpha:1},5,cjs.Ease.get(1)).to({x:169.8,y:285.9},34).to({alpha:0},7).to({y:285.7,alpha:1},7).to({y:285.9,alpha:0},7).to({alpha:1},7).wait(15).to({x:228.6,y:178.1},28).wait(1).to({alpha:0},7).to({alpha:1},7).to({alpha:0},7).to({alpha:1},7).wait(15).to({x:292.6,y:285.9},29).wait(15).to({alpha:0},7).to({alpha:1},7).to({alpha:0},7).to({alpha:1},7).to({x:425},29).to({alpha:0},7).wait(2));

	// statiic text2
	// statiic text2
	this.text = new DOMObject({type:"TEXT",text:".1"});  
	this.text.setTransform(313.3,285.3);


	this.text_1 = new DOMObject({type:"TEXT",text:".1"}); 
	this.text_1.setTransform(280.3,258.7);

	
 
	this.text_2 = new DOMObject({type:"TEXT",text:".1"});  
	this.text_2.setTransform(231,151.5);
	
	
	this.text_3 = new DOMObject({type:"TEXT",text:".2"});	
	this.text_3.setTransform(234,199.4);


	this.text_4 = new DOMObject({type:"TEXT",text:".2"});	
	this.text_4.setTransform(216,199.4);

	this.text_5 = new DOMObject({type:"TEXT",text:".1"});
	this.text_5.setTransform(140,287);


	this.text_6 = new DOMObject({type:"TEXT",text:".1"});
	this.text_6.setTransform(171.7,260.1);

	this.text_7 = new DOMObject({type:"TEXT",text:"S0/0/0<br/>DCE"});
	this.text_7.setTransform(190,265.6);
	


	this.text_8 = new DOMObject({type:"TEXT",text:"G0/0"});
	this.text_8.setTransform(315,269.7);


	this.text_9 = new DOMObject({type:"TEXT",text:"G0/0"});
	this.text_9.setTransform(127,269.7);

	this.text_10 = new DOMObject({type:"TEXT",text:"S0/0/1"});
	this.text_10.setTransform(240,270);

	this.text_11 = new DOMObject({type:"TEXT",text:"S0/0/0"});
	this.text_11.setTransform(178,186.2);

	this.text_12 = new DOMObject({type:"TEXT",text:"S0/0/1<br/>DCE"});
	this.text_12.setTransform(248,176);

	this.text_13 = new DOMObject({type:"TEXT",text:"G0/0"});
	this.text_13.setTransform(200,151.5);

	this.text_14 = new DOMObject({type:"TEXT",text:"192.168.2.0/24",bold:"1"});
	this.text_14.setTransform(320,304);

	this.text_15 = new DOMObject({type:"TEXT",text:"172.16.3.0/24",bold:"1"});
	this.text_15.setTransform(63,304);

	this.text_16 = new DOMObject({type:"TEXT",text:"192.168.1.0/24",bold:"1"});
	this.text_16.setTransform(270,199.2);

    this.text_17 = new DOMObject({type:"TEXT",text:"172.16.2.0/24",bold:"1"});
	this.text_17.setTransform(120,199.2);

	this.text_18 = new DOMObject({type:"TEXT",text:"172.16.1.0/24",bold:"1"});
	this.text_18.setTransform(130,119.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_18},{t:this.text_17},{t:this.text_16},{t:this.text_15},{t:this.text_14},{t:this.text_13},{t:this.text_12},{t:this.text_11},{t:this.text_10},{t:this.text_9},{t:this.text_8},{t:this.text_7},{t:this.text_6},{t:this.text_5},{t:this.text_4},{t:this.text_3},{t:this.text_2},{t:this.text_1},{t:this.text}]}).wait(278));

	// Static texts
	this.text_19 = new cjs.Text("R1", "bold 11px Arial", "#FFFFFF");
	this.text_19.textAlign = "center";
	this.text_19.lineHeight = 13;
	this.text_19.lineWidth = 27;
	this.text_19.setTransform(260.6,180.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ad4P3QAGACAEAFQAEAGAAAIQAAAHgCAEQgCAFgEACQgEADgEABQgFABgKAAIgJAAIAAAbIgOAAIAAhIIAXAAQANAAAEABIAAAAAd3QMQAAgEgCgCQgCgDgEAAQgCgBgIAAIgHAAIAAAVIAIAAQAIAAADgCQADgBACgCQABgCAAgEIAAAAAewQzQAGAAAEgEQAEgEACgIIAOAFQgDAMgIAFQgHAGgMAAQgOAAgJgKQgKgKAAgQQAAgSAKgKQAJgKAPAAQANAAAIAIQAFAEADAJIgPADQgBgFgEgDQgEgEgGAAQgIAAgFAGQgFAGAAANQAAANAFAGQAFAGAIAAIAAAAAfuP2QAKAAAGAGQAFAGAAAGQAAAKgKAFQAGACADAEQAEAFAAAGQAAAKgHAGQgHAHgKAAQgKAAgGgGQgGgFgBgJIANgCQAAAFADADQADADAEAAQAEAAADgEQADgDAAgFQAAgFgDgEQgDgDgEAAQgCAAgEABIACgLQAFAAADgCQADgDAAgEQAAgEgCgCQgCgCgEAAQgDAAgDADQgCACgBAFIgMgCQABgHADgEQACgEAFgCQAFgCAGAAIAAAAABkynQAAAFgCAEQgCAEgDAFQgDADgGAGQgHAGgCACQgBACgBACIAbAAIAAANIgwAAQABgHADgHQAEgGAMgLQAJgJACgDQADgEAAgEQAAgFgCgCQgDgDgEAAQgFAAgCADQgDACAAAGIgOgBQACgLAGgFQAGgFAKAAQALAAAGAGQAGAFAAAJIAAAAAgcyaQgCAFgEACQgDADgEABQgFABgKAAIgKAAIAAAbIgOAAIAAhIIAXAAQANAAAEABQAHACAEAFQAEAGAAAIQAAAHgDAEIAAAAAgHyyQAHgKAPAAQAOAAAIAIQAFAEACAJIgOADQgBgFgEgDQgEgEgGAAQgIAAgFAGQgDAGAAANQAAANADAGQAFAGAHAAQAGAAAEgEQAFgEABgIIAOAFQgDAMgHAFQgIAGgLAAQgPAAgHgKQgJgKAAgQQAAgSAJgKIAAAAAhCyvIAAAVIAIAAQAJAAADgCQADgBABgCQACgCAAgEQAAgEgCgCQgDgDgDAAQgDgBgIAAIgHAAAguAxIAeAAQAMAAAEACQAEACADAFQAEAFAAAGQAAAIgFAGQgFAFgHABQAEADACADQADADAFAJIAIAOIgQAAIgJgQQgGgIgCgCQgCgDgCAAQgDgBgFAAIgCAAIAAAeIgPAAIAAhIABDBFQAAAFgBAEQgCAEgEAFQgCADgHAGQgGAGgCACQgCACgBACIAbAAIAAANIgwAAQABgHAEgHQAEgGALgLQAKgJACgDQADgEAAgEQAAgFgDgCQgCgDgFAAQgEAAgDADQgCACAAAGIgOgBQABgLAHgFQAGgFAKAAQAKAAAGAGQAGAFAAAJIAAAAAgVBPQALAAACAAQADgBABgCQACgDAAgDQAAgDgCgDQgCgCgEAAQgBgBgJAAIgLAAIAAASIAKAAA9bP2IAABIIgOAAIAAg0QgHAHgKADIAAgMQAFgCAGgFQAHgFACgGIALAAA+HQoQgDAMgIAFQgHAGgMAAQgOAAgJgKQgKgKAAgQQAAgSAKgKQAJgKAPAAQANAAAIAIQAFAEADAJIgPADQgBgFgEgDQgEgEgGAAQgIAAgFAGQgFAGAAANQAAANAFAGQAFAGAIAAQAGAAAEgEQAEgEACgIIAOAFA/uP2QANAAAEABQAGACAEAFQAEAGAAAIQAAAHgCAEQgCAFgEACQgEADgEABQgFABgKAAIgJAAIAAAbIgOAAIAAhIIAXAAA/3QCIAAAVIAIAAQAIAAADgCQADgBACgCQABgCAAgEQAAgEgCgCQgCgDgEAAQgCgBgIAAIgHAAAKHR1QAFACADAFQADAFAAAGQAAAIgFAGQgEAFgKABQAFADADADQADADAFAJIAJAOIgRAAIgLgQQgFgIgCgCQgCgDgDAAQgCgBgFAAIgDAAIAAAeIgOAAIAAhIIAeAAQALAAAGACIAAAAAJmSRIALAAQAKAAADAAQACgBACgCQABgDAAgDQAAgDgCgDQgCgCgDAAQgCgBgJAAIgLAAIAAASAKzRzQAKAAAGAGQAFAGAAAGQAAAKgKAFQAGACAEAEQAEAFAAAGQAAAKgHAGQgHAHgKAAQgKAAgHgGQgGgFgBgJIANgCQABAFADADQACADAEAAQAFAAADgEQADgDAAgFQAAgFgDgEQgDgDgEAAQgDAAgDABIABgLQAGAAADgCQADgDAAgEQAAgEgDgCQgCgCgDAAQgEAAgCADQgDACAAAFIgNgCQABgHADgEQADgEAEgCQAFgCAGAAIAAAAAphSfIAAAeIgPAAIAAhHIAeAAQAMAAAFACQAFACADAEQAEAFAAAHQAAAIgFAFQgFAFgJACQAEACADAEQAEADAFAIIAIAOIgRAAIgKgPQgGgJgCgCQgCgCgCgBQgDgBgFAAIgCAAAphSCIAAASIAKAAQALAAACgBQADgBABgCQACgCAAgDQAAgEgCgCQgCgCgEgBQgBAAgJAAIgLAAAonSHQAFgBAGgFQAHgFACgHIALAAIAABIIgOAAIAAgzQgHAHgKADIAAgN").cp();
	this.shape.setTransform(227,176.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text_19}]}).wait(278));

	// bg
	this.instance_2 = new lib._2_5_1_1();
	this.instance_2.setTransform(0,0,0.72,0.719);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).wait(278));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,470,400);


(lib.Main = function() {
	this.initialize();

	// Animation
	this.anim01 = new lib.animation01();

	this.addChild(this.anim01);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,470,400);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;