import React from "react";
import { chakra } from "@chakra-ui/system";
import { useDateRangePickerCalendarContext } from "../date-range-picker-calendar.context";
import { CalendarDate, isEqualYear } from "@internationalized/date";

interface DateRangePickerCalendarYearGridCellProps {
  year: number;
}

export const DateRangePickerCalendarYearGridCell = ({
  year,
}: DateRangePickerCalendarYearGridCellProps) => {
  const { state, setGridDisplay } = useDateRangePickerCalendarContext();

  const ref = React.useRef<HTMLDivElement>(null);

  const isSelected = React.useMemo(
    () => isEqualYear(new CalendarDate(year, 1, 1), state.visibleRange.start),
    [state, year],
  );

  const handleCellClick = React.useCallback(() => {
    const newValue = new CalendarDate(year, 1, 1);

    state.setValue({
      start: newValue,
      end: newValue,
    });

    state.setFocusedDate(newValue);

    setGridDisplay("day");
  }, [state, year, setGridDisplay]);

  React.useEffect(() => {
    const cell = ref.current;

    if (!isSelected || cell == null) return;

    cell.scrollIntoView({
      block: "center",
    });
  }, [isSelected]);

  return (
    <chakra.div
      flex="1"
      display="flex"
      alignItems="center"
      justifyContent="center"
      w="100%"
      ref={ref}
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
