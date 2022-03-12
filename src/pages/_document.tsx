import Error from '@containers/Error'
import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript
} from 'next/document'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || ''

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Primary Meta Tags */}
          <meta name="title" content="Adilson Soares" />
          <meta
            name="description"
            content="Adilson Soares is a Software Developer and Engineer skilled to build well-structured applications in terms of architecture and code quality in order to promote a good user experience."
          />

          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content={baseUrl} />
          <meta property="og:title" content="Adilson Soares" />
          <meta
            property="og:description"
            content="Adilson Soares is a Software Developer and Engineer skilled to build well-structured applications in terms of architecture and code quality in order to promote a good user experience."
          />
          <meta property="og:image" content={baseUrl + '/images/metaTag.jpg'} />

          {/* Twitter */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content={baseUrl} />
          <meta property="twitter:title" content="Adilson Soares" />
          <meta
            property="twitter:description"
            content="Adilson Soares is a Software Developer and Engineer skilled to build well-structured applications in terms of architecture and code quality in order to promote a good user experience."
          />
          <meta
            property="twitter:image"
            content={baseUrl + '/images/metaTag.jpg'}
          />
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,700"
            rel="stylesheet"
          />
        </Head>
        <body>
          <noscript>
            <Error errorType="noscript" />
          </noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
