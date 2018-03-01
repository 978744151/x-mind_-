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

	//初始化tooltips
	$('[data-toggle="tooltip"]').tooltip();

	//获取产品列表ul 的宽度
	var $ulContainer = $(".nav-tabs");
	var width = 25;
	//因为ul-warpper里面有设置padding-left:20px所以这里起始值给个>20的
	$ulContainer.children().each(function(index,ele){
		width += ele.clientWidth;
	});
	if(width > $(window).width()) {
	$ulContainer
	.css("width",width)
	.parent().css("overflow-x","scroll");
//判断tabs比屏幕还大的时候就设置横向滚动条
	}


	//设置news-title的text
	var $newsTitle = $(".news-title");
	// var $dataTitle = $("#news .nav-pills a").data("title");
	$("#news .nav-pills a").on("click",function(){
		$this = $(this);
		var $dataTitle =  $this.data("title");
		$newsTitle.text($dataTitle);
	})
});