import { chakra } from "@chakra-ui/system";
import { useDatePickerContext } from "./date-picker.context";

interface DatePickerGroupProps {
  children: React.ReactNode;
}

export const DatePickerGroup = ({ children }: DatePickerGroupProps) => {
  const { groupProps, ref, state } = useDatePickerContext();

  return (
    <chakra.div
      borderRadius="6px"
      border={state.isOpen ? "2px solid #2869CA" : "1px solid #d9d9d9"}
      py="8px"
      minW="240px"
      display="flex"
      {...groupProps}
      ref={ref}
      _focusWithin={{
        outline: "2px solid #2869CA",
      }}
    >
      {children}
    </chakra.div>
  );
};
