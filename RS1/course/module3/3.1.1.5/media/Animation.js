(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.classesmediaMediaObject = function() {
	this.initialize();

	// main
	this.instance = new lib.Main();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-268.3,46.4,1041.2,297.2);


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


(lib.envelope_closed_static = function() {
	this.initialize(img.envelope_closed_static);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,123,79);


(lib.sunset8 = function() {
	this.initialize(img.sunset8);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,300);


(lib.WhiteShade = function() {
	this.initialize(img.WhiteShade);




}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1040,129);

 


(lib.ID_s1_txt03 = function() {
	this.initialize();

	// Layer 1
	//this.text = new cjs.Text("ID_s1_txt03", "11px Arial", "#393536");
	this.text = new DOMObject({type:"TEXT",compId:"ID_s1_txt03",width:"101.05",expand:"down",align:"center"});

 

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,62.8,16.2);


(lib.ID_s1_txt02 = function() {
	this.initialize();

	// Layer 1
	//this.text_1 = new cjs.Text("ID_s1_txt02", "11px Arial", "#393536");
	this.text_1 = new DOMObject({type:"TEXT",compId:"ID_s1_txt02",width:"140.85",expand:"down",align:"center"});
	this.text_1.lineHeight = 13;

	this.addChild(this.text_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,62.8,16.2);


(lib.computer_camera = function() {
	this.initialize();

	// lens
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(23,23,23,0.153)","rgba(255,255,255,0.251)","rgba(255,255,255,0.251)","rgba(0,0,0,0.153)","rgba(0,0,0,0.353)","rgba(0,0,0,0.251)"],[0,0.165,0.286,0.655,0.945,1],-1,-0.6,1.6,2).s().p("AAMAVQADgJAAgCQAAgDAAgCQgCgFgGgGQgFgGgGgBQgCgBgDAAQgFgBgEABIAAABQgCAAgBAAQABgBABAAQABAAAEgDQAFgDAJABQAIAAAHAHQAHAHAAAHQAAAHgEAFIgGAH").cp();
	this.shape.setTransform(5.6,-4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.302)").s().p("AAAgSQACABACAAQAGACAEAEQAEAFACAFQAAABABABQAAACAAADQgBABAAABQgBABgBACQgCABgCACQgCACgCABQgFACgFAAQgHgBgGgGQgGgGAAgGQAAgIAGgFQAAgBABAAQABAAABgBQABgBACgBQABAAAAAAIABAAQADgBACAAIAAAA").cp();
	this.shape_1.setTransform(4.6,-3.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(0,0,0,0.153)","rgba(0,0,0,0.353)"],[0,1],-0.2,-1.8,-0.5,-3.4).s().p("AAAgSQgCAAgDABIgBAAQAAAAgBAAQgCABgBABQgBABgBAAQgBAAAAABQgGAFAAAIQAAAGAGAGQAGAGAHABQAFAAAFgCQACgBACgCQACgCACgBQABgCABgBQAAgBABgBQAAgDAAgCQgBgBAAgBQgCgFgEgFQgEgEgGgCQgCAAgCgBIAAAAAAXANIgBAAQgCADgCACQgDACgCABQgGADgHgBQgJgBgIgHQgHgIAAgIQAAgJAHgHQAAAAACgBQAAAAABgBQACgBACgBQABAAABAAIABgBQADgBAEABQACAAADABQAHABAGAGQAFAGACAHQABABAAACQgBACgCAJIAAAA").cp();
	this.shape_2.setTransform(4.6,-3.2);

	// camera shading
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(255,255,255,0.251)","rgba(0,0,0,0.153)"],[0,1],0.5,6.4,0.5,-2).s().p("AAzgjIAABHIhlAAIAAhHIBlAA").cp();
	this.shape_3.setTransform(5.1,-3.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["rgba(255,255,255,0.251)","rgba(0,0,0,0.153)"],[0,1],-3.1,0.6,-3.1,-4.4).s().p("Ag+AIIAVgPIBoAAIgZAPIhkAA").cp();
	this.shape_4.setTransform(6.4,-8.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["rgba(0,0,0,0.153)","rgba(0,0,0,0.353)"],[0,1],-0.6,1.1,3.7,1.9).s().p("AgLAtIAAhHIAXgSIAABCIgXAX").cp();
	this.shape_5.setTransform(11.5,-4.4);

	// camera shape
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00918E").s().p("AA/gsIhoAAIgVASIAABHIBkAAIAZgXIAAhC").cp();
	this.shape_6.setTransform(6.4,-4.4);

	this.addChild(this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-9,12.8,9.1);


(lib.sunset_comp_screen = function() {
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


(lib.sunset_1 = function() {
	this.initialize();

	// Layer 3
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#999999").s().p("AAojnQgBAegVAVQgTAVgdAAQgeAAgVgVQgWgVABgeQgBgdAWgVQAVgWAeAAQAdAAATAWQAVAVABAdIAAAAAh3hUQASgSAbAAQAaAAATASQATATAAAbQAAAagTARQgTATgaAAQgbAAgSgTQgTgRgBgaQABgbATgTIAAAAAAtCJQAAAXgQARQgRAQgVAAQgXAAgQgQQgRgRAAgXQAAgXARgQQAQgRAXAAQAVAAARARQAQAQAAAXIAAAAABHDrQAMgLARAAQAQAAAMALQAMAMAAARQAAAQgMAMQgMAMgQAAQgRAAgMgMQgLgMAAgQQAAgRALgMIAAAA").cp();
	this.shape_7.setTransform(-30.1,170.7);

	// Layer 2
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#999999").s().p("ALXnHQCEBhgqDbQDWA4gkDlQgjDjiOgDQAIBygaBAQgeBGhTAoQhVAqhYggQhMgch1hmQh6DdjvgOQjxgOiJj3QiTDFidhxQichyAtirQg/gEgqg0Qg2hEgGhbQgHhsAmgzQAzhGBtgYQhmjCCSh8QCSh9CaBxQB0j4EpAUQEmATB3ElQB3hNBQgFQBPgFBWA/IAAAA").cp();
	this.shape_8.setTransform(29.6,74.6);

	this.addChild(this.shape_8,this.shape_7);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-70.3,0,200.1,201.1);


(lib.sunset = function() {
	this.initialize();

	// Layer 3
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CC4E14").s().p("AAojnQgBAegVAVQgTAVgdAAQgeAAgVgVQgWgVABgeQgBgdAWgVQAVgWAeAAQAdAAATAWQAVAVABAdIAAAAAh3hUQASgSAbAAQAaAAATASQATATAAAbQAAAagTARQgTATgaAAQgbAAgSgTQgTgRgBgaQABgbATgTIAAAAAAtCJQAAAXgQARQgRAQgVAAQgXAAgQgQQgRgRAAgXQAAgXARgQQAQgRAXAAQAVAAARARQAQAQAAAXIAAAAABHDrQAMgLARAAQAQAAAMALQAMAMAAARQAAAQgMAMQgMAMgQAAQgRAAgMgMQgLgMAAgQQAAgRALgMIAAAA").cp();
	this.shape_9.setTransform(-30.1,170.7);

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("ALXnHQCEBhgqDbQDWA4gkDlQgjDjiOgDQAIBygaBAQgeBGhTAoQhVAqhYggQhMgch1hmQh6DdjvgOQjxgOiJj3QiTDFidhxQichyAtirQg/gEgqg0Qg2hEgGhbQgHhsAmgzQAzhGBtgYQhmjCCSh8QCSh9CaBxQB0j4EpAUQEmATB3ElQB3hNBQgFQBPgFBWA/IAAAA").cp();
	mask_1.setTransform(29.6,74.6);

	// Layer 1
	this.instance_1 = new lib.sunset8();
	this.instance_1.setTransform(-70.7,-0.7,0.5,0.5);

	this.instance_1.mask = mask_1;
	this.addChild(this.instance_1,this.shape_9);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-70.7,-0.7,200,201.9);


(lib.signalpulse = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// Layer 1
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("AgohkQBRArgBAyQgCAxhVA7QgBABgBACQAAACABACQABABACABQACAAACgBQBag+ABg1QACg4hXgvQgCAAgCAAQgCABgBACQgBACABABQABACABABIAAAA").cp();
	this.shape_10.setTransform(4.5,24.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("AAEhnQBRAuAAAzQgDAzhTA7QgCABAAACQgBACACACQABACABAAQABAAABgBQBbg/ABg2QADg5hYgyQgCgBgCABQgCAAgBACQgBACAAACQABACACABIAAAAAhWhrQgBACAAACQABACACABQBSArAAAxQgDAxhWA7QgCABAAACQgBACABACQACACACAAQACABABgCQBag+ABg1QADg4hYguQgBgBgCAAQgCABgBACIAAAA").cp();
	this.shape_11.setTransform(9,24.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("AgphwQgCACABACQABACABABQBQAugBA0QgCAyhTA7QgCACgBABQAAACABACQABACACAAQACABACgCQBZg/ABg2QACg5hWgxQgCgBgBAAQgCABgBABIAAAAAiBhmQBSArgBAyQgCAwhWA7QgCABgBACQAAACABACQABACACAAQACABACgBQBcg/ABg1QACg3hZgvQgCgBgCABQgCAAgBACQgBACABACQABACACABIAAAAAAvhuQBUAygBA4QgCA2hYA9QgBACgBACQAAACABABQABACADAAQACABABgCQBdhBABg6QACg8hag3QgCgBgCABQgCAAgBACQgBACABACQAAACACABIAAAA").cp();
	this.shape_12.setTransform(13.5,25);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF0000").s().p("ABbh6QBUA5gBA+QgCA7hWBDQgCABAAADQAAABABACQABACADAAQABAAACgBQBbhHABg/QAChDhZg8QgCgBgCAAQgCAAgBACQgBACAAACQAAACACABIAAAAAhWhyQgBACABACQAAACACABQBSAugBAzQgCAzhWA7QgCABAAACQAAACABACQABACACAAQACAAACgBQBZg/ABg2QACg5hWgyQgCgBgCABQgCAAgBACIAAAAAithyQgCABgBACQgBACABACQAAACACABQBTAqgBAyQgCAxhXA7QgBABgBACQAAACABACQABACACAAQACAAACgBQBcg+ABg1QACg4hZguQgCgBgCAAIAAAAAAEh6QgCABgBACQgBABAAACQABACACABQBTAzAAA3QgDA2hVA+QgCABAAACQAAACABACQABACACAAQAAAAACgBQBdhBABg6QACg9hag2QgCgBgCAAIAAAA").cp();
	this.shape_13.setTransform(17.9,25.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF0000").s().p("AAvh9QBTA5gBA9QgBA8hXBDQgBABgBACQAAACABACQACABACABQACAAABgBQBbhHABhAQAChChZg8QgCgCgCABQgCAAgBACQgBACAAACQABACACABIAAAAACHiIQBUA/AABFQgCBChWBLQgCABAAADQAAACACABQABACACAAQACAAACgBQBahPABhGQABhJhZhDQgCgBgCAAQgCABgBABQgBACAAACQAAACACABIAAAAAh/h3QgCAAgBACQgBACAAACQABACABABQBSAtgBA0QgCAyhVA8QgCABgBACQAAACABACQABABACABQACAAACgBQBbg/ABg3QADg5hZgxQgCgBgBABIAAAAAjah1QgCABgBACQgBABABACQABACACABQBSArgBAyQgCAxhWA7QgCABgBACQAAACABACQABABACABQACAAACgBQBcg/ABg0QADg4hagvQgCgBgCABIAAAAAgnh9QgCABgBABQgBACABACQAAACACABQBSAzgBA3QgCA2hWA+QgBABgBACQAAACABACQACABACABQACAAABgBQBbhBABg6QACg9hYg2QgCgCgCABIAAAA").cp();
	this.shape_14.setTransform(22.4,25.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF0000").s().p("ACyiWQBWBFAABMQgBBKhXBTQgBABAAACQAAACABACQABABADAAQACAAABgBQBahXABhNQAAhQhZhJQgCgBgCAAQgCAAgBACQgCABABACQAAACABACIAAAAAAEiJQgCABgBACQgBABAAACQAAACACACQBTA4AAA+QgCA7hUBDQgCACAAACQgBACACABQABACABAAQABABACgCQBbhGABhAQABhChZg9QgBgBgCAAIAAAAABaiKQBUA/AABEQgBBDhXBLQgBABAAACQgBACACACQABABACAAQACAAACgBQBahOABhHQABhJhZhCQgCgBgCAAQgCAAgBACQgBABAAADQAAACACABIAAAAAivh4QgBACAAACQABACACABQBRAuAAA0QgDAyhVA7QgCABAAACQgBACACACQABACACAAQACABABgCQBbg/ABg2QADg5hYgxQgCgCgCABQgCABgBABIAAAAAkGh3QgCAAgBACQgBACAAACQABACACABQBSArAAAyQgDAwhWA7QgCABAAACQgBACABACQABACADAAQACABABgBQBcg/ABg1QADg4haguQgCgBgBABIAAAAAhXh9QgBACABACQAAABACACQBUAygBA4QgCA2hXA9QgCABAAADQgBABACACQABACACAAQACABACgCQBahBABg6QACg9hYg2QgCgBgCABQgCAAgBACIAAAA").cp();
	this.shape_15.setTransform(26.9,25.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF0000").s().p("ACFiYQBWBFAABMQgBBKhXBTQgBABAAADQAAACABABQABABADABQACgBABgBQBahWABhOQAAhQhZhJQgCgBgCAAQgCAAgBACQgCABABADQAAACABABIAAAAADhiuQgCAAgBACQgCABABADQAAABABACQBXBKAABTQgBBShXBdQgCABABACQAAACABACQACABACAAQACAAABgBQBbhhAAhVQAAhXhahOQgCgBgCAAIAAAAAgniKQgCAAgBACQgCABABADQAAACACABQBRA5AAA9QgCA8hUBDQgCABAAACQgBACACACQABABACABQACAAACgBQBZhHABhAQABhChXg9QgBgBgCABIAAAAAAtiMQBUA/AABEQgBBDhXBLQgBABAAACQgBACACACQABABACABQACAAACgCQBahOABhGQABhJhZhDQgCgBgCAAQgCAAgBACQgBACAAACQAAACACABIAAAAAjch5QgBABAAACQABACACABQBRAuAAA0QgDAyhVA8QgCABAAACQgBACACABQABACACABQACAAABgBQBbhAABg2QADg5hYgxQgCgBgCAAQgCABgBACIAAAAAkzh5QgCAAgBACQgBACAAACQABACACABQBSArAAAyQgDAwhWA7QgCABAAADQgBACABABQABACADABQACAAABgBQBcg/ABg1QADg3hagvQgCgBgBABIAAAAAiEh/QgBACABACQAAACACABQBUAygBA4QgCA2hXA+QgCABAAACQgBACACABQABACACABQACAAACgBQBchCABg6QACg8hag3QgCgBgCABQgCAAgBACIAAAA").cp();
	this.shape_16.setTransform(31.4,26);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF0000").s().p("AENi5QgCAAgBABQgCACAAACQAAACACABQBYBOAABZQAABXhYBlQgCACAAABQAAADACABQACABACAAQACAAABgCQBbhnAAhbQAAhdhbhRQgCgBgCAAIAAAAABbigQgCAAgBABQgCACAAACQAAACACACQBVBFAABLQgBBLhWBTQgCABAAACQAAACACACQABABACAAQACAAACgBQBahXAAhNQABhQhZhJQgCgCgCABIAAAAAC0itQgCAAgBABQgCACAAACQAAACACABQBWBLAABTQAABRhXBdQgCACAAACQAAACACABQABACADAAQACAAABgCQBahgAAhVQABhYhahNQgCgBgCAAIAAAAAhViKQgCABgBABQgBACAAACQABACACABQBTA5gBA+QgBA7hXBDQgBACgBACQAAACABABQACACACAAQACABABgCQBZhGABhAQAChChXg9QgCgBgCAAIAAAAAAAiLQBUA/AABEQgBBDhVBKQgCACAAACQAAACACABQABACABAAQABAAACgBQBahOABhHQABhJhZhCQgCgCgCABQgCAAAAACQAAABAAACQAAADAAABIAAAAAkJh5QgBACAAACQABACABABQBSAugBAzQgCAzhVA7QgCABgBACQAAACABACQABACACAAQACABACgCQBbg/ABg2QADg5hZgyQgBgBgCABQgCABgBABIAAAAAlhh5QgCABgBACQgBACABACQABACACABQBSArgBAxQgCAxhWA7QgCABgBACQAAACABACQABACACAAQACABACgCQBcg+ABg1QADg4haguQgCgBgCAAIAAAAAixh+QgBACABABQAAACACABQBUAzgBA3QgCA2hYA+QgBABgBACQAAACABACQACACACAAQACABABgCQBdhBABg6QACg9hag2QgCgBgCAAQgCABgBACIAAAA").cp();
	this.shape_17.setTransform(35.9,25.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF0000").s().p("AE1i/QAAACABABQBZBTAABfQAABchZBrQgBACAAACQAAACACABQABABACAAQACAAACgCQBbhtAAhgQABhjhdhWQgBgBgCAAQgDAAgBABQgBACAAACIAAAAADci2QgBACAAACQAAACACABQBXBOAABZQAABXhYBlQgBACAAABQAAADACABQABABACAAQACAAACgCQBbhngBhbQAAhdhbhRQgBgBgCAAQgDAAgBABIAAAAAAriVQBVBFAABLQgBBLhXBTQgBABAAACQAAACABACQACABACAAQACAAABgBQBbhXAAhNQABhQhahJQgCgCgCABQgCAAgBABQgBACAAACQAAACACACIAAAAACEijQBWBLAABTQgBBRhXBdQgBACAAACQAAACABABQACACACAAQACAAACgCQBahgAAhVQAAhYhahNQgCgBgCAAQgCAAgBABQgBACAAACQAAACACABIAAAAAiCiIQgCABgBABQgBACAAACQAAACACABQBUA5gBA+QgCA7hWBDQgCACAAACQAAACABABQABACACAAQACABACgCQBbhGABhAQAChChZg9QgCgBgCAAIAAAAAgsiJQBTA/gBBEQgBBDhUBKQgCACAAACQAAACABABQABACADAAQACAAABgBQBZhOAAhHQAChJhYhCQgBgCgCABQgCAAgCACQgBABAAACQABADABABIAAAAAk3h3QgBACABACQAAACACABQBSAugBAzQgCAzhWA7QgCABAAACQAAACABACQABACACAAQACABACgCQBag/ACg2QACg5hYgyQgCgBgCABQgCABgBABIAAAAAmOh3QgCABgBACQgBACABACQAAACACABQBTArgBAxQgCAxhXA7QgCABAAACQgBACACACQABACACAAQACABACgCQBcg+ABg1QACg4hZguQgCgBgCAAIAAAAAjeh8QgBACAAABQABACABABQBUAzgBA3QgCA2hXA+QgCABAAACQAAACABACQABACACAAQACABACgCQBchBABg6QACg9hag2QgBgBgCAAQgCABgBACIAAAA").cp();
	this.shape_18.setTransform(40.5,25.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF0000").s().p("AFqjPQgBgCgCAAQgCAAgCACQgBABAAACQAAACABACQCyCyiyDgQgCABABACQAAACACACQABABACAAQACgBACgBQC4jni5i4IAAAAAEMjCQgCAAgBACQgBABAAACQAAADABABQBZBTAABeQAABdhZBqQgBACAAACQAAACABABQACACACAAQACAAABgCQBchuAAhgQAAhihchXQgBgBgDAAIAAAAACyi1QgCAAgBACQgBABAAACQAAADABABQBYBOAABZQAABXhYBkQgBACAAACQAAACABABQACACACAAQACAAABgCQBbhoAAhaQAAhdhbhSQgCgBgCAAIAAAAAgBiTQBUBFAABMQgBBKhVBTQgBACAAACQAAACABABQACACABAAQABAAABgCQBahWABhOQABhQhahJQgCgBgCAAQAAAAgBACQgBACAAACQAAACABABIAAAAABWigQBXBKAABTQgBBShXBdQgBABAAACQAAADABABQACABACAAQACAAABgBQBbhhAAhVQAAhXhahOQgCgBgCAAQgCAAgBACQgBACAAACQAAACABABIAAAAAiviFQgCAAgBACQgCACABACQAAACACABQBTA5AAA9QgCA8hWBDQgCABAAACQgBACACACQABABACABQACAAACgBQBbhHABhAQABhChZg9QgBgBgCABIAAAAAhZiHQBVA/gBBEQgBBDhXBLQgBABAAACQAAACABACQABACACAAQACAAACgCQBZhOAAhGQABhJhXhDQgCgBgCAAQgCABgBABQgBACAAACQAAACACABIAAAAAlkh0QgBACAAABQABACACABQBRAuAAA0QgDAyhVA8QgCABAAACQgBACACABQABACACABQACAAABgBQBbg/ABg3QADg5hYgxQgCgBgCAAQgCABgBACIAAAAAm7h0QgCABgBABQgBACAAACQABACACABQBSArAAAyQgDAxhWA6QgCACAAACQgBACABABQACACACABQACAAABgBQBcg/ABg1QADg3hagvQgBgBgCABIAAAAAkMh6QgBACABACQAAACACABQBUAzgBA3QgCA2hXA+QgCABAAACQgBACACABQABACACABQACAAACgBQBchCABg6QACg8hag3QgCgBgCABQgCAAgBACIAAAA").cp();
	this.shape_19.setTransform(45,25.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FF0000").s().p("AGQjVQCyC/iyDtQgCABABACQAAADACABQABABACAAQACgBACgBQC3j0i4jFQgBgCgCAAQgCAAgCABQgBACAAACQAAACABACIAAAAAE9jNQgBgBgCAAQgCAAgCABQgBACAAACQAAACABABQCyCziyDfQgCACABACQAAACACABQABABACAAQACAAACgCQC4jmi5i5IAAAAADfi/QgCAAgBABQgBACAAACQAAACABABQBZBTAABfQAABchZBrQgBACAAACQAAACABABQACABACAAQACAAABgCQBchtAAhgQAAhjhchWQgBgBgDAAIAAAAACFiyQgCAAgBABQgBACAAACQAAACABABQBYBOAABZQAABXhYBlQgBABAAACQAAADABABQACABACAAQACAAABgCQBbhnAAhbQAAhdhbhRQgCgBgCAAIAAAAAguiQQBUBFAABLQgBBLhVBTQgBABAAACQAAACABACQACABACAAQACAAABgBQBYhXABhOQABhPhYhJQgCgCgCABQgCAAgBABQgBACAAACQAAACABACIAAAAAApieQBXBLAABTQgBBRhXBdQgBACAAACQAAACABABQACACACAAQACAAABgCQBbhgAAhVQAAhYhahNQgCgBgCAAQgCAAgBABQgBACAAACQAAACABABIAAAAAjciDQgCABgBABQgCACABACQAAACACABQBTA5AAA+QgCA7hWBDQgCACAAACQgBACACABQABACACAAQACAAACgBQBbhGABhAQABhChZg9QgBgBgCAAIAAAAAiGiEQBVA/gBBEQgBBDhXBKQgBACAAACQAAACABABQABACACAAQACAAACgBQBbhOAAhHQABhJhZhCQgCgCgCABQgCAAgBACQgBABAAACQAAADACABIAAAAAmRhyQgBACAAACQABACACABQBRAuAAAzQgDAzhVA7QgCABAAACQgBACACACQABACACAAQACABABgCQBbg/ABg2QADg5hYgyQgCgBgCABQgCAAgBACIAAAAAnohyQgCABgBACQgBACAAACQABACACABQBSArAAAxQgDAxhWA7QgCABAAACQgBACABACQACACACAAQACABABgCQBcg+ABg1QADg4haguQgBgBgCAAIAAAAAk5h3QgBABABACQAAACACABQBUAzgBA3QgCA2hXA+QgCABAAACQgBACACACQABACACAAQACABACgCQBchBABg6QACg9hag2QgCgBgCAAQgCABgBACIAAAA").cp();
	this.shape_20.setTransform(49.5,25.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF0000").s().p("AG8jhQC1DNi1D2QgBABAAACQABADABABQACABACAAQACgBABgBQC6j9i6jSQgBgCgDAAQgCAAgBABQgCACAAACQAAACABABIAAAAAFhjXQAAADABABQCzDAizDsQgBACAAACQABACABABQACACACgBQACAAABgCQC4jzi4jGQgBgBgDAAQgCAAgBABQgCABAAACIAAAAAEQjKQgCgCgCAAQgCAAgBACQgCABAAACQAAACACACQCxCyiyDgQgBABAAACQABACABACQACABACAAQACgBABgBQC4jni4i4IAAAAACyi9QgCAAgCACQgBABAAACQAAADACABQBYBTABBeQAABdhaBqQgBACAAACQAAACACABQACACACAAQACAAABgCQBchuAAhgQAAhihchXQgCgBgCAAIAAAAABYiwQgCAAgCACQgBABAAACQAAADACABQBYBOAABZQgBBXhYBkQgBACAAACQAAACACABQABACACAAQADAAABgCQBbhoAAhaQAAhdhchSQgBgBgCAAIAAAAAhbiOQBVBFAABKQgBBMhWBTQgCACAAACQAAACACABQABACACAAQACAAACgCQBYhWAAhQQABhOhYhJQgBgBgCAAQgCAAgCACQgBACAAACQAAACACABIAAAAAgCibQBUBKAABRQAABUhWBdQgBABAAACQAAADACABQABABACAAQABAAABgBQBahhAAhXQABhVhbhOQgBgBgBAAQgBAAgCACQgBACAAACQAAACACABIAAAAAkKiAQgCAAgBACQgBACAAACQABACABABQBUA5gBA9QgBA8hXBDQgBABgBACQAAACABACQACABACABQACAAABgBQBbhHABhAQAChChZg9QgCgBgCABIAAAAAiziCQBUA/AABDQgCBEhWBLQgCABAAACQAAACABACQACACACAAQACAAABgCQBbhOABhIQABhHhZhDQgCgBgCAAQgCABgBABQgCACABACQAAACACABIAAAAAm/hvQgBACABABQAAACACABQBSAugBA0QgCAyhWA8QgBABgBACQAAACABABQABACACABQACAAACgBQBbg/ABg3QACg5hYgxQgCgBgCAAQgCABgBACIAAAAAoWhvQgCABgBABQgBACABACQABACABABQBTArgBAyQgCAxhXA6QgBACgBACQAAACABABQABACACABQACAAACgBQBcg/ABg1QACg3hZgvQgCgBgCABIAAAAAlmh1QgBACAAACQABACACABQBUAzgBA3QgCA2hYA+QgBABgBACQAAACABABQABACACABQACAAACgBQBdhCABg6QACg8hag3QgCgBgCABQgCAAgBACIAAAA").cp();
	this.shape_21.setTransform(54,25);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FF0000").s().p("AHqjrQC0DZi1D+QgBACAAACQABACACABQABACACgBQACAAABgCQC6kFi6jfQgBgBgCAAQgCAAgCABQgCABAAACQAAACACACIAAAAAE0jVQAAADACABQCyDAizDsQgBACAAACQABACABABQACACACgBQACAAABgCQC4jzi4jGQgBgBgCAAQgDAAgBABQgCABAAACIAAAAAGQjfQC0DNi1D2QgBABAAACQABADABABQACABACAAQACgBABgBQC6j9i6jSQgBgCgCAAQgCAAgCABQgCACAAACQAAACACABIAAAAADjjIQgCgCgCAAQgCAAgBACQgCABAAACQAAACACACQCxCyiyDgQgBABAAACQABACABACQACABACAAQACgBABgBQC4jni4i4IAAAAACFi7QgCAAgBACQgCABAAACQAAADACABQBZBTAABeQAABdhZBqQgCACAAACQAAACACABQACACACAAQACAAABgCQBchuAAhgQAAhihchXQgCgBgCAAIAAAAAAriuQgCAAgBACQgCABAAACQAAADACABQBYBOAABXQAABZhYBkQgCACAAACQAAACACABQACACACAAQACAAABgCQBbhoAAhcQAAhbhbhSQgCgBgCAAIAAAAAiIiMQBVBFAABKQgBBMhWBTQgCACAAACQAAACACABQABACACAAQACAAACgCQBahWAAhQQABhOhZhJQgCgBgCAAQgCAAgBACQgCACAAACQAAACACABIAAAAAgviZQBUBKAABRQAABUhVBdQgCABAAACQAAADACABQABABADAAQACAAABgBQBYhhAAhXQABhVhYhOQgCgBgCAAQgCAAgBACQgCACAAACQAAACACABIAAAAAk3h+QgCAAgBACQgBACAAACQABACACABQBTA5gBA8QgBA9hXBDQgBABgBACQAAACABACQACABACABQACAAABgBQBbhHABhBQAChBhZg9QgCgBgCABIAAAAAjgiAQBUA/AABCQgCBFhWBLQgCABAAACQAAACACACQABACACAAQACAAACgCQBahOABhIQABhHhZhDQgCgBgCAAQgCABgBABQgCACABACQAAACACABIAAAAAnrhtQgCACABABQABACABABQBSAugBA0QgCAyhVA8QgCABgBACQAAACABABQABACACABQACAAACgBQBbg/ABg3QACg5hYgxQgCgBgBAAQgCABgBACIAAAAApDhtQgCABgBABQgBACABACQABACACABQBSArgBAyQgCAxhWA6QgCACgBACQAAACABABQABACACABQACAAACgBQBcg/ABg1QACg3hZgvQgCgBgCABIAAAAAmThzQgBACABACQAAACACABQBUAzgBA3QgCA2hYA+QgBABgBACQAAACABABQABACADABQACAAABgBQBdhCABg6QACg8hag3QgCgBgCABQgCAAgBACIAAAA").cp();
	this.shape_22.setTransform(58.5,24.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FF0000").s().p("AIVj2QAAADABABQC1Dii1EDQgBACAAACQABACABABQACABACAAQACAAABgCQC6kKi6jnQgBgCgCAAQgCAAgCABQgBABgBACIAAAAAG8jqQC1DZi1D+QgBACAAACQABACABABQACACACgBQACAAABgCQC6kEi6jfQgBgCgCAAQgCAAgCABQgCACAAABQAAADABABIAAAAAEHjTQAAACABABQCzDAizDsQgBACAAACQABACABABQACACACgBQACAAABgCQC4jzi4jGQgBgBgDAAQgCAAgBABQgCACAAACIAAAAAFijdQC1DMi1D2QgBACAAACQABACABABQACABACAAQACAAABgCQC6j8i6jTQgBgBgDgBQgCAAgBACQgCABAAACQAAACABACIAAAAAC2jHQgCgBgCgBQgCABgBABQgCABAAACQAAADACABQCxCziyDfQgBACAAABQABADABABQACABACAAQACAAABgCQC4jni4i4IAAAAABYi6QgCABgCABQgBACAAACQAAACACABQBYBTABBeQAABdhaBrQgBABAAACQAAACACACQACABACAAQACAAABgCQBchuAAhgQAAhihchWQgCgCgCAAIAAAAAAAitQgCABgCABQgBACAAACQAAACACABQBWBOAABXQgBBZhWBlQgBABAAACQAAACACACQABABACAAQABAAABgCQBbhoAAhcQAAhbhchRQgBgCAAAAIAAAAAi1iLQBVBGAABJQgBBMhWBTQgCACAAACQAAACACABQABACACAAQACAAACgCQBahWAAhQQABhOhahJQgBgBgCAAQgCABgCABQgBACAAACQAAACACABIAAAAAhciYQBWBKAABRQAABUhYBdQgBACAAACQAAACACABQABACACgBQADAAABgBQBYhhAAhXQABhVhZhNQgBgCgCAAQgCABgCABQgBACAAACQAAACACABIAAAAAlkh9QgCAAgBACQgBACAAACQABACABABQBUA5gBA7QgBA+hXBDQgBABgBACQAAACABACQACACACAAQACAAABgBQBbhHABhCQAChAhZg8QgCgBgCAAIAAAAAkNh/QBUA/AABDQgCBFhWBKQgCACAAACQAAACABABQACACACAAQACAAABgBQBbhPABhIQABhHhZhDQgCgBgCAAQgCABgBABQgCACABACQAAACACABIAAAAAoZhsQgBACABACQAAACACABQBSAtgBA0QgCAzhWA7QgBABgBACQAAACABACQABACACAAQACAAACgBQBbg/ABg3QACg4hYgyQgCgBgCABQgCAAgBACIAAAAApwhsQgCABgBACQgBACABABQABADABAAQBTArgBAyQgCAxhXA7QgBABgBACQAAACABACQABACACAAQACAAACgBQBcg+ABg1QACg4hZgvQgCAAgCAAIAAAAAnAhyQgBACAAACQABACACABQBUAzgBA3QgCA2hYA+QgBABgBACQAAACABACQABACACAAQADAAABgBQBdhBABg6QACg9hag2QgCgBgCAAQgCABgBABIAAAA").cp();
	this.shape_23.setTransform(63,24.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).wait(6));


}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.runontext = function() {
	this.initialize();

//ID_s1_txt01
	this.text_2 = new cjs.Text("hellotheretodayisawthemostbeautifulsunseteveryoushouldreallycomevisitmytownsoyoucangetawayfromthatcoldweather", "11px Arial");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 13;
	this.text_2.setTransform(29.4,40);

	this.addChild(this.text_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,62.8,16.2);


(lib.huh2 = function() {
	this.initialize();

	// Layer 1
	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#010000").s().p("ABngpQAAAIgEAHQgFAIgPAMQgIAGgCADQgCAEAAAKIgWAAQAAgFAAgBQAAgLAEgFQADgHALgJQAKgJADgCQADgEAAgGQAAgHgGgFQgGgFgJAAQgJAAgHAFQgGAGgCAKIgYgCQACgQAMgLQANgLAUAAQAVAAANALQAMALAAAPIAAAAACfhjQgGAFgCALIgYgDQACgPAMgMQANgLAUAAQAVAAANALQAMAMAAAPQAAAIgEAHQgFAHgPANQgIAHgCADQgCAEAAALIgWAAQAAgGAAAAQAAgMAEgGQADgHALgJQAKgJADgCQADgFAAgFQAAgIgGgFQgGgEgJAAQgJAAgHAFIAAAAAC7AFIgZAAIAAgXIAZAAIAAAXACaA+QAAgIgGgFQgGgEgKAAQgJAAgHAFQgGAFgCALIgXgDQABgPAMgMQANgLAUAAQAVAAANALQANAMAAAPQAAAIgFAHQgFAHgPANQgHAHgDADQgBAEAAALIgXAAQAAgGAAAAQAAgMAEgGQAEgHAKgJQALgJACgCQAEgFAAgFIAAAAABGAZIAAAZIgZAAIAAgZIAZAAAB3CDIAZAAIAAAZIgZAAIAAgZAiLiJQANAMAAAPQAAAIgFAHQgFAHgPANQgHAHgDADQgBAEAAALIgXAAQAAgGAAAAQAAgMAEgGQAEgHAKgJQALgJACgCQAEgFAAgFQAAgIgGgFQgGgEgKAAQgJAAgHAFQgGAFgCALIgXgDQABgPAMgMQANgLAUAAQAVAAANALIAAAAAgSiQQgGgEgJAAQgJAAgHAFQgGAFgCALIgYgDQACgPAMgMQANgLAUAAQAVAAANALQAKAMAAAPQAAAIgEAHQgFAHgNANQgIAHgCADQgCAEAAALIgWAAQAAgGAAAAQAAgMAEgGQADgHALgJQAKgJADgCQADgFAAgFQAAgIgGgFIAAAAAgug+IAZAAIAAAZIgZAAIAAgZAiyAxQANgLAUAAQAVAAANALQAMAMAAAPQAAAIgEAHQgFAHgPANQgIAHgCADQgCAEAAALIgWAAQAAgGAAAAQAAgMAEgGQADgHALgJQAKgJADgCQADgFAAgFQAAgIgGgFQgGgEgJAAQgJAAgHAFQgGAFgCALIgYgDQACgPAMgMIAAAAAgiAFQAVAAANALQAKALAAAPQAAAIgEAHQgFAIgNAMQgIAHgCAEQgCAEAAAKIgWAAQAAgFAAgBQAAgLAEgHQADgHALgJQAKgJADgCQADgEAAgGQAAgHgGgFQgGgFgJAAQgJAAgHAFQgGAGgCAKIgYgCQAAgCABgBQACgOALgKQANgLAUAAIAAAAAiECQIAAAZIgZAAIAAgZIAZAAAguCHIAAgZIAZAAIAAAZIgZAAAi5gRIAAgZIAZAAIAAAZIgZAA").cp();
	this.shape_24.setTransform(37.7,28.3);

	this.addChild(this.shape_24);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(15.7,11.4,44.2,33.9);


(lib.huh = function() {
	this.initialize();

	// Layer 1
	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#010000").s().p("AEJizQgIAAgHAFQgHAGgBAKIgYgCQACgQALgLQAOgLAUAAQAUAAANALQANALAAAPQAAAIgEAHQgFAIgPAMQgIAHgCAEQgCAEAAAKIgXAAQAAgFAAAAQAAgMAFgGQADgHAKgKQALgIACgCQAEgFAAgFQAAgIgGgFQgGgFgKAAIAAAAAD8hcIAaAAIAAAZIgaAAIAAgZADAAqQAVAAANALQAMALAAAPQAAAIgEAHQgFAIgPAMQgIAHgCAEQgCAEAAAKIgWAAQAAgFAAgBQAAgLAEgHQADgHALgJQALgJACgCQAEgFAAgFQAAgHgGgFQgHgFgJAAQgJAAgHAFQgGAGgCAKIgYgCQACgQAMgLQANgLAUAAIAAAAAC0CTIAZAAIAAAZIgZAAIAAgZAFCAAQANgKAUAAQAVAAANAKQANALAAAPQAAAHgFAIQgFAHgPANQgHAHgDADQgCAEAAALIgWAAQAAgGAAAAQAAgMAEgGQADgHALgJQALgJACgCQAEgFAAgFQAAgIgGgFQgHgEgJAAQgJAAgHAFQgGAFgCAKIgYgCQACgPAMgLIAAAAAFwB2IgZAAIAAgZIAZAAIAAAZAhEkTQAAAIgEAHQgFAHgPANQgIAHgCAEQgCADAAALIgWAAQAAgGAAAAQAAgMAEgGQADgHALgJQAKgJADgCQADgFAAgFQAAgIgGgFQgGgEgJAAQgJAAgHAFQgGAFgCALIgYgDQACgPAMgMQANgLAUAAQAVAAANALQAMAMAAAPIAAAAAhljPIAAAZIgZAAIAAgZIAZAAAkkjBQgEgBgGAAQgJAAgHAFQgGAFgCAKIgXgCQABgPAMgMQANgLAUAAQAGAAAFABQAOACAJAIQANAMAAAPQAAAHgFAIQgFAHgPANQgHAHgDADQAAACgBADQAAADAAAHIgXAAQAAgGAAAAQAAgMAEgHQAEgHAKgJQADgCACgCQAHgFABgCQAEgEAAgGQAAgHgGgFQgCgCgEgBIAAAAAk7htIAZAAIAAAZIgZAAIAAgZAmDAcQANgLAUAAQAVAAANALQAMALAAAPQAAAIgEAHQgFAIgPAMQgIAHgCAEQgCADAAALIgWAAQAAgGAAAAQAAgLAEgHQADgHALgJQAKgJADgCQADgFAAgFQAAgHgGgFQgGgFgJAAQgJAAgHAFQgGAGgCAKIgYgCQACgQAMgLIAAAAAluB6IAZAAIAAAZIgZAAIAAgZAAADCQAMgLAUAAQAVAAANALQAMAMAAAPQAAAIgEAHQgFAHgPANQgIAHgCADQgCAEAAALIgWAAQAAgGAAAAQAAgMAEgGQADgHALgJQAKgJADgCQAEgFAAgFQAAgIgHgFQgGgEgJAAQgJAAgHAFQgGAFgCALIgWgDQACgPALgMIAAAAAAtEhIAAAZIgZAAIAAgZIAZAA").cp();
	this.shape_25.setTransform(40.2,31.4);

	this.addChild(this.shape_25);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,80.4,62.8);


(lib.envelopeclosedstatic = function() {
	this.initialize();

	// Layer 3
	this.instance_2 = new lib.envelope_closed_static();
	this.instance_2.setTransform(-40.5,-25.6,0.659,0.65);

	this.addChild(this.instance_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-40.5,-25.6,81.1,51.4);


(lib.computer_1 = function() {
	this.initialize();

	// Layer 3
	this.instance_3 = new lib.computer();
	this.instance_3.setTransform(0.4,-74,0.626,0.624);

	this.addChild(this.instance_3);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.4,-74,89.5,74.2);


(lib.movie_1 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{},true);

	// ID_s1_txt03
	this.instance_4 = new lib.ID_s1_txt03();
	this.instance_4.setTransform(255,211.8,1,1,0,0,0,31.4,8.1);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(258).to({alpha:1},0).wait(122));

	// people img
	this.instance_5 = new lib.boygirlpic();
	this.instance_5.setTransform(133,139.1,1.318,1.318);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5}]}).wait(380));

	// ID_s1_txt02
	this.instance_6 = new lib.ID_s1_txt02();
	this.instance_6.setTransform(440,159.3,1,1,0,0,0,31.4,8.1);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(159).to({alpha:1},0).wait(51).to({alpha:0},0).wait(170));

	// wave
	this.instance_7 = new lib.signalpulse();
	this.instance_7.setTransform(274.1,177.2,1,1,0,0,0,63,24.7);
	this.instance_7._off = true;

//	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(24).to({_off:false},0).wait(15).to({alpha:0},20).to({alpha:1},20).to({alpha:0},20).to({alpha:1},20).to({alpha:0},20).to({y:177.1,alpha:1},20).to({y:177.1,alpha:0},20).to({alpha:1},20).to({alpha:0},10).wait(50).to({alpha:1},0).to({alpha:0},20).to({alpha:1},20).to({alpha:0},20).to({alpha:1},20).to({alpha:0},20).to({y:177.1,alpha:1},19).wait(2));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(24).to({_off:false},0).wait(15).to({alpha:0},20).to({alpha:1},20).to({alpha:0},20).to({alpha:1},20).to({alpha:0},20).to({y:145.7,alpha:1},20).to({y:145.8,alpha:0},20).to({alpha:1},20).to({alpha:0},10).wait(50).to({alpha:1},0).to({alpha:0},20).to({alpha:1},20).to({alpha:0},20).to({alpha:1},20).to({alpha:0},20).to({regX:0,regY:0,x:211.1,y:121,alpha:1},19).wait(1).to({alpha:0},0).wait(1));


	// ? thought
	this.instance_8 = new lib.huh();
	this.instance_8.setTransform(371.8,63.7,1,1,0,0,0,40.2,31.4);
	this.instance_8.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(154).to({alpha:1},5).wait(45).to({alpha:0},5).wait(171));

	// thought 02 end
	this.instance_9 = new lib.sunset();
	this.instance_9.setTransform(563.9,180.8,0.522,0.522,0,0,0,400,300.1);
	this.instance_9.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(345).to({alpha:1},0).wait(35));

	// thought02
	this.instance_10 = new lib.sunset_1();
	this.instance_10.setTransform(563.9,180.8,0.522,0.522,0,0,0,400,300.1);
	this.instance_10.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(4).to({alpha:1},0).wait(5).wait(336).to({alpha:0},0).wait(35));

	// thought01
	this.instance_11 = new lib.sunset();
	this.instance_11.setTransform(385.3,180.8,0.522,0.522,0,0,0,400.1,300.1);
	this.instance_11.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(4).to({y:182.4,alpha:1},5).wait(371));

	// mask img
	this.instance_12 = new lib.WhiteShade();
	this.instance_12.setTransform(-346.9,40,1.284,1.282);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12}]}).wait(380));



	// runon
	this.instance_13 = new lib.runontext();
	this.instance_13.setTransform(-6.8,162.7,1,1,0,0,0,338.1,8.5);
	this.instance_13.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(109).to({alpha:1},0).to({x:739.1},35).wait(1).to({alpha:0},0).wait(235));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-346.9,24.2,1334.9,381.2);


(lib.envelopexxx = function() {
	this.initialize();

	// xxx
	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#E31C23").s().p("ABegWQAFAIACAEQADgGAFgFIATgaIAOAAIgiAuIAlAxIgQAAIgYgiQgCgDgDgFQgDAGgBACIgYAiIgQAAIAmgxIghguIAPAAIASAZAAIgVIATgaIAOAAIgiAuIAkAxIgPAAIgYgiQgCgDgCgFQgCAGgBACIgYAiIgQAAIAlgxIghguIAQAAIARAZQAGAIAAAEQADgGAFgFIAAAAAiMgvIAPAAIASAZQAGAIACAEQADgGAEgFIAUgaIANAAIghAuIAkAxIgPAAIgYgiQgDgDgCgFQgDAGgBACIgYAiIgQAAIAlgxIghgu").cp();
	this.shape_26.setTransform(0.4,0);

	// xxx shadow
	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#010000").s().p("ABMgvIASAZQAFAHACAEQAEgFAEgGIAUgZIANAAIghAtIAkAyIgPAAIgZgjQgCgDgDgEQgCAGgBACIgZAiIgPAAIAlgxIghguIAPAAAAAgLQAEgFAEgGIAUgZIANAAIgiAtIAlAyIgQAAIgYgjQgCgDgCgEQgBAGgCACIgYAiIgPAAIAlgxIghguIAPAAIASAZQAFAHAAAEIAAAAAhqgWQAFAHACAEQADgFAFgGIATgZIAOAAIghAtIAkAyIgPAAIgZgjQgCgDgDgEQgCAGgBACIgZAiIgQAAIAmgxIghguIAPAAIASAZ").cp();
	this.shape_27.setTransform(0.8,0.5);

	// Layer 7
	this.instance_14 = new lib.envelopeclosedstatic();
	this.instance_14.setTransform(0.6,0,0.4,0.4,0,0,0,1.5,0);

	this.addChild(this.instance_14,this.shape_27,this.shape_26);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-16.1,-10.2,32.4,20.6);


(lib.computerIPbasedVideo = function() {
	this.initialize();

	// camera
	this.instance_15 = new lib.computer_camera();
	this.instance_15.setTransform(36.2,-70.4);

	// computer
	this.instance_16 = new lib.computer_1();

	this.addChild(this.instance_16,this.instance_15);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.4,-79.5,89.5,79.7);


(lib.slide_1 = function() {
	this.initialize();

	// anim1
	this.anim1 = new lib.movie_1();
	this.anim1.setTransform(51.2,-9.7,0.78,0.78,0,0,0,62.7,-47.9);

	this.addChild(this.anim1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-268.3,46.4,1041.2,297.2);


(lib.movie_2 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{},true);

	// camera light
	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FF0000").s().p("AgPgPQAHgHAIAAQAJAAAHAHQAHAGAAAJQAAAJgHAHQgHAHgJAAQgIAAgHgHQgHgHAAgJQAAgJAHgGIAAAA").cp();
	this.shape_28.setTransform(128.7,90.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FF0000").s().p("AgPAQQgHgHAAgJQAAgJAHgGQAHgHAIAAQAJAAAHAHQAHAGAAAJQAAAJgHAHQgHAHgJAAQgIAAgHgHIAAAA").cp();
	this.shape_29.setTransform(128.7,90.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_28}]},14).to({state:[]},2).to({state:[{t:this.shape_28}]},2).to({state:[]},2).to({state:[{t:this.shape_28}]},2).to({state:[]},2).to({state:[{t:this.shape_29}]},2).to({state:[]},7).wait(217));

	// ? on screen
	this.instance_17 = new lib.huh2();
	this.instance_17.setTransform(453,271.2,1,1,0,0,0,40.2,31.4);
	this.instance_17.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(79).to({alpha:1},10).wait(35).to({alpha:0},10).wait(116));

	// screen on 2
	this.instance_18 = new lib.sunset_comp_screen();
	this.instance_18.setTransform(424.9,250.2,0.771,0.784,0,0,0,27.4,24.7);
	this.instance_18.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(215).to({alpha:1},5).wait(30));

	// screen on 1
	this.instance_19 = new lib.sunset_comp_screen();
	this.instance_19.setTransform(102,98.4,0.771,0.784,0,0,0,27.4,24.7);
	this.instance_19.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(24).to({alpha:1},5).wait(221));

	// computer 2
	this.instance_20 = new lib.computer_1();
	this.instance_20.setTransform(412.1,316.6,1,1,0,0,0,1.5,-0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_20}]}).wait(250));

	// computer 1
	this.instance_21 = new lib.computerIPbasedVideo();
	this.instance_21.setTransform(89.2,163.6,1,1,0,0,0,1.5,-0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_21}]}).wait(250));

	// envelope
	this.instance_22 = new lib.envelopeclosedstatic();
	this.instance_22.setTransform(191.4,148.8,0.367,0.367,0,0,0,1.5,0);
	this.instance_22.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(166).to({alpha:1},0).to({x:448.4,y:269.5},30).wait(1).to({alpha:0},0).wait(53));

	// envelope
	this.instance_23 = new lib.envelopeclosedstatic();
	this.instance_23.setTransform(191.4,148.8,0.367,0.367,0,0,0,1.5,0);
	this.instance_23.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(160).to({alpha:1},0).to({x:448.4,y:269.5},30).wait(1).to({alpha:0},0).wait(59));

	// envelope
	this.instance_24 = new lib.envelopeclosedstatic();
	this.instance_24.setTransform(191.4,148.8,0.367,0.367,0,0,0,1.5,0);
	this.instance_24.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(154).to({alpha:1},0).to({x:448.4,y:269.5},30).wait(1).to({alpha:0},0).wait(65));

	// envelope with xxx
	this.instance_25 = new lib.envelopexxx();
	this.instance_25.setTransform(176.9,138.7,2,2,25);
	this.instance_25.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(34).to({alpha:1},0).to({x:452,y:273.5},24).wait(1).to({alpha:0},0).wait(191));

	// line
	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#010000").ss(2,1,1).p("A2xrMIa/NRQFSCmFSCmIIAD8");
	this.shape_30.setTransform(306.5,202.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30}]}).wait(250));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(88.1,84.8,412.4,232.6);


(lib.slide_2 = function() {
	this.initialize();

	// anim2
	this.anim2 = new lib.movie_2();
	this.anim2.setTransform(222.2,49.1,0.78,0.78,0,0,0,281.9,27.7);

	this.addChild(this.anim2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(71,93.6,321.6,181.4);


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
p.nominalBounds = new cjs.Rectangle(-268.3,46.4,1041.2,297.2);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;