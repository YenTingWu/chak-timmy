import React from "react";
import { chakra } from "@chakra-ui/system";
import { useDateSegment } from "@react-aria/datepicker";
import type { DateFieldState, DateSegment } from "@react-stately/datepicker";

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
      {segment.text}
    </chakra.div>
  );
};
