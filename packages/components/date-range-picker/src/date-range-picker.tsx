import React from "react";
import { DateRangePickerProvider } from "./date-range-picker.provider";
import { useDateRangePicker } from "@react-aria/datepicker";
import { useDateRangePickerState } from "@react-stately/datepicker";
import { CalendarDate, parseDate } from "@internationalized/date";

export interface DateRangePickerProps {
  isOpen?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (isOpen: boolean) => void;
  shouldCloseOnSelect?: boolean | (() => boolean);
  value?: { start: string; end: string };
  defaultValue?: { start: string; end: string };
  onChange?: (value: { start: string; end: string }) => void;
  children: React.ReactNode;
}

export const DateRangePicker = ({
  children,
  ...props
}: DateRangePickerProps) => {
  const ref = React.useRef<HTMLDivElement>(null);

  const newProps = useDateRangePickerProps(props);

  const state = useDateRangePickerState(newProps);
  const elementProps = useDateRangePicker(newProps, state, ref);

  return (
    <DateRangePickerProvider
      value={{
        state,
        ref,
        ...elementProps,
      }}
    >
      {children}
    </DateRangePickerProvider>
  );
};

function useDateRangePickerProps(
  props: Omit<DateRangePickerProps, "children"> = {},
) {
  const {
    value: _value,
    defaultValue: _defaultValue,
    onChange: _onChange,
    ...rest
  } = props;

  const value = React.useMemo(
    () =>
      typeof _value !== "undefined"
        ? { start: parseDate(_value.start), end: parseDate(_value.end) }
        : undefined,
    [_value],
  );

  const defaultValue = React.useMemo(
    () =>
      typeof _defaultValue !== "undefined"
        ? {
            start: parseDate(_defaultValue.start),
            end: parseDate(_defaultValue.end),
          }
        : undefined,
    [_defaultValue],
  );

  const onChange = React.useMemo(
    () => (_onChange ? convertOnChangeCallback(_onChange) : undefined),
    [_onChange],
  );

  return {
    onChange,
    value,
    defaultValue,
    ...rest,
  };
}

function convertOnChangeCallback(
  func: (value: { start: string; end: string }) => void,
) {
  return (value: { start: CalendarDate; end: CalendarDate }) => {
    const start = value.start.toString();
    const end = value.end.toString();

    func({ start, end });
  };
}
