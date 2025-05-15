import React from "react";
import { RecoilRoot } from "recoil";
import "@/app/styles/globals.css";

function MyApp({ Component, pageProps }: any) {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}

export default MyApp;