// business logic


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

var phrase3 = "I'm Sorry, Dave. I'm afraid I can't do that"
var phrase2 = "boop"
var phrase1 = "beep"

//interface logic
$(document).ready(function() {
  $("#inputNumber form").submit(function(event) {
    event.preventDefault();
    alert("sup")
    var num = parseInt($("input#number1").val())
    if (daveFunction(num)===true) {
      alert(phrase3)
    } else if (boopFunction(num)===true){
      alert(phrase2)
    } else if (boopFunction(num)===true){
      alert(phrase2)
    } else {
      alert(false)
    }
    event.preventDefault();
  })
})
