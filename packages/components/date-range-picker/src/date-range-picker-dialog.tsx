import React from "react";
import { forwardRef } from "@chakra-ui/system";
import { DateDialog } from "@chak-timmy/base";
import { useDateRangePickerContext } from "./date-range-picker.context";
import type { HTMLChakraProps } from "@chakra-ui/system";

interface DateRangePickerDialogProps extends HTMLChakraProps<"div"> {
  children: React.ReactNode;
}

export const DateRangePickerDialog = forwardRef<
  DateRangePickerDialogProps,
  "div"
>((props, remoteRef) => {
  const {
    children,
    outlineColor = "transparent",
    minW = "312px",
    ...rest
  } = props;

  const { dialogProps: dialogPropsFromDateRangePickerContext } =
    useDateRangePickerContext();

  return (
    <DateDialog
      outlineColor={outlineColor}
      minW={minW}
      ref={remoteRef}
      dialogProps={dialogPropsFromDateRangePickerContext}
      {...rest}
    >
      {children}
    </DateDialog>
  );
});
