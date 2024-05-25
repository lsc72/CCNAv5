loadScript("../../../common/scripts/swfobject.js", registerSWF);
function registerSWF() {
    swfobject.registerObject("flashobject", "9.0.0", "../../../common/libs/expressInstall.swf");
}

(slideViewDidLoad = function (_container, _id) {
    if (_id == 1) {
        var temp = '<div id="wrapper"><div id="slidetitile">></div><div id="flowbg"><img width="297" height="35" src="flowbg.png"></div><div id="imageflow"></div><div id="year"></div><div id="standard"></div><div id="description"></div><div id="tablediv" ><table cellspacing="0" cellpadding="0"><tr><td><span id="year1" class="row1"></span></td><td><span id="year2" class="row1"></span></td><td><span id="year3" class="row1"></span></td><td><span id="year4" class="row1"></span></td><td><span id="year5" class="row1"></span></td><td><span id="year6" class="row1"></span></td><td><span id="year7" class="row1"></span></td><td><span id="year8" class="row1"></span></td><td><span id="year9" class="row1"></span></td><td><span id="year10" class="row1"></span></td><td><span id="year11" class="row1"></span></td></tr><tr><td><span id="C1R1" class="row2"></span></td><td><span id="C1R2" class="row2"></span></td><td><span id="C1R3" class="row2"></span></td><td><span id="C1R4" class="row2"></span></td><td><span id="C1R5" class="row2"></span></td><td><span id="C1R6" class="row2"></span></td><td><span id="C1R7" class="row2"></span></td><td><span id="C1R8" class="row2"></span></td><td><span id="C1R9" class="row2"></span></td><td><span id="C1R10" class="row2"></span></td><td><span id="C1R11" class="row2"></span></td></tr><tr><td><span id="C1R12" class="row3"></span></td><td><span id="C1R13" class="row3"></span></td><td><span id="C1R14" class="row3"></span></td><td><span id="C1R15" class="row3"></span></td><td><span id="C1R16" class="row3"></span></td><td><span id="C1R17" class="row3"></span></td><td><span id="C1R18" class="row3"></span></td><td><span id="C1R19" class="row3"></span></td><td><span id="C1R20" class="row3"></span></td><td><span id="C1R21" class="row3"></span></td><td><span id="C1R22" class="row3"></span></td></tr></table></div><div id="slidebar"><div id="pointer"></div></div><div id="yeardiv"><span><b>1973 &nbsp; 1980 &nbsp; 1983 &nbsp; 1985&nbsp; 1990&nbsp; 1993&nbsp; 1995&nbsp; 1998&nbsp; 1999&nbsp; 2002&nbsp; 2006</b></span></div><div id="wrapper1"><div id="div1"></div></div><div id="ID_instruction"></div></div>';
        var dom;
        $("#commonMediaText").append(temp);
        dom = new createjs.DOMElement(document.getElementById("wrapper"));
        dom.x = 0;
        dom.y = 0;
        _container.addChild(dom);
        var feeback = getMediaText("ID_C1R4")
        $("#slidetitile").html(getMediaText("ID_title"))
        $("#year").html(getMediaText("ID_year"))
        $("#standard").html(getMediaText("ID_standard"))
        $("#description").html(getMediaText("ID_description"))
        $("#year1").html(getMediaText("yr1"))
        $("#year2").html(getMediaText("yr2"))
        $("#year3").html(getMediaText("yr3"))
        $("#year4").html(getMediaText("yr4"))
        $("#year5").html(getMediaText("yr5"))
        $("#year6").html(getMediaText("yr6"))
        $("#year7").html(getMediaText("yr7"))
        $("#year8").html(getMediaText("yr8"))
        $("#year9").html(getMediaText("yr9"))
        $("#year10").html(getMediaText("yr10"))
        $("#year11").html(getMediaText("yr11"))
        $("#C1R1").html(getMediaText("ID_C1R1"))
        $("#C1R2").html(getMediaText("ID_C1R2"))
        $("#C1R3").html(getMediaText("ID_C1R3"))
        $("#C1R4").html(getMediaText("ID_C1R4"))
        $("#C1R5").html(getMediaText("ID_C1R5"))
        $("#C1R6").html(getMediaText("ID_C1R6"))
        $("#C1R7").html(getMediaText("ID_C1R7"))
        $("#C1R8").html(getMediaText("ID_C1R8"))
        $("#C1R9").html(getMediaText("ID_C1R9"))
        $("#C1R10").html(getMediaText("ID_C1R10"))
        $("#C1R11").html(getMediaText("ID_C1R11"))
        $("#C1R12").html(getMediaText("ID_C1R12"))
        $("#C1R13").html(getMediaText("ID_C1R13"))
        $("#C1R14").html(getMediaText("ID_C1R14"))
        $("#C1R15").html(getMediaText("ID_C1R15"))
        $("#C1R16").html(getMediaText("ID_C1R16"))
        $("#C1R17").html(getMediaText("ID_C1R17"))
        $("#C1R18").html(getMediaText("ID_C1R18"))
        $("#C1R19").html(getMediaText("ID_C1R19"))
        $("#C1R20").html(getMediaText("ID_C1R20"))
        $("#C1R21").html(getMediaText("ID_C1R21"))
        $("#C1R22").html(getMediaText("ID_C1R22"))
        $("#ID_instruction").html(getMediaText("ID_inst"))


        function DisplayCurrentScroll() {
            var div = document.getElementById("wrapper1");
            var divwidth = $("#tablediv")[0].scrollWidth;

            $("#div1").css("width", divwidth);
            var scroll_percentage = div.scrollLeft * 100 / divwidth;
            var pointer_left = 380 * scroll_percentage / 100;
            var envelop_hight = 100 * scroll_percentage / 100;
            var floebgheight = 104 * scroll_percentage / 100;

            $("#tablediv").scrollLeft($("#wrapper1").scrollLeft());
            $("#pointer").css("left", pointer_left);
            if (envelop_hight > 8) {
                $("#imageflow").css("height", envelop_hight);
                $("#imageflow").css("top", 85 - envelop_hight / 2);
            }

            if (floebgheight > 20) {
                $("#flowbg").css("height", floebgheight + 20);
                $("#flowbg").css("top", 77 - floebgheight / 2);
                $("#flowbg img").css("height", floebgheight + 20);
            }

        }


        function DisplayCurrentScroll2() {
            var div = document.getElementById("tablediv");
            var divwidth = $("#tablediv")[0].scrollWidth;
            $("#div1").css("width", divwidth);
            var scroll_percentage = div.scrollLeft * 100 / divwidth;
            var pointer_left = 380 * scroll_percentage / 100;
            var envelop_hight = 100 * scroll_percentage / 100;
            var floebgheight = 104 * scroll_percentage / 100;


            $("#pointer").css("left", pointer_left);
            if (envelop_hight > 8) {
                $("#imageflow").css("height", envelop_hight);
                $("#imageflow").css("top", 85 - envelop_hight / 2);
            }

            if (floebgheight > 20) {
                $("#flowbg").css("height", floebgheight + 20);
                $("#flowbg").css("top", 77 - floebgheight / 2);
                $("#flowbg img").css("height", floebgheight + 20);
            }

        }

        $("#wrapper1").scroll(function () {
            DisplayCurrentScroll();
        });

        $("#tablediv").scroll(function () {
            DisplayCurrentScroll2();
        });


    }


})