import { Box, VStack, Heading } from "@chakra-ui/react";
import { useState } from "react";
import DaySelect from "./DaySelect";
import Speech from "./Speech";

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
  const speeches = [
    {
      start: "9:00",
      end: "9:50",
      title: "Własny serwer email - jak i dlaczego [pl]",
      author: "Błażej Święcicki",
    },
    {
      start: "10:00",
      end: "10:50",
      title: "Własny serwer email - jak i dlaczego [pl]",
      author: "Błażej Święcicki",
    },
    {
      start: "11:00",
      end: "11:50",
      title: "Własny serwer email - jak i dlaczego [pl]",
      author: "Błażej Święcicki",
    },
    {
      start: "12:00",
      end: "12:50",
      title: "Własny serwer email - jak i dlaczego [pl]",
      author: "Błażej Święcicki",
    },
    {
      start: "13:00",
      end: "14:00",
      title: "Przerwa obiadowa",
    },
    {
      start: "14:00",
      end: "14:50",
      title: "Własny serwer email - jak i dlaczego [pl]",
      author: "Błażej Święcicki",
    },
    {
      start: "15:00",
      end: "15:50",
      title: "Własny serwer email - jak i dlaczego [pl]",
      author: "Błażej Święcicki",
    },
    {
      start: "16:00",
      end: "16:50",
      title: "Własny serwer email - jak i dlaczego [pl]",
      author: "Błażej Święcicki",
    },
    {
      start: "17:00",
      end: "17:50",
      title: "Własny serwer email - jak i dlaczego [pl]",
      author: "Błażej Święcicki",
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
        <Box width="75%" maxW="40rem">
          {speeches.map((speech) => (
            <Speech key={speech.title} speech={speech} />
          ))}
        </Box>
      </VStack>
    </Box>
  );
};

export default Agenda;
