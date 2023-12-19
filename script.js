var countDownDate = new Date("Aug 19,2025 05:00:00").getTime();
var x = setInterval(function(){
 var now = new Date().getTime();
 var DaysBtnDates = countDownDate - now;
 
 
 var days = Math.floor(DaysBtnDates/ (24*60*60*1000))
 var hours = Math.floor((DaysBtnDates % (1000*60*60*24) /(1000*60*60)));
 var minutes = Math.floor((DaysBtnDates % (60*60*1000)/ (1000*60)))
 var seconds = Math.floor((DaysBtnDates % (1000*60)/1000))

 document.getElementById("days").innerHTML = days;
 document.getElementById("hours").innerHTML = hours;
 document.getElementById("minutes").innerHTML = minutes;
 document.getElementById("seconds").innerHTML = seconds;

}, 1000);

