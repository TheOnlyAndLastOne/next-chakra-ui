import { useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import "../utils/nprogress/nprogress.css";
import NProgress from "nprogress";

import { useRouter } from "next/router";

import theme from "../theme";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteStart = (url) => {
      console.log(`url ${url} start`);
      NProgress.start();
    };
    const handleRouteDone = (url) => {
      console.log(`url ${url} end`);
      NProgress.done();
    };

    router.events.on("routeChangeStart", handleRouteStart);
    router.events.on("routeChangeComplete", handleRouteDone);
    router.events.on("routeChangeError", handleRouteDone);

    return () => {
      // Make sure to remove the event handler on unmount!
      router.events.off("routeChangeStart", handleRouteStart);
      router.events.off("routeChangeComplete", handleRouteDone);
      router.events.off("routeChangeError", handleRouteDone);
    };
  }, [router]);

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
