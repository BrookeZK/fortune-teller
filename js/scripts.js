$(document).ready(function(){
  $("form#portents").submit(function(event) {

    var boxesChecked = 0;
    $("#portents").hide();
    $("#answers").show();
     $("input:checkbox[name=omens]:checked").each(function(){
      boxesChecked++;
    });

    if (boxesChecked <= 2) {
      $("#answer1").show();
    } else if (boxesChecked <= 4) {
      $("#answer2").show();
    } else if (boxesChecked <= 6) {
      $("#answer3").show();
    } else {
      console.log("error in boxesChecked value");
    }
    event.preventDefault();
  });
});
