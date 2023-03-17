import { Box, VStack, Heading } from "@chakra-ui/react";
import { useState } from "react";
import DaySelect from "./DaySelect";
import Speech from "./Speech";

const saturdaySpeeches = [
  {
    start: "10:00",
    end: "10:50",
    title: "Computer Vision & Deep Learning in Sugar Factories - Lessons Learned",
    author: "Filip Drapejkowski",
  },
  {
    start: "11:00",
    end: "11:50",
    title: "Pliki polimorficzne",
    author: "Tomasz Zieliński",
    description:"Czym jest plik? Zestawem bajtów zapisanych w określonej kolejności. Czym jest format pliku? Umową dotyczącą tego, jak interpretować owe bajty. W niniejszej prelekcji przyjrzymy się sytuacjom, gdy ten sam zestaw bajtów spełnia jednocześnie wymogi kilku różnych formatów. Pliki takie nazywami poliglotami (polyglot) i możemy ich użyć do atakowania aplikacji, ukrywania danych, zadziwiania przyjaciół lub... projektowania formatów danych odpornych na nadużycia."
  },
  {
    start: "12:00",
    end: "12:50",
    title: "",
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
    title: "Czemu znowu ten Javascript…? Jak (i po co) pisać i rozpowszechniać programy w napisane w JS",
    author: "Kamil Gałek",
    description:`Wstajesz rano - Javascript, czytasz ten opis - Javascript, kładziesz się spać - Javascript. Otwierasz swoją ulubioną aplikację - znów Javascript! Dajcie żyć człowiekowi i użyjcie w końcu czegoś innego!\n
    Czemu wszędzie jest ten Javascript?!\n
    No właśnie, czemu? W swojej prezentacji (poza kodowaniem i sposobami publikacji) postaram się odpowiedzieć na to pytanie. Przez niecałą godzinę postaram się poruszyć też odpowiedzi na następujące pytania:\n
    Czy Javascript to jest język idealny…? (mały spoiler, nie jest, ale i tak warto posłuchać)\n
    Co takiego wnosi ta technologia, że jest aż tak ważna dla Open Source?\n
    Jakim cudem ten język pracuje na rzecz popularyzacji systemów GNU/Linux?\n 
    Czemu wielkie korporacje udostępniają swoje frameworki i biblioteki JS?\n
    Do zobaczenia na miejscu!
    `
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
  }
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
    description: `Przez lata programowanie embedded było postrzegane jako trudne i
    wymagało znajomości C, a czasami także asemblera. W dzisiejszych
    czasach mamy nie tylko prostsze C z Arduino, ale także języki
    wysokiego poziomu, takie jak JavaScript i Python. Na tej prelekcji
    rozpoczniemy naszą przygodę z programowaniem embedded w Pythonie na
    popularnych platformach: Raspberry Pico (nie Raspberry Pi!) i
    Espressif ESP8266/ESP32, oraz odpowiemy na kilka pytań:
    - Jaka jest różnica między MicroPythonem a CircuitPythonem?
    - Jak uruchomić magistralę I2C?
    - Który PULL dla czujnika Halla?
    I dużo więcej!`
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
  }
]

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
