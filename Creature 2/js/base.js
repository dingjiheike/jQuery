
//(function($){
	$(".top_pic").mouseover(function(){
		$(this).hide();
		$(".top_pic_big").show();
	})
	$(".top_pic").mouseout(function(){
		$(this).show();
		$(".top_pic_big").hide();
	})
	$(".top_pic_big").mouseover(function(){
		$(".top_pic").hide();
		$(this).show();
	});
	$(".top_pic_big").mouseout(function(){
		$(".top_pic").show();
		$(this).hide();
	})
//}