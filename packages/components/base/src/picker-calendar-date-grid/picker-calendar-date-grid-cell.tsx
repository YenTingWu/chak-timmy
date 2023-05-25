import React from "react";
import { chakra } from "@chakra-ui/system";
import { useCalendarCell } from "@react-aria/calendar";
import { CalendarDate } from "@internationalized/date";
import type { CalendarState } from "@react-stately/calendar";

interface PickerCalendarDateGridCellProps {
  date: CalendarDate;
  state: CalendarState;
  isToday: boolean;
}

export const PickerCalendarDateGridCell = ({
  date,
  state,
  isToday,
}: PickerCalendarDateGridCellProps) => {
  const ref = React.useRef<HTMLDivElement>(null);

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
        transition="0.15s ease all"
        bgColor={isSelected ? "#2869CA" : isToday ? "transparent" : "white"}
        color={isSelected ? "white" : isToday ? "#2869CA" : "#1D1D1D"}
        borderRadius="100%"
        _hover={{
          bgColor: isSelected ? "#2869CA" : "#EEF6FF",
        }}
        _focus={{
          bgColor: "none",
          outline: "none",
        }}
        _disabled={{
          bgColor: "white",
          color: "#D9D9D9",
          border: isToday ? "1px solid #D9D9D9" : "none",
          cursor: "default",
        }}
        disabled={isDisabled}
      >
        {date.day}
      </chakra.div>
    </chakra.div>
  );
};
