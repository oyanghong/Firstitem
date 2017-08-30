var Gi=document.getElementById("a");
var table=document.getElementsByClassName("content_bottom")[0];
Gi.onmouseover=function () {
    table.style.display="block";
}
Gi.onmouseout=function () {
    table.style.display="none";
}


var quanbu=document.getElementsByClassName("content-pic");
var Gongji=document.getElementsByClassName("Gongji");
var Fashu=document.getElementsByClassName("Fashu");
var fangyu=document.getElementsByClassName("fangyu");
var yidong=document.getElementsByClassName("yidong");
var daye=document.getElementsByClassName("daye");

var ZBradio1=document.getElementsByClassName("ZB-radio")[0];
var ZBradio2=document.getElementsByClassName("ZB-radio")[1];
var ZBradio3=document.getElementsByClassName("ZB-radio")[2];
var ZBradio4=document.getElementsByClassName("ZB-radio")[3];
var ZBradio5=document.getElementsByClassName("ZB-radio")[4];
var ZBradio6=document.getElementsByClassName("ZB-radio")[5];

var p1=document.getElementsByClassName("p")[0];
var p2=document.getElementsByClassName("p")[1];
var p3=document.getElementsByClassName("p")[2];
var p4=document.getElementsByClassName("p")[3];
var p5=document.getElementsByClassName("p")[4];
var p6=document.getElementsByClassName("p")[5];
p1.style.background="#3589DD";



ZBradio1.onclick=function () {
    for(var i=0;i<quanbu.length;i++){
        quanbu[i].style.display="block";
    }
    p2.style.background="";
    p1.style.background="#3589DD";
    p3.style.background="";
    p4.style.background="";
    p5.style.background="";
    p6.style.background="";
    for(var i=0;i<Gongji.length;i++){
        Gongji[i].style.display="block";
    }
    for(var i=0;i<Fashu.length;i++){
        Fashu[i].style.display="block";
    }
    for(var i=0;i<fangyu.length;i++){
        fangyu[i].style.display="block";
    }
    for(var i=0;i<yidong.length;i++){
        yidong[i].style.display="block";
    }
    for(var i=0;i<daye.length;i++){
        daye[i].style.display="block";
    }
}

ZBradio2.onclick=function () {
    for(var i=0;i<Gongji.length;i++){
        Gongji[i].style.display="block";
    }
    p2.style.background="#3589DD";
    p1.style.background="";
    p3.style.background="";
    p4.style.background="";
    p5.style.background="";
    p6.style.background="";
    for(var i=0;i<Fashu.length;i++){
        Fashu[i].style.display="none";
    }
    for(var i=0;i<fangyu.length;i++){
        fangyu[i].style.display="none";
    }
    for(var i=0;i<yidong.length;i++){
        yidong[i].style.display="none";
    }
    for(var i=0;i<daye.length;i++){
        daye[i].style.display="none";
    }
}

ZBradio3.onclick=function () {
    for(var i=0;i<Gongji.length;i++){
        Gongji[i].style.display="none";
    }
    p2.style.background="";
    p1.style.background="";
    p3.style.background="#3589DD";
    p4.style.background="";
    p5.style.background="";
    p6.style.background="";
    for(var i=0;i<Fashu.length;i++){
        Fashu[i].style.display="block";
    }
    for(var i=0;i<fangyu.length;i++){
        fangyu[i].style.display="none";
    }
    for(var i=0;i<yidong.length;i++){
        yidong[i].style.display="none";
    }
    for(var i=0;i<daye.length;i++){
        daye[i].style.display="none";
    }
}

ZBradio4.onclick=function () {
    for(var i=0;i<Gongji.length;i++){
        Gongji[i].style.display="none";
    }
    p2.style.background="";
    p1.style.background="";
    p3.style.background="";
    p4.style.background="#3589DD";
    p5.style.background="";
    p6.style.background="";
    for(var i=0;i<Fashu.length;i++){
        Fashu[i].style.display="none";
    }
    for(var i=0;i<fangyu.length;i++){
        fangyu[i].style.display="block";
    }
    for(var i=0;i<yidong.length;i++){
        yidong[i].style.display="none";
    }
    for(var i=0;i<daye.length;i++){
        daye[i].style.display="none";
    }
}

ZBradio5.onclick=function () {
    for(var i=0;i<Gongji.length;i++){
        Gongji[i].style.display="none";
    }
    p2.style.background="";
    p1.style.background="";
    p3.style.background="";
    p4.style.background="";
    p5.style.background="#3589DD";
    p6.style.background="";
    for(var i=0;i<Fashu.length;i++){
        Fashu[i].style.display="none";
    }
    for(var i=0;i<fangyu.length;i++){
        fangyu[i].style.display="none";
    }
    for(var i=0;i<yidong.length;i++){
        yidong[i].style.display="block";
    }
    for(var i=0;i<daye.length;i++){
        daye[i].style.display="none";
    }
}

ZBradio6.onclick=function () {
    for(var i=0;i<Gongji.length;i++){
        Gongji[i].style.display="none";
    }
    for(var i=0;i<Fashu.length;i++){
        Fashu[i].style.display="none";
    }
    for(var i=0;i<fangyu.length;i++){
        fangyu[i].style.display="none";
    }
    for(var i=0;i<yidong.length;i++){
        yidong[i].style.display="none";
    }
    for(var i=0;i<daye.length;i++){
        daye[i].style.display="block";
    }
    p2.style.background="";
    p1.style.background="";
    p3.style.background="";
    p4.style.background="";
    p5.style.background="";
    p6.style.background="#3589DD";
}
