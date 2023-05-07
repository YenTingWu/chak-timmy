import { chakra } from "@chakra-ui/system";
import type { HTMLChakraProps } from "@chakra-ui/system";

interface DatePickerCalendarHeaderProps extends HTMLChakraProps<"div"> {}

export const DatePickerCalendarHeader = ({
  children,
}: DatePickerCalendarHeaderProps) => {
  return (
    <chakra.div
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      p="16px"
    >
      {children}
    </chakra.div>
  );
};
