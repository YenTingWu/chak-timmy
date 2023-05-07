import { chakra } from "@chakra-ui/system";
import { useRef } from "react";
import { useDialog } from "@react-aria/dialog";
import type { AriaDialogProps } from "@react-aria/dialog";

interface DatePickerDialogProps extends AriaDialogProps {
  children: React.ReactNode;
}

export const DatePickerDialog = ({
  children,
  ...props
}: DatePickerDialogProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { dialogProps } = useDialog(props, ref);

  return (
    <chakra.div {...dialogProps} minW="312px" ref={ref}>
      {children}
    </chakra.div>
  );
};
