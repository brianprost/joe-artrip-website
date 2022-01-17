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
            content="Joe Artrip, DC-based Videographer"
          />
          <meta
            property="og:title"
            content="Joe Artrip, DC-based Videographer"
          />
          <meta property="og:image" content="%PUBLIC_URL%/img/bio-pic.webp" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@200..800&family=Lexend&family=Press+Start+2P&display=swap"
            rel="stylesheet"
          />
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
