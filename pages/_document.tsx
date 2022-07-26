import { Html, Head, Main, NextScript } from "next/document"
import Script from "next/script"

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
        <Script
          src="/live2dcubismcore.min.js"
          strategy="beforeInteractive"
        ></Script>
        <Script src="/live2d.min.js" strategy="beforeInteractive"></Script>
      </body>
    </Html>
  )
}
