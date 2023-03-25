import { Box, StyleProps } from "@chakra-ui/react";
import Image from "next/image";
import pinguin from "../assets/bg_pingwin.webp";
import { Stack, VStack, Heading } from "@chakra-ui/react";
import { useTheme } from "@chakra-ui/react";
import { Show } from "@chakra-ui/react";
import DefaultButton from "@/components/DefaultButton";
import config from "../config";
import { useTranslation } from "next-export-i18n";
import scrollToSection from "@/utils/scrollToSection";

const HeadContainerStyle: StyleProps = {
  height: "100vh",
  width: "100%",
  bg: "#000000",
};

const Title = () => {
  const theme = useTheme();
  const { t } = useTranslation("common");

  return (
    <VStack>
      <Heading
        as="h1"
        fontSize={{ base: "4xl", md: "7xl" }}
        textAlign="center"
        fontWeight="semibold"
        color="white"
      >
        {t("title")}
      </Heading>
      <Heading
        as="h2"
        fontSize={{ base: "xl", md: "4xl" }}
        textAlign="center"
        fontWeight="semibold"
        bgColor={theme.colors.primary}
        color="white"
      >
        &nbsp;{t("eventDate")}&nbsp;
      </Heading>
    </VStack>
  );
};

const SpotDescription = () => {
  const { t } = useTranslation("common");

  const spot: string[] = t("eventLocationDetails", {}, { returnObjects: true });
  return (
    <VStack>
      {spot.map((text: string) => (
        <Heading
          key={text}
          as="h3"
          fontSize={{ base: "xl", md: "3xl" }}
          lineHeight={{ base: "1em", lg: "2em" }}
          fontWeight="semibold"
          textAlign="center"
          mt={0}
          color="white"
        >
          {text}
        </Heading>
      ))}
    </VStack>
  );
};

const HeadDescription = () => {
  const { t } = useTranslation("common");
  return (
    <VStack
      height="inherit"
      margin="0"
      width={{ base: "100%", lg: "50%" }}
      justifyContent="space-evenly"
    >
      <Title />
      <SpotDescription />
      {config.SHOW_AGENDA && (
        <DefaultButton
          onClick={() => scrollToSection("agenda")}
          text={t("seeAgenda")}
          _hover={{ color: "black" }}
        />
      )}
    </VStack>
  );
};

const HeadSlice = () => {
  return (
    <Box as="section" id="head" {...HeadContainerStyle} m={0}>
      <Stack
        height="inherit"
        justifyContent="space-evenly"
        direction={{ base: "column", lg: "row" }}
        position="absolute"
        width="100%"
        top="0"
        zIndex="2"
      >
        <Show below="lg">
          <VStack
            margin="auto"
            marginTop="8rem"
            justifyContent="center"
            maxWidth="700px"
            width="30%"
            height="20%"
          >
            <Image       
            priority
            sizes="(max-width: 1000px) 230px,
             0px"
               alt="pinguin" src={pinguin} />
          </VStack>
        </Show>
        <HeadDescription />
        <Show above="lg">
          <VStack
            width="50%"
            justifyContent="center"
            maxWidth={1627 / 3}
            marginTop="auto"
            height="100vh"
          >
            <Image  priority alt="pinguin" src={pinguin} />
          </VStack>
        </Show>
      </Stack>
    </Box>
  );
};

export default HeadSlice;
