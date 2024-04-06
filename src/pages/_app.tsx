import React from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import "@/styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>elitecode</title>
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
