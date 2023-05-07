import { createContext, useContext } from "react";
import type { DatePickerAria } from "@react-aria/datepicker";
import type { DatePickerState } from "@react-stately/datepicker";

interface DatePickerContextProps extends DatePickerAria {
  state: DatePickerState;
  ref: React.RefObject<HTMLDivElement>;
}

export const DatePickerContext = createContext<DatePickerContextProps | null>(
  null,
);

export const useDatePickerContext = () => {
  const context = useContext(DatePickerContext);

  if (context == null) {
    throw new Error("DatePickerContext should be used inside DatePicker");
  }

  return context;
};
