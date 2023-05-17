import React from "react";
import { useCalendar } from "@react-aria/calendar";
import { useLocale } from "@react-aria/i18n";
import { useCalendarState } from "@react-stately/calendar";
import { createCalendar } from "@internationalized/date";
import { DatePickerCalendarProvider } from "./date-picker-calendar.provider";
import type { GridDisplay } from "./date-picker-calendar-types";
import type { CalendarProps, DateValue } from "@react-aria/calendar";

interface DatePickerCalendarProps extends CalendarProps<DateValue> {
  children: React.ReactNode;
}

export const DatePickerCalendar = ({
  children,
  ...props
}: DatePickerCalendarProps) => {
  const [gridDisplay, setGridDisplay] = React.useState<GridDisplay>("day");

  const { locale } = useLocale();

  const state = useCalendarState({
    ...props,
    locale,
    createCalendar,
  });
  const elementProps = useCalendar(props, state);

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
