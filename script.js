


var ms = document.getElementById("m/s");

var sec = document.getElementById("sec");

var min = document.getElementById("min");

var hour = document.getElementById("hou");

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




setInterval(en, 10)






function start(){
console.log("start")
}





function stop(){
console.log("stop")
}





function reset(){
  console.log("reset")  
}