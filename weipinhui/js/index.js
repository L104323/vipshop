$(function(){
	//轮播
	slider();
	function slider(){
		var iNow = 0;				
		setInterval(function(){
			iNow++;
			if(iNow>$('.sPic').length-1){
				iNow = 0;
				$('#picBox').css('transition','')
				changePic();
			}else{
				$('#picBox').css('transition','left 0.2s')
				changePic();
			}
//      			console.log(iNow)
		},2000)	
		
		function changePic(){
			var nowleft = -iNow*974;
//					console.log( nowleft );			
			$('#picBox').css('left',nowleft)
		}
	}
	//吸顶
	$(document).scroll(function(){
		var top = $(document).scrollTop();
//					console.log(top)
		if(top>=191){
			$('#bottomNav').css({position:'fixed',top:'0'});						
			$('#bottomNav').css('backgroundColor','white');
			$('#bottomNav').css('z-index','2');	
			$('#bottomNav').css('boxShadow','0 2px 3px gray');
		}else{
			$('#bottomNav').css('position','static');
			$('#bottomNav').css('boxShadow','none');
		} 
	})
	
	//动态创建1女装
	$.each(inf,function(index,data){	
//					console.log(data);
//					console.log(data.num);
//					console.log(index)
		var str = `<a href="#">
						<div class="girlBox l">
							<img src="${data.src}" class="gPic"/>
							<div class="hidden">
								<object><a href="#">收藏品牌</a></object>
							</div>
							<div class="brandInfo">
								<span class="discount">
									<span class="num">${data.num}</span>
									<span class="nored">折起</span>
								</span>	
								<span class="name nored">${data.name}</span>
								<span class="time">
									<i class="timeIcon"></i>
									<span class="days nored">${data.days}</span>
								</span>
							</div>
							<div class="opacityBox"></div>
						</div>
					</a>`;					
		if(index%2==0){
			str = `<a href="#">
						<div class="girlBox r">
							<img src="${data.src}" class="gPic"/>
							<div class="hidden">
								<object><a href="#">收藏品牌</a></object>
							</div>
							<div class="brandInfo">
								<span class="discount">
									<span class="num">${data.num}</span>
									<span class="nored">折起</span>
								</span>	
								<span class="name nored">${data.name}</span>
								<span class="time">
									<i class="timeIcon"></i>
									<span class="days nored">${data.days}</span>
								</span>
							</div>
							<div class="opacityBox"></div>
						</div>
					</a>`;
		}
		$('.floor1').append(str);
		$('.girlBox').css('margin-bottom','20px');				
	})	
	
	//hover透明度定时器
	$('.floor1').on('mouseenter','.girlBox',function(){
		$('.opacityBox').eq($('.girlBox').index(this)).fadeIn('2s');
		$('.opacityBox').fadeOut('2s');
		$('.girlBox a').css('color','none');
	})		
						
				
})