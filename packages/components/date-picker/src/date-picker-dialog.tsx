import React from "react";
import { chakra, forwardRef } from "@chakra-ui/system";
import { useDialog } from "@react-aria/dialog";
import { useDatePickerContext } from "./date-picker.context";
import { useMergeRefs } from "hooks";
import type { HTMLChakraProps } from "@chakra-ui/system";

interface DatePickerDialogProps extends HTMLChakraProps<"div"> {
  children: React.ReactNode;
}

export const DatePickerDialog = forwardRef<DatePickerDialogProps, "div">(
  (props, remoteRef) => {
    const {
      children,
      outlineColor = "transparent",
      minW = "312px",
      ...rest
    } = props;
    const localRef = React.useRef<HTMLDivElement>(null);

    const ref = useMergeRefs(remoteRef, localRef);

    const { dialogProps: dialogPropsFromDatePickerContext } =
      useDatePickerContext();
    const { dialogProps } = useDialog(
      dialogPropsFromDatePickerContext,
      localRef,
    );

    return (
      <chakra.div
        outlineColor={outlineColor}
        minW={minW}
        ref={ref}
        {...dialogProps}
        {...rest}
      >
        {children}
      </chakra.div>
    );
  },
);
