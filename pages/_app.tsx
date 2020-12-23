import React from 'react'
import { AppProps } from 'next/app'
import { DarkModeProvider } from 'hooks/useDarkMode'
import 'styles/main.css'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <DarkModeProvider>
      <Component {...pageProps} />
    </DarkModeProvider>
  )
}

export default App
