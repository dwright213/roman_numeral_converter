describe('convert', function() {
  it("converts 1000 to M", function() {
    expect(convert(1000)).to.equal("M");
  });

  it("converts 1500 to MD", function() {
    expect(convert(1500)).to.equal("MD");
  });

  it("converts 1600 to MDC", function() {
    expect(convert(1600)).to.equal("MDC");
  });

  it("converts 1650 to MDCL", function() {
    expect(convert(1650)).to.equal("MDCL");
  })

  it("converts 1610 to MDCX", function() {
    expect(convert(1610)).to.equal("MDCX");
  });

  it("converts 1615 to MDCXV", function() {
    expect(convert(1615)).to.equal("MDCXV");
  });

  it("converts 1618 to MDCXVIII", function() {
    expect(convert(1618)).to.equal("MDCXVIII");
  });

  it("changes 9 to IX", function() {
    expect(convert(9)).to.equal("IX");
  });

  it("Changes 4 to IV", function() {
    expect(convert(4)).to.equal("IV");
  });

  it("Changes 90 to XC", function() {
    expect(convert(90)).to.equal("XC");
  });

  it("Changes 900 to CM", function() {
    expect(convert(900)).to.equal("CM");
  });

  it("Changes 99 to XCIX", function() {
    expect(convert(99)).to.equal("XCIX");
  });

  it("other checks", function() {
    expect(convert(3994)).to.equal("MMMCMXCIV");
  });

});
