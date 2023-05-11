import { chakra } from "@chakra-ui/system";
import { useCalendar } from "@react-aria/calendar";
import { useLocale } from "@react-aria/i18n";
import { useCalendarState } from "@react-stately/calendar";
import { DatePickerCalendarHeader } from "./date-picker-calendar-header";
import { DatePickerCalendarPrevButton } from "./date-picker-calendar-prev-button";
import { DatePickerCalendarNextButton } from "./date-picker-calendar-next-button";
import { DatePickerCalendarGrid } from "./date-picker-calendar-grid";
import { createCalendar } from "@internationalized/date";
import { useDatePickerContext } from "../date-picker.context";
import { DatePickerCalendarProvider } from "./date-picker-calendar.provider";

export const DatePickerCalendar = () => {
  const { calendarProps: calendarPropsFromDatePickerContext } =
    useDatePickerContext();
  const { locale } = useLocale();
  const state = useCalendarState({
    ...calendarPropsFromDatePickerContext,
    locale,
    createCalendar,
  });
  const elementProps = useCalendar(calendarPropsFromDatePickerContext, state);
  const { calendarProps, title } = elementProps;

  return (
    <DatePickerCalendarProvider value={{ ...elementProps, state }}>
      <chakra.div
        {...calendarProps}
        className="calendar"
        sx={{ "*": { fontWeight: 400, fontSize: "12px" } }}
      >
        <DatePickerCalendarHeader>
          <chakra.span>{title}</chakra.span>
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
