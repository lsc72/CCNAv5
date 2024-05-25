(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.classesmediaMediaObject = function() {
	this.initialize();

	// main
	this.instance = new lib.Main();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(2.3,25.6,429.2,340.9);


// symbols:
(lib.boygirlpic = function() {
	this.initialize();	
	this.image = new DOMObject({type:"IMAGE",image:img.boygirlpic});
	this.addChild(this.image);
	
}).prototype = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,239,232);


(lib.computer = function() {
	this.initialize(img.computer);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,143,119);


(lib.computer_IP_based_Video = function() {
	this.initialize(img.computer_IP_based_Video);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,143,128);


(lib.sunset8 = function() {
	this.initialize(img.sunset8);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,300);


(lib.text7s2 = function() {
	this.initialize();

	// Layer 1
	this.text = new DOMObject({type:"TEXT",compId:"ID_s2_txt11",width:"67",expand:"down",align:"center",class:"purpleCallOut1"});

	
	this.text.setTransform(0,0);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.1,0,63.8,17.5);



(lib.text7s1 = function() {
	this.initialize();

	// Layer 1
	this.text_1 = new DOMObject({type:"TEXT",compId:"ID_s1_txt11",width:"67",expand:"down",align:"center",class:"purpleCallOut1"});
	this.text_1.setTransform(0,0);

	this.addChild(this.text_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,63.8,17.5);


(lib.text6s2 = function() {
	this.initialize();

	// Layer 1
	this.text_2 = new DOMObject({type:"TEXT",compId:"ID_s2_txt10",width:"65",expand:"down",align:"center",class:"purpleCallOut1"});
	this.text_2.setTransform(1,0.3);

	this.addChild(this.text_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.2,0.3,64.2,17.5);


(lib.text6s1 = function() {
	this.initialize();

	// Layer 1
	this.text_3 = new DOMObject({type:"TEXT",compId:"ID_s1_txt10",width:"65",expand:"down",align:"center",class:"purpleCallOut1"});
	this.text_3.setTransform(1,0.3);

	this.addChild(this.text_3);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.2,0.3,64.2,17.5);


(lib.text5s2 = function() {
	this.initialize();

	// Layer 1
	this.text_4 = new DOMObject({type:"TEXT",compId:"ID_s2_txt09",width:"62",expand:"down",align:"center",class:"purpleCallOut1"});
	this.text_4.setTransform(0.2,0.3);

	this.addChild(this.text_4);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.2,0.3,64.2,17.5);


(lib.text5s1 = function() {
	this.initialize();

	// Layer 1
	this.text_5 = new DOMObject({type:"TEXT",compId:"ID_s1_txt09",width:"62",expand:"down",align:"center",class:"purpleCallOut1"});
	this.text_5.setTransform(0.2,0.3);

	this.addChild(this.text_5);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.2,0.3,64.2,17.5);


(lib.text4s2 = function() {
	this.initialize();

	// Layer 1
	this.text_6 = new DOMObject({type:"TEXT",compId:"ID_s2_txt08",width:"88",expand:"down",align:"center",class:"purpleCallOut1"});
	this.text_6.setTransform(0,-0.2);

	this.addChild(this.text_6);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-0.2,64.2,17.5);


(lib.text4s1 = function() {
	this.initialize();

	// Layer 1
	this.text_7 = new DOMObject({type:"TEXT",compId:"ID_s1_txt08",width:"88",expand:"down",align:"center",class:"purpleCallOut1"});
	this.text_7.setTransform(0,-0.2);

	this.addChild(this.text_7);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-0.2,64.2,17.5);


(lib.text3s2 = function() {
	this.initialize();

	// Layer 1
	this.text_8 = new DOMObject({type:"TEXT",compId:"ID_s2_txt07",width:"69",expand:"down",align:"center",class:"purpleCallOut1"});
	this.text_8.setTransform(0,0);

	this.addChild(this.text_8);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,64.2,17.5);


(lib.text3s1 = function() {
	this.initialize();

	this.text_9 = new DOMObject({type:"TEXT",compId:"ID_s1_txt07",width:"69",expand:"down",align:"center",class:"purpleCallOut1"});
	this.text_9.setTransform(0,0);

	this.addChild(this.text_9);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,64.2,17.5);


(lib.text2s2 = function() {
	this.initialize();

	// Layer 1
	this.text_10 = new DOMObject({type:"TEXT",compId:"ID_s2_txt06",width:"67",expand:"down",align:"center",class:"purpleCallOut1"});
	this.addChild(this.text_10);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,64.2,17.5);


(lib.text2s1 = function() {
	this.initialize();

	// Layer 1
	this.text_11 = new DOMObject({type:"TEXT",compId:"ID_s1_txt06",width:"67",expand:"down",align:"center",class:"purpleCallOut1"});
	this.addChild(this.text_11);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,64.2,17.5);


(lib.text1s2 = function() {
	this.initialize();

	// Layer 1
	this.text_12 = new DOMObject({type:"TEXT",compId:"ID_s2_txt05",width:"70",expand:"down",align:"center",class:"purpleCallOut1"});
   this.text_12.setTransform(0.1,0);

	this.addChild(this.text_12);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,0,64.2,17.5);


(lib.text1s1 = function() {
	this.initialize();

	// Layer 1
	this.text_13 = new DOMObject({type:"TEXT",compId:"ID_s1_txt05",width:"70",expand:"down",align:"center",class:"purpleCallOut1"});
	this.text_13.setTransform(0.1,0);

	this.addChild(this.text_13);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,0,64.2,17.5);


(lib.Symbol1 = function() {
	this.initialize();

	// Layer 1
	this.text_14 = new DOMObject({type:"TEXT",compId:"ID_s2_txt03",width:"80",expand:"up",align:"center"});
    this.text_14.setTransform(0,0);

	this.addChild(this.text_14);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,64.2,17.5);


(lib.sunset_compy_screen = function() {
	this.initialize();

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AFFikIAAFLQAAA9g9AAIoNAAQgtAAgNgeQgGgNAAgSIAAlLQAAgTAGgNQANgfAtAAIINAAQA9AAAAA/IAAAA").cp();
	mask.setTransform(60,47.5);

	// Layer 1
	this.instance = new lib.sunset8();
	this.instance.setTransform(0,0,0.25,0.25);

	this.instance.mask = mask;
	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,100,75);


(lib.sunset = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC4E14").s().p("AAojnQgBAegVAVQgTAVgdAAQgeAAgVgVQgWgVABgeQgBgdAWgVQAVgWAeAAQAdAAATAWQAVAVABAdIAAAAAh3hUQASgSAbAAQAaAAATASQATATAAAbQAAAagTARQgTATgaAAQgbAAgSgTQgTgRgBgaQABgbATgTIAAAAAAtCJQAAAXgQARQgRAQgVAAQgXAAgQgQQgRgRAAgXQAAgXARgQQAQgRAXAAQAVAAARARQAQAQAAAXIAAAAABHDrQAMgLARAAQAQAAAMALQAMAMAAARQAAAQgMAMQgMAMgQAAQgRAAgMgMQgLgMAAgQQAAgRALgMIAAAA").cp();
	this.shape.setTransform(-30.1,170.7);

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("ALXnHQCEBhgqDbQDWA4gkDlQgjDjiOgDQAIBygaBAQgeBGhTAoQhVAqhYggQhMgch1hmQh6DdjvgOQjxgOiJj3QiTDFidhxQichyAtirQg/gEgqg0Qg2hEgGhbQgHhsAmgzQAzhGBtgYQhmjCCSh8QCSh9CaBxQB0j4EpAUQEmATB3ElQB3hNBQgFQBPgFBWA/IAAAA").cp();
	mask_1.setTransform(29.6,74.6);

	// Layer 1
	this.instance_1 = new lib.sunset8();
	this.instance_1.setTransform(-70.7,-0.7,0.5,0.5);

	this.instance_1.mask = mask_1;
	this.addChild(this.instance_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-70.7,-0.7,200,201.9);


(lib.signalpulse = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgohkQBRArgBAyQgCAxhVA7QgBABgBACQAAACABACQABABACABQACAAACgBQBag+ABg1QACg4hXgvQgCAAgCAAQgCABgBACQgBACABABQABACABABIAAAA").cp();
	this.shape_1.setTransform(4.5,24.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AAEhnQBRAuAAAzQgDAzhTA7QgCABAAACQgBACACACQABACABAAQABAAABgBQBbg/ABg2QADg5hYgyQgCgBgCABQgCAAgBACQgBACAAACQABACACABIAAAAAhWhrQgBACAAACQABACACABQBSArAAAxQgDAxhWA7QgCABAAACQgBACABACQACACACAAQACABABgCQBag+ABg1QADg4hYguQgBgBgCAAQgCABgBACIAAAA").cp();
	this.shape_2.setTransform(9,24.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AgphwQgCACABACQABACABABQBQAugBA0QgCAyhTA7QgCACgBABQAAACABACQABACACAAQACABACgCQBZg/ABg2QACg5hWgxQgCgBgBAAQgCABgBABIAAAAAiBhmQBSArgBAyQgCAwhWA7QgCABgBACQAAACABACQABACACAAQACABACgBQBcg/ABg1QACg3hZgvQgCgBgCABQgCAAgBACQgBACABACQABACACABIAAAAAAvhuQBUAygBA4QgCA2hYA9QgBACgBACQAAACABABQABACADAAQACABABgCQBdhBABg6QACg8hag3QgCgBgCABQgCAAgBACQgBACABACQAAACACABIAAAA").cp();
	this.shape_3.setTransform(13.5,25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("ABbh6QBUA5gBA+QgCA7hWBDQgCABAAADQAAABABACQABACADAAQABAAACgBQBbhHABg/QAChDhZg8QgCgBgCAAQgCAAgBACQgBACAAACQAAACACABIAAAAAhWhyQgBACABACQAAACACABQBSAugBAzQgCAzhWA7QgCABAAACQAAACABACQABACACAAQACAAACgBQBZg/ABg2QACg5hWgyQgCgBgCABQgCAAgBACIAAAAAithyQgCABgBACQgBACABACQAAACACABQBTAqgBAyQgCAxhXA7QgBABgBACQAAACABACQABACACAAQACAAACgBQBcg+ABg1QACg4hZguQgCgBgCAAIAAAAAAEh6QgCABgBACQgBABAAACQABACACABQBTAzAAA3QgDA2hVA+QgCABAAACQAAACABACQABACACAAQAAAAACgBQBdhBABg6QACg9hag2QgCgBgCAAIAAAA").cp();
	this.shape_4.setTransform(17.9,25.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AAvh9QBTA5gBA9QgBA8hXBDQgBABgBACQAAACABACQACABACABQACAAABgBQBbhHABhAQAChChZg8QgCgCgCABQgCAAgBACQgBACAAACQABACACABIAAAAACFiLQAAACACABQBUA/AABFQgCBChWBLQgCABAAADQAAACACABQABACACAAQACAAACgBQBahPABhGQABhJhZhDQgCgBgCAAQgCABgBABQgBACAAACIAAAAAh/h3QgCAAgBACQgBACAAACQABACABABQBSAtgBA0QgCAyhVA8QgCABgBACQAAACABACQABABACABQACAAACgBQBbg/ABg3QADg5hZgxQgCgBgBABIAAAAAjah1QgCABgBACQgBABABACQABACACABQBSArgBAyQgCAxhWA7QgCABgBACQAAACABACQABABACABQACAAACgBQBcg/ABg0QADg4hagvQgCgBgCABIAAAAAgnh9QgCABgBABQgBACABACQAAACACABQBSAzgBA3QgCA2hWA+QgBABgBACQAAACABACQACABACABQACAAABgBQBbhBABg6QACg9hYg2QgCgCgCABIAAAA").cp();
	this.shape_5.setTransform(22.4,25.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("ACyiWQBWBFAABMQgBBKhXBTQgBABAAACQAAACABACQABABADAAQACAAABgBQBahXABhNQAAhQhZhJQgCgBgCAAQgCAAgBACQgCABABACQAAACABACIAAAAAAEiJQgCABgBACQgBABAAACQAAACACACQBTA4AAA+QgCA7hUBDQgCACAAACQgBACACABQABACABAAQABABACgCQBbhGABhAQABhChZg9QgBgBgCAAIAAAAABYiNQAAACACABQBUA/AABEQgBBDhXBLQgBABAAACQgBACACACQABABACAAQACAAACgBQBahOABhHQABhJhZhCQgCgBgCAAQgCAAgBACQgBABAAADIAAAAAivh4QgBACAAACQABACACABQBRAuAAA0QgDAyhVA7QgCABAAACQgBACACACQABACACAAQACABABgCQBbg/ABg2QADg5hYgxQgCgCgCABQgCABgBABIAAAAAkGh3QgCAAgBACQgBACAAACQABACACABQBSArAAAyQgDAwhWA7QgCABAAACQgBACABACQABACADAAQACABABgBQBcg/ABg1QADg4haguQgCgBgBABIAAAAAhXh9QgBACABACQAAABACACQBUAygBA4QgCA2hXA9QgCABAAADQgBABACACQABACACAAQACABACgCQBahBABg6QACg9hYg2QgCgBgCABQgCAAgBACIAAAA").cp();
	this.shape_6.setTransform(26.9,25.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("ACFiYQBWBFAABMQgBBKhXBTQgBABAAADQAAACABABQABABADABQACgBABgBQBahWABhOQAAhQhZhJQgCgBgCAAQgCAAgBACQgCABABADQAAACABABIAAAAADhiuQgCAAgBACQgCABABADQAAABABACQBXBKAABTQgBBShXBdQgCABABACQAAACABACQACABACAAQACAAABgBQBbhhAAhVQAAhXhahOQgCgBgCAAIAAAAAgniKQgCAAgBACQgCABABADQAAACACABQBRA5AAA9QgCA8hUBDQgCABAAACQgBACACACQABABACABQACAAACgBQBZhHABhAQABhChXg9QgBgBgCABIAAAAAAriPQAAACACABQBUA/AABEQgBBDhXBLQgBABAAACQgBACACACQABABACABQACAAACgCQBahOABhGQABhJhZhDQgCgBgCAAQgCAAgBACQgBACAAACIAAAAAjch5QgBABAAACQABACACABQBRAuAAA0QgDAyhVA8QgCABAAACQgBACACABQABACACABQACAAABgBQBbhAABg2QADg5hYgxQgCgBgCAAQgCABgBACIAAAAAkzh5QgCAAgBACQgBACAAACQABACACABQBSArAAAyQgDAwhWA7QgCABAAADQgBACABABQABACADABQACAAABgBQBcg/ABg1QADg3hagvQgCgBgBABIAAAAAiEh/QgBACABACQAAACACABQBUAygBA4QgCA2hXA+QgCABAAACQgBACACABQABACACABQACAAACgBQBchCABg6QACg8hag3QgCgBgCABQgCAAgBACIAAAA").cp();
	this.shape_7.setTransform(31.4,26);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AENi5QgCAAgBABQgCACAAACQAAACACABQBYBOAABZQAABXhYBlQgCACAAABQAAADACABQACABACAAQACAAABgCQBbhnAAhbQAAhdhbhRQgCgBgCAAIAAAAABbigQgCAAgBABQgCACAAACQAAACACACQBVBFAABLQgBBLhWBTQgCABAAACQAAACACACQABABACAAQACAAACgBQBahXAAhNQABhQhZhJQgCgCgCABIAAAAAC0itQgCAAgBABQgCACAAACQAAACACABQBWBLAABTQAABRhXBdQgCACAAACQAAACACABQABACADAAQACAAABgCQBahgAAhVQABhYhahNQgCgBgCAAIAAAAAhViKQgCABgBABQgBACAAACQABACACABQBTA5gBA+QgBA7hXBDQgBACgBACQAAACABABQACACACAAQACABABgCQBZhGABhAQAChChXg9QgCgBgCAAIAAAAAAAiPQAAADAAABQBUA/AABEQgBBDhVBKQgCACAAACQAAACACABQABACABAAQABAAACgBQBahOABhHQABhJhZhCQgCgCgCABQgCAAAAACQAAABAAACIAAAAAkJh5QgBACAAACQABACABABQBSAugBAzQgCAzhVA7QgCABgBACQAAACABACQABACACAAQACABACgCQBbg/ABg2QADg5hZgyQgBgBgCABQgCABgBABIAAAAAlhh5QgCABgBACQgBACABACQABACACABQBSArgBAxQgCAxhWA7QgCABgBACQAAACABACQABACACAAQACABACgCQBcg+ABg1QADg4haguQgCgBgCAAIAAAAAixh+QgBACABABQAAACACABQBUAzgBA3QgCA2hYA+QgBABgBACQAAACABACQACACACAAQACABABgCQBdhBABg6QACg9hag2QgCgBgCAAQgCABgBACIAAAA").cp();
	this.shape_8.setTransform(35.9,25.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("AE6jEQgDAAgBABQgBACAAACQAAACABABQBZBTAABfQAABchZBrQgBACAAACQAAACACABQABABACAAQACAAACgCQBbhtAAhgQABhjhdhWQgBgBgCAAIAAAAADdivQBXBOAABZQAABXhYBlQgBACAAABQAAADACABQABABACAAQACAAACgCQBbhngBhbQAAhdhbhRQgBgBgCAAQgDAAgBABQgBACAAACQAAACACABIAAAAAAriVQBVBFAABLQgBBLhXBTQgBABAAACQAAACABACQACABACAAQACAAABgBQBbhXAAhNQABhQhahJQgCgCgCABQgCAAgBABQgBACAAACQAAACACACIAAAAACEijQBWBLAABTQgBBRhXBdQgBACAAACQAAACABABQACACACAAQACAAACgCQBahgAAhVQAAhYhahNQgCgBgCAAQgCAAgBABQgBACAAACQAAACACABIAAAAAiCiIQgCABgBABQgBACAAACQAAACACABQBUA5gBA+QgCA7hWBDQgCACAAACQAAACABABQABACACAAQACABACgCQBbhGABhAQAChChZg9QgCgBgCAAIAAAAAguiNQABADABABQBTA/gBBEQgBBDhUBKQgCACAAACQAAACABABQABACADAAQACAAABgBQBZhOAAhHQAChJhYhCQgBgCgCABQgCAAgCACQgBABAAACIAAAAAk3h3QgBACABACQAAACACABQBSAugBAzQgCAzhWA7QgCABAAACQAAACABACQABACACAAQACABACgCQBag/ACg2QACg5hYgyQgCgBgCABQgCABgBABIAAAAAmOh3QgCABgBACQgBACABACQAAACACABQBTArgBAxQgCAxhXA7QgCABAAACQgBACACACQABACACAAQACABACgCQBcg+ABg1QACg4hZguQgCgBgCAAIAAAAAjeh8QgBACAAABQABACABABQBUAzgBA3QgCA2hXA+QgCABAAACQAAACABACQABACACAAQACABACgCQBchBABg6QACg9hag2QgBgBgCAAQgCABgBACIAAAA").cp();
	this.shape_9.setTransform(40.5,25.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("AFqjPQgBgCgCAAQgCAAgCACQgBABAAACQAAACABACQCyCyiyDgQgCABABACQAAACACACQABABACAAQACgBACgBQC4jni5i4IAAAAAEMjCQgCAAgBACQgBABAAACQAAADABABQBZBTAABeQAABdhZBqQgBACAAACQAAACABABQACACACAAQACAAABgCQBchuAAhgQAAhihchXQgBgBgDAAIAAAAACyi1QgCAAgBACQgBABAAACQAAADABABQBYBOAABZQAABXhYBkQgBACAAACQAAACABABQACACACAAQACAAABgCQBbhoAAhaQAAhdhbhSQgCgBgCAAIAAAAAgBiTQBUBFAABMQgBBKhVBTQgBACAAACQAAACABABQACACABAAQABAAABgCQBahWABhOQABhQhahJQgCgBgCAAQAAAAgBACQgBACAAACQAAACABABIAAAAABWigQBXBKAABTQgBBShXBdQgBABAAACQAAADABABQACABACAAQACAAABgBQBbhhAAhVQAAhXhahOQgCgBgCAAQgCAAgBACQgBACAAACQAAACABABIAAAAAiviFQgCAAgBACQgCACABACQAAACACABQBTA5AAA9QgCA8hWBDQgCABAAACQgBACACACQABABACABQACAAACgBQBbhHABhAQABhChZg9QgBgBgCABIAAAAAhbiKQAAACACABQBVA/gBBEQgBBDhXBLQgBABAAACQAAACABACQABACACAAQACAAACgCQBZhOAAhGQABhJhXhDQgCgBgCAAQgCABgBABQgBACAAACIAAAAAlkh0QgBACAAABQABACACABQBRAuAAA0QgDAyhVA8QgCABAAACQgBACACABQABACACABQACAAABgBQBbg/ABg3QADg5hYgxQgCgBgCAAQgCABgBACIAAAAAm7h0QgCABgBABQgBACAAACQABACACABQBSArAAAyQgDAxhWA6QgCACAAACQgBACABABQACACACABQACAAABgBQBcg/ABg1QADg3hagvQgBgBgCABIAAAAAkMh6QgBACABACQAAACACABQBUAzgBA3QgCA2hXA+QgCABAAACQgBACACABQABACACABQACAAACgBQBchCABg6QACg8hag3QgCgBgCABQgCAAgBACIAAAA").cp();
	this.shape_10.setTransform(45,25.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("AGQjVQCyC/iyDtQgCABABACQAAADACABQABABACAAQACgBACgBQC3j0i4jFQgBgCgCAAQgCAAgCABQgBACAAACQAAACABACIAAAAAE9jNQgBgBgCAAQgCAAgCABQgBACAAACQAAACABABQCyCziyDfQgCACABACQAAACACABQABABACAAQACAAACgCQC4jmi5i5IAAAAADfi/QgCAAgBABQgBACAAACQAAACABABQBZBTAABfQAABchZBrQgBACAAACQAAACABABQACABACAAQACAAABgCQBchtAAhgQAAhjhchWQgBgBgDAAIAAAAACFiyQgCAAgBABQgBACAAACQAAACABABQBYBOAABZQAABXhYBlQgBABAAACQAAADABABQACABACAAQACAAABgCQBbhnAAhbQAAhdhbhRQgCgBgCAAIAAAAAguiQQBUBFAABLQgBBLhVBTQgBABAAACQAAACABACQACABACAAQACAAABgBQBYhXABhOQABhPhYhJQgCgCgCABQgCAAgBABQgBACAAACQAAACABACIAAAAAApieQBXBLAABTQgBBRhXBdQgBACAAACQAAACABABQACACACAAQACAAABgCQBbhgAAhVQAAhYhahNQgCgBgCAAQgCAAgBABQgBACAAACQAAACABABIAAAAAjciDQgCABgBABQgCACABACQAAACACABQBTA5AAA+QgCA7hWBDQgCACAAACQgBACACABQABACACAAQACAAACgBQBbhGABhAQABhChZg9QgBgBgCAAIAAAAAiIiIQAAADACABQBVA/gBBEQgBBDhXBKQgBACAAACQAAACABABQABACACAAQACAAACgBQBbhOAAhHQABhJhZhCQgCgCgCABQgCAAgBACQgBABAAACIAAAAAmRhyQgBACAAACQABACACABQBRAuAAAzQgDAzhVA7QgCABAAACQgBACACACQABACACAAQACABABgCQBbg/ABg2QADg5hYgyQgCgBgCABQgCAAgBACIAAAAAnohyQgCABgBACQgBACAAACQABACACABQBSArAAAxQgDAxhWA7QgCABAAACQgBACABACQACACACAAQACABABgCQBcg+ABg1QADg4haguQgBgBgCAAIAAAAAk5h3QgBABABACQAAACACABQBUAzgBA3QgCA2hXA+QgCABAAACQgBACACACQABACACAAQACABACgCQBchBABg6QACg9hag2QgCgBgCAAQgCABgBACIAAAA").cp();
	this.shape_11.setTransform(49.5,25.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("AG8jhQC1DNi1D2QgBABAAACQABADABABQACABACAAQACgBABgBQC6j9i6jSQgBgCgDAAQgCAAgBABQgCACAAACQAAACABABIAAAAAFhjXQAAADABABQCzDAizDsQgBACAAACQABACABABQACACACgBQACAAABgCQC4jzi4jGQgBgBgDAAQgCAAgBABQgCABAAACIAAAAAEQjKQgCgCgCAAQgCAAgBACQgCABAAACQAAACACACQCxCyiyDgQgBABAAACQABACABACQACABACAAQACgBABgBQC4jni4i4IAAAAACyi9QgCAAgCACQgBABAAACQAAADACABQBYBTABBeQAABdhaBqQgBACAAACQAAACACABQACACACAAQACAAABgCQBchuAAhgQAAhihchXQgCgBgCAAIAAAAABYiwQgCAAgCACQgBABAAACQAAADACABQBYBOAABZQgBBXhYBkQgBACAAACQAAACACABQABACACAAQADAAABgCQBbhoAAhaQAAhdhchSQgBgBgCAAIAAAAAhbiOQBVBFAABKQgBBMhWBTQgCACAAACQAAACACABQABACACAAQACAAACgCQBYhWAAhQQABhOhYhJQgBgBgCAAQgCAAgCACQgBACAAACQAAACACABIAAAAAgCibQBUBKAABRQAABUhWBdQgBABAAACQAAADACABQABABACAAQABAAABgBQBahhAAhXQABhVhbhOQgBgBgBAAQgBAAgCACQgBACAAACQAAACACABIAAAAAkKiAQgCAAgBACQgBACAAACQABACABABQBUA5gBA9QgBA8hXBDQgBABgBACQAAACABACQACABACABQACAAABgBQBbhHABhAQAChChZg9QgCgBgCABIAAAAAi1iFQAAACACABQBUA/AABDQgCBEhWBLQgCABAAACQAAACABACQACACACAAQACAAABgCQBbhOABhIQABhHhZhDQgCgBgCAAQgCABgBABQgCACABACIAAAAAm/hvQgBACABABQAAACACABQBSAugBA0QgCAyhWA8QgBABgBACQAAACABABQABACACABQACAAACgBQBbg/ABg3QACg5hYgxQgCgBgCAAQgCABgBACIAAAAAoWhvQgCABgBABQgBACABACQABACABABQBTArgBAyQgCAxhXA6QgBACgBACQAAACABABQABACACABQACAAACgBQBcg/ABg1QACg3hZgvQgCgBgCABIAAAAAlmh1QgBACAAACQABACACABQBUAzgBA3QgCA2hYA+QgBABgBACQAAACABABQABACACABQACAAACgBQBdhCABg6QACg8hag3QgCgBgCABQgCAAgBACIAAAA").cp();
	this.shape_12.setTransform(54,25);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF0000").s().p("AHqjrQC0DZi1D+QgBACAAACQABACACABQABACACgBQACAAABgCQC6kFi6jfQgBgBgCAAQgCAAgCABQgCABAAACQAAACACACIAAAAAE0jVQAAADACABQCyDAizDsQgBACAAACQABACABABQACACACgBQACAAABgCQC4jzi4jGQgBgBgCAAQgDAAgBABQgCABAAACIAAAAAGQjfQC0DNi1D2QgBABAAACQABADABABQACABACAAQACgBABgBQC6j9i6jSQgBgCgCAAQgCAAgCABQgCACAAACQAAACACABIAAAAADjjIQgCgCgCAAQgCAAgBACQgCABAAACQAAACACACQCxCyiyDgQgBABAAACQABACABACQACABACAAQACgBABgBQC4jni4i4IAAAAACFi7QgCAAgBACQgCABAAACQAAADACABQBZBTAABeQAABdhZBqQgCACAAACQAAACACABQACACACAAQACAAABgCQBchuAAhgQAAhihchXQgCgBgCAAIAAAAAAriuQgCAAgBACQgCABAAACQAAADACABQBYBOAABXQAABZhYBkQgCACAAACQAAACACABQACACACAAQACAAABgCQBbhoAAhcQAAhbhbhSQgCgBgCAAIAAAAAiIiMQBVBFAABKQgBBMhWBTQgCACAAACQAAACACABQABACACAAQACAAACgCQBahWAAhQQABhOhZhJQgCgBgCAAQgCAAgBACQgCACAAACQAAACACABIAAAAAgviZQBUBKAABRQAABUhVBdQgCABAAACQAAADACABQABABADAAQACAAABgBQBYhhAAhXQABhVhYhOQgCgBgCAAQgCAAgBACQgCACAAACQAAACACABIAAAAAk3h+QgCAAgBACQgBACAAACQABACACABQBTA5gBA8QgBA9hXBDQgBABgBACQAAACABACQACABACABQACAAABgBQBbhHABhBQAChBhZg9QgCgBgCABIAAAAAjiiDQAAACACABQBUA/AABCQgCBFhWBLQgCABAAACQAAACACACQABACACAAQACAAACgCQBahOABhIQABhHhZhDQgCgBgCAAQgCABgBABQgCACABACIAAAAAnrhtQgCACABABQABACABABQBSAugBA0QgCAyhVA8QgCABgBACQAAACABABQABACACABQACAAACgBQBbg/ABg3QACg5hYgxQgCgBgBAAQgCABgBACIAAAAApDhtQgCABgBABQgBACABACQABACACABQBSArgBAyQgCAxhWA6QgCACgBACQAAACABABQABACACABQACAAACgBQBcg/ABg1QACg3hZgvQgCgBgCABIAAAAAmThzQgBACABACQAAACACABQBUAzgBA3QgCA2hYA+QgBABgBACQAAACABABQABACADABQACAAABgBQBdhCABg6QACg8hag3QgCgBgCABQgCAAgBACIAAAA").cp();
	this.shape_13.setTransform(58.5,24.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF0000").s().p("AIVj2QAAADABABQC1Dii1EDQgBACAAACQABACABABQACABACAAQACAAABgCQC6kKi6jnQgBgCgCAAQgCAAgCABQgBABgBACIAAAAAG8jqQC1DZi1D+QgBACAAACQABACABABQACACACgBQACAAABgCQC6kEi6jfQgBgCgCAAQgCAAgCABQgCACAAABQAAADABABIAAAAAEHjTQAAACABABQCzDAizDsQgBACAAACQABACABABQACACACgBQACAAABgCQC4jzi4jGQgBgBgDAAQgCAAgBABQgCACAAACIAAAAAFijdQC1DMi1D2QgBACAAACQABACABABQACABACAAQACAAABgCQC6j8i6jTQgBgBgDgBQgCAAgBACQgCABAAACQAAACABACIAAAAAC2jHQgCgBgCgBQgCABgBABQgCABAAACQAAADACABQCxCziyDfQgBACAAABQABADABABQACABACAAQACAAABgCQC4jni4i4IAAAAABYi6QgCABgCABQgBACAAACQAAACACABQBYBTABBeQAABdhaBrQgBABAAACQAAACACACQACABACAAQACAAABgCQBchuAAhgQAAhihchWQgCgCgCAAIAAAAAAAitQgCABgCABQgBACAAACQAAACACABQBWBOAABXQgBBZhWBlQgBABAAACQAAACACACQABABACAAQABAAABgCQBbhoAAhcQAAhbhchRQgBgCAAAAIAAAAAi1iLQBVBGAABJQgBBMhWBTQgCACAAACQAAACACABQABACACAAQACAAACgCQBahWAAhQQABhOhahJQgBgBgCAAQgCABgCABQgBACAAACQAAACACABIAAAAAhciYQBWBKAABRQAABUhYBdQgBACAAACQAAACACABQABACACgBQADAAABgBQBYhhAAhXQABhVhZhNQgBgCgCAAQgCABgCABQgBACAAACQAAACACABIAAAAAlkh9QgCAAgBACQgBACAAACQABACABABQBUA5gBA7QgBA+hXBDQgBABgBACQAAACABACQACACACAAQACAAABgBQBbhHABhCQAChAhZg8QgCgBgCAAIAAAAAkPiCQAAACACABQBUA/AABDQgCBFhWBKQgCACAAACQAAACABABQACACACAAQACAAABgBQBbhPABhIQABhHhZhDQgCgBgCAAQgCABgBABQgCACABACIAAAAAoZhsQgBACABACQAAACACABQBSAtgBA0QgCAzhWA7QgBABgBACQAAACABACQABACACAAQACAAACgBQBbg/ABg3QACg4hYgyQgCgBgCABQgCAAgBACIAAAAApwhsQgCABgBACQgBACABABQABADABAAQBTArgBAyQgCAxhXA7QgBABgBACQAAACABACQABACACAAQACAAACgBQBcg+ABg1QACg4hZgvQgCAAgCAAIAAAAAnAhyQgBACAAACQABACACABQBUAzgBA3QgCA2hYA+QgBABgBACQAAACABACQABACACAAQADAAABgBQBdhBABg6QACg9hag2QgCgBgCAAQgCABgBABIAAAA").cp();
	this.shape_14.setTransform(63,24.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.envelopeclosedstatic = function() {
	this.initialize();

	// Layer 1
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000002").s().p("ACWAAQAhgSAjgZQABgBABgBICUD0QAAAAAAAAQATAaAIAbIsWAAQAHgbAUgaQAAAAAAAAICUj0QABAAABABQAkAZAgASIAAABQBSAqBEACQAAAAACAAQBCgCBRgqIABAAACRgIQhPAohAACQgCAAAAAAQhBgChQgpIAAAAQgggSgjgZQgEgDgDgCQg/gthHhEIAAgBQgXgVgJg6IMDAAQgJA6gWAVIAAABQhIBFhAAuQgDACgEACQgjAZggASIAAAAAFqijQAZgYAKg/IADAAIAAHnQgIgWgQgWIiTjzQA+guBHhDIAAAAAGJkEQgBgBAAABIsPAAQAAgBAAABIgNAAQgCAAgCABQgBABAAADIAAIAQAAACABABQACABACABIMpAAQACgBACgBQABgBAAgCIAAoAQAAgDgBgBQgCgBgCAAIgMAAAmLj6QAKA/AZAYIAAAAQBGBCA+AuIiUD0QgPAUgIAUIAAnjIAEAA").cp();
	this.shape_15.setTransform(1.5,0);

	// color
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#FFF4CC","#FFD200"],[0,1],29.1,-23,0.4,5.6).s().p("AGVEAIspAAIAAn/IMpAAIAAH/").cp();
	this.shape_16.setTransform(1.5,0.1);

	this.addChild(this.shape_16,this.shape_15);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-39.5,-26.1,82.1,52.4);


(lib.arrow2 = function() {
	this.initialize();

	// Layer 1
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AhPA7IBPh1IBQB1IifAA").cp();
	this.shape_17.setTransform(8,2.1);

	this.addChild(this.shape_17);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-3.8,16.1,12);


(lib.ID_s2_txt13 = function() {
	this.initialize();

	// Layer 1
	this.text_15 = new DOMObject({type:"TEXT",compId:"ID_s2_txt13",width:"80",expand:"down",align:"center"});
	this.text_15.setTransform(0,0.1);

	this.addChild(this.text_15);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0.1,64.2,17.5);


(lib.ID_s2_txt12 = function() {
	this.initialize();

	// Layer 1
	this.text_15 = new DOMObject({type:"TEXT",compId:"ID_s2_txt12",width:"80",expand:"down",align:"center"});
	this.text_15.setTransform(30,0.1);

	this.addChild(this.text_15);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0.1,64.2,17.5);


(lib.ID_s2_txt04 = function() {
	this.initialize();

	// Layer 1
	this.text_16 = new DOMObject({type:"TEXT",compId:"ID_s2_txt04",width:"80",expand:"up",align:"center"});
	this.text_16.setTransform(0,0);

	this.addChild(this.text_16);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,64.2,17.5);


(lib.ID_s2_txt02 = function() {
	this.initialize();

	// Layer 1
	this.text_17 = new DOMObject({type:"TEXT",compId:"ID_s2_txt02",width:"80",expand:"up",align:"center"});
	this.text_17.setTransform(0,0);

	this.addChild(this.text_17);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,64.2,17.5);


(lib.ID_s2_txt01 = function() {
	this.initialize();

	// Layer 1
	this.text_18 = new DOMObject({type:"TEXT",compId:"ID_s2_txt01",width:"100",expand:"up",align:"center"});
	this.text_18.setTransform(-0.3,0);

	this.addChild(this.text_18);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.3,0,64.2,17.5);


(lib.ID_s1_txt13 = function() {
	this.initialize();

	// Layer 1
	this.text_19 = new DOMObject({type:"TEXT",compId:"ID_s1_txt13",width:"100",expand:"down",align:"center"});
	this.addChild(this.text_19);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,64.2,17.5);


(lib.ID_s1_txt12 = function() {
	this.initialize();

	// Layer 1
	this.text_20 = new DOMObject({type:"TEXT",compId:"ID_s1_txt12",width:"120",expand:"down",align:"center"});
	this.text_20.setTransform(1.1,0.6);

	this.addChild(this.text_20);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(1.1,0.6,64.2,17.5);


(lib.ID_s1_txt04 = function() {
	this.initialize();

	// Layer 1
    this.text_21 = new DOMObject({type:"TEXT",compId:"ID_s1_txt04",width:"80",expand:"up",align:"center"});
	this.addChild(this.text_21);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,64.2,17.5);


(lib.ID_s1_txt03 = function() {
	this.initialize();

	// Layer 1
     this.text_22 = new DOMObject({type:"TEXT",compId:"ID_s1_txt03",width:"80",expand:"up",align:"center"});
	this.text_22.setTransform(0,0);

	this.addChild(this.text_22);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.1,1.4,64.2,17.5);


(lib.ID_s1_txt02 = function() {
	this.initialize();

	// Layer 1
	this.text_23 = new DOMObject({type:"TEXT",compId:"ID_s1_txt02",width:"80",expand:"up",align:"center"});
	this.text_23.setTransform(0,0);

	this.addChild(this.text_23);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,64.2,17.5);


(lib.ID_s1_txt01 = function() {
	this.initialize();

	// Layer 1
	this.text_24 = new DOMObject({type:"TEXT",compId:"ID_s1_txt01",width:"100",expand:"up",align:"center"});
	this.text_24.setTransform(0,0);

	this.addChild(this.text_24);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.6,1.4,64.2,17.5);


(lib.chillyweather = function() {
	this.initialize();

	// Layer 3
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#B9C0D0").s().p("Ah/DrQgMAMAAARQAAAQAMAMQAMAMAQAAQARAAAMgMQALgMAAgQQAAgRgLgMQgMgLgRAAQgQAAgMALIAAAAAgnjnQABAeAVAVQATAVAeAAQAdAAAVgVQAWgVAAgeQAAgdgWgVQgVgWgdAAQgeAAgTAWQgVAVgBAdIAAAAAB5hUQgTgSgaAAQgbAAgTASQgTATABAbQgBAaATARQATATAbAAQAaAAATgTQASgRABgaQgBgbgSgTIAAAAAAxBiQgQgRgXAAQgVAAgRARQgQAQAAAXQAAAXAQARQARAQAVAAQAXAAAQgQQARgRAAgXQAAgXgRgQIAAAA").cp();
	this.shape_18.setTransform(89.8,170.7);

	// Layer 2
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#A7A5A6").s().p("ALXnHQCEBhgqDbQDWA4gkDlQgjDjiOgDQAIBygaBAQgeBGhTAoQhVAqhYggQhMgch1hmQh6DdjvgOQjxgOiJj3QiTDFidhxQichyAtirQg/gEgqg0Qg2hEgGhbQgHhsAmgzQAzhGBtgYQhmjCCSh8QCSh9CaBxQB0j4EpAUQEmATB3ElQB3hNBQgFQBPgFBWA/IAAAA").cp();
	this.shape_19.setTransform(29.6,74.6);

	this.addChild(this.shape_19,this.shape_18);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-70.3,0,200.1,201.1);


(lib.computerIPbasedVideo = function() {
	this.initialize();

	// camera
	this.instance_3 = new lib.computer_IP_based_Video();
	this.instance_3.setTransform(0,-77.9,0.626,0.623);

	this.addChild(this.instance_3);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-77.9,89.5,79.8);


(lib.computer_1 = function() {
	this.initialize();

	// shading
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#57BDB4").s().p("AAAABIABgBIAAABIgBAA").cp();
	this.shape_19.setTransform(81.7,0.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["rgba(0,0,0,0.153)","rgba(0,0,0,0.353)"],[0,1],-2,0,2.1,0).s().p("AgSA1IgCACIAAgdIAnhQIACABIAAA2IgnA0").cp();
	this.shape_20.setTransform(83.7,-5.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#007A68").s().p("AAAAAIAAAAIAAABIAAgB").cp();
	this.shape_21.setTransform(85.8,-10.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#80CDC6").s().p("AAAABIAAgBIAAAAIAAAB").cp();
	this.shape_22.setTransform(85.9,-10.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["rgba(0,0,0,0.153)","rgba(0,0,0,0.353)"],[0,1],-3.5,0,3.7,0).s().p("AAkhBIAAA8IhHBHIAAggIBHhj").cp();
	this.shape_23.setTransform(67.2,-6.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["rgba(255,255,255,0.251)","rgba(0,0,0,0.153)"],[0,1],0,4.2,0,-4.1).s().p("AAaAqIhdAAIAqhTIAuAAQAAABABABQAAAAABAAQAAAAABAAQAAAAAAgBIAAgBIAtAAIgCADIgpBQ").cp();
	this.shape_24.setTransform(79,-6.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["rgba(0,0,0,0.153)","rgba(0,0,0,0.353)"],[0,1],-6.2,0,6.4,0).s().p("Ag+BVIAAgqIAiAAIAAgiIBbhdIAAAiIgiAjIAAAIQgBAAAAAAQgBAAAAABQAAABABAAQAAAAABAAIAAARIhHBJIgUAA").cp();
	this.shape_25.setTransform(68.6,-21.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.lf(["rgba(0,0,0,0.153)","rgba(0,0,0,0.353)"],[0,1],-1.8,0,2,0).s().p("AAEALIgWgUIAlAAIgEADIgLAR").cp();
	this.shape_26.setTransform(65.3,-25.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(0,0,0,0.251)").s().p("AjmgTIHNAAIAAAnInNAAIAAgn").cp();
	this.shape_27.setTransform(39.1,-15.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["rgba(255,255,255,0.251)","rgba(0,0,0,0.102)"],[0,1],0,5.1,0,-4.9).s().p("AjCgxIHNAAIAUAAIBCAAIhIBjIp5AAIBIhjIBWAA").cp();
	this.shape_28.setTransform(35.5,-8.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(0,0,0,0.082)").s().p("AC8BQIAAAgIp6AAIAAggIABAAIJ5AAAFuABIAAABQAAAAgBABQAAAAAAAAQgBAAAAgBQgBAAAAgBQgDgDgFgHQgFgIAJgFQAHgFATgDIAlgPIAAAAQAMgHAFgHQABgBABgBQADgFAAgFQgBgdhugHQgdgCglgBQAAAAgBAAQgBgBAAAAQAAgBABAAQABgBAAAAQAmABAeACQBvAIABAfQAAAFgDAGQgBABAAABQgHAHgNAJIAAAAIgmAPQgSADgHAFQgFADADAFQAFAIADAEIAAAAAERBVIBfAAIAAAdIhfAAIAAgd").cp();
	this.shape_29.setTransform(44.8,-11.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.lf(["rgba(255,255,255,0.251)","rgba(0,0,0,0.153)"],[0,1],0,4.7,0,-4.6).s().p("ADlAGIALgQIAEgEIANAAIAAgFIAdgbIAjAAIhcBdIolAAIA9g9IAXAUIHRAA").cp();
	this.shape_30.setTransform(42.8,-25.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(0,0,0,0.153)").s().p("ADdgJIAXAUInQAAIgXgUIHQAA").cp();
	this.shape_31.setTransform(41.2,-25.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.lf(["rgba(255,255,255,0.251)","rgba(0,0,0,0.153)"],[0,1],0,1.7,0,-1.5).s().p("AD/AQIpAAAICSgfIHxAAIhDAf").cp();
	this.shape_32.setTransform(43,-72.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.lf(["rgba(0,0,0,0.153)","rgba(0,0,0,0.353)"],[0,1],-3.2,0,3.4,0).s().p("AAhjnIAAGQIgkAkIgdAbIAAmtIBBgi").cp();
	this.shape_33.setTransform(71.9,-50.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(255,255,255,0.4)").s().p("AD6h+IAAD+QAAAvgvABImTAAQgigBgLgXQgEgKAAgOIAAj+QAAgPAEgKQALgXAiAAIGTAAQAvAAAAAwIAAAA").cp();
	this.shape_34.setTransform(39.4,-48.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(0,0,0,0.012)").s().p("AD5iqQAAgxgvAAImTAAQgiAAgLAYQgEAKAAAPIAAD+QAAAOAEAKQALAXAiAAIGTAAQAvAAAAgvIAAj+AEiClIAAAFIgNAAIgnAAInQAAIg8AAIAAmzIJAAAIAAGuADjEKInMAAIg4AAIAAgiIACAAIIkAAIAAAiIgiAA").cp();
	this.shape_35.setTransform(39.5,-44);

	// shape
	this.instance_4 = new lib.computer();
	this.instance_4.setTransform(0,-73.9,0.626,0.624);

	this.addChild(this.instance_4,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-73.9,89.5,74.2);


(lib.movie_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// arrows
	this.instance_5 = new lib.arrow2("synched",0);
	this.instance_5.setTransform(408.1,30,0.538,0.538,90,0,0,7.9,2);

	this.instance_6 = new lib.arrow2("synched",0);
	this.instance_6.setTransform(482.7,30,0.538,0.538,90,0,0,7.9,2);

	this.instance_7 = new lib.arrow2("synched",0);
	this.instance_7.setTransform(335,30,0.538,0.538,90,0,0,7.9,2);

	this.instance_8 = new lib.arrow2("synched",0);
	this.instance_8.setTransform(235.2,30,0.538,0.538,90,0,0,7.9,2);

	this.instance_9 = new lib.arrow2("synched",0);
	this.instance_9.setTransform(152.3,30,0.538,0.538,90,0,0,7.9,2);

	this.instance_10 = new lib.arrow2("synched",0);
	this.instance_10.setTransform(73.9,30,0.538,0.538,90,0,0,7.9,2.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5}]}).wait(215));

	// lazytext
	this.instance_11 = new lib.ID_s2_txt04();
	this.instance_11.setTransform(505.9,8.5,1,1,0,0,0,48,8.5);

	this.instance_12 = new lib.Symbol1();
	this.instance_12.setTransform(420,8.5,1,1,0,0,0,48,8.5);

	this.instance_13 = new lib.ID_s2_txt02();
	this.instance_13.setTransform(173.7,8.5,1,1,0,0,0,48,8.5);

	this.instance_14 = new lib.ID_s2_txt01();
	this.instance_14.setTransform(72,8.5,1,1,0,0,0,48,8.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11}]}).wait(215));

	// text7
	this.instance_15 = new lib.text7s2();
	this.instance_15.setTransform(527,28.5,1,1,0,0,0,37,8.5);
	this.instance_15.shadow = new cjs.Shadow("rgba(101,44,138,1)",0,0,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_15}]}).wait(215));

	// text6
	this.instance_16 = new lib.text6s2();
	this.instance_16.setTransform(445,28.5,1,1,0,0,0,32,8.5);
	this.instance_16.shadow = new cjs.Shadow("rgba(101,44,138,1)",0,0,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_16}]}).wait(215));

	// text5
	this.instance_17 = new lib.text5s2();
	this.instance_17.setTransform(373,28.5,1,1,0,0,0,32,8.5);
	this.instance_17.shadow = new cjs.Shadow("rgba(101,44,138,1)",0,0,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_17}]}).wait(215));

	// text4
	this.instance_18 = new lib.text4s2();
	this.instance_18.setTransform(288,28.5,1,1,0,0,0,45.5,8.5);
	this.instance_18.shadow = new cjs.Shadow("rgba(101,44,138,1)",0,0,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_18}]}).wait(215));

	// text3
	this.instance_19 = new lib.text3s2();
	this.instance_19.setTransform(199,28.5,1,1,0,0,0,37,8.5);
	this.instance_19.shadow = new cjs.Shadow("rgba(101,44,138,1)",0,0,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_19}]}).wait(215));

	// text2
	this.instance_20 = new lib.text2s2();
	this.instance_20.setTransform(115,28.5,1,1,0,0,0,34.8,8.5);
	this.instance_20.shadow = new cjs.Shadow("rgba(101,44,138,1)",0,0,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_20}]}).wait(215));

	// text1
	this.instance_21 = new lib.text1s2();
	this.instance_21.setTransform(34.8,28.5,1,1,0,0,0,34.8,8.5);
	this.instance_21.shadow = new cjs.Shadow("rgba(101,44,138,1)",0,0,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_21}]}).wait(215));

	// camera light
	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FF0000").s().p("AgPAQQgHgHAAgJQAAgJAHgGQAGgHAJAAQAJAAAHAHQAHAGAAAJQAAAJgHAHQgHAHgJAAQgJAAgGgHIAAAA").cp();
	this.shape_36.setTransform(158.9,121.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FF0000").s().p("AgPAQQgHgHAAgJQAAgJAHgGQAHgHAIAAQAJAAAHAHQAHAGAAAJQAAAJgHAHQgHAHgJAAQgIAAgHgHIAAAA").cp();
	this.shape_37.setTransform(158.8,121.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FF0000").s().p("AAAAXQgIAAgHgHQgHgHAAgJQAAgJAHgGQAHgHAIAAQAJAAAHAHQAHAGAAAJQAAAJgHAHQgHAHgJAAIAAAA").cp();
	this.shape_38.setTransform(158.8,121.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_36}]},14).to({state:[]},2).to({state:[{t:this.shape_37}]},2).to({state:[]},2).to({state:[{t:this.shape_38}]},2).to({state:[]},2).to({state:[{t:this.shape_37}]},2).to({state:[]},7).wait(182));

	// Layer11
	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#9BB4B7").s().p("AD9hyQAAhAhBAAIl4AAQhAAAAABAIAADlQAABABAAAIF4AAQBBAAAAhAIAAjl").cp();
	this.shape_39.setTransform(392.3,261.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_39}]}).to({state:[]},152).wait(63));

	// computer 2 screen
	this.instance_21 = new lib.sunset_compy_screen();
	this.instance_21.setTransform(367.2,243.4,0.771,0.784,0,0,0,27.4,24.7);
	this.instance_21.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(152).to({alpha:1},0).wait(63));

	// Layer10
	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#9BB4B7").s().p("AC8iyIl4AAQhAAAAABAIAADlQAABABAAAIF4AAQBBAAAAhAIAAjlQAAhAhBAAIAAAA").cp();
	this.shape_40.setTransform(157.4,148.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_40}]}).to({state:[]},33).wait(182));

	// computer1 screen
	this.instance_22 = new lib.sunset_compy_screen();
	this.instance_22.setTransform(132.2,129.6,0.771,0.784,0,0,0,27.4,24.7);
	this.instance_22.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(33).to({alpha:1},0).wait(182));

	// computer 2
	this.instance_24 = new lib.computer_1();
	this.instance_24.setTransform(354.5,309.2,1,1,0,0,0,1.5,-0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_24}]}).wait(215));

	// envelope
	this.instance_25 = new lib.envelopeclosedstatic();
	this.instance_25.setTransform(173.1,163.6,0.36,0.36,0,0,0,18.8,21.6);
	this.instance_25.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(56).to({alpha:1},5).to({x:396.6,y:277.3},65).wait(89));

	// computer 1
	this.instance_26 = new lib.computerIPbasedVideo();
	this.instance_26.setTransform(119.5,195.2,1,1,0,0,0,1.5,-0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_26}]}).wait(215));

	// labels
	this.instance_28 = new lib.ID_s2_txt13();
	this.instance_28.setTransform(427.7,323.6,1,1,0,0,0,68,8.5);
	this.instance_28.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(214).to({alpha:1},0).wait(89));

	// labels
	this.instance_27 = new lib.ID_s2_txt12();
	this.instance_27.setTransform(155.9,204.5,1,1,0,0,0,68,8.5);
	this.instance_27.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(14).to({alpha:1},0).wait(112).to({alpha:0},0).to({_off:true},89).wait(88));


	// line
	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#010000").ss(2,1,1).p("Ay0pQMAlqASh");
	this.shape_39.setTransform(280.9,218.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_39}]}).wait(215));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.6,1.6,549.4,308.6);


(lib.movie_1 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{},true);

	// arrows
	this.instance_28 = new lib.arrow2("synched",0);
	this.instance_28.setTransform(408.1,30,0.538,0.538,90,0,0,7.9,2);

	this.instance_29 = new lib.arrow2("synched",0);
	this.instance_29.setTransform(482.7,30,0.538,0.538,90,0,0,7.9,2);

	this.instance_30 = new lib.arrow2("synched",0);
	this.instance_30.setTransform(335,30,0.538,0.538,90,0,0,7.9,2);

	this.instance_31 = new lib.arrow2("synched",0);
	this.instance_31.setTransform(235.2,30,0.538,0.538,90,0,0,7.9,2);

	this.instance_32 = new lib.arrow2("synched",0);
	this.instance_32.setTransform(152.3,30,0.538,0.538,90,0,0,7.9,2);

	this.instance_33 = new lib.arrow2("synched",0);
	this.instance_33.setTransform(73.9,30,0.538,0.538,90,0,0,7.9,2.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28}]}).wait(215));

	// lazytext
	this.instance_34 = new lib.ID_s1_txt04();
	this.instance_34.setTransform(505.9,8.5,1,1,0,0,0,48,8.5);

	this.instance_35 = new lib.ID_s1_txt03();
	this.instance_35.setTransform(420,8.5,1,1,0,0,0,48,8.5);

	this.instance_36 = new lib.ID_s1_txt02();
	this.instance_36.setTransform(173.7,8.5,1,1,0,0,0,48,8.5);

	this.instance_37 = new lib.ID_s1_txt01();
	this.instance_37.setTransform(72,8.5,1,1,0,0,0,48,8.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34}]}).wait(215));

	// text7
	this.instance_38 = new lib.text7s1();
	this.instance_38.setTransform(527,28.5,1,1,0,0,0,37,8.5);
	this.instance_38.shadow = new cjs.Shadow("rgba(101,44,138,1)",0,0,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_38}]}).wait(215));

	// text6
	this.instance_39 = new lib.text6s1();
	this.instance_39.setTransform(445,28.5,1,1,0,0,0,32,8.5);
	this.instance_39.shadow = new cjs.Shadow("rgba(101,44,138,1)",0,0,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_39}]}).wait(215));

	// text5
	this.instance_40 = new lib.text5s1();
	this.instance_40.setTransform(373,28.5,1,1,0,0,0,32,8.5);
	this.instance_40.shadow = new cjs.Shadow("rgba(101,44,138,1)",0,0,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_40}]}).wait(215));

	// text4
	this.instance_41 = new lib.text4s1();
	this.instance_41.setTransform(288,28.5,1,1,0,0,0,45.5,8.5);
	this.instance_41.shadow = new cjs.Shadow("rgba(101,44,138,1)",0,0,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_41}]}).wait(215));

	// text3
	this.instance_42 = new lib.text3s1();
	this.instance_42.setTransform(199,28.5,1,1,0,0,0,37,8.5);
	this.instance_42.shadow = new cjs.Shadow("rgba(101,44,138,1)",0,0,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_42}]}).wait(215));

	// text2
	this.instance_43 = new lib.text2s1();
	this.instance_43.setTransform(115,28.5,1,1,0,0,0,34.8,8.5);
	this.instance_43.shadow = new cjs.Shadow("rgba(101,44,138,1)",0,0,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_43}]}).wait(215));

	// text1
	this.instance_44 = new lib.text1s1();
	this.instance_44.setTransform(34.8,28.5,1,1,0,0,0,34.8,8.5);
	this.instance_44.shadow = new cjs.Shadow("rgba(101,44,138,1)",0,0,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_44}]}).wait(215));

	// text woman
	this.instance_45 = new lib.ID_s1_txt12();
	this.instance_45.setTransform(181.1,400,1,1,0,0,0,68,8.5);
	this.instance_45.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_45).wait(9).to({alpha:1},0).wait(206));

	// text man
	this.instance_46 = new lib.ID_s1_txt13();
	this.instance_46.setTransform(347,400,1,1,0,0,0,68,8.5);
	this.instance_46.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_46).wait(183).to({alpha:1},0).wait(32));

	// Layer 5
	this.instance_47 = new lib.signalpulse();
	this.instance_47.setTransform(204.3,174.8);
	this.instance_47.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_47).wait(24).to({alpha:1},0).wait(133).to({alpha:0},0).wait(58));

	// Layer 6
	this.instance_48 = new lib.sunset();
	this.instance_48.setTransform(540.9,222.1,0.5,0.5,0,0,0,400,300);
	this.instance_48.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_48).wait(171).to({alpha:1},0).wait(44));

	// Layer 7
		this.instance_48 = new lib.chillyweather();
	this.instance_48.setTransform(540.9,222.1,0.5,0.5,0,0,0,400,300);
	this.instance_48.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_48).wait(4).to({alpha:1},0).wait(167).to({alpha:0},12).wait(32));

	// Layer 8
	this.instance_50 = new lib.sunset();
	this.instance_50.setTransform(374.6,230.5,0.5,0.5,0,0,0,400,300);
	this.instance_50.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_50).wait(4).to({alpha:1},5).wait(206));

	// Layer 2
	this.instance_51 = new lib.boygirlpic();
	this.instance_51.setTransform(126.4,155.3,1.204,1.204);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_51}]}).wait(215));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,-2.4,550.2,437.2);


(lib.slide_2 = function() {
	this.initialize();

	// anim2
	this.anim2 = new lib.movie_2();
	this.anim2.setTransform(222.2,49.1,0.78,0.78,0,0,0,281.9,27.7);

	this.addChild(this.anim2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(2.7,28.7,428.5,240.6);


(lib.slide_1 = function() {
	this.initialize();

	// anim1
	this.anim1 = new lib.movie_1();
	this.anim1.setTransform(51.2,-9.7,0.78,0.78,0,0,0,62.7,-47.9);

	this.addChild(this.anim1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(2.3,25.6,429.2,340.9);


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
p.nominalBounds = new cjs.Rectangle(2.3,25.6,429.2,340.9);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;