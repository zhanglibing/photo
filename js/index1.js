$(function(){
	var lis=$('.img li')
	var hidden=$('.box> .hidden')
	var mask=$('.box >.mask')
	var close=$('.hidden > .close')
	var index=0

	hidden.hide()
	mask.hide()
	hidden.on('mousedown',false)
//点击变大
	lis.on('click',function(){
		var val=$(this).find('img').attr('src')
		hidden.show();
		mask.show();
		hidden.find('.img-box> img').attr('src',val)
		hidden.find('.img-box> img').animate({opacity:1})
	})

	mask.on('click',function(){
		hidden.hide()
		mask.hide()
	})

	hidden.on('mouseenter mouseleave',function(){
		$('.hidden .angel').toggleClass('a')
	})

	close.click(function(){
		mask.click()
	})

	close.on('mouseover',function(){
		$(this).find('img').attr('src','img/4.png')
	})
	close.on('mouseout',function(){
		$(this).find('img').attr('src','img/3.png')
	})

	$(".hidden .l").on("mousedown",false)
	$(".hidden .l").on("click",function(){
		index--
		if(index<0){
			index=lis.length-1;
		}
		$(".box .hidden> .img-box img").attr("src",$(lis.find('img')[index]).attr('src'));
		hidden.find('.img-box> img').animate({opacity:1})
	})
	$(".hidden .r").on("mousedown",false)
	$(".hidden .r").on("click",function(e){
		index++
		if(index==lis.length){
			index=0;
		}
		// console.log(index)
		$(".box .hidden> .img-box img").attr("src",$(lis.find('img')[index]).attr('src'));
		hidden.find('.img-box> img').animate({opacity:1})
	})

	hidden.find('.img-box').click(function(e){
	 	// console.log(e.offsetX)
	 	var w=$(this).width()
	 	if(e.offsetX<=w/2){
	 		// console.log(1)
	 		$(".hidden .l").click()
	 	}else{
	 		// console.log(0)
	 		$(".hidden .r").click()
	 	}
	 })

// console.log(lis.position())
	setInterval(function(){
		lis.animate({top:Math.random()*100},1000)
},500)
})