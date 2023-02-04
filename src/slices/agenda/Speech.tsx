import { Grid, GridItem, Text } from "@chakra-ui/react";
import { useTheme } from "@chakra-ui/react";

type SpeechItem = {
  start: string;
  end: string;
  title: string;
  author?: string;
};

const Speech = ({ speech }: { speech: SpeechItem }) => {
  const { start, end, title, author } = speech;
  const theme = useTheme();
  return (
    <Grid
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(6, 1fr)"
      paddingBottom={3}
      paddingTop={3}
      borderBottom={`0.25rem ${theme.colors.primary} solid`}
    >
      <GridItem rowSpan={2} colSpan={1}>
        <Text color="whiteAlpha.900">
          {start}-{end}
        </Text>
      </GridItem>
      <GridItem rowSpan={author ? 1 : 2} colSpan={4}>
        <Text color="whiteAlpha.900">{title}</Text>
      </GridItem>
      <GridItem rowSpan={2} colSpan={1}></GridItem>
      <GridItem rowSpan={1} colSpan={3}>
        <Text color="whiteAlpha.900">{author}</Text>
      </GridItem>
    </Grid>
  );
};

export default Speech;
