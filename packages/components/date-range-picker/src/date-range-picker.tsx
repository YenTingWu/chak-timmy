import React from "react";
import { chakra } from "@chakra-ui/system";
import { DateRangePickerProvider } from "./date-range-picker.provider";
import { useDateRangePicker } from "@react-aria/datepicker";
import { useDateRangePickerState } from "@react-stately/datepicker";
import type { DateValue } from "@react-aria/datepicker";
import type { DateRangePickerStateOptions } from "@react-stately/datepicker";

interface DateRangPicker extends DateRangePickerStateOptions<DateValue> {}

export const DateRangePicker = (props: DateRangPicker) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const state = useDateRangePickerState(props);
  const elementProps = useDateRangePicker(props, state, ref);

  const { groupProps, startFieldProps, endFieldProps } = elementProps;

  const fieldRef = React.useRef(null);

  return (
    <DateRangePickerProvider
      value={{
        state,
        ref,
        ...elementProps,
      }}
    >
      <chakra.div {...groupProps}>
        {/* <chakra.div {...startFieldProps} ref={fieldRef}></chakra.div> */}
      </chakra.div>
    </DateRangePickerProvider>
  );
};
