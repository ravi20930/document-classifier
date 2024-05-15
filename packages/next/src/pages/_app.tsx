// _app.tsx

import { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import { GoogleFonts } from "next-google-fonts";
import "../styles/globals.css";
import "../styles/font.css";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Documents made easy!</title>
        <link
          rel="icon"
          href="favicon-16x16.png?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        <link
          rel="apple-touch-icon"
          href="apple-touch-icon.png?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </Head>
      <GoogleFonts href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@600&family=Poppins:wght@400;500;600;700;800&display=swap" />
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default MyApp;
