import React from "react";
import { chakra } from "@chakra-ui/system";
import { DateRangePickerProvider } from "./date-range-picker.provider";
import { DateRangePickerGroup } from "./date-range-picker-group";
import { DateRangePickerStartField } from "./date-range-picker-start-field";
import { DateRangePickerEndField } from "./date-range-picker-end-field";
import { DateRangePickerPopover } from "./date-range-picker-popover";
import { DateRangePickerDialog } from "./date-range-picker-dialog";
import {
  DateRangePickerCalendar,
  DateRangePickerCalendarContent,
  DateRangePickerCalendarDateGrid,
} from "./date-range-picker-calendar";
import { useDateRangePicker } from "@react-aria/datepicker";
import { useDateRangePickerState } from "@react-stately/datepicker";
import type { DateValue } from "@react-aria/datepicker";
import type { DateRangePickerStateOptions } from "@react-stately/datepicker";

interface DateRangPicker extends DateRangePickerStateOptions<DateValue> {}

export const DateRangePicker = (props: DateRangPicker) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const state = useDateRangePickerState(props);
  const elementProps = useDateRangePicker(props, state, ref);

  return (
    <DateRangePickerProvider
      value={{
        state,
        ref,
        ...elementProps,
      }}
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
              <DateRangePickerCalendarDateGrid />
            </DateRangePickerCalendarContent>
          </DateRangePickerCalendar>
        </DateRangePickerDialog>
      </DateRangePickerPopover>
    </DateRangePickerProvider>
  );
};
