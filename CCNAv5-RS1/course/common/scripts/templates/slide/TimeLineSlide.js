	
$(document).ready(function(){ 
	$('div .top_nav').live('mousedown', function() {
		  $('#dvTimeLine').attr('alt','prev');
	});
	$('div .bottom_nav').live('mousedown', function() {
		  $('#dvTimeLine').attr('alt','next');
	});
	$('#dvTimeLine div > a').live('mousedown', function() {
		  $('#dvTimeLine').attr('alt','');
	});
});

var bindTimeLine = {
	
	   _minYr :0,
       _maxYr:0,
       _scale :0,
       yearArr :{},
       yrOffset:0,
       defaultPadding:50,
       timeLineHt:337-(24+16),
       defaultImgHt:35, 
	   offSetY:0,
	   sort_type:'',
	   left_TimeLine:422, 
	  
	initTimeLine : function(data,sortOrder){ 

		PageContent.xmlData = data;
		bindTimeLine.sort_type = sortOrder;
		bindTimeLine.loadXml(); 
	},

	loadXml : function()
	{  

		/*var url=location.href;
		url=url.split("/")
		url=url[url.length-3];
		var xmlFile='media_'+url+'_layout.xml';*/

	var url= document.getElementsByName("movie").item(0).value;
		url = url.split(".swf")[0];
	var _xmlFile=url+'_layout.xml'; 

		var xmlFile = _xmlFile;
            $.ajax({
                type: "GET",
                crossDomain:false, 
                url: xmlFile,
                dataType: "xml",
                success: bindTimeLine.getXMLData,
                error: bindTimeLine.getXMLErrorr
            }); 

	},  

	updateNavigationButton: function(){
		 
		if(bindTimeLine._startYr == bindSlideFactory.selectedyear)
			$('.bottom_nav > a').css('display','none');
		else if(bindTimeLine._endYr == bindSlideFactory.selectedyear)
			$('.top_nav > a').css('display','none');
		else {
			$('.top_nav > a').css('display','block');
			$('.bottom_nav > a').css('display','block'); 
		}
	}, 

	bindPageHtml : function() //bind the container
	{
		dataBind='<div class="timelinecontainer">';
		dataBind+='<h1 id="ID_title"></h1>';
		dataBind+='<div class="top_nav"><a href="javascript:;"><img src="../../../common/images/up_arrow.jpg" width="40" height="7" alt="" /></a></div>';
		dataBind+='<div id="wrapper" class="fltlft left_area">	';
		dataBind+='</div>';
		dataBind+='<div id="dvTimeLine" class="fltrt right_area">';
		dataBind+='<div class="fltlft bluedot"><img class="dot_normal" src="../../../common/images/spacer.png" width="18" height="19" alt="" /><img class="dot_selected" src="../../../common/images/spacer.png" width="18" height="19" alt="" /><img class="dot_normal" src="../../../common/images/spacer.png" width="18" height="19" alt="" /></div>';
		dataBind+='<div class="fltlft bluedot dot2"><img class="dot_normal" src="../../../common/images/spacer.png" width="18" height="19" alt="" /></div>';
		dataBind+='</div>';
		dataBind+='<div class="clearfloat"></div>';
		dataBind+='<div class="bottom_nav"><a href="javascript:;"><img src="../../../common/images/down_arrow.jpg" width="40" height="7" alt="" /></a></div>';
		dataBind+='</div>';	

		$('#mainDiv').html(dataBind);
	},

	getXMLData:function (data)
    {   
    	//get and set min,max years and scale
		bindTimeLine.bindPageHtml();

		bindSlideFactory.xmlContent = data;
		bindTimeLine._minYr = parseInt($(data).find("timeline").attr("min"));
		bindTimeLine._maxYr = parseInt($(data).find("timeline").attr("max"));
		bindTimeLine._startYr = parseInt($(data).find("timeline").attr("startYr"));
		bindTimeLine._endYr = parseInt($(data).find("timeline").attr("endYr"));
		bindTimeLine._scale = parseInt($(data).find("timeline").attr("scale")); 

		bindTimeLine.yrOffset = Math.round(bindTimeLine.timeLineHt/(bindTimeLine._maxYr - bindTimeLine._minYr)); 

		bindTimeLine.generateTimeLineSection(data); 

		bindTimeLine.currentSelectedYear();
		
		bindTimeLine.loadNavButtons();

		bindSlideFactory.bindSlidesSkeleton();

		//PageContent.loadContentXML();
		PageContent.setContent();
		bindTimeLine.updateNavigationButton();

    }, 

	generateTimeLineSection:function(xmlData){
		
		//get the array of years
	 		var yearArr = new Array();
			$(xmlData).find("event").each(function()
			{
				yearArr.push($(this).attr("date"));
			});
 
	   		 
	  		if(bindTimeLine.sort_type.indexOf("ASCENDING")>=0 ) 
	  			yearArr.sort(bindTimeLine.sortAscending);  
			else  
				yearArr.sort(bindTimeLine.sortDescending);  
			 

			bindTimeLine.yearArr = yearArr; 
			bindTimeLine.bindTimeLineSection(); 

	},

	currentSelectedYear:function()
	{
		var _string =  ($("img[class=dot_selected]").parent().parent().attr('id'));
		 var arr = _string.split('_');
		 bindTimeLine.selectedyear = parseInt(arr[1]);  
		 bindSlideFactory.selectedyear = parseInt(arr[1]);  
	},

    loadNavButtons:function()
    {
		var _onclick=''; 
		
		var dvSelector = $("img[class=dot_selected]").parent().parent().attr('id');
		 
		if(bindTimeLine.sort_type.indexOf("ASCENDING")>=0 ){ 				
				var dvNextSelector = $('#'+dvSelector+' + div').attr('id');
				_onclick = $('#'+dvNextSelector+'> a').attr('onclick'); 
				$('.bottom_nav').attr('onclick',_onclick); 
	  		}
	  	else {	 
				var dvPreviousSelector = $('#'+dvSelector+' + div').attr('id');
				_onclick = $('#'+dvPreviousSelector+'> a').attr('onclick'); 
				$('.bottom_nav').attr('onclick',_onclick);
				
	  		}
 
    },

	sortAscending:function(data_A, data_B)
	{
		return (data_A - data_B);
	},
	sortDescending:function(data_A, data_B)
	{
	    return (data_B - data_A);
	},

    getXMLErrorr:function(data)
    {       
        var _data = data; 
    },

    bindTimeLineyear:function ()
    {
    	var length = (bindTimeLine._maxYr - bindTimeLine._minYr)/10;
		
    	var str= ''; 
    	var offSet = (bindTimeLine.yrOffset * 10) ;
 		var  top = offSet;
 		var left = bindTimeLine.left_TimeLine;
		if(bindTimeLine.sort_type.indexOf("ASCENDING")>=0 )
		{
	 		var _year = bindTimeLine._minYr;
	    	for(var i= 0; i<= length; i++)
				{  
					top =bindTimeLine.defaultPadding + (bindTimeLine.yrOffset * (_year - bindTimeLine._minYr));
					str+='<div rel="yearOffset" style="top:'+top+'px;left:'+left+'px; position: absolute;font:bold 12px arial;">'+_year+'</div>'; 
					_year = _year + bindTimeLine._scale; 
				}
		}else{
			var _year = bindTimeLine._maxYr; 
			//bindTimeLine.defaultPadding -= 20; //20 is align default padding
	    	for(var i= 0; i<= length; i++)
				{  
					top = bindTimeLine.defaultPadding + (bindTimeLine.yrOffset * (bindTimeLine._maxYr - _year));
					str+='<div rel="yearOffset" style="top:'+top+'px;left:'+left+'px; position: absolute;font:bold 12px arial;">'+_year+'</div>'; 
					_year = _year - bindTimeLine._scale; 
				} 
		} 
		
		$('#dvTimeLine').html(str);

    },

    bindTimeLineSection:function ()
    { 
    	var str = ''; 
    	var lastValue = 0; 
    	var _index = 1; 

		bindTimeLine.bindTimeLineyear();

		$.each(bindTimeLine.yearArr, function(index, value) {   

		 	var val = parseInt(value); 
			if(bindTimeLine.sort_type.indexOf("ASCENDING")>=0 )		
				tempOffset = bindTimeLine.defaultPadding + (bindTimeLine.yrOffset * (val - bindTimeLine._minYr)); 
			else 
				tempOffset = bindTimeLine.defaultPadding + (bindTimeLine.yrOffset * (bindTimeLine._maxYr - val )); 

			 
		 	if(lastValue == 0)
				str+='<div id="dv_'+val+'" class="fltlft bluedot" style="top:'+tempOffset+'px;"><a id="a_'+val+'" rel='+val+' rev="1" href="javascript:;" onclick="bindTimeLine.timeLineClick(\''+val+'\')"><img id="img_'+val+'" alt="button" width="18" height="19" alt="" src="../../../common/images/spacer.png" class="dot_selected"/></a>';  //for the 1st time
			else if(lastValue != 0 && lastValue == val) {  
				_index ++;
				str+='<a id=\'a_'+val+'_x'+_index+'\' rel='+val+' rev='+_index+' href="javascript:;" onclick="bindTimeLine.timeLineClick(\''+val+'_x'+_index+'\')"><img id=\'img_'+val+'_x'+_index+'\' width="18" height="19" alt="" src="../../../common/images/spacer.png" class="dot_normal"/></a>';  
			}
			else {  
				_index = 1;
				str+='</div><div id="dv_'+val+'" class="fltlft bluedot" style="top:'+tempOffset+'px;"><a id="a_'+val+'" rel='+val+' rev="1" href="javascript:;" onclick="bindTimeLine.timeLineClick(\''+val+'\')"><img id="img_'+val+'" width="18" height="19" alt="" src="../../../common/images/spacer.png" class="dot_normal"/></a>';  //for the 1st time
			}
			 	 lastValue = parseInt(value);  
		 		 bindTimeLine.bindSlides(val,_index);

    	}); 
		 	
    	 $('#dvTimeLine').append(str); 
    },

    bindSlides:function(value,_index)
	{ 
		var dataBind='';

		if(_index > 1)
		value =  value+"_x"+_index; 


		if($('#wrapper > div').length == 0)
		 	dataBind='<div id="dvSlide_'+(value)+'">';
		else
			dataBind='<div id="dvSlide_'+(value)+'" style="display:none;">';

		dataBind+='<div class="slide_title" alt='+value+'>';
		dataBind+='<h1></h1>';		
		dataBind+='<span></span>';
		dataBind+='</div>';
		dataBind+='<div class="slide_content">';		
		dataBind+='<div id=\'graphics_'+value+'\'></div>'; 
		dataBind+='<div id=\'content_'+value+'\'></div>'; 
		dataBind+='</div>';
		dataBind+='</div>';

		if($('#wrapper > div').length == 0)
			$('#wrapper').html(dataBind);
		else{
			$('#wrapper > div:last').after(dataBind); 
		}
	}, 
	
    timeLineClick:function(year)
    {
    	var aSelector,selector  = '';
		var arr,_onclick = '';


	//1) init the slides
		bindSlideFactory.diablePriviousSlide(); 

		bindSlideFactory.selectedyear = year;  

		bindSlideFactory.enableCurrentSlide(); 
		
		bindSlideFactory.bindSlidesSkeleton();
		PageContent.setContent();

		
		 	
	//2) add click selector 
	
		var childlength = $('#dv_'+year+' a').length;
		if($('#dvTimeLine').attr('alt') == 'prev' && childlength > 1 && year.indexOf('_x') <0){
			//if(parseInt($("#dv_"+year+" span + a").attr('rev')) == 1) 
			if($("#dv_"+year+" a[rev=2] > img").hasClass('dot_selected') == true)
				year = year;
			 else
				year = year+'_x'+$('#dv_'+year+' a').length; 
		}

		  if(year.indexOf('_x') >0){

				arr = year.split('_x');
				 
				selector = "#img_"+arr[0]+'_x'+arr[1];
				aSelector= "#a_"+arr[0]+'_x'+arr[1];
		  	}else {
				selector = "#img_"+year;
				aSelector= "#a_"+year;
		  	}
		  	

			$('#dvTimeLine img.dot_selected').addClass('dot_normal').removeClass("dot_selected");
			$(selector).addClass('dot_selected').removeClass("dot_normal");  
			/*if($('#dvTimeLine .dot_selected_arrow').length > 0)
				 $('#dvTimeLine .dot_selected_arrow').remove();
			$('#dv_'+year).append('<img class="dot_selected_arrow" />');*/
			 
			 

	//3) update top and bottom arrow for navigation
		  var dvSelector = $(selector).parent().parent().attr('id'); 
		  var childlength = $('#'+dvSelector+' a').length;
		  if(childlength > 1){ 
		  	var _alt = $('#dvTimeLine').attr('alt');
				if($(aSelector).next().length >0 && $(selector).parent().attr('rev') == ("1") >0){ 
			  		  
					var dvPrevSelector = $('#'+dvSelector).prev().attr('id');
					_onclick = $('#'+dvPrevSelector+'> a').attr('onclick'); 
					$('.top_nav').attr('onclick',_onclick);

					_onclick = $(aSelector).next().attr('onclick');   
					$('.bottom_nav').attr('onclick',_onclick);   

				} 
				else if(childlength == parseInt($(aSelector).attr('rev'))){ 

					_onclick = $(aSelector).prev().attr('onclick');
					$('.top_nav').attr('onclick',_onclick);  

					var dvNextSelector = $('#'+dvSelector+' + div').attr('id');
					_onclick = $('#'+dvNextSelector+'> a').attr('onclick'); 
					$('.bottom_nav').attr('onclick',_onclick);   

				}else { 
					_onclick = $(aSelector).prev().attr('onclick'); 
					$('.top_nav').attr('onclick',_onclick); 

					_onclick = $(aSelector).next().attr('onclick');
					$('.bottom_nav').attr('onclick',_onclick);  
				} 
		  }else
		  {

		  	//for next element
				var dvNextSelector = $('#'+dvSelector+' + div').attr('id');
				_onclick = $('#'+dvNextSelector+'> a').attr('onclick');  
				$('.bottom_nav').attr('onclick',_onclick);

			//for previous element
			
				var previousElement = $('#dv_'+year).prev().attr('id');     
				var childlength = $('#'+previousElement+' a').length;
				if(childlength >1){//check previous element
					_onclick = $('#'+previousElement+' a:last-child').attr('onclick');  
					$('.top_nav').attr('onclick',_onclick);
				}else{
					var dvPrevSelector = $('#'+dvSelector).prev().attr('id');
					_onclick = $('#'+dvPrevSelector+'> a').attr('onclick'); 
					$('.top_nav').attr('onclick',_onclick);
				}
		}
		bindTimeLine.updateNavigationButton();
    }, 

    removeDuplicates:function(inputArray) {
		var outputArray = new Array();
		var dval = 0;
       for(var i = 0; i<inputArray.length; i++)
       {
		if(inputArray[i] != dval) 
			outputArray.push(inputArray[i]);
			dval = inputArray[i]; 
       }	 
		if(bindTimeLine.sort_type.indexOf("ASCENDING")>=0 )
			outputArray.sort(bindTimeLine.sortAscending);
		else {
			outputArray.sort(bindTimeLine.sortDescending); 
		}

	     
        return outputArray;
    }

};


var bindSlideFactory = { 
	 xmlContent:'', 
	 selectedyear:0,

	bindSlidesSkeleton:function()
	 { 
	 	var id, x, y, width, height, src,rel,dataBind = '';
	 	var dvYear = bindSlideFactory.selectedyear; 
	 	var year = parseInt(bindSlideFactory.selectedyear);
	 	var _this='';

		
		$(bindSlideFactory.xmlContent).find("event").each(function()
		{ 

			if($(this).attr('alt') && $(this).attr('alt') == dvYear)
			{
				// mutiple events within single year - the 2nd event onwards will be selected 
				_this = this;

			}else if($(this).attr('alt') && $(this).attr('alt').indexOf(dvYear) >= 0 && $(this).attr('alt').indexOf('x1') >= 0 ){				
				// mutiple events within single year - the 1st event will be selected

				_this = this;

			}else if($(this).attr('date') && $(this).attr('date') == dvYear && $(this).attr('alt') == undefined){
				//all the years with single events will be selected 
				_this = this;

			}else { 

				 //do nothing
			}
 
				//bind all the images for the particular slide
				$(_this).children('img').each(function(){

					id= $(this).attr("id");
					x= $(this).attr("x");
					y= $(this).attr("y");
					width= $(this).attr("width");
					height= $(this).attr("height");
					src= $(this).attr("src");
					rel= $(this).attr("rel");
					
					dataBind+='<img id=\'imgGraphic_'+id+'\' width='+width+' height='+height+' rel='+rel+' src='+src+' style="left:'+x+'px;top:'+y+'px;" alt='+dvYear+' />';

				});
				$('#graphics_'+dvYear).html(dataBind);
				dataBind='';

				//bind all the title for the particular slide

				$(_this).children('titletext').each(function(){

					id = $(this).attr("src");
					x = $(this).attr("x");
					y = $(this).attr("y");
					width = $(this).attr("width");
					height = $(this).attr("height");
					src = $(this).attr("src");
				
				
				dataBind+='<h1>'+year+'</h1>';
				//dataBind+='<span id='+id+' width='+width+' height='+height+' alt='+dvYear+'>'; 
				dataBind+='<div id='+id+' style="position:relative;" alt="subheader_'+dvYear+'">'; 
				dataBind+='</div>';	
				});  

				$('div[alt='+dvYear+']').html(dataBind); 

				dataBind='';
				
				//bind all the title for the particular slide
				$(_this).children('bodytext').each(function(){

					id = $(this).attr("src");
					x = $(this).attr("x");
					y = $(this).attr("y");
					width = $(this).attr("width");
					height = $(this).attr("height");
					src = $(this).attr("src");

				
				dataBind+='<p id='+id+' style="left:'+x+'px;top:'+y+'px;width:'+width+'px; height:'+height+'px;position:relative;" alt='+dvYear+'>'; 
				dataBind+='</p>';	
				});
				$('#content_'+dvYear).html(dataBind);
				dataBind='';
 
		});  
	}, 

	enableCurrentSlide:function(){ 
	$('#dvSlide_'+bindSlideFactory.selectedyear).show();  
	},

	diablePriviousSlide:function(){   
		$('#dvSlide_'+bindSlideFactory.selectedyear).hide();  
	} 

};


var PageContent={

 xmlData:'',

loadContentXML:function()
	{ 
		var xmlFile = "media.xml";
            $.ajax({
                type: "GET",
                crossDomain:false, 
                url: xmlFile,
                dataType: "xml",
                success: PageContent.getContent,
                error: bindTimeLine.getXMLErrorr
            }); 

	},  

	getContent : function(xmlContent){

		PageContent.xmlData = xmlContent; 
		PageContent.setContent();
		
	},

	setContent : function(){
		$(PageContent.xmlData).find("component").each(function()
			{  
				var selector ='#'+ $(this).attr("id");

				var data = $(this).children('text').text();

				$(selector).html(data);
		});
	}

};





 