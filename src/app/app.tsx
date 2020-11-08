import React from "react";
import { useFormik } from "formik";

import { Header, Result, Footer, InputPizzaDiameter, InputPizzaPrice } from "../components";
import { getPercentage, validationSchema, initialFormValues, FormValues } from "./app.model";

const getPercentageData = (values: FormValues, firstPizzaPrimary: boolean): number => {
  const pizza1 = { diameter: values.pizza1Diameter, price: values.pizza1Price };
  const pizza2 = { diameter: values.pizza2Diameter, price: values.pizza2Price };

  return getPercentage({
    primary: firstPizzaPrimary ? pizza1 : pizza2,
    secondary: firstPizzaPrimary ? pizza2 : pizza1,
    extrasPrice: values.extrasPrice,
  });
};

export const App: React.FC = () => {
  const form = useFormik({
    initialValues: initialFormValues,
    validationSchema,
    onSubmit: () => {},
  });
  const { values, errors, isValid, handleChange } = form;

  const [lastValidValues, setLastValidValues] = React.useState<FormValues>(initialFormValues);

  React.useEffect(() => {
    // When fields change, on first render the "values" are updated, on second render the "isValid"
    // is updated. There does not seem to be a nice way to get the last valid values,
    // thats why we run the validation manually here, even when the formik also runs validation
    if (isValid && validationSchema.isValidSync(values)) {
      setLastValidValues(values);
    }
  }, [values, isValid]);

  const getSharedProps = (name: keyof FormValues) => ({
    name,
    value: values[name],
    error: errors[name],
    onChange: handleChange,
  });

  const pizza1percentage = getPercentageData(lastValidValues, true);
  const pizza2percentage = getPercentageData(lastValidValues, false);

  return (
    <>
      <Header />

      <main>
        <h2>Pizza 1</h2>
        <InputPizzaDiameter {...getSharedProps("pizza1Diameter")} />
        <InputPizzaPrice {...getSharedProps("pizza1Price")} />

        <Result percentage={pizza1percentage} />

        <h2>Pizza 2</h2>
        <InputPizzaDiameter {...getSharedProps("pizza2Diameter")} />
        <InputPizzaPrice {...getSharedProps("pizza2Price")} />

        <Result percentage={pizza2percentage} />

        <h2>Extras (box, delivery...)</h2>
        <InputPizzaPrice {...getSharedProps("extrasPrice")} />
      </main>

      <Footer />
    </>
  );
};
