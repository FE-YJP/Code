//图片夹角
		var Img=document.getElementsByTagName('img')
			,imgdeg=360/Img.length;	
		for(let i=0;i<Img.length;i++){
			Img[i].style.transform='rotateY('+i*imgdeg+'deg) translateZ(350px)';
			Img[i].style.transition="all 1s "+(Img.length-i)*0.2+"s";
		}
// 	window.onload=function(){
// 		[].forEach.call(Img,function(img,index){
// 			img.style.transform="rotateY("+index*imgdeg+"deg) translateZ(350px)";
// 			img.style.transition="10s "+(img.length-index)+"s";
// 		});
// 	}
		var pervX,prevY,rotateY=0,rotateX=0;
		var oWrap=document.getElementById("wrap");
		document.onmousedown=function(e){
			var e=e||window.event;
			prevX=e.clientX;
			prevY=e.clientY;
			// console.log(e.clientX,e.clientY);
			this.onmousemove=function(){
				var e=e||window.event;
				var newX=e.clientX,
					newY=e.clientY;
				var nowX=newX-prevX,
					nowY=newY-prevY;
					rotateX+=nowX;
					rotateY+=nowY;
					oWrap.style.transform="rotateX("+rotateY*(-0.2)+"deg) rotateY("+rotateX*0.2+"deg)"
					prevY=newY;
					prevX=newX;
			}
			this.onmouseup=function(){
				var e=e||window.event;

				this.onmousemove=null;
				console.log();

			}
		}