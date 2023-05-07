import { useRef } from "react";
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
  ...props
}: DatePickerPopoverProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { state, ref: triggerRef } = useDatePickerContext();

  const { popoverProps, underlayProps } = usePopover(
    { triggerRef, ...props, popoverRef: ref },
    state,
  );

  return (
    <Overlay>
      <chakra.div {...underlayProps} display="fixed" inset="0" />
      <chakra.div
        {...popoverProps}
        ref={ref}
        background="white"
        border="1px solid"
        borderColor="gray.300"
        borderRadius="md"
        position="absolute"
        zIndex="10"
        top="100%"
        boxShadow="lg"
        marginTop="1"
        padding="6"
        outline="none"
        overflow="auto"
      >
        <DismissButton onDismiss={state.close} />
        {children}
        <DismissButton onDismiss={state.close} />
      </chakra.div>
    </Overlay>
  );
};
