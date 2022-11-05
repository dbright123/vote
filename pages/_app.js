import {Fragment} from "react"
import Head from 'next/head'
import Script from "next/script"

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <link rel="shortcut icon" href="vote.png" type="image/x-icon" />
        <title>Polling Units</title>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossOrigin="anonymous"/>
      </Head>
      <Component {...pageProps} />
      <Script src = "https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"/>
    </Fragment>
  )
}

export default MyApp
