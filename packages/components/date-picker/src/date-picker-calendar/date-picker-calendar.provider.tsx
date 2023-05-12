import { DatePickerCalendarContext } from "./date-picker-calendar.context";
import type { DatePickerContextProps } from "./date-picker-calendar.context";

interface DatePickerCalendarProps {
  children: React.ReactNode;
  value: DatePickerContextProps;
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
