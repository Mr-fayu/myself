
var kefu = [
	{id:"xiaomo",name:"小莫",QQ:"",weixin:"13241196009",tel:"13241196009",wximg:"picture/13241196009.jpg",nicheng:"美女",sex:"她"},
];

var kefuIndex;
var urlArr = window.location.href.toLowerCase().split('#');
var kefuInfo = $.cookie("kefusys101_64");
if(!kefuInfo){
	if(urlArr.length > 1){
		for(var i=0;i<kefu.length;i++){
			if(kefu[i].id == urlArr[urlArr.length-1]){
				kefuIndex = i;
				break;
			}
		}
		if(!kefuIndex){
			kefuIndex = Math.floor(Math.random()*kefu.length);
		}
	}else{
		kefuIndex = Math.floor(Math.random()*kefu.length);
	}
	kefuInfo = kefu[kefuIndex];
	$.cookie('kefusys101_64',JSON.stringify(kefuInfo),{expires: 360});
}else{
	kefuInfo = JSON.parse(kefuInfo);
}
history.replaceState({id:kefuInfo.id},document.title,"#"+kefuInfo.id);

$(function(){
	$(".kefuName").text(kefuInfo.name);
	$(".kefuTel").text(kefuInfo.tel);
	$(".kefuSex").text(kefuInfo.sex);
	$(".kefuQQ").text(kefuInfo.QQ);
	$(".kefuWx").text(kefuInfo.weixin);
	$(".kefuniCheng").text(kefuInfo.nicheng);
	$(".kefuImg").attr('src',kefuInfo.wximg);
	$(".kefuBoda").attr('href',"tel:"+kefuInfo.tel);
	$(".kefuBoda").text(kefuInfo.tel);
});