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
    var input = $(this).siblings(".hour").val();
    //variable for selected timeblock
    var selectedHour = $(this).siblings(".hour").attr("id")
    //save input and hour in local storage
    localStorage.setItem(selectedHour, input);
})

//get current hour from moment.js
var currentHour = moment().hours();
console.log(currentHour);
//compare current time to timeblock
$(".hour").each(function () {
    var calendarHour = parseInt($(this).attr("id"));
})
    