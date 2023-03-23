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

export type SpeechItem = {
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
      templateAreas={`"time title b"
                      "space title b"
                      "space author author"`}
      gridTemplateColumns={[
        "85px 1fr auto",
        "100px 1fr auto",
        "120px 1fr auto",
        "170px 1fr auto",
        "200px 1fr auto",
      ]}
      bg={isOpen ? "blackAlpha.800" : "blackAlpha.500"}
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
      {description && (
        <GridItem
          gridArea="b"
          minWidth={["60px", "60px", "74px", "90px"]}
          display="flex"
        >
          <DefaultButton
            marginLeft="auto"
            textTransform="uppercase"
            size={["xs", "xs", "sm", "md"]}
            _hover={{ color: "black" }}
            text={isOpen ? "less" : "more"}
          />
        </GridItem>
      )}
      <Collapse in={isOpen} animateOpacity style={{ gridColumn: "2/span 3" }}>
        <Box
          gridColumn="2"
          p="4px"
          color="white"
          mt="4"
          rounded="md"
          shadow="md"
        >
          {description?.map((descriptionText, index) => (
            <Text
              fontSize={["sm", "sm", "lg", "xl"]}
              key={`${descriptionText}-${index}`}
              minH="15px"
            >
              {descriptionText}
            </Text>
          ))}
        </Box>
      </Collapse>
    </Grid>
  );
};

export default Speech;
