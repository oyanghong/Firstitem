
var quanbu=document.getElementsByClassName("content-pic");
var tangke=document.getElementsByClassName("tangke");
var zhangshi=document.getElementsByClassName("zhangshi");
var cike=document.getElementsByClassName("cike");
var fashi=document.getElementsByClassName("fashi");
var sheshou=document.getElementsByClassName("sheshou");
var fuzhu=document.getElementsByClassName("fuzhu");

var ZBradio1=document.getElementsByClassName("ZB-radio")[0];
var ZBradio2=document.getElementsByClassName("ZB-radio")[1];
var ZBradio3=document.getElementsByClassName("ZB-radio")[2];
var ZBradio4=document.getElementsByClassName("ZB-radio")[3];
var ZBradio5=document.getElementsByClassName("ZB-radio")[4];
var ZBradio6=document.getElementsByClassName("ZB-radio")[5];
var ZBradio7=document.getElementsByClassName("ZB-radio")[6];

var p1=document.getElementsByClassName("p")[0];
var p2=document.getElementsByClassName("p")[1];
var p3=document.getElementsByClassName("p")[2];
var p4=document.getElementsByClassName("p")[3];
var p5=document.getElementsByClassName("p")[4];
var p6=document.getElementsByClassName("p")[5];
var p7=document.getElementsByClassName("p")[6];

p1.style.background="#3589DD";

ZBradio1.onclick=function () {
    p1.style.background="#3589DD";
    p2.style.background="";
    p3.style.background="";
    p4.style.background="";
    p5.style.background="";
    p6.style.background="";
    p7.style.background="";

    for(var i=0;i<quanbu.length;i++){
        quanbu.style.display="block";
    }

}

ZBradio2.onclick=function () {

    p1.style.background="";
    p2.style.background="#3589DD";
    p3.style.background="";
    p4.style.background="";
    p5.style.background="";
    p6.style.background="";
    p7.style.background="";

    for(var i=0;i<tangke.length;i++){
        tangke[i].style.display="block";
    }
    for(var i=0;i<zhangshi.length;i++){
        zhangshi[i].style.display="none";
    }
    for(var i=0;i<cike.length;i++){
        cike[i].style.display="none";
    }
    for(var i=0;i<fashi.length;i++){
        fashi[i].style.display="none";
    }
    for(var i=0;i<sheshou.length;i++){
        sheshou[i].style.display="none";
    }
    for(var i=0;i<fuzhu.length;i++){
        fuzhu[i].style.display="none";
    }
}

ZBradio3.onclick=function () {

    p1.style.background="";
    p2.style.background="";
    p3.style.background="#3589DD";
    p4.style.background="";
    p5.style.background="";
    p6.style.background="";
    p7.style.background="";


    for(var i=0;i<tangke.length;i++){
        tangke[i].style.display="none";
    }
    for(var i=0;i<zhangshi.length;i++){
        zhangshi[i].style.display="block";
    }
    for(var i=0;i<cike.length;i++){
        cike[i].style.display="none";
    }
    for(var i=0;i<fashi.length;i++){
        fashi[i].style.display="none";
    }
    for(var i=0;i<sheshou.length;i++){
        sheshou[i].style.display="none";
    }
    for(var i=0;i<fuzhu.length;i++){
        fuzhu[i].style.display="none";
    }
}

ZBradio4.onclick=function () {

    p1.style.background="";
    p2.style.background="";
    p3.style.background="";
    p4.style.background="#3589DD";
    p5.style.background="";
    p6.style.background="";
    p7.style.background="";


    for(var i=0;i<tangke.length;i++){
        tangke[i].style.display="none";
    }
    for(var i=0;i<zhangshi.length;i++){
        zhangshi[i].style.display="none";
    }
    for(var i=0;i<cike.length;i++){
        cike[i].style.display="block";
    }
    for(var i=0;i<fashi.length;i++){
        fashi[i].style.display="none";
    }
    for(var i=0;i<sheshou.length;i++){
        sheshou[i].style.display="none";
    }
    for(var i=0;i<fuzhu.length;i++){
        fuzhu[i].style.display="none";
    }
}

ZBradio5.onclick=function () {

    p1.style.background="";
    p2.style.background="";
    p3.style.background="";
    p4.style.background="";
    p5.style.background="#3589DD";
    p6.style.background="";
    p7.style.background="";


    for(var i=0;i<tangke.length;i++){
        tangke[i].style.display="none";
    }
    for(var i=0;i<zhangshi.length;i++){
        zhangshi[i].style.display="none";
    }
    for(var i=0;i<cike.length;i++){
        cike[i].style.display="none";
    }
    for(var i=0;i<fashi.length;i++){
        fashi[i].style.display="block";
    }
    for(var i=0;i<sheshou.length;i++){
        sheshou[i].style.display="none";
    }
    for(var i=0;i<fuzhu.length;i++){
        fuzhu[i].style.display="none";
    }
}

ZBradio6.onclick=function(){

    p1.style.background="";
    p2.style.background="";
    p3.style.background="";
    p4.style.background="";
    p5.style.background="";
    p6.style.background="#3589DD";
    p7.style.background="";
    for(var i=0;i<tangke.length;i++){
        tangke[i].style.display="none";
    }
    for(var i=0;i<zhangshi.length;i++){
        zhangshi[i].style.display="none";
    }
    for(var i=0;i<cike.length;i++){
        cike[i].style.display="none";
    }
    for(var i=0;i<fashi.length;i++){
        fashi[i].style.display="none";
    }
    for(var i=0;i<sheshou.length;i++){
        sheshou[i].style.display="block";
    }
    for(var i=0;i<fuzhu.length;i++){
        fuzhu[i].style.display="none";
    }
}

ZBradio7.onclick=function () {

    p1.style.background="";
    p2.style.background="";
    p3.style.background="";
    p4.style.background="";
    p5.style.background="";
    p6.style.background="";
    p7.style.background="#3589DD";
    for(var i=0;i<tangke.length;i++){
        tangke[i].style.display="none";
    }
    for(var i=0;i<zhangshi.length;i++){
        zhangshi[i].style.display="none";
    }
    for(var i=0;i<cike.length;i++){
        cike[i].style.display="none";
    }
    for(var i=0;i<fashi.length;i++){
        fashi[i].style.display="none";
    }
    for(var i=0;i<sheshou.length;i++){
        sheshou[i].style.display="none";
    }
    for(var i=0;i<fuzhu.length;i++){
        fuzhu[i].style.display="block";
    }
}

