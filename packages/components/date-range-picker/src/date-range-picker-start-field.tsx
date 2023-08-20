import { forwardRef } from "@chakra-ui/system";
import { useDateRangePickerContext } from "./date-range-picker.context";
import { DateField } from "@chak-timmy/base";
import type { HTMLChakraProps } from "@chakra-ui/system";

interface DateRangePickerStartFieldProps extends HTMLChakraProps<"div"> {}

export const DateRangePickerStartField = forwardRef<
  DateRangePickerStartFieldProps,
  "div"
>((props, remoteRef) => {
  const { startFieldProps, state } = useDateRangePickerContext();
  const { value, defaultValue } = startFieldProps;

  const {
    px = "12px",
    mr = "auto",
    display = "flex",
    alignItems = "center",
    color = value == null && defaultValue == null ? "#d9d9d9" : "#1d1d1d",
    borderRadius = "6px",
    outline = state.isOpen ? "2px solid #2869CA" : "1px solid #d9d9d9",
    py = "16px",
    w = "100%",
    minW = "232px",
    maxW = "320px",
    _invalid = {
      outline: "2px solid #B3261E",
    },
    _hover = {
      outline: "1px solid #2869CA",
    },
    _focusWithin = { outline: "2px solid #2869CA" },
    ...rest
  } = props;

  return (
    <DateField
      data-testid="date-range-trigger-start-field"
      fieldProps={startFieldProps}
      px={px}
      mr={mr}
      display={display}
      alignItems={alignItems}
      color={color}
      borderRadius={borderRadius}
      outline={outline}
      py={py}
      w={w}
      minW={minW}
      maxW={maxW}
      _invalid={_invalid}
      _hover={_hover}
      _focusWithin={_focusWithin}
      onPointerDown={state.open}
      {...rest}
      ref={remoteRef}
    />
  );
});
