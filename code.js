//For IronMan
var infoIronman = document.querySelector(".people #ppl1 .info");
var btnIronman = document.querySelector(".people #ppl1 .demo #btn1");
var flag1 = true;

btnIronman.addEventListener("click",function(){
    if ( flag1 ){
        infoIronman.innerHTML = "Request Sent";
        btnIronman.innerHTML = "Cancel Request";
        btnIronman.classList.remove("btn");
        btnIronman.classList.add("redBtn");
        flag1 = false;
    }
    else{
        infoIronman.innerHTML = "Request Canceled";
        btnIronman.innerHTML = "Add Super Hero";
        btnIronman.classList.remove("redBtn");
        btnIronman.classList.add("btn");
        flag1 = true;
    }
});

//for Dr Strange
var infoDr = document.querySelector(".people #ppl2 .info");
var btnDr = document.querySelector(".people #ppl2 .demo #btn2");
var flag2 = true;

btnDr.addEventListener("click",function(){
    if ( flag2 ){
        infoDr.innerHTML = "Request Sent";
        btnDr.innerHTML = "Cancel Request";
        btnDr.classList.remove("btn");
        btnDr.classList.add("redBtn");
        flag2 = false;
    }
    else{
        infoDr.innerHTML = "Request Canceled";
        btnDr.innerHTML = "Add Super Hero";
        btnDr.classList.remove("redBtn");
        btnDr.classList.add("btn");
        flag2 = true;
    }
});

//for spiderman
var infoSpiderman = document.querySelector(".people #ppl3 .info");
var btnSpiderman = document.querySelector(".people #ppl3 .demo #btn3");
var flag3 = true;

btnSpiderman.addEventListener("click",function(){
    if ( flag3 ){
        infoSpiderman.innerHTML = "Request Sent";
        btnSpiderman.innerHTML = "Cancel Request";
        btnSpiderman.classList.remove("btn");
        btnSpiderman.classList.add("redBtn");
        flag3 = false;
    }
    else{
        infoSpiderman.innerHTML = "Request Canceled";
        btnSpiderman.innerHTML = "Add Super Hero";
        btnSpiderman.classList.remove("redBtn");
        btnSpiderman.classList.add("btn");
        flag3 = true;
    }
});

//for captain america
var infoCaptain = document.querySelector(".people #ppl4 .info");
var btnCaptain = document.querySelector(".people #ppl4 .demo #btn4");
var flag4 = true;

btnCaptain.addEventListener("click",function(){
    if ( flag4 ){
        infoCaptain.innerHTML = "Request Sent";
        btnCaptain.innerHTML = "Cancel Request";
        btnCaptain.classList.remove("btn");
        btnCaptain.classList.add("redBtn");
        flag4 = false;
    }
    else{
        infoCaptain.innerHTML = "Request Canceled";
        btnCaptain.innerHTML = "Add Super Hero";
        btnCaptain.classList.remove("redBtn");
        btnCaptain.classList.add("btn");
        flag4 = true;
    }
});

//for hulk

var infoHulk = document.querySelector(".people #ppl5 .info");
var btnHulk = document.querySelector(".people #ppl5 .demo #btn5");
var flag5 = true;

btnHulk.addEventListener("click",function(){
    if ( flag5 ){
        infoHulk.innerHTML = "Request Sent";
        btnHulk.innerHTML = "Cancel Request";
        btnHulk.classList.remove("btn");
        btnHulk.classList.add("redBtn");
        flag5 = false;
    }
    else{
        infoHulk.innerHTML = "Request Canceled";
        btnHulk.innerHTML = "Add Super Hero";
        btnHulk.classList.remove("redBtn");
        btnHulk.classList.add("btn");
        flag5 = true;
    }
});

//for thorodinson

var infoThor = document.querySelector(".people #ppl6 .info");
var btnThor = document.querySelector(".people #ppl6 .demo #btn6");
var flag6 = true;

btnThor.addEventListener("click",function(){
    if ( flag6 ){
        infoThor.innerHTML = "Request Sent";
        btnThor.innerHTML = "Cancel Request";
        btnThor.classList.remove("btn");
        btnThor.classList.add("redBtn");
        flag6 = false;
    }
    else{
        infoThor.innerHTML = "Request Canceled";
        btnThor.innerHTML = "Add Super Hero";
        btnThor.classList.remove("redBtn");
        btnThor.classList.add("btn");
        flag6 = true;
    }
});
