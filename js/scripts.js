$(document).ready(function() {
  $("form#translate").submit(function(event) {
    event.preventDefault();
    var string = $("#userInput").val();
    var len = string.length;
    var vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

    for(var i = 0; i <= vowels.length; i++) {
       if (len === 1 ) {
          $("#result").text(string + "ay")
        }
      else if (string[0] === vowels[i] && len > 1) {
        $("#result").text(string + "way");
      }
    }
    });
  });
