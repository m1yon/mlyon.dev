import React from 'react'
import { AppProps } from 'next/app'
import { withDarkMode } from 'hooks/useDarkMode'
import { useDarkMode } from 'hooks'
import Head from 'next/head'
import { Header, Hero, Footer } from 'components'
import clsx from 'clsx'
import 'tailwindcss/tailwind.css'
import 'styles/prism-theme.css'
import 'styles/global.css'

const App = ({ Component, pageProps, router }: AppProps) => {
  const [darkMode] = useDarkMode()

  const isHomepage = router.route === '/'

  return (
    <div
      className={clsx(darkMode && 'dark dark-mode')}
      // don't show the page until the user's darkMode settings have been loaded
      // TODO: find a cleaner way to do this
      style={{ display: typeof darkMode === 'undefined' ? 'none' : undefined }}
    >
      <Head>
        <title>Michael Lyon</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative text-gray-900 dark:text-gray-50 min-h-screen flex flex-col flex-1 items-center overflow-x-hidden bg-white dark:bg-gray-900 pb-16">
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

        <Footer />
      </div>
    </div>
  )
}

export default withDarkMode(App)
