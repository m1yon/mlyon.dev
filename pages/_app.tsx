import React from 'react'
import { AppProps } from 'next/app'
import { withDarkMode } from 'hooks/useDarkMode'
import 'styles/main.css'

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default withDarkMode(App)
