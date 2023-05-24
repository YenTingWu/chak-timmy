import React from "react";
import { DatePopover } from "base";
import { useDateRangePickerContext } from "./date-range-picker.context";
import type { DatePopoverProps } from "base";

interface DateRangePickerPopoverProps
  extends Omit<DatePopoverProps, "state" | "triggerRef"> {
  children: React.ReactNode;
}

export const DateRangePickerPopover = ({
  children,
  placement = "bottom start",
  shouldFlip = false,
  offset = 8,
  ...props
}: DateRangePickerPopoverProps) => {
  const { state, ref: triggerRef } = useDateRangePickerContext();

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
