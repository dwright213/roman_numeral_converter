var convert = function(number) {
  var resultAry = [];
  var counter = 0;

  while (number - 1000 >= 0) {
      number -= 1000;
      resultAry.push("M");
  }

  while (number - 500 >= 0) {
    number -= 500;
    resultAry.push("D");
  }

  while (number - 100 >= 0) {
    number -= 100;
    resultAry.push("C");
  }

  while (number - 50 >= 0) {
    number -= 50;
    resultAry.push("L");
  }

  while (number - 10 >= 0) {
    number -= 10;
    resultAry.push("X");
  }

  while (number - 5 >= 0) {
    number -= 5;
    resultAry.push("V");
  }

  while (number - 1 >= 0) {
      number -= 1;
      resultAry.push("I");
  }

  var resultStr = resultAry.join("");

  resultStr = resultStr.replace("DCCCC", "CM");
  resultStr = resultStr.replace("CCCC", "CD");
  resultStr = resultStr.replace("LXXXX", "XC");
  resultStr = resultStr.replace("XXXX", "XL");
  resultStr = resultStr.replace("VIIII","IX");
  resultStr = resultStr.replace("IIII","IV");

  return resultStr;
}

$(document).ready(function() {
  $("input#number").keyup(function() {
    var number = parseInt($("input#number").val());

    if (number < 1 || number > 3999 ) {
      $("#results span").text("This number is theoretically impossible at present.");
      $("#results").bigtext();
      return false;
    }

    var result = convert(number);

    $("#results span").text(result);
    $("#results").bigtext();

  });
});
