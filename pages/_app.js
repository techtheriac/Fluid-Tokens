/** @jsxImportSource theme-ui */
import "../styles/globals.scss";
import { ThemeProvider } from "theme-ui";
import { useEffect } from "react";
import theme from "../theme/";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
