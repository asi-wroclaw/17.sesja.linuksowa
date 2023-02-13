import { Box, StyleProps, Button } from "@chakra-ui/react";
import ParticlesBackground from "../components/ParticlesBackground";
import Image from "next/image";
import logo from "../assets/logo-duze-pl.png";
import pinguin from "../assets/bg_pingwin.png";
import { Stack, VStack, Heading } from "@chakra-ui/react";
import { useTheme } from "@chakra-ui/react";
import { Show } from "@chakra-ui/react";
import DefaultButton from "@/components/DefaultButton";
import config from "../config";

const HeadContainerStyle: StyleProps = {
  height: "100vh",
  width: "100%",
  bg: "#000000",
  opacity: "90%",
};

const NavBarStyle: StyleProps = {
  height: "60px",
  bg: "#000000",
  opacity: "90%",
  position: "absolute",
  width: "100%",
};

const NavBar = () => {
  return (
    <Box {...NavBarStyle}>
      {" "}
      <Box mt="3" ml="5">
        <Image alt="sesja linuksowa" height="40" src={logo} />
      </Box>
    </Box>
  );
};

const Title = () => {
  const theme = useTheme();

  return (
    <VStack>
      <Heading
        as="h1"
        fontSize={{ base: "4xl", md: "7xl" }}
        textAlign="center"
        fontWeight="semibold"
        color="white"
      >
        17 Sesja Linuksowa
      </Heading>
      <Heading
        as="h2"
        fontSize={{ base: "xl", md: "4xl" }}
        textAlign="center"
        fontWeight="semibold"
        bgColor={theme.colors.primary}
        color="white"
      >
        &nbsp;22-23 kwietnia 2022 Wrocław, Polska&nbsp;
      </Heading>
    </VStack>
  );
};

const SpotDescription = () => {
  const spot = [
    "Politechnika Wrocławska",
    "Budynek D-20",
    "Centrum Kongresowe",
    "ul. Janiszewskiego 8",
  ];
  return (
    <VStack>
      {spot.map((text: string) => (
        <Heading
          key={text}
          as="h3"
          fontSize={{ base: "xl", md: "3xl" }}
          lineHeight={{ base: "1em", lg: "2em" }}
          fontWeight="semibold"
          mt={0}
          color="white"
        >
          {text}
        </Heading>
      ))}
    </VStack>
  );
};

const HeadDescription = () => (
  <VStack
    height="inherit"
    margin="0"
    width={{ base: "100%", lg: "50%" }}
    justifyContent="space-evenly"
  >
    <Title />
    <SpotDescription />
    {config.SHOW_AGENDA && <DefaultButton text={"ZOBACZ AGENDĘ"} />}
  </VStack>
);

const HeadSlice = () => {
  return (
    <Box {...HeadContainerStyle} m={0}>
      <NavBar />
      <ParticlesBackground />
      <Stack
        height="inherit"
        justifyContent="space-evenly"
        direction={{ base: "column", lg: "row" }}
        position="absolute"
        width="100%"
        top="0"
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
            <Image alt="pinguin" src={pinguin} />
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
            <Image alt="pinguin" src={pinguin} />
          </VStack>
        </Show>
      </Stack>
    </Box>
  );
};

export default HeadSlice;
