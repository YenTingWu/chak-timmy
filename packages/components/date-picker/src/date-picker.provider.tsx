import { DatePickerContext } from "./date-picker.context";
import { useRef } from "react";
import { useDatePicker } from "@react-aria/datepicker";
import { useDatePickerState } from "@react-stately/datepicker";
import type { DateValue } from "@react-aria/datepicker";
import type { DatePickerStateOptions } from "@react-stately/datepicker";

interface DatePickerProps extends DatePickerStateOptions<DateValue> {
  children: React.ReactNode;
}

export const DatePickerProvider = ({ children, ...props }: DatePickerProps) => {
  const state = useDatePickerState(props);
  const ref = useRef<HTMLDivElement>(null);
  const elementProps = useDatePicker(props, state, ref);

  return (
    <DatePickerContext.Provider value={{ ...elementProps, state, ref }}>
      {children}
    </DatePickerContext.Provider>
  );
};
