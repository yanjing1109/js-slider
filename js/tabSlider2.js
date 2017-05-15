var tabSlider2 = {
	init: function(S){
		S.autoPlayTime  = S.autoPlayTime || 2000;
		var activeClass = S.activeClass; 
		var startNum = S.startNum || 0;
		var fList = document.getElementById(S.fList);
		var fTit = document.getElementById(S.fTit);
		var fTab = document.getElementById(S.fTab);
		var ListBoxLi = document.getElementById(S.fList).getElementsByTagName('li');
		var fTitLi = document.getElementById(S.fTit).getElementsByTagName('li');
		var fTabLi = document.getElementById(S.fTab).getElementsByTagName('li');

		var listLength = ListBoxLi.length; 
		var prev = startNum-1 < 0 ? listLength : startNum-1 ;
		var swiperSlide;
		run();
		for( i = 0; i < fTabLi.length; i++){
			fTabLi[i].startNum = i;
			fTabLi[i].onclick = function myCarousel(){
				startNum = this.startNum;
				swiperImg(startNum, listLength);
			}
		}

		fList.onmouseover = function(){
			clearInterval(swiperSlide); // 鼠标经过暂停播放
		} 

		fList.onmouseout = function(){
			for(i=0;i<fTabLi.length;i++){
				fTabLi[i].startNum = i;
				if(fTabLi[i].getAttribute('class')==activeClass){
					index = fTabLi[i].startNum;
				}
			}
			run(); //鼠标移开重新轮播
		}

		function run(){
			startNum++;
			swiperSlide = setInterval(function(){
				swiperImg(startNum, listLength);
			}, S.autoPlayTime);
		}
		

		function swiperImg(startNum, length){
			if(startNum==parseInt(ListBoxLi.length)){
				startNum = 0;
			}
			for(i=0; i < length; i++){
				ListBoxLi[i].index = i;
				clearActive(ListBoxLi[i]);
				clearActive(fTitLi[i]);
				clearActive(fTabLi[i]);
				if(startNum == ListBoxLi[i].index){
					easeIn(ListBoxLi[i]);
					easeIn(fTitLi[i]);
					easeIn(fTabLi[i]);
				}
			}
		}

		function clearActive(doc){
			doc.className = '';
		}
		function easeIn(doc){
			doc.className = activeClass;
		}

	}
}