import { Button, ButtonProps } from "@chakra-ui/react";

const DefaultButton = (props: ButtonProps & { text: string }) => {
  const { text } = props;
  const buttonProps = {
    size: "lg",
    variant: "solid",
    bg: "#6F2DBD",
    color: "white",
    ...props
  };
  return (
    <Button {...buttonProps}>
      {text}
    </Button>
  );
};

export default DefaultButton;
