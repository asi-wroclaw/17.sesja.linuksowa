import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    primary: "#56aeb5",
    secondary: "#5a56b5",
    red: "#ff0000",
  },
  fonts: {
    body: "MontserratSemiBold",
    heading: "MontserratSemiBold",
  },
  // breakpoints: {
  //   sm: '30em',
  //   md: '48em',
  //   lg: '62em',
  //   xl: '80em',
  //   '2xl': '96em',
  // }
  // fontSizes: {
  //   xs: "0.75rem",
  //   sm: "0.875rem",
  //   md: "1rem",
  //   lg: "1.125rem",
  //   xl: "1.25rem",
  //   "2xl": "1.5rem",
  //   "3xl": "1.875rem",
  //   "4xl": "2.25rem",
  //   "5xl": "3rem",
  //   "6xl": "3.75rem",
  //   "7xl": "4.5rem",
  //   "8xl": "6rem",
  //   "9xl": "8rem",
  // },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
