import { chakra } from "@chakra-ui/system";
import { DatePickerProvider } from "./date-picker.provider";
import { useDatePickerContext } from "./date-picker.context";
import { DatePickerGroup } from "./date-picker-group";
import { DatePickerField } from "./date-picker-field";
import { DatePickerPopover } from "./date-picker-popover";
import { DatePickerDialog } from "./date-picker-dialog";
import { DatePickerTriggerButton } from "./date-picker-trigger-button";
import type { DateValue } from "@react-aria/datepicker";
import type { DatePickerStateOptions } from "@react-stately/datepicker";

interface DatePickerProps extends DatePickerStateOptions<DateValue> {}

export const DatePickerSke = () => {
  const { state } = useDatePickerContext();

  return (
    <chakra.div fontWeight={400} fontSize="16px" lineHeight="20px">
      <DatePickerGroup>
        <DatePickerField />
        <DatePickerTriggerButton />
      </DatePickerGroup>
      {state.isOpen && (
        <DatePickerPopover>
          <DatePickerDialog>
            <div> asdkjfalsdfjlkajsdflkjasldkfjalksdkjflkasdf</div>
          </DatePickerDialog>
        </DatePickerPopover>
      )}
    </chakra.div>
  );
};

export const DatePickerExample = (props: DatePickerProps) => {
  return (
    <DatePickerProvider {...props}>
      <DatePickerSke />
    </DatePickerProvider>
  );
};
