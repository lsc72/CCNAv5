var numcount = 0;
var resetsys1,resetsys2,id1,id2;

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
  "top" : -17}
 ],
 "env2" : [{"left" : -164, 
  "top" : 45}
 ],
 "env3" : [{"left" : -116, 
  "top" : 102}
 ],
 "env4" : [{"left" : -51, 
  "top" : 133}
 ],
 "env5" : [{"left" : 27, 
  "top" : 132}
 ],
 "env6" : [{"left" : 97, 
  "top" : 102}
 ],
 "env7" : [{"left" : 146, 
  "top" : 44}
 ],
 "env8" : [{"left" : 159, 
  "top" : -16}
 ]
 };
 


var animactivity = function()
{

var animDiv = document.createElement('div');
		animDiv.id = "animDiv";			
		mainDiv.appendChild(animDiv);	

	var temp ='';
	var temp = '<div id="main_wrapper"><div id="main_container"><div class="main_bg"><img src="10_3_1_1.png" id="main_bg" style="position:relative;"/></div></div><div id="env1"><img src="env1.png" style="position:relative;" id="env1_1"/></div><div id="env2"><img src="env1.png" style="position:relative;" id="env2_2"/></div><div id="env3"><img src="env1.png" style="position:relative;" id="env3_3"/></div><div id="env4"><img src="env1.png" style="position:relative;" id="env4_4"/></div><div id="env5"><img src="env1.png" style="position:relative;" id="env5_5"/></div><div id="env6"><img src="env1.png" style="position:relative;" id="env6_6"/></div><div id="env7"><img src="env1.png" style="position:relative;" id="env7_7"/></div><div id="env8"><img src="env1.png" style="position:relative;" id="env8_8"/></div><div id="env9"><img src="env1.png" style="position:relative;"/></div><div id="tick1"><img src="tick1.png" style="position:relative;"/></div><div id="tick2"><img src="tick2.png" style="position:relative;"/></div><div id="tick3"><img src="tick3.png" style="position:relative;"/></div><div id="tick4"><img src="tick4.png" style="position:relative;"/></div><div id="tick5"><img src="tick5.png" style="position:relative;"/></div><div id="tick6"><img src="tick6.png" style="position:relative;"/></div><div id="tick7"><img src="tick7.png" style="position:relative;"/></div><div id="tick8"><img src="tick8.png" style="position:relative;"/></div><div id="table_01"><table width="200" border="0" cellspacing="0" cellpadding="0"> <tr> <td colspan="4" align="center" id="table_title"><b>MAC Table</b></td> </tr> <tr> <td colspan="4" class="liner">&nbsp;</td> </tr> <tr class="bg"> <td>fa0/1</td> <td>fa0/2</td> <td>fa0/3</td> <td>fa0/4</td> </tr> <tr class="bg_white"> <td id="txt1">206d.8c01.0000</td> <td id="txt2">206d.8c01.1111</td> <td id="txt3">206d.8c01.2222</td> <td id="txt4">206d.8c01.3333</td> </tr> <tr class="bg"> <td>fa0/5</td> <td>fa0/6</td> <td>fa0/7</td> <td>fa0/8</td> </tr> <tr class="bg_white"> <td id="txt5">206d.8c01.4444</td> <td id="txt6">206d.8c01.5555</td> <td id="txt7">206d.8c01.6666</td> <td id="txt8">206d.8c01.7777</td> </tr></table></div><div id="s1">Source</div><div id="d1">Destination</div><div id="s2">Source</div><div id="d2">Destination</div><div id="s3">Source</div><div id="d3">Destination</div><div id="s4">Source</div><div id="d4">Destination</div><div id="s5">Source</div><div id="d5">Destination</div><div id="s6">Source</div><div id="d6">Destination</div><div id="s7">Source</div><div id="d7">Destination</div><div id="s8">Source</div><div id="d8">Destination</div><div id="router">Switch</div><div class="com_parent"><div id="com_all"><div id="com1"><img src="com_1.png" style="position:relative;"/></div><div id="com2"><img src="com_2.png" style="position:relative;"/></div><div id="com3"><img src="com_3.png" style="position:relative;"/></div><div id="com4"><img src="com_4.png" style="position:relative;"/></div><div id="com5"><img src="com_5.png" style="position:relative;"/></div><div id="com6"><img src="com_6.png" style="position:relative;"/></div><div id="com7"><img src="com_7.png" style="position:relative;"/></div><div id="com8"><img src="com_8.png" style="position:relative;"/></div></div><div id="pre_all"><div id="pre_1"><a href="#"><img src="pre_com1.png" style="position:relative;"/></a></div><div id="pre_2"><a href="#"><img src="pre_com2.png" style="position:relative;"/></a></div><div id="pre_3"><a href="#"><img src="pre_com3.png" style="position:relative;"/></a></div><div id="pre_4"><a href="#"><img src="pre_com4.png" style="position:relative;"/></a></div><div id="pre_5"><a href="#"><img src="pre_com5.png" style="position:relative;"/></a></div><div id="pre_6"><a href="#"><img src="pre_com6.png" style="position:relative;"/></a></div><div id="pre_7"><a href="#"><img src="pre_com7.png" style="position:relative;"/></a></div><div id="pre_8"><a href="#"><img src="pre_com8.png" style="position:relative;"/></a></div></div></div><div id="tdborder_1"></div><div id="tdborder_2"></div><div id="tdborder_3"></div><div id="tdborder_4"></div><div id="tdborder_5"></div><div id="tdborder_6"></div><div id="tdborder_7"></div><div id="tdborder_8"></div><div id="ID_inst">Click a source host and a destination host, then click <b>Send</b> to see how switches deliver messages.</div></div>';
temp += '</div></div>';

temp += '<div id="inetbox" ></div>'
temp += '<div id="captiontext"></div>'
temp += '<div id="button"><a href="#"><div id="send">Send</div></a></div>'

			
		$("#animDiv").html(temp);
		
		
		

}



$(function(){	
	
		
$("#pre_all>div").live("click",function()
{
if(numcount==0)
{	
resetsys1= this.id;
var source = this.id;
source = source.split("_");
$("#"+this.id).css("display","none");
$("#s"+source[1]).css("display","block");
id1 =source[1];
numcount++;
}
else if(numcount==1)
{
	
	resetsys2= this.id;
	var destination = this.id;
	destination = destination.split("_");
	$("#"+this.id).css("display","none");
	$("#d"+destination[1]).css("display","block");
	id2 = destination[1];
	$("#tick"+id2).css("z-index","-1");
	numcount++;
	
}

});

$("#send").live("click",function(){
	
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
	
	$("#send").html("Reset")
	$("#send").attr("id","reset");
	$("#reset").css('background-image','url(bg_blue.jpg)');
	$("#reset").css('color','white');
	
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
	});
	
$("#reset").live("click",function(){
	
	
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
		$("#tick"+id1).css("opacity","0 !important");
	 }
	
	 
	$("#env"+id1+"_"+id1).css({position:"relative",top:"0px",left:"0px"});
	$("#env"+id1+"_"+id1).css("opacity","0");
	$("#env"+id1+"_"+id1).css("z-index","0");
	
	$("#"+resetsys1).css("display","block");
	$("#"+resetsys2).css("display","block");
	
	$("#s"+id1).css("display","none");
	$("#d"+id2).css("display","none");
	
		
	$("#reset").html("Send")
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
	
});

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


});
