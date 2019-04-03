$(document).ready(function() {
  $("form#translate").submit(function(event) {
    event.preventDefault();
    var string = $("#userInput").val();
    var vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    var single = ["a","i","A","I"];

    for(var i = 0; i <= vowels.length; i++) {
      for(var e = 0; e < single.length; e++)
      if (string.length[0] === single[e]){
        $("#result").text(string + "ay");
      }else if (string[0] === vowels[i]) {
        $("#result").text(string + "way");
      }
    }
  });
});
