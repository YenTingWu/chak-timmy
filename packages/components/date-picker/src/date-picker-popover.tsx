import { useRef } from "react";
import { chakra } from "@chakra-ui/system";
import { Overlay, usePopover, DismissButton } from "@react-aria/overlays";
import type { AriaPopoverProps } from "@react-aria/overlays";
import type { DatePickerState } from "@react-stately/datepicker";

interface DatePickerPopoverProps extends Omit<AriaPopoverProps, "popoverRef"> {
  children: React.ReactNode;
  state: DatePickerState;
}

export const DatePickerPopover = ({
  children,
  state,
  ...props
}: DatePickerPopoverProps) => {
  const ref = useRef(null);

  const { close } = state;
  const { popoverProps, underlayProps } = usePopover(
    { ...props, popoverRef: ref },
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
        <DismissButton onDismiss={close} />
        {children}
        <DismissButton onDismiss={close} />
      </chakra.div>
    </Overlay>
  );
};
