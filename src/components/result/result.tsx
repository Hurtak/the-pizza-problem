import * as React from "react";
import styled from "styled-components/macro";
import * as s from "../../styles";
import { Color } from "../../styles";

type ResultType = "POSITIVE" | "NEGATIVE" | "NEUTRAL";

const resultTypeToColor = (type: ResultType): Color => {
  switch (type) {
    case "POSITIVE":
      return s.colors.green1;
    case "NEGATIVE":
      return s.colors.red1;
    case "NEUTRAL":
      return s.colors.blue2;
  }
};

const ResultStyled = styled.p((props: { type: ResultType }) => ({
  color: resultTypeToColor(props.type),
}));

export const Result: React.FC<{ percentage: number }> = ({ percentage }) => {
  const type: ResultType = percentage < 0 ? "POSITIVE" : percentage > 0 ? "NEGATIVE" : "NEUTRAL";

  const percentageFormatted = Math.abs(percentage * 100).toFixed(0);

  return (
    <ResultStyled type={type}>
      {type === "NEUTRAL" ? (
        <>Price is the same</>
      ) : (
        <>
          {percentageFormatted}% {type === "POSITIVE" ? <>less expensive</> : <>more expensive</>} per cm
          <sup>2</sup> of pizza
        </>
      )}
    </ResultStyled>
  );
};
