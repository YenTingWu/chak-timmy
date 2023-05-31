import React from "react";
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
import { getISODateString } from "@chak-timmy/utils";

export const DateRangePickerExample = () => {
  const [value, setValue] = React.useState({
    start: getISODateString(new Date()),
    end: getISODateString(new Date()),
  });

  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  return (
    <>
      <chakra.h1>Date Now</chakra.h1>
      <chakra.h3>{`${value.start} --> ${value.end}`}</chakra.h3>
      <DateRangePicker
        value={value}
        isOpen={isOpen}
        onOpenChange={setIsOpen}
        onChange={(newValue: { start: string; end: string }) =>
          setValue(newValue)
        }
      >
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
    </>
  );
};
