import React from "react";
import { useLocale } from "@react-aria/i18n";
import { createCalendar } from "@internationalized/date";
import { useRangeCalendar } from "@react-aria/calendar";
import { useRangeCalendarState } from "@react-stately/calendar";
import { DateRangePickerCalendarProvider } from "./date-range-picker-calendar.provider";
import { useDateRangePickerContext } from "../date-range-picker.context";
import type { GridDisplay } from "@chak-timmy/types";

interface DateRangePickerCalendarProps {
  children: React.ReactNode;
}

export const DateRangePickerCalendar = ({
  children,
}: DateRangePickerCalendarProps) => {
  const [gridDisplay, setGridDisplay] = React.useState<GridDisplay>("day");

  const { locale } = useLocale();
  const ref = React.useRef<HTMLDivElement>(null);

  const { calendarProps: calendarPropsFromDateRangePickerContext } =
    useDateRangePickerContext();

  const state = useRangeCalendarState({
    ...calendarPropsFromDateRangePickerContext,
    locale,
    createCalendar,
  });

  const elementProps = useRangeCalendar(
    calendarPropsFromDateRangePickerContext,
    state,
    ref,
  );

  return (
    <DateRangePickerCalendarProvider
      value={{
        ...elementProps,
        state,
        gridDisplay,
        setGridDisplay,
        ref,
      }}
    >
      {children}
    </DateRangePickerCalendarProvider>
  );
};
