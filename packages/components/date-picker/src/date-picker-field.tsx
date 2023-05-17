import React from "react";
import { chakra, forwardRef } from "@chakra-ui/system";
import { useDateField } from "@react-aria/datepicker";
import { useDateFieldState } from "@react-stately/datepicker";
import { useLocale } from "@react-aria/i18n";
import { createCalendar } from "@internationalized/date";
import { DatePickerSegment } from "./date-picker-segment";
import { useDatePickerContext } from "./date-picker.context";
import { useMergeRefs } from "hooks";
import type { HTMLChakraProps } from "@chakra-ui/system";

interface DatePickerFieldProps extends HTMLChakraProps<"div"> {}

export const DatePickerField = forwardRef<DatePickerFieldProps, "div">(
  (props, remoteRef) => {
    const {
      px = "12px",
      mr = "auto",
      display = "flex",
      alignItems = "center",
      justifyContent = "space-between",
      color = "#d9d9d9",
      ...rest
    } = props;

    const localeRef = React.useRef<HTMLDivElement>(null);

    const ref = useMergeRefs(remoteRef, localeRef);

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
      localeRef,
    );

    if (state.validationState === "invalid") {
      return null;
    }

    return (
      <chakra.div
        ref={ref}
        {...fieldProps}
        px={px}
        mr={mr}
        display={display}
        alignItems={alignItems}
        justifyContent={justifyContent}
        color={color}
        {...rest}
      >
        {state.segments.map((segment, i) => (
          <DatePickerSegment key={i} segment={segment} state={state} />
        ))}
      </chakra.div>
    );
  },
);
