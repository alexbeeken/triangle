var triangle = function(side1, side2, side3) {

  if ((side2 === side1) && (side2 === side3) && (side3 === side1)) {
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
    $("#output").text("");
    var side1 = $("input#side1").val();
    var side2 = $("input#side2").val();
    var side3 = $("input#side3").val();

    var result = triangle(side1, side2, side3);

    $(".result").text(result);

    $(".result").show();

    event.preventDefault();
  })
})
