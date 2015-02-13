describe('triangle', function() {

  it("returns equilateral if all sides are equal", function() {
    expect(triangle(1,1,1)).to.equal("equilateral");
  });

  it("returns isosceles if two sides are equal", function() {
    expect(triangle(1, 2, 2)).to.equal("isosceles");
  });

  it("returns scalene if no sides are equal", function() {
    expect(triangle(3, 2, 4)).to.equal("scalene");
  });

  it("returns 'not a triangle' if a side is 0", function() {
    expect(triangle(0, 2, 3)).to.equal("not a triangle");
  });

  it("returns 'not a triangle' if one side is alt least as long as the other two combined", function() {
    expect(triangle(1, 2, 4)).to.equal("not a triangle");
  });

  it("returns scalene for 2, 3, 4", function() {
    expect(triangle(3,2,4)).to.equal("scalene");
  });
  
});
