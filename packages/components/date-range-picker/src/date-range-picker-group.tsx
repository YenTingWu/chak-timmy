import { chakra, forwardRef } from "@chakra-ui/system";
import { useMergeRefs } from "@chak-timmy/hooks";
import { useDateRangePickerContext } from "./date-range-picker.context";
import type { HTMLChakraProps } from "@chakra-ui/system";

interface DateRangePickerGroupProps extends HTMLChakraProps<"div"> {
  children: React.ReactNode;
}

export const DateRangePickerGroup = forwardRef<
  DateRangePickerGroupProps,
  "div"
>((props: DateRangePickerGroupProps, remoteRef) => {
  const { groupProps, ref: localRef } = useDateRangePickerContext();
  const ref = useMergeRefs(localRef, remoteRef);

  const { display = "flex", alignItems = "center", children, ...rest } = props;

  return (
    <chakra.div
      {...groupProps}
      display={display}
      alignItems={alignItems}
      {...rest}
      ref={ref}
      onPointerDown={(e) => e.preventDefault()}
    >
      {children}
    </chakra.div>
  );
});
