import React from "react";
import { chakra } from "@chakra-ui/system";
import { useCalendarGrid } from "@react-aria/calendar";
import { useLocale } from "@react-aria/i18n";
import {
  getWeeksInMonth,
  today as createToday,
  getLocalTimeZone,
  isEqualDay,
  endOfMonth,
} from "@internationalized/date";
import { DateRangePickerCalendarDateGridCell } from "./date-range-picker-calendar-date-grid-cell";
import { useDateRangePickerCalendarContext } from "../date-range-picker-calendar.context";

const today = createToday(getLocalTimeZone());

export const DateRangePickerCalendarDateGrid = () => {
  const { state } = useDateRangePickerCalendarContext();

  const { locale } = useLocale();
  const startDate = state.visibleRange.start;
  const endDate = endOfMonth(startDate);

  const { gridProps, headerProps, weekDays } = useCalendarGrid(
    { startDate, endDate },
    state,
  );
  const weeksInMonth = React.useMemo(
    () => getWeeksInMonth(state.visibleRange.start, locale),
    [state.visibleRange.start, locale],
  );

  return (
    <chakra.div
      {...gridProps}
      py="8px"
      px="20px"
      sx={{ "*": { fontWeight: 400, fontSize: "0.75rem" } }}
    >
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
              if (date == null) {
                return (
                  <React.Fragment key={`${date}_${i}`}>
                    <chakra.div flex="1" />
                    {i !== datesInWeek.length - 1 && <chakra.div w="0.5rem" />}
                  </React.Fragment>
                );
              }

              const isToday = isEqualDay(date, today);

              return (
                <DateRangePickerCalendarDateGridCell
                  state={state}
                  date={date}
                  isToday={isToday}
                  isLastInWeek={i == datesInWeek.length - 1}
                  key={`${date.toString()}`}
                />
              );
            })}
          </chakra.div>
        );
      })}
    </chakra.div>
  );
};
