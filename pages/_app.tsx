import type { AppProps } from "next/app";
import "../styles/globals.css";
import { MenuContextProvider } from "../utils/MenuContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MenuContextProvider>
      <Component {...pageProps} />
    </MenuContextProvider>
  );
}

export default MyApp;
