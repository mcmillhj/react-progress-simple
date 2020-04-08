import React, { CSSProperties } from "react";

import "./progress.css";

const defaultOptions = {
  width: "100%",
  height: "8px",
  foregroundColor: "tomato",
  backgroundColor: "lightgray",
  borderRadius: "4px",
  separatorWidth: "4px",
};

type ProgressProps = {
  value: number;
  options?: {
    width?: CSSProperties["width"];
    height?: CSSProperties["height"];
    foregroundColor?: CSSProperties["color"];
    backgroundColor?: CSSProperties["backgroundColor"];
    borderRadius?: CSSProperties["borderRadius"];
    separatorWidth?: CSSProperties["margin"];
  };
} & (
  | { segmented?: false; max: number }
  | {
      segmented: true;
      max:
        | 2
        | 3
        | 4
        | 5
        | 6
        | 7
        | 8
        | 9
        | 10
        | 11
        | 12
        | 13
        | 14
        | 15
        | 16
        | 17
        | 18
        | 19
        | 20
        | 21
        | 22
        | 23
        | 24
        | 25
        | 26
        | 27
        | 28
        | 29
        | 30
        | 31
        | 32
        | 33
        | 34
        | 35
        | 36
        | 37
        | 38
        | 39
        | 40
        | 41
        | 42
        | 43
        | 44
        | 45
        | 46
        | 47
        | 48
        | 49
        | 50;
    }
);

const Progress: React.SFC<ProgressProps> = ({
  max,
  value,
  segmented = false,
  options,
  ...restProps
}) => {
  const mergedOptions = { ...defaultOptions, ...options };

  // variables need to be inline to ensure that values are distinct across instances of the <Progress /> component
  const inlineVariables = {
    "--width": mergedOptions.width,
    "--height": mergedOptions.height,
    "--foreground-color": mergedOptions.foregroundColor,
    "--background-color": mergedOptions.backgroundColor,
    "--border-radius": mergedOptions.borderRadius,
    "--segment-margin": mergedOptions.separatorWidth,
  };

  if (!segmented) {
    // needed to style "completed" progress bars for varying sizes of 'max'
    const isComplete = value >= max;

    return (
      <progress
        aria-valuemax={max}
        aria-valuenow={value > max ? max : value}
        style={inlineVariables}
        className={"progress"}
        max={isComplete ? 100 : max}
        value={isComplete ? 100 : value}
        {...restProps}
      />
    );
  }

  return (
    <div
      role="progressbar"
      aria-valuemax={max}
      aria-valuenow={value > max ? max : value}
    >
      {[...new Array(max)].map((_, idx) => {
        const className = [
          "progress",
          "progress-segment",
          `progress-segment-${max}`,
          idx === 0 ? "progress-segment-start" : "",
          idx === max - 1 ? "progress-segment-end" : "",
        ].join(" ");

        return (
          <progress
            aria-hidden
            style={inlineVariables}
            key={idx}
            className={className}
            max={1}
            value={value >= idx + 1 ? 1 : 0}
            {...restProps}
          />
        );
      })}
    </div>
  );
};

export default Progress;
