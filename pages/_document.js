import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <link rel="shortcut icon" href="/img/favicon.ico" />
          <meta name="theme-color" content="#000000" />
          <meta
            name="description"
            content="_"
          />
          <meta
            property="og:title"
            content="_"
          />
          {/* <meta property="og:image" content="%PUBLIC_URL%/img/bio-pic.webp" /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
