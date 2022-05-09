//display current date and time in jumbotron
function rightNow(){
    $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'))
    }
    //update time every second
    setInterval(rightNow, 1000);
    
    console.log(moment().format("MM ddd, YYYY hh:mm:ss a"));


// local storage function
var saveButton = $(".saveBtn");
saveButton.on("click", function() {
    //variable for user input
    var input = $(this).siblings(".timeblock").val();
    //variable for selected timeblock
    var selectedHour = $(this).siblings(".timeblock").attr("id");
    //save input and hour in local storage
    localStorage.setItem(selectedHour, input);
})


//get current hour from moment.js
var currentHour = moment().hours();
console.log(currentHour);
//compare current time to timeblock
$(".timeblock").each(function () {
    var calendarHour = parseInt($(this).attr("id"));
    console.log(calendarHour);


//if statements to determine which color to display on each timeblock
if (calendarHour === currentHour) {
    $(this).addClass("present");
    $(this).removeClass("future");
    $(this).removeClass("past");
} else if (calendarHour > currentHour) {
    $(this).addClass("future");
    $(this).removeClass("past");
    $(this).removeClass("present");
} else {
    $(this).addClass("past");
    $(this).removeClass("future");
    $(this).removeClass("present");
}
});


// pull data from local storage on refresh and back into timeblocks
$("#9").val(localStorage.getItem("9"));
$("#10").val(localStorage.getItem("10"));
$("#11").val(localStorage.getItem("11"));
$("#12").val(localStorage.getItem("12"));
$("#13").val(localStorage.getItem("13"));
$("#14").val(localStorage.getItem("14"));
$("#15").val(localStorage.getItem("15"));
$("#16").val(localStorage.getItem("16"));
$("#17").val(localStorage.getItem("17"));