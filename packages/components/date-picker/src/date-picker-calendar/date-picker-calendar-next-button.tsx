import { useRef } from "react";
import { chakra } from "@chakra-ui/system";
import { Icon } from "@chakra-ui/icons";
import { useButton } from "@react-aria/button";
import { useDatePickerCalendarContext } from "./date-picker-calendar.context";

export const DatePickerCalendarNextButton = () => {
  const ref = useRef<HTMLButtonElement>(null);
  const { nextButtonProps } = useDatePickerCalendarContext();
  const { buttonProps } = useButton(nextButtonProps, ref);

  return (
    <chakra.button
      {...buttonProps}
      w="32px"
      h="32px"
      p="0"
      m="0"
      transition="none"
      bgColor="transparent"
      _hover={{
        border: "none",
        outline: "none",
      }}
      _focus={{
        border: "none",
        outline: "none",
      }}
      ref={ref}
    >
      <Icon
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          fill="#828282"
          fillRule="evenodd"
          d="M9.598 6.354a.5.5 0 0 1 .707 0l5.293 5.292a.5.5 0 0 1 0 .708l-5.293 5.292a.5.5 0 0 1-.707 0l-.244-.244a.5.5 0 0 1 0-.707l4.34-4.341a.5.5 0 0 0 0-.708l-4.34-4.34a.5.5 0 0 1 0-.708l.244-.244Z"
          clipRule="evenodd"
        />
      </Icon>
    </chakra.button>
  );
};
