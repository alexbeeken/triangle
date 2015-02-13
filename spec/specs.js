describe('triangle', function() {

  it("returns equilateral if all sides are equal", function() {
    expect(triangle(1,1,1)).to.equal("equilateral");
  });

  it("returns isosceles if two sides are equal", function() {
    expect(triangle(1, 1, 2)).to.equal("isosceles");
  });

  it("returns scalene if no sides are equal", function() {
    expect(triangle(1, 2, 3)).to.equal("scalene");
  });

  it("returns 'not a triangle' if a side is 0", function() {
    expect(triangle(0, 2, 3)).to.equal("not a triangle")
  });
});
