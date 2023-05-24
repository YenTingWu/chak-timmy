import React from "react";
import type { DateRangePickerAria } from "@react-aria/datepicker";
import type { DateRangePickerState } from "@react-stately/datepicker";

export interface DateRangePickerContextProps extends DateRangePickerAria {
  state: DateRangePickerState;
  ref: React.RefObject<HTMLDivElement>;
}

export const DateRangePickerContext =
  React.createContext<DateRangePickerContextProps | null>(null);

export const useDateRangePickerContext = () => {
  const context = React.useContext(DateRangePickerContext);

  if (context == null) {
    throw new Error(
      "DateRangePickerContext should be used inside DateRangePicker",
    );
  }

  return context;
};
