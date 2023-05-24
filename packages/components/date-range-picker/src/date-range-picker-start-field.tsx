import { forwardRef } from "@chakra-ui/system";
import { useDateRangePickerContext } from "./date-range-picker.context";
import { DateField } from "base";
import type { HTMLChakraProps } from "@chakra-ui/system";

interface DateRangePickerStartFieldProps extends HTMLChakraProps<"div"> {}

export const DateRangePickerStartField = forwardRef<
  DateRangePickerStartFieldProps,
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

  const { startFieldProps } = useDateRangePickerContext();

  return (
    <DateField
      fieldProps={startFieldProps}
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
