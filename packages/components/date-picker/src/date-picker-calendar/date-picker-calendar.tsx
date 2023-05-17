import React from "react";
import { useCalendar } from "@react-aria/calendar";
import { useLocale } from "@react-aria/i18n";
import { useCalendarState } from "@react-stately/calendar";
import { createCalendar } from "@internationalized/date";
import { DatePickerCalendarProvider } from "./date-picker-calendar.provider";
import { useDatePickerContext } from "../date-picker.context";
import type { GridDisplay } from "./date-picker-calendar-types";

interface DatePickerCalendarProps {
  children: React.ReactNode;
}

export const DatePickerCalendar = ({ children }: DatePickerCalendarProps) => {
  const { calendarProps: calendarPropsFromDatePickerContext } =
    useDatePickerContext();

  const [gridDisplay, setGridDisplay] = React.useState<GridDisplay>("day");

  const { locale } = useLocale();

  const state = useCalendarState({
    ...calendarPropsFromDatePickerContext,
    locale,
    createCalendar,
  });
  const elementProps = useCalendar(calendarPropsFromDatePickerContext, state);

  return (
    <DatePickerCalendarProvider
      value={{
        ...elementProps,
        state,
        gridDisplay,
        setGridDisplay,
      }}
    >
      {children}
    </DatePickerCalendarProvider>
  );
};
