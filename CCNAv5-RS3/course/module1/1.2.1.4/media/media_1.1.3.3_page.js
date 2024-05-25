
function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

loadScript("../../../common/scripts/swfobject.js", registerSWF);



(slideViewDidLoad = function(sc,id){


	if(id == "1_canvas_div_1")
	{
		var div = document.getElementById("textBoxDiv_1");
		$("#textBoxDiv_1").append("<div id='ID_s1_pop01A'>"+getMediaText('ID_s1_pop01A')+"</div>");
		$("#textBoxDiv_1").append("<div id='arrow1'><img src='arrow3.png' /></div>");

	}
	if(id == "1_canvas_div_2")
	{
		var div = document.getElementById("textBoxDiv_2");
		$("#textBoxDiv_2").append("<div id='ID_s1_pop02A'>"+getMediaText('ID_s1_pop02A')+"</div>");
		$("#textBoxDiv_2").append("<div id='ID_s1_pop02B'>"+getMediaText('ID_s1_pop02B')+"</div>");
		$("#textBoxDiv_2").append("<div id='arrow2'><img src='arrow2.png' /></div>");

	}
	if(id == "1_canvas_div_3")
	{
		var div = document.getElementById("textBoxDiv_3");
		$("#textBoxDiv_3").append("<div id='ID_s1_pop03A'>"+getMediaText('ID_s1_pop03A')+"</div>");
		$("#textBoxDiv_3").append("<div id='arrow3'><img src='arrow3.png' /></div>");

	}
	if(id == "2_canvas_div_1")
	{
		var div = document.getElementById("textBoxDiv_4");
		$("#textBoxDiv_4").append("<div id='ID_s2_pop01'>"+getMediaText('ID_s2_pop01')+"</div>");
		$("#textBoxDiv_4").append("<div id='arrow4'><img src='arrow4.png' /></div>");

	}
	
	

});


