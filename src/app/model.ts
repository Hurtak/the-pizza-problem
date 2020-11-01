export const model = {
  pizzaDiameter: {
    min: 10,
    max: 100,
  },
  pizzaPrice: {
    min: 1,
    max: 1000000,
  },
  extrasPrice: {
    min: 0,
    max: 1000000,
  },
};

export const getPercentage = ({
  primary,
  secondary,
  extrasPrice,
}: {
  primary: {
    diameter: number;
    price: number;
  };
  secondary: {
    diameter: number;
    price: number;
  };
  extrasPrice: number;
}): number => {
  const getAreaOfCircle = (diameter: number): number => Math.PI * (diameter / 2) ** 2;

  const primaryPricePerOneMoney = getAreaOfCircle(primary.diameter) / (primary.price + extrasPrice);
  const secondaryPricePerOneMoney = getAreaOfCircle(secondary.diameter) / (secondary.price + extrasPrice);

  return (secondaryPricePerOneMoney - primaryPricePerOneMoney) / Math.abs(primaryPricePerOneMoney);
};
