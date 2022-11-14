  // TODO: Add code to display the current date in the header of the page.

  // https://www.youtube.com/watch?v=K9fjwq--WpU&ab_channel=CoderDost && https://zetcode.com/javascript/dayjs/
const j = dayjs();
let day = j.date();
let month = j.month();
let year = j.year();

let currentTime = moment().format("H");

const currentDate = j.format("MMM DD, YYYY");

let scheduleDate = document.getElementById("currentDay")
scheduleDate.textContent = currentDate;

$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?


  
  // TODO: Add code to apply the past, present, or future class to each time
function timeFrame () {
  $(".time-block").each(function() {
    let hourBlock = parseInt($(this).attr("id"))
    if (hourBlock < currentTime) {
      $(this).addClass("past");
    } else if (hourBlock === currentTime) {
      $(this).addClass("present");
    } else if (hourBlock > currentTime) {
      $(this).addClass("future");
    };  
  }
)};
timeFrame ();


  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
