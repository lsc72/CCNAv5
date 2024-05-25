var zoomImg;
var pause,play,restart;
var animation1 = function(data)
{
var animDiv = document.createElement('div');
		animDiv.id = "animDiv";			
		mainDiv.appendChild(animDiv);	

var temp = '';
temp +='<div id="main_wrapper">'
temp +='<img id="img1" src="1.jpg" style="position:absolute;width:460px;height:400px;z-index:1; "/>';
temp +='<img id="img2" src="2.jpg" style="position:absolute;width:460px;height:400px;z-index:2;"/>';
temp +='<img id="img3" src="3.jpg" style="position:absolute;width:460px;height:400px;z-index:3;"/>';
temp +='<img id="img4" src="4.jpg" style="position:absolute;width:460px;height:400px;z-index:4;"/>';
temp +='<img id="img5" src="1.jpg" style="position:absolute;width:460px;height:400px;z-index:5; "/>';


temp +='</div>';

$("#animDiv").html(temp);
 
}
function animation()
	{  
		img1= $("#img1");	 
		img2= $("#img2");	 
		img3= $("#img3");	 	 
		img4= $("#img4");	 
		img5= $("#img5");	 
	  
	t_anim = new TimelineMax({repeat:-1});
	t_anim.to(img2,2,{css:{clip:"rect(0px 460px 400px 0px)"},delay:4});
	t_anim.to(img3,2,{css:{clip:"rect(0px 460px 400px 0px)"},delay:4}); 
	t_anim.to(img4,2,{css:{clip:"rect(0px 460px 400px 0px)"},delay:4});
	t_anim.to(img5,2,{css:{clip:"rect(0px 460px 400px 0px)"},delay:4}); 
	t_anim.play(); 
	   
} 

var animeArray = [{name:animation1,animFunction:animation}];