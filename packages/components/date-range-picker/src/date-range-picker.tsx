import React from "react";
import { DateRangePickerProvider } from "./date-range-picker.provider";
import { useDateRangePicker } from "@react-aria/datepicker";
import { useDateRangePickerState } from "@react-stately/datepicker";
import { CalendarDate, parseDate } from "@internationalized/date";

export interface DateRangePickerProps {
  /**
   * Used to control whether popover should be open or closed
   */
  isOpen?: boolean;
  /**
   * Default value to control whether popover should be open or closed
   */
  defaultOpen?: boolean;
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
   * Used to check if the popover should close after completing a select action
   */
  shouldCloseOnSelect?: boolean | (() => boolean);
  /**
   * React children
   */
  children: React.ReactNode;
  /**
   * Value with a range of ISO date format
   * { start: XXXX-XX-XX, end: XXXX-XX-XX }
   */
  value?: { start: string; end: string };

  /**
   * Default value with a range of ISO date format
   * { start: XXXX-XX-XX, end: XXXX-XX-XX }
   */
  defaultValue?: { start: string; end: string };

  /**
   * ### onChange
   * @param value { start:XXXX-XX-XX, end:XXXX-XX-XX }
   * @returns void
   */
  onChange?: (value: { start: string; end: string }) => void;
}

export const DateRangePicker = ({
  children,
  label,
  ...props
}: DateRangePickerProps) => {
  const ref = React.useRef<HTMLDivElement>(null);

  const newProps = useDateRangePickerProps({ label, ...props });

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
