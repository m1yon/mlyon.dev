import React from 'react'
import { Icon } from 'elements'
import { useDarkMode } from 'hooks'

const Header = () => {
  const [darkMode, setDarkMode] = useDarkMode()

  return (
    <header className="container mx-auto py-4 flex justify-between">
      <p className="font-bold text-2xl">ML</p>
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
