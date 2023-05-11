import { useRef } from "react";
import { chakra } from "@chakra-ui/system";
import { useCalendarCell } from "@react-aria/calendar";
import { CalendarDate } from "@internationalized/date";
import type { CalendarState } from "@react-stately/calendar";

interface DatePickerCalendarGridCellProps {
  date: CalendarDate;
  state: CalendarState;
  isToday: boolean;
}

export const DatePickerCalendarGridCell = ({
  date,
  state,
  isToday,
}: DatePickerCalendarGridCellProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const { cellProps, buttonProps, isSelected, isDisabled } = useCalendarCell(
    { date },
    state,
    ref,
  );

  return (
    <chakra.div
      flex="1"
      display="flex"
      alignItems="center"
      justifyContent="center"
      w="32px"
      h="32px"
      {...cellProps}
    >
      <chakra.div
        ref={ref}
        {...buttonProps}
        as="button"
        w="32px"
        h="32px"
        p="0"
        border={isToday ? "1px solid #2869CA" : "none"}
        lineHeight="32px"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        bgColor={
          isDisabled
            ? "white"
            : isToday
            ? "transparent"
            : isSelected
            ? "#2869CA"
            : "white"
        }
        color={
          isDisabled
            ? "#D9D9D9"
            : isToday
            ? "#2869CA"
            : isSelected
            ? "#FFFFFF"
            : "#1D1D1D"
        }
        cursor={isDisabled ? "default" : "pointer"}
        borderRadius="100%"
      >
        {date.day}
      </chakra.div>
    </chakra.div>
  );
};
