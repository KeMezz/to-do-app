import React from "react";
import ReactDOM from "react-dom";
import { RecoilRoot } from "recoil";
import App from "./App";
import { Helmet } from "react-helmet";

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/xeicon@2.3.3/xeicon.min.css"
        ></link>
      </Helmet>
      <App />
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById("root")
);
