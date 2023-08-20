import { forwardRef } from "@chakra-ui/system";
import { useDatePickerContext } from "./date-picker.context";
import { DateField } from "@chak-timmy/base";
import type { HTMLChakraProps } from "@chakra-ui/system";

interface DatePickerFieldProps extends HTMLChakraProps<"div"> {}

export const DatePickerField = forwardRef<DatePickerFieldProps, "div">(
  (props, remoteRef) => {
    const { fieldProps: fieldPropsFromDatePickerContext } =
      useDatePickerContext();

    const { value, defaultValue } = fieldPropsFromDatePickerContext;

    const {
      px = "12px",
      mr = "auto",
      display = "flex",
      alignItems = "center",
      color = value == null && defaultValue == null ? "#d9d9d9" : "#1d1d1d",
      ...rest
    } = props;

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
