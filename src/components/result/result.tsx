import * as React from "react";
import "./result.css";

export const Result: React.FC<{ percentage: number }> = ({ percentage }) => {
  const resultClass = percentage < 0 ? "result-positive" : percentage > 0 ? "result-negative" : "result-neutral";
  const percentageFormatted = Math.abs(percentage * 100).toFixed(0);

  return (
    <p className={`result ${resultClass}`}>
      {percentage !== 0 ? (
        <>
          {percentageFormatted}% {percentage < 0 ? <>less expensive</> : <>more expensive</>} per cm
          <sup>2</sup> of pizza
        </>
      ) : (
        <>Price is the same</>
      )}
    </p>
  );
};
