import { chakra, forwardRef } from "@chakra-ui/system";
import { Icon } from "@chakra-ui/icons";
import { IconButton } from "@chak-timmy/base";
import { useDateRangePickerCalendarContext } from "./date-range-picker-calendar.context";
import type { HTMLChakraProps } from "@chakra-ui/system";

const DateRangePickerYearSelectIndicator = () => {
  const { gridDisplay, setGridDisplay } = useDateRangePickerCalendarContext();

  return (
    <IconButton
      color="#828282"
      onClick={() =>
        setGridDisplay((prev) => (prev === "day" ? "year" : "day"))
      }
      icon={
        <Icon
          xmlns="http://www.w3.org/2000/svg"
          width="24px"
          height="24px"
          fill="none"
          viewBox="0 0 24 24"
          transform={gridDisplay === "day" ? "rotate(0deg)" : "rotate(180deg)"}
          transition="0.15s ease-out all"
        >
          <path
            fill="currentColor"
            d="M12.354 14.146a.5.5 0 0 1-.708 0l-3.792-3.792a.5.5 0 0 1 .353-.854h7.586a.5.5 0 0 1 .353.854l-3.792 3.792Z"
          />
        </Icon>
      }
    />
  );
};

interface DateRangePickerCalendarTitleProps extends HTMLChakraProps<"div"> {
  selectable?: boolean;
}

export const DateRangePickerCalendarTitle = forwardRef<
  DateRangePickerCalendarTitleProps,
  "div"
>((props, ref) => {
  const { selectable = true, ...rest } = props;
  const { title } = useDateRangePickerCalendarContext();

  return (
    <chakra.div display="flex" alignItems="center" flex="1" ref={ref} {...rest}>
      <chakra.h3
        color="#1D1D1D"
        fontSize="1rem"
        lineHeight="20px"
        fontWeight={500}
      >
        {title}
      </chakra.h3>
      {selectable && <DateRangePickerYearSelectIndicator />}
    </chakra.div>
  );
});
