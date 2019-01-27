var oBanner = document.getElementById("banner");
var oUl = document.getElementById("list");
var aLi = oUl.children;
//li标签的个数,图片的数量，实际图片len-1;
var len = aLi.length;
//角标
var cir = document.getElementById("circle");
var aCir = cir.children;
//定时轮播,ul的top值改变
//i=0,图片1的位置0,i=1图片位置-300
//len-1张图
var i = 0;
var timer = setInterval(control,3000);
//角标
//默认显示第一个
aCir[i].className="hover";
//封装代码
function control() {
    i++;
    if (i == len) {
        oUl.style.top = 0;
        i = 1;
    }
    if(i==-1){
        //直接跳到最后一张图，显示为第一张图
        oUl.style.top=-aLi[0].offsetHeight*(len-1)+"px";
        //下一次该走倒数第一张图，实际为倒数第二张图
        i=len-2;
    }
    //角标跟着图片变化
    //先清理样式再添加
    for(var m=0;m<aCir.length;m++){
        aCir[m].className="";
    }
    //i为最后一张图时,让第一张图对应的下标亮起来
    if(i==len-1){
        aCir[0].className="hover";
    //除最后一个，对应的图,对应的角标
    }else{
        aCir[i].className="hover";
    }
    //图片滑动的过程
    startMove(oUl, {
        "top": -300 * i
    });
}
//鼠标移入清除，移出开始计时器
oBanner.onmouseover = function () {
    clearInterval(timer);
}
oBanner.onmouseout = function () {
    timer = setInterval(control,3000);
}
//控制上下按钮
var con = document.getElementById("control");
var oPrev = con.children[0];
var oNext = con.children[1];
//向上滑动
oPrev.onclick = function () {
    i-=2;
    control();
}
//向下滑动
oNext.onclick = function () {
    control();
}
//取消鼠标默认事件
oNext.onmousedown = function () {
    return false;
}
oPrev.onmousedown = function () {
    return false;
}
//角标控制切换图片
for(let k=0;k<aCir.length;k++){
    aCir[k].onmouseover=function(){
        aCir[k].className="hover";
        i=k-1;
        control();
    }
}