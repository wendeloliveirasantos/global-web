import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "@/styles/global";
import theme from "@/styles/theme";
import ProspectProvider from "@/context/prospect";
import AutoProvider from "@/context/auto";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <ProspectProvider>
        <AutoProvider>
          <Component {...pageProps} />
          <GlobalStyles />
        </AutoProvider>
      </ProspectProvider>
    </ThemeProvider>
  );
}
