(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.classesmediaMediaObject = function() {
	this.initialize();

	// Main
	this.instance = new lib.Main();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,51.5,466.3,297.6);


// symbols:
(lib.envelope_closed_static = function() {	
	this.initialize();	
	this.image = new DOMObject({type:"IMAGE",image:img.envelope_closed_static});
	this.addChild(this.image);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,123,79);


(lib.Router = function() {	
	this.initialize();	
	this.image = new DOMObject({type:"IMAGE",image:img.Router});
	this.addChild(this.image);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,148,107);


(lib.Wan_line = function() {
	this.initialize(img.Wan_line);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,314,23);


(lib.ID_txt05 = function() {
	this.initialize();

	// txt
	this.text = new DOMObject({type:"TEXT",compId:"ID_txt05",width:"459",expand:"down",align:"left"});	

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,459,16.2);


(lib.ID_txt02 = function() {
	this.initialize();

	// Layer 2
	this.text = new DOMObject({type:"TEXT",compId:"ID_txt02",width:"104",expand:"up",align:"center", class:"whitebgCallOut"});	

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,104,16.2);


(lib.ID_txt01 = function() {
	this.initialize();

	// ID_txt01
	this.text = new DOMObject({type:"TEXT",compId:"ID_txt01",width:"104",expand:"up",align:"center",class:"whitebgCallOut"});	
	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,104,16.2);


(lib.pageinterior = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#E9E8E8").ss(1,1,1,3,true).p("AEZnwICpDbIAANtIuDAAIAAyvIJuAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#EEEEEE","#FFFFFF"],[0,0.431],0,60.3,0,-60.1).s().p("AnBJYIAAyvIJtAAIBsBnICqDbIAANtg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-44.9,-60,90,120.1);


(lib.pagecorner = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#E9E8E8").ss(1,1,1,3,true).p("ABChFQhAgJg8gbQhFgegLggIAAAFQAOAeAcApQAMASAwBDIAzA7IB8BzQhHhvgJg7QgHgrAOgYg");
	this.shape.setTransform(0.4,-3.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#EEEEEE","#FFFFFF"],[0,1],-18.2,-15,-10.8,-22.4).s().p("AAPA1Igzg7Ig8hVQgcgpgOgeIAAgFQALAgBFAeQA8AbBAAJQgOAYAHArQAJA7BHBvg");
	this.shape_1.setTransform(0.4,-3.2);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-13.5,-20.1,28,33.8);


(lib.wheel1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AgjOvQguhiAGhmQg3gFgzgMQgcBfhNBOIhGgaQgJhrAnhcQgwgXgtgfQg6BPhjAvIg5gvQAchpBGhKQgngngfgrQhTA3htALIglhBQA+hYBZgtQgWgxgOg0QhgAXhqgcIgNhJQBZg+BlgMQgCgaAAgbQAAgaACgaQhkgLhag+IANhKQBogbBiAWQAOg0AWgxQhYgsg/hZIAlhAQBrAKBVA3QAfgrAmgnQhEhIgehqIA5gwQBiAuA8BQQAtgfAwgXQgnhbAIhsIBGgaQBMBNAeBgQAzgMA3gFQgHhkAuhkIBIAAQAuBigGBmQA3AFAzAMQAchfBNhOIBGAaQAJBrgnBcQAwAXAtAfQA6hPBjgvIA5AvQgcBphGBKQAnAnAfArQBTg3BtgLIAlBBQg+BYhZAtQAWAxAOA0QBggXBqAcIANBJQhZA+hlAMQACAaAAAaQAAAbgCAaQBkALBaA+IgNBKQhoAbhigWQgOA0gWAxQBYAsA/BZIglBAQhrgKhVg3QgfArgmAnQBEBIAeBqIg5AwQhigug8hQQgtAfgwAXQAnBbgIBsIhHAaQhLhNgehgQgzAMg3AFQAHBkguBkgAk6k6QiCCDAAC3QAAC4CCCDQCDCCC3AAQC4AACDiCQCCiDAAi4QAAi3iCiDQiDiCi4AAIAAAAQi3AAiDCCg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-93.5,-94.3,187.2,188.7);


(lib.gear004 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AgkKmQgshgAEhgQg0gIgvgSQguBWhVA8IhAglQAKhqA0hRQgUgQgSgSQgTgTgQgUQhTA1hoAJIglhAQA9hWBVgsQgSgwgIg0QhgAEhggsIAAhIQBfgsBhAEQAIg0ASgwQhWgtg8hVIAlhAQBqAKBRA0QAQgUATgTQATgSATgQQg0hUgKhnIBAgmQBXA9AsBWQAvgTA0gHQgEhhAshgIBIAAQAsBfgEBiQA0AHAwATQAshWBWg9IBBAmQgKBng0BUQAUAQASASQATATAQAUQBRg0BqgKIAlBAQg8BUhWAuQASAwAIA0QBigEBeAsIAABIQhgAshggEQgIA0gSAwQBVAsA9BWIglBAQhogJhTg0QgQATgTATQgSASgUAQQA0BRAKBqIhBAlQhUg8guhWQgvASg1AIQAEBigsBegAigigQhCBDAABdQAABdBCBDQBDBDBdAAQBdAABDhDQBDhDAAhdQAAhdhDhDQhDhChdAAQhdAAhDBCg");
	this.shape.setTransform(0.8,0);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-67,-67.8,135.7,135.7);


(lib.envelopeclosedstatic = function() {
	this.initialize();

	// png
	this.instance = new lib.envelope_closed_static();
	this.instance.setTransform(-39.5,-26.1,0.667,0.663);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-39.5,-26.1,82.1,52.4);


(lib.Wanline = function() {
	this.initialize();

	// png
	this.instance = new lib.Wan_line();
	this.instance.setTransform(0,0,0.998,1);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,313.5,23);


(lib.Router_1 = function() {
	this.initialize();

	// png
	this.instance = new lib.Router();
	this.instance.setTransform(0,-67.2,0.626,0.624);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-67.2,92.7,66.8);


(lib.gear01rotate2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.wheel1("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:20.1},19).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-93.5,-94.3,187.2,188.7);


(lib.packet1 = function() {
	this.initialize();

	// txt
	this.text = new DOMObject({type:"TEXT",compId:"ID_txt04",width:"64",expand:"up+down",align:"center"});	
	this.text.setTransform(-19,7.7);

	// Layer 1
	this.instance = new lib.envelopeclosedstatic();
	this.instance.setTransform(23.7,15.2,0.654,0.654,0,0,0,1.4,0.1);

	this.addChild(this.instance,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-3,-1.9,53.7,34.3);


(lib.gear004rotate = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.gear004("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:30},19).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67,-67.8,135.7,135.7);


(lib.Page = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.pagecorner();
	this.instance.setTransform(31.5,-46.4,1,1,180);
	this.instance.shadow = new cjs.Shadow("#000000",0,1,5);

	// Layer 1
	this.instance_1 = new lib.pageinterior();

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-44.9,-60,90,120.2);


(lib.wheels_rotating = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.gear004rotate();
	this.instance.setTransform(0,14.4,0.212,0.212,0,0,180);

	this.instance_1 = new lib.gear01rotate2();
	this.instance_1.setTransform(25.1,32.2,0.212,0.212);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,58.9,52.2);


(lib.page1 = function() {
	this.initialize();

	// txt
	this.text = new DOMObject({type:"TEXT",compId:"ID_txt03",width:"64",expand:"up+down",align:"center"});	
	this.text.setTransform(1,35.6);

	// Layer 1
	this.instance = new lib.Page();
	this.instance.setTransform(33,44.1,0.734,0.734);

	this.addChild(this.instance,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,66,88.2);


(lib.animation01 = function(mode,startPosition,loop) {

	// Packet
	this.instance = new lib.packet1();
	this.instance.setTransform(107.5,125.6,0.661,0.661,0,0,0,23.8,15.2);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(155).to({scaleX:1,scaleY:1,x:108.1,alpha:1},14).wait(13).to({x:358.1,y:136.1},67).wait(6).to({scaleX:0.66,scaleY:0.66,x:356.5,y:135.6,alpha:0},12).wait(276).to({scaleX:1,scaleY:1,x:358.1,y:136.1,alpha:1},12).wait(6).to({x:108.1,y:125.6},67).wait(13).to({scaleX:0.66,scaleY:0.66,x:107.5,alpha:0},14).wait(140));

	// Icons
	this.text = new DOMObject({type:"TEXT",text:"R2",bold:"1", color:"#FFFFFF"});  
	this.text.setTransform(347,137.3);

	this.instance_1 = new lib.Router_1();
	this.instance_1.setTransform(363,136,0.45,0.45,0,0,0,46.3,-33.3);

	this.text_1 = new DOMObject({type:"TEXT",text:"R1",bold:"1", color:"#FFFFFF"});  
	this.text_1.setTransform(91.5,127.3);

	this.instance_2 = new lib.Router_1();
	this.instance_2.setTransform(107.5,126,0.45,0.45,0,0,0,46.3,-33.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.text_1},{t:this.instance_1},{t:this.text}]}).wait(795));

	// Static texts
	this.text_2 = new DOMObject({type:"TEXT",text:"Fa0/0", color:"#393536"});	
	this.text_2.setTransform(394.5,122.9);

	this.text_3 = new DOMObject({type:"TEXT",text:"Fa0/0", color:"#393536"});	
	this.text_3.setTransform(45.5,110.9);

    this.text_4 = new DOMObject({type:"TEXT",text:"172.16.3.0/24", color:"#393536"});	
	this.text_4.setTransform(395,100.7);

    this.text_5 = new DOMObject({type:"TEXT",text:"S0/0/0", color:"#393536"});	
	this.text_5.setTransform(287.5,120.2);

    this.text_6 = new DOMObject({type:"TEXT",text:"172.16.2.0/24", color:"#393536"});
	this.text_6.setTransform(184.5,103.2);
	
	this.text_7 = new DOMObject({type:"TEXT",text:"S0/0/0", color:"#393536"})	
	this.text_7.setTransform(139.5,103.2);

    this.text_8 = new DOMObject({type:"TEXT",text:"172.16.1.0/24", color:"#393536"})	
	this.text_8.setTransform(0,92.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_8},{t:this.text_7},{t:this.text_6},{t:this.text_5},{t:this.text_4},{t:this.text_3},{t:this.text_2}]}).wait(795));

	// Lazy texts
	this.instance_3 = new lib.ID_txt05();
	this.instance_3.setTransform(234.5,342.4,1,1,0,0,0,229.5,9.5);

	this.instance_4 = new lib.ID_txt02();
	this.instance_4.setTransform(396.3,287.4,1,1,0,0,0,52,9.5);

	this.instance_5 = new lib.ID_txt01();
	this.instance_5.setTransform(64.4,287.4,1,1,0,0,0,52,9.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3}]}).wait(795));

	// Page
	this.instance_6 = new lib.page1();
	this.instance_6.setTransform(63.4,233.6,1,1,0,0,0,33,44.1);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(2).to({alpha:1},0).wait(1).to({x:100.4,y:174},38).wait(99).to({y:175,alpha:0},12).wait(116).to({x:357.4,y:183.5},0).to({alpha:1},15).wait(106).to({x:381.4,y:246.5},50).to({x:357.4,y:183.5},26).wait(67).to({y:185},0).to({alpha:0},12).wait(115).to({x:100.4,y:173.5},0).to({y:174,alpha:1},9).wait(58).to({y:175},0).to({x:65.4,y:233.6},20).wait(50));

	// Wheel
	this.instance_7 = new lib.wheels_rotating();
	this.instance_7.setTransform(107.3,77.6,1,1,0,0,0,29.4,26.1);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(41).to({alpha:1},9).wait(89).to({alpha:0},12).wait(116).to({x:360.3,y:84.6},0).to({alpha:1},15).wait(84).to({alpha:0},12).wait(87).to({alpha:1},9).wait(49).to({alpha:0},12).wait(123).to({x:107.3,y:77.6},0).to({alpha:1},9).wait(50).to({alpha:0},16).wait(62));

	// Lines
	this.instance_8 = new lib.Wanline();
	this.instance_8.setTransform(231.3,129.6,0.812,0.812,0,0,0,156.8,11.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AfGiSIAAC3IAADmAVzAlIJTAAA/FkKIAAC+IH5AAA/FhMIAADQ");
	this.shape.setTransform(234.5,136.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_8}]}).wait(795));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,51.5,466.3,297.6);


(lib.Main = function() {
	this.initialize();

	// animation
	this.anim01 = new lib.animation01();

	this.addChild(this.anim01);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,51.5,466.3,297.6);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;