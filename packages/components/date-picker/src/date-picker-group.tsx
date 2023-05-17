import { chakra, forwardRef } from "@chakra-ui/system";
import { useDatePickerContext } from "./date-picker.context";
import { useMergeRefs } from "hooks";
import type { HTMLChakraProps } from "@chakra-ui/system";

interface DatePickerGroupProps extends HTMLChakraProps<"div"> {
  children: React.ReactNode;
}

export const DatePickerGroup = forwardRef<DatePickerGroupProps, "div">(
  (props, remoteRef) => {
    const { groupProps, ref: localRef, state } = useDatePickerContext();
    const ref = useMergeRefs(remoteRef, localRef);

    const {
      children,
      borderRadius = "6px",
      border = state.isOpen ? "2px solid #2869CA" : "1px solid #d9d9d9",
      py = "8px",
      minW = "240px",
      display = "flex",
      _focusWithin = { outline: "2px solid #2869CA" },
      ...rest
    } = props;

    return (
      <chakra.div
        ref={ref}
        borderRadius={borderRadius}
        border={border}
        py={py}
        minW={minW}
        display={display}
        {...groupProps}
        _focusWithin={_focusWithin}
        {...rest}
      >
        {children}
      </chakra.div>
    );
  },
);
