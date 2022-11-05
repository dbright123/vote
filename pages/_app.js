import {Fragment} from "react"
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <link rel="shortcut icon" href="vote.png" type="image/x-icon" />
        <title>Polling Units</title>
      </Head>
      <Component {...pageProps} />
    </Fragment>
  )
}

export default MyApp
