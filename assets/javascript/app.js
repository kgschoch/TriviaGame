$(document).ready(function(){
  var timer = 20;
  var correct = 0;
  var incorrect = 0;
  

  function endGame() {
    if($("input[name=Q1]:checked").val() === "Buccaneers") {
        correct++;
    }
    else {
      incorrect++;
    }

    if($("input[name=Q2]:checked").val() === "Goalie") {
      correct++;
  }
    else {
    incorrect++;
  }

    if($("input[name=Q3]:checked").val() === "JaredGoff") {
    correct++;
}
    else {
  incorrect++;
}

    if($("input[name=Q4]:checked").val() === "Astros") {
  correct++;
}
    else {
incorrect++;
}

    if($("input[name=Q5]:checked").val() === "Offside") {
  correct++;
}
    else {
incorrect++;
}
alert ("Game Over! You got " + correct + " correct, and " + incorrect + " incorrect!");
}

  function clock () {
    if (timer === 0) {
        $("#timer").text(timer);
        endGame();
    }
    else {
      timer--;
      $("#timer").text(timer);
      setTimeout(clock, 1200);
    }
  }

  $("#submitBtn").on("click", function() {
    timer = 0;
  })


  clock()
})