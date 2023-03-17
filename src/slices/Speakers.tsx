import { Flex, Heading, HStack, VStack, Box } from "@chakra-ui/react";
import Image, { StaticImageData } from "next/image";
import github from "../assets/socials/github.svg";
import twitter from "../assets/socials/twitter.svg";
import linkedin from "../assets/socials/linkedin.svg";
import website from "../assets/socials/website.svg";
import { useTheme } from "@chakra-ui/react";

type SocialUrls = {
  website: string;
  twitter: string;
  linkedin: string;
  github: string;
};

export type SpeakerProps = {
  image: string | StaticImageData;
  urls: SocialUrls;
  name: string;
  description: string;
};

const Socials = ({ name, urls }: { name: string; urls: SocialUrls }) => (
  <HStack width="60%" justifyContent="space-around">
    <a href={urls.website}>
      <Image alt={`${name} website`} src={website} />
    </a>
    <a href={urls.twitter}>
      <Image alt={`${name} twitter`} src={twitter} />
    </a>
    <a href={urls.github}>
      <Image alt={`${name} github`} src={github} />
    </a>
    <a href={urls.linkedin}>
      <Image alt={`${name} linkedin`} src={linkedin} />
    </a>
  </HStack>
);

const Speaker = ({ image, urls, name, description }: SpeakerProps) => {
  const theme = useTheme();
  const showSocials =
    urls.github || urls.linkedin || urls.twitter || urls.website;
  return (
    <Flex zIndex="3">
      <Box>
        <Box w={300} h={300} position="relative">
          <Image
            alt={`${name} image`}
            fill
            style={{ objectFit: "cover" }}
            src={image}
          />
        </Box>
        <VStack padding="2" background={theme.colors.primary}>
          <Heading fontSize="3xl" as="h5" color="whiteAlpha.900">
            {name}
          </Heading>
          {showSocials && <Socials name={name} urls={urls} />}
        </VStack>
      </Box>
    </Flex>
  );
};

const Speakers = ({ speakersData }: { speakersData: SpeakerProps[] }) => {
  if (!speakersData.length) return null;
  return (
    <Box backgroundColor="black" minH="40vh">
      <Flex
        margin="auto"
        maxW="1000px"
        padding="50px 20px 20px 20px"
        flexWrap="wrap"
        justifyContent="space-around"
        gap="30px 30px"
      >
        {speakersData
          // .filter((speaker)=>speaker.image && speaker.name)
          .map((speakerData, index) => (
            <Speaker key={index} {...speakerData} />
          ))}
      </Flex>
    </Box>
  );
};
export default Speakers;
