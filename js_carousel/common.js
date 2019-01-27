//json{"width":500,"height":300,"left":200,"opacity":50}
function startMove(obj,json,fn){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var flag = true;//假定所有的属性都达到了目标值
		for(var attr in json){
			if(attr == "opacity"){
				var iCur = parseInt(getStyle(obj,"opacity")*100);
			}else{
				var iCur = parseInt(getStyle(obj,attr));
			}
			
			var iTarget = json[attr];
			
			var iSpeed = (iTarget - iCur)/6;
			iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
			
			if(attr == "opacity"){
				obj.style.filter = "alpha(opacity="+(iCur+iSpeed)+")";
				obj.style.opacity = (iCur+iSpeed)/100;
			}else{
				obj.style[attr] = iCur + iSpeed + "px";
			}

			if(iCur!=iTarget){ //有没有达到目标值 
				flag = false;//其中有的属性没有达到目标值
			}

		}
		//如果都达到目标值了
		if(flag){
			clearInterval(obj.timer);
			if(fn){
				fn();
			}
		}
		
	},20);
}
//cookie的增改删查询
function setCookie(name,value,n){
	var oDate=new Date();
		oDate.setDate(oDate.getDate()+n);
	document.cookie=name+"="+value+";expires="+oDate;
}
function getCookie(name){
	var str=document.cookie;
	var arr=str.split("; ");
	for(var i=0;i<arr.length;i++){
		var ar=arr[i].split("=");
		if(ar[0]==name){
			return ar[1];
		}
	}
}
function removeCookie(name){
	setCookie(name,1,-1);
}
//获取非行内样式
function getStyle(obj,attr){
    if (getComputedStyle) { 
        return getComputedStyle(obj,null)[attr];
    }
    return obj.currentStyle[attr];

}
//增加监听事件
function addEvent(obj,type,fn){
	if(obj.addEventListener){
		obj.addEventListener(type,fn);
	}else{
		obj.attachEvent("on"+type,fn);
	}
}
//删除监听事件
function removeEvent(obj,type,fn){
	if(obj.removeEventListener){
		obj.removeEventListener(type,fn);
	}else{
		obj.detachEvent("on"+type,fn);
	}
}
//判断某年份是否为闰年
function isLeapYear(year){
	if(year%4==0&&year%100!=0 || year%400==0){
		return true;
	}
	return false;
}
//将日期格式化输出 “2015|08|24”
function format(date,str){
	var year = date.getFullYear();
	var month = date.getMonth()+1;
	var day = date.getDate();
	
	if(month<10){
		month = "0"+month;
	}
	
	if(day<10){
		day = "0"+day;
	}
	
	var ss = year + str + month + str + day;
	
	return ss;

}

/*var oDate = new Date();

console.log(format(oDate,"-"));*/
//获取某个月份的天数

function getDays(year,month){
	switch(month){
		case 2:
			if(isLeapYear(year)){
				return 29;
			}
			return 28;
		case 4:
		case 6:
		case 9:
		case 11:
			return 30;
		default:
			return 31;
	}
}

//console.log(getDays(2000,2));
//判断两个日期相差的天数
			
function getDiffDays(date1,date2){
	var ss = Math.abs(date2-date1);
	ss = ss/1000;
	
	var day = Math.floor(ss/3600/24)
	var hour = Math.floor(ss/3600%24);
	var minute = Math.floor(ss/60%60);
	var second = Math.floor(ss%60);
	
	// return day+"天"+hour+"时"+minute+"分"+second+"秒";
	
	var day = ss/1000/3600/24;
	return day;
}
/*var oDate = new Date();
var oDate1 = new Date("2018-12-11 12:00:00");
console.log(getDiffDays(oDate,oDate1));*/

//获得N天以后的日期
			
function getNDate(n){
	var oDate = new Date();
	
	oDate.setDate(oDate.getDate()+n);
	
	return oDate;
	
}

