import { chakra, forwardRef } from "@chakra-ui/system";
import type { HTMLChakraProps } from "@chakra-ui/system";

interface IconButtonProps extends HTMLChakraProps<"button"> {
  icon: React.ReactNode;
}

export const IconButton = forwardRef<IconButtonProps, "button">(
  (props, ref) => {
    const { icon, ...rest } = props;

    return (
      <chakra.button
        w="40px"
        h="40px"
        p="0"
        m="0"
        borderRadius="100%"
        transition=".15s ease background"
        bgColor="transparent"
        _hover={{
          border: "none",
          outline: "none",
          bgColor: "#D9D9D9",
        }}
        _focus={{
          border: "none",
          outline: "none",
          bgColor: "#D9D9D9",
        }}
        ref={ref}
        {...rest}
      >
        {icon}
      </chakra.button>
    );
  },
);
