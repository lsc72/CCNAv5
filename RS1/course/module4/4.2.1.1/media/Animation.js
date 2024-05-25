(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.classesmediaMediaObject = function() {
	this.initialize();

	// main
	this.instance = new lib.Main();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(25.9,21.5,378.8,342.5);


(lib.Bitmap1 = function() {
	this.initialize(img.Bitmap1);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,328,173);


(lib.Untitled1 = function() {
	this.image = new DOMObject({type:"IMAGE",image:img.Untitled1});
	this.addChild(this.image);
	
}).prototype = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,329,173);


// symbols:
(lib.ID_txt05b = function() {
	this.initialize();

	// Layer 1
	this.text = new DOMObject({type:"TEXT",compId:"ID_txt05b",width:"100",expand:"down",align:"center"});
	this.text.setTransform(23.6,2.2);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,2.2,51.2,16.2);


(lib.ID_txt05a = function() {
	this.initialize();

	// Layer 1
	this.text_1 = new DOMObject({type:"TEXT",compId:"ID_txt05a",width:"100",expand:"down",align:"center"});
	this.text_1.setTransform(23.6,3.2);

	this.addChild(this.text_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,3.2,51.2,16.2);


(lib.ID_txt04b = function() {
	this.initialize();

	// Layer 1
	this.text_2 = new DOMObject({type:"TEXT",compId:"ID_txt04b",width:"150",expand:"right",align:"center"});
	this.text_2.setTransform(0,0);

	this.addChild(this.text_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,51.2,16.2);


(lib.ID_txt04a = function() {
	this.initialize();

	// Layer 1
	this.text_3 = new DOMObject({type:"TEXT",compId:"ID_txt04a",width:"150",expand:"down",align:"center"});
	this.text_3.setTransform(34.6,0);

	this.addChild(this.text_3);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,51.2,16.2);


(lib.ID_txt03b = function() {
	this.initialize();

	// Layer 1
	this.text_4 = new DOMObject({type:"TEXT",compId:"ID_txt03b",width:"150",expand:"right",align:"center"});
	this.text_4.setTransform(10.6,8);

	this.addChild(this.text_4);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,51.2,16.2);


(lib.ID_txt03a = function() {
	this.initialize();

	// Layer 1
	this.text_5 = new DOMObject({type:"TEXT",compId:"ID_txt03a",width:"150",expand:"down",align:"center"});
	this.text_5.setTransform(47.6,0);

	this.addChild(this.text_5);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,51.2,16.2);


(lib.ID_txt02b = function() {
	this.initialize();

	// Layer 1
	this.text_6 = new DOMObject({type:"TEXT",compId:"ID_txt02b",width:"100",expand:"right",align:"center"});
	this.text_6.setTransform(34.6,0);

	this.addChild(this.text_6);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,51.2,16.2);


(lib.ID_txt02a = function() {
	this.initialize();

	// Layer 1
	this.text_7 = new DOMObject({type:"TEXT",compId:"ID_txt02a",width:"100",expand:"right",align:"center"});
	this.text_7.setTransform(73.6,0);

	this.addChild(this.text_7);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,51.2,16.2);


(lib.ID_txt01b = function() {
	this.initialize();

	// Layer 1
	this.text_8 = new DOMObject({type:"TEXT",compId:"ID_txt01b",width:"100",expand:"right",align:"center"});
	this.text_8.setTransform(34.6,0);

	this.addChild(this.text_8);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,2.2,51.2,16.2);


(lib.ID_txt01a = function() {
	this.initialize();

	// Layer 1
	this.text_9 = new DOMObject({type:"TEXT",compId:"ID_txt01a",width:"100",expand:"down",align:"center"});
	this.text_9.setTransform(69.6,0);

	this.addChild(this.text_9);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,51.2,16.2);


(lib.Graph = function() {
	this.initialize();

	// back
	this.instance = new lib.Untitled1();
	this.instance.setTransform(14,0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(14,0,329,173);


(lib.Graph02 = function() {
	this.initialize();

	// lazytext
	this.text_39 = new DOMObject({type:"TEXT",compId:"ID_graph02",width:"100",expand:"left+right",align:"center"});
	this.text_39.setTransform(135,160);

	this.text_40 = new DOMObject({type:"TEXT",compId:"ID_graph01",width:"100",expand:"down",align:"center"});
	this.text_40.setTransform(0,150,1,1,-89.9);

	// side grid numbers
	this.text_41 = new cjs.Text("6", "11px Arial", "#393536");
	this.text_41.lineHeight = 13;
	this.text_41.setTransform(16.5,23.3);

	this.text_42 = new cjs.Text("3", "11px Arial", "#393536");
	this.text_42.lineHeight = 13;
	this.text_42.setTransform(16.5,68.6);

	this.text_43 = new cjs.Text("0", "11px Arial", "#393536");
	this.text_43.lineHeight = 13;
	this.text_43.setTransform(16.5,118.4);

	// lines
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#A7A5A6").ss(2,1,1).p("ASlnVIDYAAIAAgCIjYAAIAAACAPNnVIAAgCIjYAAIAAACIDYAAAPNgdIjYAAIAAACIDYAAIAAgCAV9gdIjYAAIAAACIDYAAIAAgCIAAm4ASlnXIjYAAAL1nVIjYAAIAAG4IDYAAIAAm4APNgbIDYAAASlgdIAAm4IjYAAIAAG4IDYAAAL1nXIjYAAIAAACIjYAAIAAG4IjYAAIAAACIDYAAIAAgCABtnVIDYAAIAAgCIjYAAIAAACIAAG4AFFgbIDYAAIAAgCIjYAAAIdnXIjYAAAIdHYIAAgCAFFHWIAAACABtHWIAAACASlHWIAAACAV9HYIAAgCIAAnxAPNHYIAAgCIAAnxAL1HWIAAACAL1HWIAAnxIjYAAIAAHxASlHWIAAnxABtHWIAAnxIjWAAIAAHxAFFHWIAAnxAlBnVIDYAAIAAgCIjYAAIAAACArxnVIDYAAIAAgCIjYAAIAAACIAAG4AoZgdIjYAAIAAACIDYAAIAAgCAhpgdIjYAAIAAACIDYAAIAAgCIAAm4AoZgbIDYAAAoZnVIAAG4IDYAAIAAm4IjYAAAlBnXIjYAAAyhnVIDYAAIAAgCIjYAAIAAACA18nXIDbAAA12gdIBQABQAFAAAFAAQACAAABAAIATAAQADAAADAAQACAAADAAIABAAQABAAACAAQABAAACAAIBTgBIAAm4IjbAAAz0gcIBTABIAAgCAyhgbIDYAAIAAgCIjYAAAvJgdIAAm4AvJHYIAAgCAyhHWIAAACAhpHYIAAgCAlBHWIAAACAoZHYIAAgCIAAnxArxHWIAAACArxHWIAAnxIjYAAIAAHxAlBHWIAAnxAvJgdIDYAAAyhgbIAAHxArxnVIjYAAArxnXIjYAAAhpgdIDWAAABtnVIjWAAABtnXIjWAA");
	this.shape_4.setTransform(169.3,79.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#A7A5A6").ss(4,0,0,3).p("AXZI2IAAAAIgBAAIjUAAAUEI0IDUABIABABAGkI0IjYAAIjWAAADMI2IDYAAAgKI2IDWAAAQsI2IDYAAAUEI0IjYAAIjYAAIjYAAAJ8I2IDYAAAQsI2IjYAAAGkI0IDYAAAjiI0IDYAAAJ8I2IjYAAA30pJIAADPAgKI2IjYAAIjYAAIjYAAIjYAAIjYAAIjYAAIjaAAIAAgCIAAusIAAgCAxCI0IjYAAIjaAAAjiI0IjYAAIjYAAIjYAAAxCI0IDYAA");
	this.shape_5.setTransform(181.3,70.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#A7A5A6").s().p("AXUJPIg0hSICpBUIipBTIA0hUIABAAIgBgBA35owIhPA2IBTipIBTCpIhWg2IgBAA").cp();
	this.shape_6.setTransform(181.8,67.6);

	this.addChild(this.shape_6,this.shape_5,this.shape_4,this.text_43,this.text_42,this.text_41,this.text_40,this.text_39);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-3.6,0,346.5,150.8);


(lib.Graph01 = function() {
	this.initialize();

	// lazytext
	this.text_44 = new DOMObject({type:"TEXT",compId:"ID_graph02",width:"100",expand:"down",align:"center"});
	this.text_44.setTransform(100,160);

	this.text_45 = new DOMObject({type:"TEXT",compId:"ID_graph01",width:"100",expand:"down",align:"center"});
	this.text_45.setTransform(0,150,1,1,-89.1);

	// side grid numbers
	this.text_46 = new cjs.Text("6", "11px Arial", "#393536");
	this.text_46.lineHeight = 13;
	this.text_46.setTransform(16.5,23.3);

	this.text_47 = new cjs.Text("3", "11px Arial", "#393536");
	this.text_47.lineHeight = 13;
	this.text_47.setTransform(16.5,68.6);

	this.text_48 = new cjs.Text("0", "11px Arial", "#393536");
	this.text_48.lineHeight = 13;
	this.text_48.setTransform(16.5,118.4);

	// bottom grid numbers
	this.text_49 = new cjs.Text("1", "11px Arial", "#393536");
	this.text_49.lineHeight = 13;
	this.text_49.setTransform(293.9,133.4);

	this.text_50 = new cjs.Text("0", "11px Arial", "#393536");
	this.text_50.lineHeight = 13;
	this.text_50.setTransform(272.3,133.4);

	this.text_51 = new cjs.Text("1", "11px Arial", "#393536");
	this.text_51.lineHeight = 13;
	this.text_51.setTransform(250.7,133.4);

	this.text_52 = new cjs.Text("1", "11px Arial", "#393536");
	this.text_52.lineHeight = 13;
	this.text_52.setTransform(229.1,133.4);

	this.text_53 = new cjs.Text("0", "11px Arial", "#393536");
	this.text_53.lineHeight = 13;
	this.text_53.setTransform(207.5,133.4);

	this.text_54 = new cjs.Text("0", "11px Arial", "#393536");
	this.text_54.lineHeight = 13;
	this.text_54.setTransform(185.9,133.4);

	this.text_55 = new cjs.Text("1", "11px Arial", "#393536");
	this.text_55.lineHeight = 13;
	this.text_55.setTransform(164.3,133.4);

	this.text_56 = new cjs.Text("0", "11px Arial", "#393536");
	this.text_56.lineHeight = 13;
	this.text_56.setTransform(142.7,133.4);

	this.text_57 = new cjs.Text("0", "11px Arial", "#393536");
	this.text_57.lineHeight = 13;
	this.text_57.setTransform(121.1,133.4);

	this.text_58 = new cjs.Text("1", "11px Arial", "#393536");
	this.text_58.lineHeight = 13;
	this.text_58.setTransform(99.5,133.4);

	this.text_59 = new cjs.Text("1", "11px Arial", "#393536");
	this.text_59.lineHeight = 13;
	this.text_59.setTransform(77.9,133.4);

	this.text_60 = new cjs.Text("0", "11px Arial", "#393536");
	this.text_60.lineHeight = 13;
	this.text_60.setTransform(56.3,133.4);

	this.text_61 = new cjs.Text("1", "11px Arial", "#393536");
	this.text_61.lineHeight = 13;
	this.text_61.setTransform(34.7,133.4);

	// lines
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#A7A5A6").ss(2,1,1).p("ASlFFIAAEmASlpoIDYAAIAAgCIjYAAIAAACAPNpoIAAgCIjYAAIAAACIDYAAAPNiwIjYAAIAAACIDYAAIAAgCAV9iwIjYAAIAAACIDYAAIAAgCIAAm4ASliwIAAm4IjYAAIAAG4IDYAAAPNiuIDYAAAL1poIjYAAIAAG4IDYAAIAAm4ASlpqIjYAAAL1pqIjYAAIAAACIjYAAIAAG4IjYAAIAAACIDYAAIAAgCABtpoIDYAAIAAgCIjYAAIAAACIAAG4AFFiuIDYAAIAAgCIjYAAAIdpqIjYAAAIdFFIAAgCAFFFDIAAACABtFDIAAACIAAEmAIdJrIAAkmAFFJrIAAkmAV9FFIAAgCIAAnxASlFDIAAACAPNFFIAAgCIAAnxAL1FDIAAACIAAEmAPNFFIAAEmAV9FRIAAEaAFFFDIAAnxABtFDIAAnxIjWAAIAAHxASlFDIAAnxAL1FDIAAnxIjYAAIAAHxAlBpoIDYAAIAAgCIjYAAIAAACArxpoIDYAAIAAgCIjYAAIAAACIAAG4AoZiwIjYAAIAAACIDYAAIAAgCAhpiwIjYAAIAAACIDYAAIAAgCIAAm4AlBpqIjYAAAoZpoIAAG4IDYAAIAAm4IjYAAAoZiuIDYAAAyhpoIDYAAIAAgCIjYAAIAAACA18pqIDbAAA18poIDbAAA12iwIBQABQAFAAAFAAQACAAABAAIATAAQADAAADAAQACAAADAAIABAAQABAAACAAQABAAACAAIBTgBIAAm4Az0ivIBTABIAAgCAyhiuIDYAAIAAgCIjYAAAvJiwIAAm4AyhFDIAAACIAAEmAvJFFIAAgCAvJJrIAAkmA15FRIAAEaAlBFDIAAACIAAEmAhpFFIAAgCArxFDIAAACIAAEmAoZFFIAAgCIAAnxAhpJrIAAkmAoZFFIAAEmArxpqIjYAAArxpoIjYAAAyhiuIAAHxAvJiwIDYAAAlBFDIAAnxArxFDIAAnxIjYAAIAAHxABtpqIjWAAABtpoIjWAAAhpiwIDWAA");
	this.shape_7.setTransform(169.3,94.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#A7A5A6").ss(4,0,0,3).p("AUEI0IDUABIABABIAAAAIgBAAIjUAAIjYAAIjYAAAGkI0IjYAAIjWAAADMI2IDYAAAgKI2IDWAAAUEI0IjYAAIjYAAIjYAAAJ8I2IDYAAAjiI0IDYAAAGkI0IDYAAAJ8I2IjYAAA30pJIAADPIAAACIAAOsA0aI2IDYAAAxCI0IjYAAIjaAAIAAACIDaAAAm6I2IDYAAAjiI0IjYAAIjYAAIjYAAAtqI2IDYAAAm6I2IjYAAAtqI2IjYAAAxCI0IDYAAAgKI2IjYAA");
	this.shape_8.setTransform(181.3,70.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#A7A5A6").s().p("AXUJQIABAAIgBgBIg0hSICpBUIipBTIA0hUA31qjIBTCpIhWg2IgBAAIhPA2IBTip").cp();
	this.shape_9.setTransform(181.8,67.6);

	// white bg
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().dr(-171.5,-88,343,176);
	this.shape_10.setTransform(171.5,88);

	this.addChild(this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.text_61,this.text_60,this.text_59,this.text_58,this.text_57,this.text_56,this.text_55,this.text_54,this.text_53,this.text_52,this.text_51,this.text_50,this.text_49,this.text_48,this.text_47,this.text_46,this.text_45,this.text_44);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.4,0,343.5,182.3);


(lib.signal01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// Layer 1
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#393536").ss(4,2,1).p("AhsAAIDZAA");
	this.shape_11.setTransform(10.9,0);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#393536").ss(4,2,1).p("Ahsh7IDZAAIAAD3");
	this.shape_12.setTransform(10.9,12.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#393536").ss(4,2,1).p("Ahsj3IDZAAIAAHw");
	this.shape_13.setTransform(10.9,24.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#393536").ss(4,2,1).p("AjYj3IDZAAIAAHwIDYAA");
	this.shape_14.setTransform(21.7,24.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#393536").ss(4,2,1).p("AjYj3IDZAAIAAHwIDYAAIAAj5");
	this.shape_15.setTransform(21.7,24.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#393536").ss(4,2,1).p("AjYj3IDZAAIAAHwIDYAAIAAnu");
	this.shape_16.setTransform(21.7,24.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#393536").ss(4,2,1).p("AlDj3IDaAAIAAHwIDXAAIAAnuIDWAA");
	this.shape_17.setTransform(32.5,24.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#393536").ss(4,2,1).p("Amwj3IDbAAIAAHwIDWAAIAAnuIGwAA");
	this.shape_18.setTransform(43.3,24.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#393536").ss(4,2,1).p("Amwj3IDbAAIAAHwIDWAAIAAnuIGwAAIAAD1");
	this.shape_19.setTransform(43.3,24.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#393536").ss(4,2,1).p("Amwj5IDbAAIAAHwIDWAAIAAnuIGwAAIAAHw");
	this.shape_20.setTransform(43.3,25);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#393536").ss(4,2,1).p("Aodj5IDbAAIAAHwIDYAAIAAnuIGuAAIAAHwIDaAA");
	this.shape_21.setTransform(54.2,25);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#393536").ss(4,2,1).p("AqIj5IDbAAIAAHwIDYAAIAAnuIGuAAIAAHwIGwAA");
	this.shape_22.setTransform(64.9,25);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#393536").ss(4,2,1).p("AqIj5IDbAAIAAHwIDYAAIAAnuIGuAAIAAHwIGwAAIAAj5");
	this.shape_23.setTransform(64.9,25);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#393536").ss(4,2,1).p("AqIj5IDbAAIAAHwIDYAAIAAnuIGuAAIAAHwIGwAAIAAnw");
	this.shape_24.setTransform(64.9,25);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#393536").ss(4,2,1).p("Ar0j5IDbAAIAAHwIDYAAIAAnuIGuAAIAAHwIGwAAIAAnwIDYAA");
	this.shape_25.setTransform(75.7,25);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#393536").ss(4,2,1).p("Ar0j5IDbAAIAAHwIDYAAIAAnuIGuAAIAAHwIGwAAIAAnwIDYAAIAAD3");
	this.shape_26.setTransform(75.7,25);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#393536").ss(4,2,1).p("Ar0j5IDbAAIAAHwIDYAAIAAnuIGuAAIAAHwIGwAAIAAnwIDYAAIAAHw");
	this.shape_27.setTransform(75.7,25);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#393536").ss(4,2,1).p("Atfj5IDaAAIAAHwIDYAAIAAnuIGvAAIAAHwIGvAAIAAnwIDYAAIAAHwIDXAA");
	this.shape_28.setTransform(86.5,25);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#393536").ss(4,2,1).p("AvMj5IDbAAIAAHwIDYAAIAAnuIGwAAIAAHwIGuAAIAAnwIDYAAIAAHwIGwAA");
	this.shape_29.setTransform(97.3,25);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#393536").ss(4,2,1).p("AvMj5IDbAAIAAHwIDYAAIAAnuIGwAAIAAHwIGuAAIAAnwIDYAAIAAHwIGwAAIAAj5");
	this.shape_30.setTransform(97.3,25);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#393536").ss(4,2,1).p("AvMj5IDbAAIAAHwIDYAAIAAnuIGwAAIAAHwIGuAAIAAnwIDYAAIAAHwIGwAAIAAnw");
	this.shape_31.setTransform(97.3,25);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#393536").ss(4,2,1).p("Aw6j5IDbAAIAAHwIDYAAIAAnuIGwAAIAAHwIGuAAIAAnwIDYAAIAAHwIGwAAIAAnwIDcAA");
	this.shape_32.setTransform(108.3,25);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#393536").ss(4,2,1).p("ASlj3ImwAAIAAHwImwAAIAAnwIjYAAIAAHwImuAAIAAnwImwAAIAAHuIjYAAIAAnwIjbAA");
	this.shape_33.setTransform(118.9,25);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#393536").ss(4,2,1).p("ASlAAIAAj3ImwAAIAAHwImwAAIAAnwIjYAAIAAHwImuAAIAAnwImwAAIAAHuIjYAAIAAnwIjbAA");
	this.shape_34.setTransform(118.9,25);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#393536").ss(4,2,1).p("ASlD5IAAnwImwAAIAAHwImwAAIAAnwIjYAAIAAHwImuAAIAAnwImwAAIAAHuIjYAAIAAnwIjbAA");
	this.shape_35.setTransform(118.9,25);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#393536").ss(4,2,1).p("AURD5IjYAAIAAnwImwAAIAAHwImwAAIAAnwIjYAAIAAHwImuAAIAAnwImwAAIAAHuIjYAAIAAnwIjbAA");
	this.shape_36.setTransform(129.7,25);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#393536").ss(4,2,1).p("AURAAIAAD5IjYAAIAAnwImwAAIAAHwImwAAIAAnwIjYAAIAAHwImuAAIAAnwImwAAIAAHuIjYAAIAAnwIjbAA");
	this.shape_37.setTransform(129.7,25);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#393536").ss(4,2,1).p("A0Qj5IDbAAIAAHwIDYAAIAAnuIGwAAIAAHwIGuAAIAAnwIDYAAIAAHwIGwAAIAAnwIGwAAIAAHwIDYAAIAAnw");
	this.shape_38.setTransform(129.7,25);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#393536").ss(4,2,1).p("A13j5IDbAAIAAHwIDYAAIAAnuIGwAAIAAHxIGwAAIAAnxIDWAAIAAHxIGwAAIAAnxIGwAAIAAHxIDYAAIAAnxIDOAA");
	this.shape_39.setTransform(140,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11}]}).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.signal_w_interference = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// Layer 1
	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#393536").ss(4,0,0,3).p("AhoAlQBfgNBTg4QAHgEAHAA");
	this.shape_40.setTransform(10.5,27.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#393536").ss(4,0,0,3).p("AiDg+QBfgNBTg6QASgJAMAJIAAABIAKAMQABACABADQAJAYACAyQAEBrALBa");
	this.shape_41.setTransform(13.2,37.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#393536").ss(4,0,0,3).p("AinjbQBfgOBSg5QASgKANAKIAAAAIAJANQABACABACQAKAYACAyQAEB2AMBdQALBfAUBmQAWBUAkAD");
	this.shape_42.setTransform(16.9,53);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#393536").ss(4,0,0,3).p("AjmjbQBfgOBUg5QASgKANAKIAAAAIAJANQABACABACQAJAYABAyQAEB2AMBdQALBfAUBmQAhCABDg8QAfgbAQgpQAMgfACgmIAAgtQABgNABgNQACgVABgU");
	this.shape_43.setTransform(23.2,53);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#393536").ss(4,0,0,3).p("Aj2jbQBfgOBVg5QASgKAMAKIAAAAIAKANQABACABACQAJAYACAyQAFB2AKBdQALBfAUBmQAgCABEg8QAfgbAQgpQALgfACgmIAAgtQABgNACgNQAGhTAAhPQgChaAfhr");
	this.shape_44.setTransform(24.7,53);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#393536").ss(4,0,0,3).p("AE5jbQgcgjgHgkIguAAQAIAKgQAqQgKAbgBAPIAAAHAlFjbQBfgOBUg5QASgKANAKIAAAAIAJANQABACABACQAKAYACAyQAEB2AMBdQALBfAUBmQAhCABBg8QAfgbAQgpQAMgfACgmIAAgtQABgNABgNQAHhTgBhPQgBhaAehrIAgAAQAcAvACAv");
	this.shape_45.setTransform(32.7,53);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#393536").ss(4,0,0,3).p("AmojbQBfgOBUg5QASgKANAKIAAAAIAJANQABACABACQAKAYACAyQAEB2AMBdQALBfAUBmQAhCABDg8QAfgbAOgpQAMgfACgmIAAgtQABgNABgNQAHhTgBhPQgBhaAehrIAgAAQAcAvACAvQABgPAKgbQAQgqgIgKIAuAAQAIArAnApQABAAABAAQBoAFAWgPQAkgYASgSAByjEIAAAH");
	this.shape_46.setTransform(42.6,53);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#393536").ss(4,0,0,3).p("Am/jLQBfgNBVg6QASgJAMAJIAAABIAKAMQABACABADQAJAYACAyQAFB1AMBdQALBfAUBmQAgCBBEg8QAfgcAQgpQALgeACgmIAAgtQABgNACgNQAEhWAAhMQgBhbAehrIAgAAQAcAwABAuQABgPALgbQAPgpgHgLIAuAAQAHArAnApQABAAABAAQBoAGAXgQQBGgvABgZIAAgCQABACABABQASAZABBVQABBNAGBdABbi0IAAAH");
	this.shape_47.setTransform(44.8,51.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#393536").ss(4,0,0,3).p("AnRjLQBfgNBVg6QASgJAMAJIAAABIAKAMQABACABADQAJAYACAyQAFB1AMBdQALBfAUBmQAgCBBEg8QAfgcAQgpQALgeACgmIAAgtQABgNACgNQAGhWAAhMQgChbAdhrIAgAAQAcAwABAuQABgPALgbQAPgpgHgLIAuAAQAHArAnApQABAAABAAQBoAGAXgQQBGgvABgZIAAgCQABACABABQASAZABBVQABBaAIBxQAGBUAQBjIAMBHABJi0IAAAH");
	this.shape_48.setTransform(46.6,51.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#393536").ss(4,0,0,3).p("AodjLQBfgNBVg6QASgJAMAJIAAABIAKAMQABACABADQAJAYACAyQAFB1AMBdQALBfAUBmQAgCBBEg8QAfgcAQgpQALgeACgmIAAgtQABgNACgNQAGhWAAhMQgChbAfhrIAgAAQAcAwABAuQABgPAJgbQAPgpgHgLIAuAAQAHArAnApQABAAABAAQBoAGAXgQQBGgvABgZIAAgCQABACABABQASAZABBVQABBaAIBxQAGBUAQBjIAMBHICgh8AgBi0IAAAH");
	this.shape_49.setTransform(54.2,51.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#393536").ss(4,0,0,3).p("ApkjLQBfgNBVg6QASgJAMAJIAAABIAKAMQABACABADQAJAYACAyQAFB1AMBdQALBfAUBmQAgCBBEg8QAfgcAQgpQALgeACgmIAAgtQABgNACgNQAGhWAAhMQgChbAfhrIAgAAQAcAwABAuQABgPALgbQAPgpgHgLIAuAAQAGArAmApQABAAABAAQBoAGAXgQQBGgvABgZIAAgCQABACABABQASAZABBVQABBaAIBxQAGBUAQBjIAMBHICpiDIAWA8QAVAyAUASQAeAaALg7IAFgjQAHg4AIhdAhIi0IAAAH");
	this.shape_50.setTransform(61.3,51.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#393536").ss(4,0,0,3).p("AqOjLQBfgNBUg6QASgJANAJIAAABIAJAMQABACABADQAKAYACAyQAEB1AMBdQALBfAUBmQAhCBBDg8QAfgcAQgpQAMgeACgmIAAgtQABgNABgNQAHhWgBhMQgBhbAehrIAgAAQAcAwACAuQABgPAKgbQAQgpgIgLIAuAAQAIArAnApQABAAABAAQBmAGAWgQQBHgvAAgZIAAgCQABACABABQASAZACBVQABBaAIBxQAFBUAQBjIANBHICoiDIAXA8QAVAyAUASQAeAaAKg7IAFgjQAIg4AIhdQAvBkAmAxAhyi0IAAAH");
	this.shape_51.setTransform(65.6,51.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#393536").ss(4,0,0,3).p("AqZjLQBfgNBVg6QASgJAMAJIAAABIAKAMQABACABADQAJAYACAyQAFB1AMBdQALBfAUBmQAgCBBEg8QAfgcAQgpQALgeACgmIAAgtQABgNACgNQAGhWAAhMQgChbAfhrIAgAAQAcAwABAuQABgPALgbQAPgpgHgLIAuAAQAHArAnApQABAAABAAQBmAGAXgQQBGgvABgZIAAgCQABACABABQASAZABBVQABBaAIBxQAGBUAQBjIAMBHICpiDIAWA8QAVAyAUASQAeAaALg7IAFgjQAHg4AIhdQAwBkAmAxIARjBQACgUACgTAh9i0IAAAH");
	this.shape_52.setTransform(66.6,51.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#393536").ss(4,0,0,3).p("AqmjLQBfgNBVg6QASgJAMAJIAAABIAKAMQABACABADQAJAYACAyQAFB1AMBdQALBfAUBmQAgCBBEg8QAfgcAQgpQALgeACgmIAAgtQABgNACgNQAGhWAAhMQgChbAfhrIAgAAQAcAwABAuQABgPALgbQAPgpgHgLIAuAAQAHArAnApQABAAABAAQBmAGAXgQQBGgvABgZIAAgCQABACABABQASAZABBVQABBaAIBxQAGBUAQBjIAMBHICpiDIAWA8QAVAyAUASQAeAaALg7IAFgjQAHg4AIhdQAwBkAmAxIARjBQAKhqAUh/AiKi0IAAAH");
	this.shape_53.setTransform(67.9,51.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#393536").ss(4,0,0,3).p("ArSjFQBfgNBVg6QASgJAMAJIAAABIAKAMQABACABADQAJAYACAyQAFB1AMBdQALBfAUBmQAgCBBEg8QAfgcAQgpQALgeACgmIAAgtQABgNACgNQAGhWAAhMQgChbAfhrIAgAAQAcAwABAuQABgPALgbQAPgpgHgLIAuAAQAHArAnApQABAAABAAQBmAGAXgQQBGgvABgZIAAgCQABACABABQASAZABBVQABBaAIBxQAGBUAQBjIAMBHICpiDIAWA8QAVAyAUASQAeAaALg7IAFgjQAHg4AIhdQAwBkAmAxIARjBQAKhqAUh/QA4A8AZgeIAHisAi2iuIAAAH");
	this.shape_54.setTransform(72.3,50.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#393536").ss(4,0,0,3).p("ArVh1QBfgNBVg6QASgJAMAJIAAABIAKAMQABACABADQAJAYACAyQAFBzAMBfQALBfAUBmQAgCBBEg8QAfgcAQgpQALgeACgmIAAgtQABgNACgNQAGhWAAhOQgChZAfhrIAgAAQAcAwABAuQABgPALgbQAPgpgHgLIAuAAQAHArAnApQABAAABAAQBmAGAXgQQBGgvABgZIAAgCQABACABABQASAZABBVQABBYAIBzQAGBUAQBjIAMBHICpiDIAWA8QAVAyAUASQAeAaALg7IAFgjQAHg4AIhdQAwBkAmAxIARjBQAKhsAUh9QA4A8AZgeIANlMAi5heIAAAH");
	this.shape_55.setTransform(72.6,42.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#393536").ss(4,0,0,3).p("Ar9hmQBfgOBUg5QASgKANAKIAAAAIAJANQABACABACQAKAYACAyQAEB0AMBfQALBfAUBmQAhCABDg8QAfgbAQgpQAMgfACgmIAAgtQABgNABgNQAHhVgBhPQgBhYAehrIAgAAQAcAvACAvQABgPAKgbQAQgqgIgKIAuAAQAIArAnApQABAAABAAQBoAFAUgPQBHgvAAgZIAAgCQABABABACQASAZACBVQABBXAIBzQAFBVAQBjIANBGICoiDIAXA9QAVAxAUASQAeAbAKg7IAFgjQAIg5AIhcQAvBkAmAxIARjCQAKhsAVh9QA4A8AYgeIANlLQBKAfAHglAjhhPIAAAH");
	this.shape_56.setTransform(76.7,41.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#393536").ss(4,0,0,3).p("AsJhTQBfgOBUg5QASgKANAKIAAAAIAJANQABACABACQAKAYACAyQAEB0AMBfQALBfAUBmQAhCABDg8QAfgbAQgpQAMgfACgmIAAgtQABgNABgNQAHhVgBhPQgBhYAehrIAgAAQAcAvACAvQABgPAKgbQAQgqgIgKIAuAAQAIArAnApQABAAABAAQBoAFAUgPQBHgvAAgZIAAgCQABABABACQASAZACBVQABBXAIBzQAFBVAQBjIANBGICoiDIAXA9QAVAxAUASQAeAbAKg7IAFgjQAIg5AIhcQAvBkAmAxIARjCQAKhsAVh9QA4A8AYgeIANlLQBKAfAHglQgCANACAUQABALABAPQAEAfAHArIALBmAjtg8IAAAH");
	this.shape_57.setTransform(77.9,39.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#393536").ss(4,0,0,3).p("AsShTQBfgOBVg5QASgKAMAKIAAAAIAKANQABACABACQAJAYACAyQAFB0AMBfQALBfAUBmQAgCABEg8QAfgbAQgpQALgfACgmIAAgtQABgNACgNQAGhVAAhPQgChYAfhrIAgAAQAcAvABAvQABgPALgbQAPgqgHgKIAuAAQAHArAnApQABAAABAAQBoAFAXgPQBEgvABgZIAAgCQABABABACQASAZABBVQABBXAIBzQAGBVAQBjIAMBGICpiDIAWA9QAVAxAUASQAeAbALg7IAFgjQAHg5AIhcQAwBkAmAxIARjCQAKhsAUh9QA4A8AZgeIANlLQBKAfAHglQgCANACAUQAAALACAPQADAfAHArIAMBmQAJBjAHCaQAAAGAAAFAj2g8IAAAH");
	this.shape_58.setTransform(78.7,39.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#393536").ss(4,0,0,3).p("AsphTQBfgOBVg5QASgKAMAKIAAAAIAKANQABACABACQAJAYACAyQAFB0AMBfQALBfAUBmQAgCABEg8QAfgbAQgpQALgfACgmIAAgtQABgNACgNQAGhVAAhPQgChYAfhrIAgAAQAcAvABAvQABgPALgbQAPgqgHgKIAuAAQAHArAnApQABAAABAAQBoAFAXgPQBEgvABgZIAAgCQABABABACQASAZABBVQABBXAIBzQAGBVAQBjIAMBGICpiDIAWA9QAVAxAUASQAeAbALg7IAFgjQAHg5AIhcQAwBkAmAxIARjCQAKhsAUh9QA4A8AZgeIANlLQBKAfAHglQgCANACAUQAAALACAPQADAfAHArIAMBmQAJBjAHCaQABAoADAjQAHBoANBDQAKA4APAdAkNg8IAAAH");
	this.shape_59.setTransform(81,39.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#393536").ss(4,0,0,3).p("AtqhfQBfgOBVg5QASgKAMAKIAAAAIAKANQABACABACQAJAYACAyQAFB0AMBfQALBfAUBmQAgCABEg8QAfgbAQgpQALgfACgmIAAgtQABgNACgNQAGhVAAhPQgChYAfhrIAgAAQAcAvABAvQABgPALgbQAPgqgHgKIAuAAQAHArAnApQABAAABAAQBoAFAXgPQBGgvABgZIAAgCQABABABACQASAZABBVQABBXAGBzQAGBVAQBjIAMBGICpiDIAWA9QAVAxAUASQAeAbALg7IAFgjQAHg5AIhcQAwBkAmAxIARjCQAKhsAUh9QA4A8AZgeIANlLQBKAfAHglQgCAMACAVQAAALACAPQADAfAHArIAMBmQAJBjAHCaQABAoADAjQAHBoANBDQAKA4APAdQBBAsAZgcQAZgcAGhJQABgPACgOQABgOADgOAlOhIIAAAH");
	this.shape_60.setTransform(87.5,40.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#393536").ss(4,0,0,3).p("AuQhfQBfgOBVg5QASgKAMAKIAAAAIAKANQABACABACQAJAYACAyQAFB0AMBfQALBfAUBmQAgCABEg8QAfgbAQgpQALgfACgmIAAgtQABgNACgNQAGhVAAhPQgChYAfhrIAgAAQAcAvABAvQABgPALgbQAPgqgHgKIAuAAQAHArAnApQABAAABAAQBoAFAXgPQBGgvABgZIAAgCQABABABACQASAZABBVQABBXAIBzQAGBVAQBjIAKBGICpiDIAWA9QAVAxAUASQAeAbALg7IAFgjQAHg5AIhcQAwBkAmAxIARjCQAKhsAUh9QA4A8AZgeIANlLQBKAfAHglQgCAMACAVQAAALACAPQADAfAHArIAMBmQAJBjAHCaQABAoADAjQAHBoANBDQAKA4APAdQBBAsAZgcQAZgcAGhJQABgPACgOQAHhIAchGQATgvAcgtAl0hIIAAAH");
	this.shape_61.setTransform(91.3,40.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#393536").ss(4,0,0,3).p("AushfQBfgOBVg5QASgKAMAKIAAAAIAKANQABACABACQAJAYACAyQAFB0AMBfQALBfAUBmQAgCABEg8QAfgbAQgpQALgfACgmIAAgtQABgNACgNQAGhVAAhPQgChYAfhrIAgAAQAcAvABAvQABgPALgbQAPgqgHgKIAuAAQAHArAnApQABAAABAAQBoAFAXgPQBGgvABgZIAAgCQABABABACQASAZABBVQABBXAIBzQAGBVAQBjIAMBGICniDIAWA9QAVAxAUASQAeAbALg7IAFgjQAHg5AIhcQAwBkAmAxIARjCQAKhsAUh9QA4A8AZgeIANlLQBKAfAHglQgCAMACAVQAAALACAPQADAfAHArIAMBmQAJBjAHCaQABAoADAjQAHBoANBDQAKA4APAdQBBAsAZgcQAZgcAGhJQABgPACgOQAHhIAchGQATgvAcgtQAYAwALAsQALAwgEArQgEAsAJAUQAHAOANACIAHAAAmQhIIAAAH");
	this.shape_62.setTransform(94.1,40.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#393536").ss(4,0,0,3).p("AvWhfQBfgOBVg5QASgKAMAKIAAAAIAKANQABACABACQAJAYACAyQAFB0AMBfQALBfAUBmQAgCABEg8QAfgbAQgpQALgfACgmIAAgtQABgNACgNQAGhVAAhPQgChYAfhrIAgAAQAcAvABAvQABgPALgbQAPgqgHgKIAuAAQAHArAnApQABAAABAAQBoAFAXgPQBGgvABgZIAAgCQABABABACQASAZABBVQABBXAIBzQAGBVAQBjIAMBGICniDIAWA9QAVAxAUASQAeAbALg7IAFgjQAHg5AIhcQAwBkAmAxIARjCQAKhsAUh9QA4A8AZgeIANlLQBKAfAHglQgCAMACAVQAAALACAPQADAfAHArIAMBmQAJBjAHCaQABAoADAjQAHBoANBDQAKA4APAdQBBAsAZgcQAZgcAGhJQABgPACgOQAHhIAchGQATgvAcgtQAYAwALAsQALAwgEArQgEAsAJAUQAHAOANACIAHAAQAAgBABAAQARgRAchrQAMgwAFhAQAAgIABgIAm6hIIAAAH");
	this.shape_63.setTransform(98.3,40.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#393536").ss(4,0,0,3).p("AvXhfQBfgOBVg5QASgKAMAKIAAAAIAKANQABACABACQAJAYACAyQAFB0AMBfQALBfAUBmQAgCABEg8QAfgbAQgpQALgfACgmIAAgtQABgNACgNQAGhVAAhPQgChYAfhrIAgAAQAcAvABAvQABgPALgbQAPgqgHgKIAuAAQAHArAnApQABAAABAAQBoAFAXgPQBGgvABgZIAAgCQABABABACQASAZABBVQABBXAIBzQAGBVAQBjIAMBGICniDIAWA9QAVAxAUASQAeAbALg7IAFgjQAHg5AIhcQAwBkAmAxIARjCQAKhsAUh9QA4A8AZgeIANlLQBKAfAHglQgCAMACAVQAAALACAPQADAfAHArIAMBmQAJBjAHCaQABAoADAjQAHBoANBDQAKA4APAdQBBAsAZgcQAZgcAGhJQABgPACgOQAHhIAchGQATgvAcgtQAYAwALAsQALAwgEArQgEAsAJAUQAHAOANACIAHAAQAAgBABAAQARgRAchrQAMgwAFhAQABgTABgVIAAh0QgBgZgBgaIgBgrAm7hIIAAAH");
	this.shape_64.setTransform(98.4,40.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#393536").ss(4,0,0,3).p("AvXhfQBfgOBVg5QASgKAMAKIAAAAIAKANQABACABACQAJAYACAyQAFB0AMBfQALBfAUBmQAgCABEg8QAfgbAQgpQALgfACgmIAAgtQABgNACgNQAGhVAAhPQgChYAfhrIAgAAQAcAvABAvQABgPALgbQAPgqgHgKIAuAAQAHArAnApQABAAABAAQBoAFAXgPQBGgvABgZIAAgCQABABABACQASAZABBVQABBXAIBzQAGBVAQBjIAMBGICniDIAWA9QAVAxAUASQAeAbALg7IAFgjQAHg5AIhcQAwBkAmAxIARjCQAKhsAUh9QA4A8AZgeIANlLQBKAfAHglQgCAMACAVQAAALACAPQADAfAHArIAMBmQAJBjAHCaQABAoADAjQAHBoANBDQAKA4APAdQBBAsAZgcQAZgcAGhJQABgPACgOQAHhIAchGQATgvAcgtQAYAwALAsQALAwgEArQgEAsAJAUQAHAOANACIAHAAQAAgBABAAQARgRAchrQAMgwAFhAQABgTABgVIAAh0QgBgZgBgaIgCg3QgEh+AGhwAm7hIIAAAH");
	this.shape_65.setTransform(98.4,40.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#393536").ss(4,0,0,3).p("Aw/hfQBfgOBVg5QASgKAMAKIAAAAIAKANQABACABACQAJAYACAyQAFB0AMBfQALBfAUBmQAgCABEg8QAfgbAQgpQALgfACgmIAAgtQABgNACgNQAGhVAAhPQgChYAfhrIAgAAQAcAvABAvQABgPALgbQAPgqgHgKIAuAAQAHArAnApQABAAABAAQBoAFAXgPQBGgvABgZIAAgCQABABABACQASAZABBVQABBXAIBzQAGBVAQBjIAMBGICpiDIAUA9QAVAxAUASQAeAbALg7IAFgjQAHg5AIhcQAwBkAmAxIARjCQAKhsAUh9QA4A8AZgeIANlLQBKAfAHglQgCAMACAVQAAALACAPQADAfAHArIAMBmQAJBjAHCaQABAoADAjQAHBoANBDQAKA4APAdQBBAsAZgcQAZgcAGhJQABgPACgOQAHhIAchGQATgvAcgtQAYAwALAsQALAwgEArQgEAsAJAUQAHAOANACIAHAAQAAgBABAAQARgRAchrQAMgwAFhAQABgTABgVIAAh0QgBgZgBgaIgCg3QgEh+AGhwQABABABACQA9BOBLBEQBIBBABAXAojhIIAAAH");
	this.shape_66.setTransform(108.8,40.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#393536").ss(4,0,0,3).p("AyohfQBfgOBVg5QASgKAMAKIAAAAIAKANQABACABACQAJAYACAyQAFB0AMBfQALBfAUBmQAgCABEg8QAfgbAQgpQALgfACgmIAAgtQABgNACgNQAGhVAAhPQgChYAfhrIAgAAQAcAvABAvQABgPALgbQAPgqgHgKIAuAAQAHArAnApQABAAABAAQBoAFAXgPQBGgvABgZIAAgCQABABABACQASAZABBVQABBXAIBzQAGBVAQBjIAMBGICpiDIAWA9QAVAxAUASQAeAbALg7IADgjQAHg5AIhcQAwBkAmAxIARjCQAKhsAUh9QA4A8AZgeIANlLQBKAfAHglQgCAMACAVQAAALACAPQADAfAHArIAMBmQAJBjAHCaQABAoADAjQAHBoANBDQAKA4APAdQBBAsAZgcQAZgcAGhJQABgPACgOQAHhIAchGQATgvAcgtQAYAwALAsQALAwgEArQgEAsAJAUQAHAOANACIAHAAQAAgBABAAQARgRAchrQAMgwAFhAQABgTABgVIAAh0QgBgZgBgaIgCg3QgEh+AGhwQABABABACQA9BOBLBEQBIBBABAXIAAACQABAFABAGQAOBEAbA1QAdA4Akg4QAjg6AigBQAcgDAFAXAqMhIIAAAH");
	this.shape_67.setTransform(119.3,40.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#393536").ss(4,0,0,3).p("Ay/hfQBfgOBVg5QASgKAMAKIAAAAIAKANQABACABACQAJAYACAyQAFB0AMBfQALBfAUBmQAgCABEg8QAfgbAQgpQALgfACgmIAAgtQABgNACgNQAGhVAAhPQgChYAfhrIAgAAQAcAvABAvQABgPALgbQAPgqgHgKIAuAAQAHArAnApQABAAABAAQBoAFAXgPQBGgvABgZIAAgCQABABABACQASAZABBVQABBXAIBzQAGBVAQBjIAMBGICpiDIAWA9QAVAxAUASQAeAbALg7IAFgjQAHg5AIhcQAuBkAmAxIARjCQAKhsAUh9QA4A8AZgeIANlLQBKAfAHglQgCAMACAVQAAALACAPQADAfAHArIAMBmQAJBjAHCaQABAoADAjQAHBoANBDQAKA4APAdQBBAsAZgcQAZgcAGhJQABgPACgOQAHhIAchGQATgvAcgtQAYAwALAsQALAwgEArQgEAsAJAUQAHAOANACIAHAAQAAgBABAAQARgRAchrQAMgwAFhAQABgTABgVIAAh0QgBgZgBgaIgCg3QgEh+AGhwQABABABACQA9BOBLBEQBIBBABAXIAAACQABAFABAGQAOBEAbA1QAdA4Akg4QAjg6AigBQAhgDABAeQABAGABAFQAYCDASBeAqjhIIAAAH");
	this.shape_68.setTransform(121.6,40.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#393536").ss(4,0,0,3).p("Azch6QBfgOBUg5QASgKANAKIAAAAIAJANQABACABACQAKAYACAyQAEB0AMBfQALBfAUBmQAhCABDg8QAfgbAQgpQAMgfACgmIAAgtQABgNABgNQAHhVgBhPQgBhYAehrIAgAAQAcAvACAvQABgPAKgbQAQgqgIgKIAuAAQAIArAnApQABAAABAAQBoAFAWgPQBHgvAAgZIAAgCQABABABACQASAZACBVQABBXAIBzQAFBVAQBjIANBGICoiDIAXA9QAVAxAUASQAeAbAKg7IAFgjQAIg5AIhcQAtBkAmAxIARjCQAKhsAVh9QA4A8AYgeIANlLQBLAfAGglQgCAMACAVQABALABAPQAEAfAHArIALBmQAJBjAHCaQACAoACAjQAHBoANBDQALA4APAdQBAAsAZgcQAZgcAHhJQAAgPACgOQAIhIAchGQATgvAcgtQAXAwALAsQALAwgDArQgEAsAJAUQAGAOAOACIAGAAQABgBABAAQAQgRAchrQAMgwAGhAQABgTABgVIAAh0QgBgZgBgaIgCg3QgEh+AGhwQABABABACQA9BOBKBEQBIBBABAXIAAACQABAFACAGQAOBEAbA1QAcA6Alg6QAjg6AhgBQAhgDABAeQABAGABAFQAvD6AXBwIAeCXQABgEABgDArAhjIAAAH");
	this.shape_69.setTransform(124.6,43.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#393536").ss(4,0,0,3).p("Az2h6QBfgOBVg5QASgKAMAKIAAAAIAKANQABACABACQAJAYACAyQAFB0AMBfQALBfAUBmQAgCABEg8QAfgbAQgpQALgfACgmIAAgtQABgNACgNQAGhVAAhPQgChYAfhrIAgAAQAcAvABAvQABgPALgbQAPgqgHgKIAuAAQAHArAnApQABAAABAAQBoAFAXgPQBGgvABgZIAAgCQABABABACQASAZABBVQABBXAIBzQAGBVAQBjIAMBGICpiDIAWA9QAVAxAUASQAeAbALg7IAFgjQAHg5AIhcQAwBkAkAxIARjCQAKhsAUh9QA4A8AZgeIANlLQBKAfAHglQgCAMACAVQAAALACAPQADAfAHArIAMBmQAJBjAHCaQABAoADAjQAHBoANBDQAKA4APAdQBBAsAZgcQAZgcAGhJQABgPACgOQAHhIAchGQATgvAcgtQAYAwALAsQALAwgEArQgEAsAJAUQAHAOANACIAHAAQAAgBABAAQARgRAchrQAMgwAFhAQABgTABgVIAAh0QgBgZgBgaIgCg3QgEh+AGhwQABABABACQA9BOBLBEQBIBBABAXIAAACQABAFABAGQAOBEAbA1QAdA6Akg6QAjg6AigBQAhgDABAeQABAGABAFQAuD6AXBwIAeCXQATg6AMhEQAFg8ATgtArahjIAAAH");
	this.shape_70.setTransform(127.1,43.3);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#393536").ss(4,0,0,3).p("A0kh6QBfgOBVg5QASgKAMAKIAAAAIAKANQABACABACQAJAYACAyQAFB0AMBfQALBfAUBmQAgCABEg8QAfgbAQgpQALgfACgmIAAgtQABgNACgNQAGhVAAhPQgChYAfhrIAgAAQAcAvABAvQABgPALgbQAPgqgHgKIAuAAQAHArAnApQABAAABAAQBoAFAXgPQBGgvABgZIAAgCQABABABACQASAZABBVQABBXAIBzQAGBVAQBjIAMBGICpiDIAWA9QAVAxAUASQAeAbALg7IAFgjQAHg5AIhcQAwBkAmAxIARjCQAIhsAUh9QA4A8AZgeIANlLQBKAfAHglQgCAMACAVQAAALACAPQADAfAHArIAMBmQAJBjAHCaQABAoADAjQAHBoANBDQAKA4APAdQBBAsAZgcQAZgcAGhJQABgPACgOQAHhIAchGQATgvAcgtQAYAwALAsQALAwgEArQgEAsAJAUQAHAOANACIAHAAQAAgBABAAQARgRAchrQAMgwAFhAQABgTABgVIAAh0QgBgZgBgaIgCg3QgEh+AGhwQABABABACQA9BOBLBEQBIBBABAXIAAACQABAFABAGQAOBEAbA1QAdA6Akg6QAjg6AigBQAhgDABAeQABAGABAFQAuD6AXBwIAeCXQATg6AMhEQAFg8ATgtQAoA0AZA1QAUAjAFAVAsIhjIAAAH");
	this.shape_71.setTransform(131.7,43.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#393536").ss(4,0,0,3).p("A0kh6QBfgOBVg5QASgKAMAKIAAAAIAKANQABACABACQAJAYACAyQAFB0AMBfQALBfAUBmQAgCABEg8QAfgbAQgpQALgfACgmIAAgtQABgNACgNQAGhVAAhPQgChYAfhrIAgAAQAcAvABAvQABgPALgbQAPgqgHgKIAuAAQAHArAnApQABAAABAAQBoAFAXgPQBGgvABgZIAAgCQABABABACQASAZABBVQABBXAIBzQAGBVAQBjIAMBGICpiDIAWA9QAVAxAUASQAeAbALg7IAFgjQAHg5AIhcQAwBkAmAxIARjCQAIhsAUh9QA4A8AZgeIANlLQBKAfAHglQgCAMACAVQAAALACAPQADAfAHArIAMBmQAJBjAHCaQABAoADAjQAHBoANBDQAKA4APAdQBBAsAZgcQAZgcAGhJQABgPACgOQAHhIAchGQATgvAcgtQAYAwALAsQALAwgEArQgEAsAJAUQAHAOANACIAHAAQAAgBABAAQARgRAchrQAMgwAFhAQABgTABgVIAAh0QgBgZgBgaIgCg3QgEh+AGhwQABABABACQA9BOBLBEQBIBBABAXIAAACQABAFABAGQAOBEAbA1QAdA6Akg6QAjg6AigBQAhgDABAeQABAGABAFQAuD6AXBwIAeCXQATg6AMhEQAFg8ATgtQAoA0AZA1QAUAjAFAVIAAjkAsIhjIAAAH");
	this.shape_72.setTransform(131.7,43.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#393536").ss(4,0,0,3).p("A0kh6QBfgOBVg5QASgKAMAKIAAAAIAKANQABACABACQAJAYACAyQAFB0AMBfQALBfAUBmQAgCABEg8QAfgbAQgpQALgfACgmIAAgtQABgNACgNQAGhVAAhPQgChYAfhrIAgAAQAcAvABAvQABgPALgbQAPgqgHgKIAuAAQAHArAnApQABAAABAAQBoAFAXgPQBGgvABgZIAAgCQABABABACQASAZABBVQABBXAIBzQAGBVAQBjIAMBGICpiDIAWA9QAVAxAUASQAeAbALg7IAFgjQAHg5AIhcQAwBkAmAxIARjCQAIhsAUh9QA4A8AZgeIANlLQBKAfAHglQgCAMACAVQAAALACAPQADAfAHArIAMBmQAJBjAHCaQABAoADAjQAHBoANBDQAKA4APAdQBBAsAZgcQAZgcAGhJQABgPACgOQAHhIAchGQATgvAcgtQAYAwALAsQALAwgEArQgEAsAJAUQAHAOANACIAHAAQAAgBABAAQARgRAchrQAMgwAFhAQABgTABgVIAAh0QgBgZgBgaIgCg3QgEh+AGhwQABABABACQA9BOBLBEQBIBBABAXIAAACQABAFABAGQAOBEAbA1QAdA6Akg6QAjg6AigBQAhgDABAeQABAGABAFQAuD6AXBwIAeCXQATg6AMhEQAFg8ATgtQAoA0AZA1QAUAjAFAVIAAmUAsIhjIAAAH");
	this.shape_73.setTransform(131.7,43.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#393536").ss(4,0,0,3).p("A2Ch6QBfgOBVg5QASgKAMAKIAAAAIAKANQABACABACQAJAYACAyQAFB0AMBfQALBfAUBmQAgCABEg8QAfgbAQgpQALgfACgmIAAgtQABgNACgNQAGhVAAhPQgChYAfhrIAgAAQAcAvABAvQABgPALgbQAPgqgHgKIAuAAQAHArAnApQABAAABAAQBoAFAXgPQBGgvABgZIAAgCQABABABACQASAZABBVQABBXAIBzQAGBVAQBjIAMBGICpiDIAWA9QAVAxAUASQAeAbALg7IAFgjQAHg5AIhcQAwBkAmAxIARjCQAKhsAUh9QA4A8AXgeIANlLQBKAfAHglQgCAMACAVQAAALACAPQADAfAHArIAMBmQAJBjAHCaQABAoADAjQAHBoANBDQAKA4APAdQBBAsAZgcQAZgcAGhJQABgPACgOQAHhIAchGQATgvAcgtQAYAwALAsQALAwgEArQgEAsAJAUQAHAOANACIAHAAQAAgBABAAQARgRAchrQAMgwAFhAQABgTABgVIAAh0QgBgZgBgaIgCg3QgEh+AGhwQABABABACQA9BOBLBEQBIBBABAXIAAACQABAFABAGQAOBEAbA1QAdA6Akg6QAjg6AigBQAhgDABAeQABAGABAFQAuD6AXBwIAeCXQATg6AMhEQAFg8ATgtQAoA0AZA1QAUAjAFAVIAAmUQAzBeAoBDQAnBCBFAmAtmhjIAAAH");
	this.shape_74.setTransform(141.1,43.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_40}]}).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,23.4,19.4,7.6);


(lib.interference = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// Layer 1
	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#393536").ss(4,2,1).p("AgvAJQAIgDAogDQAJAAAQgDQALgCAKgE");
	this.shape_75.setTransform(4.9,30.4);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#393536").ss(4,2,1).p("AhxAYQAIgDAqgDQAJAAAQgDQASgGANgIQAQgLApgKQAjgIANAAQADAAAKAI");
	this.shape_76.setTransform(11.5,28.9);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#393536").ss(4,2,1).p("AijgGQAIgDAqgDQAJAAAQgDQATgGANgIQASgNAngKQAigIAOAAQADAAAWATIAgAeQAnAkAQAc");
	this.shape_77.setTransform(16.4,32.1);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#393536").ss(4,2,1).p("AjagNQAIgDAqgDQAJAAAQgDQASgGANgIQASgNApgKQAjgIANAAQAEAAAUATIAfAeQA5A1AIAhIBcAAQAFgFAEgF");
	this.shape_78.setTransform(22,32.8);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#393536").ss(4,2,1).p("AkUgNQAIgDAqgDQAJAAAQgDQATgGANgIQASgNApgKQAigIAOAAQADAAAWATIAgAeQA3A1AIAhIBbAAQAcgfALgJQAWgVATAAQAJAAAjAh");
	this.shape_79.setTransform(27.7,32.8);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#393536").ss(4,2,1).p("AlBgNQAIgDAqgDQAJAAAQgDQATgGANgIQASgNApgKQAigIAOAAQADAAAWATIAgAeQA3A1AIAhIBbAAQAcgfALgJQAWgVATAAQAMAAA9A9QASgGAMgTIAXgrQAHABAGAB");
	this.shape_80.setTransform(32.2,32.8);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#393536").ss(4,2,1).p("Al4gNQAIgDAqgDQAJAAAQgDQATgGANgIQASgNApgKQAigIAOAAQADAAAWATIAgAeQA5A1AIAhIBZAAQAcgfALgJQAWgVATAAQAMAAA9A9QASgGAMgTIAXgrQBOARAtAJ");
	this.shape_81.setTransform(37.7,32.8);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#393536").ss(4,2,1).p("AmtgNQAIgDAqgDQAJAAAQgDQATgGANgIQASgNApgKQAigIAOAAQADAAAWATIAgAeQA5A1AIAhIBbAAQAagfALgJQAWgVATAAQAMAAA9A9QASgGAMgTIAXgrQCuAmAJAAQAbAAACgmIACgWQACgfAFgGIAMAA");
	this.shape_82.setTransform(43,32.8);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#393536").ss(4,2,1).p("AnpgNQAIgDAqgDQAJAAAQgDQATgGANgIQASgNApgKQAigIAOAAQADAAAWATIAgAeQA5A1AIAhIBbAAQAcgfALgJQAWgVARAAQAMAAA9A9QASgGAMgTIAXgrQCuAmAJAAQAbAAACgmIACgWQACgfAFgGIARAAIArAAIAAAeIBIAA");
	this.shape_83.setTransform(49,32.8);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#393536").ss(4,2,1).p("AohgJQAIgCAqgDQAJgBAQgDQATgFANgJQASgNApgJQAigJAOABQADgBAWAUIAgAdQA5A2AIAhIBbAAQAcggALgJQAWgUATAAQAMAAA7A9QASgHAMgTIAXgrQCuAmAJAAQAbAAACgmIACgWQACgeAFgHIARAAIArAAIAAAfIBUAAQA3gqArgE");
	this.shape_84.setTransform(54.6,32.3);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#393536").ss(4,2,1).p("ApbBTQAIgDAqgDQAJAAAQgDQATgGANgIQASgNApgKQAigIAOAAQADAAAWATIAgAeQA5A3AIAhIBbAAQAcgfALgJQAWgVATAAQAMAAA9A9QASgGAKgTIAXgrQCuAmAJAAQAbAAACgmIACgYQACgfAFgGIARAAIArAAIAAAeIBUAAQA8guAuAAIABAAQAYAAAMAQQAPASAwAFIgBigQACglAFgY");
	this.shape_85.setTransform(60.4,23);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#393536").ss(4,2,1).p("Ap8BjQAIgCAqgDQAJgBAQgDQATgFANgJQASgNApgJQAigJAOABQADgBAWAUIAgAdQA5A4AIAhIBbAAQAcggALgJQAWgUATAAQAMAAA9A9QASgHAMgTIAXgrQCsAmAJAAQAbAAACgmIACgYQACgeAFgHIARAAIArAAIAAAfIBUAAQA8guAuAAIABAAQAYAAAMAQQAPARAwAFIgBigQADg+ANgcIAAgHQAQAhAFAvIAGBOQALAXAOAQ");
	this.shape_86.setTransform(63.7,21.4);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#393536").ss(4,2,1).p("AquBjQAIgCAqgDQAJgBAQgDQATgFANgJQASgNApgJQAigJAOABQADgBAWAUIAgAdQA5A4AIAhIBbAAQAcggALgJQAWgUATAAQAMAAA9A9QASgHAMgTIAXgrQCsAmAJAAQAbAAACgmIACgYQACgeAFgHIARAAIArAAIAAAfIBUAAQA8guAuAAIABAAQAYAAAMAQQAPARAwAFIgBigQADg+ANgcIAAgHQAQAhAFAvIAGBOQAQAgAYAXQANANAQAUQAJALAJAOIABABIABgBQAegdAKhgIADgt");
	this.shape_87.setTransform(68.7,21.4);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#393536").ss(4,2,1).p("AquBjQAIgCAqgDQAJgBAQgDQATgFANgJQASgNApgJQAigJAOABQADgBAWAUIAgAdQA5A4AIAhIBbAAQAcggALgJQAWgUATAAQAMAAA9A9QASgHAMgTIAXgrQCsAmAJAAQAbAAACgmIACgYQACgeAFgHIARAAIArAAIAAAfIBUAAQA8guAuAAIABAAQAYAAAMAQQAPARAwAFIgBigQADg+ANgcIAAgHQAQAhAFAvIAGBOQAQAgAYAXQANANAQAUQAJALAJAOIABABIABgBQAegdAKhgIADgxQACgqAAgs");
	this.shape_88.setTransform(68.7,21.4);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#393536").ss(4,2,1).p("AsFB1QAIgCAqgDQAJgBAQgDQATgFANgJQASgNApgJQAigJAOABQADgBAWAUIAgAdQA5A4AIAhIBbAAQAcggALgJQAWgUATAAQAMAAA9A9QASgHAMgTIAXgrQCsAmAJAAQAbAAACgmIACgYQACgeAFgHIARAAIArAAIAAAfIBUAAQA8guAuAAIABAAQAYAAAMAQQAPARAwAFIgBigQADg+ANgcIAAgHQAQAhAFAvIAGBOQAQAgAYAXQANANAQAUQAJALAJAOIABABIABgBQAegdAKhgIADgxQADg2gCg6QAPAHAyAAQAvAAAtgSIALgF");
	this.shape_89.setTransform(77.4,19.5);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#393536").ss(4,2,1).p("AsIByQAIgCAqgDQAJgBAQgDQASgFANgJQASgNApgJQAjgJANABQAEgBAWAUIAfAdQA5A4AIAhIBcAAQAcggAKgJQAWgUAUAAQALAAA9A9QATgHAMgTIAXgrQCrAmAKAAQAbAAACgmIABgYQADgeAFgHIARAAIArAAIAAAfIBUAAQA7guAvAAIAAAAQAZAAAMAQQAOARAwAFIAAigQACg+AOgcIAAgHQAPAhAFAvIAHBOQAPAgAYAXQANANAQAUQAJALAJAOIABABIABgBQAfgdAJhgIAEgxQACg2gBg6QAPAHAyAAQAvAAAtgSIALgFQABAPgBBXQgBAOABAMQABAiABAPIAFAbQABAFABAE");
	this.shape_90.setTransform(77.8,19.8);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#393536").ss(4,2,1).p("As7ByQAIgCAqgDQAJgBAQgDQASgFANgJQASgNApgJQAjgJANABQAEgBAWAUIAfAdQA5A4AIAhIBcAAQAcggAKgJQAWgUAUAAQALAAA9A9QATgHAMgTIAXgrQCtAmAKAAQAZAAACgmIABgYQADgeAFgHIARAAIArAAIAAAfIBUAAQA7guAvAAIAAAAQAZAAAMAQQAOARAwAFIAAigQACg+AOgcIAAgHQAPAhAFAvIAHBOQAPAgAYAXQANANAQAUQAJALAJAOIABABIABgBQAfgdAJhgIAEgxQACg2gBg6QAPAHAyAAQAvAAAtgSIALgFQABAPgBBXQgBAOABAMQABAiABAPIAFAbQANA/AsAjQAUAQAZAK");
	this.shape_91.setTransform(82.9,19.8);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#393536").ss(4,2,1).p("AtkByQAIgCAqgDQAJgBAQgDQASgFANgJQASgNApgJQAjgJANABQAEgBAWAUIAfAdQA5A4AIAhIBcAAQAcggAKgJQAWgUAUAAQALAAA9A9QATgHAMgTIAXgrQCtAmAKAAQAbAAACgmIABgYQADgeAFgHIAPAAIArAAIAAAfIBUAAQA7guAvAAIAAAAQAZAAAMAQQAOARAwAFIAAigQACg+AOgcIAAgHQAPAhAFAvIAHBOQAPAgAYAXQANANAQAUQAJALAJAOIABABIABgBQAfgdAJhgIAEgxQACg2gBg6QAPAHAyAAQAvAAAtgSIALgFQABAPgBBXQgBAOABAMQABAiABAPIAFAbQANA/AsAjQAmAeA6AKQAEgKACgeQABgYgBglQgBgpAFgXQAEgVAJgLIAGgG");
	this.shape_92.setTransform(87,19.8);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#393536").ss(4,2,1).p("AuHByQAIgCAqgDQAJgBAQgDQASgFANgJQASgNApgJQAjgJANABQAEgBAWAUIAfAdQA5A4AIAhIBcAAQAcggAKgJQAWgUAUAAQALAAA9A9QATgHAMgTIAXgrQCtAmAKAAQAbAAACgmIABgYQADgeAFgHIARAAIApAAIAAAfIBUAAQA7guAvAAIAAAAQAZAAAMAQQAOARAwAFIAAigQACg+AOgcIAAgHQAPAhAFAvIAHBOQAPAgAYAXQANANAQAUQAJALAJAOIABABIABgBQAfgdAJhgIAEgxQACg2gBg6QAPAHAyAAQAvAAAtgSIALgFQABAPgBBXQgBAOABAMQABAiABAPIAFAbQANA/AsAjQAmAeA6AKQAEgKACgeQABgYgBglQgBgpAFgXQAEgVAJgLIA8hBQAJgKAHgJ");
	this.shape_93.setTransform(90.5,19.8);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#393536").ss(4,2,1).p("AuSByQAIgCAqgDQAJgBAQgDQASgFANgJQASgNApgJQAjgJANABQAEgBAWAUIAfAdQA5A4AIAhIBcAAQAcggAKgJQAWgUAUAAQALAAA9A9QATgHAMgTIAXgrQCtAmAKAAQAbAAACgmIABgYQADgeAFgHIARAAIArAAIAAAfIBSAAQA7guAvAAIAAAAQAZAAAMAQQAOARAwAFIAAigQACg+AOgcIAAgHQAPAhAFAvIAHBOQAPAgAYAXQANANAQAUQAJALAJAOIABABIABgBQAfgdAJhgIAEgxQACg2gBg6QAPAHAyAAQAvAAAtgSIALgFQABAPgBBXQgBAOABAMQABAiABAPIAFAbQANA/AsAjQAmAeA6AKQAEgKACgeQABgYgBglQgBgpAFgXQAEgVAJgLIA8hBQAugyAAgWIAADM");
	this.shape_94.setTransform(91.6,19.8);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#393536").ss(4,2,1).p("AvAByQAIgCAqgDQAJgBAQgDQASgFANgJQASgNApgJQAjgJANABQAEgBAWAUIAfAdQA5A4AIAhIBcAAQAcggAKgJQAWgUAUAAQALAAA9A9QATgHAMgTIAXgrQCtAmAKAAQAbAAACgmIABgYQADgeAFgHIARAAIArAAIAAAfIBSAAQA7guAvAAIAAAAQAZAAAMAQQAOARAwAFIAAigQACg+AOgcIAAgHQAPAhAFAvIAHBOQAPAgAYAXQANANAQAUQAJALAJAOIABABIABgBQAfgdAJhgIAEgxQACg2gBg6QAPAHAyAAQAvAAAtgSIALgFQABAPgBBXQgBAOABAMQABAiABAPIAFAbQANA/AsAjQAmAeA6AKQAEgKACgeQABgYgBglQgBgpAFgXQAEgVAJgLIA8hBQAugyAAgWIAADMIAnAAQgCgQAAgTQgBgXADgaQAHhJAngb");
	this.shape_95.setTransform(96.2,19.8);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#393536").ss(4,2,1).p("Av6ByQAIgCAqgDQAJgBAQgDQASgFANgJQASgNApgJQAjgJANABQAEgBAWAUIAfAdQA5A4AIAhIBcAAQAcggAKgJQAWgUAUAAQALAAA9A9QATgHAMgTIAXgrQCtAmAKAAQAbAAACgmIABgYQADgeAFgHIARAAIArAAIAAAfIBUAAQA5guAvAAIAAAAQAZAAAMAQQAOARAwAFIAAigQACg+AOgcIAAgHQAPAhAFAvIAHBOQAPAgAYAXQANANAQAUQAJALAJAOIABABIABgBQAfgdAJhgIAEgxQACg2gBg6QAPAHAyAAQAvAAAtgSIALgFQABAPgBBXQgBAOABAMQABAiABAPIAFAbQANA/AsAjQAmAeA6AKQAEgKACgeQABgYgBglQgBgpAFgXQAEgVAJgLIA8hBQAugyAAgWIAADMIAnAAQgCgQAAgTQgBgXADgaQAIhQAtgZQALAdAdAfQAMAMALAKQAQAOAdAZ");
	this.shape_96.setTransform(102,19.8);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#393536").ss(4,2,1).p("AwxByQAIgCAqgDQAJgBAQgDQASgFANgJQASgNApgJQAjgJANABQAEgBAWAUIAfAdQA5A4AIAhIBcAAQAcggAKgJQAWgUAUAAQALAAA9A9QATgHAMgTIAXgrQCtAmAKAAQAbAAACgmIABgYQADgeAFgHIARAAIArAAIAAAfIBUAAQA7guAtAAIAAAAQAZAAAMAQQAOARAwAFIAAigQACg+AOgcIAAgHQAPAhAFAvIAHBOQAPAgAYAXQANANAQAUQAJALAJAOIABABIABgBQAfgdAJhgIAEgxQACg2gBg6QAPAHAyAAQAvAAAtgSIALgFQABAPgBBXQgBAOABAMQABAiABAPIAFAbQANA/AsAjQAmAeA6AKQAEgKACgeQABgYgBglQgBgpAFgXQAEgVAJgLIA8hBQAugyAAgWIAADMIAnAAQgCgQAAgTQgBgXADgaQAIhQAtgZQALAdAdAfQAMAMALAKQAYAWA7AyIADACQAwArASAuQAEAKADAM");
	this.shape_97.setTransform(107.5,19.8);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#393536").ss(4,2,1).p("AxTBuQAIgDAqgDQAJAAAQgDQASgGANgIQASgNApgKQAjgIANAAQAEAAAWATIAfAeQA5A3AIAhIBcAAQAcgfAKgJQAWgVAUAAQALAAA9A9QATgGAMgTIAXgrQCtAmAKAAQAbAAACgmIABgYQADgfAFgGIARAAIArAAIAAAeIBUAAQA7guAvAAIAAAAQAXAAAMAQQAOASAwAFIAAigQACg+AOgcIAAgIQAPAhAFAvIAHBPQAPAfAYAXQANANAQAUQAJAMAJAOIABABIABgBQAfgeAJhgIAEgwQACg2gBg7QAPAIAyAAQAvAAAtgTIALgEQABAOgBBYQgBANABANQABAhABAPIAFAcQANA+AsAkQAmAeA6AJQAEgJACgeQABgZgBglQgBgnAFgZQAEgVAJgKIA8hCQAugyAAgWIAADMIAnAAQgCgPAAgUQgBgXADgZQAIhQAtgZQALAdAdAeQAMANALAKQAYAWA7AxIADADQAwArASAuQAGANAEAVQAJAvgNA1QAUAFAWgVQANgNAMgF");
	this.shape_98.setTransform(110.9,20.3);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#393536").ss(4,2,1).p("AyZBrQAIgDAqgDQAJgBAQgDQASgFANgJQASgNApgJQAjgJANABQAEgBAWAUIAfAeQA5A3AIAhIBcAAQAcgfAKgJQAWgVAUAAQALAAA9A9QATgGAMgTIAXgsQCtAnAKAAQAbAAACgnIABgYQADgeAFgHIARAAIArAAIAAAfIBUAAQA7guAvAAIAAAAQAZAAAMAQQAOARAuAFIAAigQACg+AOgcIAAgHQAPAhAFAvIAHBOQAPAgAYAXQANANAQAUQAJALAJAOIABABIABgBQAfgdAJhgIAEgxQACg2gBg6QAPAHAyAAQAvAAAtgSIALgFQABAPgBBXQgBAOABAMQABAiABAPIAFAcQANA+AsAjQAmAeA6AKQAEgKACgeQABgYgBglQgBgnAFgZQAEgVAJgLIA8hBQAugyAAgWIAADMIAnAAQgCgQAAgTQgBgXADgaQAIhQAtgZQALAdAdAfQAMAMALAKQAYAWA7AyIADACQAwArASAuQAGAOAEAUQAJAwgNA1QAUAEAWgUQAWgXAUABQAsABACgBQAagEAUgTIAWBFQAFgBAEgC");
	this.shape_99.setTransform(117.9,20.6);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#393536").ss(4,2,1).p("AzFBrQAIgDAqgDQAJgBAQgDQATgFANgJQASgNApgJQAigJAOABQADgBAWAUIAgAeQA5A3AIAhIBbAAQAcgfALgJQAWgVATAAQAMAAA9A9QASgGAMgTIAXgsQCuAnAJAAQAbAAACgnIACgYQACgeAFgHIARAAIArAAIAAAfIBUAAQA8guAuAAIABAAQAYAAAMAQQAPARAwAFIgBigQADg+ANgcIAAgHQAOAhAFAvIAGBOQAQAgAYAXQANANAQAUQAJALAJAOIABABIABgBQAegdAKhgIADgxQADg2gCg6QAPAHAyAAQAvAAAtgSIALgFQABAPgBBXQAAAOAAAMQABAiACAPIAEAcQANA+AtAjQAlAeA6AKQAFgKABgeQABgYgBglQAAgnAFgZQADgVAJgLIA8hBQAugyABgWIAADMIAmAAQgCgQAAgTQAAgXACgaQAIhQAtgZQAMAdAdAfQALAMAMAKQAYAWA7AyIADACQAwArASAuQAFAOAFAUQAIAwgMA1QATAEAWgUQAXgXAUABQArABACgBQAagEAUgTIAXBFQAdgGADgrQAEgmAHgWQAFgMAFgKQAKgPAega");
	this.shape_100.setTransform(122.2,20.6);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#393536").ss(4,2,1).p("AzoBrQAIgDAqgDQAJgBAQgDQASgFANgJQASgNApgJQAjgJANABQAEgBAWAUIAfAeQA5A3AIAhIBcAAQAcgfAKgJQAWgVAUAAQALAAA9A9QATgGAMgTIAXgsQCtAnAKAAQAbAAACgnIABgYQADgeAFgHIARAAIArAAIAAAfIBUAAQA7guAvAAIAAAAQAZAAAMAQQAOARAwAFIAAigQACg+AOgcIAAgHQAPAhAFAvIAHBOQANAgAYAXQANANAQAUQAJALAJAOIABABIABgBQAfgdAJhgIAEgxQACg2gBg6QAPAHAyAAQAvAAAtgSIALgFQABAPgBBXQgBAOABAMQABAiABAPIAFAcQANA+AsAjQAmAeA6AKQAEgKACgeQABgYgBglQgBgnAFgZQAEgVAJgLIA8hBQAugyAAgWIAADMIAnAAQgCgQAAgTQgBgXADgaQAIhQAtgZQALAdAdAfQAMAMALAKQAYAWA7AyIADACQAwArASAuQAGAOAEAUQAJAwgNA1QAUAEAWgUQAWgXAUABQAsABACgBQAagEAUgTIAWBFQAdgGAEgrQAEgmAHgWQAEgMAGgKQAKgPAggcQAZgbABgfQAAAgAPA0IALAnQAFATAAAFQAHACAJAD");
	this.shape_101.setTransform(125.8,20.6);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#393536").ss(4,2,1).p("A0hBrQAIgDAqgDQAJgBAQgDQATgFANgJQASgNApgJQAigJAOABQADgBAWAUIAgAeQA5A3AIAhIBbAAQAcgfALgJQAWgVATAAQAMAAA9A9QASgGAMgTIAXgsQCuAnAJAAQAbAAACgnIACgYQACgeAFgHIARAAIArAAIAAAfIBUAAQA8guAuAAIABAAQAYAAAMAQQAPARAwAFIgBigQADg+ANgcIAAgHQAQAhAFAvIAGBOQAQAgAYAXQANANAOAUQAJALAJAOIABABIABgBQAegdAKhgIADgxQADg2gCg6QAPAHAyAAQAvAAAtgSIALgFQABAPgBBXQAAAOAAAMQABAiACAPIAEAcQANA+AtAjQAlAeA6AKQAFgKABgeQABgYgBglQAAgnAFgZQADgVAJgLIA8hBQAugyABgWIAADMIAmAAQgCgQAAgTQAAgXACgaQAIhQAtgZQAMAdAdAfQALAMAMAKQAYAWA7AyIADACQAwArASAuQAFAOAFAUQAIAwgMA1QATAEAWgUQAXgXAUABQArABACgBQAagEAUgTIAXBFQAdgGADgrQAEgmAHgWQAFgMAFgKQAKgPAggcQAZgbACgfQgBAgAQA0IALAnQAEATAAAFQAiAIArAWQAPAJAiAU");
	this.shape_102.setTransform(131.4,20.6);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#393536").ss(4,2,1).p("A1IBhQAIgDAqgDQAJAAAQgDQATgGANgIQASgNApgKQAigIAOAAQADAAAWATIAgAeQA5A3AIAhIBbAAQAcgfALgJQAWgVATAAQAMAAA9A9QASgGAMgTIAXgrQCuAmAJAAQAbAAACgmIACgYQACgfAFgGIARAAIArAAIAAAeIBUAAQA8guAuAAIABAAQAYAAAMAQQAPASAwAFIgBigQADg+ANgcIAAgIQAQAhAFAvIAGBPQAQAfAYAXQANANAQAUQAJAMAJAOIABABIABgBQAcgeAKhgIADgwQADg2gCg7QAPAIAyAAQAvAAAtgTIALgEQABAOgBBYQAAANAAANQABAhACAPIAEAeQANA8AtAkQAlAeA6AJQAFgJABgeQABgZgBglQAAgnAFgZQADgVAJgKIA8hCQAugyABgWIAADOIAmAAQgCgRAAgUQAAgXACgZQAIhQAtgZQAMAdAdAeQALANAMAKQAYAWA7AxIADADQAwArASAuQAFANAFAVQAIAvgMA1QATAFAWgVQAXgXAUABQArABACgBQAagDAUgUIAXBFQAdgGADgqQAEgnAHgVQAFgNAFgJQAKgQAggbQAZgaACggQgBAiAQAxIALAoQAEATAAAFQAiAHArAXQAUALA1AgQAdAQAbAJ");
	this.shape_103.setTransform(135.3,21.6);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#393536").ss(4,2,1).p("A2ABdQAIgDAqgDQAJAAAQgDQASgGANgIQASgNApgKQAjgIANAAQAEAAAWATIAfAeQA5A3AIAhIBcAAQAcgfAKgJQAWgVAUAAQALAAA9A9QATgGAMgTIAXgrQCtAmAKAAQAbAAACgmIABgYQADgfAFgGIARAAIArAAIAAAeIBUAAQA7guAvAAIAAAAQAZAAAMAQQAOASAwAFIAAigQACg+AOgcIAAgIQAPAhAFAvIAHBPQAPAfAYAXQANANAQAUQAJAMAJAOIABABIABgBQAfgeAJhgIAEgwQACg2gBg7QAPAIAwAAQAvAAAtgTIALgEQABAOgBBYQgBANABANQABAhABAPIAFAeQANA8AsAkQAmAeA6AJQAEgJACgeQABgZgBglQgBgnAFgZQAEgVAJgKIA8hCQAugyAAgWIAADOIAnAAQgCgRAAgUQgBgXADgZQAIhQAtgZQALAdAdAeQAMANALAKQAYAWA7AxIADADQAwArASAuQAGANAEAVQAJAvgNA1QAUAFAWgVQAWgXAUABQAsABACgBQAagDAUgUIAWBFQAdgGAEgqQAEgnAHgVQAEgNAGgJQAKgQAggbQAZgaABggQAAAiAPAxIALAoQAFATAAAFQAiAHAqAXQAUALA2AgQBcA0BOgS");
	this.shape_104.setTransform(141,22);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_75}]}).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,29.6,9.6,1.7);


(lib.Graph_moving_03 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Graph();
	this.instance.setTransform(189.7,100.7,1,1,0,0,0,189.7,100.7);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(14,0,328.8,173.3);


(lib.Graph_moving_02 = function() {
	this.initialize();

	// Layer 1
	this.instance_1 = new lib.Graph02();
	this.instance_1.setTransform(189.7,100.7,1,1,0,0,0,189.7,100.7);

	this.addChild(this.instance_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-3.6,0,346.5,150.8);


(lib.Graph_moving = function() {
	this.initialize();

	// Layer 1
	this.instance_2 = new lib.Graph01();
	this.instance_2.setTransform(189.7,100.7,1,1,0,0,0,189.7,100.7);

	this.addChild(this.instance_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.4,0,343.5,182.4);


(lib.animation01 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{},true);

	// txt05
	this.instance_3 = new lib.ID_txt05a();
	this.instance_3.setTransform(230.9,329.3,1,1,0,0,0,141.5,8.5);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(331).to({alpha:1},0).wait(45).to({alpha:0},0).wait(32));

	// txt04
	this.instance_4 = new lib.ID_txt05b();
	this.instance_4.setTransform(352.3,325.3,1,1,0,0,0,94.5,8.5);
	this.instance_4.alpha = 0;

	this.instance_5 = new lib.ID_txt04b();
	this.instance_5.setTransform(356,220.3,1,1,0,0,0,91,8.5);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5,p:{alpha:0}},{t:this.instance_4,p:{alpha:0}}]}).to({state:[{t:this.instance_5,p:{alpha:1}},{t:this.instance_4,p:{alpha:1}}]},406).wait(2));

	// txt04
	this.instance_6 = new lib.ID_txt04a();
	this.instance_6.setTransform(236.5,178.5,1,1,0,0,0,135,8.5);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(331).to({alpha:1},0).wait(45).to({alpha:0},0).wait(32));

/*	// signal with interference
	this.instance_7 = new lib.signal_w_interference("single",34);
	this.instance_7.setTransform(230.4,234.2,1,1,0,0,0,141,21.9);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(316).to({startPosition:34},0).to({alpha:1},15).wait(45).to({mode:"synched",loop:false},0).to({regY:22,scaleX:0.67,scaleY:0.67,x:351.9,y:258.8},30).wait(2));
*/
	// 4th graph
	this.instance_8 = new lib.Graph_moving_03();
	this.instance_8.setTransform(232.9,249.3,1,1,0,0,0,171.3,87.7);
	this.instance_8.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(316).to({alpha:1},15).wait(45).to({scaleX:0.67,scaleY:0.67,x:353.6,y:268.9},30).wait(2));

	// txt03b
	this.instance_9 = new lib.ID_txt03b();
	this.instance_9.setTransform(116.9,212.3,1,1,0,0,0,91,8.5);
	this.instance_9.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(305).to({alpha:1},0).wait(103));

	// txt03
	this.instance_10 = new lib.ID_txt03a();
	this.instance_10.setTransform(236.5,193.5,1,1,0,0,0,135,8.5);
	this.instance_10.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(209).to({alpha:1},0).wait(66).to({alpha:0},0).wait(133));

	// signal with interference
	this.instance_11 = new lib.signal_w_interference("synched",0,false);
	this.instance_11.setTransform(230.4,254.2,1,1,0,0,0,141,21.9);
	this.instance_11.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(209).to({alpha:1},0).wait(66).to({startPosition:34},0).to({regY:22,scaleX:0.67,scaleY:0.67,x:113.3,y:258.8},30).wait(103));

	// 3rd graph
	this.instance_12 = new lib.Graph_moving_02();
	this.instance_12.setTransform(232.9,269.3,1,1,0,0,0,171.3,87.7);
	this.instance_12.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(195).to({alpha:1},14).wait(66).to({mode:"synched",startPosition:0},0).to({regY:87.8,scaleX:0.67,scaleY:0.67,x:115,y:268.9},30).wait(103));

	// txt02b
	this.instance_13 = new lib.ID_txt02b();
	this.instance_13.setTransform(355.5,30,1,1,0,0,0,91,8.5);
	this.instance_13.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(195).to({alpha:1},0).wait(213));

	// txt02
	this.instance_14 = new lib.ID_txt02a();
	this.instance_14.setTransform(236.5,198.5,1,1,0,0,0,135,8.5);
	this.instance_14.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(104).to({alpha:1},0).wait(61).to({alpha:0},0).wait(243));

	// interference
	this.instance_15 = new lib.interference("synched",0,false);
	this.instance_15.setTransform(231.4,299.7,1,1,0,0,0,141,21.9);
	this.instance_15.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(104).to({alpha:1},0).wait(61).to({startPosition:29},0).to({regY:22,scaleX:0.67,scaleY:0.67,x:352.4,y:99.3},30).wait(213));

	// 2nd graph
	this.instance_16 = new lib.Graph_moving_02();
	this.instance_16.setTransform(232.9,269.3,1,1,0,0,0,171.3,87.7);
	this.instance_16.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(89).to({alpha:1},15).wait(61).to({scaleX:0.67,scaleY:0.67,x:353.5,y:78.9},30).wait(213));

	// txt02
	this.instance_17 = new lib.ID_txt01b();
	this.instance_17.setTransform(116.9,30,1,1,0,0,0,91,8.5);
	this.instance_17.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(89).to({alpha:1},0).wait(319));

	// txt01
	this.instance_18 = new lib.ID_txt01a();
	this.instance_18.setTransform(236.5,191.5,1,1,0,0,0,135,8.5);
	this.instance_18.alpha = 1;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(2).to({alpha:1},0).wait(57).to({alpha:0},0).wait(349));

	// digital signal
	this.instance_19 = new lib.signal01("synched",0,false);
	this.instance_19.setTransform(230.4,283.5,1,1,0,0,0,140,25);
	this.instance_19.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(3).to({alpha:1},0).wait(56).to({startPosition:28},0).to({regY:24.9,scaleX:0.67,scaleY:0.67,x:113.3,y:88.3},30).wait(319));

	// 1st graph
	this.instance_20 = new lib.Graph_moving();
	this.instance_20.setTransform(232.9,269.3,1,1,0,0,0,171.3,87.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(59).to({regY:87.8,scaleX:0.67,scaleY:0.67,x:115,y:78.9},30).wait(319));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(25.9,21.5,378.8,342.5);


(lib.Main = function() {
	this.initialize();

	// animation
	this.anim01 = new lib.animation01();

	this.addChild(this.anim01);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(25.9,21.5,378.8,342.5);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;