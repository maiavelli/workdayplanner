//display current date and time in jumbotron

function rightNow(){
    $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'))
    }
    //update time every second
    setInterval(rightNow, 1000);
    
    console.log(moment().format("MM ddd, YYYY hh:mm:ss a"));
    