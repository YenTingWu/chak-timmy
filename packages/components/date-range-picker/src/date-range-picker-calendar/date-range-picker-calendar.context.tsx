import React from "react";
import type { CalendarAria } from "@react-aria/calendar";
import type { RangeCalendarState } from "@react-stately/calendar";
import type { GridDisplay } from "@chak-timmy/types";

export interface DateRangePickerContextProps extends CalendarAria {
  state: RangeCalendarState;
  gridDisplay: GridDisplay;
  setGridDisplay: React.Dispatch<React.SetStateAction<GridDisplay>>;
}

export const DateRangePickerCalendarContext =
  React.createContext<DateRangePickerContextProps | null>(null);

export const useDateRangePickerCalendarContext = () => {
  const context = React.useContext(DateRangePickerCalendarContext);

  if (context == null) {
    throw new Error(
      "DateRangePickerCalendarContext should be used inside DateRangePickerCalendar",
    );
  }

  return context;
};
