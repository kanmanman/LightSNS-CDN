$(function(){

//论坛大厅 tab点击	
$('.jinsom-bbs-tab-post-header>li').click(function(event){
$(this).addClass('on').siblings().removeClass('on');
$(this).parent().next().children().eq($(this).index()).show().siblings().hide();
});


//首页sns点击切换
$('.jinsom-home-menu li').click(function(event){
if($(this).index()==0){
$('.jinsom-mobile-home-sns-top').show();
}else{
$('.jinsom-mobile-home-sns-top').hide();	
}
});




//与我相关-消除红点
$("body").on("click",'.jinsom-chat-user-list li', function(e){
$(this).find('.item-media').find('span').remove();
});

//全站滚动事件
if($('.jinsom-right-bar').length>0){
$('.page-content').scroll(function(){
$('.jinsom-right-bar').addClass('right-bar-hidden');
clearTimeout($.data(this,'scrollTimer'));
$.data(this,'scrollTimer',setTimeout(function(){
$('.jinsom-right-bar').removeClass('right-bar-hidden');
},800));
});
}


//点击底部tab返回顶部
$(document).on('click','.tabbar a.active',function(){
console.log('aaa');
if($('.view.active .page-content').scrollTop()>100){
$('.view.active .page-content').animate({scrollTop:0},200);	
if($('.jinsom-home-menu li.on').length>0){
type=$('.jinsom-home-menu li.on').attr('type');
jinsom_post(type,'pull',this);
}

jinsom_index_notice_js_load();

}
}); 
});