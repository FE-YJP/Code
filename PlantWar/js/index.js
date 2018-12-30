//最外部
var con=document.getElementById("content");
var cw=con.offsetWidth;
var ch=con.offsetHeight;
//血条
var health=document.getElementById("health");
//生命值
var hp=document.getElementById("hp");
//重新开始
var reload=document.getElementById("reload");
//结束
var end=document.getElementById("end");
//结束分数
var endscore=document.getElementById("planeScore");
//分数
var score=document.getElementById("score");
//开始按钮
var oBegin=document.getElementById("begin");
//背景
var bg=document.getElementById('start');
//开始背景
var main=document.getElementById("main");
//我的飞机
var mypt=document.getElementById("mypt");
	// var mw=mypt.offsetWidth;
	// var my=mypt.offsetHeight;
	//定义我机宽高
	var mw=66;
	var my=80;
//点击开始
oBegin.onclick=start;
//定义分数
var label=document.getElementById("label");
var num=0;
//我方被攻击
var behit=false;
//我方被攻击次数
var behitnum=5;
var gamestart=null;
//敌军的定是函数
var foe1=null;
var foe2=null;
var foe3=null;
//中飞机被攻击3次

//打飞机被攻击5次
var bgstart=null;
//定义开始函数
function start(){

	//开始背景图切换
	main.style.display="block";
	//背景走动
	var bgtop=-568;
	bgstart=setInterval(function(){
		bgtop+=1;
		if(bgtop>=0){
			bgtop=-568;
		}
		main.style.backgroundPosition ="0 "+bgtop+"px";
	},16);
	bg.style.display="none";
	score.style.display="block";
	health.style.display="block";
	//敌军到达战场,1秒来1敌军小飞机
	foe1=setInterval(function(){
		var foe=new Littleplane();
			//34为小飞机的宽度24为高度
			foe.add(randleft(34),-24);
			foe.attack();
	},1000);
	//敌军到达战场,10秒来1敌军中飞机
	foe2=setInterval(function(){
		var foe=new Middleplane();
			//46为中飞机的宽度60为高度
			foe.add(randleft(46),-60);
			foe.attack();
	},5000);
	//敌军到达战场,20秒来1敌军大飞机
	foe3=setInterval(function(){
		var foe=new Largeplane();
			//110为大飞机的宽度,164打飞机的高度
			foe.add(randleft(110),-164);
			foe.attack();
	},10000);
	gamestart=setInterval(function(){
		//所有飞机和所有子弹
		var aBullet=document.querySelectorAll("img[src='image/bullet1.png']");
		var alp=document.querySelectorAll("img[src='image/enemy1_fly_1.png']");
		var malp=document.querySelectorAll("img[src='image/enemy3_fly_1.png']");
		var lalp=document.querySelectorAll("img[src='image/enemy2_fly_1.png']");
		for(var i=0;i<aBullet.length;i++){
			//小飞机
			function gamerun(aObj,gif,times,gif2){
				for(var j=0;j<aObj.length;j++){
					if(isImpact(aBullet[i],aObj[j])){
						//分数
						num++;
						//显示分数
						label.innerHTML=num;
						aBullet[i].style.display="none";
						//"image/小飞机爆炸.gif"
						aObj[j].src=gif;
						//爆炸0.5秒消失
						var alpc=document.querySelectorAll("img[src='"+gif+"']");
						setTimeout(function(){
							for(var k=0;k<alpc.length;k++){
								alpc[k].style.display="none";
							}
						},300);
					}
					if(isImpact(aObj[j],mypt)){
						aObj[j].src=gif;
						var alpc=document.querySelectorAll("img[src='"+gif+"']");
						//爆炸0.5秒消失
						setTimeout(function(){
							for(var k=0;k<alpc.length;k++){
								alpc[k].style.display="none";
							}
						},300);
						//被攻击
						behit=true;
						//被攻击五次爆炸
						if(behitnum==1){
							mypt.src="image/mplaneboom.gif";
							//爆炸1秒消失
							setTimeout(function(){
								mypt.style.display="none";
								end.style.display="block";
								endscore.innerHTML=score.innerHTML;
							},1000);
							//清除定时器
							clearInterval(mypt.timer);
							clearTimeout(foe1);
							clearTimeout(foe2);
							clearTimeout(foe3);
							clearInterval(gamestart);
							reload.onclick=function(){
								location.reload();
							};
						}
					}
				
				}
			}

			//小飞机
			gamerun(alp,"image/liplaneboom.gif");
			gamerun(malp,"image/miplaneboom.gif");
			gamerun(lalp,"image/laplaneboom.gif");

			
		}
		

		if(behit){
			behitnum--;
			behit=false;
			hp.innerHTML=behitnum;
		}
		
	//....gametart
	},20);

}
mypt.onmousedown=function(e){
	clearInterval(mypt.timer);
	var evt=e||event;
	var x=mypt.offsetLeft;
	var y=mypt.offsetTop;
	mypt.style.left=x+"px";
	mypt.style.top=y+"px";
	//我方子弹
	mypt.timer=setInterval(function(){
	var bullet=new Bullet();
		bullet.add(x,y);
		bullet.move();
		bullet.attack();		

	 },200);
	con.onmousemove=function(e){
		var evt=e||event;
		var cx=evt.clientX-con.offsetLeft-mw/2;
		var cy=evt.clientY-con.offsetTop-my/2;
		cx= cx<0?0:cx;
		cx= cx>cw-mw?cw-mw:cx;
		cy=cy<0?0:cy;
		cy=cy>ch-my?ch-my:cy;
		mypt.style.left=cx+"px";
		mypt.style.top=cy+"px";

	};
	con.onmouseleave=function(e){
		con.onmousemove=null;
	};
	
};
//飞机
//子弹类
//敌小飞机
//敌中飞机
//敌大飞机
function Createmyplane(){	
	this.plane=document.createElement("img");
	this.plane.src="image/myplane.gif";
	this.plane.style.width="50px";
	this.plane.style.height="50px";
	main.appendChild(this.plane);
}
//子弹
function Bullet(){
	this.bullet=new Image();
	this.bullet.src="image/bullet1.png";
	this.bullet.style.zIndex="0";
}
//添加子弹
Bullet.prototype.add=function(bl,bt){
	this.bullet.style.left=bl+"px";
	this.bullet.style.top=bt+"px";
	main.appendChild(this.bullet);
}

//子弹移动,子弹的位置继承飞机的位置
Bullet.prototype.move=function(){
	this.bullet.style.left=mypt.offsetLeft+mw/2-2+"px";
	this.bullet.style.top=mypt.offsetTop-14+"px";
}
//子弹攻击
Bullet.prototype.attack=function(){
	var _this=this;
	evenMove(10,_this.bullet,function(){
		_this.del(_this.bullet);
	})

}
//子弹消失
Bullet.prototype.del=function(bult){
	main.removeChild(bult);
}
//随机位置,传参为飞机宽度
function randleft(self){
	return	Math.floor(Math.random()*(cw-self));
}
inherit(Bullet,Littleplane);
function Littleplane(){
	this.bullet=new Image();
	this.bullet.src="image/enemy1_fly_1.png";
	this.bullet.style.zIndex="0";
}
//敌军飞机随机速度,5已经很快类，设置1-3
function randspeed(){
	return Math.floor(Math.random()*3)+1;
}
Littleplane.prototype.attack=function(speed){
	var _this=this;
	evenMove(-randspeed(),_this.bullet,function(){
		_this.del(_this.bullet);
	})
}
inherit(Littleplane,Middleplane);
function Middleplane(){
	this.bullet=new Image();
	this.bullet.src="image/enemy3_fly_1.png";
	this.bullet.style.zIndex="0";
}
inherit(Middleplane,Largeplane);
function Largeplane(){
	this.bullet=new Image();
	this.bullet.src="image/enemy2_fly_1.png";
	this.bullet.style.zIndex="0";
}
//子弹攻击速度,即移动568px,大飞船164px加上,需要每过20移动多少px
function evenMove(speed,obj,fn){
	clearInterval(obj.timer);
	var icur=parseInt(getStyle(obj,"top"));
	if(speed>0){
		var itarget=icur-750;
		obj.timer=setInterval(function(){
		var i=parseInt(getStyle(obj,"top"));
		//匀速移动
		obj.style.top=i-speed+"px";
		//子弹固定移动距离
		if(i<=itarget){
			clearInterval(obj.timer);
			if(fn){
				fn();
			}
		}

	},20);
	}
	else{
		var itarget=icur+750;
		obj.timer=setInterval(function(){
		var i=parseInt(getStyle(obj,"top"));
		//匀速移动
		obj.style.top=i-speed+"px";
		//子弹固定移动距离
		if(i>=itarget){
			clearInterval(obj.timer);
			if(fn){
				fn();
			}
		}

	},20);
	}
}
