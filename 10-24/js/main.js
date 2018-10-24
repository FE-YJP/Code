!function(){
	var more=document.getElementById('more');
	var morea=document.getElementById('morea');
	more.onclick=open;
	function open(){
		window.open('https://developer.mozilla.org/zh-CN/');
	}
	morea.onclick=show;
	var toggle=true;
	var s=document.getElementsByTagName('section');
	function show(){
		if(!toggle){
			toggle=!toggle;
			for(var i=0;i<s.length;i++){
			s[i].style.display='block';
			}
		}else{
			toggle=!toggle;
			for(var i=0;i<s.length;i++){
			s[i].style.display='none';
			}
		}
		// var s=document.querySelectorAll('section');
		
	}
	var menu=document.getElementById('control');
	var side=document.getElementById('side');
	var close=document.getElementById('close');
	menu.onmouseover=function(){
		side.style.transform='translateX(-150px)';
	};
	close.onmouseover=function(){
		side.style.transform='translateX(150px)';
	};
}
();
