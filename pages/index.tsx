import React from 'react'
import Head from 'next/head'

const Home = () => {
  return (
    <div>
      <Head>
        <title>Michael Lyon</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container">
        <h1 className="text-2xl p-4 w-full">Michael Lyon</h1>
        <p>test</p>
      </main>
    </div>
  )
}

export default Home
