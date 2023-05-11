import React from "react";
import { chakra } from "@chakra-ui/system";
import { useCalendarGrid } from "@react-aria/calendar";
import { useLocale } from "@react-aria/i18n";
import {
  getWeeksInMonth,
  today as createToday,
  getLocalTimeZone,
  isEqualDay,
} from "@internationalized/date";
import { DatePickerCalendarGridCell } from "./date-picker-calendar-grid-cell";
import type { CalendarState } from "@react-stately/calendar";
import type { AriaCalendarGridProps } from "@react-aria/calendar";

interface DatePickerCalendarGridProps extends AriaCalendarGridProps {
  state: CalendarState;
}

const today = createToday(getLocalTimeZone());

export const DatePickerCalendarGrid = ({
  state,
  ...props
}: DatePickerCalendarGridProps) => {
  const { startDate } = props;
  const { locale } = useLocale();
  const { gridProps, headerProps, weekDays } = useCalendarGrid(props, state);
  const weeksInMonth = getWeeksInMonth(state.visibleRange.start, locale);

  return (
    <chakra.div {...gridProps} py="8px" px="20px">
      <chakra.div {...headerProps} display="flex" alignItems="stretch">
        {weekDays.map((day, index) => (
          <React.Fragment key={`${day}_${index}`}>
            <chakra.div
              w="32px"
              h="32px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              flex="1"
            >
              {day}
            </chakra.div>
            {index !== weekDays.length - 1 && <chakra.div w="0.5rem" />}
          </React.Fragment>
        ))}
      </chakra.div>
      {Array.from({ length: weeksInMonth }, (_, weekIndex) => {
        const datesInWeek = state.getDatesInWeek(weekIndex, startDate);

        return (
          <chakra.div
            mt="0.5rem"
            key={weekIndex}
            role="row"
            display="flex"
            alignItems="stretch"
          >
            {datesInWeek.map((date, i) => {
              const isToday = date ? isEqualDay(date, today) : false;

              return date ? (
                <React.Fragment key={`${date.year}_${date.month}_${date.day}`}>
                  <DatePickerCalendarGridCell
                    state={state}
                    date={date}
                    isToday={isToday}
                  />
                  {i !== datesInWeek.length - 1 && <chakra.div w="0.5rem" />}
                </React.Fragment>
              ) : (
                <React.Fragment key={`${date}_${i}`}>
                  <chakra.div flex="1" />
                  {i !== datesInWeek.length - 1 && <chakra.div w="0.5rem" />}
                </React.Fragment>
              );
            })}
          </chakra.div>
        );
      })}
    </chakra.div>
  );
};
