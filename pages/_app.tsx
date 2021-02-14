import React from 'react'
import { AppProps } from 'next/app'
import { withDarkMode } from 'hooks/useDarkMode'
import { useDarkMode } from 'hooks'
import { Header, Hero, Footer } from 'components'
import clsx from 'clsx'
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react'
import 'styles/prism-theme.css'
import 'styles/global.css'
import 'overlayscrollbars/css/OverlayScrollbars.css'

const App = ({ Component, pageProps, router }: AppProps) => {
  const [darkMode] = useDarkMode()

  const isHomepage = router.route === '/'

  return (
    <OverlayScrollbarsComponent
      className={clsx([
        'h-screen w-screen',
        darkMode ? 'os-theme-light' : 'os-theme-dark',
      ])}
      options={{ nativeScrollbarsOverlaid: { initialize: false } }}
    >
      <div
        className={clsx(darkMode && 'dark dark-mode')}
        // don't show the page until the user's darkMode settings have been loaded
        // TODO: find a cleaner way to do this
        style={{
          display: typeof darkMode === 'undefined' ? 'none' : undefined,
        }}
      >
        <div className="relative text-gray-900 dark:text-gray-50 min-h-screen flex flex-col flex-1 items-center overflow-x-hidden bg-gray-50 dark:bg-gray-900 pb-16">
          <div
            className={clsx([
              isHomepage &&
                'bg-gradient-to-b from-cyan-100 to-cyan-100 dark:from-emerald-700 dark:to-emerald-600',
              'w-full overflow-hidden',
            ])}
          >
            <Header />
            {isHomepage ? <Hero /> : null}
          </div>

          <div
            className={clsx([
              'container mx-auto pb-8 xl:px-80 2xl:px-96',
              isHomepage ? '' : 'pt-8 lg:pt-16 ',
            ])}
          >
            <Component {...pageProps} />
          </div>

          <Footer />
        </div>
      </div>
    </OverlayScrollbarsComponent>
  )
}

export default withDarkMode(App)
