
function registerSWF(){
	swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}


loadScript("../../../common/scripts/swfobject.js", registerSWF);

(slideViewDidLoad = function(container,id){
	
	var btn = getCJSElement("BLUE_BUTTON",{x:179,y:350,width:105,height:21,size:12,id:"check",compId:"ID_send",
	callback:send_action});
	container.addChild(btn);
	
	
	$("#table_title").html(getMediaText("ID_header"))
	
	
	
	
var animation = { "env1" : [{"left" :167, 
  "top" : 18}
 ],
 "env2" : [{"left" : 163, 
  "top" : -44}
 ],
 "env3" : [{"left" : 115, 
  "top" : -102}
 ],
 "env4" : [{"left" : 51, 
  "top" : -132}
 ],
 "env5" : [{"left" : -27, 
  "top" : -132}
 ],
 "env6" : [{"left" : -97, 
  "top" : -102}
 ],
 "env7" : [{"left" : -146, 
  "top" : -44}
 ],
 "env8" : [{"left" : -159, 
  "top" : 17}
 ]
 };
 

 var animationreverse = { "env1" : [{"left" :-168, 
  "top" : -21}
 ],
 "env2" : [{"left" : -166, 
  "top" : 41}
 ],
 "env3" : [{"left" : -116, 
  "top" : 98.2}
 ],
 "env4" : [{"left" : -51, 
  "top" : 130}
 ],
 "env5" : [{"left" : 29, 
  "top" : 131}
 ],
 "env6" : [{"left" :100, 
  "top" : 99}
 ],
 "env7" : [{"left" : 151, 
  "top" : 41}
 ],
 "env8" : [{"left" :164, 
  "top" : -21}
 ]
 };
 
	
var numcount = 0;
var resetsys1,resetsys2,id1,id2;

	
$("#env9,#env1_1,#env2_2,#env3_3,#env4_4,#env5_5,#env6_6,#env7_7,#env8_8,#tick1,#tick2,#tick3,#tick4,#tick5,#tick6,#tick7,#tick8,#s1,#s2,#s3,#s4,#s5,#s6,#s7,#s8,#d1,#d2,#d3,#d4,#d5,#d6,#d7,#d8,#table_01,#tdborder_1,#tdborder_2,#tdborder_3,#tdborder_4,#tdborder_5,#tdborder_6,#tdborder_7,#tdborder_8,#ID_reset").css('opacity','0');


	$("#commonMediaText>div[id^=pre_]").click(function()
	{
	if(numcount==0)
		{	
		resetsys1= this.id;
		var source = this.id;
		source = source.split("_");
		$("#"+this.id).css("opacity","0");
		$("#s"+source[1]).css("opacity","1");
		$("#s"+source[1]).html(getMediaText("ID_source"));
		id1 =source[1];
		numcount++;
		}
	else if(numcount==1)
		{	
		resetsys2= this.id;
		var destination = this.id;
		destination = destination.split("_");
		$("#"+this.id).css("opacity","0");
		$("#d"+destination[1]).css("opacity","1");
		$("#d"+destination[1]).html(getMediaText("ID_dest"))
		id2 = destination[1];
		$("#tick"+id2).css("z-index","-1");
		numcount++;
		}
		
		 
	
	});
	
	function send_action()
	{
		
		$("#ID_send").css('opacity','0');
		var btn = getCJSElement("BLUE_BUTTON",{x:179,y:350,width:105,height:21,size:12,id:"reset",compId:"ID_reset",
	callback:reset_action});
	container.addChild(btn);
			
		if(numcount>1)
		{
		$("#env9>img").css({position:"relative",top:"0px",left:"0px"});
		$("div#tick"+id2+">img").css("z-index","-1");
		
		
		var a = $("#env"+id1+">img").length;
		
			if(a>2)
			{
			a = a-1;
			for(var i =0; i<a;i++)
			{
			$("#env"+id1+">img").remove();
			}	
			$("#env"+id1).html("<img id='env1_1' style='position:relative;' src='env1.png'>");
			}
		
		
		$("#env"+id1+"_"+id1).css("opacity","1");
		$("#env"+id1).css("opacity","1");
		$("#env"+id1).css("z-index","1");
		
		$("#env"+id1+">img").clone().insertAfter("#env"+id1+">img").attr("id",id1).css({position: 'absolute',left: '0px',top: '0px'});
		
		$("#env"+id1+">img:first-child").animate(
		{top:eval("(" + 'animation.env'+id1+'[0].top' + ")")+'px',left:eval("(" + 'animation.env'+id1+'[0].left' + ")")+'px'},1500,function(){
		$("#env"+id1+">img").css("z-index","1");
		
		$("#env"+id1+">img").css("opacity","0");
		
		$("#env"+id1+">img:last-child").css("opacity","0");
		$("#env"+id1+">img:first-child").css("opacity","0");
		
		$("#env"+id1).css("opacity","0");
		$("#env9").css("opacity","1");
		$("#env9>img").delay(1300);
		$("#table_01").css("opacity","1");
		$("#table_01").addClass("test");
		$("#txt"+id1).addClass("table_bg");
		$("#txt"+id2).addClass("table_bg");
		
		$("#txt"+id1).css("color","white");
		$("#txt"+id2).css("color","white");
		$("#tdborder_"+id1).css("opacity","1");
		$("#tdborder_"+id1).css("opacity","1");
		
		$("#tdborder_"+id1).fadeTo(10, 0.1).fadeTo(400, 1.0);
		$("#tdborder_"+id1).fadeTo(400, 0.1).fadeTo(400, 1.0);
		$("#tdborder_"+id1).fadeTo(400, 0).fadeTo(400, 0);
		
		
		$("#tdborder_"+id2).fadeTo(10, 0.1).fadeTo(400, 1.0);
		$("#tdborder_"+id2).fadeTo(400, 0.1).fadeTo(400, 1.0);
		$("#tdborder_"+id2).fadeTo(400, 0).fadeTo(400, 0);
		
		$("#tdborder_"+id1).css("opacity","0");
		$("#tdborder_"+id1).css("opacity","0");
		
		$("#txt"+id1).addClass("table_bg");
		$("#txt"+id2).addClass("table_bg");
		
		animation_reverse();
		
		}
		
		);
		
		}
		else
		{
		
		}				
			
	}
	
	
	function reset_action()
	{
		
	$("#ID_reset").css('opacity','0');
	var btn = getCJSElement("BLUE_BUTTON",{x:179,y:350,width:105,height:21,size:12,id:"check",compId:"ID_send",
	callback:send_action});
	container.addChild(btn);
	
	if( $("#env"+id1+">img:first-child").is(':animated') )
	 {
		$("#env"+id1+">img:first-child").stop();
		$("#env"+id1+">img:first-child").css({position:"relative",top:"0px",left:"0px"}) 
		$("#env"+id1+">img:first-child").css("opacity","0")
		$("#"+id1).remove()
	 }
	 else if($("#env9>img").is(':animated'))
	 {
		$("#env9>img").stop();
		$("#env9>img").css({position:"relative",top:"0px",left:"0px"})
		$("#tick"+id2).stop();
		$("#tick"+id1).css("z-index","-1");
		$("#tick"+id1).css("opacity","0");
	 }
	
	 
	$("#env"+id1+"_"+id1).css({position:"relative",top:"0px",left:"0px"});
	$("#env"+id1+"_"+id1).css("opacity","0");
	$("#env"+id1+"_"+id1).css("z-index","0");
	
	$("#"+resetsys1).css("opacity","1");
	$("#"+resetsys2).css("opacity","1");
	
	$("#s"+id1).css("opacity","0");
	$("#d"+id2).css("opacity","0");
	
		
	$("#reset").html("Send");
	$("#reset").attr("id","send");
	
	$("#env9").css("opacity","0");
	
	$("#tick"+id2).css("opacity","0");
	$("#tick"+id1).css("opacity","0");
	
	$("#tick"+id2).css("z-index","-1");
	$("#tick"+id1).css("z-index","-1");
	
	$("#env9>img").css({position:"relative",top:"0px",left:"0px"});
	
	$("#table_01").css("opacity","0");
	
	$("#txt"+id1).removeClass("table_bg");
	$("#txt"+id2).removeClass("table_bg");
		
	$("#txt"+id1).removeClass("border");
	$("#txt"+id2).removeClass("border");
	
	$("#txt"+id1).css("color","black");
	$("#txt"+id2).css("color","black");
		
	numcount=0;	
	}





function animation_reverse()
{
	
		$("#table_01").removeClass("test");
		$("#env9>img").animate(
		{top:eval("(" + 'animationreverse.env'+id2+'[0].top' + ")")+'px',left:eval("(" + 'animationreverse.env'+id2+'[0].left' + ")")+'px'},1500,function(){
		$("#tick"+id2).css("opacity","1")
		$("#tick"+id2).css("z-index","1")
		
		$("#tick"+id2).fadeOut(700)
		$("#tick"+id2).fadeIn(500)
		$("#tick"+id2).fadeOut(500)
		$("#tick"+id2).fadeIn(500)
		$("#tick"+id2).fadeOut(500)
		$("#tick"+id2).fadeIn(500)
		});
	
}


	


})	