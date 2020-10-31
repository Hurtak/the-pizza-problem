import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import { InputPizzaDiameter, InputPizzaPrice } from "../components";
import { model } from "./model";

const getPricePer1Money = (diameter: number, price: number) => (Math.PI * (diameter / 2) ** 2) / price;

type FormValues = {
  pizza1Diameter: number;
  pizza2Diameter: number;
  pizza1Price: number;
  pizza2Price: number;
};

const validationSchema = Yup.object().shape<FormValues>({
  pizza1Diameter: Yup.number()
    .min(model.pizzaDiameter.min, `Minimum ${model.pizzaDiameter.min}`)
    .max(model.pizzaDiameter.max, `Maximum ${model.pizzaDiameter.max}`)
    .integer("Needs to be whole number")
    .required("Required"),
  pizza2Diameter: Yup.number()
    .min(model.pizzaDiameter.min, `Minimum ${model.pizzaDiameter.min}`)
    .max(model.pizzaDiameter.max, `Maximum ${model.pizzaDiameter.max}`)
    .integer("Needs to be whole number")
    .required("Required"),
  pizza1Price: Yup.number()
    .min(model.pizzaPrice.min, `Minimum ${model.pizzaPrice.min}`)
    .max(model.pizzaPrice.max, `Maximum ${model.pizzaPrice.max}`)
    .required("Required"),
  pizza2Price: Yup.number()
    .min(model.pizzaPrice.min, `Minimum ${model.pizzaPrice.min}`)
    .max(model.pizzaPrice.max, `Maximum ${model.pizzaPrice.max}`)
    .required("Required"),
});

export const App: React.FC = () => {
  const { values, errors, handleChange } = useFormik({
    initialValues: {
      pizza1Diameter: 32,
      pizza2Diameter: 45,
      pizza1Price: 149,
      pizza2Price: 239,
    } as FormValues,
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const pricePer1MoneyPizza1 = getPricePer1Money(values.pizza1Diameter, values.pizza1Price);
  const pricePer1MoneyPizza2 = getPricePer1Money(values.pizza2Diameter, values.pizza2Price);

  const percentage = (1 - pricePer1MoneyPizza1 / pricePer1MoneyPizza2) * 100;

  const getSharedProps = (name: keyof FormValues) => ({
    name,
    value: values[name],
    error: errors[name],
    onChange: handleChange,
  });

  return (
    <>
      <h1>Pizza man</h1>
      <p>Pizza pizza pizza pizza</p>

      <hr />

      <h2>Pizza smaller</h2>
      <InputPizzaDiameter {...getSharedProps("pizza1Diameter")} />
      <InputPizzaPrice {...getSharedProps("pizza1Price")} />
      <span style={{ color: percentage < 0 ? "green" : "red" }}>
        {Math.abs(percentage).toFixed(2)}% {percentage < 0 ? <>less expensive</> : <>more expensive</>} per cm
        <sup>2</sup> of pizza
      </span>

      <h2>Pizza bigger</h2>
      <InputPizzaDiameter {...getSharedProps("pizza2Diameter")} />
      <InputPizzaPrice {...getSharedProps("pizza2Price")} />
      <span style={{ color: percentage > 0 ? "green" : "red" }}>
        {Math.abs(percentage).toFixed(2)}% {percentage > 0 ? <>less expensive</> : <>more expensive</>} per cm
        <sup>2</sup> of pizza
      </span>

      <h2>Extras (box, delivery...)</h2>
      {/* <InputPizzaPrice value={values.pizza2Price} onChange={(e) => {}} /> */}

      <hr />

      <footer>made by @hurtak github twitter</footer>
    </>
  );
};
