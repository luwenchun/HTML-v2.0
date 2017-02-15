// JavaScript Document
//插入隐藏的居中的DIV。
document.writeln('<div id="codeDiv" class="white_content">');
document.writeln('<div style="background-color: #454c54;height:32px;text-align: right; cursor: default;">')
document.writeln('<span onclick="$(\'#codeDiv\').hide();$(\'#bg\').hide();"><img src="images/img_close.png"/></span>');
document.writeln('</div>');
document.writeln('<div id="div_codetext align=center"><textarea id="ta_code" style="width:96%;height:320px;margin-left:2%;margin-top:20px;font-size: 14px;font-family:微软雅黑;"></textarea></div></div>');

function ShowCodeDiv(linkid,strHtml){

	console.log(linkid);
	console.log(strHtml);
	$('#codeDiv').show();
	//$('#codeDiv').css('top',$('#'+linkid).position().top-100);
	html1="<!DOCTYPE html>\n<html>\n<head>\n<link href=\"controls.css\" rel=\"stylesheet\" type=\"text/css\">\n</head>\n<body>";
	strHtml=html1+strHtml;
	strHtml=strHtml+"\n</body>\n</html>"
	$('#ta_code').val(strHtml);
	//以下是阻止默认行为的代码
	if(event.prventDefault){
		event.prventDefault();
	}else {
		event.returnValue=false;
	}
};

function showBg(){
	$('#bg').show();
}

jQuery.divselect = function(divselectid,inputselectid) {
	var inputselect = $(inputselectid);
	$(divselectid+" cite").click(function(){
		var ul = $(divselectid+" ul");
		if(ul.css("display")=="none"){
			ul.slideDown("fast");
		}else{
			ul.slideUp("fast");
		}
	});
	$(divselectid+" ul li a").click(function(){
		var txt = $(this).text();
		$(divselectid+" cite").html(txt);
		var value = $(this).attr("selectid");
		inputselect.val(value);
		$(divselectid+" ul").hide();

	});
};