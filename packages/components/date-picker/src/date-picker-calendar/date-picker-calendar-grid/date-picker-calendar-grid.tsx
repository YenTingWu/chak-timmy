import { DatePickerCalendarYearGrid } from "./date-picker-calendar-year-grid";
import { DatePickerCalendarDateGrid } from "./date-picker-calendar-date-grid";
import { useDatePickerCalendarContext } from "../date-picker-calendar.context";

export const DatePickerCalendarGrid = () => {
  const { gridDisplay } = useDatePickerCalendarContext();

  return gridDisplay === "day" ? (
    <DatePickerCalendarDateGrid />
  ) : (
    <DatePickerCalendarYearGrid />
  );
};
