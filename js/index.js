// JavaScript Document
dwr.engine.setRpcType(dwr.engine.ScriptTag);
currentplaydwr._path = "http://market2.yesky.com/currentplay/dwr/"; 
var fontsize=(document.documentElement.clientWidth||document.body.clientWidth)/32;
document.getElementsByTagName("body")[0].style.fontSize=fontsize+"px";
$(function(){
	setTimeout(function(){
		$(".anilist").addClass("player");
		
		},1000);
$(".fuceng").css({"marginTop":-$(".fuceng").height()/2})
var browser=navigator.appName 
	var b_version=navigator.appVersion 
	var version=b_version.split(";");  
	if(browser=="Microsoft Internet Explorer" ) 
	{ 
	
	$(".dlone dd").css({"opacity":1});
	$(".dlthree dd").css({"opacity":1});
	$(".dltwo dd").css({"opacity":1});
	$(".logo01").css({"opacity":1});
	$(".logo02").css({"opacity":1});
	
	}
	
/*ÎÄ×Ö¹ö¶¯pc*/
var ddlength=$(".dlpclist dd").length;
var ddheight=$(".dlpclist dd").height();
$(".dlpclist dl").height(ddheight*ddlength/fontsize+"em");
var movepx=-ddheight/fontsize+"em";
function moveUppc(){
		$(".dlpclist dl").animate({"marginTop":movepx},2000,function(){
			$(".dlpclist dl dd").eq(0).appendTo($(".dlpclist dl"));
			$(".dlpclist dl").css("marginTop",0);
			clearTimeout(timer);
			timer=setTimeout(moveUppc,2000);
			});
		
		}
var timer=setTimeout(moveUppc,2000);
/*ÎÄ×Ö¹ö¶¯wap*/
var wapddlength=$(".wapdl dd").length;
var wapddheight=$(".wapdl dd").height();
$(".wapdl").height(wapddheight*wapddlength/fontsize+"em");
var wapmovepx=-wapddheight/fontsize+"em";
function moveUpwap(){
		$(".wapdl").animate({"marginTop":wapmovepx},1000,function(){
			$(".wapdl dd").eq(0).appendTo($(".wapdl"));
			$(".wapdl").css("marginTop",0);
			clearTimeout(waptimer);
			waptimer=setTimeout(moveUpwap,1000);
			});
		
		}
var waptimer=setTimeout(moveUpwap,2000);

/*±ß¿òìÅ¿áÐ§¹û*/
$(".yearright dd").mouseenter(function(){
	$(this).children("div:even").animate({
		"width":"100%"
	},500).css("background","#c2a46a");
	$(this).children("div:odd").animate({
		"height":"100%"
	},500).css("background","#c2a46a");
});

$(".yearright dd").mouseleave(function(){
	
	$(this).children("div:even").animate({
		"width":"0%"
	},500).css("background","#000");
	$(this).children("div:odd").animate({
		"height":"0%"
	},500).css("background","#000");

});
$(".newlist dd").mouseenter(function(){
	$(this).children("div:even").animate({
		"width":"100%"
	},500).css("background","#c2a46a");
	$(this).children("div:odd").animate({
		"height":"100%"
	},500).css("background","#c2a46a");
});

$(".newlist dd").mouseleave(function(){
	
	$(this).children("div:even").animate({
		"width":"0%"
	},500).css("background","#000");
	$(this).children("div:odd").animate({
		"height":"0%"
	},500).css("background","#000");

});

/*ÁÁµã»î¶¯ÂÖ×ª*/
var ldlength=$(".balistcon dl dd").length;
var ldddwidth=$(".balistcon dl dd").outerWidth(true)/fontsize;
var marginLeft=$(".balistcon dl dd").css("marginLeft");

$(".balistcon dl").width(ldddwidth*ldlength+300+"em");
if(document.documentElement.clientWidth>768||document.body.clientWidth>768){
$(".rightbtn").click(function(){
	if($(".balistcon dl").is(":animated")){return;}
	$(".balistcon dl").animate({"marginLeft":-ldddwidth+"em"},1000,function(){
		$(".balistcon dl dd").eq(0).appendTo($(".balistcon dl"));
		$(".balistcon dl").css("marginLeft",0);
		
		})
	
	})
$(".leftbtn").click(function(){
	if($(".balistcon dl").is(":animated")){return;}
	$(".balistcon dl dd").last().prependTo($(".balistcon dl"));
	$(".balistcon dl").css("marginLeft",-ldddwidth+"em");
	$(".balistcon dl").animate({"marginLeft":0},1000);
	
	
	})
}else{
	$(".rightbtn").click(function(){
	if($(".balistcon dl").is(":animated")){return;}
	var ddwidthwap=$(".balistcon dl dd").outerWidth(true);
	var ddmarginleft=Math.abs(parseFloat($(".balistcon dl").css("marginLeft")));
	$(".balistcon dl").animate({"marginLeft":-ddwidthwap-ddmarginleft+"px"},1000,function(){
		$(".balistcon dl dd").eq(0).appendTo($(".balistcon dl"));
		$(".balistcon dl").css("marginLeft",-ddmarginleft+"px");
		
		})
	
	})
	$(".leftbtn").click(function(){
	if($(".balistcon dl").is(":animated")){return;}
	var ddwidthwap=$(".balistcon dl dd").outerWidth(true);
	var ddmarginleft=Math.abs(parseFloat($(".balistcon dl").css("marginLeft")));
	$(".balistcon dl dd").last().prependTo($(".balistcon dl"));
	$(".balistcon dl").css("marginLeft",-ddwidthwap-ddmarginleft+"px");
	$(".balistcon dl").animate({"marginLeft":-ddmarginleft+"px"},1000);
	
	})
	
	}
/*Íù½ì»Ø¹Ë*/

var backlength=$(".reviewlist dd").length;
$(".reviewlist dl").width(6.563*backlength+"em");
$(".next").click(function(){
	if($(".reviewlist dl").is(":animated")){return;}
	$(".reviewlist dl").animate({"marginLeft":-6.563+"em"},1000,function(){
		$(".reviewlist dl dd").eq(0).appendTo($(".reviewlist dl"));
		$(".reviewlist dl").css("marginLeft",0);
		
		})
	
	})
$(".prev").click(function(){
	if($(".reviewlist dl").is(":animated")){return;}
	$(".reviewlist dl dd").last().prependTo($(".reviewlist dl"));
	$(".reviewlist dl").css("marginLeft",-6.563+"em");
	$(".reviewlist dl").animate({"marginLeft":0},1000);
	
	
	})






	$(window).resize(function(){
		clearTimeout(timer);
		clearTimeout(waptimer);
	    fontsize=document.documentElement.clientWidth/32;
		document.getElementsByTagName("body")[0].style.fontSize=fontsize+"px";
	    ddlength=$(".dlpclist dd").length;
	   ddheight=$(".dlpclist dd").height();
	   $(".dlpclist dl").height(ddheight*ddlength/fontsize+"em");
	   movepx=-ddheight/fontsize+"em";
	   timer=setTimeout(moveUppc,2000);
	   wapddlength=$(".wapdl dd").length;
	   wapddheight=$(".wapdl dd").height();
       $(".wapdl").height(wapddheight*wapddlength/fontsize+"em");
       wapmovepx=-wapddheight/fontsize+"em";
	   waptimer=setTimeout(moveUpwap,2000);
	   /*wapÂÖ×ª*/
	    ldlength=$(".balistcon dl dd").length;
	    ldddwidth=$(".balistcon dl dd").outerWidth(true)/fontsize;
        $(".balistcon dl").width(ldddwidth*ldlength+"em");
	
		})

})

if($(window).width()<768){
	$(".fuceng").css({position:"fixed",top:"50%"})
}
	
/*¸¡²ã*/	
$(".starimg").click(function(){
	var heights=($(window).height()-$(".fuceng").height())/2;
	var scrolltop=$(window).scrollTop()+heights;
	//$(".fuceng").css({"top":scrolltop+"px","display":"block"});
	$(".fuceng").css("display","block");
	$(".floatBottom").css("display","block");
	})
$(".close").click(function(){
	$(".fuceng").css("display","none");
	$(".floatBottom").css("display","none");
	})
$(".votewap h2").click(function(){
	var heights=($(window).height()-$(".fuceng").height())/2;
	var scrolltop=$(window).scrollTop()+heights;
	$(".fuceng").css("display","block");
	$(".floatBottom").css("display","block");
//	$(".fuceng").css({"top":scrolltop+"px","display":"block"});
	
	})
/*±íµ¥ÑéÖ¤*/
$(".company input").focus(function(){
	if($(this).val()==$(this).attr("data-placeholder")){
		$(this).val("");
		}
	
	})
$(".company input").blur(function(){
	if($(this).val()==""){
		$(this).val($(this).attr("data-placeholder"));
		}
	
	})
$(".email input").focus(function(){
	if($(this).val()==$(this).attr("data-placeholder")){
		$(this).val("");
		}
	
	})
$(".email input").blur(function(){
	if($(this).val()==""){
		$(this).val($(this).attr("data-placeholder"));
		}
	
	})
$(".submitbtn").click(function(){
	var zzMail = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
	var zzphone=/^1[3|4|5|7|8][0-9]{9}$/;
	if($(".fuceng").find("input[name='field_1']").val() =="" || $(".fuceng").find("input[name='field_1']").val() =="ÇëÊäÈë..." ){
			$(".infoxx").fadeIn().fadeOut(3000);
			$(".fuceng").find("input[name='field_1']").focus();
			
			return false;
		}else if($(".fuceng").find("input[name='field_2']").val() =="" ){
			$(".infoxx2").fadeIn().fadeOut(3000);
			$(".fuceng").find("input[name='field_2']").focus();
			
			return false;
		}else if($(".fuceng").find("input[name='field_3']").val() ==""){
			$(".infoxx3").fadeIn().fadeOut(3000);
			$(".fuceng").find("input[name='field_3']").focus();
		
			return false;
		}else if($(".fuceng").find("input[name='field_4']").val() ==""){
			$(".infoxx4").html("ÊÖ»úºÅÂë²»ÄÜÎª¿Õ!").fadeIn().fadeOut(3000);
			$(".fuceng").find("input[name='field_4']").focus();
			return false;
		}else if(! zzphone.test( $.trim($(".fuceng").find("input[name='field_4']").val()) )){
			$(".infoxx4").html("ÊÖ»úºÅÂë¸ñÊ½´íÎó!").fadeIn().fadeOut(3000);
			$(".fuceng").find("input[name='field_4']").focus();
			$(".fuceng").find("input[name='field_4']").val("");
			return false;
		}else if($(".fuceng").find("input[name='field_5']").val() =="" || $(".fuceng").find("input[name='field_5']").val() =="ÇëÌîÐ´ÆóÒµÓÊÏä" ){
			$(".infoxx5").fadeIn().fadeOut(3000);
			$(".fuceng").find("input[name='field_5']").focus();
			return false;
		}else if(! zzMail.test( $.trim($(".fuceng").find("input[name='field_5']").val()) )){
			$(".infoxx5").html("ÆóÒµÓÊÏä¸ñÊ½´íÎó!").fadeIn().fadeOut(3000);
			$(".fuceng").find("input[name='field_5']").focus();
			$(".fuceng").find("input[name='field_5']").val("");
			return false;
		}
	$(".loadding").css("display","block");
	
	var array = new Array();
        array[0] = '1681';
        array[1] = 'yesky.com';
        array[2] = $("input[name='field_1']").val();
        array[3] = $("input[name='field_2']").val();
		array[4] = $("input[name='field_3']").val();
		array[5] = $("input[name='field_4']").val();
		array[6] = $("input[name='field_5']").val();
		
        currentplaydwr.getsubmitinfo(array, function(resutl){
           if(resutl==1){
			   $(".loadding").css("display","none");
              alert("Ìá½»ÐÅÏ¢³É¹¦!");
			  $(".floatBottom").hide();
			  $(".fuceng").hide();
			  $("input").val("");
		   }
		   else{
              alert("ÓÑÇéÌáÊ¾\n\nÌá½»ÐÅÏ¢Ê§°Ü\n\nÇëÉÔºóÔÙÊÔ");
		   }
        });
	
	
	
	})
	
function browserRedirect() {
    var sUserAgent = navigator.userAgent.toLowerCase();
    var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
    var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
    var bIsMidp = sUserAgent.match(/midp/i) == "midp";
    var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
    var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
    var bIsAndroid = sUserAgent.match(/android/i) == "android";
    var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
    var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
    if (!(bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) ){
       /*Ìí¼Ócss3Ð§¹û*/
var arr=[];
$.each($(".layer"),function(index,item){
	arr.push($(item).offset().top);
	
	})
$(window).scroll(function(){
	var scrollval=$(window).scrollTop();
	for(var i=0;i<arr.length;i++){
		if(scrollval>=arr[i]-300){
			if(i==0){
				$(".baleft").addClass("active");
				}else if(i==1){
					$(".scientright").addClass("active");
					}else if(i==2){
					$(".yearleft").addClass("active");
					}else if(i==3){
						$(".dlone dd").addClass("flipAni");
						$(".dlthree dd").addClass("flipAni2");
						$(".dltwo dd").addClass("flipAni3");
						}else if(i==4){
						$(".logo01").addClass("flipAni");
						$(".logo02").addClass("flipAni");
						$(".bigvlist").addClass("active");
						}
			
			}
		}
	
	
	})
	
		
    }
}
browserRedirect();
	
	

 



