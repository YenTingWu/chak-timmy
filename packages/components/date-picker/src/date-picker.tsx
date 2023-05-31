import React from "react";
import { useDatePicker } from "@react-aria/datepicker";
import { useDatePickerState } from "@react-stately/datepicker";
import { DatePickerProvider } from "./date-picker.provider";
import { CalendarDate, parseDate } from "@internationalized/date";

export interface DatePickerProps {
  isOpen?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (isOpen: boolean) => void;
  shouldCloseOnSelect?: boolean | (() => boolean);
  value?: string;
  defaultValue?: string;
  onChange?: (iso: string) => void;
  children: React.ReactNode;
}

export const DatePicker = ({ children, ...props }: DatePickerProps) => {
  const newProps = useDatePickerProps(props);

  const state = useDatePickerState({
    ...newProps,
  });
  const ref = React.useRef<HTMLDivElement>(null);
  const elementProps = useDatePicker(newProps, state, ref);

  return (
    <DatePickerProvider value={{ state, ref, ...elementProps }}>
      {children}
    </DatePickerProvider>
  );
};

function useDatePickerProps(props: Omit<DatePickerProps, "children"> = {}) {
  const {
    value: _value,
    defaultValue: _defaultValue,
    onChange: _onChange,
    ...rest
  } = props;

  const value = React.useMemo(
    () => (typeof _value !== "undefined" ? parseDate(_value) : undefined),
    [_value],
  );

  const defaultValue = React.useMemo(
    () =>
      typeof _defaultValue !== "undefined"
        ? parseDate(_defaultValue)
        : undefined,
    [_defaultValue],
  );

  const onChange = React.useMemo(
    () => (_onChange ? convertOnChangeCallBack(_onChange) : undefined),
    [_onChange],
  );

  return {
    onChange,
    value,
    defaultValue,
    ...rest,
  };
}

function convertOnChangeCallBack(func: (iso: string) => void) {
  return (calendarDate: CalendarDate) => {
    const date = calendarDate.toString();

    func(date);
  };
}
