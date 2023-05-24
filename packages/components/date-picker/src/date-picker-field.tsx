import { forwardRef } from "@chakra-ui/system";
import { useDatePickerContext } from "./date-picker.context";
import { DateField } from "base";
import type { HTMLChakraProps } from "@chakra-ui/system";

interface DatePickerFieldProps extends HTMLChakraProps<"div"> {}

export const DatePickerField = forwardRef<DatePickerFieldProps, "div">(
  (props, remoteRef) => {
    const {
      px = "12px",
      mr = "auto",
      display = "flex",
      alignItems = "center",
      color = "#d9d9d9",
      ...rest
    } = props;

    const { fieldProps: fieldPropsFromDatePickerContext } =
      useDatePickerContext();

    return (
      <DateField
        fieldProps={fieldPropsFromDatePickerContext}
        px={px}
        mr={mr}
        display={display}
        alignItems={alignItems}
        color={color}
        {...rest}
        ref={remoteRef}
      />
    );
  },
);
