let Clock = ()=>{
    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();
    let seconds = new Date().getSeconds();
    let period = document.getElementById('period')
    if(hours > 12){
        hours = hours-12;
    }
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;
    if(hours >= 12){
        period.innerHTML = "AM";
    }else{
        period.innerHTML = "PM";
    }
};
setInterval(Clock, 1000);