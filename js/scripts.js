$(document).ready(function(){
var name ="";

  $("form#portents").submit(function(event) {
    var boxesChecked = $("input:checkbox[name=omens]:checked").length;
    name = $("input#name").val();
    $("#answers").prepend("<h1>Hello <span class='replace'>" + name + ",</span></h1>")
    console.log(name);
    $("#portents, .hidden").hide();
    $("#answers").show();
    //  var boxesChecked = 0;
    //$("input:checkbox[name=omens]:checked").each(function(){
    //   boxesChecked++;
    // });
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


    var newName = replaceVowelsWithDash(name);
    $('.replace').text(newName);

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

function isVowel (string) {
 	var lowerString = string.toLowerCase();
  if (lowerString === 'a' || lowerString === 'e' || lowerString === 'i' || lowerString === 'o' || lowerString === 'u') {
  return true;
  } else {
  return false;
  }
}

function replaceVowelsWithDash(string) {
  var finalString = '';
  for (var i = 0; i <= string.length - 1; i++) {
    if (isVowel(string.charAt(i))) {
      finalString += "-";
    } else {
      finalString += string.charAt(i);
    }
  }
	return finalString;
}
