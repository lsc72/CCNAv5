(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.classesmediaMediaObject = function() {
	this.initialize();

	// main
	this.instance = new lib.Main();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(4,30.5,424.3,302.9);


// symbols:
(lib.Cloud = function() {
	this.initialize(img.Cloud);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,216,131);


(lib.computer = function() {
	this.initialize(img.computer);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,143,119);


(lib.computer_laptop = function() {
	this.initialize(img.computer_laptop);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,172,115);


(lib.hacker = function() {
	this.initialize(img.hacker);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,173,231);


(lib.Router = function() {
	this.initialize(img.Router);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,148,107);


(lib.Server_file = function() {
	this.initialize(img.Server_file);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,102,143);


(lib.Wan_line = function() {
	this.initialize(img.Wan_line);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,314,23);



(lib.labeltext = function() {
	this.initialize();

	// Layer 1
	this.text = new DOMObject({type:"TEXT" , align:"center" ,compId:"ID_s2_txt01", width:"70", expand:"up+down",size:10});
	this.text.setTransform(190,2.2);

	this.text_1 = new DOMObject({type:"TEXT" , align:"center" ,compId:"ID_s2_txt02", width:"108", expand:"up+down",size:10});
	this.text_1.setTransform(5,24.2);

	this.addChild(this.text_1,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(30.7,2.2,222.8,38.2);


(lib.label = function() {
	this.initialize();

	// Layer 1
	
	this.text_2 = new DOMObject({type:"TEXT" , align:"left" ,compId:"ID_s2_txt03", width:"150", expand:"up+down",size:10,class:"orangeCallOut"});
	this.text_2.setTransform(10,-3.8);

	this.addChild(this.text_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(11.7,-3.8,62.8,16.2);



(lib.NotAllowed = function() {
	this.initialize();

	// shape
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E31C23").s().p("ACwiwQBKBKAABmQAABnhKBJQhJBKhnAAQhmAAhKhKQhJhJAAhnQAAhmBJhKQBKhJBmAAQBnAABJBJIAAAAAimiIQgxA6AABOQAABZA/A/QBABABYAAQBOAAA7gyIkvkuACYiYQg2g2hKgIQgMgBgMAAQhOAAg8AyIEvEvQAzg7AAhPQAAhZhAg/IAAAA").cp();

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-24.9,-24.9,50,50);


(lib.helpIcon = function() {
	this.initialize();

	// hit area
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0)").s().p("AC0kSIAAIlIlnAAIAAolIFnAA").cp();
	this.shape_1.setTransform(0.1,0.5);

	// details
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.4)").s().p("AAjgJQANALABAUQAAABAAABIAAAAQgKgYgLgHQgLgIgRgBQgPAAgKAHQgKAIgNAZIAAAAQAAgBAAgBQABgUANgLQAPgOATAAQAVAAAOAOIAAAA").cp();
	this.shape_2.setTransform(-0.4,19.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.502)").s().p("ABfjMQAKAIADAKQAEAHAAAOQAAAGgBABIgCAGIAAAAQAAAAAAgGQAAgcgUgTQgGgEgGgFQgHgFgXgEQgOgDgXADQgTADgQAOQgPAMgPAuQgMAoghAAQgKAAgNgJQALAEALAAQAgAAALgoQAMglARgTQATgVAjAAQARAAAIACQAYAFAVATIAAAAABhgLQgLAKgHAGQgHAJgDAGQgEAHgCAHQgBAGgEARQgGAkghAAQgSAAgJgMQgJgIgCgNQAEALAGAEQAJAMARAAQAgAAAGgjQAEgUABgDQADgHADgGQACgFAIgJQAIgIAJgIQAGgGAZgRQgMAMgPAOIAAAAAAwDXQAKgGANgZQgBAVgNAMQgPAOgUAAQgTAAgNgOQgOgLgBgWQANAaALAGQAJAGAOAAQAOAAAMgHIAAAA").cp();
	this.shape_3.setTransform(-2.7,3.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.251)").s().p("ACRhfIgKgNQgTgWgcgNQgNgHgNgDIgQgEQgVgEgWAAQgWAAgYAFQgYAGgSAKQgnAWgUAgQgEAGgEAIQgMAZAAAZQAAAKAHAKQgMgMAAgLIAAgDQAAgZAMgZQAEgJAEgHQAVghAogXQAogWAzAAQAjAAAeAKQAMAEALAFQAfAOATAYIAJAMQAHAKAFAOQAIAUAAAYIAAADQgBAdgKASQgKASgKALIgGAHIgCACIgEAEIALgNQAKgNAGgLQALgUAAgcQAAgUgGgTQgGgPgIgNIAAAAAA4APQAKgKAKgPQALgSgDALQgDAKgNARQgOASgXAUQgXATgMAOQgOAOgIANQgIANgHAhQgHAhAAgXQABgYAJgVQAJgVAPgQQAOgQAYgWQAWgTAKgKIAAAA").cp();
	this.shape_4.setTransform(0,-8);

	// shading
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["rgba(0,0,0,0.353)","rgba(0,0,0,0.102)","rgba(255,255,255,0.153)","rgba(255,255,255,0.4)","rgba(255,255,255,0.2)","rgba(204,204,204,0.259)","rgba(0,0,0,0.502)"],[0,0.141,0.267,0.525,0.667,0.886,1],-20.7,11.4,28.7,-16.1).s().p("AAEi/QglAAgSAUQgSATgNAmQgMAoghAAQgUAAgNgOQgOgOAAgQQAAghAVgiQAWgjApgWQApgXA1AAQAzAAAnATQAnATAVAgQAVAgAAAmQAAAegLAXQgNAWgQARQgRAQgrAlQgMAKgHAJQgIAJgDAHQgEAGgCAHQgCAHgEARQgGAlghAAQgTAAgMgMQgNgMAAgYQAAgeAJgVQAKgWAPgOQAPgRAYgWQAWgUAKgKQAKgKAHgMQAHgNAAgOQAAgcgVgTQgVgUghAAIAAAAAgDChQAVAAAPAPQAOAOABAVQAAABAAABQAAABAAABQgBAXgPAOQgQAOgTAAQgVAAgQgOQgPgOgBgXQAAgBAAgBQAAgBAAgBQABgVAOgOQAQgPAWAAIAAAA").cp();
	this.shape_5.setTransform(0,0.7);

	// mask
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#28ABE2").s().p("AAEi/QglAAgSAUQgSATgNAmQgMAoghAAQgUAAgNgOQgOgOAAgQQAAghAVgiQAWgjApgWQApgXA1AAQAzAAAnATQAnATAVAgQAVAgAAAmQAAAegLAXQgNAWgQARQgRAQgrAlQgMAKgHAJQgIAJgDAHQgEAGgCAHQgCAHgEARQgGAlghAAQgTAAgMgMQgNgMAAgYQAAgeAJgVQAKgWAPgOQAPgRAYgWQAWgUAKgKQAKgKAHgMQAHgNAAgOQAAgcgVgTQgVgUghAAIAAAAAgDChQAVAAAPAPQAPAPAAAWQAAAYgQAPQgQAOgTAAQgVAAgQgOQgQgOAAgZQAAgWAPgPQAQgPAWAAIAAAA").cp();
	this.shape_6.setTransform(0,0.7);

	this.addChild(this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-17.9,-26.9,36,55);


(lib.envelopeclosedstatic = function() {
	this.initialize();

	// inner lines
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C9A003").s().p("ACWAAQAhgSAjgZQABgBABgBICUD0QAAAAAAAAQASAZAJAcIAFAAIAAgRQgHgSgRgYIiTjzQA/guBGhEIAAABQAZgYAKhAIgKAAQgKA7gWAVIAAAAQhIBGhAAtQgDADgEACQgiAZghARIAAAAQhPAphAABQgCAAAAAAQhBgBhPgqIAAABQghgSgjgZQgDgDgEgCQg/gthHhFIAAAAQgWgVgJg7IgLAAQAKBAAZAYIAAgBQBGBDA+AuIiUD0QgPAUgIAUIAAgHIAAAaIAEAAQAIgbATgaQAAAAAAAAICUj1QABABABABQAkAZAhASIAAAAQBSArBDABQAAAAACAAQBCgBBSgqIAAAA").cp();
	this.shape_7.setTransform(1.4,0.1);

	// outer lines
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#999999").s().p("AmLD8IgEAAIAAgaIAAAHQAIgUAPgUICUj0Qg+guhGhDIAAABQgZgYgKhAIALAAQAJA7AWAVIAAAAQBHBFA/AtQAEACADADQAjAZAhASIAAgBQBPAqBBABQAAAAACAAQBAgBBPgpIAAAAQAhgRAigZQAEgCADgDQBAgtBIhGIAAAAQAWgVAKg7IAKAAQgKBAgZAYIAAgBQhGBEg/AuICTDzQARAYAHASIAAARIgFAAQgJgcgSgZQAAAAAAAAIiUj0QgBABgBABQgjAZghASIAAAAQhSAqhCABQgCAAAAAAQhDgBhSgrIAAAAQghgSgkgZQgBgBgBgBIiUD1QAAAAAAAAQgTAagIAbIAAAA").cp();
	this.shape_8.setTransform(1.4,0.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000002").s().p("AGNj6IgLAAIsDAAIgKAAIgEAAIAAH2IAEAAIMWAAIAFAAIAAgQIAAnmIgDAAAGIkEQAAgBABABIAMAAQACAAACABQABABAAADIAAIAQAAACgBABQgCABgCABIspAAQgCgBgCgBQgBgBAAgCIAAoAQAAgDABgBQACgBACAAIANAAQAAgBAAABIMPAA").cp();
	this.shape_9.setTransform(1.5,0);

	// color
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#FFF4CC","#FFD200"],[0,1],29.2,-23,0.4,5.6).s().p("AGVj/IAAH/IspAAIAAn/IMpAA").cp();
	this.shape_10.setTransform(1.5,0.1);

	this.addChild(this.shape_10,this.shape_9,this.shape_8,this.shape_7);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-39.5,-26.1,82.1,52.4);


(lib.envelopeattackpacket = function() {
	this.initialize();

	// inner lines
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#812929").s().p("AGDj7QgKA6gWAWQhIBFhAAuQgDACgEADQgiAYghASIAAAAQhPAphAACQgCAAAAAAQhBgChPgqIAAABQghgSgjgZQgDgDgDgCQhAguhHhEQgWgWgJg6IgLAAQAKBAAZAYIAAgBQBGBDA+AuIiUD0QgPAUgIAUIAAgHIAAAaIAEAAQAIgbATgaIABAAICTj1QABABABABQAkAZAhASQBSArBDACQAAAAACAAQBCgCBSgqQAhgSAjgZQABgBACgBICTD0IAAAAQASAZAJAcIAFAAIAAgQQgHgTgRgYIiTjzQA/guBGhEIAAABQAZgYAKhAIgKAA").cp();

	// outer line
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000002").s().p("AGIkFIscAAQgCAAgCACQgBABAAACIAAIBQAAACABABQACACACAAIMpAAQACAAACgCQABgBAAgCIAAoBQAAgCgBgBQgCgCgCAAIgMAAQAAAAgBAAIAAAAAGQj7IAAHoQgIgWgQgWIiTjzQA/guBGhEIAAABQAZgYAKhAIADAAACRgJQhPAphAACQgCAAgBAAQhBgChPgqIAAABQgggSgjgZQgEgDgDgCQg/guhHhEQgXgWgJg6IMEAAQgKA6gWAWQhIBFhAAuQgDACgEADQgiAYghASIAAAAADdgtICTD0IAAAAQATAaAIAbIsWAAQAHgbAUgaIAAAAICUj1QABABABABQAkAZAgASQBSArBDACQABAAACAAQBCgCBSgqQAhgSAjgZQABgBACgBIAAAAAmLj7QAJBAAaAYIAAgBQBFBDA/AuIiUD0QgPAUgIAUIAAnkIAEAA").cp();

	// color
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#CC7F7F","#AE3333"],[0,1],29.1,-23,0.4,5.6).s().p("AGVEAIspAAIAAn/IMpAAIAAH/").cp();

	this.addChild(this.shape_13,this.shape_12,this.shape_11);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-41,-26.1,82.1,52.4);


(lib.arrowgreen = function() {
	this.initialize();

	// Layer 1
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(101,44,138,0.6)").s().p("ARSiUIErCZIAAADIkrCOMgnOAAAIAAkrMAnOAAAIAAAB").cp();
	this.shape_14.setTransform(64.2,0);

	this.addChild(this.shape_14);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-76.3,-14.9,281,30);


(lib.Arrow = function() {
	this.initialize();

	// shape
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgxAhIAighIgiggIBjAgIhjAh").cp();
	this.shape_15.setTransform(5,0);

	this.addChild(this.shape_15);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-3.2,10,6.7);


(lib.seatedMan_at_desk = function() {
	this.initialize();

	// chair back
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#4B4E4D","#0C0705"],[0,1],69.4,21.7,-82.7,-19).s().p("AmDrOQADgBACgBIAKgEQADgBADgBQDAhADYBCQBxAiB0BBQDGBzA0CDQBpEKAXFpQAJFChPBlQg4BJi1AMQgCAAgCAAQhHAEhZgEQhfgFhTgIIAfoSIBcALIgfjcImggdIgWDDIBpAMIgaGoQgXAFgSAWQgSAXgDAgIgHgCQgpgLgjgPQiDg4g0htQhBiJANmYQAHjGApjPQAdiRBnhKQAkgaAsgSIAAAA").cp();
	this.shape_16.setTransform(65,235.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(0.1,1,1).p("ABsBnIgCAaAh9geQBAAHAPATQAXAaAAApQAAAogXAdQgUAahJACACMmoIggIPABOmvIg3NfABZGdIARkc");
	this.shape_17.setTransform(54.2,291.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(0.1,1,1).p("AhRJ6QCbAZCdgBQB6gBB4ggQCTgpAzhiQATglANguQAvingjklQgikbhnjFQhVijiVhmQihhujQgTQjTgUhiAZQhhAYh0BeQAkgaAsgRQADgCACgBIAKgDQADgCADgBQCPg1BfAAQBiABByAcQCZAoCVBVQBvA+A6BuQBrDNAgDPQAiDZABDTQABDShYBPQhYBOjUACQgCAAgCAAQhHAEhZgEQhfgFhSgIAm+tbQDAhADaBCQBwAhBzBCQDGByA0CEQBpEKAXFpQAJFChPBlQg4BIi1AMAojsoQhnBKgdCRQgpDPgHDHQgNGXBBCJQA0BtCDA4QAjAPApALAj5heQAaABAPAIQAHADAEAFQARARAAAXQAAAXgRAOQgQAQgXAAQgCAAgOgBQgBAAgCAAQgCgBgCAAQgTgCgOgMQgQgQAAgXQAAgXAQgQQARgQAXAAQABAAACAAIAAAAAkDAOQANgBAKgDQAPgEAIgGQAQgQAAgXQAAgXgQgQQgJgJgbgHAAMh/IhAAkIAJCTIBWAiIgfjZImgggAmEh5IgQgmIgWDEIAYgXIAOiHIFQAeAk+HZQgHgCgIAAQgHAAgHABQgXAFgSAWQgSAYgDAfAmZIqQgBAHAAAHQAAApAWAcQAOARAQAHQAMAFANAAQADAAACAAAlIKaQAdgDAUgaQAXgcAAgpQAAgogXgdQgPgUgVgGAArBaIhagKIg+gHIjUgZIhpgLAikOpIBCgTAmSAOIFnAqAlBAwIgaGoAlmKVIgODnQCWA2AvgGQAHgBAEgC");
	this.shape_18.setTransform(73.1,240.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#4B4E4D","#0C0705"],[0,1],-32.2,11.9,7.8,1.1).s().p("AgrhfIAAAAQA/AHAPATQAWAdAAAoQAAAngWAdQgVAahGACQAcgCAVgaQAUgdAAgnQAAgogUgdQgQgTgUgHIAAAA").cp();
	this.shape_19.setTransform(45.9,297.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#4B4E4D","#0C0705"],[0,1],-51.3,33.2,19.1,-7.4).s().p("AAYCBIgREcIhAATIA3tfIA8AHIggIPIgCAa").cp();
	this.shape_20.setTransform(62.4,291.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#4B4E4D","#0C0705"],[0,1],23,39.7,-22.7,-39.5).s().p("ABNG6QgFACgHABQgvAGiUg2IAOjnQAMAFANAAQADAAACgBIABAAQBIgCATgaQAWgcAAgpQAAgogWgdQgNgRhBgHIAAAAQgCAAgCgBQgHgBgIAAQgHAAgHABIAamoIDSAYIg2Nf").cp();
	this.shape_21.setTransform(48.8,290.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.rf(["#4B4E4D","#0C0705"],[0,1],-2.2,-3.9,0,-2.2,-3.9,15).s().p("AAPheQABAAACAAQAUAHAQAUQAWAcABAnQgBAogWAdQgVAagcACIAAAAQgDAAgCAAQgMAAgLgFQgRgHgNgQQgWgdAAgoQAAgGAAgHIAAAAQAEgfASgXQASgXAXgEQAGgCAGAAQAHAAAIACIAAAA").cp();
	this.shape_22.setTransform(39.6,297.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.rf(["#4B4E4D","#0C0705"],[0,1],0,0,0,0,0,23.9).s().p("ABQAUIjSgWIhogMIAYgXIFlAoIBYAjIhdgLIg+gH").cp();
	this.shape_23.setTransform(53.9,246.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["#4B4E4D","#0C0705"],[0,1],-19.6,0.1,4.3,0.1).s().p("AASg8IgOCHIgVAXIAUjDIAPAl").cp();
	this.shape_24.setTransform(32.2,234.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["#4B4E4D","#0C0705"],[0,1],-3,4.9,5.2,-26.3).s().p("AjPggIGfAfIhCAiIlOgeIgPgj").cp();
	this.shape_25.setTransform(53.4,228.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.lf(["#4B4E4D","#0C0705"],[0,1],-6.4,-0.5,3.3,-0.4).s().p("AARhsIAfDZIhWgiIgJiTIBAgk").cp();
	this.shape_26.setTransform(72.6,239);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.rf(["#4B4E4D","#0C0705"],[0,1],-1.7,-1.5,0,-1.7,-1.5,8.5).s().p("AACg2QAcAHAIAJQARARAAAVQAAAXgRAQQgHAIgPAEQgKADgMABQgSgCgOgOQgQgQAAgXQAAgVAQgRQAQgQAWAAQABAAABAAIAAAA").cp();
	this.shape_27.setTransform(47.7,236.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["#4B4E4D","#0C0705"],[0,1],-6.2,-0.2,5.7,2.9).s().p("AgmA2QANgBAKgDQAPgEAGgIQAQgQAAgWQAAgWgQgRQgHgJgbgHQAaACANAHQAHAEAEAFQARAQAAAVQAAAXgRAQQgQARgVAAQgCAAgOgBQgBgBgCAAQgCAAgCAAIAAAA").cp();
	this.shape_28.setTransform(51,236.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["#4B4E4D","#0C0705"],[0,1],20.9,-0.8,-38.4,-0.8).s().p("AgZg9QgCAAgBAAQgXAAgRAQQgQAQAAAXQAAAVAQAQQAOAOATACQACABACAAQABAAACAAQANACADAAQAVAAAQgRQARgQAAgVQAAgXgRgRQgEgEgIgEQgNgHgZgCIAAAAACzBZIllgqIAOiHIFOAeIAJCT").cp();
	this.shape_29.setTransform(50.7,237.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.lf(["#4B4E4D","#0C0705"],[0,1],-54.7,0,54.9,0).s().p("AChMAQC1gMA4hIQBOhlgIlCQgXlphpkKQg0iEjHhyQhxhChxghQjbhCi/BAIAAgBQCOg1BgAAQBiABB0AcQCXAoCVBVQBuA+A6BuQBsDNAgDPQAiDZABDTQABDShZBPQhXBOjUACIAAAA").cp();
	this.shape_30.setTransform(83.2,226.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.lf(["#A04E4E","#512926"],[0,1],-55.9,-14.5,67.5,18.5).s().p("AisMIIACgaQBUAIBdAFQBZAFBHgEQACgBACAAQDUgBBYhOQBYhPgBjTQgBjSgijZQggjPhrjOQg6huhvg+QiVhUiXgoQh0gdhiAAQhfgBiPA2QgDABgDABIgKAEQgCABgDABQgsARgkAaQB0heBhgYQBigYDTATQDQATChBvQCVBlBVCkQBmDEAjEZQAjEngvCnQgNAvgTAkQgzBjiTApQh4Afh6ABQibACidgZIAAAA").cp();
	this.shape_31.setTransform(82.2,226.7);

	// pants shading
	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.lf(["#BBBBBB","#4D4D4D"],[0,1],0,-9.5,0,1.2).s().p("AByAaQhUAJhbgNQiPgWhoAAQCLggDBAXQCMAPCRgjQhcAshnALIAAAA").cp();
	this.shape_32.setTransform(228.5,307.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.lf(["#BBBBBB","#595959"],[0,1],10.7,17.1,-0.8,-3).s().p("ABuhDQgSAcgyAbQhcAwhBBAQAzhbCLhOQAZgPAKgPQAMALgMAVIAAAA").cp();
	this.shape_33.setTransform(175.9,264.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.lf(["#BBBBBB","#595959"],[0,1],22.9,6.5,-2.3,-0.2).s().p("AACh/QgEBPAPBQQASBTgVALQgSALgMg5QgBhnAVhTQABgLABgKIAAAA").cp();
	this.shape_34.setTransform(189.3,272.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.lf(["#BBBBBB","#515151"],[0,1],-11,-31.5,-4.3,18.3).s().p("AC1hBQAJggghgbQBsBCAnA7QA1BkirAOQirAOhIgGQhKgGhTADQhTADgSgZQBOAOBOgfQBQghCDghQBvgYASg4IAAAA").cp();
	this.shape_35.setTransform(271.7,300);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.lf(["#8C8C8C","#3C3C3C"],[0,1],111.7,-6.7,4.9,54.8).s().p("AAslZIAVAJIgCBNQAKgCA2gDQA2gEBVgLIBTgNIABg9IAggLIgBBBQAogKAegMQAsAfhHAmQhIAmi+ANQAfB8gkCSQglCchaAeQACAxA1AKQCuAmDfgWIABAAQjWAnjNgEQkQgEkSg8ICdolIFfgJIABhDIARgV").cp();
	this.shape_36.setTransform(136.7,275.2);

	// shirt shading
	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.lf(["#A573C8","#402156"],[0,1],-35.9,-60.4,18.7,34.2).s().p("ACwBbQgMBEguAqQgWAbg8ABQidgFg/htQByA6BhgJQA/gGAWhGQAuiQgQisQA/CYgdCnIAAAA").cp();
	this.shape_37.setTransform(220.1,215);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.lf(["#A573C8","#402156"],[0,1],-11.3,-26.9,6.2,14.8).s().p("AkOAiQB9AxB9gMQB7gLBhhQQA2gtAEhDQAeBpgrBEQghAziSAdQiQAdhagsQhAgegmgqIAAAA").cp();
	this.shape_38.setTransform(158.1,229.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.lf(["#A573C8","#402156"],[0,1],-0.2,15.2,-0.2,-4.9).s().p("AihgeQDLAtB4gRQgVAshYgOQhxgPhlgrIAAAA").cp();
	this.shape_39.setTransform(149.1,221.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.lf(["#A573C8","#402156"],[0,1],-9.5,0,17.9,0).s().p("AgtECQA8kJgnj6QA4AtAODNQAKCUhlB1IAAAA").cp();
	this.shape_40.setTransform(112.2,157.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.lf(["#A573C8","#402156"],[0,1],9.6,0,-17.8,0).s().p("AAfEGQg1iGgIifQgHigA9hGQgXCmAeFlIAAAA").cp();
	this.shape_41.setTransform(93.3,153.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.lf(["#A573C8","#402156"],[0,1],-4.2,22.1,5.1,-13.2).s().p("AjFhIQBHgHBpAmQA0AVBVAkQBVAlB4AVQkNghhtgzQhvg1iYAvQA1gyBGgGIAAAA").cp();
	this.shape_42.setTransform(135.3,86.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.lf(["#A573C8","#402156"],[0,1],7.3,7.6,-2.3,2).s().p("ABKiyQAMBCgBA1QgBA2gWAZQgVAbgyAnQgzAogLA1QgggWAvg4QAvg3Aog+QApg/AChjIAAAA").cp();
	this.shape_43.setTransform(209.5,178.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.lf(["#A573C8","#402156"],[0,1],4.6,8.8,-1.8,-2.4).s().p("ABfgoQgRAYgvARQhaAlgpAxQAKg0BVgmQBRglAUguQAKAegLAQIAAAA").cp();
	this.shape_44.setTransform(204.5,158.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.lf(["#A573C8","#402156"],[0,1],26.5,-5.7,-17,9.3).s().p("AhhlxQAYDNAnBCQAmBCAFBRQAGBTAxBcQAxBbgIA3QgMgPgWgEQgagIgMgPQgxgqgRiWQAAAAABgBQgOhNAIhIQg4hcgIhpQgHhNAMhRIAAAA").cp();
	this.shape_45.setTransform(186,182);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.lf(["#A573C8","#402156"],[0,1],7.7,2.5,-15,-3.5).s().p("AgngqQAPhKBLgUQhTB6gGCXQgXhPAWhkIAAAA").cp();
	this.shape_46.setTransform(194.8,141.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.lf(["#A573C8","#402156"],[0,1],-60.3,-46.9,28.8,19).s().p("ACljmQgNBSAHBMQAIBnA4BdQgIBKAOBNQAAAAAAABQgYA0gVARQhRBEhgAOQh9AThugkQB6gIBrggQBtghAmheQAahAgjhDQgphLAOh9QATivBbiqQgqBqgPBhIAAAA").cp();
	this.shape_47.setTransform(159.7,168.1);

	// hair hilites
	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.lf(["#4B4E4D","#0C0705"],[0,0.588],0.3,-0.8,8.4,13.2).s().p("AgZgZQAcgDAQAcQAHALAAAPIgGgDIgBgFQgMgUgKgIQgMgIgKgHIAAAA").cp();
	this.shape_48.setTransform(137,3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.lf(["#4B4E4D","#0C0705"],[0,0.588],3.7,-6.3,-5.1,26.8).s().p("Ag5AUQgLhJArgmQgFASAIAbQArgyAngHQhTBpgCBmQgMgvAAhAQgOAAgGAbIAAAA").cp();
	this.shape_49.setTransform(116.4,30.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.lf(["#4B4E4D","#0C0705"],[0,0.588],0.7,-3.4,0.7,25.5).s().p("AATBIQAihAgWgIQg+ANgwA7IADgUQAYgrA2gZQgGgSglASQAagsBAgLQgRAfAlgFQAcA4grAwQgFAGgeAHIAAAA").cp();
	this.shape_50.setTransform(124.7,9.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.lf(["#4B4E4D","#0C0705"],[0,0.588],-6.6,-5.9,13.2,13.9).s().p("AgUg1QgVgSgtACQAQgIASgGQBBgZBKBIQgogMgPAMQAgBDgUA8QgrhihVgYQAPgTAxgDIAAAA").cp();
	this.shape_51.setTransform(151.5,14.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.lf(["#4B4E4D","#0C0705"],[0,0.588],-5.3,-8.8,9.8,17.5).s().p("AAHhFQAdgVgWgpQAfAMASAYQATAXAFAUQAFATgBAlQgPgqgZgGQAUA9gSAyIgFAAIgsg4QgYAqgGA/QAAAHgBAJIgFAAQhVgzAniCQAAAZAdARQgDhGAagMQAGApAbgVIAAAA").cp();
	this.shape_52.setTransform(135.2,28.8);

	// hair
	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.lf(["#4B4E4D","#0C0705"],[0,0.588],-28.5,-31.6,19.6,16.5).s().p("ABSlFIAFAJQAlgIAmANQAmANA9AzQAKAUgUAAQA0AhAaA3QACADAAADIgNAAQAgBYgOBjIgQgFQALAvgZAmIgGgIQAAgGgHgEQgHgEgJAAIgWABQgcAggDAsQAAADgBADQgIA6gbAmQgCAAgBgBQgLgJgFgRQgkAngvAYQgWANgRgUIgQANQg0gZg3AGQgQgEgOgLIhdAUIgTgMIgIgCQgggggPgsQgHgWgIgWIgBgCQgFAFgDAHQgYglAJgsQAFgbgFgZIgUAEIgIgCQATiaAsg2IgHgMQAIgmAegRQAZgPAOgbQABgCgBAAQgEgFgFgEQA+gtBCgQQBCgRAiAfQAEgFAFgEQAdgVAgAQIAAAA").cp();
	this.shape_53.setTransform(139.6,31.6);

	// man
	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.lf(["#4B4E4D","#0C0705"],[0,1],-3.4,0,3.5,0).s().p("AAjgxIAABOQgfAMgmAJIABg+QATgHAQgIQATgIAOgOIAAAA").cp();
	this.shape_54.setTransform(178.4,240);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.lf(["#4B4E4D","#0C0705"],[0,1],-14.2,0,14.4,0).s().p("ACPgtIgBA7QhwAWisAKIABhKQAcAJAcACQBxAIBzgkIAAAA").cp();
	this.shape_55.setTransform(157.5,244.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.lf(["#BBBBBB","#595959"],[0,1],52.4,-27.4,31,52).s().p("AoHlTIgBBNQCugKBvgXIABg9QAQgFAQgGIAABBQAogKAegMQA9ALgFBTQAAAJgGAJQAjgDgJA4ID5AtQG2BLDtCAQCYBTAwBLQgzAKiFA0QiFAzg/AEQhAADhQABQhQABgSgaQhUAKhcgOQjygliBAZQjVAnjOgEQkRgEkSg8ICcolIAAAAQARgBAQgDQACAAACAAQCxABCLgGIABhDQAQgIAIgJQAHADAGACQAAAAABAAIAAAA").cp();
	this.shape_56.setTransform(195.3,275.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.lf(["#B991D5","#5C2F7B"],[0,1],-79.2,-53.7,75,35.2).s().p("AhrqBQAhAwBPB/QBQB/gPBnQAiAsADDOQASAQAUAPQB3BYAZBcQA5DJg5CGQgxBXgvgFQjIACg8iQQgTgug9gYQhLgdgVi2QgFglgCgsQgCgfAEgmQhui3BCj5QBBj5B4gdIAAAA").cp();
	this.shape_57.setTransform(207.1,173.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.lf(["#B991D5","#5C2F7B"],[0,1],-49,1.7,32.7,1.7).s().p("AD3A4QAUAWA2BFQgMgDgOgDQiFgZhzg5QjmhwiHBtIgDgBQAqikBfgbQApgMAzADQCYAHC7DCIAAAA").cp();
	this.shape_58.setTransform(135.2,78.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.lf(["#B991D5","#5C2F7B"],[0,1],-54.1,-9.7,100.3,31.6).s().p("AHrqfQEDA6AdBkQh4AdhCD5QhBD4BtC4QgDAmACAgQACArAEAmQgcBtAjBRQAaA9gJBCQgGAwgYAbQgOAOgSAIQgTAIgTAHQgQAGgQAFQhzAkhzgIQgcgCgbgJQgBAAAAgBQgHgCgGgCQhCgchBhHQiRihiYh2IpJlHIBynsQBNjLBmgZQBngZBJgcQBJgbBUg2QABgBACgCQCHhvDmByQBzA5CFAaQAOACANADIAAAA").cp();
	this.shape_59.setTransform(118.3,160.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.lf(["#976E3A","#623E26"],[0,1],-27,0.6,27.1,0.6).s().p("AChDWQi5jEiZgIQgzgCgqAMIABgvQAdAOAlgGQArgIAsAOQAtANAvADQA+ADA5gaQABgBABAAIBNhPQACgDAAgCQAFBJAOAxQAIAaARgCQAMgCACgjQgMgsADgtQADgyANgmQAJgWgPgHQARgcAIAsQAGgEAFgHQgYAzAMA/QAQBTgVA7QgfBkg+A3IAAAA").cp();
	this.shape_60.setTransform(143.8,63.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.lf(["#976E3A","#553622"],[0,1],-6.6,-0.5,1.7,-0.5).s().p("AgfgXQABgGgCgFQACgFgEgTQgDgTAYgVQAFgXAOgBQAKgBAJADQAPAHgIAWQgNAlgEAzQgDAqAMAuQgCAkgMACQgOACgIgbQgPgzgEhGIAAAA").cp();
	this.shape_61.setTransform(164.7,55);

	// chair base
	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#000000").ss(0.1,1,1).p("AL4EtQgCABgBACQgRASgRABQgDABgDgBQgDAAgDAAAKrE+IgGgDQgMgIgJgcQgIgcAPgwQAOgqARgSAAgiiQkrAjlFCiApQBCQAagYAjAAQAnAAAbAcQAcAbAAAnQAAAmgcAcQgLAMgOAGArHAoQgMgMgCgMAsYlDQAeADACAAQAcAAAUAZQAUAZAAAkQAAAjgUAZQgUAagcAAQgCAAgQgBAK2C6QgFALgEANQgLApAIAhQAHAcASAIIABABQACABACAAIgBAAQgSAAgKgEALIFCQACABADAAAMUD6QABgFACgGQACgGABgGAsHiYQASgFANgRQAUgZAAgjQAAgkgUgZQgTgXgdgFIgBAAAsIiXQAAgBABAAArFApQgBAAgBgBArFApQAnAgA6gcQAKgFAKgF");
	this.shape_62.setTransform(101.3,485);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#000000").ss(0.1,1,1).p("Aur8gQADgBADgBADYoyIDLAyQC2AoDCgFQB0gKBwAsQBwAsgBBoQAAANgJAMIgKBeQgHBDiTAwIm9CNQixA+kNgcQgMgBgMgBQAYA4gKFtQApgCgnHZQHKAkGZBVQCEAfAGApIgFAyQgBAUgVAFQAMAAAMAKQAZBNgoBcQgVAKgPgRIAFg2QgwAZgqggIAFg7IgLBvQgGABgFABQgMAAgMgKQgZhMAnhbQktgikWAaQCLBzCYCPQAIAKAAAIQAAACgBADIgBAiQAAAIgFAIIAAAyQAPgGAWACQAHgBAGACQAWAGAIAhQAIAhgLAoQgLAogXAZQgRASgRACQgDAAgDAAQgDAAgDAAAJHcdIgGgDQgMgIgJgcQgBgDgBgDAHoZSIAAgPQgOgIgRgLQlDjfidgoQhKgThKAJAsdXmIAAAfAq3afQgHAPgMAMQgcAcgmAAQgnAAgbgcQgcgbAAgnQAAAAAAgBQgagHgQgkIAAhgIAAgBAuiXTQAAgEAAgDIAAgvQgCgRASgTQCPhkDxh6QjugsjBgEQgRANgUAGAvXUsQgTAYgaAAQgCAAgcAAQgBAAgBAAQgCAAgCAAQgagCgSgaQgUgcAAgnQAAgfAMgXIAAg4QgIgDgJgEIAAgzQgHhIB+gOQF6gpGtAcQAEnKAxgEQAPlpAdg/IAAAAQhTgIhOgKQiBCQhSAXQgOAEgMACQgEAAgEABQiBAnhug5Qhkg2gEjaIgsgXQhQgoAEhlQhThzBTh9AuImcQAEABADABAsinrQgBgBgCAAAo9AhQBBANBFAMQBRANBXALApIgfQAEAlAHAbApIgfQgBgHAAgIAtZhxQhJgfgxg2AtbhJQgBAUABATAoEEAQiKALADkmAm3A6QguAkgkABQgjADgRhBAAuBwQhPgFhNgHAiaIMQBjA/Bzg2AAuBwQhaAphCg1ARlkOQgQAVg4AQIqxDQQjYA/k1gRQk2gRhxgjAJsX9QgDAMgVAIQgxAWgqglQk7kSjWhVQhSgghLAZQk4BnlEDAQg6AbgngfQgCgCgCgCQgKgKgCgMAQFT6QAGgBAFgBAOqTxIAAAAIgFA7AOqTxIAAAAQgSgDgSgCIgPCnAOqTxQAaADAZADQAYAEAQgBAOqTxIAAAAAP6VuIALh0AQoUCIgPCpAQrStQgQAXg6gMQoVhwj6gHQhhgCAwAkQBOA8BTBFAJNamQAKggAUgVQALgMAMgFQAEgCAFgBAJmZhQgJADgIAGQgDADgEAFQgOASgNAnQgJAdgBAWQAAAKABAIAJmYvQgJAPgeAOQAAAAgBAAQgYALgfgIQgJgDgKgEQgGgCgGgDAHoZ9IAAgrAJNamQgCAGgCAGQgBAGgCAFQgHAiAHAcQAHAdARAIIACABQACAAABABIAAAAQgSgBgKgEAJkciQACAAADABAIpbeQgvAHgSghIAAhHAA+PsQgBAPgBAQQigBHhrhUQAAgTAAgRAxtQ9QANgmA4gBQFXgPGAAaQAxALgsAWQh5AyhNAnAvmR+QgSAHgUABQgFAAgFAAQgCAAgBAAQgEAAgDgBQgdgCgfgMAwLSGQAGAAABAAQAcAAAUAcQAUAcAAAnQAAAngUAcQgBABgBABQAAAAAAABQgBAAAAABAwiVEQAagBATgbQAVgcAAgnQAAgngUgcQgOgTgSgIAwWSHQgFgBgFABQgCgBgCAAQgCAAgCABQgaABgSAaQgFAGgDAHAwWSHQAAAAABAAQAAAAABAAQAFgBAEAAAwZSGQABAAACABAwVSHQAAAAABAAAxtRwQBRgHBbACAsdYcIAAgXAq3afQAIgSAAgVQAAgmgbgcQgcgbgmAAQgJAAgIABQgNACgLAGQgOAHgLALQgbAbgBAm");
	this.shape_63.setTransform(121.8,337.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.rf(["#4B4E4D","#0C0705"],[0,1],-3.2,-3.3,0,-3.2,-3.3,14.8).s().p("AhcAAQAAglAbgbQAMgMAOgHQALgFAMgCQAJgCAHAAQAmAAAcAcQAbAbAAAlQAAAVgIARQgHAPgMANQgcAbgmAAQglAAgcgbQgbgcAAgmQAAAAAAAAIAAAA").cp();
	this.shape_64.setTransform(43.6,503.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.lf(["#4B4E4D","#0C0705"],[0,1],-7.6,0,7.8,0).s().p("AAYBYQAIgRABgVQgBgngbgZQgagcgmAAQgJAAgIACIAAgYQAagXAjAAQAlAAAcAbQAbAcAAAkQAAAngbAbQgMAMgOAGIAAAA").cp();
	this.shape_65.setTransform(49.7,498.2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.lf(["#4B4E4D","#0C0705"],[0,1],-5.8,0,6,0).s().p("AA7gRQgNACgLAGQgOAGgLAKQgZAbgBAmQgagHgQgkIAAheIACAAQAnAfA4gbQAKgFAKgFIAAAeIAAAY").cp();
	this.shape_66.setTransform(36,495.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.lf(["#4B4E4D","#0C0705"],[0,1],-8.2,9.4,5.3,9.4).s().p("AAAAAQAAAAABAAIgBAAQAAAAAAAAIAAAA").cp();
	this.shape_67.setTransform(17.1,453.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.lf(["#4B4E4D","#0C0705"],[0,1],-2.8,0,3,0).s().p("AgcgaQAdAMAcACIAAABQgCAAgCAAQgCAAgCAAQgXACgTAXQgEAGgDAHIAAg1").cp();
	this.shape_68.setTransform(13,454.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.rf(["#4B4E4D","#0C0705"],[0,1],-2.2,-3.2,0,-2.2,-3.2,13.1).s().p("Ag2g1QADgHAFgGQASgZAZgCQACAAABAAQACAAACAAQAFAAAFAAIACABQASAHANATQAUAcAAAmQAAAngUAcQgTAagaABQgBAAgBAAQgBAAgCAAQgZgCgSgaQgUgbAAgnQAAgdAMgYIAAAA").cp();
	this.shape_69.setTransform(15.6,462.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.lf(["#4B4E4D","#0C0705"],[0,1],-4.7,0,4.9,0).s().p("AgihcIABgBQAFAAADAAQAGAAABAAQAaAAAUAbQAUAcAAAmQAAAngUAbQAAABgBABQAAAAgBABQAAABgBABQgTAXgYAAQgCAAgbAAQAagBATgaQASgcAAgnQAAgmgSgcQgOgTgSgHIAAAA").cp();
	this.shape_70.setTransform(20.7,462.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.lf(["#4B4E4D","#0C0705"],[0,1],-8.5,0,8.6,0).s().p("AhUgGQBQgIBZACQgRAMgTAGIAAAAQgTAGgTABQgGAAgFAAQAAAAgBAAQgDAAgEAAQgcgCgfgLQgJgCgIgEIAAAA").cp();
	this.shape_71.setTransform(16.9,452);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.lf(["#4B4E4D","#0C0705"],[0,1],-4.9,0,5,0).s().p("AghBTQABAAABAAQASgFANgRQASgZAAgjQAAgigSgZQgTgXgegFQAfADACAAQAaAAAUAZQAUAZAAAiQAAAjgUAZQgUAagaAAQgCAAgQgBQAAgBABgBQAAAAAAgBIAAAA").cp();
	this.shape_72.setTransform(26.9,461.4);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.lf(["#4B4E4D","#0C0705"],[0,1],-5.2,0,5.3,0).s().p("AACBVIAAgBQAUgcAAgnQAAglgUgcQgSgcgcAAQgBAAgGAAIgBgBQAUAAASgHIAAAAQAcAFATAXQAUAZAAAiQAAAjgUAZQgNARgSAFIAAAA").cp();
	this.shape_73.setTransform(23.4,461.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.lf(["#4B4E4D","#0C0705"],[0,1],-41,0,41.1,0).s().p("AjuAUQhbgBhQAHIAAgxQAMgmA5gCQFUgOGAAaQAyAKgsAWQh6AxhNAnQjsgtjBgEIAAAA").cp();
	this.shape_74.setTransform(49.4,448.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.lf(["#4B4E4D","#0C0705"],[0,1],-3.9,0,4,0).s().p("AgYhDIAABFQARAhAugHQgBAJACAIQgBACgCABQgRATgQABQgEAAgBAAQgCAAgDgBQAAAAgBAAIABAAQgCAAgBgBIgCgBQgSgIgHgdQgHgeALgpQADgNAFgLIAAAAAgHBDQgBgBgBAAQABABACAAIgBAA").cp();
	this.shape_75.setTransform(173.2,510.6);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.lf(["#4B4E4D","#0C0705"],[0,1],-2.8,0,3,0).s().p("AAdBZIgBABQgSgBgKgFIgEgDQgMgIgJgcQgIgcAPgtQAOgrAOgSIAAArQgEAMgEANQgJAmAHAhQAGAdARAIIACABQABAAACABQAAAAABAAIAAAAAAcBZQgSgBgKgEQAKAEASABIAAAA").cp();
	this.shape_76.setTransform(169.6,508.4);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.lf(["#4B4E4D","#0C0705"],[0,1],-6.2,0,6.3,0).s().p("AABBXQgtAHgSghIAAhGIAAgrIAAgPQAHADAFADQAKAEAJACQAfAJAWgLQABgBAAAAQAegOAJgPIAAAyQgJADgIAHQgDADgEAEQgOASgNAlQgJAegBAWIAAAA").cp();
	this.shape_77.setTransform(177,504.7);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.rf(["#4B4E4D","#0C0705"],[0,1],-1.5,-2.3,0,-1.5,-2.3,12.5).s().p("AgaBhQgBAAgBgBQABABACAAIgBAAIABAAQgCAAgBgBIgCgBQgRgIgIgcQgGgdAHgfQACgGABgGQACgGABgFQALghATgVQAMgMAJgEQAFgCAFgBQAGgBAHACQAWAFAHAhQAIAhgLAnQgKAogYAZQgRASgOABQgDABgEgBQgCAAgDgBQAAAAgBAAIAAAA").cp();
	this.shape_78.setTransform(185.6,510.4);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.lf(["#4B4E4D","#0C0705"],[0,1],-4.8,0,4.9,0).s().p("AAGBgQABABABAAQABABAAAAIAAAAQgQAAgLgFIgGgDQgMgIgIgcQgBgDgBgEQgCgIABgJQAAgWAKgcQAMgmAPgTQADgEAEgDQAFgGAJgEQAQgFAWACQgFABgFACQgLAFgMAMQgRAVgLAgQgCAGgBAGQgCAFgBAGQgHAgAGAcQAHAdAQAIIACAAAAIBhQgPAAgLgEQALAEAPAAIAAAA").cp();
	this.shape_79.setTransform(182,510.4);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.lf(["#4B4E4D","#0C0705"],[0,1],-1.1,0,1.3,0).s().p("AgLBUIANinQAZBNgmBaIAAAA").cp();
	this.shape_80.setTransform(227.9,474.3);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.lf(["#4B4E4D","#0C0705"],[0,1],-1.1,0,1.3,0).s().p("AALhSIABAAIgNClQgZhMAlhZIAAAA").cp();
	this.shape_81.setTransform(210.8,472);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.lf(["#4B4E4D","#0C0705"],[0,1],-4.9,0,5,0).s().p("AAyg6IgLBzQguAZgqggIAFg5IAFg8IAAAAQAaADAXAEQAYAEAQgCIAAAA").cp();
	this.shape_82.setTransform(219.7,470.9);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.lf(["#4B4E4D","#0C0705"],[0,1],-2.4,0,2.6,0).s().p("AgYBOIAPilQAQACASACIAAABIgFA7IgLBtQgGABgDABQgMAAgMgKIAAAA").cp();
	this.shape_83.setTransform(213.1,472.5);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.lf(["#4B4E4D","#0C0705"],[0,1],-46,0,46.1,0).s().p("AkbBGQhThFhOg6QgvgkBgACQD6AHIUBuQA6AMAQgXIgGAyQgBATgVAGQgFABgGABQgQABgXgEQgagDgagEIAAAAQgSgCgRgCIgBAAQksgikWAaIAAAA").cp();
	this.shape_84.setTransform(182.4,455.8);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.lf(["#4B4E4D","#0C0705"],[0,1],-2.4,0,2.6,0).s().p("AAZhQIgPCnQgTAKgPgRIAFg2IAKhyQAHgBADgBQAMAAAMAKIAAAA").cp();
	this.shape_85.setTransform(225.7,473.9);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.lf(["#4B4E4D","#0C0705"],[0,1],9.7,51.3,-68.6,-84.4).s().p("AnxhXQBOgnB5gzQAsgWgygKQmAgalWAOQg5ACgMAmQgHhJB+gNQF5gqGuAcQAAASgBASQBsBUCfhGQACgQABgQQHKAkGZBVQCDAfAHApQgQAXg6gMQoWhvj6gHQhggCAvAkQBOA7BTBFQCLByCYCOQAIAKAAAJQAAACAAACQgDAMgVAJQgyAVgpgkQk7kRjYhUQhRgghKAYQk4BllFDAQg6AcgmggQgCgBgCgCQgLgLgBgLQgCgRASgTQCOhkDxh4IAAAA").cp();
	this.shape_86.setTransform(118.4,464.4);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.lf(["#4B4E4D","#0C0705"],[0,1],-77.5,0,77.7,0).s().p("AqCB4QgKAFgKAFQg6AbgngfQgBgBgBgBQgMgLgCgMQAAgEAAgEIAAguQACAMAKAKQACACACACQAnAfA6gbQFEi+E5hnQBIgZBTAgQDXBVE8EQQApAlAygWQAVgIADgNIgBAjQAAAIgFAHQgKAPgeAOQAAAAgBABQgXALgfgIQgKgDgKgEQgFgDgGgDQgPgHgQgLQlEjdiegoQhKgThJAJQksAjlGCiIAAAA").cp();
	this.shape_87.setTransform(106.3,476.6);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.lf(["#4B4E4D","#0C0705"],[0,1],-14.4,0,14.5,0).s().p("AB+DPQgBAQgCAQQifBGhshUQAAgSABgSQAEnIAxgDQBhA/B0g2QAqgCgnHWIAAAA").cp();
	this.shape_88.setTransform(115.4,417.2);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.lf(["#4B4E4D","#0C0705"],[0,1],-10.8,0,10.9,0).s().p("AhAjkQBAA1BcgoQAYA3gKFsQhzA2hjg/QAOloAeg/IAAAA").cp();
	this.shape_89.setTransform(117.2,370.5);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.lf(["#4B4E4D","#0C0705"],[0,1],0,56.6,0,-2.9).s().p("ABPgBQhaAmhDgyIAAgBQBNAIBQAFIAAAA").cp();
	this.shape_90.setTransform(118.5,349.1);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.lf(["#4B4E4D","#0C0705"],[0,1],12.5,18.1,-1.5,-6.2).s().p("AA6ArQAAAUAAATIgsgXQhOgoAFhkQAwA2BIAdIgDAp").cp();
	this.shape_91.setTransform(29.8,325.8);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.lf(["#4B4E4D","#0C0705"],[0,1],-22.5,-34.4,7.3,17.3).s().p("AAkh+QgDEmCKgLQiBAnhsg5Qhkg2gEjaQgBgTABgUQCWA3AtgGQAHgBAEgCIAAAA").cp();
	this.shape_92.setTransform(52.9,347.4);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.lf(["#4B4E4D","#0C0705"],[0,1],-0.8,42.4,-0.8,-4).s().p("ABCgFQguAighABQgjAEgRhAQBAAOBDALIAAAA").cp();
	this.shape_93.setTransform(71,344);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.lf(["#4B4E4D","#0C0705"],[0,1],-68.7,18.5,68.8,-18.3).s().p("AtWApQBxAlE2ARQE3ASDWhCIKxjOQA4gQAQgVIgKBeQgHBDiTAuIm9CPQixA+kLgcQgMgBgMgBQhRgFhNgHQhTgIhOgKQhXgLhRgNQhFgLhBgOQgHgbgEgnIAAAA").cp();
	this.shape_94.setTransform(148.8,330.1);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.lf(["#4B4E4D","#0C0705"],[0,1],-14.4,57.5,5,-15).s().p("AC+gUQiCCNhPAXQgOAFgNABQgEABgDAAQiLAMAEknIBBgTQABAIAAAHQAEAoAIAbQAQBBAkgDQAjgCAsgkQBSAOBXALIAAAA").cp();
	this.shape_95.setTransform(75.5,348);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.lf(["#A04E4E","#512926"],[0,1],-8.6,0,8.8,0).s().p("ABMCiQhKgfgug2QhUhwBUh+QAiAPAnALQADABAEABQgBAHAAAHQAAAoAXAdQANARAQAGIgLC9").cp();
	this.shape_96.setTransform(28.3,309.8);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.lf(["#A04E4E","#512926"],[0,1],5.6,20.9,-5.5,-20.8).s().p("ANTgBQgQATg4AQIqxDQQjWBBk3gRQk2gRhxglQgBgIAAgHIARkaQCdAZCdgCQB6gBB4gfQCSgpA0hjQATgkANgvIDJAyQC2AoDCgFQB0gKBwAsQBwAsgBBoQAAANgJAMIAAAA").cp();
	this.shape_97.setTransform(149.2,310.7);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.lf(["#4B4E4D","#0C0705"],[0,1],-0.2,71.4,110,71.4).s().p("AACAAQgCAAgBABQABgBACAAIAAAA").cp();
	this.shape_98.setTransform(28,154.9);

	// leg shading (rt)
	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.lf(["#BBBBBB","#515151"],[0,1],88.1,37.6,-5.8,12.3).s().p("ADQmgQhjDShzDeQh4DlguCtQgJhtgRg3QgRg3APhnQAOhmBqhiQA9g5BVhOQAvgvBfiDIAAAB").cp();
	this.shape_99.setTransform(267.8,385.7);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.lf(["#BBBBBB","#515151"],[0,1],-24,91.6,11.6,-42.8).s().p("AjACCQgsAbjHD9QC7mPAWgoQBvilB2htQAvAYCRg6QCRg5BKgPQAdAtgJAqQgVBfhBCBQAihrgggYQgfgXg6AzQg7A0hMBTQhMBShiAsQhlAsgrAaIAAAA").cp();
	this.shape_100.setTransform(260.8,341.2);

	// leg shading (lft)
	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.lf(["#BBBBBB","#515151"],[0,1],51.8,35.5,-19.3,-5.5).s().p("AiHCmQgEg5AxhsQAwhqBNiQQArg1A6iWIAAAAQgpDlg3D1Qg3D8ABCzQgLgughglQhFhMgIiAIAAAA").cp();
	this.shape_101.setTransform(159.4,358.6);

	// man leg
	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.lf(["#4B4E4D","#0C0705"],[0,1],-17,5.2,16.8,-3.8).s().p("AikhpQCKg7DXDOIgTBNQjdi/iJA8IAYhd").cp();
	this.shape_102.setTransform(106.8,426.9);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.lf(["#4B4E4D","#0C0705"],[0,1],-2,4.3,2.8,-13.8).s().p("AhmAAIAGguQBqAmBeA3QhKABiEgwIAAAA").cp();
	this.shape_103.setTransform(147.5,399.2);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.lf(["#4B4E4D","#0C0705"],[0,1],-17.4,0,17.6,0).s().p("ACvBUIgmBFQijjyiUAWIAvhTQCTgWCbEAIAAAA").cp();
	this.shape_104.setTransform(194.8,437.2);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.lf(["#4B4E4D","#0C0705"],[0,1],-16.5,28.2,-0.5,0.6).s().p("AiegqIAwhBQCGA4B8BPQAFAEAGAEIgSAqIgNAeQiUhxiKglIAAAA").cp();
	this.shape_105.setTransform(217.5,409.7);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.lf(["#4B4E4D","#0C0705"],[0,1],-2.5,3.5,6.8,-12.7).s().p("ABeBHQhIgRhzhSIASgqQBdBABMBNIAAAA").cp();
	this.shape_106.setTransform(241.1,420.5);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.lf(["#4B4E4D","#0C0705"],[0,1],-20.4,-16.4,41.3,45.3).s().p("AEwFyQg3iLkgjEQicj/iUAWQAchSCWhZQAJACAJACQCJAlCVBzQAGAFAHAFQgQAuAQA6QCUDPAgBeQAgBbg5BKQgBABgCACIAAAA").cp();
	this.shape_107.setTransform(216.4,442);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("ABljrQCUgXCmD0IAmhFQEhDCA4CLQgCAXgcAUQgUANhHgQQhygahkhHQhkhHh5ivIgxgLQiIiJAsgiIAAAAAmcjjQFKByBYB2QAFAXgVAaQgQAShIADQh1AFhzgrQhzgpijiMIgyACQinhgAigtQCJg8DfDAIAThM").cp();
	this.shape_108.setTransform(167.1,454);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.lf(["#BBBBBB","#595959"],[0,1],-33,-16.3,16.7,12.1).s().p("AgoJ9QhMhPhehAQgGgEgFgEQh8hRiIg4QgIgDgHgDQBnhjA+iVQBKiuBcixQBvilB3hsQA9AWCGg3QCHg2BQgUQAdAtgJAqQgcCHh1DIQgDAEgCAEQgDAEgCAEIABAAQhkDQh1DhQh4DlgsCtIAAAA").cp();
	this.shape_109.setTransform(254.6,363.9);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.lf(["#4B4E4D","#0C0705"],[0,1],-8.5,31.7,-0.3,0.9).s().p("ACZBJQiuhIiOAAIAdhJQCQATCNAuQAHACAGACIgHAsIgEAg").cp();
	this.shape_110.setTransform(121.3,394.9);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.lf(["#4B4E4D","#0C0705"],[0,1],-25.1,-8.8,50.5,34.8).s().p("Aj4koQCOAACtBIQAIADAIAEQgEAwAfA0QDEChA4BTQA3BQgkBWQgBACgBACQhah4lJhyQjZjPiJA8QAFhWB6h9QAJgBAKAAIAAAA").cp();
	this.shape_111.setTransform(129.8,424.8);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.lf(["#BBBBBB","#626262"],[0,1],59.6,32,-9.9,-7.9).s().p("ACYKsQheg5hpgmQgHgCgGgCQiNguiSgTQgIgBgIgBQBKh6AWigQAZi9AsjBQBAi8BZiIQAmgaArgnQDEiqBaAaQAnAkADAqQAHCKg9DgQgCAEgBAFQgBAEgCAEIABAAQgqDjg3D3Qg4D9AACzIAAAA").cp();
	this.shape_112.setTransform(142.6,335.5);

	this.addChild(this.shape_112,this.shape_111,this.shape_110,this.shape_109,this.shape_108,this.shape_107,this.shape_106,this.shape_105,this.shape_104,this.shape_103,this.shape_102,this.shape_101,this.shape_100,this.shape_99,this.shape_98,this.shape_97,this.shape_96,this.shape_95,this.shape_94,this.shape_93,this.shape_92,this.shape_91,this.shape_90,this.shape_89,this.shape_88,this.shape_87,this.shape_86,this.shape_85,this.shape_84,this.shape_83,this.shape_82,this.shape_81,this.shape_80,this.shape_79,this.shape_78,this.shape_77,this.shape_76,this.shape_75,this.shape_74,this.shape_73,this.shape_72,this.shape_71,this.shape_70,this.shape_69,this.shape_68,this.shape_67,this.shape_66,this.shape_65,this.shape_64,this.shape_63,this.shape_62,this.shape_61,this.shape_60,this.shape_59,this.shape_58,this.shape_57,this.shape_56,this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-1.7,304.5,522.1);


(lib.computer_desk = function() {
	this.initialize();

	// Layer 1
	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#333333").ss(0.1,1,1).p("AASivIAAFrAgRC2IAAlx");
	this.shape_113.setTransform(536.9,340.4);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#333333").ss(0.1,1,1).p("ACSmPIkPFvQgbAfAFA2QAAACAAABIAAFqQgTAHgSgNIAAlwQgHg4AcggIEQlwQAPgKAJADIAAAAQAQAGAQAFQAGAAAEAEIAAAAQAKAJABAfAC6AAQgXAJgOgOACVl4QgBgOgCgJAClmYQgIABgKAHIgBAB");
	this.shape_114.setTransform(520.1,359.3);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.lf(["#4B4E4D","#0C0705"],[0,1],-10.6,25.6,11.3,-56.4).s().p("ACwmYQgIABgLAHIAAABIkQFvQgbAfAGA2QAAACAAABIAAFqQgUAHgSgNIAAlwQgGg4AcggIEQlwQAOgKAJADIABAAQAQAGAQAFIAAAA").cp();
	this.shape_115.setTransform(519.1,359.3);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.lf(["#4B4E4D","#0C0705"],[0,1],0,23.7,0,-33.1).s().p("AgTjEIABgBQALgHAHgBQAEAAAEAEIAAAAQAKAJACAfIAAFrQgWAKgOgQIAAlxQAAgOgDgJIAAAA").cp();
	this.shape_116.setTransform(536.8,339);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#333333").ss(0.1,1,1).p("AFHoLIAAAnIAAADAtm+nQKjgMKRAkAn8oxQABAMAsAMQAdAHAxAIQB6ATCuAHQCrAIB7gJQAwgEAdgFQApgHAEgKAjGAJIiOgMIAAgKIi0BmIgBAkAsSBiIAAgRIgYAOA/kgZIAAgkICfhcIgLgBIkSCiIaLCkIERijAXDFpIKgA5Ar7uIIAAuwIQ6AoAXBJvIIbAtIAAgnAeZd3QAAALg3ABQg3AChNgJQhOgJg3gOQg3gOAAgLQAAgKA3gCQA3gBBOAJQBNAJA3AOQA3AOAAAKIAAAAEAgzAHLIqlg5EAhjAerIAA4JEghiAAIIAAAiAnXDPIAAgjAp7grIy1h6IgVAMAsqA7IgBAAIy5h4AsrA7IABAAICvhmAsqA7IAAAkAsSBRIABgTICWhVIAAgUAlUgNIkKgbIgdARAsRA+IEJAb");
	this.shape_117.setTransform(288.2,196.4);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#333333").ss(0.1,1,1).p("AE6+vIA8AQIAATPIg8AvQjdAHjZgIQC8AaByBdACyoEQABABAAABQAAABAAAAQgEAUh3AIQh4AJiugIQitgHh7gTQh6gTAAgUIAAgsQB4hRC/gMQlTgXlPg7IAAzHAl7soQAMANAAASQAAASgMAMQgNANgSAAQgSAAgMgNQgNgMAAgSQAAgSANgNQAMgMASAAQASAAANAMIAAAAAh8qiQhvgEhugIAi9CXQiIAugVhGQgPg0BAgvQBFgvBKAFQCBAKgNA1QgCAJgGALIiCBOQgHACgGACIAAAAAnpgjIAAAaIi0BmIkJgbAu/A/Iy6h4AneBaQAvALAzgdQgCgbAPgVIhvBCAlvAYIAVgNIAAggAgmAxQgEgng5AgQhcA3ACA2AT6FyIA1gpIE2jtIKSAnIAAWQIkpF4IgwA9IqkhxIAAj6IAAzrAfOGCIEpj/ACq8wIAAPMIw5hEAE6qhIAA0OAdIJVIobguIAAAoAYSRbQAOgOATAAQAUAAANAOQAPAOAAATQAAAUgPANQgNAOgUAAQgTAAgOgOQgOgNAAgUQAAgTAOgOIAAAAAeeanIAAEhAeeanIAAz8AT6ZdQExBWFzgMAfOGCIgwApEgj2AAKIaKClICOhV");
	this.shape_118.setTransform(303.1,199.6);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.lf(["#BBBBBB","#6A6A6A"],[0,1],0,10.7,0,-10.5).s().p("AAqBBIkHgbICWhVIAdgRIEIAbIi0Bm").cp();
	this.shape_119.setTransform(231.8,198.8);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.lf(["#BBBBBB","#6A6A6A"],[0,1],-54,0.1,15.9,0.1).s().p("AiDgeIEHAbIAAAiIkHgbIAAgOIAAgU").cp();
	this.shape_120.setTransform(222.8,205.8);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.lf(["#BBBBBB","#6A6A6A"],[0,1],9.3,14.1,0.6,-1).s().p("ABXhFIAAAUIiUBVIAAAUIgZAOIAAgkIAAgBICthm").cp();
	this.shape_121.setTransform(215.8,199);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.lf(["#BBBBBB","#6A6A6A"],[0,1],-0.5,6.4,0.7,-6.3).s().p("AK0AIIivBoIgBABIy3h5ICfhcIAVgMISzB4").cp();
	this.shape_122.setTransform(155.3,191.1);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.lf(["#BBBBBB","#6A6A6A"],[0,1],-60.1,-5.7,60.3,5.9).s().p("AJdArIgBAkIy4h5IABgkIS3B5IABAA").cp();
	this.shape_123.setTransform(146.6,198.1);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.lf(["#BBBBBB","#6A6A6A"],[0,1],-169.7,-11.5,66.7,8.1).s().p("ANFBBIAAAiI6JijIAAgiIaJCj").cp();
	this.shape_124.setTransform(157.2,207.2);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.lf(["#4B4E4D","#0C0705"],[0,1],72.3,72.3,-72.1,-72.1).s().p("AAXsiIAAYIIguA9IAAkhIAAz7IAugp").cp();
	this.shape_125.setTransform(500.6,318.5);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.lf(["#BBBBBB","#6A6A6A"],[0,1],-18.6,0,18.8,0).s().p("AC7AVQAAALg3ABQg3ABhNgIQhMgJg3gOQg3gMAAgLQAAgLA3gBQA3gBBMAJQBNAJA3ANQA3AMAAALIAAAA").cp();
	this.shape_126.setTransform(464.1,385.4);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.lf(["#4B4E4D","#0C0705"],[0,1],-33.7,0,33.8,0).s().p("AlRi0QExBWFygMIAAEfIqjhyIAAj3AC4BEQAAgLg3gOQg3gNhLgJQhOgJg3ABQg3ABAAALQAAALA3AOQA3AOBOAJQBLAJA3gCQA3gBAAgLIAAAA").cp();
	this.shape_127.setTransform(464.3,380.7);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.rf(["#4B4E4D","#0C0705"],[0,1],-1.4,-1.4,0,-1.4,-1.4,7.1).s().p("AggggQAOgOASAAQATAAANAOQAPAOAAASQAAATgPANQgNAOgTAAQgSAAgOgOQgOgNAAgTQAAgSAOgOIAAAA").cp();
	this.shape_128.setTransform(461.9,314.5);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.lf(["#BBBBBB","#6A6A6A"],[0,1],-66.8,-71.4,62.4,57.8).s().p("AFSKaQlyALkxhVIAAzqIKjA5IAAT7AD7m3IoZgtIAAAnIIZAuIAAgoAg5BNQgNAOAAAUQAAATANAOQAOAOAUAAQATAAAMgOQAOgOAAgTQAAgUgOgOQgMgNgTAAQgUAAgOANIAAAA").cp();
	this.shape_129.setTransform(464.3,303.3);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.lf(["#4B4E4D","#0C0705"],[0,1],-26.8,0,27,0).s().p("AkMgBIAAgoIIZAsIAAAnIoZgr").cp();
	this.shape_130.setTransform(462.6,259);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.lf(["#7A7AC2","#3C3C80"],[0,1],-11.9,-10.5,82.5,83.8).s().p("AocG2IAAuuIQ5AoIAAPKIw5hE").cp();
	this.shape_131.setTransform(266,62.1);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.lf(["#4B4E4D","#0C0705"],[0,1],64.3,64.3,-64.1,-64.1).s().p("AiTOEIAA4IIEnj/IAAWOIknF5").cp();
	this.shape_132.setTransform(517.8,302.8);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.lf(["#4B4E4D","#0C0705"],[0,1],-18,-18,18.1,18.1).s().p("AC7CTIqdg5IE2jrIKPAnIkoD9").cp();
	this.shape_133.setTransform(484.2,223.5);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.lf(["#4B4E4D","#0C0705"],[0,1],-20.9,-12,21,12.2).s().p("AFqAHIgwApIqjg3IA1goIKeA2").cp();
	this.shape_134.setTransform(466.7,237.4);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.lf(["#4B4E4D","#0C0705"],[0,1],-7.4,0,7.6,0).s().p("AhKA+QgCg3Bag1QA4ggAFAnQgCAJgGALIiABMQgHACgGADIAAAA").cp();
	this.shape_135.setTransform(291.6,208.6);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.lf(["#BBBBBB","#6A6A6A"],[0,1],-51.2,30.8,-6.4,4.9).s().p("Ag2AfIBthAQgPAVACAZQgxAdgvgLIAAAA").cp();
	this.shape_136.setTransform(260.7,205.5);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.lf(["#BBBBBB","#6A6A6A"],[0,1],-55.3,-19.7,132.8,30.6).s().p("APOAAIkSCkI6IikIERiiIALABIieBcIgBAjIS4B5IAZgOIAAAQIEJAbIC0hoIAAgYICPAM").cp();
	this.shape_137.setTransform(170.9,197.3);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.lf(["#BBBBBB","#6A6A6A"],[0,1],8.4,14.8,-0.5,-0.7).s().p("AhZBGIABglICyhmIAAAKIgBAaIiyBn").cp();
	this.shape_138.setTransform(245,201.9);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.lf(["#BBBBBB","#6A6A6A"],[0,1],12.8,22.1,-0.8,-1.4).s().p("AAEAOIiLBUIAAgiIEPiiIAAAjIgVAMIhvBB").cp();
	this.shape_139.setTransform(254.6,207.2);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.lf(["#BBBBBB","#6A6A6A"],[0,1],-10.6,-4.7,2,2.5).s().p("ACagaQgFgng4AhQhcA0ACA3QiGAtgVhGQgPgyBAguQBFgyBIAFQCBALgNA2IAAAA").cp();
	this.shape_140.setTransform(283.7,207.2);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.lf(["#4B4E4D","#0C0705"],[0,1],-41.7,0,41.9,0).s().p("AGiAUIAAADQgEATh2AJQh7AJitgIQisgHh6gTQh7gTAAgSIAAgsQABAMAsAMQAdAHAxAIQB6ARCsAHQCtAIB7gJQAwgEAdgDQAogHAFgKIAAAl").cp();
	this.shape_141.setTransform(279.1,145.8);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.lf(["#4B4E4D","#0C0705"],[0,1],-7.3,8,88.8,33.8).s().p("AGiAxQgEALgpAHQgdAFgwADQh7AJitgHQisgHh6gUQgxgHgdgIQgsgMgBgLQB4hQC/gLQBtAIBuAEQC+AZBzBbIAAAA").cp();
	this.shape_142.setTransform(279.1,138.9);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.rf(["#4B4E4D","#0C0705"],[0,1],-0.7,-2.2,0,-0.7,-2.2,6.9).s().p("AAegdQANAMAAARQAAARgNANQgMAMgSAAQgQAAgNgMQgMgNAAgRQAAgRAMgMQANgNAQAAQASAAAMANIAAAA").cp();
	this.shape_143.setTransform(262,121.7);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.lf(["#BBBBBB","#6A6A6A"],[0,1],-69.4,-69.4,69.5,69.5).s().p("AKbp6IAAUNQjdAGjbgHQhvgEhugIQlRgYlPg7IAAzFQKhgLKUAjIAAAAAgaIMQgNgNgSAAQgSAAgMANQgNAMAAASQAAASANANQAMAMASAAQASAAANgMQAMgNAAgSQAAgSgMgMIAAAAAILn6Iw5goIAAOuIQ5BEIAAvK").cp();
	this.shape_144.setTransform(267.8,66.2);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.lf(["#BBBBBB","#6A6A6A"],[0,1],-1.2,269.8,-1.2,13.6).s().p("AgdKHIAA0NIA7AQIAATNIg7Aw").cp();
	this.shape_145.setTransform(337.5,67.4);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("#333333").ss(0.1,1,1).p("AmhkQQhpgBhBABAFLjnQCEANB9ATAnaj9QA9AMBJAIQDyAcFygHAgMEBIAAAR");
	this.shape_146.setTransform(147.4,113.4);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f().s("#333333").ss(0.1,1,1).p("ApFGGIgsAQIgnAPIL2A2IBagiQgXgiABhUQkBAZkZgkIjNBOQgVgjgFhSQADg8AGhYQAFhPDjhRQALgEALgEQARgFASgGAnfg2QjTA9gcBvQgXDlA+A4IA2ADABeHrIr2g1IAAgRAjLi8QAihsAWjCQDfBMF1gtQAWFgggBdAK4ARQBEByhYEIIiaBOIlHgTIhlAlAK4ARQjEA4gYB6QgUD7BCAbAjLi8IJpAWQgCCPggAbQAbgIAggKAjogPQAdhIAAhlQgrCMg/gGAC4G5QAFAIAGAFAF8AEQi9BDgPBkQgOBaAAA+Al4E4QhygPh1gY");
	this.shape_147.setTransform(136.6,91.6);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.lf(["#4B4E4D","#0C0705"],[0,1],-18.5,7.4,7.9,-2.1).s().p("AgxAZIAAgRIBYggQAFAIAGAFIhjAk").cp();
	this.shape_148.setTransform(151.1,138.3);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.lf(["#4B4E4D","#0C0705"],[0,1],-8,0,8.2,0).s().p("AAzBWQhGgIg9gMQAKgEALgDQASgGASgGQA9AGAriKQAABjgeBIIAAAA").cp();
	this.shape_149.setTransform(108.1,81.3);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.lf(["#EAEAEA","#C8C8C8"],[0,1],-32.3,0,32.5,0).s().p("AEiBgQlyAHjzgcQAehIAAhjIJpAWQgDCNgfAdIAAAA").cp();
	this.shape_150.setTransform(145.7,82.4);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.lf(["#BBBBBB","#6A6A6A"],[0,1],-40,-48.9,10.4,1.4).s().p("AkJBfQAAg/AOhYQAPhkC9hDQAbgKAegJQCEANB9ATQjEA4gYB6QgVD5BDAbIlFgTQgGgFgFgIQgXgiABhTIAAAA").cp();
	this.shape_151.setTransform(179.5,114.5);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.lf(["#4B4E4D","#0C0705"],[0,1],11.3,19.3,-33.6,-58.5).s().p("AhLDjQhCgbAUj4QAYh7DCg3QBEBxhYEGIiYBO").cp();
	this.shape_152.setTransform(196.5,116.1);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.lf(["#4B4E4D","#0C0705"],[0,1],-16.7,-13.4,31.5,34.9).s().p("AE4DkQgfAKgcAJQAggcACiPIppgWQAihqAWjDQDhBNFzguQAWFfggBdIAAAA").cp();
	this.shape_153.setTransform(149.3,67.2);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.lf(["#BBBBBB","#6A6A6A"],[0,1],0.1,-5.2,0.1,23.3).s().p("AkGCjQhxgPh2gYQADg8AGhWQAFhPDjhTQA9AMBJAIQDwAcF0gHQi9BDgPBiQgOBaAAA/QkDAYkXgkIAAAA").cp();
	this.shape_154.setTransform(125.2,106.5);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.lf(["#4B4E4D","#0C0705"],[0,1],-18.7,11.2,1.3,-0.3).s().p("Ahyg5QBzAZByAOIjLBMQgVgigFhRIAAAA").cp();
	this.shape_155.setTransform(87.4,124.8);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.lf(["#4B4E4D","#0C0705"],[0,1],-0.2,10.5,11.1,-32.1).s().p("AlUgCIDNhOQEXAkECgYQgBBRAYAiIhbAiIr2g2IAogPIAsgO").cp();
	this.shape_156.setTransform(112.6,131);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.lf(["#BBBBBB","#6A6A6A"],[0,1],-49.2,-38.8,20.4,1.3).s().p("AhZBhQAFBTAVAiIgrARIg3gDQg+g4AXjkQAchuDRhAQBBAABpAAQgSAGgRAGQgLAEgLAEQjhBSgFBPQgGBXgDA7IAAAA").cp();
	this.shape_157.setTransform(84.8,109.1);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.lf(["#4B4E4D","#0C0705"],[0,1],-32.1,2.8,77.1,2.8).s().p("AF8ASIAAARIr3g0IAAgRIL3A0").cp();
	this.shape_158.setTransform(108.1,137.3);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f().s("#333333").ss(0.1,1,1).p("AP/6vQgSgFgPgGQgygUgKgWAcRJGIAkgsEAqRAK+IAAAyEAgaASrQgDAagYAhEgjhgUOQjZgdjXgfAP+3LIABjkABSpwIAAAyANFv1QgZgBgZgBANFv1QEeAOEiALQAxACAxACAXnwoQ1ogw0SiEQgZgDgZgCQr0hOrYhrAP+3LIAAA4IJwAcAZu5UQnIgming1Aas5PQgfgCgfgDAZtzOIA/ACAaszOIAAmBAXnO0IEqluEAg6gVrIpTFDAXnbmIEqlcEAkXASQQiRgJiIgSQhHgKhFgMQgxgJgwgKQibghiPgwQgWgIgXgHIAAAyAc8SHIgrAxAXnO0IgtA4EAkXASQIAAAyEgiBgUBQCjAVCkAUQAbADAaAEQD1AdD4AaQBDAHBCAHQO9BhPpA0EgiBgMoIAAgmIAAmzQgwgGgwgHEgiBgMoIgBeDIAAAAIF9jhA86zYIAAENA86nDIAAlD");
	this.shape_159.setTransform(272.6,288.4);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f().s("#333333").ss(0.1,1,1).p("AOr+AIAAg0QAAAAAAAAIBfgvIPhAtIAAA0IAAFzQAtAEAsAFIAABQIkpChIAAa/Ac/F+QHeAdF+CHIl6HSEAqbAJVIl6HSQiCgIh8gPEAgJARLIrdNnQhNBQhwgxQh/g4ByiFIEtlHIAA6oMgyKgF9IAATfICchWQBHgZAsASQB5A0hOAtIwCJbQhUBFhbg3Qhag3BuhSIGHjaMAAAgk6EgqHgXlIAAhQINbjLQY2A5TeBeQAQABAQABABcraILzkiIAAiUAMdyTIAAAsIkJCDIm4DYAXxx0IAAhQAZ44SIAAjdAa28eIAAA0IE1iYAa28eIE1iYAa21qIE1iYIAAgNAZ44SIgBCoAcb0VIkqChIAAeNAOr+0QAuBcLdA6AcbTvIAAjSIAAg6QibghiPgwIAAK4IhigRIAAhsAXEODQAXAIAWAHAdGPsQBsAVBxAPAcbPjQAVAFAWAEAWPx3IAAOcA8wxmIlHB8IIaioIB5AIIFbhpIAAg1A8wuiIlHghA77LeIAAhXA8wxmIIijQEgjXAORIAAAeIBfAQA77pYIg1gGA3kyKIf4CmEgh3gPqMAjTADeABcraI+MjI");
	this.shape_160.setTransform(271.6,303.9);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.lf(["#4B4E4D","#0C0705"],[0,1],-63.5,0,63.6,0).s().p("Ai3gFIAAAcIBfARIAAAAIF7jfIAAhXICchXQBHgZAsASQB5A0hOAtIwAJZQhVBFhag3Qhag3BuhSIGHjY").cp();
	this.shape_161.setTransform(63.6,395.9);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.lf(["#4B4E4D","#0C0705"],[0,1],-127.3,70.3,46.4,-29.9).s().p("AEQhIIofDOIAAkLQAaADAbADQDyAdD4AaIAAAA").cp();
	this.shape_162.setTransform(114.7,177.7);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.lf(["#4B4E4D","#0C0705"],[0,1],-86.6,37,0.5,-13.2).s().p("AiuApIIfjNQBDAHBDAGIAAA1IlcBnIh4gGIoZCmIFIh8").cp();
	this.shape_163.setTransform(105,187);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.lf(["#4B4E4D","#0C0705"],[0,1],-4.3,210.1,-4.3,-68.6).s().p("ACJufIAAFDIA1AGIAATgIAABXIl7DhIAAAAIAA+DIFGAi").cp();
	this.shape_164.setTransform(73.7,303.7);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.lf(["#4B4E4D","#0C0705"],[0,1],24.8,35.9,24.8,-292.1).s().p("AAvS1IhegRIAAgdMAAAgk7QAvAHAwAGIgBGyIAAAnIAAeD").cp();
	this.shape_165.setTransform(49.9,279.4);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.lf(["#4B4E4D","#0C0705"],[0,1],-9.2,181,-9.2,33.9).s().p("ACjiuIAAELIlFB8IAAmxQCiAVCjAVIAAAA").cp();
	this.shape_166.setTransform(71.1,181.9);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.lf(["#4B4E4D","#0C0705"],[0,1],25.5,28.3,-1.2,1.6).s().p("Ai8DPIF5nQIAAAzIl5HQIAAgz").cp();
	this.shape_167.setTransform(524.2,384.4);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.lf(["#4B4E4D","#0C0705"],[0,1],-50.6,0,50.8,0).s().p("AiXgZIAABpIBiASIEolaIAAjSIArgwQBsAVBxAOQgCAagYAhIrbNlQhNBRhwgxQh/g5ByiEIEtlF").cp();
	this.shape_168.setTransform(429.2,455.2);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.lf(["#4B4E4D","#0C0705"],[0,1],-62.9,0,63.1,0).s().p("AGuA4IAAAzQiCgIh8gPQhxgPhqgVQgWgEgVgFQibghiPguQgWgHgXgIIAAgzQAXAIAWAIQCPAvCbAiQAwAJAvAIQBEAMBIAKQCIASCRAIIAAAA").cp();
	this.shape_169.setTransform(462.3,399.5);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.lf(["#4B4E4D","#0C0705"],[0,1],2.1,79,2.1,-88.6).s().p("ACUAAIknFcIAAq2QCPAvCYAhIAAA6IAADQ").cp();
	this.shape_170.setTransform(438.6,430.2);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.lf(["#976E3A","#74502E"],[0,1],-17.8,31.2,18.1,-31).s().p("AJriWIl6HRQiRgJiHgSQhHgKhFgMQgxgJgvgKQibghiPgwQgXgIgWgHIAtg4IEqlsIAkgtQHcAdF+CHIAAAA").cp();
	this.shape_171.setTransform(481.2,373.7);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.lf(["#4B4E4D","#0C0705"],[0,1],17.6,52,17.6,-319.6).s().p("AgwnEIAAucQAwACAxABIAAeNIgtA3IAAAzQAWAIAXAHIAAK4IhhgRIAAhsIAA6o").cp();
	this.shape_172.setTransform(418.8,327.2);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.lf(["#4B4E4D","#0C0705"],[0,1],4.9,249,4.9,-23.2).s().p("ACUKpIknFuIAA+MIEnihIAAa/").cp();
	this.shape_173.setTransform(438.6,278.5);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.lf(["#4B4E4D","#0C0705"],[0,1],-97.3,53.3,18.5,-13.5).s().p("AkoB5IJRlBIAABQIkpCfIkoCiIAAhQ").cp();
	this.shape_174.setTransform(453.5,169.7);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.lf(["#976E3A","#674229"],[0,1],-97.9,4,14.8,4).s().p("AiZEMIAAl/IEziYIAAFyIAAANIkzCY").cp();
	this.shape_175.setTransform(458.9,138.4);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.lf(["#4B4E4D","#0C0705"],[0,1],-0.1,39.6,-0.1,-62.3).s().p("AAfi+IAAF/IAAADIg9gDIAAipIABjbQAdADAfACIAAAA").cp();
	this.shape_176.setTransform(440.3,145.9);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.lf(["#4B4E4D","#0C0705"],[0,1],-60,16.4,44.5,-11.5).s().p("AiZAyIEziWIAAAzIkzCWIAAgz").cp();
	this.shape_177.setTransform(458.9,116.6);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.lf(["#4B4E4D","#0C0705"],[0,1],-259.7,162.3,80.1,-33.8).s().p("AN4ChI/4ikIFchpIAAg0QO7BhPqA0IAAApIkJCD").cp();
	this.shape_178.setTransform(235.9,188);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.lf(["#4B4E4D","#0C0705"],[0,1],-421.1,293.2,292.1,-118.5).s().p("A5fjrIeMDIILzkiIAAiUQEeAOEiALIAAOaMgyKgF9Ig1gGIAAlC").cp();
	this.shape_179.setTransform(250.7,234.4);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.lf(["#4B4E4D","#0C0705"],[0,1],-195.5,0.5,675.4,58.3).s().p("A4shGQgwgHgwgGQjZgdjXgfIAAhQQLYBqL0BOQAZADAZACQUSCCVpAwIAABQQgygBgxgCQkigLkegOQgZgCgZgBQvrgzu7hiQhCgHhDgHQj4gaj1gbQgagDgagDQilgUijgVIAAAA").cp();
	this.shape_180.setTransform(212.9,167.3);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.lf(["#976E3A","#74502E"],[0,1],-133.3,-3.7,108.6,-3.7).s().p("AOODDMgjTgDcIIaipIB5AIIf4CmIm4DX").cp();
	this.shape_181.setTransform(189.8,206.3);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.lf(["#4B4E4D","#0C0705"],[0,1],-143.9,0,149.3,0).s().p("ARqCHI+MjFIlHgiIAAgnMAjTADcIAAAy").cp();
	this.shape_182.setTransform(167.8,217.2);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.lf(["#4B4E4D","#0C0705"],[0,1],-138.4,74.3,13.9,-13.6).s().p("Al4CqIG2jWIEJiDIAAgsQAZABAZACIAACUIrxEgIAAgy").cp();
	this.shape_183.setTransform(318.6,208.8);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.lf(["#976E3A","#74502E"],[0,1],-198.7,-53.6,379.3,101.2).s().p("EAlmgAjIpTFAQ1ogv0SiFQgZgCgZgDQr0hNrYhpINajLQY1A5TgBeQAQABAQACIAAA4IJwAcIgBCnIA/ACIAAgCIE1iXIAAgNQAtAFAsAEIAAAA").cp();
	this.shape_184.setTransform(242.6,153.2);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.lf(["#976E3A","#6D452C"],[0,1],-29.5,53.4,-1.2,4.4).s().p("Ak2iaQCnA0HHAmIgBDbIpugcIABg4IAAjh").cp();
	this.shape_185.setTransform(406,132.8);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.lf(["#4B4E4D","#0C0705"],[0,1],-46.3,-1.4,101.7,-1.4).s().p("AmEhjQAuBcLbA3IAAA0QgggCgegDQnGgming0QgSgFgPgFQgygUgLgWIAAg0").cp();
	this.shape_186.setTransform(404.5,116.7);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.lf(["#976E3A","#74502E"],[0,1],-31.5,-4,121.7,36.9).s().p("ADrBiQrcg6gthaQgBAAAAAAIBfgvIPgAtIk1CW").cp();
	this.shape_187.setTransform(419.9,111.7);

	this.addChild(this.shape_187,this.shape_186,this.shape_185,this.shape_184,this.shape_183,this.shape_182,this.shape_181,this.shape_180,this.shape_179,this.shape_178,this.shape_177,this.shape_176,this.shape_175,this.shape_174,this.shape_173,this.shape_172,this.shape_171,this.shape_170,this.shape_169,this.shape_168,this.shape_167,this.shape_166,this.shape_165,this.shape_164,this.shape_163,this.shape_162,this.shape_161,this.shape_160,this.shape_159,this.shape_158,this.shape_157,this.shape_156,this.shape_155,this.shape_154,this.shape_153,this.shape_152,this.shape_151,this.shape_150,this.shape_149,this.shape_148,this.shape_147,this.shape_146,this.shape_145,this.shape_144,this.shape_143,this.shape_142,this.shape_141,this.shape_140,this.shape_139,this.shape_138,this.shape_137,this.shape_136,this.shape_135,this.shape_134,this.shape_133,this.shape_132,this.shape_131,this.shape_130,this.shape_129,this.shape_128,this.shape_127,this.shape_126,this.shape_125,this.shape_124,this.shape_123,this.shape_122,this.shape_121,this.shape_120,this.shape_119,this.shape_118,this.shape_117,this.shape_116,this.shape_115,this.shape_114,this.shape_113);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,543.2,506);


(lib.Wanline = function() {
	this.initialize();

	// shape
	this.instance = new lib.Wan_line();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,314,23);


(lib.Serverfile = function() {
	this.initialize();

	// detail
	this.instance_1 = new lib.Server_file();
	this.instance_1.setTransform(0,-89.3,0.623,0.625);

	this.addChild(this.instance_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-89.3,63.5,89.4);


(lib.Router_1 = function() {
	this.initialize();

	// <>><
	this.instance_2 = new lib.Router();
	this.instance_2.setTransform(0,-66.7,0.626,0.624);

	this.addChild(this.instance_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-66.7,92.7,66.8);


(lib.hacker_1 = function() {
	this.initialize();

	// shading
	this.instance_3 = new lib.hacker();
	this.instance_3.setTransform(3.1,2.1,0.892,0.892);

	this.addChild(this.instance_3);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(3.1,2.1,154.4,206);


(lib.computerlaptop = function() {
	this.initialize();

	// keys
	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("rgba(255,255,255,0.2)").s().p("AjcgoIAkAAIgYATIgjAAIAXgTAj3gVIgjAAIAXgTIAkAAIgYATAjTgTIgXATIgjAAIAXgTIAjAAAjMgVIAYgTIAkAAIgYATIgkAAAirgTIgXATIgkAAIAXgTIAkAAAj6gTIgXATIgkAAIAXgTIAkAAAjRApIgjAAIAYgTIAjAAIgYATAjNApIAYgTIAkAAIgYATIgkAAAkEAUIgkAAIAYgTIAjAAIgXATAkBAUIAYgTIAkAAIgYATIgkAAAjgAWIgYATIgjAAIAYgTIAjAAAjBABIAjAAIgYATIgjAAIAYgTAkHAWIgYATIgjAAIAXgTIAkAAAksAUIgjAAIAXgTIAkAAIgYATAlSAWIAjAAIgXATIgkAAIAYgTAingTIAjAAIgXATIgkAAIAYgTABagoIgYATIgjAAIAXgTIAkAAACBgoIgXATIgkAAIAYgTIAjAAACFgoIAkAAIgYATIgjAAIAXgTACOgTIgXATIgkAAIAYgTIAjAAABngTIgXATIgkAAIAXgTIAkAAAC2gTIgYATIgjAAIAXgTIAkAAACtgoIAjAAIgXATIgkAAIAYgTAC9gVIAXgTIAkAAIgYATIgjAAADdgTIgXATIgkAAIAYgTIAjAAAhcgTIgYATIgjAAIAXgTIAkAAAg+goIAkAAIgYATIgkAAIAYgTAhpgoIgYATIgjAAIAXgTIAkAAAh9gVIAYgTIAjAAIgXATIgkAAAgNgTIgYATIgjAAIAXgTIAkAAAgWgoIAhAAIgWATIgjAAIAYgTAgHgVIAWgTIAjAAIgXATIgiAAAAYgTIgXATIgiAAIAXgTIAiAAAg1gTIgXATIgkAAIAYgTIAjAAAAlABIgXATIgiAAIAWgTIAjAAAAFAAIAXgTIAjAAIgXATIgjAAAgHApIAWgTIAjAAIgJAHIAAAAIgPANIghgBAgXAWIAiAAIgWATIgkAAIAYgTAgzApIgkAAIAZgTIAjAAIgYATAgYAUIgjAAIAXgTIAkAAIgYATAhnAUIgjAAIAXgTIAkAAIgYATAhLABIAjAAIgXATIgkAAIAYgTAhCAWIgYATIgkAAIAYgTIAkAAAh2ABIgYATIgkAAIAYgTIAkAAAiCApIgjAAIAYgTIAjAAIgYATADuABIAkAAIgYATIgjAAIAXgTADTAUIgkAAIAYgTIAjAAIgXATADKAAIAXgTIAkAAIgYATIgjAAACQAqIgjAAIAYgUIAjAAIgYAUACUAqIAYgUIAkAAIgZAUIgjAAAC7AqIAZgUIAjAAIgYAUIgkAAACrAUIgjAAIAXgTIAkAAIgYATABcAUIgjAAQACgCADgCIATgPIAjAAIgYATACBAWIgYAUIgkAAIAYgUIAkAAABgAUIAYgTIAkAAIgYATIgkAAAA1AUIgjAAIAXgTIAkAAIgYATABBAqIgjAAIAYgUIAkAAIgZAUAEjgoIAkAAIgYATIgkAAIAYgTAEHgVIgjAAIAYgTIAjAAIgYATAEzgVIAXgTIAhAAIgWATIgiAAAFSgTIgWATIgjAAIAXgTIAiAAAEsgTIgXATIgkAAIAXgTIAkAAAEiAUIgkAAIAYgTIAjAAIgXATAEfAWIgbAUIgiAAIAZgUIAkAA").cp();
	this.shape_188.setTransform(56.6,-24.5);

	// keyboard shadows
	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("rgba(0,0,0,0.251)").s().p("AkYgYIAeAAIAVgQIAEAAIgVAQIACAAIgBAAIgCADIgkAAIADgDAjwgYIAeAAIAUgQIAFAAIgVAQIABAAIAAAAIgDADIgjAAIADgDAj7gTIgVARIACAAIgDACIgkAAIADgCIAeAAIAUgRIAFAAAjJgYIAeAAIAVgQIAEAAIgVAQIACAAIgBAAIgCADIgkAAIADgDAitgTIgUARIABAAIgCACIgkAAIADgCIAeAAIAUgRIAEAAAjogDIAAABIABAAIgDACIgkAAIABgBIACgBIAfAAIAUgRIAEAAIgUAQAijAAIAEAAIgUARIgBAAIABAAIAAABIgDABIgjAAIADgCIAeAAIAVgRAivARIAeAAIAVgRIAEAAIgVARIACAAIgBABIgCABIgkAAIADgCAi8gCIAfAAIAUgRIAEAAIgVARIACAAIgBAAIgCACIgkAAIADgCAjHAAIgUARIAAAAIgCACIgkAAIABAAIACgCIAfAAIAUgRIAEAAAjOAnIgDACIgjAAIADgCIAeAAIAVgRIAEAAIgVARIABAAAjKAnIAeAAIAWgRIADAAIgVARIACAAIgBABIgCABIgkAAIADgCAijAnIAfAAIAVgRIAEAAIgVAQIAAABIABAAIgDACIgkAAIADgCAjhAWIgVARIABAAIgDACIgkAAIADgCIAfAAIAVgRIAEAAAjyAAIAEAAIgVARIACAAIgEACIgjAAIADgCIAeAAIAVgRAkWAAIgVARIACAAIgBABIgCABIgkAAIADgCIAfAAIAUgRIAEAAAkJAWIgUAQIgBABIABAAIgCACIgjAAIADgDIAdABIAVgRIAEAAAkwAWIgUAQIAAAAIABAAIgDADIgkAAIADgDIAfAAIAUgQIAEAAABZgoIgVAQIABAAIgDADIgjAAIADgDIAeAAIAVgQIAEAAAAxgoIgVAQIACAAIgBAAIgCADIgiAAIADgDIAcAAIAVgQIAEAAAA+gTIgVARIACAAIgDACIgkAAIADgCIAfAAIAUgRIAEAAABJgYIAeAAIAVgQIAEAAIgUAQIgBAAIABAAIgCADIgkAAIABgBIACgCABwgYIAfAAIAVgQIADAAIgVAQIACAAIgDADIgkAAIADgDABlgTIgUARIABAAIgDACIgjAAIADgCIAeAAIAVgRIADAAACVgWIADgCIAeAAIAVgQIAEAAIgVAQIABAAIAAAAIgDADIgjAAIAAgBACwgTIAEAAIgTAQIgBABIABAAIgDACIgjAAIADgCIAeAAIAUgRADcgTIgVARIACAAIgDACIgkAAIADgCIAeAAIAVgRIAEAAADkgVIADgDIAeAAIAVgQIAEAAIgVAQIABAAIgDADIgjAAADegYIAUgQIAEAAIgVAQIACAAIgBAAIgCADIgkAAIADgDIAfAAACNgTIgVARIACAAIgBAAIgCACIgkAAIADgCIAfAAIAUgRIAEAAAh6gYIAeAAIAVgQIAEAAIgVAQIABAAIAAAAIgDADIgjAAIADgDAh+gYIgDADIgkAAIAEgDIAeAAIAVgQIADAAIgUAQIABAAAhegTIgTAQIgBABIABAAIgDACIgjAAIADgCIAeAAIAUgRIAEAAAhTgYIAfAAIAUgQIAEAAIgVAQIACAAIgBAAIgCADIgkAAIADgDAg2gTIgVARIACAAIgDACIgkAAIADgCIAeAAIAVgRIAEAAAgrgYIAeAAIATgQIAEAAIgSAQIgBAAIABAAIAAAAIgDADIgjAAIADgDAgPgTIgUARIABAAIgDACIgjAAIACgCIAfAAIAUgRIAEAAAAWgTIgTAQIgBABIABAAIgCACIgiAAIADgCIAeAAIASgRIAEAAAAUARIAfAAIAUgRIAEAAIgQANQgCACgCACIAAAAIgCACIgkAAIADgCAAPARIABAAIgDACIghAAIABAAIACgCIAcAAIAVgRIAEAAIgVARAgFAAIADAAIgUARIABAAIgDACIgkAAIABAAIACgCIAfAAIAVgRAAJAWIgSAQIgBABIABAAIgDACIgjAAIADgCIAeAAIATgRIAEAAAgFAnIAcAAIAQgMIgBAAIAHgFIAEAAIgWARIACAAIgDADIgigBIADgCAAgAnIAfAAIAVgRIAEAAIgUARIgBAAIABAAIgDADIgjAAIACgDAgcAWIgWARIACAAIgDACIgkAAIADgCIAfAAIAVgRIAEAAAgpAAIgVARIACAAIgDACIgkAAIADgCIAeAAIAVgRIAEAAAhQAAIgVARIABAAIAAABIgDABIgjAAIADgCIAeAAIAUgRIAFAAAhEAWIgVARIABAAIgCACIgkAAIADgCIAeAAIAVgRIAEAAADpAAIgVARIACAAIgBABIgCABIgkAAIADgCIAeAAIAVgRIAEAAADKAWIAEAAIgWARIACAAIgDADIgkAAIADgDIAfAAIAVgRADwgCIgDACIgjAAIACgCIAfAAIAUgRIAEAAIgUARIABAAADlAnIAdAAIAXgRIAGAAIgbAUIgiAAIADgDADhAnIgDADIgjAAIADgDIAeAAIAWgRIAEAAIgWARIABAAADZARIAfAAIAVgRIADAAIgVARIACAAIAAABIgDABIgkAAIADgCACrATIgjAAIAAAAIADgCIAeAAIAVgRIADAAIgUARIABAAIAAABIgDABACaAAIgVARIACAAIgDACIgkAAIADgCIAeAAIAVgRIAEAAACQAqIgkAAIABgBIACgCIAeAAIAWgRIAEAAIgVARIgBAAIABAAIgCADAB7AWIAEAAIgVARIACAAIgDADIgkAAIADgDIAeAAIAVgRABvAAIAEAAIgVARIABAAIAAABIgDABIgjAAQABgBACgBIAeAAIAVgRAEOgYIAeAAIAVgQIAEAAIgVAQIACAAIgDADIgkAAIABgBIACgCAEqgTIgTAQIgBABIABAAIgCACIgkAAIABgBIACgBIAeAAIAUgRIAEAAAEzgVIAAgBIADgCIAdAAIATgQIAFAAIgWATIgiAAAFSgTIgWATIgjAAIACgCIAeAAIAUgRIAFAAAE5AAIgXATIgkAAIADgCIAfAAIATgRIAGAA").cp();
	this.shape_189.setTransform(56.8,-24.3);

	// shading
	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.lf(["rgba(0,0,0,0.153)","rgba(0,0,0,0.353)"],[0,1],-5.4,0.4,5.6,-2.9).s().p("Ag2APIBthaIAABIIhgBPIAAgnIgNAAIAAgW").cp();
	this.shape_190.setTransform(89.9,-21.3);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.lf(["rgba(0,0,0,0.153)","rgba(0,0,0,0.353)"],[0,1],-6.4,2.9,6.6,-0.2).s().p("AhBBYIAAhDICDhsIAAAnIAAAbIiDBt").cp();
	this.shape_191.setTransform(79,-8.7);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.lf(["rgba(0,0,0,0.153)","rgba(0,0,0,0.353)"],[0,1],-0.5,0.7,3.6,1.4).s().p("Ag1DEIBSmTIAZAdIhPGCIgcgM").cp();
	this.shape_192.setTransform(101.7,-51);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.lf(["rgba(255,255,255,0.251)","rgba(0,0,0,0.102)"],[0,1],3.1,2.1,3,-6.5).s().p("AGCgsIhvBaIqSgBIgCAAIBxhaIKSAAIAAAB").cp();
	this.shape_193.setTransform(56.7,-24.4);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.lf(["rgba(255,255,255,0.251)","rgba(0,0,0,0.102)"],[0,1],-12.2,4.1,-12.3,-7.2).s().p("AAlg2QgiABgiALQgEABgFACIALAKIABAAQAcgJAcAAQAbAAAKAJIAjgKQgCgCgBgBQgOgLgegBIFqAAIANAAIiFBsIrSAAICLhsIAtAAIEYAAAAjgSQADgFgDgDQgEgFgMABQgNgBgLAFQgJADgGAEQgCABgCACQgGAFAEAEQAEAFANAAQAKAAAMgFQANgEAHgFIABgBQAAgBABAAIAAAAAAqAGIgJgGQgeAHgaAAQgbAAgJgHIgBAAIgaAGIgJADQAOAOApAAQAoAAAtgOIAAAAIgDgD").cp();
	this.shape_194.setTransform(42.8,-12.1);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("rgba(0,0,0,0.2)").s().p("AAzgmQAeABAOAKQABACACABIgjALQgKgKgbABQgagBgeAKIAAAAIgMgLQAFgBAEgCQAigKAigBIAQAAAgWgEQgDAEADABQAEAFANAAQAKAAAMgFQAKgBAGgEQAAABAAAAQgBABAAAAIgBABQgHAEgNAEQgLAEgLAAQgNAAgEgEQgEgEAGgEQACgBACgCIAAAAAhYAWQAPALAlAAQAkAAAogLIADADIAAAAQgsAOgpAAQgpAAgOgOIAJgD").cp();
	this.shape_195.setTransform(43,-13.6);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("rgba(0,0,0,0.153)").s().p("AlhgEIKnAAIAcAJIqmAAIgdgJ").cp();
	this.shape_196.setTransform(63.7,-30.7);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("rgba(0,0,0,0.251)").s().p("AlJgKIKTABIAAAUIloAAIgQAAIkbAAIAAgV").cp();
	this.shape_197.setTransform(51.3,-18.7);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("rgba(0,0,0,0.082)").s().p("AFpgEIAABBIrRAAIAAhBILRAAAgUg0IAYgIIABAAQAJAJAbAAQAcAAAegJIAJAIQgpALglAAQgjAAgPgLIAAAA").cp();
	this.shape_198.setTransform(36.2,-6);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("rgba(255,255,255,0.4)").s().p("Aj8EBQAGgEAJgCQANgFANABQAMgBAEAFQADACgDAFQAAAAAAgBQgGAEgKADQgMAFgMAAQgNAAgEgFQgDgDADgEIAAAAAktArIBBk3IIaAAIhBE3IoaAA").cp();
	this.shape_199.setTransform(66,-39.9);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("rgba(0,0,0,0.012)").s().p("AEqDKIqnAAIBUmTIKnAAIhUGTAkyCgIIaAAIBBk3IoaAAIhBE3").cp();
	this.shape_200.setTransform(66.5,-51.6);

	// shape
	this.instance_4 = new lib.computer_laptop();
	this.instance_4.setTransform(0,-71.8,0.623,0.626);

	this.addChild(this.instance_4,this.shape_200,this.shape_199,this.shape_198,this.shape_197,this.shape_196,this.shape_195,this.shape_194,this.shape_193,this.shape_192,this.shape_191,this.shape_190,this.shape_189,this.shape_188);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-71.8,107.2,72);


(lib.computer_1 = function() {
	this.initialize();

	// shading
	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#57BDB4").s().p("AAAABIABgBIAAABIgBAA").cp();
	this.shape_201.setTransform(81.7,0.1);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.lf(["rgba(0,0,0,0.153)","rgba(0,0,0,0.353)"],[0,1],-2,0,2.1,0).s().p("AgSA1IgCACIAAgdIAnhQIACABIAAA2IgnA0").cp();
	this.shape_202.setTransform(83.7,-5.2);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#007A68").s().p("AAAAAIAAAAIAAABIAAgB").cp();
	this.shape_203.setTransform(85.8,-10.8);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#80CDC6").s().p("AAAABIAAgBIAAAAIAAAB").cp();
	this.shape_204.setTransform(85.9,-10.8);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.lf(["rgba(0,0,0,0.153)","rgba(0,0,0,0.353)"],[0,1],-3.5,0,3.7,0).s().p("AgjAiIBHhjIAAA8IhHBHIAAgg").cp();
	this.shape_205.setTransform(67.2,-6.5);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.lf(["rgba(255,255,255,0.251)","rgba(0,0,0,0.153)"],[0,1],0,4.2,0,-4.1).s().p("AAaAqIhdAAIAqhTIAuAAQAAABABABQAAAAABAAQAAAAABAAQAAAAAAgBIAAgBIAtAAIgCADIgpBQ").cp();
	this.shape_206.setTransform(79,-6.8);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.lf(["rgba(0,0,0,0.153)","rgba(0,0,0,0.353)"],[0,1],-6.2,0,6.4,0).s().p("AgqBVIgUAAIAAgqIAiAAIAAgiIBbhdIAAAiIgiAjIAAAIQgBAAAAAAQgBAAAAABQAAABABAAQAAAAABAAIAAARIhHBJ").cp();
	this.shape_207.setTransform(68.6,-21.7);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.lf(["rgba(0,0,0,0.153)","rgba(0,0,0,0.353)"],[0,1],-1.8,0,2,0).s().p("AAEALIgWgUIAlAAIgEADIgLAR").cp();
	this.shape_208.setTransform(65.3,-25.9);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("rgba(0,0,0,0.251)").s().p("ADnAUInNAAIAAgnIHNAAIAAAn").cp();
	this.shape_209.setTransform(39.1,-15.3);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.lf(["rgba(255,255,255,0.251)","rgba(0,0,0,0.102)"],[0,1],0,5.1,0,-4.9).s().p("AjCgxIHNAAIAUAAIBCAAIhIBjIp5AAIBIhjIBWAA").cp();
	this.shape_210.setTransform(35.5,-8.1);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("rgba(0,0,0,0.082)").s().p("Am9BQIJ5AAIAAAgIp6AAIAAggIABAAAFuABIAAABQAAAAgBABQAAAAAAAAQgBAAAAgBQgBAAAAgBQgDgDgFgHQgFgIAJgFQAHgFATgDIAlgPIAAAAQAMgHAFgHQABgBABgBQADgFAAgFQgBgdhugHQgdgCglgBQAAAAgBAAQgBgBAAAAQAAgBABAAQABgBAAAAQAmABAeACQBvAIABAfQAAAFgDAGQgBABAAABQgHAHgNAJIAAAAIgmAPQgSADgHAFQgFADADAFQAFAIADAEIAAAAAERBVIBfAAIAAAdIhfAAIAAgd").cp();
	this.shape_211.setTransform(44.8,-11.1);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.lf(["rgba(255,255,255,0.251)","rgba(0,0,0,0.153)"],[0,1],0,4.7,0,-4.6).s().p("ADlAGIALgQIAEgEIANAAIAAgFIAdgbIAjAAIhcBdIolAAIA9g9IAXAUIHRAA").cp();
	this.shape_212.setTransform(42.8,-25.4);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("rgba(0,0,0,0.153)").s().p("ADdgJIAXAUInQAAIgXgUIHQAA").cp();
	this.shape_213.setTransform(41.2,-25.9);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.lf(["rgba(255,255,255,0.251)","rgba(0,0,0,0.153)"],[0,1],0,1.7,0,-1.5).s().p("AD/AQIpAAAICSgfIHxAAIhDAf").cp();
	this.shape_214.setTransform(43,-72.2);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.lf(["rgba(0,0,0,0.153)","rgba(0,0,0,0.353)"],[0,1],-3.2,0,3.4,0).s().p("AAhjnIAAGQIgkAkIgdAbIAAmtIBBgi").cp();
	this.shape_215.setTransform(71.9,-50.7);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("rgba(255,255,255,0.4)").s().p("AD6h+IAAD+QAAAvgvABImTAAQgigBgLgXQgEgKAAgOIAAj+QAAgPAEgKQALgXAiAAIGTAAQAvAAAAAwIAAAA").cp();
	this.shape_216.setTransform(39.4,-48.4);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("rgba(0,0,0,0.012)").s().p("AD5iqQAAgxgvAAImTAAQgiAAgLAYQgEAKAAAPIAAD+QAAAOAEAKQALAXAiAAIGTAAQAvAAAAgvIAAj+AEiClIAAAFIgNAAIgnAAInQAAIg8AAIAAmzIJAAAIAAGuADjEKInMAAIg4AAIAAgiIACAAIIkAAIAAAiIgiAA").cp();
	this.shape_217.setTransform(39.5,-44);

	// shape
	this.instance_5 = new lib.computer();
	this.instance_5.setTransform(0,-73.9,0.626,0.624);

	this.addChild(this.instance_5,this.shape_217,this.shape_216,this.shape_215,this.shape_214,this.shape_213,this.shape_212,this.shape_211,this.shape_210,this.shape_209,this.shape_208,this.shape_207,this.shape_206,this.shape_205,this.shape_204,this.shape_203,this.shape_202,this.shape_201);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-73.9,89.5,74.2);


(lib.Cloud_1 = function() {
	this.initialize();

	// shading
	this.instance_6 = new lib.Cloud();
	this.instance_6.setTransform(-84.4,-55.3,0.783,0.78);

	this.addChild(this.instance_6);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-84.4,-55.3,169.1,102.2);


(lib.slide_5 = function() {
	this.initialize();

	// icons
	this.instance_7 = new lib.computer_1();
	this.instance_7.setTransform(56,273,0.394,0.394,0,0,0,46.6,-37.5);

	this.instance_8 = new lib.computer_1();
	this.instance_8.setTransform(44.6,266.5,0.394,0.394,0,0,0,43.6,-37);

	this.instance_9 = new lib.computer_1();
	this.instance_9.setTransform(34.4,259.9,0.394,0.394,0,0,0,45,-36.5);

	this.instance_10 = new lib.computer_1();
	this.instance_10.setTransform(23.1,253.7,0.394,0.394,0,0,0,44.4,-35.9);

	this.instance_11 = new lib.computer_1();
	this.instance_11.setTransform(56,238.6,0.394,0.394,0,0,0,46.6,-36.7);

	this.instance_12 = new lib.computer_1();
	this.instance_12.setTransform(44.6,232.4,0.394,0.394,0,0,0,43.6,-36.3);

	this.instance_13 = new lib.computer_1();
	this.instance_13.setTransform(34.4,225.7,0.394,0.394,0,0,0,45,-35.8);

	this.instance_14 = new lib.computer_1();
	this.instance_14.setTransform(23.1,218.9,0.394,0.394,0,0,0,44.4,-36.5);

	this.instance_15 = new lib.computer_1();
	this.instance_15.setTransform(56,204.1,0.394,0.394,0,0,0,46.6,-37);

	this.instance_16 = new lib.computer_1();
	this.instance_16.setTransform(44.6,197.7,0.394,0.394,0,0,0,43.6,-35.8);

	this.instance_17 = new lib.computer_1();
	this.instance_17.setTransform(34.4,190.8,0.394,0.394,0,0,0,45,-37.3);

	this.instance_18 = new lib.computer_1();
	this.instance_18.setTransform(23.1,184.3,0.394,0.394,0,0,0,44.4,-36.5);

	this.instance_19 = new lib.computer_1();
	this.instance_19.setTransform(56,169.3,0.394,0.394,0,0,0,46.6,-37.5);

	this.instance_20 = new lib.computer_1();
	this.instance_20.setTransform(44.6,162.8,0.394,0.394,0,0,0,43.6,-37.3);

	this.instance_21 = new lib.computer_1();
	this.instance_21.setTransform(34.4,156.3,0.394,0.394,0,0,0,45,-36.5);

	this.instance_22 = new lib.computer_1();
	this.instance_22.setTransform(23.1,149.6,0.394,0.394,0,0,0,44.4,-37.2);

	this.instance_23 = new lib.computer_1();
	this.instance_23.setTransform(56,135.1,0.394,0.394,0,0,0,46.6,-37.8);

	this.instance_24 = new lib.computer_1();
	this.instance_24.setTransform(44.6,128.7,0.394,0.394,0,0,0,43.6,-35.9);

	this.instance_25 = new lib.computer_1();
	this.instance_25.setTransform(34.4,121.8,0.394,0.394,0,0,0,45,-36.8);

	this.instance_26 = new lib.computer_1();
	this.instance_26.setTransform(23.1,115.9,0.394,0.394,0,0,0,44.4,-36);

	this.instance_27 = new lib.computer_1();
	this.instance_27.setTransform(56,100.5,0.394,0.394,0,0,0,46.6,-37.5);

	this.instance_28 = new lib.computer_1();
	this.instance_28.setTransform(44.6,93.7,0.394,0.394,0,0,0,43.6,-38.2);

	this.instance_29 = new lib.computer_1();
	this.instance_29.setTransform(34.4,87.5,0.394,0.394,0,0,0,45,-36.8);

	this.instance_30 = new lib.computer_1();
	this.instance_30.setTransform(23.1,80.6,0.394,0.394,0,0,0,44.4,-37);

	this.instance_31 = new lib.Router_1();
	this.instance_31.setTransform(358.3,183.8,0.526,0.526,0,0,0,46.3,-33.4);

	this.instance_32 = new lib.Router_1();
	this.instance_32.setTransform(155.3,326.5,0.526,0.526,0,0,0,46.3,-33.4);

	this.instance_33 = new lib.hacker_1();
	this.instance_33.setTransform(403.8,307.7,0.383,0.383,0,0,180,80.3,105.2);

	// lines
	this.instance_34 = new lib.Arrow();
	this.instance_34.setTransform(189.1,327.2,1.506,1.506,-178.7,0,0,5,0);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f().s("#F68026").ss(3,1,1).p("AwPAAMAgfAAA");
	this.shape_218.setTransform(293,327.1);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f().s("#000000").ss(2,1,1).p("AU3KjIAA+nAw8z+IAADtIAAFUIAAFPIAAFjIAAFUIAAFcIAAJgIMlAAA0OwRIDSAAA0Oq9IDSAAA0OluIDSAAA02KlID6AAA0OgLIDSAAA0OFJIDSAA");
	this.shape_219.setTransform(194.6,200.5);

	// staticctext
	this.text = new cjs.Text("ICMP REPLY D=209.165.200.225 S=172.18.1.7", "bold 10px Arial", "#FFFFFF");
	this.text.lineHeight = 12;
	this.text.setTransform(86.3,260.8);

	this.text_1 = new cjs.Text("ICMP REPLY D=209.165.200.225 S=172.18.1.6", "bold 10px Arial", "#FFFFFF");
	this.text_1.lineHeight = 12;
	this.text_1.lineWidth = 246;
	this.text_1.setTransform(86.7,228.7);

	this.text_2 = new cjs.Text("ICMP REPLY D=209.165.200.225 S=172.18.1.5", "bold 10px Arial", "#FFFFFF");
	this.text_2.lineHeight = 12;
	this.text_2.lineWidth = 249;
	this.text_2.setTransform(86.7,193.4);

	this.text_3 = new cjs.Text("ICMP REPLY D=209.165.200.225 S=172.18.1.4", "bold 10px Arial", "#FFFFFF");
	this.text_3.lineHeight = 12;
	this.text_3.lineWidth = 252;
	this.text_3.setTransform(86.7,158.2);

	this.text_4 = new cjs.Text("ICMP REPLY D=209.165.200.225 S=172.18.1.3", "bold 10px Arial", "#FFFFFF");
	this.text_4.lineHeight = 12;
	this.text_4.lineWidth = 245;
	this.text_4.setTransform(86.7,122.9);

	this.text_5 = new cjs.Text("ICMP REPLY D=209.165.200.225 S=172.18.1.2", "bold 10px Arial", "#FFFFFF");
	this.text_5.lineHeight = 12;
	this.text_5.lineWidth = 243;
	this.text_5.setTransform(86.7,87.7);

	this.text_6 = new cjs.Text("209.165.200.225", "11px Arial", "#393536");
	this.text_6.lineHeight = 13;
	this.text_6.lineWidth = 89;
	this.text_6.setTransform(331.8,201.4);

	this.text_7 = new cjs.Text("ICMP REQ D=172.18.255.255 S=209.165.200.225", "bold 10px Arial", "#FFFFFF");
	this.text_7.lineHeight = 12;
	this.text_7.lineWidth = 235;
	this.text_7.setTransform(112.4,363.5);

	// label_arrows
	this.instance_35 = new lib.arrowgreen();
	this.instance_35.setTransform(152.1,268.5,0.837,0.766);

	this.instance_36 = new lib.arrowgreen();
	this.instance_36.setTransform(152.1,236.4,0.837,0.766);

	this.instance_37 = new lib.arrowgreen();
	this.instance_37.setTransform(152.1,201.1,0.837,0.766);

	this.instance_38 = new lib.arrowgreen();
	this.instance_38.setTransform(152.1,165.9,0.837,0.766);

	this.instance_39 = new lib.arrowgreen();
	this.instance_39.setTransform(152.1,130.6,0.837,0.766);

	this.instance_40 = new lib.arrowgreen();
	this.instance_40.setTransform(152.1,95.4,0.837,0.766);

	this.instance_41 = new lib.arrowgreen();
	this.instance_41.setTransform(282.6,371.1,0.933,0.766,0,0,180);

	// Layer 3
	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("rgba(127,175,174,0.42)").s().p("AAfAKIg9AAIAAgTIA9AAIAAAT").cp();
	this.shape_220.setTransform(302.9,196.2);

	this.instance_42 = new lib.Cloud_1();
	this.instance_42.setTransform(199.3,181.2,1.252,1.134,0,0,0,0,-4.1);
	this.instance_42.alpha = 0.898;

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("rgba(193,171,209,0.6)").s().p("AFXB4IpuAAIAAgQIg/AAIAAjfIKtAAIAADv").cp();
	this.shape_221.setTransform(334.1,184);

	this.addChild(this.shape_221,this.instance_42,this.shape_220,this.instance_41,this.instance_40,this.instance_39,this.instance_38,this.instance_37,this.instance_36,this.instance_35,this.text_7,this.text_6,this.text_5,this.text_4,this.text_3,this.text_2,this.text_1,this.text,this.shape_219,this.shape_218,this.instance_34,this.instance_33,this.instance_32,this.instance_31,this.instance_30,this.instance_29,this.instance_28,this.instance_27,this.instance_26,this.instance_25,this.instance_24,this.instance_23,this.instance_22,this.instance_21,this.instance_20,this.instance_19,this.instance_18,this.instance_17,this.instance_16,this.instance_15,this.instance_14,this.instance_13,this.instance_12,this.instance_11,this.instance_10,this.instance_9,this.instance_8,this.instance_7);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(2.6,2,438,380.6);


(lib.slide_4 = function() {
	this.initialize();

	// icons
	this.instance_43 = new lib.Serverfile();
	this.instance_43.setTransform(221.7,150.4,0.524,0.524,0,0,0,31.7,-44.6);

	this.instance_44 = new lib.Serverfile();
	this.instance_44.setTransform(146.7,150.4,0.524,0.524,0,0,0,31.7,-44.6);

	this.instance_45 = new lib.computer_1();
	this.instance_45.setTransform(191.3,60.4,0.524,0.524,0,0,0,44.9,-36.8);

	this.instance_46 = new lib.Serverfile();
	this.instance_46.setTransform(296.6,150.4,0.524,0.524,0,0,0,31.7,-44.6);

	this.instance_47 = new lib.Serverfile();
	this.instance_47.setTransform(71.8,150.4,0.524,0.524,0,0,0,31.8,-44.6);

	this.instance_48 = new lib.Serverfile();
	this.instance_48.setTransform(352.1,236.7,0.524,0.524,0,0,0,31.8,-44.7);

	this.instance_49 = new lib.Serverfile();
	this.instance_49.setTransform(306,236.7,0.524,0.524,0,0,0,31.9,-44.7);

	this.instance_50 = new lib.Serverfile();
	this.instance_50.setTransform(259.7,236.7,0.524,0.524,0,0,0,31.8,-44.7);

	this.instance_51 = new lib.Serverfile();
	this.instance_51.setTransform(213.5,236.7,0.524,0.524,0,0,0,31.7,-44.7);

	this.instance_52 = new lib.Serverfile();
	this.instance_52.setTransform(167.4,236.7,0.524,0.524,0,0,0,31.9,-44.7);

	this.instance_53 = new lib.Serverfile();
	this.instance_53.setTransform(121.1,236.7,0.524,0.524,0,0,0,31.7,-44.7);

	this.instance_54 = new lib.Serverfile();
	this.instance_54.setTransform(75,236.7,0.524,0.524,0,0,0,31.8,-44.7);

	this.instance_55 = new lib.Serverfile();
	this.instance_55.setTransform(28.8,236.7,0.524,0.524,0,0,0,31.9,-44.7);

	this.instance_56 = new lib.Serverfile();
	this.instance_56.setTransform(187.7,324.7,0.524,0.524,0,0,0,31.7,-44.6);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f().s("#393536").ss(2,2,1).p("AboguIhzAAIAAFCAnKkTIAADlIDdAAIHlAAIBHAAIAAjGAQsj0IAADGIBhAAIHoAAAQsguIlgAAIAAEdALMguImNAAA6REUIAAlCIhWAAAzQkTIAADlIBxAAIGKAAIELAAAzQguInBAAArVguIAAE5AxfEUIAAlCASNguIAAFCAD4guIAAD+AjtDQIAAj+");
	this.shape_222.setTransform(189.8,198.3);

	// arrows
	this.instance_57 = new lib.Arrow();
	this.instance_57.setTransform(160.3,333.1,1.439,1.439,38.2,0,0,5,0.1);

	this.instance_58 = new lib.Arrow();
	this.instance_58.setTransform(160.5,318.9,1.439,1.439,38.2,0,0,5,0.1);

	this.instance_59 = new lib.Arrow();
	this.instance_59.setTransform(161.9,299.6,1.439,1.439,53.2,0,0,5,0.1);

	this.instance_60 = new lib.Arrow();
	this.instance_60.setTransform(195.4,288.7,1.439,1.439,113.7,0,0,5,0.1);

	this.instance_61 = new lib.Arrow();
	this.instance_61.setTransform(182.6,288.9,1.439,1.439,58.9,0,0,5,0.1);

	this.instance_62 = new lib.Arrow();
	this.instance_62.setTransform(238.4,277.3,1.439,1.439,140,0,0,-17.9,0.4);

	this.instance_63 = new lib.Arrow();
	this.instance_63.setTransform(213.7,312.6,1.439,1.439,150,0,0,5,0.1);

	this.instance_64 = new lib.Arrow();
	this.instance_64.setTransform(213.8,330.9,1.439,1.439,150,0,0,5,0.1);

	// arrowstems
	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f().s("#F68026").ss(3,2,1).p("Aq8lKIGCGDA41lUIToLhAyclDINCI6AkmlFIC5ERACUlPIhyEYAKHlPImkF8ARalxIt+IxADZF6IVesH");
	this.shape_223.setTransform(193.1,292.6);

	// lines
	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f().s("#393536").ss(2,2,1).p("AAvl0IECLpACPlMIOMKbAgbkmIlPJ1AwaDvIOpop");
	this.shape_224.setTransform(185.9,109.4);

	this.addChild(this.shape_224,this.shape_223,this.instance_64,this.instance_63,this.instance_62,this.instance_61,this.instance_60,this.instance_59,this.instance_58,this.instance_57,this.shape_222,this.instance_56,this.instance_55,this.instance_54,this.instance_53,this.instance_52,this.instance_51,this.instance_50,this.instance_49,this.instance_48,this.instance_47,this.instance_46,this.instance_45,this.instance_44,this.instance_43);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(2.6,2,432.5,396.2);


(lib.slide_1 = function() {
	this.initialize();

	// arrows
	this.instance_65 = new lib.Arrow();
	this.instance_65.setTransform(379.5,333.4,1.506,1.506,0,0,0,5,0.3);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f().s("#F68026").ss(3,0,1).p("ABEAAIiHAA");
	this.shape_225.setTransform(370.8,332.8);

	this.instance_66 = new lib.Arrow();
	this.instance_66.setTransform(127.2,307.1,1.506,1.506,30,0,0,4.8,0.3);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f().s("#F68026").ss(3,0,1).p("AA/AkIh9hH");
	this.shape_226.setTransform(119.7,302.2);

	this.instance_67 = new lib.Arrow();
	this.instance_67.setTransform(97,292.2,1.506,1.506,30,0,0,4.8,0.3);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f().s("#F68026").ss(3,0,1).p("AA/AkIh9hH");
	this.shape_227.setTransform(89.5,287.3);

	this.instance_68 = new lib.Arrow();
	this.instance_68.setTransform(182,309.5,1.506,1.506,0,0,0,5,0.3);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f().s("#F68026").ss(3,0,1).p("ABJAAIiRAA");
	this.shape_228.setTransform(172.8,308.9);

	this.instance_69 = new lib.Arrow();
	this.instance_69.setTransform(232,309.5,1.506,1.506,0,0,0,5,0.3);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f().s("#F68026").ss(3,0,1).p("ABJAAIiRAA");
	this.shape_229.setTransform(222.8,308.9);

	this.instance_70 = new lib.Arrow();
	this.instance_70.setTransform(335.6,314.7,1.504,1.504,30,0,0,5.1,0.1);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f().s("#F68026").ss(3,0,1).p("AA6AhIhzhB");
	this.shape_230.setTransform(328.3,310);

	this.instance_71 = new lib.Arrow();
	this.instance_71.setTransform(284.5,309.5,1.506,1.506,0,0,0,5,0.3);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f().s("#F68026").ss(3,0,1).p("ABEAAIiHAA");
	this.shape_231.setTransform(275.8,308.9);

	this.instance_72 = new lib.Arrow();
	this.instance_72.setTransform(336.8,295.2,1.506,1.506,-29.9,0,0,5,0.3);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f().s("#F68026").ss(3,0,1).p("AA6ghIhzBD");
	this.shape_232.setTransform(328.9,299.2);

	// icons
	this.instance_73 = new lib.envelopeattackpacket();
	this.instance_73.setTransform(402.5,333,0.298,0.298);

	this.instance_74 = new lib.envelopeattackpacket();
	this.instance_74.setTransform(347,333,0.298,0.298);

	this.instance_75 = new lib.envelopeattackpacket();
	this.instance_75.setTransform(307,305.5,0.298,0.298);

	this.instance_76 = new lib.envelopeattackpacket();
	this.instance_76.setTransform(253.5,305.5,0.298,0.298);

	this.instance_77 = new lib.envelopeattackpacket();
	this.instance_77.setTransform(156,297,0.298,0.298);

	this.instance_78 = new lib.envelopeattackpacket();
	this.instance_78.setTransform(126.5,281.4,0.298,0.298);

	this.instance_79 = new lib.Router_1();
	this.instance_79.setTransform(201.1,275.3,0.449,0.449,0,0,0,46.3,-33.4);
	this.instance_79.shadow = new cjs.Shadow("rgba(197,18,48,1)",0,0,5);

	this.instance_80 = new lib.computerlaptop();
	this.instance_80.setTransform(57.3,239.9,0.449,0.449,0,0,0,53.6,-35.9);

	this.instance_81 = new lib.computerlaptop();
	this.instance_81.setTransform(364.1,292.8,0.449,0.449,0,0,0,53.7,-35.9);

	this.instance_82 = new lib.envelopeattackpacket();
	this.instance_82.setTransform(95.5,269.8,0.298,0.298);

	this.instance_83 = new lib.Cloud_1();
	this.instance_83.setTransform(114.6,283.6,0.688,0.688,0,0,0,0,-4.1);

	this.instance_84 = new lib.Serverfile();
	this.instance_84.setTransform(412.6,286.6,0.449,0.449,0,0,0,31.9,-44.6);
	this.instance_84.shadow = new cjs.Shadow("rgba(197,18,48,1)",0,0,5);

	this.instance_85 = new lib.Router_1();
	this.instance_85.setTransform(305.8,268.6,0.449,0.449,0,0,0,46.3,-33.2);
	this.instance_85.shadow = new cjs.Shadow("rgba(197,18,48,1)",0,0,5);

	this.instance_86 = new lib.hacker_1();
	this.instance_86.setTransform(29.9,219.7,0.346,0.346,0,0,0,80.5,105.2);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f().s("#393536").ss(2,1,1).p("AC0AAIlnAA");
	this.shape_233.setTransform(359,285.1);

	// Layer 6
	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f().s("#393536").ss(2,2,1).p("Ah+AAID9AA");
	this.shape_234.setTransform(391.3,293.1);

	// lines
	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f().s("#393536").ss(2,1,1).p("AVIDIIAAChICWAAA3dlnIERD0AqVCMIImAAICZAAAj7FpICMAAIAAjdAhvFpIW3AA");
	this.shape_235.setTransform(222.7,284);

	this.addChild(this.shape_235,this.shape_234,this.shape_233,this.instance_86,this.instance_85,this.instance_84,this.instance_83,this.instance_82,this.instance_81,this.instance_80,this.instance_79,this.instance_78,this.instance_77,this.instance_76,this.instance_75,this.instance_74,this.instance_73,this.shape_232,this.instance_72,this.shape_231,this.instance_71,this.shape_230,this.instance_70,this.shape_229,this.instance_69,this.shape_228,this.instance_68,this.shape_227,this.instance_67,this.shape_226,this.instance_66,this.shape_225,this.instance_65);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(2.2,2,434.9,395.4);





(lib.animation01 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{},true);

	// black_shape
	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#000000").s().rr(-14.25,-9.9,28.5,19.8,3);
	this.shape_236.setTransform(396.2,160.4,1.112,1.125,0,0,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_236}]},161).wait(4));

this.instance_87 = new lib.labeltext();
	this.instance_87.setTransform(137.6,94.1,1,1,0,0,0,133.2,19.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_87}]}).wait(165));
    
	// icons
	this.instance_87 = new lib.computer_1();
	this.instance_87.setTransform(232.4,309.9,0.638,0.638,0,0,0,44.3,-36.5);

	this.instance_88 = new lib.computer_1();
	this.instance_88.setTransform(399.5,168.1,0.638,0.638,0,0,0,44.4,-36.5);

	this.instance_89 = new lib.Cloud_1();
	this.instance_89.setTransform(231.1,80.3,0.511,0.511,0,0,0,0,-4.1);

	this.instance_90 = new lib.hacker_1();
	this.instance_90.setTransform(41.2,61.4,0.3,0.3,0,0,0,80.3,105.1);

	this.instance_91 = new lib.computer_1();
	this.instance_91.setTransform(72.4,73.4,0.638,0.638,0,0,0,44.4,-36.5);

	this.instance_92 = new lib.Router_1();
	this.instance_92.setTransform(231.1,173.8,0.612,0.612,0,0,0,46.3,-33.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_92},{t:this.instance_91},{t:this.instance_90},{t:this.instance_89},{t:this.instance_88},{t:this.instance_87}]}).wait(165));

	// packet2
	this.instance_94 = new lib.envelopeattackpacket();
	this.instance_94.setTransform(72.2,68.9,0.563,0.563);
	this.instance_94.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_94).wait(4).to({alpha:1},0).to({x:142.2},23).to({x:132.2,y:82.1},19).to({x:240.2},25).to({y:133.1},14).to({x:221.7,y:122.1},14).to({y:170.1},15).to({x:374.3},42).to({x:401.7,alpha:0},4).wait(5));


	this.instance_95 = new lib.label();
	this.instance_95.setTransform(92.5,143.7,1,1,0,0,0,88.5,8.5);
	this.instance_95.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_95).wait(4).to({alpha:1},0).wait(161));

	// packet_1
this.instance_96 = new lib.envelopeclosedstatic();
	this.instance_96.setTransform(234.6,307.5,0.55,0.55,0,0,0,1.6,0);
	this.instance_96.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_96).wait(4).to({alpha:1},0).to({x:234.8,y:173.7},17).to({x:401.3},18).wait(1).wait(2).to({x:234.6,y:307.5},0).to({x:234.8,y:173.7},20).to({x:401.3},18).wait(1).wait(4).to({x:234.6,y:307.5},0).to({x:234.8,y:173.7},20).to({x:401.3},18).wait(1).to({alpha:0},0).wait(41));
	// lines
	this.instance_95 = new lib.Wanline();
	this.instance_95.setTransform(142.2,77.5,0.638,0.705,0,0,0,156.8,11.5);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f().s("#000000").ss(2,2,1).p("AsJmIIAAO8AMKozI0gAA");
	this.shape_237.setTransform(309,230.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_237},{t:this.instance_95}]}).wait(165));

	// wanmask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AiuFdIAAq5IFdAAIAAK5IldAA").cp();
	mask.setTransform(228.6,126.2);

	// Wan line
	this.instance_96 = new lib.Wanline();
	this.instance_96.setTransform(228.1,136.8,0.54,0.54,-89.9,0,0,156.8,11.5);

	this.instance_96.mask = mask;
	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_96}]}).wait(165));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(4,30.5,424.3,302.9);


(lib.arrows3 = function() {
	this.initialize();

	// Layer 1
	this.instance_97 = new lib.Arrow();
	this.instance_97.setTransform(132.8,14.6,0.842,0.999,0,4.2,5.9,5.2,0);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f().s("#000000").ss(2,1,1).p("AqWhIIUtCR");
	this.shape_238.setTransform(66.4,7.3);

	this.addChild(this.shape_238,this.instance_97);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,137.1,18.4);


(lib.arrows2 = function() {
	this.initialize();

	// Layer 1
	this.instance_98 = new lib.Arrow();
	this.instance_98.setTransform(4.7,14.7,0.842,0.999,0,-4.1,174.1,4.7,0.1);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f().s("#000000").ss(2,1,1).p("AKYhII0vCR");
	this.shape_239.setTransform(71,7.3);

	this.instance_99 = new lib.Arrow();
	this.instance_99.setTransform(4.7,24.4,0.842,0.999,0,-4.1,174.1,4.7,0.1);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f().s("#000000").ss(2,1,1).p("AKYhII0vCR");
	this.shape_240.setTransform(71,17.1);

	this.instance_100 = new lib.Arrow();
	this.instance_100.setTransform(4.7,34.2,0.842,0.999,0,-4.1,174.1,4.7,0.1);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f().s("#000000").ss(2,1,1).p("AKYhII0vCR");
	this.shape_241.setTransform(71,26.8);

	this.instance_101 = new lib.Arrow();
	this.instance_101.setTransform(4.7,43.9,0.842,0.999,0,-4.1,174.1,4.7,0.1);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f().s("#000000").ss(2,1,1).p("AKYhHI0vCQ");
	this.shape_242.setTransform(71,36.6);

	this.addChild(this.shape_242,this.instance_101,this.shape_241,this.instance_100,this.shape_240,this.instance_99,this.shape_239,this.instance_98);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,137.4,47.6);


(lib.arrows1 = function() {
	this.initialize();

	// Layer 1
	this.instance_102 = new lib.Arrow();
	this.instance_102.setTransform(132.8,14.6,0.842,0.999,0,4.2,5.9,5.2,0);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f().s("#000000").ss(2,1,1).p("AqWhIIUtCR");
	this.shape_243.setTransform(66.4,7.3);

	this.instance_103 = new lib.Arrow();
	this.instance_103.setTransform(132.8,24.4,0.842,0.999,0,4.2,5.9,5.2,0);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f().s("#000000").ss(2,1,1).p("AqWhIIUtCR");
	this.shape_244.setTransform(66.4,17.1);

	this.instance_104 = new lib.Arrow();
	this.instance_104.setTransform(132.8,34.1,0.842,0.999,0,4.2,5.9,5.2,0);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f().s("#000000").ss(2,1,1).p("AqWhIIUtCR");
	this.shape_245.setTransform(66.4,26.8);

	this.instance_105 = new lib.Arrow();
	this.instance_105.setTransform(132.8,43.9,0.842,0.999,0,4.2,5.9,5.2,0);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f().s("#000000").ss(2,1,1).p("AqWhHIUtCQ");
	this.shape_246.setTransform(66.4,36.6);

	this.addChild(this.shape_246,this.instance_105,this.shape_245,this.instance_104,this.shape_244,this.instance_103,this.shape_243,this.instance_102);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,137.1,47.6);


(lib.slide_3 = function() {
	this.initialize();

	// lines
	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f().s("#4E4C4D").ss(2,1,1).p("AqxWcMAAAgs3AKyWcMAAAgs3");
	this.shape_247.setTransform(207.7,193.4);

	// arrows
	this.instance_106 = new lib.arrows3();
	this.instance_106.setTransform(206.8,288,1,1,0,0,0,68,8.7);

	this.instance_107 = new lib.arrows2();
	this.instance_107.setTransform(208,146.3,1,1,0,0,0,69.2,23.3);

	this.instance_108 = new lib.arrows1();
	this.instance_108.setTransform(206.8,95.8,1,1,0,0,0,68,23.3);

	// help_icon
	this.instance_109 = new lib.helpIcon();
	this.instance_109.setTransform(298,208.4,0.546,0.546,0,0,0,0.1,0.6);

	// icons
	this.instance_110 = new lib.seatedMan_at_desk();
	this.instance_110.setTransform(105.3,258,0.1,0.1,0,0,0,152.5,258.9);

	this.instance_111 = new lib.computer_desk();
	this.instance_111.setTransform(110.9,256.9,0.09,0.09,0,0,0,271.6,252.7);

	this.instance_112 = new lib.NotAllowed();
	this.instance_112.setTransform(297.9,308.6,0.732,0.732);

	this.instance_113 = new lib.Serverfile();
	this.instance_113.setTransform(297.9,308.1,0.477,0.477,0,0,0,31.8,-44.7);

	this.instance_114 = new lib.Serverfile();
	this.instance_114.setTransform(297.9,208.3,0.477,0.477,0,0,0,31.8,-44.7);

	this.instance_115 = new lib.Serverfile();
	this.instance_115.setTransform(297.9,123.9,0.477,0.477,0,0,0,31.8,-44.7);

	this.instance_116 = new lib.computer_1();
	this.instance_116.setTransform(119.4,97.1,0.388,0.388,0,0,0,44.8,-37);

	this.instance_117 = new lib.hacker_1();
	this.instance_117.setTransform(105.4,82,0.243,0.243,0,0,0,80.3,105.1);

	this.addChild(this.instance_117,this.instance_116,this.instance_115,this.instance_114,this.instance_113,this.instance_112,this.instance_111,this.instance_110,this.instance_109,this.instance_108,this.instance_107,this.instance_106,this.shape_247);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(2.9,2,434,344.6);


(lib.slide_2 = function() {
	this.initialize();

	// anim01
	this.anim01 = new lib.animation01();
	this.anim01.setTransform(0.5,0,1,1,0,0,0,0.5,0);

	this.addChild(this.anim01);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(4,30.5,424.3,302.9);


(lib.Main = function() {
	this.initialize();

	// slide2
	this.slide02 = new lib.slide_2();
	this.slide02.setTransform(202.5,126.5,1,1,0,0,0,202.5,126.5);

	this.addChild(this.slide02);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(4,30.5,424.3,302.9);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;