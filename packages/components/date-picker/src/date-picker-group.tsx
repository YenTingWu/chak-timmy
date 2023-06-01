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
      outline = state.isOpen ? "2px solid #2869CA" : "1px solid #d9d9d9",
      py = "8px",
      w = "100%",
      maxW = "240px",
      display = "flex",
      _hover = {
        outline: "2px solid #828282",
      },
      _invalid = {
        outline: "2px solid #B3261E",
      },
      _focusWithin = { outline: "2px solid #2869CA" },
      ...rest
    } = props;

    return (
      <chakra.div
        ref={ref}
        borderRadius={borderRadius}
        outline={outline}
        py={py}
        w={w}
        maxW={maxW}
        display={display}
        aria-invalid={state.validationState === "invalid"}
        {...groupProps}
        _focusWithin={_focusWithin}
        _hover={_hover}
        _invalid={_invalid}
        {...rest}
      >
        {children}
      </chakra.div>
    );
  },
);
