import React from "react";
import { useCalendarCell } from "@react-aria/calendar";
import type {
  AriaCalendarCellProps,
  CalendarCellAria,
} from "@react-aria/calendar";
import type { RangeCalendarState } from "@react-stately/calendar";

export const useRangeCalendarCell = (
  props: AriaCalendarCellProps,
  state: RangeCalendarState,
  ref: React.RefObject<HTMLElement>,
): CalendarCellAria => {
  const elementProps = useCalendarCell(props, state, ref);
  const { anchorDate, setAnchorDate, highlightDate } = state;

  const { buttonProps, ...rest } = elementProps;
  const { onPointerEnter, onPointerUp, ...restButtonProps } = buttonProps;

  return {
    ...rest,
    buttonProps: {
      ...restButtonProps,
      onPointerEnter(e: React.PointerEvent<HTMLDivElement>) {
        const date = props.date;
        if (date == null) return;

        // Use anchorDate instead of highlightedRange.start
        // highlightedRange.start will change when the user changes the month pages
        if (anchorDate != null && anchorDate.compare(date) > 0) {
          return;
        }

        onPointerEnter?.(e);
      },
      onPointerUp(e: React.PointerEvent<HTMLDivElement>) {
        const date = props.date;
        if (date == null) return;

        // Use anchorDate instead of highlightedRange.start
        // highlightedRange.start will change when the user changes the month pages
        if (anchorDate != null && anchorDate.compare(date) > 0) {
          setAnchorDate(date);
          highlightDate(date);
          return;
        }

        onPointerUp?.(e);
      },
    },
  };
};
