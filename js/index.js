$(function(){

	var lis=$(".box li img")
	var hidden=$(".box .hidden");
	var close=$('.hidden .close');
	var index=0

	$(document).hide();
	$(".box .mask").hide();

	hidden.on('mousedown',false)
	$(".box li").on("click",function(){
		var val=lis.attr("src")
		$(".box .mask").show();
		hidden.show();
		$(".box .hidden> .img-box img").attr("src",val);
		index=lis.index($(this))
		// console.log(index)
	})

//左右键效果
	hidden.on('mouseenter mouseleave',function(){
		$('.hidden .angel').toggleClass('a')
	})

	$(".hidden .l").on("mousedown",false)
	$(".hidden .l").on("click",function(){
		index--
		if(index<0){
			index=lis.length-1;
		}
		$(".box .hidden> .img-box img").attr("src",$(lis[index]).attr('src'));
		console.log(index)
	})
	$(".hidden .r").on("mousedown",false)
	$(".hidden .r").on("click",function(e){
		index++
		if(index==lis.length){
			index=0;
		}
		// console.log(index)
		$(".box .hidden> .img-box img").attr("src",$(lis[index]).attr('src'));

	})


	//图片左右点击效果
	$('.box>.hidden').on('click',function(e){
			var w=hidden.width()
			console.log(e)
			// console.log(e)
			// console.log(e.offsetX)
		if(e.offsetX<= w/2){
			$(".hidden .l").triggerHandler('click')
		}else{
			$(".hidden .r").triggerHandler('click')
		}
	})

	//点击遮罩关闭
	$('.mask').on('click',function(){
		hidden.hide();
		$(".box .mask").hide();
	})
	//关闭按钮效果
	close.on('click',function(){
		hidden.hide();
		$(".box .mask").hide();
	})
	close.on('mouseover',function(){
		// alert(1)
		// console.log(this)
		$(this).find('img').attr('src','img/4.png')
	})
	close.on('mouseout',function(){
		// alert(1)
		// console.log(this)
		$(this).find('img').attr('src','img/3.png')
	})

})