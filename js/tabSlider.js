var tabSlider = {
	init: function(S){
		S.autoPlayTime  = S.autoPlayTime || 2000;
		var autoPlay 	= S.autoPlay;
		var active      = S.activeClass; 
		var index       = S.startNum || 0;
		var listBox     = document.getElementById(S.listBox);
		var listNum     = document.getElementById(S.listNum);
		var listBoxTag  = document.getElementById(S.listBox).getElementsByTagName(S.listBoxTag);
		var listNumTag  = document.getElementById(S.listNum).getElementsByTagName(S.listNumTag);
		var sn          = S.startNum;
		var swiperSlide;
		var length = listBoxTag.length;
		var prev = index-1 < 0 ? 0 : index-1; //上一个active位置


	autoPlay==true ? run() : swiperImg(index);
	
	//点击页码切换图片
	listNum.onclick = function myCarousel(){
		clearInterval(swiperSlide); //清除定时器
		var target = event.target ? event.target : event.srcElement;
		index = target.getAttribute('slide-to');
		swiperImg(index);
	}
	
	listBox.onmouseover = function(){
		clearInterval(swiperSlide); // 鼠标经过暂停播放
	} 

	listBox.onmouseout = function(){
		if(autoPlay == true){
			run();
		}
	}

	//执行轮播
	function run(){
		swiperSlide = setInterval(function(){
			index++;
			swiperImg(index);
		}, S.autoPlayTime); 
	}

	/*图片切换*/
	function swiperImg(i){
		if(index==parseInt(length)){
			index = 0;
		}
		listBoxTag[prev].className = '';
		listNumTag[prev].className = '';

		listBoxTag[index].className = active;
		listNumTag[index].className = active;
		prev = index < 0 ? length-1 : index;
	}

	} 
}