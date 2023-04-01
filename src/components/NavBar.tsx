import {
  DarkMode,
  Box,
  StyleProps,
  Flex,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  LightMode,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import Image from "next/image";
import logo from "../assets/logo-duze-pl.webp";
import { useTheme } from "@chakra-ui/react";
import { useTranslation } from "next-export-i18n";
import Lang from "@/components/Lang";
import config from "../config";
import scrollToSection from "@/utils/scrollToSection";
import { useMediaQuery } from "@chakra-ui/react";

export const HEADER_HEIGHT = 60;

const NavBarStyle: StyleProps = {
  height: `${HEADER_HEIGHT}px`,
  bg: "#000000",
  position: "fixed",
  top: "0",
  width: "100%",
  zIndex: "100",
};

const NavBar = () => {
  const [isSmallerThanLg] = useMediaQuery("(max-width: 62em)");
  const [isBiggerThanLg] = useMediaQuery("(min-width: 62em)");
  const { t }: { t: (key: string) => string } = useTranslation("common");
  const headId = "head";

  const menu = [
    { text: t("menu.about"), sectionId: "about" },
    {
      ...(config.SHOW_SPEAKERS && {
        text: t("menu.speakers"),
        sectionId: "speakers",
      }),
    },
    {
      ...(config.SHOW_AGENDA && {
        text: t("menu.agenda"),
        sectionId: "agenda",
      }),
    },

    { text: t("menu.previous"), sectionId: "previous" },
    { text: t("menu.sponsors"), sectionId: "sponsors" },
    { text: t("menu.contact"), sectionId: "contact" },
  ].filter(({ text }) => text);

  return (
    <Box {...NavBarStyle}>
      <Flex
        marginLeft={{ base: "2%", lg: "5" }}
        marginRight={{ base: "2%", lg: "0" }}
        justifyContent="space-between"
        height="100%"
        alignItems="center"
        top="0"
        mt="0"
      >
        <Box
          width={{ base: "172px", lg: "230px" }}
          height={{ base: "42px", lg: "56px" }}
          marginTop="auto"
          marginBottom="auto"
          onClick={() => scrollToSection(headId)}
          cursor="pointer"
        >
          <Image alt="sesja linuksowa" src={logo} />
        </Box>
        {isBiggerThanLg && (
          <DesktopNavBar menu={menu} head={headId} />
        )}
        {isSmallerThanLg && (
          <MobileNavBar menu={menu} head={headId} />
        )}
      </Flex>
    </Box>
  );
};

type Menu = {
  text?: string;
  sectionId?: string;
}[];

const MobileNavBar = ({ menu }: { menu: Menu }) => {
  return <DarkMode>
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<HamburgerIcon color="#fff" />}
        variant="outline"
      />
      <LightMode>
        <MenuList>
          {menu.map(({ text, sectionId }) => (
            <MenuItem
              key={text}
              onClick={() => sectionId && scrollToSection(sectionId)}
            >
              {text}
            </MenuItem>
          ))}
          <MenuItem>
            <Lang textColor="#000" />
          </MenuItem>
        </MenuList>
      </LightMode>
    </Menu>
  </DarkMode>
}

const DesktopNavBar = ({ menu }: { menu: Menu }) => {
  const theme = useTheme();

  return <>
    <Flex
      marginBottom="auto"
      marginTop="auto"
      marginLeft="5%"
      width="50%"
      maxWidth="90vh"
      gap="10px"
      minWidth="570px"
      justifyContent="space-between"
    >
      {menu.map(({ text, sectionId }) => (
        <Text
          key={text}
          textTransform="capitalize"
          color="whiteAlpha.900"
          fontSize={["sm", "sm", "lg", "xl"]}
          cursor="pointer"
          _hover={{ color: theme.colors.primary }}
          height="30px"
          onClick={() => sectionId && scrollToSection(sectionId)}
        >
          {text}
        </Text>
      ))}
    </Flex>
    <Lang />
  </>
}

export default NavBar;
