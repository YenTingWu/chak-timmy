import { useRef } from "react";
import { chakra } from "@chakra-ui/system";
import { useDatePicker } from "@react-aria/datepicker";
import { useDatePickerState } from "@react-stately/datepicker";
import { DatePickerField } from "./date-picker-field";
import type { DateValue } from "@react-aria/datepicker";
import type { DatePickerStateOptions } from "@react-stately/datepicker";

interface DatePickerProps extends DatePickerStateOptions<DateValue> {}

export const DatePicker = (props: DatePickerProps) => {
  const state = useDatePickerState(props);
  const ref = useRef(null);
  const { labelProps, fieldProps } = useDatePicker(props, state, ref);

  return (
    <chakra.div>
      <chakra.label {...labelProps}>{props.label ?? "HIHILHI"}</chakra.label>
      <DatePickerField {...fieldProps} />
    </chakra.div>
  );
};
