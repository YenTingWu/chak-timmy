import { useRef } from "react";
import { chakra } from "@chakra-ui/system";
import { Icon } from "@chakra-ui/icons";
import { useButton } from "@react-aria/button";
import { useDatePickerContext } from "./date-picker.context";

export const DatePickerTriggerButton = () => {
  const ref = useRef<HTMLButtonElement>(null);
  const { buttonProps: buttonPropsFromDatePickerContext } =
    useDatePickerContext();
  const { buttonProps } = useButton(buttonPropsFromDatePickerContext, ref);

  return (
    <chakra.button
      {...buttonProps}
      w="32px"
      h="32px"
      p="0"
      m="0"
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
          d="M7.6 3.6A.6.6 0 0 0 7 3h-.4a.6.6 0 0 0-.6.6V5H4.5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h15a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H18V3.6a.6.6 0 0 0-.6-.6H17a.6.6 0 0 0-.6.6V5H7.6V3.6Zm-3.1 3h15c.22 0 .4.18.4.4v1H4.1V7c0-.22.18-.4.4-.4Zm-.4 3V19c0 .22.18.4.4.4h15a.4.4 0 0 0 .4-.4V9.6H4.1Z"
          clipRule="evenodd"
        />
        <rect width="3" height="3" x="15.5" y="15" fill="#828282" rx=".6" />
      </Icon>
    </chakra.button>
  );
};
