import { createContext, useContext } from "react";
import type { CalendarAria } from "@react-aria/calendar";
import type { CalendarState } from "@react-stately/calendar";

interface DatePickerContextProps extends CalendarAria {
  state: CalendarState;
}

export const DatePickerCalendarContext =
  createContext<DatePickerContextProps | null>(null);

export const useDatePickerCalendarContext = () => {
  const context = useContext(DatePickerCalendarContext);

  if (context == null) {
    throw new Error(
      "DatePickerCalendarContext should be used inside DatePickerCalendar",
    );
  }

  return context;
};
