import { Box, VStack, Heading } from "@chakra-ui/react";
import { useState } from "react";
import DaySelect from "./DaySelect";
import Speech from "./Speech";
import { SATURDAY_AGENDA, SUNDAY_AGENDA } from "../../assets/AgendaData";

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
          {(isSaturday ? SATURDAY_AGENDA : SUNDAY_AGENDA).map((speech) => (
            <Speech key={`${speech.title}-${speech.start}`} speech={speech} />
          ))}
        </Box>
      </VStack>
    </Box>
  );
};

export default Agenda;
