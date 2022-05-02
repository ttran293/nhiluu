/* eslint-disable @next/next/no-page-custom-font */
import Head from "next/head";
import React from "react";


export default function HeadHelper({title}:any){
    return (
      <Head>
          <title>{title? title : 'Portfolio'} | Nhi Luu</title>
          <meta name="description" content="Nhi Luu Portfolio" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          ></meta>
          <link rel="preconnect" href="https://fonts.googleapis.com"></link>
          <link rel="preconnect" href="https://fonts.gstatic.com"></link>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
    );
}