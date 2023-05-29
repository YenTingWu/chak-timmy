import React from "react";
import { DateRangePickerProvider } from "./date-range-picker.provider";
import { useDateRangePicker } from "@react-aria/datepicker";
import { useDateRangePickerState } from "@react-stately/datepicker";
import type { DateValue } from "@react-aria/datepicker";
import type { DateRangePickerStateOptions } from "@react-stately/datepicker";

interface DateRangPicker extends DateRangePickerStateOptions<DateValue> {
  children: React.ReactNode;
}

export const DateRangePicker = ({ children, ...props }: DateRangPicker) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const state = useDateRangePickerState(props);
  const elementProps = useDateRangePicker(props, state, ref);

  return (
    <DateRangePickerProvider
      value={{
        state,
        ref,
        ...elementProps,
      }}
    >
      {children}
    </DateRangePickerProvider>
  );
};
