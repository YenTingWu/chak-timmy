import React from "react";
import { useDatePicker } from "@react-aria/datepicker";
import { useDatePickerState } from "@react-stately/datepicker";
import { DatePickerProvider } from "./date-picker.provider";
import { CalendarDate, parseDate } from "@internationalized/date";

interface DatePickerProps {
  isOpen?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (isOpen: boolean) => void;
  shouldCloseOnSelect?: boolean | (() => boolean);
  value?: string;
  onChange?: (iso: string) => void;
  children: React.ReactNode;
}

export function getISODateString(date: Date) {
  const year = date.getFullYear().toString().padStart(4, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  const dateString = `${year}-${month}-${day}`;

  return dateString;
}

function convertISOIntoCalendarDate(isoDate: string) {
  let calendarDate: CalendarDate;

  try {
    calendarDate = parseDate(isoDate);
  } catch (err) {
    throw err;
  }

  return calendarDate;
}

function convertParamFromISOStringIntoCalendarDate(
  func: (iso: string) => void,
) {
  return (calendarDate: CalendarDate) => {
    const date = calendarDate.toString();

    func(date);
  };
}

function useDatePickerProps(props: Omit<DatePickerProps, "children"> = {}) {
  const { value: _value, onChange: _onChange, ...rest } = props;

  const value = React.useMemo(
    () => (!!_value ? convertISOIntoCalendarDate(_value) : undefined),
    [_value],
  );

  const onChange = React.useCallback(
    () =>
      _onChange
        ? convertParamFromISOStringIntoCalendarDate(_onChange)
        : undefined,
    [_onChange],
  );

  return {
    onChange,
    value,
    ...rest,
  };
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
