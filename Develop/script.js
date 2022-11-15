  // TODO: Add code to display the current date in the header of the page.

  // https://www.youtube.com/watch?v=K9fjwq--WpU&ab_channel=CoderDost && https://zetcode.com/javascript/dayjs/
const currentdayjs = dayjs();
let day = currentdayjs.date();
let month = currentdayjs.month();
let year = currentdayjs.year();

const currentDate = currentdayjs.format("MMM DD, YYYY");

let scheduleDate = document.getElementById("currentDay")
scheduleDate.textContent = currentDate;

$(document).ready(function () {

  $(".saveBtn").on("click", function () {
    let text = $(this).siblings(".description").val();
    let time = $(this).parent().attr("id");

    localStorage.setItem(time, text);
  })
})
  
let currentTime = dayjs().format("H");

function timeFrame () {
  $(".time-block").each(function() {

    let hourBlock = $(this).attr("id")
   const textValue= localStorage.getItem(hourBlock);
   console.log("SPLIT", hourBlock.split("-"))
   console.log("AFTER POP", hourBlock.split("-").pop())
   console.log("TYPEOF",typeof hourBlock.split("-").pop())
   hourBlock= parseInt(hourBlock.split("-").pop())

   $(this).children(".description").val(textValue)

   // console.log($(this).attr("id"))
   // console.log(currentTime)

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
