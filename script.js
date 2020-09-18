    // date and time we want timer to end
    let date = new Date("Dec 11, 2020 17:01:00").getTime();

    // the function we want to run and update every second

    let myFunction = setInterval(function(){
     let now = new Date().getTime();
     let timeLeft = date - now;
     
     // calculating the days, hours, minutes, and seconds left
     let days = Math.floor(timeLeft / (1000 * 60 * 60 *24));
     let hours = Math.floor((timeLeft % (1000 * 60 * 60 *24)) / (1000 * 60 * 60));
     let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
     let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

     // defining where to output the element
     document.getElementById("days").innerText = days + " days"
     document.getElementById("hours").innerText = hours + " hours"
     document.getElementById("minutes").innerText = minutes + " minutes"
     document.getElementById("seconds").innerText = seconds + " seconds"

     // setting when timer hits zero
     if (timeLeft < 0) {
         clearInterval(myFunction);
         document.getElementById("days").innerText = ""
         document.getElementById("hours").innerText = ""
         document.getElementById("minutes").innerText = ""
         document.getElementById("seconds").innerText = ""
         document.getElementById("done").innerText = "AWESOME INC IS OVER :("
     }
    }, 1000);

    
