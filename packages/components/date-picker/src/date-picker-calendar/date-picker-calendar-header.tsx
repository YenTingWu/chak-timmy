import { chakra, forwardRef } from "@chakra-ui/system";
import type { HTMLChakraProps } from "@chakra-ui/system";

interface DatePickerCalendarHeaderProps extends HTMLChakraProps<"div"> {}

export const DatePickerCalendarHeader = forwardRef<
  DatePickerCalendarHeaderProps,
  "div"
>((props, ref) => {
  const {
    children,
    display = "flex",
    alignItems = "center",
    justifyContent = "space-between",
    p = "16px",
    ...rest
  } = props;

  return (
    <chakra.div
      display={display}
      alignItems={alignItems}
      justifyContent={justifyContent}
      p={p}
      {...rest}
      ref={ref}
    >
      {children}
    </chakra.div>
  );
});
