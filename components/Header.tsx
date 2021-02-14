import React from 'react'
import { Icon } from 'elements'
import Link from 'next/link'
import { useDarkMode } from 'hooks'
import clsx from 'clsx'

type HeaderProps = {
  isHomepage?: boolean
}

const Header = ({ isHomepage }: HeaderProps) => {
  const [darkMode, setDarkMode] = useDarkMode()

  return (
    <header className="container mx-auto py-4 flex justify-between">
      <Link href="/">
        <p
          className={clsx([
            'font-bold text-2xl cursor-pointer',
            isHomepage
              ? 'text-cyan-600 dark:text-emerald-200'
              : 'text-cyan-600 dark:text-emerald-400',
          ])}
        >
          ML
        </p>
      </Link>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="py-1 px-4 rounded flex items-center"
      >
        {darkMode ? (
          <>
            <Icon type="moon" className="w-4 h-4 mr-2" /> Dark
          </>
        ) : (
          <>
            <Icon type="sun" className="w-4 h-4 mr-2" /> Light
          </>
        )}
      </button>
    </header>
  )
}

export default Header
