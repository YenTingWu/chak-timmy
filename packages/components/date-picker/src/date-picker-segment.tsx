import { chakra } from "@chakra-ui/system";
import { useRef } from "react";
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
  const ref = useRef<HTMLDivElement>(null);
  const { segmentProps } = useDateSegment(segment, state, ref);

  return (
    <chakra.div
      flex={type === "literal" ? "0" : "1"}
      ref={ref}
      {...segmentProps}
    >
      {segment.text}
    </chakra.div>
  );
};
