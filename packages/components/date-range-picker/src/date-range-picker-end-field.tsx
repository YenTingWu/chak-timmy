import { forwardRef } from "@chakra-ui/system";
import { useDateRangePickerContext } from "./date-range-picker.context";
import { DateField } from "base";
import type { HTMLChakraProps } from "@chakra-ui/system";

interface DateRangePickerEndFieldProps extends HTMLChakraProps<"div"> {}

export const DateRangePickerEndField = forwardRef<
  DateRangePickerEndFieldProps,
  "div"
>((props, remoteRef) => {
  const {
    px = "12px",
    mr = "auto",
    display = "flex",
    alignItems = "center",
    color = "#d9d9d9",
    ...rest
  } = props;

  const { endFieldProps } = useDateRangePickerContext();

  return (
    <DateField
      fieldProps={endFieldProps}
      px={px}
      mr={mr}
      display={display}
      alignItems={alignItems}
      color={color}
      {...rest}
      ref={remoteRef}
    />
  );
});
