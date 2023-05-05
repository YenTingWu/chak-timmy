import { useRef } from "react";
import { chakra } from "@chakra-ui/system";
import { useDateField } from "@react-aria/datepicker";
import { useDateFieldState } from "@react-stately/datepicker";
import { useLocale } from "@react-aria/i18n";
import { createCalendar } from "@internationalized/date";
import { DatePickerSegment } from "./date-picker-segment";
import { DatePickerTriggerButton } from "./date-picker-trigger-button";
import type { DateValue, AriaDatePickerProps } from "@react-aria/datepicker";

interface DatePickerFieldProps extends AriaDatePickerProps<DateValue> {}

export const DatePickerField = (props: DatePickerFieldProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { locale } = useLocale();
  const state = useDateFieldState({ ...props, locale, createCalendar });
  const { fieldProps } = useDateField(props, state, ref);

  if (state.validationState === "invalid") {
    return null;
  }

  return (
    <chakra.div
      border="1px solid #d9d9d9"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      color="#d9d9d9"
      py="2"
      minW="200px"
      {...fieldProps}
      ref={ref}
    >
      {state.segments.map((segment, i) => (
        <DatePickerSegment key={i} segment={segment} state={state} />
      ))}
      <DatePickerTriggerButton />
    </chakra.div>
  );
};
