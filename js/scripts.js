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
    var cons = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "r", "s", "t", "v", "w", "x", "z"];
    var piglatin = []

    for(var i = 0; i <= vowels.length; i++) {
       if (len === 1 ) {
          $("#result").text(string + "ay")
        }
      else if (string[0] === vowels[i] && len > 1) {
        $("#result").text(string + "way");
      }
      var piglatin = string.slice(0,1);
        $("#result").text(string.concat(piglatin + "ay"));


    }
    // for(var e = 0; e <= cons.length; e++ ){
    //   if (string[0] === cons[e]);
    //   string.slice(cons);
    //   $("#result").text(string + "ay");
    // }
    });


    // function rearange(string){
    //   var piglatin = string.slice();
    //   console.log(piglatin);
      // newString.push(piglatin);

  });
