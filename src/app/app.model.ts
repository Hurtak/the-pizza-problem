import * as Yup from "yup";

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

export type FormValues = {
  pizza1Diameter: number;
  pizza1Price: number;

  pizza2Diameter: number;
  pizza2Price: number;

  extrasPrice: number;
};

export const initialFormValues = {
  pizza1Diameter: 33,
  pizza2Diameter: 45,

  pizza1Price: 149,
  pizza2Price: 239,

  extrasPrice: 0,
} as FormValues;

export const validationSchema = Yup.object().shape<FormValues>({
  pizza1Diameter: Yup.number()
    .min(model.pizzaDiameter.min, `Minimum ${model.pizzaDiameter.min}`)
    .max(model.pizzaDiameter.max, `Maximum ${model.pizzaDiameter.max}`)
    .integer("Whole number required")
    .required("Required"),
  pizza1Price: Yup.number()
    .min(model.pizzaPrice.min, `Minimum ${model.pizzaPrice.min}`)
    .max(model.pizzaPrice.max, `Maximum ${model.pizzaPrice.max}`)
    .required("Required"),

  pizza2Diameter: Yup.number()
    .min(model.pizzaDiameter.min, `Minimum ${model.pizzaDiameter.min}`)
    .max(model.pizzaDiameter.max, `Maximum ${model.pizzaDiameter.max}`)
    .integer("Whole number required")
    .required("Required"),
  pizza2Price: Yup.number()
    .min(model.pizzaPrice.min, `Minimum ${model.pizzaPrice.min}`)
    .max(model.pizzaPrice.max, `Maximum ${model.pizzaPrice.max}`)
    .required("Required"),

  extrasPrice: Yup.number()
    .min(model.extrasPrice.min, `Minimum ${model.extrasPrice.min}`)
    .max(model.extrasPrice.max, `Maximum ${model.extrasPrice.max}`)
    .required("Required"),
});

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
