import React from "react";
import { chakra } from "@chakra-ui/system";
import { Overlay, usePopover, DismissButton } from "@react-aria/overlays";
import { useDatePickerContext } from "./date-picker.context";
import type { AriaPopoverProps } from "@react-aria/overlays";

interface DatePickerPopoverProps
  extends Omit<AriaPopoverProps, "popoverRef" | "triggerRef"> {
  children: React.ReactNode;
}

export const DatePickerPopover = ({
  children,
  placement = "bottom start",
  ...props
}: DatePickerPopoverProps) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const { state, ref: triggerRef } = useDatePickerContext();

  const { popoverProps, underlayProps } = usePopover(
    {
      triggerRef,
      placement,
      ...props,
      popoverRef: ref,
    },
    state,
  );

  if (state.isOpen === false) {
    return null;
  }

  return (
    <Overlay>
      <chakra.div {...underlayProps} display="fixed" inset="0" />
      <chakra.div
        {...popoverProps}
        ref={ref}
        background="white"
        boxShadow="2px 4px 8px rgba(0, 0, 0, 0.16)"
        borderRadius="6px"
      >
        <DismissButton onDismiss={state.close} />
        {children}
        <DismissButton onDismiss={state.close} />
      </chakra.div>
    </Overlay>
  );
};
