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
  var tr1 = $("<tr></tr>").text(data[i].className);
  var tr1 = $("<tr></tr>").text("");
  var tr1 = $("<tr></tr>").text("");
  var tr1 = $("<tr></tr>").text("");
  var tr1 = $("<tr></tr>").text("");



  console.log(result.className);
  scheduleBody.append()
};

// scheduleBody.appendClasses();

