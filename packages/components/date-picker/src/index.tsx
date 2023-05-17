import { chakra } from "@chakra-ui/system";
import { DatePickerProvider } from "./date-picker.provider";
import { DatePickerGroup } from "./date-picker-group";
import { DatePickerField } from "./date-picker-field";
import { DatePickerPopover } from "./date-picker-popover";
import { DatePickerDialog } from "./date-picker-dialog";
import { DatePickerTriggerButton } from "./date-picker-trigger-button";
import {
  DatePickerCalendar,
  DatePickerCalendarContent,
  DatePickerCalendarGrid,
  DatePickerCalendarNextButton,
  DatePickerCalendarHeader,
  DatePickerCalendarTitle,
  DatePickerCalendarPrevButton,
} from "./date-picker-calendar";
import { useDatePickerContext } from "./date-picker.context";
import type { DateValue } from "@react-aria/datepicker";
import type { DatePickerStateOptions } from "@react-stately/datepicker";

interface DatePickerProps extends DatePickerStateOptions<DateValue> {}

export const DatePickerSke = () => {
  const { calendarProps } = useDatePickerContext();

  return (
    <chakra.div
      fontWeight={400}
      fontSize="16px"
      lineHeight="20px"
      sx={{
        "*": {
          fontFamily: "'Inter'",
        },
      }}
    >
      <DatePickerGroup>
        <DatePickerField />
        <DatePickerTriggerButton />
      </DatePickerGroup>
      <DatePickerPopover>
        <DatePickerDialog>
          <DatePickerCalendar {...calendarProps}>
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
    </chakra.div>
  );
};

export const DatePickerExample = (props: DatePickerProps) => {
  return (
    <DatePickerProvider {...props}>
      <DatePickerSke />
    </DatePickerProvider>
  );
};
