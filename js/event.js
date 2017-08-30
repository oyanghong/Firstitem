/**
 * Created by 1 on 2017/4/21.
 */
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



var topSpan=document.getElementById("home_top_span");
topSpan.onmouseover=function(){
    topSpan.style.color="red";
    topSpan.lastChild.style.backgroundPosition="-170px -133px";
};
topSpan.onmouseout=function(){
    topSpan.style.color="#464646";
    topSpan.lastChild.style.backgroundPosition="-150px -133px";
};          //头部
var flag=false;
var ison=document.getElementById("ison");
function Show(){
    if (!flag){
        ison.style.display="block";
        flag=true;
    }else{
        ison.style.display="none";
        flag=false;
    }
};          //赛事隐藏图片

//        function Show() {
//            document.getElementById("ison").slideDown("slow");
//        };

var live_aparent=document.getElementById("live_aparent");
for(var i=1;i<12;i++){
    var a=document.createElement("a");
    a.innerHTML="第<em style='font-size: 30px;font-weight: bold;text-decoration: none'>"+i+"</em> 周";
    var em=document.getElementsByTagName("em")[0];
    a.setAttribute("class","live_fora");
    a.setAttribute("href","###");
    a.setAttribute("abc",i);
    a.setAttribute("id","live_a"+i);
    live_aparent.appendChild(a);

}
var live_a1=live_aparent.firstElementChild;
live_a1.setAttribute("class","live_forachange");
//添加a标签
//给a添加事件
for(var i=1;i<12;i++){
    var live_a=document.getElementById("live_a"+i);
    live_a.addEventListener("click",function () {
        for(var j=1;j<12;j++){
            var live_a2=document.getElementById("live_a"+j);
            var live_content=document.getElementById("live_content"+j);
            live_content.setAttribute("class","live_content_none");
            if(j==this.getAttribute("abc")){
                this.setAttribute("class","live_forachange");
                var live_content2=document.getElementById("live_content"+j);
                live_content2.setAttribute("class","live_content");

            }else {
                live_a2.setAttribute("class","live_fora");
            }
        }
    },false);
}



//显示登录界面
var login1=document.getElementById("login");
function login() {
    login1.style.display="block";
}
//关闭登录
function Close() {
    login1.style.display="none";
}
//显示qq登录
var qqlogin=document.getElementById("qqlogin");
function showqq() {
    qqlogin.style.display="block";
}
//关闭qq登录
function qqClose() {
    qqlogin.style.display="none";
}

//弹框界面
function Alert() {
    alert("暂未开放，敬请期待！");
}

//队员信息
for (var i=1;i<13;i++){
    var team_li=document.getElementById("team_ul_l"+i);
    team_li.setAttribute("abc",i);
    team_li.addEventListener("click",function () {
        for(var j=1;j<13;j++){
            var team_li2=document.getElementById("team_ul_l"+j);
            var team_message2=document.getElementById("team_message"+j);
            team_message2.setAttribute("class","team_message_none");
            if(j==this.getAttribute("abc")){
                var team_message=document.getElementById("team_message"+j);
                team_message.setAttribute("class","team_message");
                this.setAttribute("class","team_ul_l1");
            }else {
                team_li2.setAttribute("class","");
            }
        }
    },false)
};

//ol里a标签的左移右移
function aRight() {
    var ol=document.getElementById("a_ol");
    ol.style.transition=" all 1s ease";
    ol.style.left=-600+"px";
};
function aLeft() {
    var ol=document.getElementById("a_ol");
    ol.style.transition=" all 1s ease";
    ol.style.left=0;
};
//ol里li标签的点击事件
for (var i=1;i<12;i++){
    var ol_li=document.getElementById("ol_li"+i);
    ol_li.setAttribute("abc",i);
    ol_li.addEventListener("click",function () {
        for(var j=1;j<12;j++){
            var ol_li2=document.getElementById("ol_li"+j);
            var video_match_scroll=document.getElementById("video_match_scroll"+j);
            video_match_scroll.setAttribute("class","video_match_scroll_none");
            if(j==this.getAttribute("abc")){
                var video_match_scroll2=document.getElementById("video_match_scroll"+j);
                video_match_scroll2.setAttribute("class","video_match_scroll");
                this.setAttribute("class","video_match_ol_li");
            }else {
                ol_li2.setAttribute("class","");
            }
        }
    },false)
};

//mouseover事件
for (var i=1;i<6;i++){
    var news_left_ola=document.getElementById("news_left_ola"+i);
    news_left_ola.setAttribute("abc",i);
    news_left_ola.addEventListener("mouseover",function () {
        for(var j=1;j<6;j++){
            var news_left_ola2=document.getElementById("news_left_ola"+j);
            var news_left_ul=document.getElementById("news_left_ul"+j);
            news_left_ul.setAttribute("class","news_left_ul_none");
            if(j==this.getAttribute("abc")){
                var news_left_ul2=document.getElementById("news_left_ul"+j);
                news_left_ul2.setAttribute("class","news_left_ul");
                this.setAttribute("class","news_left_ola");
            }else {
                news_left_ola2.setAttribute("class","");
            }
        }
    },false)
};

//发表看法
var text="";
function showText() {
    var str=document.getElementById("inp_text");
    var chat=document.getElementById("wechat");
    chat.innerHTML=text+str.value+"</br></br>";
    text=chat.innerHTML;
    console.log(text);
    str.value="";
}