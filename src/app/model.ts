export const model = {
  pizzaDiameter: {
    min: 1,
    max: 1000,
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

  const primaryPricePerCm2 = (primary.price + extrasPrice) / getAreaOfCircle(primary.diameter);
  const secondaryPricePerCm2 = (secondary.price + extrasPrice) / getAreaOfCircle(secondary.diameter);

  const direction = primaryPricePerCm2 > secondaryPricePerCm2 ? 1 : -1;

  return (Math.abs(secondaryPricePerCm2 - primaryPricePerCm2) / secondaryPricePerCm2) * direction;
};
