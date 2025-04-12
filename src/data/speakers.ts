import CezaryDynak from '@/assets/speakers/Cezary_Dynak.webp';
import Dorosz from '@/assets/speakers/Dorosz.webp';
import FilipDrapejkowski from '@/assets/speakers/Filip_Drapejkowski.webp';
import InformatykZakladowy from '@/assets/speakers/Informatyk_Zakladowy.webp';
import KamilGalek from '@/assets/speakers/Kamil_Galek.webp';
import Opasiak from '@/assets/speakers/Opasiak.webp';
import Pycinski from '@/assets/speakers/Pycinski.webp';
import RJW from '@/assets/speakers/RJW.webp';
import Mewp from '@/assets/speakers/mewp.webp';
import Sobkowski from '@/assets/speakers/msobkowski.png';
import Siewca from '@/assets/speakers/siewca.webp';
import Vovcia from '@/assets/speakers/vovcia.webp';
import type { SpeakerProps } from '@/components/speakers/types';

export const SPEAKERS: SpeakerProps[] = [
  {
    image: FilipDrapejkowski,
    urls: {},
    name: 'Filip Drapejkowski',
    description: [
      'Lead Machine Learning Engineer in GlobalLogic with 7 years of experience in the industry.',
    ],
  },
  {
    image: InformatykZakladowy,
    urls: {},
    name: 'Tomasz Zieliński',
    description: [
      'Tomasz Zieliński, zawodowy programista od 2003 roku, pasjonat bezpieczeństwa informatycznego, autor bloga Informatyk Zakładowy. Rozwijał systemy finansowe dla NBP, tworzył i weryfikował zabezpieczenia bankowych aplikacji mobilnych, brał udział w pracach nad grą Angry Birds i wyszukiwarką internetową Microsoft Bing. Obecnie programista w firmie DeepL.',
    ],
  },
  {
    image: RJW,
    urls: {},
    name: 'Rafał Wysocki',
    description: [
      'Jestem opiekunem infrastruktury sterującej wykorzystaniem energii (power management) i kontrolą temperatury (thermal control) oraz kodu implementującego specyfikację ACPI w jądrze Linuksa. Zacząłem pracować nad jądrem Linuksa w 2005 roku, natomiast opiekunem pierwszego podsystemu w nim zostałem w 2009 roku. Obecnie pracuję w firmie Intel (od 2012 roku), w grupie odpowiadającej za wsparcie dla technologii Intela w jądrze Linuksa, przede wszystkim nad kodem źródłowym jądra. Zanim dołączyłem do Intela, pracowałem na Wydziale Fizyki Uniwersytetu Warszawskiego (z formalnego wykształcenia jestem fizykiem), a wcześniej w XXVII Liceum Ogólnokształcącym im. T. Czackiego w Warszawie (byłem nauczycielem informatyki i fizyki). Prowadziłem także własny biznes związany ze wsparciem IT dla firm.',
    ],
  },
  {
    image: KamilGalek,
    urls: {},
    name: 'Kamil Gałek',
    description: [
      'Senior Frontend Developer w BigPicture. Zaczynał karierę od pisania kodu bazodanowego, następnie full stack, żeby skończyć na Froncie. Linux na desktopie od czasów liceum, zaczynając od Ubuntu (jak większość), zostając długo na Archu. Autor tekstów na https://mythical-angular.dev/ oraz Medium.',
      'W czasie wolnym zajmuje się gotowaniem. Swoje przepisy lubi takie jak kod: poukładane, czytelne i dostępne dla wszystkich na GitHub: https://github.com/galczo5/recipes',
    ],
  },
  {
    image: Dorosz,
    urls: {},
    name: 'Filip Dorosz',
    description: [
      'DevOps Engineer w OVHcloud. Posiada ponad 7 letnie doświadczenie w Branży IT. Obszar cloud storage w oparciu o technologię Ceph. Python and Puppet master. Observability freak. Sympatyk Open Source. W debugowaniu pomaga mu muzyka synthwave.',
    ],
  },
  {
    image: Opasiak,
    urls: {},
    name: 'Krzysztof Opasiak',
    description: [
      'Programista Kernela w Neat. Wielbiciel open source. Fanatyk USB i wszelkich innych portów, które można znaleźć we współczesnych SBC.',
    ],
  },
  {
    image: CezaryDynak,
    urls: {},
    name: 'Cezary Dynak',
    description: [
      'Absolwent specjalności Embedded Robotics oraz były admin lab07/C-3 na PWr. Obecnie pracuje jako Node.js developer w startupie TapNav, wcześniej jako Head od Node.js w STX Next. Współorganizator meet.js Wrocław oraz meet.js Summit. Poza JS/TS, back-endem oraz IoT interesuje się także Linuksem pod kątem systemów wbudowanych i DevOps.',
    ],
  },
  {
    image: Vovcia,
    urls: {},
    name: 'Vladimir Mitiouchev',
    description: [
      'Vladimir "vovcia" Mitiouchev - Systems architect, Python developer, współzałożyciel fundacji CLUG.',
    ],
  },
  {
    image: Siewca,
    urls: {},
    name: 'Jakub "Siewca" Juszczakiewicz',
    description: [
      'Pasjonat Linuksa i Otwartego oprogramowania. Zawodowo sysadmin i programista niskopoziomowy - aktualnie podwykonawca w jednej z wiodących firm telekomunikacyjnych. Prywatnie m.in. zapalony żeglarz jachtowy, jeździec konny i fotograf, jak również miłośnik gór.',
    ],
  },
  {
    image: Mewp,
    urls: {},
    name: 'Błażej Święcicki',
    description: [
      'Błażej Święcicki - pan maruda, niszczyciel dobrej zabawy, pogromca uśmiechów dzieci — innymi słowy, urodzony sysadmin. Technologiczny perfekcjonista, wiecznie głoszący zalety niszowych rozwiązań nad popularnymi. Uzależniony od NixOSa, inne dystrybucje straciły dla niego sens.',
    ],
  },
  {
    image: Pycinski,
    urls: {},
    name: 'Piotr Pyciński',
    description: [
      '15-letnie doświadczenie jako administrator systemów. Moje początki miały miejsce w czasach, gdy praca przy konsoli i fizycznych serwerach było standardem, a szum wentylatorów towarzyszył codziennym czynnościom. Obecnie staram się odnaleźć w świecie bujającym w chmurach i często podkreślam, że nie jest to uniwersalne rozwiązanie dla wszystkich problemów. Poza pracą lubię żeglować po morzach i oceanach oraz pracuję jako ratownik medyczny w Krakowskim Pogotowiu Ratunkowym.',
    ],
  },
  {
    image: Sobkowski,
    urls: {},
    name: 'Maciej Sobkowski',
    description: [
      "Maciej Sobkowski is a Senior Software Engineer at Antmicro, where he's been working for the last 5 years. His area of expertise includes embedded systems and kernel development, focusing on device drivers and the V4L2 framework in Linux. He has 8+ years of professional experience in developing low-level software using a multitude of free and open source projects including Linux, Zephyr, Android, OpenEmbedded and Buildroot.",
    ],
  },
];
