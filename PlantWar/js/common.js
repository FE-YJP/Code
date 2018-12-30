//sub继承super
function inherit(superType,subType){
	subType.prototype = Object.create(superType.prototype);
	subType.prototype.constructor = subType;
}
/*
 参数
 * 1.method:post get
 * 2.url:string
 * 3.success function
 * 4.error function
 * 5.data object
*使用Promise实例方法then代替success.和error
 * */
function ajax(obj){
	var p=new Promise(function(resolve,reject){
	var xhr=null;
	if(window.XMLHttpRequest){
		xhr=new XMLHttpRequest();
	}else{
		xhr=new ActiveXObject("Microsoft.XMLHTTP");
	}
	var str="";
	for(var item in obj.data){
		str += item+"="+obj.data[item]+"&";
	}
	//将多余的$去掉
	str="?"+str.replace(/&$/,"");
	if(obj.method.toLowerCase()=="get"){
		if(obj.data){
			xhr.open("get",obj.url+str,true);
		}else{
			xhr.open("get",obj.url,true);
		}
		xhr.send();
	}
	if(obj.method.toLowerCase()=="post"){
		xhr.open("post",obj.url,true);
		xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xhr.send(str);	
	}
	xhr.onreadystatechange=function(){
		if(xhr.readyState==4){
			if(xhr.status==200){
				var data=xhr.responseText;
					//当做json
					data=JSON.parse(data);
					resolve(data);
			}
			else{
					reject();
				}
			}
		}
	});
	return p;
}
	

function isJSON(str) {
    if (typeof str == 'string') {
        try {
            var obj=JSON.parse(str);
            if(typeof obj == 'object' && obj ){
                return true;
            }else{
                return false;
            }

        } catch(e) {
//          console.log('error：'+str+'!!!'+e);
            return false;
        }
    }
//  console.log('It is not a string!')
return false;
}
/**
				检测两个元素是否发生碰撞
				@param
					elem1 
					elem2

				碰撞检测原理分析：
					检测时只需反向判断，判断什么情况下两个盒子不相撞   

					1、元素1的左边缘比元素2的右边缘大
					2、元素2的左边缘比元素1的右边缘大
					3、元素1的上边缘比元素2的下边缘大
					4、元素2的上边缘比元素1的下边缘大

					因此我们需要准备 
					1、元素相对于屏幕左边与的值与上边缘的值（offsetLeft offsetTop）
					2.元素自身的宽高(offsetWidth offsetHeight)
			*/
function isImpact(elem1,elem2){
	var 
		l1 = elem1.offsetLeft,
		r1 = l1 + elem1.offsetWidth, //左边缘 + width
		t1 = elem1.offsetTop,
		b1 = t1 + elem1.offsetHeight, //上边缘 + height

		l2 = elem2.offsetLeft,
		r2 = l2 + elem2.offsetWidth, 
		t2 = elem2.offsetTop,
		b2 = t2 + elem2.offsetHeight;

	//判断
	if( l1 >= r2 || l2 >= r1 || t1 >= b2 || t2 >= b1){
		return false;
	}
	return true;
}



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


//匀速移动封装
/**
 * 运动
 * @param element 待添加运动动画效果的 DOM 元素对象
 * @param options 多属性目标终值选项
 * @param speed 限定运动的总时间
 * @param fn 在运动结束后需要继续执行的函数 
 */
function animate(element, options, speed, fn) {
    // 清除元素上已有的运动动画计时器
    clearInterval(element.timer);

    // 多属性初值、范围值
    var start = {}, range = {};
    for (var attrName in options) {
        start[attrName] = parseFloat(getStyle(element, attrName));
        range[attrName] = options[attrName] - start[attrName];
    }

    // 记录开始运动的时间
    var startTime = +new Date();

    // 启动计时器，实现运动动画效果：将计时器 id 缓存
    element.timer = setInterval(function() {            
        // 计算已经运动的时间
        var elapsed = Math.min(+new Date() - startTime, speed);

        // 多属性按公式运算：线性运动
        for (var attrName in options) {
            // 公式：结果 = 运动时间 * 总范围 / 总时间 + 起始
            var result = elapsed * range[attrName] / speed + start[attrName];
            // 设置CSS
            element.style[attrName] = result + ("opacity" === attrName ? "" : "px");
        }

        // 判断是否停止计时器
        if (elapsed === speed) {
            clearInterval(element.timer);
            // 如果有运动结束后需要继续执行的函数，则调用函数执行
            fn && fn();
        }
    }, 1000/60);
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

