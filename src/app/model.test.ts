import { getPercentage } from "./model";

describe("getPercentage", () => {
  it("returns correct percentage comparison", () => {
    expect(
      getPercentage({
        primary: { price: 100, diameter: 1 },
        secondary: { price: 200, diameter: 1 },
        extrasPrice: 0,
      })
    ).toEqual(-0.5);

    expect(
      getPercentage({
        primary: { price: 200, diameter: 1 },
        secondary: { price: 100, diameter: 1 },
        extrasPrice: 0,
      })
    ).toEqual(1);

    expect(
      getPercentage({
        primary: { price: 200, diameter: 1 },
        secondary: { price: 100, diameter: 1 },
        extrasPrice: 0,
      })
    ).toEqual(1);
  });

  it("favors bigger pizza when extrasPrice is filled", () => {
    const big = { price: 200, diameter: 20 };
    const small = { price: 100, diameter: 10 };

    const pWithExtras = getPercentage({ primary: big, secondary: small, extrasPrice: 20 });
    const pNoExtras = getPercentage({ primary: big, secondary: small, extrasPrice: 0 });

    expect(pWithExtras).toBeLessThan(pNoExtras);
  });
});
