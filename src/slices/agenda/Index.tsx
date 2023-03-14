import { Box, VStack, Heading } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import DaySelect from "./DaySelect";
import Speech, { SpeechItem } from "./Speech";

const saturdaySpeeches: SpeechItem[] = [
  {
    start: "9:00",
    end: "9:50",
    title: "Własny serwer email - jak i dlaczego [pl]1",
    author: "Błażej Święcicki",
    description: "Własny serwer email - jak i dlaczego [pl]",
  },
  {
    start: "10:00",
    end: "10:50",
    title: "Własny serwer email - jak i dlaczego [pl]2",
    author: "Błażej Święcicki",
    description: "Własny serwer email - jak i dlaczego [pl]",
  },
  {
    start: "11:00",
    end: "11:50",
    title: "Własny serwer email - jak i dlaczego [pl]3",
    author: "Błażej Święcicki",
    description: "Własny serwer email - jak i dlaczego [pl]",
  },
  {
    start: "12:00",
    end: "12:50",
    title: "Własny serwer email - jak i dlaczego [pl]4",
    author: "Błażej Święcicki",
    description: "Własny serwer email - jak i dlaczego [pl]",
  },
  {
    start: "13:00",
    end: "14:00",
    title: "Przerwa obiadowa",
    description: "Własny serwer email - jak i dlaczego [pl]",
  },
  {
    start: "14:00",
    end: "14:50",
    title: "Własny serwer email - jak i dlaczego [pl]5",
    author: "Błażej Święcicki",
    description: "Własny serwer email - jak i dlaczego [pl]",
  },
  {
    start: "15:00",
    end: "15:50",
    title: "Własny serwer email - jak i dlaczego [pl]6",
    author: "Błażej Święcicki",
    description: "Własny serwer email - jak i dlaczego [pl]",
  },
  {
    start: "16:00",
    end: "16:50",
    title: "Własny serwer email - jak i dlaczego [pl]7",
    author: "Błażej Święcicki",
    description: "Własny serwer email - jak i dlaczego [pl]",
  },
  {
    start: "17:00",
    end: "17:50",
    title: "Własny serwer email - jak i dlaczego [pl]8",
    author: "Błażej Święcicki",
    description: "Własny serwer email - jak i dlaczego [pl]",
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
    <Box
      as="section"
      id="agenda"
      zIndex="2"
      width="100%"
      bg="#000000"
      minHeight="100vh"
      paddingTop="50"
      paddingBottom="100"
    >
      <VStack gap="10" width="inherit">
        {/* <Heading
          marginLeft="8"
          alignSelf="flex-start"
          as="h3"
          color="whiteAlpha.900"
        >
          Agenda
        </Heading> */}
        <DaySelect days={days} />
        <Box width={["95%", "80%", "70%", "60%"]} zIndex="30" margin="auto">
          {saturdaySpeeches.map((speech) => (
            <Speech key={speech.title} speech={speech} />
          ))}
        </Box>
      </VStack>
    </Box>
  );
};

export default Agenda;
