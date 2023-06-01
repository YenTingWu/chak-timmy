import { chakra, forwardRef } from "@chakra-ui/system";
import { useDateRangePickerCalendarContext } from "./date-range-picker-calendar.context";
import { useMergeRefs } from "@chak-timmy/hooks";
import type { HTMLChakraProps } from "@chakra-ui/system";

interface DateRangePickerCalendarContentProps extends HTMLChakraProps<"div"> {
  children: React.ReactNode;
}

export const DateRangePickerCalendarContent = forwardRef<
  DateRangePickerCalendarContentProps,
  "div"
>((props, remoteRef) => {
  const { children, overflowY = "auto", ...rest } = props;
  const { ref: localRef, calendarProps } = useDateRangePickerCalendarContext();

  const ref = useMergeRefs(localRef, remoteRef);

  return (
    <chakra.div ref={ref} {...calendarProps} overflowY={overflowY} {...rest}>
      {children}
    </chakra.div>
  );
});
