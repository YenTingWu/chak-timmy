import React from "react";
import { chakra } from "@chakra-ui/system";
import { useDatePickerCalendarContext } from "./date-picker-calendar.context";
import { CalendarDate, isEqualYear } from "@internationalized/date";

interface DatePickerCalendarYearGridCellProps {
  year: number;
}

export const DatePickerCalendarYearGridCell = ({
  year,
}: DatePickerCalendarYearGridCellProps) => {
  const { state, setGridDisplay } = useDatePickerCalendarContext();

  const isSelected = React.useMemo(
    () => isEqualYear(new CalendarDate(year, 1, 1), state.visibleRange.start),
    [state],
  );

  const handleCellClick = React.useCallback(() => {
    const newValue = new CalendarDate(year, 1, 1);

    state.setValue(newValue);
    state.setFocusedDate(newValue);

    setGridDisplay("day");
  }, [state, setGridDisplay]);

  return (
    <chakra.div
      flex="1"
      display="flex"
      alignItems="center"
      justifyContent="center"
      w="100%"
    >
      <chakra.div
        as="button"
        w="100%"
        px="1rem"
        py=".5rem"
        borderRadius="2rem"
        border="none"
        bgColor={isSelected ? "#2869CA" : "transparent"}
        color={isSelected ? "white" : "#1D1D1D"}
        fontWeight={400}
        transition="0.15s ease background"
        onClick={handleCellClick}
        _hover={{
          border: "none",
          outline: "none",
          bgColor: isSelected ? "#314B8C" : "#EEF6FF",
        }}
      >
        {year}
      </chakra.div>
    </chakra.div>
  );
};
