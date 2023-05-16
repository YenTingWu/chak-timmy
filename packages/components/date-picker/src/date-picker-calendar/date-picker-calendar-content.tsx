import { chakra, forwardRef } from "@chakra-ui/system";
import { useDatePickerCalendarContext } from "./date-picker-calendar.context";
import type { HTMLChakraProps } from "@chakra-ui/system";

interface DatePickerCalendarContentProps extends HTMLChakraProps<"div"> {
  children: React.ReactNode;
}

export const DatePickerCalendarContent = forwardRef<
  DatePickerCalendarContentProps,
  "div"
>((props, ref) => {
  const { children, overflowY = "auto", ...rest } = props;
  const { calendarProps } = useDatePickerCalendarContext();

  return (
    <chakra.div {...calendarProps} overflowY={overflowY} {...rest}>
      {children}
    </chakra.div>
  );
});
