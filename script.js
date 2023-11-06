const hours = document.getElementById("hours");
const minutes = document.getElementById("mins");
const seconds = document.getElementById("seconds");
const period = document.getElementById("period");

setInterval(()=>{
    let date = new Date();
    let h = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let ampm = (h>12)? "pm": "am";
    if(h>12){
        h-= 12;
    }
    hours.innerText = (h<10)? h='0'+h: h;
    minutes.innerText = (min<10)? '0'+min: min;
    seconds.innerText = (sec<10)? '0'+sec: sec;
    period.innerText = ampm;
    
},1000);