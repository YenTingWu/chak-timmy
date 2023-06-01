import React from "react";
import { forwardRef } from "@chakra-ui/system";
import { Icon } from "@chakra-ui/icons";
import { IconButton } from "@chak-timmy/base";
import { useButton } from "@react-aria/button";
import { useDatePickerCalendarContext } from "./date-picker-calendar.context";
import { useMergeRefs } from "@chak-timmy/hooks";
import type { HTMLChakraProps } from "@chakra-ui/system";

export const DatePickerCalendarPrevButton = forwardRef<
  HTMLChakraProps<"button">,
  "button"
>((props, remoteRef) => {
  const localRef = React.useRef<HTMLButtonElement>(null);
  const ref = useMergeRefs(remoteRef, localRef);

  const { prevButtonProps } = useDatePickerCalendarContext();
  const { buttonProps } = useButton(prevButtonProps, localRef);

  return (
    <IconButton
      {...buttonProps}
      icon={
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
            d="M15.354 17.646a.5.5 0 0 1-.708 0l-5.292-5.292a.5.5 0 0 1 0-.708l5.292-5.292a.5.5 0 0 1 .708 0l.244.244a.5.5 0 0 1 0 .707l-4.34 4.341a.5.5 0 0 0 0 .708l4.34 4.34a.5.5 0 0 1 0 .708l-.244.244Z"
            clipRule="evenodd"
          />
        </Icon>
      }
      ref={ref}
      {...props}
    />
  );
});
