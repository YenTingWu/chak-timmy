import React from "react";
import { chakra } from "@chakra-ui/system";
import { useDateSegment } from "@react-aria/datepicker";
import type { DateFieldState, DateSegment } from "@react-stately/datepicker";

const formatDigit = (digits: string, numberOfDigits: number) => {
  if (isNaN(+digits)) {
    throw new Error("Invalid digits");
  }

  const numberOfCurrentDigits = digits.length;

  if (numberOfCurrentDigits === numberOfDigits) return digits;

  const diff = numberOfDigits - numberOfCurrentDigits;

  const newDigits = Array.from({ length: diff }, () => "0")
    .join("")
    .concat(digits);

  return newDigits;
};

interface DatePickerSegmentProps {
  state: DateFieldState;
  segment: DateSegment;
}

export const DatePickerSegment = ({
  segment,
  state,
}: DatePickerSegmentProps) => {
  const { type } = segment;
  const ref = React.useRef<HTMLDivElement>(null);
  const { segmentProps } = useDateSegment(segment, state, ref);

  return (
    <chakra.div
      flex={type === "literal" ? "0" : "1"}
      mx={type === "literal" ? "0" : "4px"}
      ref={ref}
      {...segmentProps}
    >
      {isNaN(+segment.text)
        ? segment.text
        : formatDigit(segment.text, segment.type === "year" ? 4 : 2)}
    </chakra.div>
  );
};
