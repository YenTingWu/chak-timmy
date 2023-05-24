import React from "react";
import { chakra } from "@chakra-ui/system";
import { Overlay, usePopover, DismissButton } from "@react-aria/overlays";
import type { AriaPopoverProps } from "@react-aria/overlays";

interface DatePopoverProps extends Omit<AriaPopoverProps, "popoverRef"> {
  children: React.ReactNode;
  state: Parameters<typeof usePopover>[1];
}

export const DatePopover = ({
  children,
  state,
  triggerRef,
  ...props
}: DatePopoverProps) => {
  const ref = React.useRef<HTMLDivElement>(null);

  const { popoverProps, underlayProps } = usePopover(
    {
      triggerRef,
      popoverRef: ref,
      ...props,
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
        overflowY="auto"
      >
        <DismissButton onDismiss={state.close} />
        {children}
        <DismissButton onDismiss={state.close} />
      </chakra.div>
    </Overlay>
  );
};
