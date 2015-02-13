var triangle = function(side1, side2, side3) {

  if (((side1 + side2 <= side3) || (side2 + side3 <= side1) || (side3 + side1 <= side2)) || ((side1 <= 0) || (side2 <= 0) || (side3 <= 0))) {
    return "not a triangle";
  }
  else if ((side2 === side1) && (side2 === side3) && (side3 === side1)) {
    return "equilateral";
  }
  else if ((side2 === side1) || (side2 === side3) || (side3 === side1)) {
    return "isosceles";
  }
  else {
    return "scalene";
  }

};

$(document).ready( function() {

  $("form#triangle_form").submit(function(event) {
    $(".result").text("");

    var side1 = parseInt($("input#side1").val());
    var side2 = parseInt($("input#side2").val());
    var side3 = parseInt($("input#side3").val());

    var result = triangle(side1, side2, side3);

    $(".result").text(result);

    if (result !== "not a triangle") {

      var windowWidthR = $(window).width();

      $("#triangle-up").css({
        "border-bottom": (side1) + 'px solid red'
      });

      $("#triangle-up").css({
        "border-left": side2 + 'px solid transparent'
      });

      $("#triangle-up").css({
        "border-right": side3 + 'px solid transparent'
      });

      $('#triangle-up').show();

    } else {

      $("#triangle-up").hide();

    }

    $(".result").show();

    event.preventDefault();
  });
});


$(window).resize(function () {
  var windowWidthR = $(window).width();
  $(".triangle").css({
    "border-top": windowWidthR / 2 + 'px solid rgba(255, 255, 0, 1)'
  });
  $(".triangle").css({
    "border-right": windowWidthR / 1.5 + 'px solid transparent'
  });
});
