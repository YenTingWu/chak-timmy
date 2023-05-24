import React from "react";
import { DatePopover } from "base";
import { useDatePickerContext } from "./date-picker.context";
import type { AriaPopoverProps } from "@react-aria/overlays";

interface DatePickerPopoverProps
  extends Omit<AriaPopoverProps, "popoverRef" | "triggerRef"> {
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
