import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import { Footer, Header, InputPizzaDiameter, InputPizzaPrice } from "../components";
import { getPercentage, model } from "./model";

type FormValues = {
  pizza1Diameter: number;
  pizza1Price: number;

  pizza2Diameter: number;
  pizza2Price: number;

  extrasPrice: number;
};

const initialFormValues = {
  pizza1Diameter: 33,
  pizza2Diameter: 45,

  pizza1Price: 149,
  pizza2Price: 239,

  extrasPrice: 0,
} as FormValues;

const validationSchema = Yup.object().shape<FormValues>({
  pizza1Diameter: Yup.number()
    .min(model.pizzaDiameter.min, `Minimum ${model.pizzaDiameter.min}`)
    .max(model.pizzaDiameter.max, `Maximum ${model.pizzaDiameter.max}`)
    .integer("Needs to be whole number")
    .required("Required"),
  pizza1Price: Yup.number()
    .min(model.pizzaPrice.min, `Minimum ${model.pizzaPrice.min}`)
    .max(model.pizzaPrice.max, `Maximum ${model.pizzaPrice.max}`)
    .required("Required"),

  pizza2Diameter: Yup.number()
    .min(model.pizzaDiameter.min, `Minimum ${model.pizzaDiameter.min}`)
    .max(model.pizzaDiameter.max, `Maximum ${model.pizzaDiameter.max}`)
    .integer("Needs to be whole number")
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

export const App: React.FC = () => {
  const { values, errors, handleChange } = useFormik({
    initialValues: initialFormValues,
    validationSchema,
    onSubmit: () => {},
  });

  const pizza1percentage = getPercentage({
    primary: { diameter: values.pizza1Diameter, price: values.pizza1Price },
    secondary: { diameter: values.pizza2Diameter, price: values.pizza2Price },
    extrasPrice: values.extrasPrice,
  });
  const pizza2percentage = getPercentage({
    primary: { diameter: values.pizza2Diameter, price: values.pizza2Price },
    secondary: { diameter: values.pizza1Diameter, price: values.pizza1Price },
    extrasPrice: values.extrasPrice,
  });

  const getSharedProps = (name: keyof FormValues) => ({
    name,
    value: values[name],
    error: errors[name],
    onChange: handleChange,
  });

  return (
    <>
      <Header />

      <main>
        <h2>Pizza 1</h2>
        <InputPizzaDiameter {...getSharedProps("pizza1Diameter")} />
        <InputPizzaPrice {...getSharedProps("pizza1Price")} />

        <span style={{ color: pizza1percentage < 0 ? "green" : "red" }}>
          {Math.abs(pizza1percentage * 100).toFixed(0)}%{" "}
          {pizza1percentage < 0 ? <>less expensive</> : <>more expensive</>} per cm
          <sup>2</sup> of pizza
        </span>

        <h2>Pizza 2</h2>
        <InputPizzaDiameter {...getSharedProps("pizza2Diameter")} />
        <InputPizzaPrice {...getSharedProps("pizza2Price")} />

        <span style={{ color: pizza2percentage < 0 ? "green" : "red" }}>
          {Math.abs(pizza2percentage * 100).toFixed(0)}%{" "}
          {pizza2percentage < 0 ? <>less expensive</> : <>more expensive</>} per cm
          <sup>2</sup> of pizza
        </span>

        <h2>Extras (box, delivery...)</h2>
        <InputPizzaPrice {...getSharedProps("extrasPrice")} />
      </main>

      <Footer />
    </>
  );
};
