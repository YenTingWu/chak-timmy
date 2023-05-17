import React from "react";
import { DatePickerContext } from "./date-picker.context";
import type { DatePickerContextProps } from "./date-picker.context";

interface DatePickerProps {
  children: React.ReactNode;
  value: DatePickerContextProps;
}

export const DatePickerProvider = ({ children, value }: DatePickerProps) => {
  return (
    <DatePickerContext.Provider value={value}>
      {children}
    </DatePickerContext.Provider>
  );
};
