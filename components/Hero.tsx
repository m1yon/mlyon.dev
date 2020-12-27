import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className="container mx-auto py-36 flex justify-center relative">
      <div className="absolute top-0 right-1/2">
        <Image src="/hero.png" width={1143 / 4} height={2041 / 4} />
      </div>
      <div className="ml-80">
        <h1 className="text-5xl font-bold">Michael Lyon</h1>
        <h2 className="text-xl text-gray-700 dark:text-gray-400">
          Web App Developer
        </h2>
        <a
          href="https://twitter.com/__mlyon"
          className="text-emerald-500 hover:text-emerald-400"
        >
          @__mlyon
        </a>
      </div>
    </div>
  )
}

export default Hero
