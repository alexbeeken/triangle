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
  };
};

$(document).ready( function() {
  $("form#triangle_form").submit(function(event) {
    $(".result").text("");

    var side1 = parseInt($("input#side1").val());
    var side2 = parseInt($("input#side2").val());
    var side3 = parseInt($("input#side3").val());

    var result = triangle(side1, side2, side3);

    $(".result").text(result);

    $(".result").show();

    event.preventDefault();
  })
})
