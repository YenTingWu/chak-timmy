import React from "react";
import { useDatePicker } from "@react-aria/datepicker";
import { useDatePickerState } from "@react-stately/datepicker";
import { DatePickerProvider } from "./date-picker.provider";
import type { DateValue } from "@react-aria/datepicker";
import type { DatePickerStateOptions } from "@react-stately/datepicker";

interface DatePickerProps extends DatePickerStateOptions<DateValue> {
  children: React.ReactNode;
}

export const DatePicker = ({ children, ...props }: DatePickerProps) => {
  const state = useDatePickerState({ ...props });
  const ref = React.useRef<HTMLDivElement>(null);
  const elementProps = useDatePicker(props, state, ref);

  return (
    <DatePickerProvider value={{ state, ref, ...elementProps }}>
      {children}
    </DatePickerProvider>
  );
};
