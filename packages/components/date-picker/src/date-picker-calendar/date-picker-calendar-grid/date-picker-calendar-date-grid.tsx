import { PickerCalendarDateGrid } from "base";
import { useDatePickerCalendarContext } from "../date-picker-calendar.context";

export const DatePickerCalendarDateGrid = () => {
  const { state } = useDatePickerCalendarContext();

  return <PickerCalendarDateGrid state={state} />;
};
