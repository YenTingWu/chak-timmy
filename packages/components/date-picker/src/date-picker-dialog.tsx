import { chakra } from "@chakra-ui/system";
import { useRef } from "react";
import { useDialog } from "@react-aria/dialog";
import { useDatePickerContext } from "./date-picker.context";

interface DatePickerDialogProps {
  children: React.ReactNode;
}

export const DatePickerDialog = ({ children }: DatePickerDialogProps) => {
  const { dialogProps: dialogPropsFromDatePickerContext } =
    useDatePickerContext();
  const ref = useRef<HTMLDivElement>(null);
  const { dialogProps } = useDialog(dialogPropsFromDatePickerContext, ref);

  return (
    <chakra.div
      {...dialogProps}
      outlineColor="transparent"
      minW="312px"
      ref={ref}
    >
      {children}
    </chakra.div>
  );
};
