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
import asi from "../assets/loga/logo-asi.png";
import antmicro from "../assets/loga/logo_antmicro.svg";
import pwr from "../assets/loga/logo-pwr.png";
import NextImage, { StaticImageData } from "next/image";

const Sponsorship = () => {
  const { t } = useTranslation("common");
  const title = t("sponsorshipTitle");
  const description = t("sponsorshipDescription");

  const sponsorsAndOrganizations = [
    {
      title: "sponsors",
      logos: [{ image: antmicro, href: "https://antmicro.com/" }],
    },
    {
      title: "patrons",
      logos: [],
    },
    {
      title: t("organizers"),
      logos: [
        { image: asi, href: "https://www.asi.wroclaw.pl/" },
        { image: pwr, href: "https://pwr.edu.pl/" },
      ],
    },
  ];
  return (
    <Box
      id="sponsors"
      as="section"
      position="relative"
      width="100%"
      minHeight={["50vh", "40vh"]}
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
      {sponsorsAndOrganizations.map(({ logos, title }) => (
        <>
          {logos.length !== 0 && (
            <Box
              marginTop="100px"
              marginBottom="100px"
              key={title}
              width="100%"
              minHeight="30vh"
            >
              <VStack gap="100px">
                <Heading
                  zIndex="0"
                  fontWeight="bold"
                  as="h2"
                  textAlign="center"
                  fontSize={["xl", "3xl", "5xl"]}
                >
                  {title}
                </Heading>
                {logos.map(({ image, href }) => (
                  <Link key={href} isExternal href={href} target="_blank">
                    <NextImage alt={`${title} image`} src={image} />
                  </Link>
                ))}
              </VStack>
            </Box>
          )}
        </>
      ))}
    </Box>
  );
};

export default Sponsorship;
