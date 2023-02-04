import { Box, Text } from "@chakra-ui/react";
import { useTheme } from "@chakra-ui/react";

export interface DayOptionProps {
  selected?: boolean;
  text: string;
  select: () => void;
}

const DayOption = ({ selected = false, text, select }: DayOptionProps) => {
  const theme = useTheme();
  const borderBottom = selected
    ? { borderBottom: `0.25rem ${theme.colors.primary} solid` }
    : {};
  return (
    <Box
      role="group"
      cursor="pointer"
      onClick={select}
      height="10"
      width="45%"
      {...borderBottom}
    >
      <Text
        _groupHover={{ color: !selected && theme.colors.primary }}
        fontSize="xl"
        color="whiteAlpha.900"
        textAlign="center"
      >
        {text}
      </Text>
    </Box>
  );
};

export default DayOption;
