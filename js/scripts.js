$(document).ready(function() {
  var str;
  var len;
  var regex;

  $("form#translate").submit(function(event) {
    event.preventDefault();
    var str = $("#userInput").val();
    var len = str.length;
    var regex = /[aeiouAEIOU]/;
    var pigLatin = '';

      for(var e = 0; e <= len; e++) {
       if (len === 1 ) {
        pigLatin = (str + "ay");
        $("#result").text(pigLatin);

        }else if(str[0].match(regex)) {
        pigLatin = (str + 'way');
        $("#result").text(pigLatin);

        }else {
        var cons = str.indexOf(str.match(regex)[0]);
        pigLatin = (str.substr(cons)) + (str.substr(0, cons) + "ay");
        $("#result").text(pigLatin);
      }

    }
    });
    // for(var i = 0; i <= vowels.length; i++) {
    // if (output = lastLetter + firstLetter + "ay"){
    //   $("#result").text(output);
    //   }
    // }
    //
    // for(var e = 0; e <= vowels.length; e++) {
    //    if (len === 1 ) {
    //       $("#result").text(string + "ay")
    //     }
    //   else if (string[0] === vowels[e] && len > 1) {
    //     $("#result").text(string + "way");
    //   }
    // }
  });
// });
