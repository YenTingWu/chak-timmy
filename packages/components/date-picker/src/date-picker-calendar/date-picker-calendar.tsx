import React from "react";
import { chakra } from "@chakra-ui/system";
import { useCalendar } from "@react-aria/calendar";
import { useLocale } from "@react-aria/i18n";
import { useCalendarState } from "@react-stately/calendar";
import { DatePickerCalendarHeader } from "./date-picker-calendar-header";
import { DatePickerCalendarTitle } from "./date-picker-calendar-title";
import { DatePickerCalendarPrevButton } from "./date-picker-calendar-prev-button";
import { DatePickerCalendarNextButton } from "./date-picker-calendar-next-button";
import { DatePickerCalendarGrid } from "./date-picker-calendar-grid";
import { createCalendar } from "@internationalized/date";
import { useDatePickerContext } from "../date-picker.context";
import { DatePickerCalendarProvider } from "./date-picker-calendar.provider";
import type { GridDisplay } from "./date-picker-calendar-types";

export const DatePickerCalendar = () => {
  const [gridDisplay, setGridDisplay] = React.useState<GridDisplay>("day");
  const { calendarProps: calendarPropsFromDatePickerContext } =
    useDatePickerContext();
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
      <chakra.div {...elementProps.calendarProps}>
        <DatePickerCalendarHeader>
          <DatePickerCalendarTitle />
          <chakra.div display="flex" alignItems="center">
            <DatePickerCalendarPrevButton />
            <DatePickerCalendarNextButton />
          </chakra.div>
        </DatePickerCalendarHeader>
        <DatePickerCalendarGrid />
      </chakra.div>
    </DatePickerCalendarProvider>
  );
};
