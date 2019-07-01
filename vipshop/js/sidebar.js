$(function(){

	$('#sideBox .sideBtn:nth-of-type(1)').hover(function(){
		$('.slidShows').css('right','36px');
	},function(){
		$('.slidShows').css('right','-382px')
	})
	
	$('.sideClose').click(function(e){
//		e.stopPropagation();
		$('.slidShows').css('right','-382px');
	})
//	
})
