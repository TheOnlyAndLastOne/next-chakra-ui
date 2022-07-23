import { ChakraProvider } from "@chakra-ui/react";

import theme from "../theme";

function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  // const Layout = layouts[Component.layout] || ((page) => page);
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(
    <ChakraProvider resetCSS theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
