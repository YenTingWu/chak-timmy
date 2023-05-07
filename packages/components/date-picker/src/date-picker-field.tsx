import { useRef } from "react";
import { chakra } from "@chakra-ui/system";
import { useDateField } from "@react-aria/datepicker";
import { useDateFieldState } from "@react-stately/datepicker";
import { useLocale } from "@react-aria/i18n";
import { createCalendar } from "@internationalized/date";
import { DatePickerSegment } from "./date-picker-segment";
import { useDatePickerContext } from "./date-picker.context";

export const DatePickerField = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { fieldProps: fieldPropsFromDatePickerContext } =
    useDatePickerContext();

  const { locale } = useLocale();
  const state = useDateFieldState({
    ...fieldPropsFromDatePickerContext,
    locale,
    createCalendar,
  });
  const { fieldProps } = useDateField(
    fieldPropsFromDatePickerContext,
    state,
    ref,
  );

  if (state.validationState === "invalid") {
    return null;
  }

  return (
    <chakra.div
      px="12px"
      mr="auto"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      color="#d9d9d9"
      {...fieldProps}
      ref={ref}
    >
      {state.segments.map((segment, i) => (
        <DatePickerSegment key={i} segment={segment} state={state} />
      ))}
    </chakra.div>
  );
};
