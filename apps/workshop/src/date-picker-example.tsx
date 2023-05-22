import React from "react";
import { chakra } from "@chakra-ui/system";
import {
  DatePicker,
  DatePickerGroup,
  DatePickerField,
  DatePickerPopover,
  DatePickerDialog,
  DatePickerTriggerButton,
  DatePickerCalendar,
  DatePickerCalendarContent,
  DatePickerCalendarGrid,
  DatePickerCalendarNextButton,
  DatePickerCalendarHeader,
  DatePickerCalendarTitle,
  DatePickerCalendarPrevButton,
  getISODateString,
} from "date-picker";

export const DatePickerExample = () => {
  const [ISOString, setISOString] = React.useState(
    `${getISODateString(new Date())}`,
  );

  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  return (
    <>
      <chakra.h1>Date Now</chakra.h1>
      <chakra.h3>{ISOString}</chakra.h3>
      <DatePicker
        value={ISOString}
        isOpen={isOpen}
        onOpenChange={setIsOpen}
        onChange={(iso: string) => setISOString(iso)}
      >
        <DatePickerGroup>
          <DatePickerField />
          <DatePickerTriggerButton />
        </DatePickerGroup>
        <DatePickerPopover>
          <DatePickerDialog>
            <DatePickerCalendar>
              <DatePickerCalendarContent>
                <DatePickerCalendarHeader>
                  <DatePickerCalendarTitle />
                  <chakra.div display="flex" alignItems="center">
                    <DatePickerCalendarPrevButton />
                    <DatePickerCalendarNextButton />
                  </chakra.div>
                </DatePickerCalendarHeader>
                <DatePickerCalendarGrid />
              </DatePickerCalendarContent>
            </DatePickerCalendar>
          </DatePickerDialog>
        </DatePickerPopover>
      </DatePicker>
    </>
  );
};