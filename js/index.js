document.getElementById("boss-title").onclick = function(){
    document.getElementById("boss-title").innerHTML="Balthazar";
}

 // Set the date we're counting down to
 var countDownDate = 1593706105*1000;

 // Update the count down every 1 second
 var x = setInterval(function() {

   // Get todays date and time
   var now = new Date().getTime();

   // Find the distance between now and the count down date
   var distance = countDownDate - now;

   // Time calculations for days, hours, minutes and seconds
   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
   var seconds = Math.floor((distance % (1000 * 60)) / 1000);

   // Display the result in the element with id=""
   document.getElementById("bossTimer").innerHTML =  days + "d " + hours + "h "
   + minutes + "m " + seconds + "s ";

   // If the count down is finished, write some text
   if (distance < 0) {
     clearInterval(x);
     document.getElementById("bossTimer").innerHTML = "The boss has appeared.";
   }
 }, 1000);

    

