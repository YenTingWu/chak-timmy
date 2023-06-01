import React from "react";
import { DatePopover } from "@chak-timmy/base";
import { useDatePickerContext } from "./date-picker.context";
import type { DatePopoverProps } from "@chak-timmy/base";

interface DatePickerPopoverProps
  extends Omit<DatePopoverProps, "state" | "triggerRef"> {
  children: React.ReactNode;
}

export const DatePickerPopover = ({
  children,
  placement = "bottom start",
  shouldFlip = false,
  offset = 8,
  ...props
}: DatePickerPopoverProps) => {
  const { state, ref: triggerRef } = useDatePickerContext();

  return (
    <DatePopover
      placement={placement}
      shouldFlip={shouldFlip}
      offset={offset}
      state={state}
      triggerRef={triggerRef}
      {...props}
    >
      {children}
    </DatePopover>
  );
};
