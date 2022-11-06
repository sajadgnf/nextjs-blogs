import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import theme from "@/mui/theme";
import createEmotionCache from "../createEmotionCache";
import "styles/globals.css";
import { Toaster } from "react-hot-toast";
import { wrapper } from "src/redux/store";
import { useStore } from "react-redux";
import { loadUserData } from "src/redux/user/userActions";

const clientSideEmotionCache = createEmotionCache();

function MyApp(props: any) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const store = useStore();

  useEffect(() => {
    loadUserData(store);
  }, []);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
      <Toaster />
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};

export default wrapper.withRedux(MyApp);
