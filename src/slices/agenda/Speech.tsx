import {
  Collapse,
  Grid,
  GridItem,
  Text,
  useDisclosure,
  Box,
} from "@chakra-ui/react";
import { useTheme } from "@chakra-ui/react";
import DefaultButton from "@/components/DefaultButton";
import { useTranslation } from "next-export-i18n";

type SpeechItem = {
  start: string;
  end: string;
  title: string;
  author?: string;
  description?: string[];
};

const Speech = ({ speech }: { speech: SpeechItem }) => {
  const { isOpen, onToggle } = useDisclosure();
  const { t } = useTranslation("common");
  const { start, end, title, author, description } = speech;
  const style = description ? { cursor: "pointer" } : {};
  const theme = useTheme();
  return (
    <Grid
      onClick={() => description && onToggle()}
      templateAreas={`"time title"
                      "space title"
                      "space author"`}
      gridTemplateColumns={[
        "85px 1fr 100px",
        "100px 1fr 100px",
        "120px 1fr 100px",
        "170px 1fr 100px",
        "200px 1fr 100px",
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
      <GridItem area="title" {...style}>
        <Text fontSize={["sm", "md", "xl", "2xl"]} color="whiteAlpha.900">
          {title}
        </Text>
      </GridItem>
      <GridItem rowSpan={2} colSpan={1}></GridItem>
      <GridItem area="author" {...style}>
        <Text fontSize={["sm", "md", "xl", "2xl"]} color="whiteAlpha.900">
          {author}
        </Text>
      </GridItem>
      {description && <GridItem rowSpan={"1"} area="button"><DefaultButton text={t(isOpen ? "less" : "more")} /></GridItem>}
      <Collapse in={isOpen} animateOpacity style={{ gridColumn: "2" }}>
        <Box
          gridColumn="2"
          p="4px"
          color="white"
          mt="4"
          bg="black"
          rounded="md"
          shadow="md"
        >
          {description?.map((descriptionText) => <Text minH="15px">{descriptionText}</Text>)}
        </Box>
      </Collapse>
    </Grid>
  );
};

export default Speech;
