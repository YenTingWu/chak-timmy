import { useRef } from "react";
import { chakra } from "@chakra-ui/system";
import { useCalendarCell } from "@react-aria/calendar";
import type { CalendarDate } from "@internationalized/date";
import type { CalendarState } from "@react-stately/calendar";

interface DatePickerCalendarGridCellProps {
  date: CalendarDate;
  state: CalendarState;
}

export const DatePickerCalendarGridCell = ({
  date,
  state,
}: DatePickerCalendarGridCellProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const { cellProps, buttonProps, isSelected } = useCalendarCell(
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
        border="none"
        lineHeight="32px"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        bgColor={isSelected ? "#2869CA" : "transparent"}
        color={isSelected ? "#FFFFFF" : "#1D1D1D"}
        borderRadius="100%"
      >
        {date.day}
      </chakra.div>
    </chakra.div>
  );
};
