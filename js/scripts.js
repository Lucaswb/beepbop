// business logic

var phrase3 = "I'm Sorry, Dave. I'm afraid I can't do that"
var phrase2 = "boop"
var phrase1 = "beep"

// this function will take in an input number and return true if the number has a 1 and false if the number does not contain a 1.
var beepFunction = function(num) {
  var numbers = num.toString().split('');
  var counter = 0;
  numbers.forEach(function(number) {
      if (parseInt(number)===1) {
          counter+=1;
      }
  });
  if (counter > 0){
    return true;
  } else {
    return false;
  }
}
// this function will take in an input number and return true if the number has a 2 and false if the number does not contain a 2.
var boopFunction = function(num) {
  var numbers = num.toString().split('');
  var counter = 0;
  numbers.forEach(function(number) {
      if (parseInt(number)===2) {
          counter+=1;
      }
  });
  if (counter > 0){
    return true;
  } else {
    return false;
  }
}

// this function will take in an input number and return true if the number has a 3 and false if the number does not contain a 3.
var daveFunction = function(num) {
  var numbers = num.toString().split('');
  var counter = 0;
  numbers.forEach(function(number) {
      if (parseInt(number)===3) {
          counter+=1;
      }
  });
  if (counter > 0){
    return true;
  } else {
    return false;
  }
}
// this will turn a single input number n to an array of numbers starting at 1 and finishing with the number n.
var listFunction = function(num) {
  var numArray = [];
  for (var i = 1; i<= num; i+=1){
    numArray.push(i)
  }
  for (var m = 0; m<=(num-1);m+=1){
    if (numArray[m]===3){
      numArray[m]=phrase3
    } else if (numArray[m]===2){
      numArray[m]=phrase2
    } else if (numArray[m]===1){
      numArray[m]=phrase1
    } else {
      continue
    }
  }
  return numArray
}

//interface logic
$(document).ready(function() {
  $("#inputNumber form").submit(function(event) {
    event.preventDefault();
    $("p.warning").hide()
    $("#output p").remove();
    var num = parseInt($("input#number1").val())
    if (num) {
      if (daveFunction(num)===true) {
        var output = phrase3
      } else if (boopFunction(num)===true) {
        var output = phrase2
      } else if (beepFunction(num)===true){
        var output = phrase1
      } else {
        var numList = listFunction(num)
        var output = numList.join(', ')
      }
      $("#output").append("<p>"+output+"</p>").val()
    } else {
      $("p.warning").show()
    }
    event.preventDefault();
  })
})
