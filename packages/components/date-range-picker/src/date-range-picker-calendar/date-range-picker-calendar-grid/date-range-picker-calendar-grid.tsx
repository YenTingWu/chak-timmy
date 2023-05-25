import { DateRangePickerCalendarDateGrid } from "./date-range-picker-calendar-date-grid";
import { DateRangePickerCalendarYearGrid } from "./date-range-picker-calendar-year-grid";
import { useDateRangePickerCalendarContext } from "../date-range-picker-calendar.context";

export const DateRangePickerCalendarGrid = () => {
  const { gridDisplay } = useDateRangePickerCalendarContext();

  return gridDisplay === "day" ? (
    <DateRangePickerCalendarDateGrid />
  ) : (
    <DateRangePickerCalendarYearGrid />
  );
};
