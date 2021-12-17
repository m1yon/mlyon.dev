import React from 'react'

const Footer = () => {
  return (
    <footer className="absolute bottom-0 left-0 pb-4 w-full text-center text-sm text-gray-500 dark:bg-gray-900">
      © {new Date().getFullYear()}, Built with{' '}
      <a
        href="https://nextjs.org/"
        className="hover:underline text-gray-600 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
      >
        Next.js
      </a>
    </footer>
  )
}

export default Footer
