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
      templateAreas={`"time title"
                      "space title"
                      "space author"`}
      gridTemplateColumns={[
        "85px 1fr",
        "100px 1fr",
        "120px 1fr",
        "170px 1fr",
        "200px 1fr",
      ]}
      paddingBottom={3}
      paddingTop={3}
      borderBottom={`0.25rem ${theme.colors.primary} solid`}
    >
      <GridItem area="time">
        <Text fontSize={["sm", "md", "xl", "2xl"]} color="whiteAlpha.900">
          {start}-{end}
        </Text>
      </GridItem>
      <GridItem area="title">
        <Text fontSize={["sm", "md", "xl", "2xl"]} color="whiteAlpha.900">
          {title}
        </Text>
      </GridItem>
      <GridItem rowSpan={2} colSpan={1}></GridItem>
      <GridItem area="author">
        <Text fontSize={["sm", "md", "xl", "2xl"]} color="whiteAlpha.900">
          {author}
        </Text>
      </GridItem>
    </Grid>
  );
};

export default Speech;
