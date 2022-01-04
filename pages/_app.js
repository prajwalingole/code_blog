import react, {useEffect,useState} from 'react'
import {Layout} from '../components'
import '../styles/globals.css'
import '../style/global.scss'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
