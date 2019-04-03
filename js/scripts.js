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
    // var cons = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "r", "s", "t", "v", "w", "x", "z"];
    var firstLetter = string.slice(0,1);
    var lastLetter = string.slice(1);
    var piglatin = []

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

      // var piglatin = string.slice(0,1);
      //   $("#result").text(string.concat(piglatin + "ay"));


    }
    // for(var e = 0; e <= len; e++ ){
    //   if (string[0] === cons[e]);
    //   var piglatin = string.splice(2,);
    //   $("#result").text(string.concat(piglatin + "ay"));
    // }
    });


    // function rearange(string){
    //   var piglatin = string.slice();
    //   console.log(piglatin);
      // newString.push(piglatin);

  });
