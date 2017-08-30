//topic里面隐藏的部分
var chartsSpan=document.getElementById("home_top_span");
var Topcharts=document.getElementById("home_top_charts");
chartsSpan.onmouseover=function(){
    this.lastChild.style.visibility="visible";
};
chartsSpan.onmouseout=function aa(){
    var obj=this.lastChild.style.visibility;
    setTimeout(aa,1000);
    function aa() {
        obj="hidden";
    }
};
Topcharts.onmouseover=function(){
    this.style.visibility="visible";
};
Topcharts.onmouseout=function(){
    this.style.visibility="hidden";
};

//鼠标移入事件

for(var i=0;i<3;i++){
    var charts=document.getElementById("home_top_charts"+i);
    (function(i) {
        for (var j = 0; j < 10; j++) {
            var leftPs=charts.getElementsByTagName("p");
            (function (j) {
                leftPs[j].setAttribute("leftPs",j);
                leftPs[j].addEventListener("mouseover", function () {
                    for (var k = 0; k < 10; k++) {
                        if(k==this.getAttribute("leftPs")){
                            this.setAttribute("class", "FirstP");
                            this.style.backgroundImage="url("+"../images/home_files/chart"+i+j+".jpg)";
                            console.log("url("+"../images/home_files/chart"+i+j+".jpg)");
                            this.style.border="1px solid #CCCCCC";
                            this.lastChild.innerHTML="";
                        }else{
                            var attr=leftPs[k].getAttribute("value");
                            leftPs[k].lastChild.innerHTML=attr;
                            leftPs[k].setAttribute("class", "");
                            leftPs[k].style.backgroundImage="";
                            leftPs[k].style.border = "";
                        }
                    }
                }, false);
            })(j)
        }
    })(i)
}



//nav导航栏
var nav=document.getElementById("home_nav");
var navHidden=document.getElementById("home_nav_hidden");

nav.onmouseover=function(){
    navHidden.style.visibility="visible";
};
nav.onmouseout=function(){
    navHidden.style.visibility="hidden";
};


//英雄图片轮播
var topicnavleft=document.getElementById("topicNavleft");
var navlis=topicnavleft.getElementsByTagName("li");
for(var i=0;i<navlis.length;i++){
    (function(i){
        navlis[i].onmouseover=function() {
            this.setAttribute("aaa","1");
            var str=this.getAttribute("aaa");
            if(str==1){
                this.setAttribute("class","navLeft");
                navlis[i].firstChild.style.visibility="visible";
                navlis[i].lastChild.style.visibility="hidden";
                for(var j=0;j<7;j++){
                    if(j!=i){
                        navlis[j].setAttribute("class","");
                        navlis[j].firstChild.style.visibility="hidden";
                        navlis[j].lastChild.style.visibility="visible";
                    }
                }
            }
        }
    })(i)
}


//最大的图片轮播
function picPlay(){
    var imgA=document.getElementById("imgA");
    var left=imgA.style.marginLeft;
    // var i=0;
    function run(){
        for (var j=0;j<5;j++){
            var lis3=topicLeft.getElementsByTagName("li")[j];
            lis3.style.background="#000";
        }
        if(left<-3084){
            left = 0;
        }
        if (i>5){
            i=0;
        }
        imgA.style.marginLeft=left+"px";
        left-=771;
        var lis2=topicLeft.getElementsByTagName("li")[i];
        lis2.style.background="#288ED9";
        i++;
    }
    str=setInterval(run,1000);
}
picPlay();



//over
var topicLeft=document.getElementById("topicContentLeft");
var lis=topicLeft.getElementsByTagName("li");
for(var i=0;i<lis.length;i++){
    lis[i].setAttribute("abc",i);
    lis[i].onmouseover=function () {
        clearInterval(str);
        var i=this.getAttribute("abc");
        this.style.background="#288ED9";
        this.style.color="#fff";
        imgA.style.marginLeft=-(i*771)+"px";
    };
    lis[i].onmouseout=function () {
        picPlay();
        this.style.background="black";
        this.style.color="#a3a3a3";
    }
}

//登录
var loginDiv=document.getElementById("loginDiv");
function login() {
    loginDiv.style.display="block";
}
function closed(){
    loginDiv.style.display="none";
}
//故事站
var storyDiv=document.getElementById("storyDiv");
function story() {
    storyDiv.style.display="block";
}
function storyclosed(){
    storyDiv.style.display="none";
}
//客服专区
var DialogDiv=document.getElementById("DialogDiv");
function Dialog() {
    DialogDiv.style.display="block";
}
function Dialogclosed(){
    DialogDiv.style.display="none";
}


//video的点击事件
var videoTop=document.getElementById("video_top");
var videoLis=videoTop.getElementsByTagName("li");
for(var i=0;i<videoLis.length;i++){
    (function(i) {
        videoLis[i].addEventListener("click", function () {
            for(var j=0;j<5;j++){
                var videoButtom=document.getElementsByClassName("video_buttom");
                if(j!=i){
                    videoLis[j].setAttribute("class","");
                    videoButtom[j].setAttribute("class","video_buttom video_buttom1");
                }else{
                    videoLis[j].setAttribute("class","ftLi");
                    videoButtom[j].setAttribute("class","video_buttom video_buttom0");
                }
            }
        }, false);
    })(i);
}





//学院部分的点击事件
var RightTop=document.getElementById("home_content_collegeRight");
var RightToplis=RightTop.getElementsByTagName("li");
for(var i=0;i<RightToplis.length;i++){
    (function (i) {
        RightToplis[i].addEventListener("click",function(){
            this.setAttribute("class","ftLi");
            for(var j=0;j<5;j++){
                var rightBottom=RightTop.getElementsByTagName("ul");
                console.log(rightBottom);
                if(j==i){
                    rightBottom[j].setAttribute("class","Right_bottom Right_bottom0");
                }else{
                    rightBottom[j].setAttribute("class","Right_bottom Right_bottom1");
                    RightToplis[j].setAttribute("class","");
                }
            }

        },false);
    })(i)
}