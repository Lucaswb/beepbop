// business logic

// interface logic
$(document).ready(function(){
  $("form#inputNumber").submit(function(event){
    var num = parseInt($("input").val());
    alert(num)

  })
})
