import DefaultButton from "@/components/DefaultButton";
import {
  Box,
  VStack,
  Center,
  Image,
  Text,
  Link,
  Heading,
} from "@chakra-ui/react";
import { useTranslation } from "next-export-i18n";

const Sponsorship = () => {
  const { t } = useTranslation("common");
  const title = t("sponsorshipTitle");
  const description = t("sponsorshipDescription");
  return (
    <Box
      as="section"
      position="relative"
      width="100%"
      height={["50vh", "40vh"]}
      alignItems="center"
      justifyContent="center"
      margin="0"
      zIndex="2"
    >
      <Image
        src="/bg_oferta.jpeg"
        alt="sponsorship background"
        objectFit="cover"
        width="100%"
        height={["50vh", "40vh"]}
        objectPosition="center"
        position="absolute"
      />
      <Center height={["50vh", "40vh"]}>
        <VStack gap={3}>
          <Heading
            zIndex="0"
            color="whiteAlpha.900"
            fontWeight="bold"
            as="h2"
            textAlign="center"
            fontSize={["3xl", "5xl", "7xl"]}
          >
            {title}
          </Heading>

          <Heading
            as="h3"
            fontSize={["md", "2xl"]}
            textAlign="center"
            zIndex="0"
            color="whiteAlpha.900"
          >
            {description}
          </Heading>
          <Link
            _hover={{ textDecorationLine: "none" }}
            href="/17-sesja-oferta-sponsorska.pdf"
            target="_blank"
          >
            <DefaultButton
              _hover={{ color: "black" }}
              text="sponsorshipOffer"
            ></DefaultButton>
          </Link>
        </VStack>
      </Center>
    </Box>
  );
};

export default Sponsorship;
