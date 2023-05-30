import { forwardRef } from "@chakra-ui/system";
import { useDateRangePickerContext } from "./date-range-picker.context";
import { DateField } from "base";
import type { HTMLChakraProps } from "@chakra-ui/system";

interface DateRangePickerStartFieldProps extends HTMLChakraProps<"div"> {}

export const DateRangePickerStartField = forwardRef<
  DateRangePickerStartFieldProps,
  "div"
>((props, remoteRef) => {
  const { startFieldProps, state } = useDateRangePickerContext();

  const {
    px = "12px",
    mr = "auto",
    display = "flex",
    alignItems = "center",
    color = "#d9d9d9",
    borderRadius = "6px",
    border = state.isOpen ? "2px solid #2869CA" : "1px solid #d9d9d9",
    py = "16px",
    w = "100%",
    minW = "232px",
    maxW = "320px",
    _focusWithin = { outline: "2px solid #2869CA" },
    ...rest
  } = props;

  return (
    <DateField
      fieldProps={startFieldProps}
      px={px}
      mr={mr}
      display={display}
      alignItems={alignItems}
      color={color}
      borderRadius={borderRadius}
      border={border}
      py={py}
      w={w}
      minW={minW}
      maxW={maxW}
      _focusWithin={_focusWithin}
      onPointerDown={state.open}
      {...rest}
      ref={remoteRef}
    />
  );
});
