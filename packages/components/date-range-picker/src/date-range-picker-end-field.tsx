import { forwardRef } from "@chakra-ui/system";
import { useDateRangePickerContext } from "./date-range-picker.context";
import { DateField } from "@chak-timmy/base";
import type { HTMLChakraProps } from "@chakra-ui/system";

interface DateRangePickerEndFieldProps extends HTMLChakraProps<"div"> {}

export const DateRangePickerEndField = forwardRef<
  DateRangePickerEndFieldProps,
  "div"
>((props, remoteRef) => {
  const { endFieldProps, state } = useDateRangePickerContext();

  const {
    px = "12px",
    mr = "auto",
    display = "flex",
    alignItems = "center",
    color = "#d9d9d9",
    borderRadius = "6px",
    outline = state.isOpen ? "2px solid #2869CA" : "1px solid #d9d9d9",
    py = "16px",
    w = "100%",
    maxW = "320px",
    minW = "232px",
    _focusWithin = { outline: "2px solid #2869CA" },
    _invalid = {
      outline: "2px solid #B3261E",
    },
    _hover = {
      outline: "2px solid #828282",
    },
    ...rest
  } = props;

  return (
    <DateField
      fieldProps={endFieldProps}
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
