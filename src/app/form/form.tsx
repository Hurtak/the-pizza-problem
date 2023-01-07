import { useFormik } from "formik";
import { useEffect, useState } from "react";
import styled from "styled-components/macro";

import { grid, Text } from "../../components";
import { InputPizzaDiameter } from "./components/input-pizza-diameter";
import { InputPizzaPrice } from "./components/input-pizza-price";
import { Result } from "./components/result";
import { FormValues, getPercentage, initialFormValues, model, validationSchema } from "./form.model";

const getPercentageData = (values: FormValues, firstPizzaPrimary: boolean): number => {
  const pizza1 = { diameter: values.pizza1Diameter, price: values.pizza1Price };
  const pizza2 = { diameter: values.pizza2Diameter, price: values.pizza2Price };

  return getPercentage({
    primary: firstPizzaPrimary ? pizza1 : pizza2,
    secondary: firstPizzaPrimary ? pizza2 : pizza1,
    extrasPrice: values.extrasPrice,
  });
};

const StyledColumns = styled.div({
  display: "flex",
  flexDirection: "row",
  gap: 16,
});

const StyledColumnsSection = styled.section({
  flexBasis: "100%",
});

const StyledColumnsContent = styled.div({
  display: "grid",
  gridTemplateColumns: "min-content 1fr",
  gridColumnGap: 8,
});

const StyledHeadingPizza = ({ children }: { children: string }) => (
  <Text type="heading2" style={{ textAlign: "center", paddingBottom: grid(1) }}>
    {children}
  </Text>
);

const StyledHeadingExtras = ({ children }: { children: string }) => (
  <Text type="heading3" as="h2" style={{ paddingBottom: grid(1) }}>
    {children}
  </Text>
);

export const Form = () => {
  const form = useFormik({
    initialValues: initialFormValues,
    validationSchema,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onSubmit: () => {},
  });
  const { values, errors, handleChange } = form;

  const [lastValidValues, setLastValidValues] = useState<FormValues>(initialFormValues);

  useEffect(() => {
    // When fields change, on first render the "values" are updated, on second render the "isValid"
    // is updated. There does not seem to be a nice way to get the last valid values,
    // thats why we run the validation manually here, even when the formik also runs validation.
    if (validationSchema.isValidSync(values)) {
      setLastValidValues(values);
    }
  }, [values]);

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
      <StyledColumns>
        <StyledColumnsSection>
          <StyledHeadingPizza>Pizza 1</StyledHeadingPizza>
          <StyledColumnsContent>
            <InputPizzaDiameter
              min={model.pizzaDiameter.min}
              max={model.pizzaDiameter.max}
              {...getSharedProps("pizza1Diameter")}
            />
            <InputPizzaPrice min={model.pizzaPrice.max} max={model.pizzaPrice.max} {...getSharedProps("pizza1Price")} />
          </StyledColumnsContent>

          <Result percentage={pizza1percentage} />
        </StyledColumnsSection>

        <StyledColumnsSection>
          <StyledHeadingPizza>Pizza 2</StyledHeadingPizza>
          <StyledColumnsContent>
            <InputPizzaDiameter
              min={model.pizzaDiameter.min}
              max={model.pizzaDiameter.max}
              {...getSharedProps("pizza2Diameter")}
            />
            <InputPizzaPrice min={model.pizzaPrice.min} max={model.pizzaPrice.max} {...getSharedProps("pizza2Price")} />
          </StyledColumnsContent>

          <Result percentage={pizza2percentage} />
        </StyledColumnsSection>
      </StyledColumns>

      <section>
        <StyledHeadingExtras>Extras like box or delivery</StyledHeadingExtras>
        <InputPizzaPrice min={model.extrasPrice.min} max={model.extrasPrice.max} {...getSharedProps("extrasPrice")} />
      </section>
    </>
  );
};
