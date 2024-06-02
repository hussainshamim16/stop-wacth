


var ms = document.getElementById("m/s");

var sec = document.getElementById("sec");

var min = document.getElementById("min");

var hour = document.getElementById("hou");
var watch = document.getElementById("wacth");

var sta = document.getElementById("a");
var sto = document.getElementById("b");
var res = document.getElementById("c");

var time;

var miniSecond = 0;
var second = 0;
var minutes = 0;
var hours = 0;



function en() {
    miniSecond++
    ms.innerHTML = miniSecond

    if (miniSecond > 99) {

        miniSecond = 0;
        second++
        sec.innerHTML = second

    } else if (second > 59) {
        second = 0;
        minutes++
        min.innerHTML = minutes;
    }
    else if (minutes > 59) {
        minutes = 0;
        hours++
        hour.innerHTML = hours;

    }
    if (hours > 12) {
        hours = 1;
    }
}




var update = 10;
var duedate = 20;




function start(abc) {
    sta.style.display = "none";
    sto.style.display = "inline";
    res.style.display = "inline";
    watch.src = "icegif-699.gif";
    console.log("start");
    time = setInterval(en, 10);
}





function stop() {
    clearInterval(time)

    sta.style.display = "inline";
    sto.style.display = "none";
    res.style.display = "inline";

    watch.src = "stop-removebg-preview.png";
    console.log("stop");

}





function reset() {
    clearInterval(time)
    // console.log("reset", res.setAttribute("disabled", true));

    ms.innerHTML = "00"
    sec.innerHTML = "00"
    min.innerHTML = "00"
    hour.innerHTML = "00"

    watch.src = "stop-removebg-preview.png";


    sta.style.display = "inline";
    res.style.display = "none";
    sto.style.display = "none";
}
