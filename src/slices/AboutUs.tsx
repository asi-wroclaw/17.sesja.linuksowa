import { Box, Stack } from "@chakra-ui/react";
import cel from "../assets/aboutUs/cel.png";
import coTo from "../assets/aboutUs/coTo.png";
import jakWyglada from "../assets/aboutUs/jakWyglada.png";
import { useTheme } from "@chakra-ui/react";
import ImageItem from "@/components/ImageItem";

const AboutUs = () => {
  const theme = useTheme();

  const content = [
    {
      image: coTo,
      text: "Jest to największa w Polsce konferencja poświęcona rozwiązaniom Open Source oraz najnowszym trendom w systemach z rodziny GNU/Linux.",
      title: "CZYM JEST SESJA?",
    },
    {
      image: jakWyglada,
      text: "Udział w Sesji jest darmowy. Co roku na konferencji spotykają się pasjonaci informatyki z całej Polski, aby pogłębić swoją wiedzę i podjąć dyskusję w interesujących ich dziedzinach.",
      title: "Jak to wygląda?",
    },
    {
      image: cel,
      text: "Naszym celem jest promowanie idei wolnego oprogramowania. Wiemy, że Open Source jest coraz bardziej popularny w rozwiązaniach komercyjnych, jak i domowych. I zależy nam na jego popularyzacji.",
      title: "Nasz cel",
    },
  ];
  return (
    <Box
      display="flex"
      justifyContent="center"
      width="100%"
      bg={theme.colors.primary}
      minHeight="70vh"
      opacity="90%"
    >
      <Stack
        width="95%"
        marginY={{ base: "5%", lg: "auto" }}
        rowGap="20"
        columnGap="5"
        marginX={{ base: "2%", md: "20%", lg: "0" }}
        justifyContent="space-between"
        alignItems="center"
        direction={{ base: "column", lg: "row" }}
      >
        {content.map(({ image, text, title }) => (
          <ImageItem key={title} title={title} imageSrc={image} text={text} />
        ))}
      </Stack>
    </Box>
  );
};

export default AboutUs;
