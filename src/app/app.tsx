import { useFormik } from "formik";
import { useEffect, useState } from "react";

import { Footer, Header, InputPizzaDiameter, InputPizzaPrice, Result } from "../components";
import { FormValues, getPercentage, initialFormValues, validationSchema } from "./app.model";

const getPercentageData = (values: FormValues, firstPizzaPrimary: boolean): number => {
  const pizza1 = { diameter: values.pizza1Diameter, price: values.pizza1Price };
  const pizza2 = { diameter: values.pizza2Diameter, price: values.pizza2Price };

  return getPercentage({
    primary: firstPizzaPrimary ? pizza1 : pizza2,
    secondary: firstPizzaPrimary ? pizza2 : pizza1,
    extrasPrice: values.extrasPrice,
  });
};

export const App = () => {
  const form = useFormik({
    initialValues: initialFormValues,
    validationSchema,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onSubmit: () => {},
  });
  const { values, errors, isValid, handleChange } = form;

  const [lastValidValues, setLastValidValues] = useState<FormValues>(initialFormValues);

  useEffect(() => {
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
        <div style={{ display: "flex", flexDirection: "row", gap: 16 }}>
          <section style={{ flexBasis: "100%" }}>
            <h2 style={{ textAlign: "center" }}>Pizza 1</h2>
            <div style={{ display: "grid", gridTemplateColumns: "min-content 1fr", gridColumnGap: 8 }}>
              <InputPizzaDiameter {...getSharedProps("pizza1Diameter")} />
              <InputPizzaPrice {...getSharedProps("pizza1Price")} />
            </div>

            <Result percentage={pizza1percentage} />
          </section>

          <section style={{ flexBasis: "100%" }}>
            <h2 style={{ textAlign: "center" }}>Pizza 2</h2>
            <div style={{ display: "grid", gridTemplateColumns: "min-content 1fr", gridColumnGap: 8 }}>
              <InputPizzaDiameter {...getSharedProps("pizza2Diameter")} />
              <InputPizzaPrice {...getSharedProps("pizza2Price")} />
            </div>

            <Result percentage={pizza2percentage} />
          </section>
        </div>

        <h2 style={{ fontSize: "1.4rem", marginTop: 0 }}>Extras like box or delivery</h2>
        <InputPizzaPrice {...getSharedProps("extrasPrice")} />
      </main>

      <Footer />
    </>
  );
};
