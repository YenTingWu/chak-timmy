import { DateRangePickerCalendarContext } from "./date-range-picker-calendar.context";
import type { DateRangePickerContextProps } from "./date-range-picker-calendar.context";

interface DatePickerCalendarProps {
  children: React.ReactNode;
  value: DateRangePickerContextProps;
}

export const DateRangePickerCalendarProvider = ({
  children,
  value,
}: DatePickerCalendarProps) => {
  return (
    <DateRangePickerCalendarContext.Provider value={value}>
      {children}
    </DateRangePickerCalendarContext.Provider>
  );
};
