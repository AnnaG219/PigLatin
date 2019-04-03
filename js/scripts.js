$(document).ready(function() {
  var string;
  var len;
  var vowels;
  var cons;
  var piglatin;

  $("form#translate").submit(function(event) {
    event.preventDefault();
    var string = $("#userInput").val();
    var len = string.length;
    var vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    var firstLetter = string.slice(0,1);
    var lastLetter = string.slice(1);

    for(var i = 0; i <= vowels.length; i++) {
    if (output = lastLetter + firstLetter + "ay"){
      $("#result").text(output);
      }
    }

    for(var e = 0; e <= vowels.length; e++) {
       if (len === 1 ) {
          $("#result").text(string + "ay")
        }
      else if (string[0] === vowels[e] && len > 1) {
        $("#result").text(string + "way");
      }
    }
  });
});
