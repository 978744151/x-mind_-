$(function () {
	
	function reSize() {
		var wdWith = $(window).width();
		var isSmallScreen = wdWith < 768;
		$("#main_ad >.carousel-inner > .item").each(function(i,item){
			var $item = $(item);//转换成jq对象
		// var imgSrc = $item.data(isSmallScreen>768?'image-lg':'image-xs');
		// $item.css("backgroundImage","url('+imgSrc+')");
			var imgSrc =
       		 isSmallScreen ? 
        	$item.data('image-xs') 
        	: $item.data('image-lg');
        	$item.css("backgroundImage","url('" + imgSrc + "')");
			// 因为我们需要小图时 尺寸等比例变化，
		//所以小图时我们使用img方式
     		if(isSmallScreen){
     			$item.html('<img src="'+imgSrc+'" alt="" />');
     		}else {
     			$item.empty();
     		}
		});
		
	}
	$(window).on("resize",reSize).trigger('resize');
});