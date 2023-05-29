import { chakra } from "@chakra-ui/system";
import {
  DateRangePicker,
  DateRangePickerGroup,
  DateRangePickerStartField,
  DateRangePickerEndField,
  DateRangePickerPopover,
  DateRangePickerDialog,
  DateRangePickerCalendar,
  DateRangePickerCalendarContent,
  DateRangePickerCalendarGrid,
  DateRangePickerCalendarHeader,
  DateRangePickerCalendarTitle,
  DateRangePickerCalendarNextButton,
  DateRangePickerCalendarPrevButton,
} from "date-range-picker";

export const DateRangePickerExample = () => {
  return (
    <DateRangePicker>
      <DateRangePickerGroup mt="36px">
        <DateRangePickerStartField />
        <chakra.div mx="16px">-</chakra.div>
        <DateRangePickerEndField />
      </DateRangePickerGroup>
      <DateRangePickerPopover>
        <DateRangePickerDialog>
          <DateRangePickerCalendar>
            <DateRangePickerCalendarContent>
              <DateRangePickerCalendarHeader>
                <DateRangePickerCalendarTitle />
                <chakra.div display="flex" alignItems="center">
                  <DateRangePickerCalendarPrevButton />
                  <DateRangePickerCalendarNextButton />
                </chakra.div>
              </DateRangePickerCalendarHeader>
              <DateRangePickerCalendarGrid />
            </DateRangePickerCalendarContent>
          </DateRangePickerCalendar>
        </DateRangePickerDialog>
      </DateRangePickerPopover>
    </DateRangePicker>
  );
};
