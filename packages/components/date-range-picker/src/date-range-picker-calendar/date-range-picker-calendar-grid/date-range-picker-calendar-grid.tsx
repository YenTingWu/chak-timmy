import { PickerCalendarDateGrid } from "base";
import { useDateRangePickerCalendarContext } from "../date-range-picker-calendar.context";

export const DateRangePickerCalendarDateGrid = () => {
  const { state } = useDateRangePickerCalendarContext();

  return <PickerCalendarDateGrid state={state} />;
};
