import "@public/css/bootstrap.min.css";
import "animate.css";
import "@public/css/boxicons.min.css";
import "@public/css/flaticon.css";
import "@public/css/slick.css";
import "react-accessible-accordion/dist/fancy-example.css";
import "@public/css/style.css";
import "@public/css/responsive.css";
import "@public/css/rtl.css";
import React from "react";
import Head from "next/head";
import GoTop from "@components/_App/GoTop";
import Navbar from "@components/_App/Navbar";
import Footer from "@components/_App/Footer";
import { ToastProvider } from "react-toast-notifications";
import { NAME } from "@constants";

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
        <title>{NAME}</title>
        {/* <!-- Yandex.Metrika counter --> */}
        <script type="text/javascript">
          {`
             (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
             var z = null;m[i].l=1*new Date();
             for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
             k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
             (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
          
             ym(90151810, "init", {
                  clickmap:true,
                  trackLinks:true,
                  accurateTrackBounce:true,
                  webvisor:true
             });
        `}
        </script>
        <noscript>
          <div>
            <img src="https://mc.yandex.ru/watch/90151810" alt="" />
          </div>
        </noscript>
        {/* <!-- /Yandex.Metrika counter --> */}
      </Head>
      {!pageProps.hideNavbar && <Navbar transparent={pageProps.transparent} />}
      <Component {...pageProps} />
      <Footer />
      <GoTop scrollStepInPx="100" delayInMs="10.50" />
    </ToastProvider>
  );
}
