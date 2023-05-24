import React from "react";
import { chakra, forwardRef } from "@chakra-ui/system";
import { useDateField } from "@react-aria/datepicker";
import { useDateFieldState } from "@react-stately/datepicker";
import { useLocale } from "@react-aria/i18n";
import { createCalendar } from "@internationalized/date";
import { useMergeRefs } from "hooks";
import { DateSegment } from "./date-segment";
import type { HTMLChakraProps } from "@chakra-ui/system";
import type { AriaDateFieldOptions, DateValue } from "@react-aria/datepicker";

interface DateFieldProps extends HTMLChakraProps<"div"> {
  fieldProps: AriaDateFieldOptions<DateValue>;
}

export const DateField = forwardRef<DateFieldProps, "div">(
  (props, remoteRef) => {
    const { fieldProps: _fieldProps, children, ...rest } = props;

    const localeRef = React.useRef<HTMLDivElement>(null);

    const ref = useMergeRefs(remoteRef, localeRef);

    const { locale } = useLocale();
    const state = useDateFieldState({
      ..._fieldProps,
      locale,
      createCalendar,
    });
    const { fieldProps } = useDateField(_fieldProps, state, localeRef);

    if (state.validationState === "invalid") {
      return null;
    }

    return (
      <chakra.div ref={ref} {...fieldProps} {...rest}>
        {state.segments.map((segment, i) => (
          <DateSegment key={i} segment={segment} state={state} />
        ))}
      </chakra.div>
    );
  },
);
