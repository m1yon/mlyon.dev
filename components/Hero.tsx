import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className="container mx-auto py-16 lg:py-40 pt-4 lg:pt-40 flex flex-col justify-center relative items-center lg:flex-row">
      <div className="block bg-white lg:bg-opacity-0 dark:bg-gray-900 lg:dark:bg-opacity-0 top-0 right-1/2 rounded-full lg:rounded-none lg:absolute w-52 h-52 lg:w-auto lg:h-auto overflow-hidden">
        <Image
          src="/img/hero.png"
          width={1143 / 4}
          height={2041 / 4}
          alt="Michael Lyon"
        />
      </div>
      <div className="text-center mt-4 lg:ml-80 lg:text-left lg:mt-0 mb-16 lg:mb-12">
        <h1 className="text-5xl font-bold">Michael Lyon</h1>
        <h2 className="text-xl text-gray-700 dark:text-gray-100">
          Web App Developer
        </h2>
        <a
          href="https://twitter.com/__mlyon"
          className="dark:text-emerald-200 dark:hover:text-emerald-100 text-cyan-700 hover:text-cyan-600 text-lg font-semibold"
        >
          @__mlyon
        </a>
      </div>
    </div>
  )
}

export default Hero
