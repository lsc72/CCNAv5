loadScript("../../../common/scripts/swfobject.js", registerSWF);

function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}
(Animation = function(control,id){		
		var manifest = [
		{src:"images/_7_3_2_4.jpg", id:"_7_3_2_4"},
		{src:"images/blue.png", id:"blue"},
		{src:"images/computer.png", id:"computer"},
		{src:"images/computer_laptop.png", id:"computer_laptop"},
		{src:"images/envelope_closed_static.png", id:"envelope_closed_static"},
		{src:"images/greenbg.png", id:"greenbg"},
		{src:"images/orangearrow.png", id:"orangearrow"},
		{src:"images/printer.png", id:"printer"},
		{src:"images/redbg.png", id:"redbg"},
		{src:"images/Router.png", id:"Router"},
		{src:"images/Switch_workgroup.png", id:"Switch_workgroup"}
	];
		return manifest;	
});
