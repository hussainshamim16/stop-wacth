


var ms = document.getElementById("m/s");

var sec = document.getElementById("sec");

var min = document.getElementById("min");

var hour = document.getElementById("hou");
var watch = document.getElementById("wacth");

var time;

var miniSecond = 0;
var second = 0;
var minutes = 0;
var hours = 0;



function en(){
    miniSecond++
ms.innerHTML = miniSecond

if(miniSecond > 99){

    miniSecond = 0;   
    second++ 
sec.innerHTML = second

}else if(second > 59){
    second = 0;   
    minutes++ 
min.innerHTML = minutes;
}
else if(minutes > 59){
    minutes = 0;   
    hours++ 
hour.innerHTML = hours;

}
if(hours > 12){
    hours = 1;
}
}








function start(){
    
  time =   setInterval(en, 10);
  watch.src = "https://www.icegif.com/wp-content/uploads/2023/08/icegif-699.gif"
}





function stop(){
clearInterval(time)
watch.src = ""
}





function reset(){
    clearInterval(time)
ms.innerHTML = "00"
sec.innerHTML = "00"
min.innerHTML = "00"
hour.innerHTML = "00"
watch.src = ""

}