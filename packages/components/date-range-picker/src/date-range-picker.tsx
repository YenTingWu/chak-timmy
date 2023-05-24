import React from "react";
import { chakra } from "@chakra-ui/system";
import { DateRangePickerProvider } from "./date-range-picker.provider";
import { DateRangePickerStartField } from "./date-range-picker-start-field";
import { DateRangePickerEndField } from "./date-range-picker-end-field";
import { useDateRangePicker } from "@react-aria/datepicker";
import { useDateRangePickerState } from "@react-stately/datepicker";
import type { DateValue } from "@react-aria/datepicker";
import type { DateRangePickerStateOptions } from "@react-stately/datepicker";

interface DateRangPicker extends DateRangePickerStateOptions<DateValue> {}

export const DateRangePicker = (props: DateRangPicker) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const state = useDateRangePickerState(props);
  const elementProps = useDateRangePicker(props, state, ref);

  const { groupProps } = elementProps;

  console.log("groupProps", JSON.stringify(groupProps, null, 2));

  return (
    <DateRangePickerProvider
      value={{
        state,
        ref,
        ...elementProps,
      }}
    >
      <chakra.div {...groupProps}>
        <DateRangePickerStartField border="1px solid black" />
        <DateRangePickerEndField border="1px solid black" />
      </chakra.div>
    </DateRangePickerProvider>
  );
};
