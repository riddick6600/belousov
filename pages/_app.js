import "@/public/css/bootstrap.min.css";
import "animate.css";
import "@/public/css/boxicons.min.css";
import "@/public/css/flaticon.css";
import "@/public/css/slick.css";
import "react-accessible-accordion/dist/fancy-example.css";
import "@/public/css/style.css";
import "@/public/css/responsive.css";
import "@/public/css/rtl.css";
import React from "react";
import Head from "next/head";
import GoTop from "@/components/_App/GoTop";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";

import { ToastProvider } from "react-toast-notifications";

export default function App({ Component, pageProps }) {
  return (
    <ToastProvider
      placement="bottom-left"
      autoDismissTimeout={6000}
      autoDismiss
    >
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>ZA-IT</title>
      </Head>

      <Navbar transparent={pageProps.transparent} />

      <Component {...pageProps} />

      <Footer />
      <GoTop scrollStepInPx="100" delayInMs="10.50" />
    </ToastProvider>
  );
}
