import React from 'react'
import Head from 'next/head'

type SEOProps = {
  title: string
  url: string
  description: string
  image: string
}

const SEO = ({ title, url, description, image }: SEOProps) => {
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />

      {/* Open Graph */}
      <meta property="og:url" content={`https://mlyon.dev${url}`} />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`https://mlyon.dev${image}`} />

      {/* Twitter */}
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={`https://mlyon.dev${image}`} />
    </Head>
  )
}

export default SEO
