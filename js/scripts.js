var triangle = function(side1, side2, side3) {

  if ((side2 === side1) && (side2 === side3) && (side3 === side1)) {
    return "equilateral";
  }
  else if ((side2 === side1) || (side2 === side3) || (side3 === side1)) {
    return "isosceles";
  }

};
