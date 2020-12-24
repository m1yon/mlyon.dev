import React from 'react'
import Head from 'next/head'
import { Header, Hero } from 'components'
import { useDarkMode } from 'hooks'

const Home = () => {
  const [darkMode] = useDarkMode()

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Head>
        <title>Michael Lyon</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="text-gray-900 dark:text-gray-50 flex flex-col min-h-screen flex-1 justify-between items-center overflow-x-hidden bg-white dark:bg-gray-900">
        <div className="bg-gray-50 dark:bg-gray-800 w-full overflow-hidden border-b-2 border-gray-100 dark:border-gray-700">
          <Header />
          <Hero />
        </div>
      </div>
    </div>
  )
}

export default Home
