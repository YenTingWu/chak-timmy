import React from "react";
import { useDatePicker } from "@react-aria/datepicker";
import { useDatePickerState } from "@react-stately/datepicker";
import { DatePickerProvider } from "./date-picker.provider";
import { CalendarDate, parseDate } from "@internationalized/date";

export interface DatePickerProps {
  /**
   * Used to control whether popover should be open or closed
   */
  isOpen?: boolean;
  /**
   * Default value to control whether popover should be open or closed
   */
  defaultOpen?: boolean;

  /**
   * Used to check if the popover should close after completing a select action
   */
  shouldCloseOnSelect?: boolean | (() => boolean);
  /**
   * Value with ISO date format
   * XXXX-XX-XX
   */
  value?: string;
  /**
   * Default value with ISO date format
   * XXXX-XX-XX
   */
  defaultValue?: string;

  /**
   * React children
   */
  children: React.ReactNode;
  /**
   * The label for aria-label or aria-labelledby attribute for accessibility.
   */
  label?: string;
  /**
   * ### onOpenChange
   *
   * Triggered when open state has been changed.
   * Used to control external isOpen props
   *
   * @param isOpen boolean
   * @returns void
   */
  onOpenChange?: (isOpen: boolean) => void;
  /**
   * ### onChange
   * @param iso ISO Date XXXX-XX-XX
   * @returns void
   */
  onChange?: (iso: string) => void;
}

export const DatePicker = ({ children, label, ...props }: DatePickerProps) => {
  const newProps = useDatePickerProps({ label, ...props });

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
