/**
 * Created by 1 on 2017/4/21.
 */
setTimeout(function small() {
    var logo=document.getElementById("logo");
    logo.style.transform="scale(1,1)";
},100);
var i=1;
function Next() {
    if(i<4){
        var img=document.getElementById("img_show");
        i++;
        img.setAttribute("src","../images/topic_files/pic_show"+i+".jpg");

    }
}
function Prev() {
    if(i>1){
        var img=document.getElementById("img_show");
        i--;
        img.setAttribute("src","../images/topic_files/pic_show"+i+".jpg");

    }
}

var Top=0;
var flag=true;
var scrollFunc=function(e){
    e=e || window.event;
    var str="";
    if(e.wheelDelta){//IE/Opera/Chrome
        str=e.wheelDelta;
        console.log(str);   //上滚：120    下滚-120
    }else if(e.detail){//Firefox
        str=e.detail;
        console.log(str);   //上滚：3  下滚：-3
    }
    var img=document.getElementById("img");
    if(flag){
        flag=false;
        if (str==-120||str==-3){
            img.style.transition=" all 1s ease";
            img.style.top=Top-600+"px";
            Top=Top-600;
            if (Top<-3000){
                img.style.top=-3000+"px";
                Top=-3000;
            }
        }else if(str==120||str==3){
            img.style.transition=" all 1s ease";
            img.style.top=0;
            img.style.top=Top+600+"px";
            Top=Top+600;
            if (Top>=0){
                img.style.top=0;
                Top=0;
            }
        }
    }else{
        flag=true;
    }

};


/*设置事件的兼容*/
if(document.addEventListener){
    document.addEventListener('DOMMouseScroll',scrollFunc,false);
}//Firefox
window.onmousewheel=document.onmousewheel=scrollFunc;//IE/Opera/Chrome