describe('triangle', function() {
  it("returns equilateral if all sides are equal", function() {
    expect(triangle(1,1,1)).to.equal("equilateral");
  });
});
