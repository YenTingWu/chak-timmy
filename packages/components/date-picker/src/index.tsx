import { useRef } from "react";
import { chakra } from "@chakra-ui/system";
import { useDatePicker } from "@react-aria/datepicker";
import { useDatePickerState } from "@react-stately/datepicker";
import { DatePickerField } from "./date-picker-field";
import { DatePickerPopover } from "./date-picker-popover";
import { DatePickerDialog } from "./date-picker-dialog";
import { DatePickerTriggerButton } from "./date-picker-trigger-button";
import type { DateValue } from "@react-aria/datepicker";
import type { DatePickerStateOptions } from "@react-stately/datepicker";

interface DatePickerProps extends DatePickerStateOptions<DateValue> {}

export const DatePicker = (props: DatePickerProps) => {
  const state = useDatePickerState(props);
  const ref = useRef<HTMLDivElement>(null);

  const { labelProps, fieldProps, buttonProps, dialogProps, groupProps } =
    useDatePicker(props, state, ref);

  return (
    <chakra.div>
      <chakra.label {...labelProps}>{props.label ?? "HIHILHI"}</chakra.label>
      <div {...groupProps} ref={ref}>
        <DatePickerField {...fieldProps} />
        <DatePickerTriggerButton {...buttonProps} />
      </div>
      {state.isOpen && (
        <DatePickerPopover triggerRef={ref} state={state}>
          <DatePickerDialog {...dialogProps}>
            <div> asdkjfalsdfjlkajsdflkjasldkfjalksdkjflkasdf</div>
          </DatePickerDialog>
        </DatePickerPopover>
      )}
    </chakra.div>
  );
};
