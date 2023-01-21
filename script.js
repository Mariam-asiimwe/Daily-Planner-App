//Display current day at top of planner
let currentDay = moment("currentDay", "dddd Do MMMM");

$("#currentDay").text(moment().format("dddd Do MMMM"));

//Display timeblocks for standard business hours when the user scrolls down
$("time").text(moment().format("HH:mm"));
//hourly interval
setInterval(
  function () {
    $("#currentTime").text(moment().format("DDD MMM, YYYY hh:mm:ss"))

  }, 1000)
//$("<p>").textContent("",);
/*let buttonListEl = $(".button");

function handleFormSubmit(event) {
  event.preventDefault();

  var activity = $('input[name="activity-input"]').val();

  if (!activity) {
    console.log('No acctivity filled out in form!');
    return;
  }

  var activityEl = $(
    '<li class="flex-row justify-space-between align-center p-2 bg-light text-dark">'
  );
  activityEl.text(activity);
}

  event.preventDefault();
  $("#9 AM").append(
    <div class="row">
      <div class="col">
        current time
        <p id="text">9AM</p>
      </div>
      <div class="col-6">
        2 of 3 (wider)
        <p id="text"></p>
      </div>
      <div class="col">
        3 of 3
        <p id="text"></p>
      </div>
    </div>
  )
})*/


//color change interval 
const myInterval = setInterval(setColor, 3600000);

function setColor() {
  let x = document.body;
  x.style.backgroundColor = x.style.backgroundColor == "grey" ? "blue" : "green";
}

function stopColor() {
  clearInterval(myInterval);
}