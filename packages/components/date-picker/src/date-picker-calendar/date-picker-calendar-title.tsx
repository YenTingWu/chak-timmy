import { chakra, forwardRef } from "@chakra-ui/system";
import { Icon } from "@chakra-ui/icons";
import { IconButton } from "base";
import { useDatePickerCalendarContext } from "./date-picker-calendar.context";
import type { HTMLChakraProps } from "@chakra-ui/system";

const DatePickerYearSelectIndicator = () => {
  const { gridDisplay, setGridDisplay } = useDatePickerCalendarContext();

  return (
    <IconButton
      color="#828282"
      onClick={() =>
        setGridDisplay((prev) => (prev === "day" ? "year" : "day"))
      }
      icon={
        <Icon
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
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

interface DatePickerCalendarTitleProps extends HTMLChakraProps<"div"> {
  selectable?: boolean;
}

export const DatePickerCalendarTitle = forwardRef<
  DatePickerCalendarTitleProps,
  "div"
>((props, ref) => {
  const { selectable = true, ...rest } = props;
  const { title } = useDatePickerCalendarContext();

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
      {selectable && <DatePickerYearSelectIndicator />}
    </chakra.div>
  );
});
