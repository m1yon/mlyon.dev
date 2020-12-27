import React from 'react'
import { AppProps } from 'next/app'
import { withDarkMode } from 'hooks/useDarkMode'
import { useDarkMode } from 'hooks'
import Head from 'next/head'
import { Header, Hero } from 'components'
import clsx from 'clsx'
import 'tailwindcss/tailwind.css'

const App = ({ Component, pageProps, router }: AppProps) => {
  const [darkMode] = useDarkMode()

  const isHomepage = router.route === '/'

  return (
    <div className={clsx(darkMode && 'dark')}>
      <Head>
        <title>Michael Lyon</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="text-gray-900 dark:text-gray-50 flex flex-col min-h-screen flex-1 items-center overflow-x-hidden bg-white dark:bg-gray-900">
        <div
          className={clsx([
            isHomepage && 'bg-gray-50 dark:bg-gray-800',
            'w-full overflow-hidden',
          ])}
        >
          <Header />
          {isHomepage ? <Hero /> : null}
        </div>

        <div className="container mx-auto pb-8 pt-16 xl:px-80 2xl:px-96">
          <Component {...pageProps} />
        </div>
      </div>
    </div>
  )
}

export default withDarkMode(App)
