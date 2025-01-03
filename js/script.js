// Json link - https://jsonkeeper.com/b/MXS4
var inputField = $("#dayInput");
var submittedDayLetter = inputField.val();
var scheduleBody = $("#scheduleList");
var btn = $("#submitDay");

btn.on("click", function(){
  $.ajax({
    url: 'class-schedule.json',
    method: "GET",
    success: function(result) {
      appendClasses(result);
      
    }
  });
});

inputField.change(function(){
  var submittedDayLetter = inputField.val();
  console.log(submittedDayLetter);
});

function appendClasses(data) {

  // Function to filter classes for a specific day
function getClassesForDay(day) {
  return data.filter(classInfo => classInfo.days.includes(day));
}

// Example usage: Get classes for 'A' day
const dayClasses = getClassesForDay(inputField.val());
console.log(dayClasses);

for (let i = 0; i < dayClasses.length; i++) {
  var htmlString = "";
  classInfo = dayClasses[i]
  const times = ["7:40AM - 8:37AM", "8:42AM - 9:49AM", "9:54AM - 11:01AM", "11:47AM - 12:54PM", "12:59PM - 2:06PM"]
  var classNameVar = dayClasses[i].className;
  var teacherVar = dayClasses[i].teacher;
  var roomVar = dayClasses[i].room;
  var periodVar = dayClasses[i].period;
  var timesVar = times[i];
  
  htmlString += "<tr>"
   + "<td>" + periodVar + "</td>"
    + "<td>" + timesVar + "</td>"
    + "<td>" + classNameVar + "</td>"
    + "<td>" + teacherVar + "</td>"
    + "<td>" + roomVar + "</td>"
    + "</tr>";
  // htmlString += "<tr>" + "<td>" + dayClasses[i].teacher + "</td>" + "</tr>";
  // htmlString += "<tr>" + "<td>" + dayClasses[i].room + "</td>" + "</tr>";
  // htmlString += "<tr>" + "<td>" + dayClasses[i].period + "</td>" + "</tr>";
  
  // for (ii = 0; ii < 5; ii++) {
  //   htmlString += "<th>" + dayClasses[i].className[i] + "</th>";
  //   htmlString += "<th>" + dayClasses[i].teacher[i] + "</th>";
  //   htmlString += "<th>" + dayClasses[i].room[i] + "</th>";
  //   htmlString += "<th>" + dayClasses[i].period[i] + "</th>";
  // }
}

scheduleBody.append(htmlString);
};
