import React from "react";
import type { CalendarAria } from "@react-aria/calendar";
import type { CalendarState } from "@react-stately/calendar";
import type { GridDisplay } from "@chak-timmy/types";

export interface DatePickerContextProps extends CalendarAria {
  state: CalendarState;
  gridDisplay: GridDisplay;
  setGridDisplay: React.Dispatch<React.SetStateAction<GridDisplay>>;
}

export const DatePickerCalendarContext =
  React.createContext<DatePickerContextProps | null>(null);

export const useDatePickerCalendarContext = () => {
  const context = React.useContext(DatePickerCalendarContext);

  if (context == null) {
    throw new Error(
      "DatePickerCalendarContext should be used inside DatePickerCalendar",
    );
  }

  return context;
};
