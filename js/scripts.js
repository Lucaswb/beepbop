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

var num1 = 200
var num2 = 100
var num3 = 100


alert(beepFunction(num1))
alert(boopFunction(num2))
alert(daveFunction(num3))

// interface logic
// $(document).ready(function(){
//   $("form#inputNumber").submit(function(event){
//     var num = parseInt($("input").val())
//
//   })
// })
