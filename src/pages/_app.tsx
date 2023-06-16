import { getAuth, onAuthStateChanged } from "firebase/auth";
import type { AppProps } from "next/app";
import Head from "next/head";
import { PropsWithChildren, useEffect } from "react";
import useWindowSize from "src/hooks/useWindowSize";
import AuthProvider from "src/provider/authProvider";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "styles/GlobalStyle";
import theme from "styles/Theme/theme";

function App({ Component, pageProps }: AppProps) {
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      localStorage.setItem(
        "user",
        JSON.stringify({
          uid: user.uid,
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
        })
      );
    }
  });
  return (
    <>
      <AuthProvider>
        <Head>
          <title>Devway</title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0 viewport-fit=cover"
          />
        </Head>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Layout>
            <Component {...pageProps} />;
          </Layout>
        </ThemeProvider>
      </AuthProvider>
    </>
  );
}

export default App;

let vh = 0;

function Layout({ children }: PropsWithChildren<{}>) {
  const windowSize = useWindowSize();

  useEffect(() => {
    vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }, [windowSize.height]);

  return <StyledLayout>{children}</StyledLayout>;
}

const StyledLayout = styled.div`
  min-height: calc(var(--var, 1vh) * 100);
  max-width: 1440px;
  width: 100vw;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.color.white};
`;
