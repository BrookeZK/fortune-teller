$(document).ready(function(){
  $("form#portents").submit(function(event) {
    var boxesChecked = 0;
    var name = $("input#name").val();
    $("#answers").prepend("<h1>Hello " + name + ",</h1>")
    console.log(name);
    $("#portents, .hidden").hide();
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

  $("button#death").click(function() {
    var random = randomNumberGenerator(3, 1);
    console.log(random);
    $("#deaths").show();
    $(".death").hide();
    if (random === 1) {
      $("#volcano").show();
    } else if (random === 2) {
      $("#geckos").show();
    } else if (random === 3) {
      $("#brain-explosion").show();
    } else {
      console.log ("randomNumberGenerator function does not work")
    }
  });
});

function randomNumberGenerator(maxNum, minNum) {
  return (Math.round(Math.random() * (maxNum - minNum)) + minNum);
};
