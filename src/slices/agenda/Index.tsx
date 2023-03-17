import { Box, VStack, Heading } from "@chakra-ui/react";
import { useState } from "react";
import DaySelect from "./DaySelect";
import Speech from "./Speech";

const saturdaySpeeches = [
  {
    start: "10:00",
    end: "10:50",
    title:
      "Computer Vision & Deep Learning in Sugar Factories - Lessons Learned",
    author: "Filip Drapejkowski",
  },
  {
    start: "11:00",
    end: "11:50",
    title: "Pliki polimorficzne",
    author: "",
  },
  {
    start: "12:00",
    end: "12:50",
    title: "-",
    author: "",
  },
  {
    start: "13:00",
    end: "14:00",
    title: "Przerwa obiadowa",
  },
  {
    start: "14:00",
    end: "14:50",
    title:
      "Czemu znowu ten Javascript…? Jak (i po co) pisać i rozpowszechniać programy w napisane w JS",
    author: "Kamil Gałek",
  },
  {
    start: "15:00",
    end: "15:50",
    title: "-",
    author: "",
  },
  {
    start: "16:00",
    end: "16:50",
    title: "-",
    author: "",
  },
];

const sundaySpeaches = [
  {
    start: "10:00",
    end: "10:50",
    title: "-",
    author: "",
  },
  {
    start: "11:00",
    end: "11:50",
    title: "Embedded Linux build systems - where are we now?",
    author: "Cezary Dynak",
  },
  {
    start: "12:00",
    end: "12:50",
    title: "Embedded Python",
    author: `Vladimir "vovcia" Mitiouchev`,
  },
  {
    start: "13:00",
    end: "14:00",
    title: "Przerwa obiadowa",
  },
  {
    start: "14:00",
    end: "14:50",
    title: "Wybrane konfiguracje sieciowe na Linuksie",
    author: `Jakub "Siewca" Juszczakiewicz`,
  },
  {
    start: "15:00",
    end: "15:50",
    title: "NixOS—jak? po co? dlaczego?",
    author: "Błażej Święcicki",
  },
];

const Agenda = () => {
  const [isSaturday, setSaturday] = useState<boolean>(true);
  const content = {
    saturdayOption: "Sobota 22 kwietnia",
    sundayOption: "Niedziela 23 kwietnia",
  };
  const days = [
    {
      text: content.saturdayOption,
      select: () => setSaturday(true),

      selected: isSaturday,
    },
    {
      text: content.sundayOption,
      select: () => setSaturday(false),

      selected: !isSaturday,
    },
  ];

  return (
    <Box as="section" zIndex="2" width="100%" bg="#000000" minHeight="100vh">
      <VStack gap="10" width="inherit">
        <Heading
          marginLeft="8"
          alignSelf="flex-start"
          as="h3"
          color="whiteAlpha.900"
        >
          Agenda
        </Heading>
        <DaySelect days={days} />
        <Box width={["95%", "80%", "70%", "60%"]} zIndex="30" margin="auto">
          {(isSaturday ? saturdaySpeeches : sundaySpeaches).map((speech) => (
            <Speech key={`${speech.title}-${speech.start}`} speech={speech} />
          ))}
        </Box>
      </VStack>
    </Box>
  );
};

export default Agenda;
