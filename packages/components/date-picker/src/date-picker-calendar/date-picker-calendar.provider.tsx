import { DatePickerCalendarContext } from "./date-picker-calendar.context";
import type { CalendarAria } from "@react-aria/calendar";
import type { CalendarState } from "@react-stately/calendar";

interface DatePickerCalendarValue extends CalendarAria {
  state: CalendarState;
}

interface DatePickerCalendarProps {
  children: React.ReactNode;
  value: DatePickerCalendarValue;
}

export const DatePickerCalendarProvider = ({
  children,
  value,
}: DatePickerCalendarProps) => {
  return (
    <DatePickerCalendarContext.Provider value={value}>
      {children}
    </DatePickerCalendarContext.Provider>
  );
};
