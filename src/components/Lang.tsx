import { Box, Text } from "@chakra-ui/react";
import Link from "next/link";

const LangItem = ({ text, locale }: { text: string; locale: string }) => (
  <Link href="/" locale={locale}>
    <Text cursor="pointer" as="span" color="whiteAlpha.900">
      {text}
    </Text>
  </Link>
);

const Lang = () => (
  <Box color="whiteAlpha.900" zIndex="4" width="100px">
    <LangItem text="PL" locale="pl" />
    {" | "}
    <LangItem text="EN" locale="en" />
  </Box>
);

export default Lang;
