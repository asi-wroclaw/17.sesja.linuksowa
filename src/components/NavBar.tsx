import {
  DarkMode,
  Box,
  StyleProps,
  Flex,
  Text,
  Hide,
  Menu,
  MenuButton,
  MenuList,
  Show,
  MenuItem,
  IconButton,
  LightMode,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import Image from "next/image";
import logo from "../assets/logo-duze-pl.png";
import { useTheme } from "@chakra-ui/react";
import { useTranslation } from "next-export-i18n";
import Lang from "@/components/Lang";
import config from "../config";
import scrollToSection from "@/utils/scrollToSection";

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
  const theme = useTheme();
  const { t }: { t: (key: string) => string } = useTranslation("common");

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
      <Hide below="lg">
        <Flex
          top="0"
          mt="0"
          ml="5"
          height="100%"
          justifyContent="space-between"
        >
          <Box width="230px" height="56px" marginTop="auto" marginBottom="auto">
            <Image alt="sesja linuksowa" src={logo} />
          </Box>
          <Flex
            marginBottom="auto"
            marginTop="auto"
            marginLeft="5%"
            width="50%"
            gap="10px"
            minWidth="570px"
            justifyContent="space-between"
          >
            {menu.map(({ text, sectionId }) => (
              <Text
                key={text}
                textTransform="capitalize"
                color="whiteAlpha.900"
                fontSize={["sm","sm","lg","xl"]}

                cursor="pointer"
                height="30px"
                onClick={() => sectionId && scrollToSection(sectionId)}
              >
                {text}
              </Text>
            ))}
          </Flex>
          <Lang />
        </Flex>
      </Hide>
      <Show below="lg">
        <Burger />
      </Show>
    </Box>
  );
};

const Burger = () => {
  const { t } = useTranslation("common");

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
    <Flex
      marginLeft="2%"
      marginRight="2%"
      justifyContent="space-between"
      height="100%"
      alignItems="center"
    >
      <Box width="172px" height="42px" marginTop="auto" marginBottom="auto">
        <Image alt="sesja linuksowa" src={logo} />
      </Box>

      <DarkMode>
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
    </Flex>
  );
};

export default NavBar;
