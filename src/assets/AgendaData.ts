import { SpeechItem } from "@/slices/agenda/Speech";

export const SATURDAY_AGENDA: SpeechItem[] = [
  {
    start: "10:00",
    end: "10:50",
    title:
      "Computer Vision & Deep Learning in Sugar Factories - Lessons Learned",
    author: "Filip Drapejkowski",
    lang: ["en"],
    description: [
      "Deep Learning became common in factories and it's not a fad. This is a story of integrating Neural Networks capable of Instance Aware Segmentation, Detection, Regression, and Classification in sugar factories around Europe. It focuses mostly on difficulties and how we overcome them. The work was tedious and frustrating, but it resulted in a well-established process that boost the quality of the sugar process while cutting costs.",
    ],
    recording:
      "https://www.youtube.com/watch?v=r2FVjVojHDE&list=PLTvZBPQxCI8HIntC3SGEDJgAcnd3kMI-0",
  },
  {
    start: "11:00",
    end: "11:50",
    title: "Pliki poliglotyczne",
    author: "Tomasz Zieliński",
    lang: ["pl"],
    description: [
      "Czym jest plik? Zestawem bajtów zapisanych w określonej kolejności. Czym jest format pliku? Umową dotyczącą tego, jak interpretować owe bajty. W niniejszej prelekcji przyjrzymy się sytuacjom, gdy ten sam zestaw bajtów spełnia jednocześnie wymogi kilku różnych formatów. Pliki takie nazywami poliglotami (polyglot) i możemy ich użyć do atakowania aplikacji, ukrywania danych, zadziwiania przyjaciół lub... projektowania formatów danych odpornych na nadużycia.",
    ],
    recording:
      "https://www.youtube.com/watch?v=Stw2v8PzXgM&list=PLTvZBPQxCI8HIntC3SGEDJgAcnd3kMI-0",
  },
  {
    start: "12:00",
    end: "12:50",
    title: "Jądro Linuksa i wzrost złożoności",
    author: "Rafał Wysocki",
    lang: ["pl"],
    description: [
      "Rzeczy, z którymi mamy do czynienia, z reguły stają się coraz bardziej skomplikowane z upływem czasu. Jest to naturalne zjawisko, które dotyczy także oprogramowania komputerowego, a w tym jądra Linuksa. Wzrost złożoności jest nieunikniony i trzeba sobie z nim radzić, ale niekiedy staje się prawdziwym problemem oraz stanowi barierę dla rozwoju w pewnych kierunkach, więc wskazane jest unikanie go, o ile to możliwe. Opowiem o tym z jakich powodów i w jakim tempie rośnie złożoność jądra Linuksa, a także o tym jak można ten wzrost złożoności (do pewnego stopnia) kontrolować.",
    ],
    recording:
      "https://www.youtube.com/watch?v=HF1EO-zHtbY&list=PLTvZBPQxCI8HIntC3SGEDJgAcnd3kMI-0",
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
      "Czemu znowu ten Javascript…? Jak (i po co) pisać i rozpowszechniać programy napisane w JS",
    author: "Kamil Gałek",
    lang: ["pl"],
    description: [
      "Wstajesz rano - Javascript, czytasz ten opis - Javascript, kładziesz się spać - Javascript. Otwierasz swoją ulubioną aplikację - znów Javascript! Dajcie żyć człowiekowi i użyjcie w końcu czegoś innego!",
      "",
      "Czemu wszędzie jest ten Javascript?!",
      "No właśnie, czemu? W swojej prezentacji (poza kodowaniem i sposobami publikacji) postaram się odpowiedzieć na to pytanie. Przez niecałą godzinę postaram się poruszyć też odpowiedzi na następujące pytania:",
      "",
      "Czy Javascript to jest język idealny…? (mały spoiler, nie jest, ale i tak warto posłuchać)",
      "",
      "Co takiego wnosi ta technologia, że jest aż tak ważna dla Open Source?",
      "",
      "Jakim cudem ten język pracuje na rzecz popularyzacji systemów GNU/Linux?",
      "",
      "Czemu wielkie korporacje udostępniają swoje frameworki i biblioteki JS?",
      "",
      "Do zobaczenia na miejscu!",
    ],
    recording:
      "https://www.youtube.com/watch?v=HTWviHh1nEk&list=PLTvZBPQxCI8HIntC3SGEDJgAcnd3kMI-0",
  },
  {
    start: "15:00",
    end: "15:50",
    title: "NixOS—jak? po co? dlaczego?",
    author: "Błażej Święcicki",
    lang: ["pl"],
    description: [
      "NixOS jest dystrybucją Linuksa z bardzo dziwną propozycją: rób wszystko inaczej i będzie fajnie. Pierwsze pytanie, które się rodzi—dlaczego ktoś miałby to sobie robić? Drugie jednak... dlaczego potem się nie chce używać niczego innego?",
      "",
      "Spróbujmy zrozumieć czym jest Nix i NixOS, a co ważniejsze: co sprawia, że jest najlepszym sposobem konfiguracji systemów operacyjnych jaki w życiu widziałem.",
    ],
    recording:
      "https://www.youtube.com/watch?v=NTS6GMJLN30&list=PLTvZBPQxCI8HIntC3SGEDJgAcnd3kMI-0",
  },
  {
    start: "16:00",
    end: "16:50",
    title: "Pstryk i dzieje się magia czyli o CECu słów kilka",
    author: "Krzysztof Opasiak",
    lang: ["pl"],
    description: [
      "Pilot.",
      "Jeden, by wszystkimi rządzić, jeden by wszystkie włączyć,",
      "Jeden, by wszystkimi sterować i na końcu wyłączyć.",
      "",
      "Ale jak to właściwie się dzieje że pilot od telewizora pozwala nam sterować nie tylko telewizorem ale również soundbarem, odtwarzaczem blu-ray i dekoderem? Czy to magia? Nie! To zasługa HDMI CEC!",
      "",
      "Opowiem o tym czym HDMI CEC tak właściwie jest i jak działa. A przede wszystkim o tym dlaczego to nie pilot steruje tymi urządzeniami tylko telewizor. Warstwa po warstwie będziemy obierać stos CECa jak cebulę od kernela aż po userspace nie roniąc przy tym ani jednej łzy.",
    ],
    recording:
      "https://www.youtube.com/watch?v=q-1gKfOg4wg&list=PLTvZBPQxCI8HIntC3SGEDJgAcnd3kMI-0",
  },
  {
    start: "17:00",
    end: "17:50",
    title:
      "Ciekawe podejście do integracji technologii chmurowych: Terraform, Ansible i Helm",
    author: "Piotr Pyciński",
    lang: ["pl"],
    description: [
      `Terraform zarządza infrastrukturą, Ansible konfiguruje serwery, a Helm uruchamia aplikacje na klastrach Kubernetesa. Chociaż wydają się to być niezależne aplikacje, mają wiele wspólnych elementów i często zależą od siebie. Podczas prezentacji przedstawię pomysł, jak zintegrować te technologie przy użyciu jednego wspólnego źródła prawdy (ang. "source of truth").`,
    ],
    recording:
      "https://www.youtube.com/watch?v=ORxQygAcUek&list=PLTvZBPQxCI8HIntC3SGEDJgAcnd3kMI-0",
  },
];

export const SUNDAY_AGENDA: SpeechItem[] = [
  {
    start: "10:00",
    end: "10:50",
    title: "Improve your shell experience in 3 simple steps",
    author: "Maciej Sobkowski",
    lang: ["pl"],
    description: [
      "If you work with the Linux command line interface on a regular basis and you want to learn how to use shell to increase your productivity, this presentation is for you!",
      "",
      "The command line interface in Linux and other related systems offer a set of highly capable tools that constitute some of the pillars of a programmer’s daily work. During this presentation, I will provide you with examples of useful applications and techniques and demonstrate how they can help you work within the console environment  in a more efficient way, as well as show how console tools make for an excellent development environment.",
    ],
    recording:
      "https://www.youtube.com/watch?v=fxLpzBQmDPw&list=PLTvZBPQxCI8HIntC3SGEDJgAcnd3kMI-0",
  },
  {
    start: "11:00",
    end: "11:50",
    title: "Embedded Linux build systems - where are we now?",
    author: "Cezary Dynak",
    lang: ["pl"],
    description: [
      "Buildroot, OpenWRT, Yocto Project - co ostatnio zmieniło się w popularnych narzędziach do budowania Linuksa Embedded? Może to nie rewolucja, ale Internet Rzeczy (IoT) staje się coraz bardziej realny i ścieżka, która obecnie jest obierana może zadecydować o standardach na kolejne dekady. Nie będę się ograniczał wyłącznie do przeglądu rozwiązań OpenSource i przedstawię także jak kształtuje się obecnie ekosystem oparty o Android/Wear OS.",
      "",
      "Nawiązując do prezentacji wygłoszonej na Sesji Linuksowej 5 lat temu, postaram się wzbogacić ją o nowe treści, również z elementami live coding. Mimo bardziej zaawansowanych tematów, przypomnę także podstawowe pojęcia, by mogli się w tym odnaleźć także zwyczajni użytkownicy Linuksa.",
    ],
    recording:
      "https://www.youtube.com/watch?v=KA3mOcXNi_I&list=PLTvZBPQxCI8HIntC3SGEDJgAcnd3kMI-0",
  },
  {
    start: "12:00",
    end: "12:50",
    title: "Embedded Python",
    lang: ["pl"],
    author: `Vladimir "vovcia" Mitiouchev`,
    description: [
      "Przez lata programowanie embedded było postrzegane jako trudne i wymagało znajomości C, a czasami także asemblera. W dzisiejszych czasach możemy mieć nie tylko prostsze C z Arduino, ale także języki wysokiego poziomu, takie jak JavaScript i Python. Na tej prelekcji rozpoczniemy naszą przygodę z programowaniem embedded w Pythonie na popularnych platformach: Raspberry Pico (nie Raspberry Pi!) i Espressif ESP32, oraz odpowiemy na kilka pytań:",
      "- Jaka jest różnica między MicroPythonem a CircuitPythonem?",
      "- Jak uruchomić magistralę I2C?",
      "- Który PULL dla czujnika Halla?",
      "I dużo więcej!",
    ],
    recording:
      "https://www.youtube.com/watch?v=kirsGElirXk&list=PLTvZBPQxCI8HIntC3SGEDJgAcnd3kMI-0",
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
    lang: ["pl"],
    description: [
      "Opowiem o wybranych konfiguracjach sieciowych - bardziej lub mniej znane sztuczki. Pokazane zagadnienia będą dotyczyć głównie filtrów pakietów, ale nie tylko. Trochę inne podejście do powszechnie znanych zagadnień które pozwala wyciągnąć więcej z dobrze znanych narzędzi.",
    ],
    recording:
      "https://www.youtube.com/watch?v=cFml0C2N-98&list=PLTvZBPQxCI8HIntC3SGEDJgAcnd3kMI-0",
  },
  {
    start: "15:00",
    end: "15:50",
    title: "Prometheus 101: Jak uwolnić (potencjał) Prometeusza?",
    author: "Filip Dorosz",
    lang: ["pl"],
    description: [
      "Uczestnicy będą mieli okazję dowiedzieć się co to jest oprogramowanie Prometheus, po co zbierać metryki, jak używać Prometheusa do monitorowania infrastruktury oraz jak uwolnić jego potencjał poprzez remote_write i oprogramowanie Mimir. Wszystko oparte o moje doświadczenia z Prometheusem z firmy OVHcloud gdzie pracuję.",
    ],
    recording:
      "https://www.youtube.com/watch?v=acNC-CUNArw&list=PLTvZBPQxCI8HIntC3SGEDJgAcnd3kMI-0",
  },
  {
    start: "16:00",
    end: "17:00",
    title: "Lightning talks",
    lang: ["en", "pl"],
    description: [
      "Chciałbyś poruszyć ważny dla Ciebie temat, lub przekazać myśl do społeczności Open Source? Przyjdź i zrób to!",
    ],
    recording:
      "https://www.youtube.com/watch?v=59JWSt5SHy0&list=PLTvZBPQxCI8HIntC3SGEDJgAcnd3kMI-0",
  },
];
