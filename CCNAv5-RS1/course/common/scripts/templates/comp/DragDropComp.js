
var DragDropComp = function(_xmlData,_dataObject)
{		
	this.initiateComp(_xmlData,_dataObject);	
}
var dd = DragDropComp.prototype;
var slideCnt=1;

dd.initiateComp = function(_xmlData,_dataObject)
{	
	//xmlData = _xmlData;
	dd.dataObject = _dataObject;
	dd.xmlData = _xmlData;	
}


dd.buildImages = function()
{
	var mainDiv = document.getElementById("mainDiv");
	var dragDropDiv = document.getElementById("dragDropDiv");
	if(dragDropDiv == null){
			dragDropDiv = document.createElement('div');
			dragDropDiv.id = "dragDropDiv";			
			mainDiv.appendChild(dragDropDiv);
	}
	var contentDiv = document.getElementById("contentDiv_s"+_thisRef.dataObject.slideNo);
	if(contentDiv == null){
			contentDiv = document.createElement('div');
			contentDiv.id = "contentDiv_s"+_thisRef.dataObject.slideNo;			
			dragDropDiv.appendChild(contentDiv);
	}
	for(var i=0;i<dd.dataObject.slideImages.length;i++)
	{
		var imageDiv = document.createElement("div");
		
		$(imageDiv).attr('id',dd.dataObject.slideImages[i].compId);
		
		var img = document.createElement('img');		
		img.src = dd.dataObject.slideImages[i].name;
		img.onload = function()
		{
			
		}
		imageDiv.appendChild(img);
		$(img).css("width",dd.dataObject.slideImages[i].width);
		$(img).css("height",dd.dataObject.slideImages[i].height);
		imageDiv.style.cssText = "position:absolute;top:"+dd.dataObject.slideImages[i].y+"px;left:"+dd.dataObject.slideImages[i].x+"px;font-size:11px;";
		contentDiv.appendChild(imageDiv);
		if(dd.dataObject.slideImages[i].clickable == 1)
		{
			$(imageDiv).css("cursor","pointer");
			$(imageDiv).bind('touchend', function(event) 
			{
				dd.showHelp();
			});
			$(imageDiv).click(function(){
				dd.showHelp();
			});
		}
	}
	
}

dd.buildTextItems = function()
{
	dd.buildCommonText();
	dd.buildBodyText();
}

dd.buildCommonText = function()
{
	var mainDiv = document.getElementById("contentDiv_s"+_thisRef.dataObject.slideNo);
	
	dd.common_textFields = dd.dataObject.textObject;
	for(var i=0;i<dd.common_textFields.length;i++)
	{
		var textDiv = document.createElement("div");
		$(textDiv).attr('id',"text_com"+i);
		textDiv.innerHTML = $(dd.xmlData).find("component#"+dd.common_textFields[i].compId).text();		
		textDiv.style.cssText = "position:absolute;top:"+dd.common_textFields[i].y+"px;left:"+dd.common_textFields[i].x+"px;width:"+dd.common_textFields[i].width+"px;height:auto;font-size:"+dd.common_textFields[i].size+"px;";
		mainDiv.appendChild(textDiv);
	}
}

dd.buildBodyText = function()
{
	var mainDiv = document.getElementById("contentDiv_s"+_thisRef.dataObject.slideNo);
	dd.textFields = dd.dataObject.slideObject;
	for(var i=0;i<dd.textFields.length;i++)
	{
		var textDiv = document.createElement("div");
		$(textDiv).attr('id',"text_body"+i);
		
		textDiv.innerHTML = $(dd.xmlData).find("component#"+dd.textFields[i].compId).text();		
		textDiv.style.cssText = "position:absolute;top:"+dd.textFields[i].y+"px;left:"+dd.textFields[i].x+"px;width:"+dd.textFields[i].width+"px;height:auto;font-size:"+dd.textFields[i].size+"px;text-align:"+dd.textFields[i].textAlign;
		mainDiv.appendChild(textDiv);
	}
}

dd.buildSubmitButtons = function()
{
	var mainDiv = document.getElementById("contentDiv_s"+_thisRef.dataObject.slideNo);
	dd.buttons = dd.dataObject.submitObject;	
	 
	for(var i=0;i<dd.buttons.length;i++)
	{
		var compId = dd.buttons[i].compId;
		
		var buttonDiv = document.createElement('div');
		$(buttonDiv).attr('id',"button"+i);
		
		buttonDiv.style.cssText = "position:absolute;top:"+dd.buttons[i].y+"px;left:"+dd.buttons[i].x+"px;width:auto;height:auto;font-size:11px;";
		mainDiv.appendChild(buttonDiv);		
		
		var imgDiv = document.createElement('img');
		if(dd.buttons[i].normalSkinImage != undefined)
			imgDiv.src = dd.buttons[i].normalSkinImage;
		else
			$(buttonDiv).css('display', 'none');
		//imgDiv.style.cssText = "position:absolute;top:"+0+"px;left:"+0+"px;width:auto;height:auto;font-size:16px;";
		buttonDiv.appendChild(imgDiv);
		
		dd.setLabel({i:i, btnDiv:buttonDiv, imgDiv:imgDiv, compId:compId});
		
		imgDiv.onload = function(evt)
		{
			//dd.imageLoaded(evt, {i:i, btnDiv:dragDiv, imgDiv:imgDiv, compId:compId});
		}
		
		$(buttonDiv).bind('touchend', function(event) 
		{
			dd.onClickHandler(event);
		});		
		buttonDiv.onclick = dd.onClickHandler;

        $(buttonDiv).mouseover(function(){
		   $(this).children("img").attr("src","../../../common/images/btn_hover.png");
           $(this).children("div").css("color","#0D658B");
		});
		$(buttonDiv).mouseout(function(){
			$(this).children("img").attr("src","../../../common/images/btn_normal.png");
           	$(this).children("div").css("color","#FFFFFF");
		});


	}
}

dd.onClickHandler = function(evt)
{
	var id = $(evt.target).parent().attr('id');
	var id_2 = $(evt.target).parent().parent().attr('id');
	
	if(id == 'button0' || id_2 == 'button0')
	{
		dd.dataObject.curObj.checkAnswers();
	}
	else
	{
		dd.dataObject.curObj.resetAnswers();
	}
}

dd.setLabel = function(data)
{
	var labelDiv = document.createElement('div');
	labelDiv.innerHTML = $(_thisRef.xmlData).find("component#"+data.compId).text();		
	
	var top = $(data.imgDiv).offset().top;
	var left = $(data.imgDiv).offset().left;
	labelDiv.style.cssText = "width:auto;height:auto;font-size:11px;text-align:center;padding-left:6px;margin-top:-23px;color:#ffffff;cursor:pointer;font-weight:bold;";
	
	data.btnDiv.appendChild(labelDiv);
	
}
dd.showFeedback = function(resObj)
{
	
    $("#ID_FEEDBACK").remove()
	//alert("thisRef.dataObject.slideNo" + _thisRef.dataObject.slideNo);
    var mainDiv = document.getElementById("contentDiv_s"+_thisRef.dataObject.slideNo);
    var imageDiv = document.createElement("div");

    $(imageDiv).attr('id',dd.dataObject.feedbackObj[0].compId);
    $("#ID_FEEDBACK").css('z-index',(25000));
	
    var img = document.createElement('img');
    img.src = dd.dataObject.feedbackObj[0].image;
    img.onload = dd.imageloaded;
    imageDiv.appendChild(img);

	var fbID = "_s"+_thisRef.dataObject.slideNo+"_";
		
    var title = resObj.isCorrect?"ID"+fbID+"CORRECT_TITLE":"ID"+fbID+"INCORRECT_TITLE";
    var fb = resObj.isCorrect?"ID"+fbID+"CORRECT_BODY":"ID"+fbID+"INCORRECT_BODY";

    var headerDiv = document.createElement('div');
    headerDiv.innerHTML = $(_thisRef.xmlData).find("component#"+title).text();
	var tID = "ID_s"+_thisRef.dataObject.slideNo+"Title";
	$(headerDiv).attr('id',tID);
    headerDiv.style.cssText = "position:absolute;width:auto;height:auto;font-size:11px;text-align:center;top:4px;left:4px;color:#ffffff;";
    imageDiv.appendChild(headerDiv);

    var feedbackDiv = document.createElement('div');
    feedbackDiv.innerHTML = $(_thisRef.xmlData).find("component#"+fb).text();
	$(feedbackDiv).attr('id',"ID_s"+_thisRef.dataObject.slideNo+"BodyText");
    feedbackDiv.style.cssText = "position:absolute;width:auto;height:auto;font-size:11px;text-align:center;top:35px;left:4px;";
    imageDiv.appendChild(feedbackDiv);

    imageDiv.style.cssText = "position:absolute;top:"+dd.dataObject.feedbackObj[0].y+"px;left:"+dd.dataObject.feedbackObj[0].x+"px;width:auto;height:auto;font-size:16px;";
    mainDiv.appendChild(imageDiv);

    $("#ID_FEEDBACK").click(function(){
	
        $("#ID_FEEDBACK").animate({"height":"0px"},"slow",function(){$("#ID_FEEDBACK").remove()});

    });
    
    $("#ID_FEEDBACK").bind('touchend', function(event) 
    {
	$("#ID_FEEDBACK").animate({"height":"0px"},"slow",function(){$("#ID_FEEDBACK").remove()});
    });
	
			
			if(_thisRef.dataObject.squence=="multi" && resObj.isCorrect==true)
			{
				
				dataObject.isViewDD = 1;			
				if(slideCnt ==1)
				{
					$("#ID_FEEDBACK").remove();
					$("#dragDropDiv").remove();
					var second = new DragDropSlide(dd.xmlData,slide2());
					slideCnt = 2;
				}else if(slideCnt ==2)
				{
					$("#ID_FEEDBACK").remove();
					$("#dragDropDiv").remove();
					var second = new DragDropSlide(dd.xmlData,slide3());
					slideCnt = 3;
				}
			}
		
		

}

dd.showHelp = function()
{
    var mainDiv = document.getElementById("dragDropDiv");
    var imageDiv = document.createElement("div");

    $(imageDiv).attr('id',dd.dataObject.instobj.helpObj[0].compId);
	var img = document.createElement('img');
    img.src = dd.dataObject.instobj.helpObj[0].image;
    img.onload = dd.imageloaded;	
	$(img).css({'width': '477px','height':'363px', 'position': 'absolute','left':'0px'});
	
	
    imageDiv.appendChild(img);
    var titleDiv = document.createElement('div');
	$(titleDiv).attr('id',"ID_DnD_inst_title");
    titleDiv.innerHTML = $(_thisRef.xmlData).find("component#ID_DnD_inst_title").text();   
    titleDiv.style.cssText = "position:absolute;width:280px;height:auto;font-size:13px;text-align:left;top:50px;left:35px;color:#ffffff;0";
    imageDiv.appendChild(titleDiv);
    
    var bodyDiv = document.createElement('div');
	$(bodyDiv).attr('id',"ID_DnD_inst_body1");
    bodyDiv.innerHTML = $(_thisRef.xmlData).find("component#ID_DnD_inst_body1").text();
    bodyDiv.style.cssText = "position:absolute;width:290px;height:auto;font-size:11px;text-align:justify;top:68px;left:39px;color:#000000;";
    imageDiv.appendChild(bodyDiv);
    
    var continueDiv = document.createElement('div');
	$(continueDiv).attr('id',"continueDiv");
    continueDiv.style.cssText = "position:absolute; cursor:pointer;top:"+dd.dataObject.instobj.helpObj[1].y+"px;left:"+dd.dataObject.instobj.helpObj[1].x+"px;width:"+dd.dataObject.instobj.helpObj[1].width+";height:"+dd.dataObject.instobj.helpObj[1].height+";font-size:16px;";
    imageDiv.appendChild(continueDiv);
    
    var continueImg = document.createElement('img');
    continueImg.src = dd.dataObject.instobj.helpObj[1].image;
    continueImg.onload = dd.imageloaded;
	$(continueImg).css({'width': '200px', 'height': '30px',  'position': 'absolute', 'top': '-22px',   'left': '-80px'});

    //continue hover comes here




    //continueImg.style.cssText = "position:absolute;top:"+dd.dataObject.instobj.helpObj[1].y+"px;left:"+dd.dataObject.instobj.helpObj[1].x+"px;width:"+dd.dataObject.instobj.helpObj[1].width+";height:"+dd.dataObject.instobj.helpObj[1].height+";font-size:16px;";
    continueDiv.appendChild(continueImg);
    
    var contText = document.createElement('div');
    contText.innerHTML = $(_thisRef.xmlData).find("component#ID_continue_btn").text();
    contText.style.cssText = "position:absolute;width:180px;height:auto;font-size:11px; left:-70px; top:-16px;text-align:center;color:#ffffff;";
    continueDiv.appendChild(contText);

    $(continueDiv).mouseover(function(){

        $(continueImg).attr("src","../../../common/images/continueImgHover.png");
        $(contText).css("color","#0D658B");
    });

    $(continueDiv).mouseout(function(){

        $(continueImg).attr("src","../../../common/images/btn_normal.png");
        $(contText).css("color","#FFFFFF");
    });
    
    imageDiv.style.cssText = "position:absolute;top:"+$(mainDiv).position().top+"px;left:"+$(mainDiv).position().left+"px;width:"+$(mainDiv).width()+";height:300px;font-size:11px;";
    mainDiv.appendChild(imageDiv);    
        
    $(continueDiv).click(function(){
        $("#ID_HELP").animate({"height":"0px"},"slow",function(){$("#ID_HELP").remove()});
    });

    $(continueDiv).bind('touchend', function(event)
    {
        $("#ID_HELP").animate({"height":"0px"},"slow",function(){$("#ID_HELP").remove()});
    });
}