var CJ=document.getElementById("80104");
var ZS=document.getElementById("80108");
var KB=document.getElementById("80110");
var JP=document.getElementById("80109");

var cj=document.getElementsByClassName("content-right");
var zs=document.getElementsByClassName("content-right1");
var kb=document.getElementsByClassName("content-right2");
var jp=document.getElementsByClassName("content-right3");


CJ.onclick=function () {
    cj.style.display="block";
    zs.style.display="none";
    kb.style.display="none";
    jp.style.display="none";
}
ZS.onclick=function () {
    cj.style.display="none";
    zs.style.display="block";
    kb.style.display="none";
    jp.style.display="none";
}
KB.onclick=function () {
    cj.style.display="none";
    zs.style.display="none";
    kb.style.display="block";
    jp.style.display="none";
}
JP.onclick=function () {
    cj.display="none";
    zs.display="none";
    kb.display="none";
    jp.display="block";
}
