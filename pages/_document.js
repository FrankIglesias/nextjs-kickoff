import Document, { Head, Main, NextScript } from 'next/document';

// This template is required for using SCSS modules
/* eslint-disable */
export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <link rel="stylesheet" href="/_next/static/style.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
/* eslint-enable */
