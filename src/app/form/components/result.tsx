import styled from "styled-components/macro";

import { Color, colors } from "../../../components";

type ResultType = "POSITIVE" | "NEGATIVE" | "NEUTRAL";

const resultTypeToColor = (type: ResultType): Color => {
  switch (type) {
    case "POSITIVE":
      return colors.green;
    case "NEGATIVE":
      return colors.red;
    case "NEUTRAL":
      return colors.blue;
  }
};

const StyledResult = styled.p((props: { type: ResultType }) => ({
  color: resultTypeToColor(props.type),
}));

export const Result = ({ percentage }: { percentage: number }) => {
  const type: ResultType = percentage < 0 ? "POSITIVE" : percentage > 0 ? "NEGATIVE" : "NEUTRAL";

  const percentageFormatted = Math.abs(percentage * 100).toFixed(0);

  return (
    <StyledResult type={type}>
      {type === "NEUTRAL" ? (
        <>Price is the same</>
      ) : (
        <>
          {percentageFormatted}% {type === "POSITIVE" ? <>less expensive</> : <>more expensive</>} per cm
          <sup>2</sup> of pizza
        </>
      )}
    </StyledResult>
  );
};
