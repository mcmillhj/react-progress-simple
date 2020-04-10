import React, { CSSProperties } from "react";

import "./progress.css";

type InlineStyles =
  | "--rps-width"
  | "--rps-height"
  | "--rps-foreground-color"
  | "--rps-background-color"
  | "--rps-border-radius"
  | "--rps-separator-width";

const optionsMap: Record<keyof StyleOptions, InlineStyles> = {
  width: "--rps-width",
  height: "--rps-height",
  foregroundColor: "--rps-foreground-color",
  backgroundColor: "--rps-background-color",
  borderRadius: "--rps-border-radius",
  separatorWidth: "--rps-separator-width",
};

type StyleOptions = {
  width?: CSSProperties["width"];
  height?: CSSProperties["height"];
  foregroundColor?: CSSProperties["color"];
  backgroundColor?: CSSProperties["backgroundColor"];
  borderRadius?: CSSProperties["borderRadius"];
  separatorWidth?: CSSProperties["margin"];
};

type ProgressProps = {
  value: number;
  options?: StyleOptions;
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
  // variables need to be inline to ensure that values are distinct across instances of the <Progress /> component
  const inlineVariables = options
    ? (Object.keys(options) as (keyof StyleOptions)[]).reduce(
        (acc: Partial<Record<InlineStyles, any>>, current) => {
          acc[optionsMap[current]] = options[current];

          return acc;
        },
        {}
      )
    : {};

  if (!segmented) {
    // needed to style "completed" progress bars for varying sizes of 'max'
    const isComplete = value >= max;

    return (
      <progress
        aria-valuemax={max}
        aria-valuenow={value > max ? max : value}
        style={inlineVariables as CSSProperties}
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
            style={inlineVariables as CSSProperties}
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
