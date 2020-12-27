import React from 'react'
import Head from 'next/head'

type SEOProps = {
  title: string
}

const SEO = ({ title }: SEOProps) => {
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}

export default SEO
