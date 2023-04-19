import DefaultButton from "@/components/DefaultButton";
import { Box, VStack, Center, Link, Heading, Stack } from "@chakra-ui/react";
import { useTranslation } from "next-export-i18n";
import asi from "../assets/loga/logo-asi.png";
import antmicro from "../assets/loga/logo_antmicro.svg";
import mb from "../assets/loga/logo-mb.svg";
import pwr from "../assets/loga/logo-pwr.png";
import NextImage, { StaticImageData } from "next/image";
import hswro from "../assets/loga/logo-hs.svg";
import programistamag from "../assets/loga/logo-programistamag.jpg";
import programmers from "../assets/loga/4programmers.svg";
import linuxMagazine from "../assets/loga/logo-linux-mg.png";
import plug from "../assets/loga/plug.png";
import { useMediaQuery } from "@chakra-ui/react";
import React from "react";

type SponsorshipEntity = {
  title: string;
  logos: {
    image: { default: StaticImageData } | StaticImageData;
    href: string;
    width?: number;
  }[];
};

const Sponsorship = () => {
  const { t } = useTranslation("common");
  const title = t("sponsorshipTitle");
  const description = t("sponsorshipDescription");
  const [isSmallerThan800] = useMediaQuery("(max-width: 800px)");

  const sponsorsAndOrganizations = [
    {
      title: t("sponsors"),
      logos: [
        { image: antmicro, href: "https://antmicro.com/", width: "350" },
        { image: mb, href: "https://www.masterborn.com/", width: "350" },
      ],
    },
    {
      title: t("patrons"),
      logos: [
        {
          image: hswro,
          href: "https://www.hswro.org/",
          width: 200,
        },
        {
          image: programistamag,
          href: "https://programistamag.pl/",
          width: "300",
        },
        { image: programmers, href: "https://4programmers.net/", width: "300" },
        {
          image: linuxMagazine,
          href: "https://linux-magazine.pl/",
          width: "200",
        },
        { image: plug, href: "https://linux.org.pl/", width: "220" },
      ],
    },
    {
      title: t("organizers"),
      logos: [
        { image: asi, href: "https://www.asi.wroclaw.pl/", width: "300" },
        { image: pwr, href: "https://pwr.edu.pl/", width: "300" },
      ],
    },
  ] as SponsorshipEntity[];

  return (
    <Box
      id="sponsors"
      as="section"
      position="relative"
      width="100%"
      minHeight={["max(50vh,300px)", "max(40vh,300px)"]}
      alignItems="center"
      justifyContent="center"
      margin="0"
      zIndex="2"
    >
      <Box
        width="100%"
        height={["max(50vh,300px)", "max(40vh,300px)"]}
        position="absolute"
      >
        <NextImage
          src="/bg_oferta.webp"
          alt="sponsorship background"
          style={{ objectFit: "cover", objectPosition: "center" }}
          fill
        />
      </Box>
      <Center height={["max(50vh,300px)", "max(40vh,300px)"]}>
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
        <React.Fragment key={title}>
          {logos.length !== 0 && (
            <Box
              marginTop="100px"
              marginBottom="100px"
              key={title}
              width="100%"
              minHeight="30vh"
            >
              <VStack gap="60px" display="flex">
                <Heading
                  zIndex="0"
                  fontWeight="bold"
                  as="h2"
                  textAlign="center"
                  fontSize={["xl", "3xl", "5xl"]}
                >
                  {title}
                </Heading>
                <Stack
                  direction="row"
                  flexWrap="wrap"
                  justifyContent="center"
                  alignItems="center"
                  marginLeft="10%"
                  rowGap={{ base: "60px" }}
                  marginRight="10%"
                >
                  {logos.map(({ image, href, width }) => (
                    <Box
                      key={href}
                      flexWrap="wrap"
                      flexBasis={{ base: "100%", md: "45%", xl: "30%" }}
                      margin="auto"
                    >
                      <Link
                        margin="auto"
                        display="block"
                        isExternal
                        href={href}
                        target="_blank"
                      >
                        <NextImage
                          style={{ margin: "auto" }}
                          alt={`${title} image`}
                          width={width || undefined}
                          src={image}
                        />
                      </Link>
                    </Box>
                  ))}
                </Stack>
              </VStack>
            </Box>
          )}
        </React.Fragment>
      ))}
    </Box>
  );
};

export default Sponsorship;
