import DefaultButton from "@/components/DefaultButton";
import {
  useTheme,
  Box,
  Center,
  Flex,
  VStack,
  Heading,
  Link,
  AspectRatio,
} from "@chakra-ui/react";

const PreviousEdition = () => {
  const theme = useTheme();

  const content = {
    text: "Zobacz poprzednie prelekcje",
    buttonText: "PRZEJDŹ DO NAGRAŃ",
    youtubeUrl: "https://www.youtube.com/embed/jMk-6SDVXC8",
    youtubeIframeTitle: "16 Sesja Linuksowa",
    previousEditionUrl: "https://16.sesja.linuksowa.pl/",
  };

  return (
    <Box
      display="flex"
      width="100%"
      bg="whiteAlpha.900"
      minHeight="70vh"
      opacity="90%"
      alignItems="center"
      justifyContent="center"
    >
      <Flex
        width="95%"
        marginY={{ base: "5%", lg: "auto" }}
        direction={{ base: "column", lg: "row" }}
      >
        <Center flex={1}>
          <VStack spacing="3em">
            <Heading
              as="h2"
              fontSize={{ base: "4xl", md: "7xl" }}
              textAlign="center"
              fontWeight="semibold"
            >
              {content.text}
            </Heading>
            <Link
              _hover={{ textDecorationLine: "none" }}
              href={content.previousEditionUrl}
            >
              <DefaultButton
                _hover={{ color: "black" }}
                text={content.buttonText}
              />
            </Link>
          </VStack>
        </Center>
        <Center flex={2} marginTop="3em">
          <AspectRatio width="100%" ratio={16 / 9}>
            <iframe
              width="100%"
              height="100%"
              src={content.youtubeUrl}
              title={content.youtubeIframeTitle}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </AspectRatio>
        </Center>
      </Flex>
    </Box>
  );
};

export default PreviousEdition;
