import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className="container mx-auto py-8 lg:py-36 flex flex-col justify-center relative items-center lg:flex-row">
      <div className="block bg-white lg:bg-gray-50 dark:bg-gray-900 lg:dark:bg-gray-800 top-0 right-1/2 rounded-full lg:rounded-none lg:absolute w-52 h-52 lg:w-auto lg:h-auto overflow-hidden">
        <Image src="/hero.png" width={1143 / 4} height={2041 / 4} />
      </div>
      <div className="text-center lg:ml-80 lg:text-left">
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
