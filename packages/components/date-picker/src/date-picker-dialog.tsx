import React from "react";
import { forwardRef } from "@chakra-ui/system";
import { DateDialog } from "@chak-timmy/base";
import { useDatePickerContext } from "./date-picker.context";
import type { HTMLChakraProps } from "@chakra-ui/system";

interface DatePickerDialogProps extends HTMLChakraProps<"div"> {
  children: React.ReactNode;
}

export const DatePickerDialog = forwardRef<DatePickerDialogProps, "div">(
  (props, remoteRef) => {
    const {
      children,
      outlineColor = "transparent",
      minW = "312px",
      ...rest
    } = props;

    const { dialogProps: dialogPropsFromDatePickerContext } =
      useDatePickerContext();

    return (
      <DateDialog
        outlineColor={outlineColor}
        minW={minW}
        ref={remoteRef}
        dialogProps={dialogPropsFromDatePickerContext}
        {...rest}
      >
        {children}
      </DateDialog>
    );
  },
);
