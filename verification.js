function verHide(borderColor){
	if(borderColor){
		$(".input-edit").css("borderColor",borderColor);
	}else{
		$(".input-edit").css("borderColor","rgb(204, 208, 212)");
	}
	$(".verification-mes").hide();
	$(".verification-mes2").hide();
}
function verifi(eve,ele){
	if(eve=="submit"){
	verHide();
	var requiredInp=$("input[data-verification-rule='required']:visible").add("select[data-verification-rule='required']:visible").add("textarea[data-verification-rule='required']:visible");
	var phoneInp=$("input[data-verification-rule='phone']:visible");
	var emailInp=$("input[data-verification-rule='email']:visible");
	var engInp=$("input[data-verification-rule='English']:visible");
	var numInp=$("input[data-verification-rule='number']:visible");
	var decimalInp=$("input[data-verification-rule='decimal']:visible");
	var customInp=$("input[data-verification-rule='custom']:visible");
	var dateInp=$("input[data-verification-rule='date']:visible");
	var retBel=true;//返回值，是否通过
	var verObj={required:[],phone:[],email:[],englisj:[],custom:[],num:[],decimal:[],date:[]};//表单状态
	//非空验证
	for(var reqVer=0;reqVer<requiredInp.length;reqVer++){
		if(!$(requiredInp[reqVer]).val()||$(requiredInp[reqVer]).val().length<=0){
			$(requiredInp[reqVer]).siblings(".verification-mes").show().html($(requiredInp[reqVer]).data("verification-message"));
			$(requiredInp[reqVer]).css("borderColor","#f00");
			verObj.required[reqVer]={code:"0",ele:$(requiredInp).eq(reqVer).prop("id")};
		}else{
			$(requiredInp[reqVer]).siblings(".verification-mes").hide();
			$(requiredInp[reqVer]).css("borderColor","rgb(204, 208, 212)");
			verObj.required[reqVer]={code:"1",ele:$(requiredInp).eq(reqVer).prop("id")};
		}
	}
	//验证手机号
	for(var phoneVer=0;phoneVer<phoneInp.length;phoneVer++){
		if($(phoneInp[phoneVer]).data("required-other")=="phone"){
			if(!/^1[1-9][0-9]{9}$/.test($(phoneInp[phoneVer]).val())&&$(phoneInp[phoneVer]).val().length>0){
				$(phoneInp[phoneVer]).siblings(".verification-mes").show().html($(phoneInp[phoneVer]).data("verification-message"));
				$(phoneInp[phoneVer]).css("borderColor","#f00");
				verObj.phone[phoneVer]={code:"0",ele:$(phoneInp).eq(phoneVer).prop("id")};
			}else{
				$(phoneInp[phoneVer]).siblings(".verification-mes").hide();
				$(phoneInp[phoneVer]).css("borderColor","rgb(204, 208, 212)");
				verObj.phone[phoneVer]={code:"1",ele:$(phoneInp).eq(phoneVer).prop("id")};
			}
		}else{
			if(!/^1[1-9][0-9]{9}$/.test($(phoneInp[phoneVer]).val())){
				$(phoneInp[phoneVer]).siblings(".verification-mes").show().html($(phoneInp[phoneVer]).data("verification-message"));
				$(phoneInp[phoneVer]).css("borderColor","#f00");
				verObj.phone[phoneVer]={code:"0",ele:$(phoneInp).eq(phoneVer).prop("id")};
			}else{
				$(phoneInp[phoneVer]).siblings(".verification-mes").hide();
				$(phoneInp[phoneVer]).css("borderColor","rgb(204, 208, 212)");
				verObj.phone[phoneVer]={code:"1",ele:$(phoneInp).eq(phoneVer).prop("id")};
			}
		}
	}
	//验证数字
	for(var numVer=0;numVer<numInp.length;numVer++){
		if($(numInp[numVer]).data("required-other")=="number"){
			if(!/^[0-9]+$/.test($(numInp[numVer]).val())&&$(numInp[numVer]).val().length>0){
				$(numInp[numVer]).siblings(".verification-mes").show().html($(numInp[numVer]).data("verification-message"));
				$(numInp[numVer]).css("borderColor","#f00");
				verObj.num[numVer]={code:"0",ele:$(numInp).eq(numVer).prop("id")};
			}else{
				$(numInp[numVer]).siblings(".verification-mes").hide();
				$(numInp[numVer]).css("borderColor","rgb(204, 208, 212)");
				verObj.num[numVer]={code:"1",ele:$(numInp).eq(numVer).prop("id")};
			}
		}else{
			if(!/^[0-9]+$/.test($(numInp[numVer]).val())){
				$(numInp[numVer]).siblings(".verification-mes").show().html($(numInp[numVer]).data("verification-message"));
				$(numInp[numVer]).css("borderColor","#f00");
				verObj.num[numVer]={code:"0",ele:$(numInp).eq(numVer).prop("id")};
			}else{
				$(numInp[numVer]).siblings(".verification-mes").hide();
				$(numInp[numVer]).css("borderColor","rgb(204, 208, 212)");
				verObj.num[numVer]={code:"1",ele:$(numInp).eq(numVer).prop("id")};
			}
		}
	}
	//验证两位小数
	for(var numVer=0;numVer<decimalInp.length;numVer++){
		if($(decimalInp[numVer]).data("required-other")=="decimal"){
			if(!/^\d+(?:\.\d{1,2})?$/.test($(decimalInp[numVer]).val())&&$(decimalInp[numVer]).val().length>0){
				$(decimalInp[numVer]).siblings(".verification-mes").show().html($(decimalInp[numVer]).data("verification-message"));
				$(decimalInp[numVer]).css("borderColor","#f00");
				verObj.decimal[numVer]={code:"0",ele:$(decimalInp).eq(numVer).prop("id")};
			}else{
				$(decimalInp[numVer]).siblings(".verification-mes").hide();
				$(decimalInp[numVer]).css("borderColor","rgb(204, 208, 212)");
				verObj.decimal[numVer]={code:"1",ele:$(decimalInp).eq(numVer).prop("id")};
			}
		}else{
			if(!/^\d+(?:\.\d{1,2})?$/.test($(decimalInp[numVer]).val())){
				$(decimalInp[numVer]).siblings(".verification-mes").show().html($(decimalInp[numVer]).data("verification-message"));
				$(decimalInp[numVer]).css("borderColor","#f00");
				verObj.decimal[numVer]={code:"0",ele:$(decimalInp).eq(numVer).prop("id")};
			}else{
				$(decimalInp[numVer]).siblings(".verification-mes").hide();
				$(decimalInp[numVer]).css("borderColor","rgb(204, 208, 212)");
				verObj.decimal[numVer]={code:"1",ele:$(decimalInp).eq(numVer).prop("id")};
			}
		}
	}
	//验证邮箱
	for(var emailVer=0;emailVer<emailInp.length;emailVer++){
		if($(emailInp[emailVer]).data("required-other")=="email"){
			if(!/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/.test($(emailInp[emailVer]).val())&&$(emailInp[emailVer]).val().length>0){
				$(emailInp[emailVer]).siblings(".verification-mes").show().html($(emailInp[emailVer]).data("verification-message"));
				$(emailInp[emailVer]).css("borderColor","#f00");
				verObj.email[emailVer]={code:"0",ele:$(emailInp).eq(emailVer).prop("id")};
			}
			else{
				$(emailInp[emailVer]).siblings(".verification-mes").hide();
				$(emailInp[emailVer]).css("borderColor","rgb(204, 208, 212)");
				verObj.email[emailVer]={code:"1",ele:$(emailInp).eq(emailVer).prop("id")};
			}
		}else{
			if(!/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/.test($(emailInp[emailVer]).val())){
				$(emailInp[emailVer]).siblings(".verification-mes").show().html($(emailInp[emailVer]).data("verification-message"));
				$(emailInp[emailVer]).css("borderColor","#f00");
				verObj.email[emailVer]={code:"0",ele:$(emailInp).eq(emailVer).prop("id")};
			}
			else{
				$(emailInp[emailVer]).siblings(".verification-mes").hide();
				$(emailInp[emailVer]).css("borderColor","rgb(204, 208, 212)");
				verObj.email[emailVer]={code:"1",ele:$(emailInp).eq(emailVer).prop("id")};
			}
		}
	
	}
	//验证日期
	for(var dateVer=0;dateVer<dateInp.length;dateVer++){
		if($(dateInp[dateVer]).data("required-other")=="date"){
			if(!RQcheck($(dateInp[dateVer]).val())&&$(dateInp[dateVer]).val().length>0){
				$(dateInp[dateVer]).siblings(".verification-mes").show().html($(dateInp[dateVer]).data("verification-message"));
				$(dateInp[dateVer]).css("borderColor","#f00");
				verObj.date[dateVer]={code:"0",ele:$(dateInp).eq(dateVer).prop("id")};
			}
			else{
				$(dateInp[dateVer]).siblings(".verification-mes").hide();
				$(dateInp[dateVer]).css("borderColor","rgb(204, 208, 212)");
				verObj.date[dateVer]={code:"1",ele:$(dateInp).eq(dateVer).prop("id")};
			}
		}else{
			if(!RQcheck($(dateInp[dateVer]).val())){
				$(dateInp[dateVer]).siblings(".verification-mes").show().html($(dateInp[dateVer]).data("verification-message"));
				$(dateInp[dateVer]).css("borderColor","#f00");
				verObj.date[dateVer]={code:"0",ele:$(dateInp).eq(dateVer).prop("id")};
			}
			else{
				$(dateInp[dateVer]).siblings(".verification-mes").hide();
				$(dateInp[dateVer]).css("borderColor","rgb(204, 208, 212)");
				verObj.date[dateVer]={code:"1",ele:$(dateInp).eq(dateVer).prop("id")};
			}
		}
	
	}
	//自定义规则验证
	for(var customVer=0;customVer<customInp.length;customVer++){
		//兼容IE8及以下
		if(window.execScript){
			
			if(!window.execScript($(customInp[customVer]).data("verification-custom")).test($(customInp[customVer]).val())){
				$(customInp[customVer]).siblings(".verification-mes").show().html($(customInp[customVer]).data("verification-message"));
				verObj.customInp[customVer]=0;
			}else{
				$(customInp[customVer]).siblings(".verification-mes").hide();
				verObj.customInp[customVer]=1;
			}
		}else{
			//标准浏览器
			if(!eval($(customInp[customVer]).data("verification-custom")).test($(customInp[customVer]).val())){
				$(customInp[customVer]).siblings(".verification-mes").show().html($(customInp[customVer]).data("verification-message"));
				verObj.custom[customVer]=0;
			}else{
				$(customInp[customVer]).siblings(".verification-mes").hide();
				verObj.custom[customVer]=1;
			}
		}
	}
	for(var key in verObj){
		for(var verInd=0;verInd<verObj[key].length;verInd++){
			if(verObj[key].length>0){
				if(verObj[key][verInd]["code"]=="0"){
					return verObj[key][verInd]["ele"];	
				}
			}
		}
	}
		return "verGet";
}else if(eve=="blur"){
	if($(ele).data("verification-rule")=="required"){
		if($(ele).val().length<=0){
			$(ele).siblings(".verification-mes").show().html($(ele).data("verification-message"));
			$(ele).css("borderColor","#f00");
		}else{
			$(ele).siblings(".verification-mes").hide();
			$(ele).css("borderColor","rgb(204, 208, 212)");
		}
	}else if($(ele).data("verification-rule")=="phone"){
		if(!/^(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/.test($(ele).val())){
			$(ele).siblings(".verification-mes").show().html($(ele).data("verification-message"));
			$(ele).css("borderColor","#f00");
		}else{
			$(ele).siblings(".verification-mes").hide();
			$(ele).css("borderColor","rgb(204, 208, 212)");
		}
	}else if($(ele).data("verification-rule")=="number"){
		if(!/^[0-9]+$/.test($(ele).val())){
			$(ele).siblings(".verification-mes").show().html($(ele).data("verification-message"));
			$(ele).css("borderColor","#f00");
		}else{
			$(ele).siblings(".verification-mes").hide();
			$(ele).css("borderColor","rgb(204, 208, 212)");
		}
	}else if($(ele).data("verification-rule")=="email"){
		if(!/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/.test($(ele).val())){
			$(ele).siblings(".verification-mes").show().html($(ele).data("verification-message"));
			$(ele).css("borderColor","#f00");
			return false;
		}else{
			$(ele).siblings(".verification-mes").hide();
			$(ele).css("borderColor","rgb(204, 208, 212)");
			return true;
		}
	}
}
	
}
//日期验证规则
function RQcheck(RQ) {
var date = RQ;
var result = date.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);

if (result == null)
	return false;
var d = new Date(result[1], result[3] - 1, result[4]);
return (d.getFullYear() == result[1] && (d.getMonth() + 1) == result[3] && d.getDate() == result[4]);

}
