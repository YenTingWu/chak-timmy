import React from "react";
import { DateRangePickerContext } from "./date-range-picker.context";
import type { DateRangePickerContextProps } from "./date-range-picker.context";

interface DateRangePickerProps {
  children: React.ReactNode;
  value: DateRangePickerContextProps;
}

export const DateRangePickerProvider = ({
  children,
  value,
}: DateRangePickerProps) => {
  return (
    <DateRangePickerContext.Provider value={value}>
      {children}
    </DateRangePickerContext.Provider>
  );
};
