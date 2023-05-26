import React from "react";
import { chakra } from "@chakra-ui/system";
import { useCalendarCell } from "@react-aria/calendar";
import { CalendarDate } from "@internationalized/date";
import type { RangeCalendarState } from "@react-stately/calendar";

interface DateRangePickerCalendarDateGridCellProps {
  date: CalendarDate;
  state: RangeCalendarState;
  isToday: boolean;
  isLastInWeek: boolean;
}

export const DateRangePickerCalendarDateGridCell = ({
  date,
  state,
  isToday,
  isLastInWeek,
}: DateRangePickerCalendarDateGridCellProps) => {
  const { highlightedRange } = state;
  const ref = React.useRef<HTMLDivElement>(null);

  const { cellProps, buttonProps, isSelected, isDisabled } = useCalendarCell(
    { date },
    state,
    ref,
  );

  const { cellStyles, buttonStyles, spaceStyles } = React.useMemo(
    () =>
      getHighlightedStyles({
        highlightedRange,
        date,
      }),
    [highlightedRange, date],
  );

  return (
    <>
      <chakra.div
        flex="1"
        display="flex"
        alignItems="center"
        justifyContent="center"
        w="32px"
        h="32px"
        aria-selected={isSelected}
        _selected={{ ...cellStyles }}
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
          bgColor={isToday ? "transparent" : "white"}
          color={isToday ? "#2869CA" : "#1D1D1D"}
          borderRadius="100%"
          _hover={{
            bgColor: "#EEF6FF",
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
          aria-selected={isSelected}
          _selected={{ ...buttonStyles }}
          disabled={isDisabled}
        >
          {date.day}
        </chakra.div>
      </chakra.div>
      {!isLastInWeek && (
        <chakra.div
          w="0.5rem"
          transition="0.15s ease all"
          aria-selected={isSelected}
          _selected={{ ...spaceStyles }}
        />
      )}
    </>
  );
};

function getHighlightedStyles({
  highlightedRange,
  date,
}: {
  highlightedRange: RangeCalendarState["highlightedRange"];
  date: CalendarDate;
}) {
  const { isStartDate, isEndDate } = getHighlightedCondition({
    highlightedRange,
    date,
  });

  let cellStyles;
  let buttonStyles;
  let spaceStyles;

  if (isStartDate && isEndDate) {
    buttonStyles = {
      bg: "#2869CA",
      color: "white",
    };

    cellStyles = {
      bg: "transparent",
    };

    spaceStyles = {
      bg: "transparent",
    };
  } else if (isStartDate) {
    buttonStyles = {
      bg: "#2869CA",
      color: "white",
    };

    cellStyles = {
      bg: "linear-gradient(90deg, transparent 50%, #EEF6FF 50%)",
    };

    spaceStyles = {
      bg: "#EEF6FF",
    };
  } else if (isEndDate) {
    buttonStyles = {
      bg: "#2869CA",
      color: "white",
    };

    cellStyles = {
      bg: "linear-gradient(90deg, #EEF6FF 50%, transparent 50%)",
    };

    spaceStyles = {
      bg: "transparent",
    };
  } else {
    buttonStyles = {
      bg: "#EEF6FF",
      color: "#1D1D1D",
    };

    cellStyles = {
      bg: "#EEF6FF",
    };

    spaceStyles = {
      bg: "#EEF6FF",
    };
  }

  return {
    buttonStyles,
    cellStyles,
    spaceStyles,
  };
}

/**
 * 1. Highlighted start date should have a right-half bg color on the cell part and a selected color on the button part.
 * 2. All of dates that in the middle range should have a highlighted bg color
 * 3. Highlighted end date should have a left-half bg color on the cell part and a selected color on the button part.
 * 4. If the start date is the same date as the end date, the button should have a selected color and no bg color on the cell part.
 *
 *
 *
 * isMiddleOfRange
 * isStartDate
 * isEndDate
 */

function getHighlightedCondition({
  highlightedRange,
  date,
}: {
  highlightedRange: RangeCalendarState["highlightedRange"];
  date: CalendarDate;
}) {
  const valueForNotHighlightedDate = {
    isMiddleOfRange: false,
    isStartDate: false,
    isEndDate: false,
  };

  if (highlightedRange == null) {
    return valueForNotHighlightedDate;
  }

  const diffFromStartDate = date.compare(highlightedRange.start);
  const diffFromEndDate = date.compare(highlightedRange.end);

  // If the date is outside the highlighted range
  if (diffFromStartDate < 0 || diffFromEndDate > 0) {
    return valueForNotHighlightedDate;
  }

  // If the date is both the start date and the end date
  if (diffFromStartDate === 0 && diffFromEndDate === 0) {
    return {
      isMiddleOfRange: false,
      isStartDate: true,
      isEndDate: true,
    };
  }

  // If the date is the start date
  if (diffFromStartDate === 0) {
    return {
      isMiddleOfRange: false,
      isStartDate: true,
      isEndDate: false,
    };
  }

  // If the date is the end date
  if (diffFromEndDate === 0) {
    return {
      isMiddleOfRange: false,
      isStartDate: false,
      isEndDate: true,
    };
  }

  // If the date is in the middle of the range
  return {
    isMiddleOfRange: true,
    isStartDate: false,
    isEndDate: false,
  };
}
