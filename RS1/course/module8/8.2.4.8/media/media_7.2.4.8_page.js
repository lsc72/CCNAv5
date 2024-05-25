
//loadScript("../../../common/scripts/templates/slide/MultiBarSlide.js");
function registerSWF(){
    swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}


var STAGE_WIDTH = 470;
var STAGE_HEIGHT = 400;

function getData()
{
   var template_type = "MULTI_BAR";
    var commonTexts = [];

    var slide_1_type = "IMAGE";
    var slide_1_images = [{name:"7248.png",
							x:41.8,
							y:44.60, 
							width:358.65,
							height:106.1,							
							type:""},
							{name:"outputBox1.png",
							x:4,
							y:190.30, 
							width:433,
							height:202,							
							type:""}];
    var slide_1_texts = [{compId:"staticTxt1_1",
							bodyText:'<b>PC1</b>',
							x:56,
							y:48.5, 
							width:27,
							height:17,
							size:11,
							color:"#fff",
							textAlign:"center",},
							{compId:"staticTxt1_2",
							bodyText:'<b>PC2</b>',
							x:55.5,
							y:121, 
							width:27,
							height:17,
							size:11,
							color:"#fff",
							textAlign:"center",},
							{compId:"staticTxt1_3",
							bodyText:'<b>R1</b>',
							x:188,
							y:100.5, 
							width:31,
							height:17,
							size:11,
							color:"#fff",
							textAlign:"center",},
							{compId:"staticTxt1",
							bodyText:':10',
							x:82,
							y:47.4, 
							width:22,
							height:17,
							size:11,							
							textAlign:"center",},
							{compId:"staticTxt1",
							bodyText:':10',
							x:78,
							y:120, 
							width:31,
							height:17,
							size:11,							
							textAlign:"center",},
						{compId:"staticTxt1",
							bodyText:'G0/0<br/>:1',
							x:152+8,
							y:53+3, 
							width:31,
							height:17,
							size:11,
							textAlign:"right",},
							{compId:"staticTxt1",
							bodyText:':1<br/>G0/1',
							x:152,
							y:117, 
							width:31,
							height:17,
							size:11,
							textAlign:"right",},
							{compId:"staticTxt1",
							bodyText:':1<br/>S0/0/0',
							x:228,
							y:85.5, 
							width:40,
							height:30,
							size:11,							
							textAlign:"left",},
							{compId:"staticTxt1",
							bodyText:'<b>2001:0DB8:ACAD:1::/64</b>',
							x:110.85,
							y:37, 
							width:148,
							height:30,
							size:11,							
							textAlign:"left",},
							{compId:"staticTxt1",
							bodyText:'<b>2001:0DB8:ACAD:2::/64</b>',
							x:110,
							y:153, 
							width:148,
							height:30,
							size:11,							
							textAlign:"left",},
							{compId:"staticTxt1",
							bodyText:'<b>2001:0DB8:ACAD:3::/64</b>',
							x:226,
							y:66, 
							width:148,
							height:30,
							size:11,							
							textAlign:"left",},
		 
							{compId:"routertext1",
							bodyText:'<div class="slide1">R1#<b>show ipv6 interface brief</b><br/>GigabitEthernet0/0&nbsp&nbsp&nbsp&nbsp&nbsp[up/up]<br/>&nbsp&nbsp&nbsp&nbspFE80::FE99:47FF:FE</span>75:C3E0<br/>&nbsp&nbsp&nbsp&nbsp2001:DB8:ACAD:1::1<br/>GigabitEthernet0/1&nbsp&nbsp&nbsp&nbsp&nbsp[up/up]<br/>&nbsp&nbsp&nbsp&nbspFE80::FE99:47FF:FE75:C3E1<br/>&nbsp&nbsp&nbsp&nbsp2001:DB8:ACAD:2::1<br/>Serial0/0/0&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp[up/up]<br/>&nbsp&nbsp&nbsp&nbspFE80::FE99:47FF:FE75:C3E0<br/>&nbsp&nbsp&nbsp&nbsp2001:DB8:ACAD:3::1<br/>Serial0/0/1&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp[administratively down/down]<br/>&nbsp&nbsp&nbsp&nbspunassigned<br/>R1#</div>',
							x:24,
							y:199, 
							width:412.5,
							height:180,
							size:11,							
							textAlign:"left",
							}]
							
	
    var slide_1_object = {templateType:slide_1_type,
        x:0,
        y:0,
        images:slide_1_images,			
        texts:slide_1_texts};


   var slide_2_type = "IMAGE";
	var slide_2_images = [
							{name:"outputBox2.png",
							x:3.85+10.15,
							y:37.3, 
							width:433.25,
							height:325.35,							
							type:""}];								
	var slide_2_texts = [{compId:"routertext2",
							bodyText:'<div>R1#<b>show ipv6 route</b><br/>IPv6 Routing Table - default - 7 entries<br/>Codes: C - Connected, L - Local, S - Static, U - Per-user<br/> Static<br/><br/>&lt;output omitted&gt;<br/><br/>C&nbsp&nbsp&nbsp2001:DB8:ACAD:1::/64 [0/0]<br/>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&via GigabitEthernet0/0, directly connected<br/>L&nbsp&nbsp&nbsp2001:DB8:ACAD:1::1/128 [0/0]<br/>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&via GigabitEthernet0/0, receive<br/>C&nbsp&nbsp&nbsp2001:DB8:ACAD:2::/64 [0/0]<br/>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&via GigabitEthernet0/1, directly connected<br/>L&nbsp&nbsp&nbsp2001:DB8:ACAD:2::1/128 [0/0]<br/>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&via GigabitEthernet0/1, receive<br/>C&nbsp&nbsp&nbsp2001:DB8:ACAD:3::/64 [0/0]<br/>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&via Serial0/0/0, directly connected<br/>L&nbsp&nbsp&nbsp2001:DB8:ACAD:3::1/128 [0/0]<br/>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&via Serial0/0/0, receive<br/>L&nbsp&nbsp&nbspFF00::/8 [0/0]<br/>&nbsp&nbsp&nbsp&nbspvia Null0, receive<br/>R1#</div>',
							x:27+10.15,
							y:49, 
							width:416,
							height:317,
							size:11,							
							textAlign:"left",
							}]					
	var slide_2_object = {templateType:slide_2_type,
							x:0,
							y:0,
							images:slide_2_images,
							texts:slide_2_texts};
			
   
var slide_3_type = "IMAGE";
	var slide_3_images = [{name:"outputBox3.png",
							x:43,
							y:142.4, 
							width:433.25,
							height:115.20,							
							type:""}];								
	var slide_3_texts = [{compId:"routertext3",
							bodyText:'<div>R1#<b>ping 2001:db8:acad:1::10</b><br/>Type escape sequence to abort.<br/>Sending 5, 100-byte ICMP Echos to 2001:DB8:ACAD:1::10, <br/>timeout is 2 seconds:<br/>!!!!!<br/>Success rate is 100 percent (5/5)<br/>R1#</div>',
							x:56.05+10,
							y:149+5, 
							width:416,
							height:99,
							size:11,	
							
							textAlign:"left",
							}]				
	var slide_3_object = {templateType:slide_3_type,
							x:0,
							y:0,
							images:slide_3_images,
							texts:slide_3_texts};

	var slide_4_type = "SYNTAX_CHECKER";							
	var slide_4_texts = [{compId:"ID_SC_title",
							x:100,
							y:0, 
							width:390,
							height:16,
							size:11,								
							textAlign:"left"}];
												
	var slide_4_object = {templateType:slide_4_type,
								texts:slide_4_texts,
        						syntax:"sc1"};

    var slides = [slide_1_object,slide_2_object,slide_3_object,slide_4_object];

    return {templateType:template_type,
        textObject:commonTexts,
        slideObject:slides};

}
loadScript("../../../common/scripts/swfobject.js", registerSWF);