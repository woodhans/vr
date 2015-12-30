$(function(){
	window.addEventListener("load",function(){FastClick.attach(document.body)},false);
	$('[data-function]').on('click',function(){
		eval($(this).data('function'));
	})
})
var sUrl=window.location.href;
function showInfo(){
	if(window.localStorage.getItem('userinfo')){
		username=$.parseJSON(window.localStorage.getItem('userinfo')).username;
		$('#hellopanel').show().find('span').text(username)
	}else{
		$('#logpanel').show();
	}
}
showInfo();
var href=window.localStorage.getItem('href')||"index.html";
function checklogin(f){
	f=f||href;
	window.localStorage.setItem('href',f);
	if(window.localStorage.getItem('userinfo')){
		window.location.href=href;
	}
	else
	register(f);
}
function checklogin2(a){
	if(window.localStorage.getItem('userinfo')){
		switch (a){
			case "1":
			alert('联络互动开发者平台资源下载中心\n将于12月10日正式开放下载，敬请期待!');
			break;
			case "2":
			alert('联络互动开发者平台资源下载中心\n内部测试中，敬请期待!');
			break;
			case "3":
			alert('联络互动开发者平台资源下载中心\n内部测试中，敬请期待!');
			break;
		}
	}else
	register("download.html");
}
function exit(){
	window.localStorage.removeItem('userinfo');
	window.location.reload();
}
function login(f){
	f=f||href;
	window.localStorage.setItem('href',f);
	window.location.href="login.html";
}
function register(f){
	f=f||href;
	window.localStorage.setItem('href',f);
	window.location.href="register.html"
}
function forget(){
	window.location.href="forget.html";
}
var $cur=$('li.active');
$('#navbar').hover(function(){
	$cur.removeClass('active');
},function(){
	$cur.addClass('active')
})
