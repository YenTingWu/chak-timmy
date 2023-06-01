import React from "react";
import { chakra, forwardRef } from "@chakra-ui/system";
import { useDialog } from "@react-aria/dialog";
import { useMergeRefs } from "@chak-timmy/hooks";
import type { HTMLChakraProps } from "@chakra-ui/system";
import type { AriaDialogProps } from "@react-aria/dialog";

interface DateDialogProps extends HTMLChakraProps<"div"> {
  children: React.ReactNode;
  dialogProps: AriaDialogProps;
}

export const DateDialog = forwardRef<DateDialogProps, "div">(
  (props, remoteRef) => {
    const { dialogProps: _dialogProps, children, ...rest } = props;

    const localRef = React.useRef<HTMLDivElement>(null);
    const ref = useMergeRefs(remoteRef, localRef);

    const { dialogProps } = useDialog(_dialogProps, localRef);

    return (
      <chakra.div ref={ref} {...dialogProps} {...rest}>
        {children}
      </chakra.div>
    );
  },
);
