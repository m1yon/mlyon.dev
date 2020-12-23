import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className="container mx-auto py-40 flex justify-center relative">
      <div className="absolute top-0 right-1/2">
        <Image src="/hero.png" width={1143 / 4} height={2041 / 4} />
      </div>
      <div className="ml-80">
        <h1 className="text-5xl font-bold">Michael Lyon</h1>
        <h2 className="text-xl text-gray-700 dark:text-gray-400">
          Web App Developer
        </h2>
      </div>
    </div>
  )
}

export default Hero
