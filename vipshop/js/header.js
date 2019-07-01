$(function(){
	$('.addressUl .addrChoice').click(function(){
		var idx=$(this).index();
		$('.addressUl .addrChoice').eq(idx).css({'background':'white','border-top':'1.5px solid rgb(241, 1, 128)','font-weight':'bold'});		
		$(this).siblings().css({'background':'#f8f8f8','border-top':'1px solid #ccc','font-weight':'normal'});
		$('.addressUl .addrChoice').eq(idx).children().css('display','block');
		$(this).siblings().children().css('display','none');
		
		$('.addRow').eq(idx).show();
		$('.addRow').not($('.addRow').eq(idx)).hide();		
	})
	
	
	$('#address').click(function(){
		$('#address span').css({'background':'white','border':'1px solid #ccc','border-bottom':'none','height':'30spx'});
		$('#address .addresBox').show();
	})
	//关闭
	$('.addresBox .close').click(function(e){
		//阻止冒泡。否则以父级点击显示事件优先，隐藏不了
		e.stopPropagation();
		$('.addresBox').hide();		
		$('#address span').css({'background':'#f5f5f5','border':'1px solid #f5f5f5','border-bottom':'none','height':'28spx'});
	})
	//省份
	$('.province .pro').click(function(){
		var idx=$(this).index();
		$('#address span i').text($('.province .pro').eq(idx).text());
		$('.province .pro a').eq(idx).css({'background':'rgb(241, 1, 128)','color':'white'});
		$(this).siblings().children().css({'background':'white','color':'black'});
	})
	//城市
	$('.city .pro').click(function(){
		var idx=$(this).index();
		$('#address span i').text($('.city .pro').eq(idx).text());
		$('.city .pro a').eq(idx).css({'background':'rgb(241, 1, 128)','color':'white'});
		$(this).siblings().children().css({'background':'white','color':'black'});
	})
	//三级菜单
	$('.bottomNavBton:nth-child(1)').hover(function(){
		$('#indexUl').slideDown(500);
	},
	function(){
		$('#indexUl').slideUp(500);
		$('#indexUl .cate').css('color','white');
	})
	//搜索栏获取和失去焦点
	$('#put').focus(function(){
		$('.history').css('display','block');
	})
	$('#put').blur(function(){
		$('.history').css('display','none');
	})
})
